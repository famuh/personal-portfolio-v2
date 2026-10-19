import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notes } from "@/content/notes";
import PageIntro from "@/components/shared/PageIntro";
import Reveal from "@/components/shared/Reveal";

export const metadata = {
  title: "Notes",
  description: "Short write-ups by Fadhil Muhammad about the decisions behind his projects.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <>
      <PageIntro eyebrow="Notes" title="Notes" lead="Short write-ups about decisions behind the work: what the constraint was, what I chose, and what it cost." />
      <section aria-label="All notes" className="shell pb-(--space-section)">
        <ul className="flex flex-col divide-y divide-line border-y border-line">
          {notes.map((n, i) => (
            <Reveal as="li" key={n.slug} index={i}>
              <Link href={`/notes/${n.slug}`} className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <div className="flex max-w-2xl flex-col gap-2">
                  <p className="text-sm text-ink-muted">{n.date} · {n.readingTime}</p>
                  <h2 className="text-h3 group-hover:text-accent-ink">{n.title}</h2>
                  <p className="text-ink-muted">{n.summary}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium">
                  Read
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-(--dur-base) group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
