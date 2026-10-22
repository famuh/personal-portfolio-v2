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
//   ASK_REASONING_EFFORT  Optional, "openai" provider only. Sent as
//                  reasoning_effort for reasoning models (e.g. "low" for
//                  openai/gpt-oss-120b on Groq). Leave unset for models that
//                  don't support it, such as gpt-4o-mini.

const DEFAULT_BASE = {
  openai: "https://api.openai.com/v1",
  anthropic: "https://api.anthropic.com",
};

const TIMEOUT_MS = 30_000;
// Answers are meant to be two to five sentences. Groq counts this limit against
// the per-minute token budget up front, so keep it tight.
const MAX_OUTPUT_TOKENS = 500;

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
  const reasoningEffort = process.env.ASK_REASONING_EFFORT || undefined;
  return { provider, apiKey, model, baseUrl, reasoningEffort };
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

async function openaiCompatible({ apiKey, model, baseUrl, reasoningEffort }, system, messages) {
  const data = await post(
    `${baseUrl}/chat/completions`,
    { Authorization: `Bearer ${apiKey}` },
    {
      model,
      max_tokens: MAX_OUTPUT_TOKENS,
      ...(reasoningEffort && { reasoning_effort: reasoningEffort }),
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
