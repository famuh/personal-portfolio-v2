import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getNote, notes } from "@/content/notes";
import { getCaseStudy } from "@/content/projects";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: { title: note.title, description: note.summary, type: "article" },
  };
}

const d = (ms) => ({ "--delay": `${ms}ms` });

function Block({ block }) {
  if (block.type === "h2") return <h2 className="mt-6 text-h3">{block.text}</h2>;
  if (block.type === "list")
    return (
      <ul className="flex flex-col gap-3">
        {block.items.map((it) => (
          <li key={it} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  return <p>{block.text}</p>;
}

export default async function NotePage({ params }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();
  const study = note.relatedCaseStudy && getCaseStudy(note.relatedCaseStudy);

  return (
    <article className="shell pb-(--space-section)">
      <header className="mx-auto flex max-w-[62ch] flex-col gap-6 pb-10 pt-12 sm:pt-20">
        <Link href="/notes" style={d(0)} className="animate-rise group inline-flex w-fit items-center gap-2 text-sm text-ink-muted hover:text-ink">
          <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-(--dur-base) group-hover:-translate-x-0.5" />
          All notes
        </Link>
        <p className="text-sm text-ink-muted">{note.date} · {note.readingTime}</p>
        <h1 className="text-h1">{note.title}</h1>
        <p className="text-lead text-ink-muted">{note.summary}</p>
      </header>

      <div className="mx-auto flex max-w-[62ch] flex-col gap-5 border-t border-line pt-10 text-lg leading-relaxed">
        {note.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {study && (
        <div className="mx-auto mt-14 max-w-[62ch]">
          <Link
            href={`/work/${study.slug}`}
            className="group flex items-center justify-between gap-6 rounded-card border border-line bg-surface p-6 transition-colors duration-(--dur-base) hover:border-ink"
          >
            <span className="flex flex-col gap-1">
              <span className="text-sm text-ink-muted">Case study</span>
              <span className="font-semibold">{study.title}</span>
            </span>
            <ArrowRight aria-hidden="true" className="size-5 shrink-0 transition-transform duration-(--dur-base) group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </article>
  );
}
