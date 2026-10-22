import { buildSystemPrompt } from "@/lib/ask/context";
import { chat, getConfig, ProviderError } from "@/lib/ask/provider";

// "Ask my portfolio" endpoint. Works with any provider configured in
// lib/ask/provider.js; returns 503 until ASK_API_KEY and ASK_MODEL are set.
// The widget itself is shown only when NEXT_PUBLIC_ASK_PORTFOLIO=true.
export const runtime = "nodejs";

const MAX_TURNS = 6; // history sent per request
const MAX_CHARS = 600; // per visitor message
const MAX_ANSWER_CHARS = 1200; // per earlier assistant answer kept in history

// Compact mode builds a smaller prompt per request from the visitor's recent
// questions (see lib/ask/context.js); full mode builds it once.
const COMPACT = process.env.ASK_CONTEXT === "compact";
const FULL_SYSTEM = COMPACT ? null : buildSystemPrompt();
const systemFor = (messages) =>
  FULL_SYSTEM ??
  buildSystemPrompt({
    compact: true,
    query: messages.filter((m) => m.role === "user").slice(-3).map((m) => m.content).join("\n"),
  });

// Answers to opening questions (usually the suggestion chips) are reused for a
// day, so repeat questions don't spend tokens. Per instance, like the limiter.
const CACHE_MS = 24 * 60 * 60 * 1000;
const CACHE_MAX = 100;
const answers = new Map();
const cacheKey = (messages) =>
  messages.length === 1 ? messages[0].content.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim() : null;

function cachedAnswer(key) {
  const hit = key && answers.get(key);
  if (!hit) return null;
  if (Date.now() - hit.at > CACHE_MS) {
    answers.delete(key);
    return null;
  }
  return hit.answer;
}

function remember(key, answer) {
  if (!key) return;
  if (answers.size >= CACHE_MAX) answers.delete(answers.keys().next().value);
  answers.set(key, { answer, at: Date.now() });
}

// Basic in-memory rate limit per IP. On Vercel each serverless instance has
// its own memory, so this is a soft limit; use a shared store (e.g. Upstash
// Redis) if the endpoint ever sees abuse.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 20;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

function sanitize(messages) {
  if (!Array.isArray(messages)) return null;
  const clean = messages
    .filter((m) => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .map((m) => ({ role: m.role, content: m.content.slice(0, m.role === "user" ? MAX_CHARS : MAX_ANSWER_CHARS) }))
    .slice(-MAX_TURNS);
  // The conversation must start with a user turn and end with the visitor's
  // new question.
  while (clean.length && clean[0].role !== "user") clean.shift();
  if (!clean.length || clean.at(-1).role !== "user") return null;
  return clean;
}

const json = (body, status = 200) => Response.json(body, { status });

export async function POST(request) {
  const config = getConfig();
  if (!config) {
    return json({ error: "The assistant isn't configured on this site." }, 503);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return json({ error: "Too many questions in a short time. Please try again in a few minutes." }, 429);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const messages = sanitize(payload?.messages);
  if (!messages) return json({ error: "Invalid request." }, 400);

  const key = cacheKey(messages);
  const cached = cachedAnswer(key);
  if (cached) return json({ answer: cached });

  try {
    const answer = await chat(config, systemFor(messages), messages);
    if (answer) remember(key, answer);
    return json({ answer: answer || "Sorry, I couldn't come up with an answer. Try asking another way." });
  } catch (error) {
    if (error instanceof ProviderError && error.status === 429) {
      return json({ error: "The assistant is busy right now. Please try again shortly." }, 429);
    }
    console.error("ask:", error);
    return json({ error: "The assistant is unavailable right now." }, 502);
  }
}
