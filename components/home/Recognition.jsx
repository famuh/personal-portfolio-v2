import { recognition, certifications } from "@/content/experience";
import { testimonials } from "@/content/placeholders";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Ph from "@/components/shared/Ph";

// Bento: lead testimonial on a gradient (glass quote card), two smaller
// quotes, then what's on record and certifications.
export default function Recognition() {
  const [lead, ...rest] = testimonials;

  return (
    <section aria-labelledby="proof-title" className="section-y">
      <div className="shell flex flex-col gap-10">
        <SectionHeading id="proof-title" eyebrow="Recognition" title="What people say, and what's on record." />

        <div className="grid gap-4 lg:grid-cols-6">
          <Reveal as="figure" className="bg-mesh flex rounded-card border border-line p-3 lg:col-span-4 lg:row-span-2">
            <div className="glass flex flex-1 flex-col justify-between gap-10 rounded-control p-6 sm:p-10">
              <blockquote className="text-statement">
                <Ph>“{lead.quote}”</Ph>
              </blockquote>
              <figcaption className="flex flex-col text-sm">
                <span className="font-semibold"><Ph>{lead.name}</Ph></span>
                <span className="text-ink-muted"><Ph>{lead.role}</Ph></span>
              </figcaption>
            </div>
          </Reveal>

          {rest.map((t, i) => (
            <Reveal as="figure" key={t.name} index={i + 1} className="flex flex-col justify-between gap-6 rounded-card border border-line bg-surface p-6 lg:col-span-2">
              <blockquote><Ph>“{t.quote}”</Ph></blockquote>
              <figcaption className="flex flex-col text-sm">
                <span className="font-semibold"><Ph>{t.name}</Ph></span>
                <span className="text-ink-muted"><Ph>{t.role}</Ph></span>
              </figcaption>
            </Reveal>
          ))}

          <Reveal className="rounded-card border border-line p-6 lg:col-span-3">
            <h3 className="mb-4 text-sm text-ink-muted">On record</h3>
            <ul className="flex flex-col divide-y divide-line">
              {recognition.map((r) => (
                <li key={r.title} className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-semibold">{r.title}</span>
                  <span className="text-sm text-ink-muted sm:text-right">{r.context}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1} className="rounded-card border border-line p-6 lg:col-span-3">
            <h3 className="mb-4 text-sm text-ink-muted">Certifications & programmes</h3>
            <ul className="flex flex-col divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-semibold">{c.name}</span>
                  <span className="font-mono text-xs text-ink-muted">{c.issuer}, {c.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
