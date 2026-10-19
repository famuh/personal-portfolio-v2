import Image from "next/image";
import { designGallery, projectCount } from "@/content/projects";
import PageIntro from "@/components/shared/PageIntro";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CaseStudyBento from "@/components/home/CaseStudyBento";
import Archive from "@/components/work/Archive";

export const metadata = {
  title: "Work",
  description:
    "Case studies and project archive by Fadhil Muhammad: a self-ordering kiosk, a purchasing-sales-inventory system, a waste pickup platform, and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow={`${projectCount} projects`}
        title="Work"
        lead="Four case studies first. Below them: smaller client builds, design work, and the course projects I learned on."
      />

      <section aria-labelledby="cs-title" className="shell pb-(--space-section)">
        <h2 id="cs-title" className="sr-only">Case studies</h2>
        {/* First tile is above the fold here, so it renders without a reveal. */}
        <CaseStudyBento revealFirst={false} />
      </section>

      <section aria-labelledby="archive-title" className="section-y border-t border-line bg-surface">
        <div className="shell flex flex-col gap-12">
          <SectionHeading
            id="archive-title"
            eyebrow="Archive"
            title="Other projects"
            intro="Client builds, prototypes and course projects. The learning projects stay for context."
          />
          <Archive />
        </div>
      </section>

      <section aria-labelledby="design-title" className="section-y">
        <div className="shell flex flex-col gap-12">
          <SectionHeading
            id="design-title"
            eyebrow="Visual design"
            title="Posters and print"
            intro="Mostly for BITSMIKRO and local businesses, from my multimedia school days onward."
          />
          <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
            {designGallery.map((img, i) => (
              <Reveal as="li" key={img.src} index={i % 3} className="break-inside-avoid overflow-hidden rounded-card border border-line bg-surface-2">
                <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="h-auto w-full" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
