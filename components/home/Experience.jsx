import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience } from "@/content/experience";
import SectionHeading from "@/components/shared/SectionHeading";
import Timeline from "@/components/shared/Timeline";

export default function Experience() {
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
      </div>
    </section>
  );
}
