import Link from "next/link";
import { Download } from "lucide-react";
import { profile, socials } from "@/content/site";
import { experience, activities, education, certifications, languages } from "@/content/experience";
import { stack } from "@/content/expertise";
import { cvCopy, localize } from "@/content/cv";
import { Button } from "@/components/ui/button";
import PrintButton from "@/components/cv/PrintButton";

// One-page-per-sheet CV generated from the same content files as the site,
// so the two never drift apart. Single column and plain text for ATS
// parsing; print styles (A4) live in globals.css under @media print.
// The downloadable PDFs are exported from /cv and /cv/id (see CLAUDE.md).

const linkedin = socials.find((s) => s.id === "linkedin");
const bare = (url) => url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");

function Section({ title, children }) {
  return (
    <section className="cv-section flex flex-col gap-2.5 border-t border-line pt-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">{title}</h2>
      {children}
    </section>
  );
}

function Role({ item, showSummary }) {
  return (
    <article className="cv-item flex flex-col gap-1">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold">
          {item.role} <span className="font-normal text-ink-muted">· {item.company}</span>
        </h3>
        <p className="text-sm tabular-nums text-ink-muted">{item.period}</p>
      </div>
      {item.mode && <p className="text-xs text-ink-muted">{item.mode}</p>}
      {showSummary && item.summary && <p className="text-sm">{item.summary}</p>}
      <ul className="ml-4 list-disc text-sm marker:text-ink-muted">
        {item.highlights.map((h) => (
          <li key={h} className="pl-1">{h}</li>
        ))}
      </ul>
    </article>
  );
}

export default function CvSheet({ lang = "en" }) {
  const copy = cvCopy[lang];
  const pdf = lang === "id" ? { href: profile.cvId, name: profile.cvIdFileName } : { href: profile.cv, name: profile.cvFileName };
  const jobs = localize(experience, lang, "experience");
  const roles = localize(activities, lang, "activities");
  const schools = localize(education, lang, "education");
  const portfolio = `${profile.url}/work`;

  return (
    <div className="cv-page shell py-10 print:p-0">
      <div className="mx-auto mb-6 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-sm text-ink-muted">{copy.toolbar.note}</p>
        <div className="flex gap-2">
          <Button asChild size="sm" variant="ghost">
            <Link href={copy.toolbar.switchHref} hrefLang={lang === "id" ? "en" : "id"}>{copy.toolbar.switchLabel}</Link>
          </Button>
          <PrintButton />
          <Button asChild size="sm">
            <a href={pdf.href} download={pdf.name}>
              <Download aria-hidden="true" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      <article lang={copy.lang} className="cv-sheet mx-auto flex max-w-[210mm] flex-col gap-4 rounded-card border border-line bg-canvas p-8 text-[0.9rem] leading-snug shadow-card sm:p-12 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="font-medium">{copy.headline}</p>
          <p className="text-sm text-ink-muted">
            {copy.location} · {profile.email} · {profile.phone} · <a href={linkedin.href}>{bare(linkedin.href)}</a>
          </p>
          <p className="text-sm text-ink-muted">
            {copy.portfolioLabel}: <a href={portfolio} className="underline underline-offset-2">{bare(portfolio)}</a>
          </p>
        </header>

        <Section title={copy.sections.summary}>
          <p className="text-sm">{copy.summary}</p>
        </Section>

        <Section title={copy.sections.skills}>
          <dl className="grid gap-1 text-sm">
            {stack.map((g) => (
              <div key={g.domain} className="grid gap-x-3 sm:grid-cols-[11rem_1fr]">
                <dt className="font-semibold">{copy.domains?.[g.domain] ?? g.domain}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
            <div className="grid gap-x-3 sm:grid-cols-[11rem_1fr]">
              <dt className="font-semibold">{copy.waysOfWorking.label}</dt>
              <dd>{copy.waysOfWorking.value}</dd>
            </div>
          </dl>
        </Section>

        <Section title={copy.sections.experience}>
          <div className="flex flex-col gap-3.5">
            {jobs.map((job, i) => (
              <Role key={`${job.company}-${job.period}`} item={job} showSummary={i === 0} />
            ))}
          </div>
        </Section>

        {copy.projects?.length > 0 && (
          <Section title={copy.sections.projects}>
            <div className="flex flex-col gap-3.5">
              {copy.projects.map((p) => (
                <Role key={p.name} item={{ role: p.name, company: p.context, period: p.period, highlights: p.highlights }} />
              ))}
            </div>
          </Section>
        )}

        <Section title={copy.sections.activities}>
          <ul className="flex flex-col gap-1.5 text-sm">
            {roles.map((a) => (
              <li key={`${a.role}-${a.period}`} className="cv-item">
                <span className="font-semibold">{a.role}</span>, {a.company} <span className="text-ink-muted">({a.period})</span>: {a.highlights[0]}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={copy.sections.education}>
          <ul className="flex flex-col gap-1 text-sm">
            {schools.map((e) => (
              <li key={e.institution} className="grid gap-x-4 sm:grid-cols-[1fr_auto]">
                <span>
                  <span className="font-semibold">{e.institution}</span>, {e.detail}
                  {e.note && <span className="text-ink-muted"> · {e.note}</span>}
                </span>
                <span className="tabular-nums text-ink-muted sm:text-right">{e.period}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={copy.sections.certifications}>
          <p className="text-sm">{certifications.map((c) => [c.name, c.issuer, c.year].filter(Boolean).join(", ")).join(" · ")}</p>
          <p className="text-sm">
            {languages.map((l) => copy.languages?.[l.name] ?? `${l.name} (${l.level.toLowerCase()})`).join(" · ")}
          </p>
        </Section>
      </article>
    </div>
  );
}
