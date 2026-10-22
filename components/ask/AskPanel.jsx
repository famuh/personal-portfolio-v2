"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowUp, LoaderCircle, ListChecks, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DUR, EASE_OUT_EXPO } from "@/lib/motion";

// What the assistant knows about; each chip asks its question.
const TOPICS = [
  { label: "Case studies", q: "Which case studies can I read about?" },
  { label: "Work experience", q: "What is his work experience?" },
  { label: "Tech stack", q: "Which tech stack does he use?" },
  { label: "Backend & APIs", q: "What backend and API work has he done?" },
  { label: "Mobile apps", q: "What mobile apps has he built?" },
  { label: "Consulting", q: "What can he help with as a consultant?" },
  { label: "How he works", q: "How does he run a project?" },
  { label: "AI in his work", q: "How does he use AI in his work?" },
  { label: "Education & awards", q: "What is his education and recognition?" },
];

const SUGGESTIONS = ["What is GEMA Plantation?", "Apa pengalaman Fadhil di agribisnis?"];

// Small chat panel backed by /api/ask. Keeps the conversation in memory only
// (nothing is stored), and sends the last few turns with each question. Stays
// mounted while closed so the conversation survives; closing just animates it
// out and hides it.
export default function AskPanel({ open, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [showTopics, setShowTopics] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    // Wait a frame for the panel to become visible before focusing.
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, busy]);

  const ask = async (question) => {
    const text = question.trim();
    if (!text || busy) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setError("");
    setShowTopics(false);
    setBusy(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.answer) throw new Error(data.error || "The assistant is unavailable right now.");
      setMessages((m) => [...m, { role: "assistant", content: data.answer }]);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <m.section
      id="ask-panel"
      role="dialog"
      aria-modal="false"
      aria-labelledby="ask-title"
      initial={{ opacity: 0, y: 16, scale: 0.94 }}
      animate={
        open
          ? { opacity: 1, y: 0, scale: 1, visibility: "visible" }
          : { opacity: 0, y: 16, scale: 0.94, transitionEnd: { visibility: "hidden" } }
      }
      transition={{ duration: DUR.base, ease: EASE_OUT_EXPO }}
      style={{ transformOrigin: "bottom right" }}
      className="fixed bottom-20 right-5 z-40 flex border border-line bg-canvas/95 backdrop-blur-xl h-[min(560px,calc(100svh-7rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-card shadow-lift"
    >
      <header className="flex items-start justify-between gap-3 border-b border-line p-4">
        <div>
          <h2 id="ask-title" className="font-semibold">Ask about Fadhil</h2>
          <p className="text-xs text-ink-muted">Answers come from this site&apos;s content. AI can make mistakes.</p>
        </div>
        <div className="flex shrink-0 gap-1">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={() => setShowTopics((s) => !s)}
              aria-pressed={showTopics}
              aria-label="Show topics you can ask about"
              className={cn("flex size-8 items-center justify-center rounded-chip hover:bg-surface-2", showTopics && "bg-surface-2")}
            >
              <ListChecks aria-hidden="true" className="size-4" />
            </button>
          )}
          <button type="button" onClick={onClose} aria-label="Close assistant" className="flex size-8 items-center justify-center rounded-chip hover:bg-surface-2">
            <X aria-hidden="true" className="size-4" />
          </button>
        </div>
      </header>

      <div ref={listRef} className="flex flex-1 flex-col gap-3 overflow-y-auto p-4" aria-live="polite">
        {(messages.length === 0 || showTopics) && (
          <div className="flex flex-col gap-3">
            <p className="text-sm">
              {messages.length === 0 ? "Hi! I answer questions about Fadhil's work. You can ask about:" : "You can ask about:"}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {TOPICS.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => ask(t.q)}
                  className="rounded-chip border border-line bg-surface px-2.5 py-1 text-xs hover:border-ink"
                >
                  {t.label}
                </button>
              ))}
            </div>
            {messages.length === 0 && (
              <>
                <p className="text-sm text-ink-muted">Or try:</p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="rounded-control border border-line bg-canvas/70 px-3 py-2 text-left text-sm hover:border-ink"
                  >
                    {s}
                  </button>
                ))}
              </>
            )}
            <p className="text-xs text-ink-muted">
              This site doesn&apos;t list everything he has worked on. {" "}
              <Link href="/contact" onClick={onClose} className="underline underline-offset-2 hover:text-ink">
                ask him directly
              </Link>
              .
            </p>
          </div>
        )}
        {messages.map((m, i) => (
          <p
            key={i}
            className={cn(
              "max-w-[88%] whitespace-pre-wrap rounded-control px-3 py-2 text-sm",
              m.role === "user" ? "self-end bg-ink text-canvas" : "self-start bg-canvas/80 text-ink"
            )}
          >
            <span className="sr-only">{m.role === "user" ? "You: " : "Assistant: "}</span>
            {m.content}
          </p>
        ))}
        {busy && (
          <p className="flex items-center gap-2 self-start text-sm text-ink-muted">
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
            Thinking…
          </p>
        )}
        {error && <p className="self-start text-sm text-destructive">{error}</p>}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex items-center gap-2 border-t border-line p-3"
      >
        <label htmlFor="ask-input" className="sr-only">Your question</label>
        <input
          id="ask-input"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={600}
          placeholder="Ask a question…"
          className="min-w-0 flex-1 rounded-chip border border-line bg-canvas px-4 py-2 text-sm focus:border-ink focus:outline-none"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Send question"
          className="flex size-9 shrink-0 items-center justify-center rounded-chip bg-ink text-canvas disabled:opacity-40"
        >
          <ArrowUp aria-hidden="true" className="size-4" />
        </button>
      </form>
    </m.section>
  );
}
