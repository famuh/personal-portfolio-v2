import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/content/projects";
import Reveal from "@/components/shared/Reveal";
import Chip from "@/components/shared/Chip";
import Ph from "@/components/shared/Ph";
import ClosingCta from "@/components/home/ClosingCta";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.name} — case study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: `${study.name} — case study`, description: study.summary, type: "article" },
  };
}

const d = (ms) => ({ "--delay": `${ms}ms` });

function Block({ eyebrow, title, children }) {
  return (
    <Reveal as="section" className="grid gap-4 border-t border-line pt-10 md:grid-cols-[14rem_1fr] md:gap-10">
      <p className="eyebrow pt-2 text-ink-muted">{eyebrow}</p>
      <div className="flex flex-col gap-5">
        {title && <h2 className="text-h3">{title}</h2>}
        {children}
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const idx = caseStudies.indexOf(study);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const isPh = (field) => study.placeholders?.includes(field);

  const meta = [
    { label: "Role", value: study.role },
    { label: "Period", value: study.period, ph: isPh("period") },
    study.duration && { label: "Duration", value: study.duration, ph: isPh("duration") },
    { label: "Team", value: study.team, ph: isPh("team") },
    { label: "Status", value: study.status, ph: isPh("status") },
  ].filter(Boolean);

  return (
    <article>
      <header className="shell flex flex-col gap-8 pb-12 pt-12 sm:pt-20">
        <Link href="/work" style={d(0)} className="animate-rise group inline-flex w-fit items-center gap-2 text-sm text-ink-muted hover:text-ink">
          <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-(--dur-base) group-hover:-translate-x-0.5" />
          All work
        </Link>
        <p style={d(60)} className="animate-rise eyebrow flex gap-3 text-ink-muted">
          <span>Case study</span>
          <span aria-hidden="true">·</span>
          <span>{study.kind}</span>
        </p>
        <h1 className="max-w-[20ch] overflow-hidden pb-[0.08em] text-h1">
          <span style={d(120)} className="animate-mask-up block">{study.title}</span>
        </h1>
        <p className="measure text-lead text-ink-muted">{study.summary}</p>

        <dl style={d(380)} className="animate-rise grid gap-6 border-y border-line py-6 sm:grid-cols-2 lg:grid-cols-5">
          {meta.map((m) => (
            <div key={m.label} className={m.label === "Role" ? "lg:col-span-2" : undefined}>
              <dt className="eyebrow text-ink-muted">{m.label}</dt>
              <dd className="mt-1.5"><Ph active={Boolean(m.ph)}>{m.value}</Ph></dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="shell">
        <div style={d(450)} className="animate-rise relative aspect-[16/9] overflow-hidden rounded-panel border border-line bg-surface-2">
          <Image src={study.cover} alt={study.coverAlt} fill priority sizes="(min-width: 1280px) 1200px, 100vw" style={{ objectPosition: study.coverPosition ?? "center top" }} className="object-cover" />
        </div>
      </div>

      <section aria-label="Results" className="shell py-16">
        <ul className="grid gap-4 sm:grid-cols-3">
          {study.results.map((r, i) => (
            <Reveal as="li" key={r.label} index={i} className="flex flex-col gap-2 rounded-card bg-surface p-6">
              <Ph active={isPh("results")}>
                <span className="block text-h2 text-accent-ink">{r.value}</span>
                <span className="block text-ink-muted">{r.label}</span>
              </Ph>
            </Reveal>
          ))}
        </ul>
      </section>

      <div className="shell flex flex-col gap-14 pb-(--space-section)">
        <Block eyebrow="Context" title="The problem">
          <p className="measure text-lead">{study.problem}</p>
        </Block>

        <Block eyebrow="My role" title="What I owned">
          <ul className="measure flex flex-col gap-3">
            {study.responsibilities.map((r) => (
              <li key={r} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block eyebrow="Solution" title="What we built">
          <p className="measure text-lead">{study.solution}</p>
          <ul className="flex flex-wrap gap-2" aria-label="Stack">
            {study.stack.map((t) => (
              <li key={t}><Chip>{t}</Chip></li>
            ))}
          </ul>
        </Block>

        <Block eyebrow="Decisions" title="Decisions and trade-offs">
          <div className="grid gap-4 md:grid-cols-2">
            {study.decisions.map((dcs) => (
              <div key={dcs.title} className="flex flex-col gap-2 rounded-card border border-line p-6">
                <h3 className="font-medium">{dcs.title}</h3>
                <p className="text-ink-muted">{dcs.body}</p>
              </div>
            ))}
          </div>
        </Block>

        {study.gallery?.length > 0 && (
          <Block eyebrow="Artefacts">
            {study.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-surface-2">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover object-top" />
              </div>
            ))}
          </Block>
        )}

        <Block eyebrow="Reflection" title="What I'd do differently">
          <p className="measure text-statement">{study.lessons}</p>
        </Block>

        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-3 rounded-panel border border-line bg-surface p-8 transition-colors duration-(--dur-base) hover:border-ink sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <span className="flex flex-col gap-2">
              <span className="eyebrow text-ink-muted">Next case study</span>
              <span className="text-h3">{next.title}</span>
            </span>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-chip bg-ink text-canvas transition-transform duration-(--dur-base) group-hover:translate-x-1">
              <ArrowRight aria-hidden="true" className="size-5" />
            </span>
          </Link>
        </Reveal>
      </div>

      <ClosingCta />
    </article>
  );
}
