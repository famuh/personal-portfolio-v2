"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { archive, archiveGroups } from "@/content/projects";
import { DUR, EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import Chip from "@/components/shared/Chip";

const FILTERS = ["All", ...archiveGroups];

// Filterable archive. Filters are real buttons with aria-pressed; the list
// re-flows with a short layout animation.
export default function Archive() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? archive : archive.filter((p) => p.group === filter);

  return (
    <div className="flex flex-col gap-10">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count = f === "All" ? archive.length : archive.filter((p) => p.group === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-chip border px-4 py-2 text-sm transition-colors duration-(--dur-base)",
                filter === f ? "border-ink bg-ink text-canvas" : "border-line hover:border-ink"
              )}
            >
              {f} <span className="font-mono text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <m.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((p) => (
            <m.li
              layout
              key={p.name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: DUR.base, ease: EASE_OUT_EXPO }}
              className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface"
            >
              {/* Entries without a screenshot stay text-only rather than showing an empty frame. */}
              {p.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  <Image
                    src={p.image}
                    alt={`${p.name} — screenshot`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-top transition-transform duration-(--dur-slow) ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <span className="eyebrow shrink-0 pt-1 text-ink-muted">{p.group}</span>
                </div>
                <p className="text-sm text-ink-muted">{p.description}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Stack">
                  {p.stack.map((t) => (
                    <li key={t}><Chip>{t}</Chip></li>
                  ))}
                </ul>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 text-sm font-medium underline decoration-line-strong underline-offset-4 hover:decoration-accent-ink"
                  >
                    {p.linkLabel}
                    <span className="sr-only"> for {p.name} (opens in a new tab)</span>
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                )}
              </div>
            </m.li>
          ))}
        </AnimatePresence>
      </m.ul>
    </div>
  );
}
