"use client";

import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import Chip from "./Chip";
import Ph from "./Ph";

// Vertical timeline whose line draws as you scroll, tying each role to the
// reading position. `limit` trims highlights for the homepage summary.
// Fields listed in an item's `placeholders` array are marked with <Ph>.
export default function Timeline({ items, limit, headingLevel: H = "h3" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-line md:left-[calc(12rem+5px)]">
        <m.div style={{ scaleY: fill }} className="size-full origin-top bg-accent-ink" />
      </div>

      <ol className="flex flex-col gap-14">
        {items.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} index={i % 2} className="relative grid gap-3 pl-8 md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0">
            <span aria-hidden="true" className="absolute left-0 top-2 size-[11px] rounded-full border-2 border-canvas bg-accent ring-1 ring-line-strong md:left-[12rem]" />
            <div className="flex flex-col gap-1 md:pt-0.5">
              <p className="font-mono text-sm"><Ph active={job.placeholders?.includes("period")}>{job.period}</Ph></p>
              <p className="text-sm text-ink-muted"><Ph active={job.placeholders?.includes("mode")}>{job.mode}</Ph></p>
            </div>
            <div className="flex flex-col gap-3 md:pl-10">
              <div>
                <H className="text-h3">{job.role}</H>
                <p className="font-medium text-ink-muted"><Ph active={job.placeholders?.includes("company")}>{job.company}</Ph></p>
              </div>
              <ul className="flex flex-col gap-2">
                {(limit ? job.highlights.slice(0, limit) : job.highlights).map((h) => (
                  <li key={h} className="measure flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {job.tags && (
                <ul className="flex flex-wrap gap-2 pt-1" aria-label="Focus areas">
                  {job.tags.map((t) => (
                    <li key={t}><Chip tone="solid">{t}</Chip></li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
