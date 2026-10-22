"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, m } from "framer-motion";
import { BotMessageSquare, X } from "lucide-react";
import { DUR, EASE_OUT_EXPO } from "@/lib/motion";

// Floating "Ask about Fadhil" button. The chat panel's code is only fetched
// the first time someone opens it, so it costs nothing on page load. Idle and
// hover effects are CSS (the ask-fab utility in globals.css).
const AskPanel = dynamic(() => import("./AskPanel"), { ssr: false });

const HINT_MS = 6000; // how long the label shows after the button appears

export default function AskLauncher() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hint, setHint] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setHint(false), HINT_MS);
    return () => clearTimeout(id);
  }, []);

  const toggle = () => {
    setLoaded(true);
    setHint(false);
    setOpen((o) => !o);
  };

  const showLabel = !open && (hint || hover);

  return (
    <>
      {loaded && <AskPanel open={open} onClose={() => setOpen(false)} />}
      {/* The wrapper owns the entrance; the button keeps its CSS hover transform. */}
      <m.div
        initial={{ opacity: 0, scale: 0.3, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 360, damping: 20 }}
        className="fixed bottom-5 right-5 z-40"
      >
        <AnimatePresence>
          {showLabel && (
            <m.span
              aria-hidden="true"
              initial={{ opacity: 0, x: 12, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: DUR.base, ease: EASE_OUT_EXPO }}
              className="glass pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-chip px-3 py-1.5 text-sm font-medium"
            >
              Ask about Fadhil
            </m.span>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={toggle}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          aria-expanded={open}
          aria-controls="ask-panel"
          aria-label={open ? "Close assistant" : "Ask about Fadhil"}
          className="ask-fab glass group flex size-12 items-center justify-center rounded-chip text-ink"
        >
          {!open && (
            <span aria-hidden="true" className="animate-ask-ping pointer-events-none absolute inset-0 -z-10 rounded-chip border-2 border-accent" />
          )}
          <AnimatePresence mode="wait" initial={false}>
            <m.span
              key={open ? "close" : "ask"}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: DUR.fast }}
              className="flex"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <BotMessageSquare aria-hidden="true" className="size-5 text-accent-ink group-hover:text-on-accent group-focus-visible:text-on-accent" />
              )}
            </m.span>
          </AnimatePresence>
        </button>
      </m.div>
    </>
  );
}
