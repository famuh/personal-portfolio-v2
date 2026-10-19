"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";

// Floating "Ask about Fadhil" button. The chat panel's code is only fetched
// the first time someone opens it, so it costs nothing on page load.
const AskPanel = dynamic(() => import("./AskPanel"), { ssr: false });

export default function AskLauncher() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toggle = () => {
    setLoaded(true);
    setOpen((o) => !o);
  };

  return (
    <>
      {loaded && <AskPanel open={open} onClose={() => setOpen(false)} />}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="ask-panel"
        className="glass fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-chip px-4 py-2.5 text-sm font-medium shadow-lift transition-transform duration-(--dur-base) hover:-translate-y-0.5"
      >
        <Sparkles aria-hidden="true" className="size-4 text-accent-ink" />
        {open ? "Close" : "Ask about Fadhil"}
      </button>
    </>
  );
}
