"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import PlaceholderPhoto from "./PlaceholderPhoto";
import Image from "next/image"


const FURNITURE = "text-[10.5px] uppercase tracking-[0.18em] font-medium";

export default function HeroStage({ overline, wordmark, straps, bodoniFont, caveatFont }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const photoScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.11]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  // Latched dismissal: once scrolled past the fade-out point the type block
  // stays hidden for the rest of the pin, instead of reactively reappearing
  // if scrollYProgress jitters — it only comes back if the user scrolls back
  // up past a lower threshold (hysteresis avoids flicker right at the edge).
  const hiddenRef = useRef(false);
  const revealProgress = useTransform(scrollYProgress, (v) => {
    if (v >= 0.4) hiddenRef.current = true;
    else if (v <= 0.3) hiddenRef.current = false;
    return hiddenRef.current ? 1 : v / 0.4;
  });
  const typeOpacity = useTransform(revealProgress, [0, 1], [1, 0]);
  const typeY = useTransform(revealProgress, [0, 1], [0, -46]);

  const chars = wordmark.length;
  const wordmarkStyle = {
    fontFamily: bodoniFont,
    fontWeight: 600,
    lineHeight: 0.8,
    letterSpacing: "-0.05em",
    fontSize: `min(clamp(3.5rem, 34vw, 20rem), calc(88vw / (${chars} * 0.6)))`,
    whiteSpace: "nowrap",
  };

  const Overlay = () => (
    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/10" />
  );

  if (reduced) {
    return (
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-primary">
        <PlaceholderPhoto tone="dark" className="absolute inset-0" label="photograph — pending" />
        <Overlay />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p style={{ fontFamily: caveatFont }} className="mb-4 -rotate-2 text-2xl text-accent-hover">
            {overline}
          </p>
          <h1 style={wordmarkStyle}>{wordmark}</h1>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex flex-wrap justify-center gap-6 px-6">
          {straps.map((s) => (
            <span key={s} className={`${FURNITURE} text-white/70`}>
              {s}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[300svh] bg-primary">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: photoScale, y: photoY }}>
          <Image src="/assets/design/lab.png" fill alt="aa" className="h-full w-full" />
        </motion.div>

        <Overlay />

        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
          style={{ opacity: typeOpacity, y: typeY }}
        >
          <p
            style={{ fontFamily: caveatFont }}
            className="mb-4 -rotate-2 text-2xl text-accent-hover sm:text-3xl"
          >
            {overline}
          </p>
          <h1 style={wordmarkStyle}>{wordmark}</h1>
        </motion.div>

        <div className="absolute inset-x-0 bottom-6 z-10 flex flex-wrap justify-center gap-6 px-6 sm:justify-between sm:px-12">
          {straps.map((s) => (
            <span key={s} className={`${FURNITURE} text-white/70`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
