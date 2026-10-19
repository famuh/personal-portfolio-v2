import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { activities, experience } from "@/content/experience";
import SectionHeading from "@/components/shared/SectionHeading";
import Timeline from "@/components/shared/Timeline";
import Reveal from "@/components/shared/Reveal";

const SHOW_PENDING = process.env.NODE_ENV !== "production";

// Professional work as a timeline; leadership and community roles as a
// compact list underneath (full details on /about).
export default function Experience() {
  const roles = activities.filter((a) => !a.pending || SHOW_PENDING);

  return (
    <section aria-labelledby="exp-title" className="section-y">
      <div className="shell flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="exp-title" eyebrow="Experience" title="Where I've done the work." />
          <Link href="/about#experience" className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink">
            Full history & education
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-(--dur-base) group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Timeline items={experience} limit={2} />

        <Reveal className="flex flex-col gap-4 rounded-card border border-line p-6">
          <h3 className="text-sm text-ink-muted">Leadership & community</h3>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {roles.map((a) => (
              <li
                key={`${a.role}-${a.period}`}
                className={`flex flex-col gap-0.5 ${a.pending ? "rounded-control outline-2 outline-offset-4 outline-dashed outline-dev-mark" : ""}`}
              >
                <span className="font-semibold">{a.role}</span>
                <span className="text-sm text-ink-muted">{a.company} · {a.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
