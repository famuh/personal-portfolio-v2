import { Download } from "lucide-react";
import { profile, socials } from "@/content/site";
import { experience, activities, education, certifications, languages } from "@/content/experience";
import { stack } from "@/content/expertise";
import { Button } from "@/components/ui/button";
import PrintButton from "@/components/cv/PrintButton";

export const metadata = {
  title: "CV",
  description: "CV of Fadhil Muhammad, software engineer and IT consultant for palm oil and plantation systems.",
  alternates: { canonical: "/cv" },
};

// One-page-per-sheet CV generated from the same content files as the site,
// so the two never drift apart. Single column and plain text for ATS
// parsing; print styles (A4) live in globals.css under @media print.
// The downloadable PDF is exported from this page (see CLAUDE.md).

const linkedin = socials.find((s) => s.id === "linkedin");

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

export default function CvPage() {
  return (
    <div className="cv-page shell py-10 print:p-0">
      <div className="mx-auto mb-6 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-sm text-ink-muted">Also available as PDF. Generated from this site&apos;s content.</p>
        <div className="flex gap-2">
          <PrintButton />
          <Button asChild size="sm">
            <a href={profile.cv} download={profile.cvFileName}>
              <Download aria-hidden="true" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      <article className="cv-sheet mx-auto flex max-w-[210mm] flex-col gap-4 rounded-card border border-line bg-canvas p-8 text-[0.9rem] leading-snug shadow-card sm:p-12 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="font-medium">Software Engineer & IT Consultant · Palm oil and plantation systems</p>
          <p className="text-sm text-ink-muted">
            {profile.location} · {profile.email} · {profile.phone} · {linkedin.href.replace("https://www.", "").replace(/\/$/, "")}
          </p>
          <p className="text-sm text-ink-muted">Portfolio and case studies: {profile.url.replace("https://", "")}/work</p>
        </header>

        <Section title="Summary">
          <p className="text-sm">
            Software engineer and IT consultant with 3+ years building mobile, web and backend systems. I lead GEMA
            Plantation and GEMA Factory at Green Harvest Solutions: offline-first field apps, web CMS, .NET Core APIs and ERP
            integration for palm oil estates and mills. I work on site with clients, from field studies and requirement
            gathering to delivery, user training and support, and I lead a small development team. Former Flutter facilitator
            for BEKUP × Dicoding.
          </p>
        </Section>

        <Section title="Skills">
          <dl className="grid gap-1 text-sm">
            {stack.map((g) => (
              <div key={g.domain} className="grid gap-x-3 sm:grid-cols-[9.5rem_1fr]">
                <dt className="font-semibold">{g.domain}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
            <div className="grid gap-x-3 sm:grid-cols-[9.5rem_1fr]">
              <dt className="font-semibold">Ways of working</dt>
              <dd>Field studies, requirement gathering, estimation, Agile delivery, code review, user training, client presentations</dd>
            </div>
          </dl>
        </Section>

        <Section title="Experience">
          <div className="flex flex-col gap-3.5">
            {experience.map((job, i) => (
              <Role key={`${job.company}-${job.period}`} item={job} showSummary={i === 0} />
            ))}
          </div>
        </Section>

        <Section title="Leadership & community">
          <ul className="flex flex-col gap-1.5 text-sm">
            {activities.map((a) => (
              <li key={`${a.role}-${a.period}`} className="cv-item">
                <span className="font-semibold">{a.role}</span>, {a.company} <span className="text-ink-muted">({a.period})</span>: {a.highlights[0]}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education & training">
          <ul className="flex flex-col gap-1 text-sm">
            {education.map((e) => (
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

        <Section title="Certifications & languages">
          <p className="text-sm">{certifications.map((c) => [c.name, c.issuer, c.year].filter(Boolean).join(", ")).join(" · ")}</p>
          <p className="text-sm">{languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(" · ")}</p>
        </Section>
      </article>
    </div>
  );
}
