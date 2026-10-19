import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CaseStudyBento from "./CaseStudyBento";

export default function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-y">
      <div className="shell flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title="Four projects, start to finish."
            intro="A short preview of each. The case studies cover the problem, my role, the decisions and the results."
          />
          <Link href="/work" className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink">
            All projects
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-(--dur-base) group-hover:translate-x-0.5" />
          </Link>
        </div>
        <CaseStudyBento />
      </div>
    </section>
  );
}
