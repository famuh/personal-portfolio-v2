import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/content/site";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Ph from "@/components/shared/Ph";
import StatTile, { stats } from "./Numbers";

const tile = "rounded-card border border-line bg-surface p-6";

// About + numbers as one bento: portrait, short intro, four stats, and a
// "right now" tile on a soft gradient.
export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y pt-0">
      <div className="shell flex flex-col gap-10">
        <SectionHeading id="about-title" eyebrow="About" title="Engineer by trade, analyst by habit." />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-12">
          <Reveal className="relative col-span-2 min-h-[380px] overflow-hidden rounded-card bg-surface-2 lg:col-span-4 lg:row-span-3">
            <Image
              src={profile.portrait}
              alt={`Portrait of ${profile.name} in a white shirt against a dark green wall`}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_35%]"
            />
            <p className="glass absolute bottom-4 left-4 flex items-center gap-1.5 rounded-chip px-3 py-1.5 text-sm">
              <MapPin aria-hidden="true" className="size-3.5" />
              Medan, Indonesia · {profile.timezone}
            </p>
          </Reveal>

          <Reveal index={1} className={`${tile} col-span-2 flex flex-col justify-between gap-6 lg:col-span-8`}>
            <p className="text-statement">
              I start with the problem, not the framework. I sit with the people doing the work, map how it really happens, then design and build the system behind it.
            </p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <p className="measure text-sm text-ink-muted">
                Self-ordering kiosks for a hospitality group, a purchasing and inventory platform, apps on the Play Store, and a Flutter cohort I helped teach.
              </p>
              <Link href="/about" className="group inline-flex items-center gap-1.5 text-sm font-medium">
                More about me
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-(--dur-base) group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="lg:col-span-2">
              <StatTile stat={s} className={`${tile} h-full`} />
            </Reveal>
          ))}

          <Reveal index={2} className="bg-mesh relative col-span-2 overflow-hidden rounded-card border border-line p-5 lg:col-span-8">
            <div className="glass flex flex-col gap-1 rounded-control p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="text-sm text-ink-muted">Right now</p>
              <p className="font-medium"><Ph>{profile.currentRole}</Ph></p>
              <p className="text-sm text-ink-muted">B. Informatics Engineering, GPA 3.91</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
