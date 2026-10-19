"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/content/site";
import { cn } from "@/lib/utils";

// Email as a mailto link plus a copy button — recruiters often prefer to
// paste the address into their own client.
export default function CopyEmail({ className }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className={cn("inline-flex items-center gap-1 rounded-chip border border-line-strong p-1 pl-5", className)}>
      <a href={`mailto:${profile.email}`} className="truncate font-mono text-sm hover:text-accent-ink">
        {profile.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="flex size-9 shrink-0 items-center justify-center rounded-chip bg-surface-2 transition-colors duration-(--dur-base) hover:bg-ink hover:text-canvas"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
