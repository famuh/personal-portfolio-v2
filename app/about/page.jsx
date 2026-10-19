import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/content/site";
import { activities, experience, education, recognition, certifications, languages } from "@/content/experience";
import { stack, process } from "@/content/expertise";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/shared/PageIntro";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Timeline from "@/components/shared/Timeline";
import Chip from "@/components/shared/Chip";
import ScrollInkText from "@/components/home/ScrollInkText";

export const metadata = {
  title: "About",
  description:
    "About Fadhil Muhammad, IT consultant, developer and analyst from Medan, Indonesia. Experience at DNA Group and BEKUP × Dicoding, education, skills and principles.",
  alternates: { canonical: "/about" },
};

const principles = [
  { title: "Problem before framework", body: "I choose tools after I understand the process. Sometimes that's Flutter or Next.js, sometimes it's a better spreadsheet." },
  { title: "Artefacts over opinions", body: "A process map or ERD on the table ends debates faster than any meeting. I make the thinking visible." },
  { title: "Ship small, ship often", body: "Working increments beat perfect plans. Stakeholders should see real software in the first weeks." },
  { title: "Leave people stronger", body: "The team should be able to run and extend the system without me, so I write things down and explain as I go." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Hi, I'm Fadhil."
        lead={`${profile.roles.join(", ")} from ${profile.location}. I like the part of software that happens before the code: understanding how an organisation runs. Then I design and build what it needs.`}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={profile.cv} download={profile.cvFileName}>
              <Download aria-hidden="true" />
              Download CV (PDF)
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Get in touch
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageIntro>

      <section aria-label="Story" className="shell grid gap-12 pb-(--space-section) lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Above the fold on most screens — no JS-dependent reveal. */}
        <div className="relative aspect-square overflow-hidden rounded-panel bg-surface-2">
          <Image
            src={profile.portrait}
            alt={`Portrait of ${profile.name} in a white shirt against a dark green wall`}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 text-lg">
          <ScrollInkText
            className="text-statement"
            text="I started in multimedia, studied informatics, and found that the most interesting part of software is the conversation before the code."
          />
          <Reveal as="p" index={1} className="measure text-ink-muted">
            Most of my recent work is for palm oil companies. GEMA Plantation takes estate work off paper with an offline Android app, a web CMS and an ERP integration. GEMA Factory brings mill maintenance onto phones. I also rebuilt the product website for Semesta Agro&apos;s plantation ERP.
          </Reveal>
          <Reveal as="p" index={1} className="measure text-ink-muted">
            Before that, at DNA Group&apos;s software division I designed and built a self-ordering system for Android TV kiosks and tablets, plus attendance (face recognition, fake-GPS detection), offline POS and hotel, asset and multi-outlet management features. As a freelancer I take projects from requirement interviews and process diagrams all the way to production. The P3 purchasing, sales and inventory system is the clearest example.
          </Reveal>
          <Reveal as="p" index={2} className="measure text-ink-muted">
            Teaching helps too. As a Flutter facilitator for BEKUP × Dicoding, and earlier as a peer tutor and Best Graduate at Kampus Merdeka, I found that explaining a system clearly and designing it well take the same skill.
          </Reveal>
          <Reveal as="p" index={3} className="measure text-ink-muted">
            Right now I&apos;m a software engineer, and I lead GEMA Plantation and GEMA Factory: I go on site for field studies, gather requirements with clients and estate staff, estimate, present, train users, and support clients online and on site.
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="section-y bg-surface">
        <div className="shell flex flex-col gap-12">
          <SectionHeading id="principles-title" eyebrow="Principles" title="How I like to work" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} index={i} className="flex flex-col gap-3 rounded-card border border-line bg-canvas p-6">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="text-sm text-ink-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" className="text-ink-muted">
            In practice that means six steps: {process.map((p) => p.step).join(" → ")}.{" "}
            <Link href="/#capabilities" className="underline decoration-line-strong underline-offset-4 hover:decoration-accent-ink">See what I deliver at each one.</Link>
          </Reveal>
        </div>
      </section>

      <section id="experience" aria-labelledby="xp-title" className="section-y">
        <div className="shell flex flex-col gap-14">
          <SectionHeading id="xp-title" eyebrow="Experience" title="Professional experience" />
          <Timeline items={experience} />
        </div>
      </section>

      <section id="community" aria-labelledby="community-title" className="section-y border-t border-line">
        <div className="shell flex flex-col gap-14">
          <SectionHeading
            id="community-title"
            eyebrow="Beyond work"
            title="Leadership & community"
            intro="Roles outside paid work where I led, taught or represented a group."
          />
          <Timeline items={activities} />
        </div>
      </section>

      <section aria-labelledby="skills-title" className="section-y border-t border-line">
        <div className="shell flex flex-col gap-12">
          <SectionHeading id="skills-title" eyebrow="Skills" title="Skills by area" intro={`Languages: ${languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(", ")}.`} />
          <div className="grid gap-4 md:grid-cols-2">
            {stack.map((g, i) => (
              <Reveal key={g.domain} index={i % 2} className="flex flex-col gap-4 rounded-card border border-line p-6">
                <h3 className="text-lg font-semibold tracking-tight">{g.domain}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t}><Chip>{t}</Chip></li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="edu-title" className="section-y bg-surface">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-10">
            <SectionHeading id="edu-title" eyebrow="Education & training" title="Education and training" />
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {education.map((e) => (
                <Reveal as="li" key={e.institution} className="flex flex-col gap-1 py-5">
                  <p className="font-mono text-sm text-ink-muted">{e.period}</p>
                  <h3 className="text-lg font-semibold tracking-tight">{e.institution}</h3>
                  <p>{e.detail}</p>
                  {e.note && <p className="text-sm text-ink-muted">{e.note}</p>}
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="Recognition" title="On record" as="h2" />
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {recognition.map((r) => (
                <Reveal as="li" key={r.title} className="flex flex-col gap-1 py-5">
                  <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                  <p className="text-sm text-ink-muted">{r.context}</p>
                </Reveal>
              ))}
              {certifications.map((c) => (
                <Reveal as="li" key={c.name} className="flex flex-col gap-1 py-5">
                  <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
                  {(c.issuer || c.year) && <p className="text-sm text-ink-muted">{[c.issuer, c.year].filter(Boolean).join(", ")}</p>}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
