"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import PlaceholderPhoto from "./PlaceholderPhoto";
import Image from "next/image"


export default function RevealStage({ headline, caption, bodoniFont }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const clipPath = useTransform(
    scrollYProgress,
    (p) => `inset(0 0 calc(100% - ${p * 100}%) 0)`
  );
  const headlineOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

  const headlineStyle = {
    fontFamily: bodoniFont,
    fontWeight: 600,
    letterSpacing: "-0.03em",
  };

  if (reduced) {
    return (
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-primary">
        <PlaceholderPhoto tone="accent" className="absolute inset-0" label="photograph — pending" />
        <h2
          style={headlineStyle}
          className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center text-3xl text-white sm:text-5xl"
        >
          {headline}
        </h2>
        <p className="absolute bottom-8 left-6 max-w-[320px] text-sm italic text-white/70">
          {caption}
        </p>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[320svh] bg-primary">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ clipPath }}>
          {/* <Image src="/assets/logo/logo-text.png" fill alt="Initial Logo" className="h-full w-full cover" /> */}
          {/* <Link href="/"> */}
          <div className="h-full w-full flex items-center justify-center">
            <h1 className="text-9xl font-semibold">Pamulab<span className="text-accent-hover">.</span></h1>

          </div>
          {/* </Link> */}
        </motion.div>

        <motion.h2
          style={{ ...headlineStyle, opacity: headlineOpacity, mixBlendMode: "difference", color: "#fff" }}
          className="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 text-center text-4xl sm:text-6xl xl:text-7xl"
        >
          {headline}
        </motion.h2>

        <motion.p
          style={{ opacity: captionOpacity }}
          className="absolute bottom-8 left-6 max-w-[320px] text-sm italic text-white/70 sm:bottom-12 sm:left-12"
        >
          {caption}
        </motion.p>
      </div>
    </section>
  );
}
