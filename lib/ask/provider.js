// Provider-agnostic chat call for "Ask my portfolio". Configure with env vars:
//
//   ASK_PROVIDER   "openai" (default) — any OpenAI-compatible /chat/completions
//                  API: OpenAI, Google Gemini, Groq, OpenRouter, DeepSeek,
//                  Mistral, Together, a local Ollama, …
//                  "anthropic" — the Anthropic Messages API.
//   ASK_API_KEY    API key for that provider (server-side only).
//   ASK_MODEL      Model name, e.g. "gpt-4o-mini", "gemini-2.5-flash",
//                  "llama-3.3-70b-versatile", "claude-haiku-5-5".
//   ASK_BASE_URL   Optional. Defaults to the provider's public endpoint; set it
//                  for Gemini, Groq, OpenRouter, Ollama, etc. Examples:
//                    Gemini     https://generativelanguage.googleapis.com/v1beta/openai
//                    Groq       https://api.groq.com/openai/v1
//                    OpenRouter https://openrouter.ai/api/v1
//                    Ollama     http://localhost:11434/v1

const DEFAULT_BASE = {
  openai: "https://api.openai.com/v1",
  anthropic: "https://api.anthropic.com",
};

const TIMEOUT_MS = 30_000;
const MAX_OUTPUT_TOKENS = 800;

export class ProviderError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export function getConfig() {
  const provider = (process.env.ASK_PROVIDER || "openai").toLowerCase();
  const apiKey = process.env.ASK_API_KEY;
  const model = process.env.ASK_MODEL;
  if (!apiKey || !model || !DEFAULT_BASE[provider]) return null;
  const baseUrl = (process.env.ASK_BASE_URL || DEFAULT_BASE[provider]).replace(/\/+$/, "");
  return { provider, apiKey, model, baseUrl };
}

async function post(url, headers, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data?.error?.message || data?.message || res.statusText;
    throw new ProviderError(`Provider returned ${res.status}: ${detail}`, res.status);
  }
  return data;
}

async function openaiCompatible({ apiKey, model, baseUrl }, system, messages) {
  const data = await post(
    `${baseUrl}/chat/completions`,
    { Authorization: `Bearer ${apiKey}` },
    {
      model,
      max_tokens: MAX_OUTPUT_TOKENS,
      messages: [{ role: "system", content: system }, ...messages],
    }
  );
  return data?.choices?.[0]?.message?.content ?? "";
}

async function anthropicMessages({ apiKey, model, baseUrl }, system, messages) {
  const data = await post(
    `${baseUrl}/v1/messages`,
    { "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
    { model, max_tokens: MAX_OUTPUT_TOKENS, system, messages }
  );
  return (data?.content ?? [])
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");
}

const ADAPTERS = { openai: openaiCompatible, anthropic: anthropicMessages };

// messages: [{ role: "user" | "assistant", content: string }]
export async function chat(config, system, messages) {
  const text = await ADAPTERS[config.provider](config, system, messages);
  return text.trim();
}
