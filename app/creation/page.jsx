"use client";

import { Bodoni_Moda, Caveat_Brush } from "next/font/google";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import HeroStage from "./_components/HeroStage";
import RevealStage from "./_components/RevealStage";
import FeaturedProject from "./_components/FeaturedProject";
import CategoryDivider from "./_components/CategoryDivider";
import WorksMenu from "./_components/WorksMenu";
import OtherWorks from "./_components/OtherWorks";
import SplitWords from "./_components/SplitWords";
import { featuredProjects, otherProjects } from "./_components/projects";
import {
  heroCopy,
  revealCopy,
  worksIntro,
  statement,
  pillars,
  ledgerRows,
  faqItems,
  footerScript,
} from "./_components/content";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
});

const FURNITURE = "text-[10.5px] uppercase tracking-[0.18em] font-medium";
const EASE = [0.16, 1, 0.3, 1];

function FeaturedStack() {
  let lastCategory = null;

  return featuredProjects.map((project, i) => {
    const showDivider = project.category !== lastCategory;
    lastCategory = project.category;
    return (
      <div key={project.name}>
        {showDivider && <CategoryDivider label={project.category} />}
        <FeaturedProject project={project} index={i} bodoniFont={bodoni.style.fontFamily} />
      </div>
    );
  });
}

function WorksSection() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:px-12">
        <p className={`${FURNITURE} text-white/40`}>Selected Works</p>
        <p className="mt-3 max-w-xl text-white/60">{worksIntro}</p>
      </div>

      {reduced ? (
        <FeaturedStack />
      ) : (
        <>
          <div className="xl:hidden">
            <FeaturedStack />
          </div>
          <WorksMenu projects={featuredProjects} bodoniFont={bodoni.style.fontFamily} />
        </>
      )}

      <OtherWorks projects={otherProjects} />
    </section>
  );
}

function StatementBand() {
  return (
    <section className="bg-primary px-6 py-24 sm:px-12 xl:py-32">
      <div className="mx-auto max-w-5xl text-center text-white">
        <SplitWords
          text={statement.headline}
          as="h2"
          className="text-3xl font-semibold leading-tight sm:text-5xl xl:text-6xl"
          staggerMs={38}
        />
        <p className="mx-auto mt-6 max-w-2xl text-lg italic text-white/60">
          {statement.clause}
        </p>
        <p
          style={{ fontFamily: caveat.style.fontFamily }}
          className="mt-8 inline-block rotate-2 text-2xl text-accent-hover sm:text-3xl"
        >
          {statement.script}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          >
            <p className={`${FURNITURE} text-white/50`}>{p.label}</p>
            <p className="mt-3 text-white/70">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ToolkitLedger() {
  return (
    <section className="bg-primary px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <p className={`${FURNITURE} text-white/40`}>The Toolkit</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {ledgerRows.map((row, i) => (
            <motion.div
              key={row.discipline}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
              className="rounded-2xl bg-black/20 p-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-semibold text-accent-hover">{row.discipline}</span>
                <span className="text-sm font-semibold text-white/50">{row.figure}</span>
              </div>
              <p className="mt-2 italic text-white/60">{row.approach}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-primary px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <p className={`${FURNITURE} text-white/40`}>Questions</p>
        <div className="mt-6 flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="group rounded-2xl bg-black/20 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-white">
                <span className="font-medium">{item.q}</span>
                <span className="relative h-4 w-4 shrink-0 text-accent-hover">
                  <span className="absolute inset-0 my-auto h-px w-4 bg-current" />
                  <span className="absolute inset-0 mx-auto h-4 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-3 text-white/70">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreationFooter() {
  return (
    <footer className="bg-primary px-6 py-20 text-center sm:px-12">
      <p
        style={{ fontFamily: caveat.style.fontFamily }}
        className="-rotate-1 text-3xl text-accent-hover sm:text-4xl"
      >
        {footerScript}
      </p>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="mt-8 uppercase bg-transparent text-accent-hover border-accent-hover rounded-full hover:bg-accent-hover hover:text-primary transition-all duration-500"
      >
        <Link href="/contact">Start a project</Link>
      </Button>
      <div className="mt-10 flex justify-center">
        <Social
          containerStyle="flex gap-6"
          iconStyles="w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
        />
      </div>
    </footer>
  );
}

export default function CreationPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div style={{ fontFamily: bodoni.style.fontFamily }}>
        <HeroStage
          overline={heroCopy.overline}
          wordmark={heroCopy.wordmark}
          straps={heroCopy.straps}
          bodoniFont={bodoni.style.fontFamily}
          caveatFont={caveat.style.fontFamily}
        />
        <RevealStage
          headline={revealCopy.headline}
          caption={revealCopy.caption}
          bodoniFont={bodoni.style.fontFamily}
        />
        <WorksSection />
        <StatementBand />
        <ToolkitLedger />
        <FaqSection />
        <CreationFooter />
      </div>
    </MotionConfig>
  );
}
