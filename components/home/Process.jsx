"use client";

import { useRef } from "react";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { MapPin, NotebookPen, Presentation, Users } from "lucide-react";
import { practice, process } from "@/content/expertise";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

// How I work: a progress line fills as the section scrolls past (horizontal
// on desktop, vertical on mobile). The line is decorative; the steps are an <ol>.
// Below it, "In practice" tiles describe how projects actually run.
const ICONS = { MapPin, NotebookPen, Presentation, Users };

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const fill = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section aria-labelledby="process-title" className="section-y bg-surface">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          id="process-title"
          eyebrow="How I work"
          title="How I run a project"
          intro="Six steps, each ending with something the client can look at, so decisions get made while they're still cheap."
        />

        <div ref={ref} className="relative">
          {/* vertical line (mobile) */}
          <div aria-hidden="true" className="absolute left-[13px] top-0 h-full w-px bg-line lg:hidden">
            <m.div style={{ scaleY: fill }} className="size-full origin-top bg-accent-ink" />
          </div>
          {/* horizontal line (desktop) */}
          <div aria-hidden="true" className="absolute left-0 top-[13px] hidden h-px w-full bg-line lg:block">
            <m.div style={{ scaleX: fill }} className="size-full origin-left bg-accent-ink" />
          </div>

          <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-6">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} index={i} className="flex gap-5 lg:flex-col lg:gap-4">
                <span aria-hidden="true" className="relative flex size-7 shrink-0 items-center justify-center rounded-full border border-line-strong bg-canvas font-mono text-xs">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-h3">{p.step}</h3>
                  <p className="text-sm text-ink-muted">{p.body}</p>
                  <p className="mt-1 font-mono text-xs text-accent-ink">{p.artefact}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm text-ink-muted">In practice</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practice.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <Reveal as="li" key={p.title} index={i} className="flex flex-col gap-3 rounded-card border border-line bg-canvas p-5">
                  <Icon aria-hidden="true" className="size-5 text-accent-ink" />
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-ink-muted">{p.body}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
