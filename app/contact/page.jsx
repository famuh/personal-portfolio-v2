import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/content/site";
import { faq } from "@/content/expertise";
import PageIntro from "@/components/shared/PageIntro";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CopyEmail from "@/components/shared/CopyEmail";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Fadhil Muhammad about IT consulting, senior developer or analyst roles, or a project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Contact"
        lead="A question about a system, a process that should be software, or a collaboration? A few lines is enough to start."
      >
        <CopyEmail />
      </PageIntro>

      <section aria-label="Contact options" className="shell grid gap-14 pb-(--space-section) lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-3 rounded-card border border-line bg-surface p-6">
            <p className="eyebrow text-ink-muted">Currently</p>
            <p className="flex items-center gap-2.5 font-medium">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              {profile.now}
            </p>
            <p className="text-sm text-ink-muted">
              Not looking for a new role. Happy to talk about consulting questions and collaborations. {profile.location.split(",")[0]}, {profile.timezone}.
            </p>
          </Reveal>

          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {socials.map((s, i) => {
              const external = s.href.startsWith("http");
              return (
                <Reveal as="li" key={s.id} index={i}>
                  <a
                    href={s.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="flex flex-col">
                      <span className="text-lg font-semibold tracking-tight">{s.label}</span>
                      <span className="font-mono text-sm text-ink-muted">{s.handle}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-5 transition-transform duration-(--dur-base) group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal className="rounded-panel border border-line bg-surface p-6 sm:p-10">
          <h2 className="mb-8 text-h3">Send a message</h2>
          <ContactForm />
        </Reveal>
      </section>

      <section aria-labelledby="faq-title" className="section-y border-t border-line">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Common questions" />
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="relative size-4 shrink-0">
                    <span className="absolute inset-x-0 top-1/2 h-px bg-ink" />
                    <span className="absolute inset-y-0 left-1/2 w-px bg-ink transition-transform duration-(--dur-base) group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="measure pt-3 text-ink-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
