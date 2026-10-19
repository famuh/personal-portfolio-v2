"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Scroll-to-reveal text (after chemtest.fr): each word "inks in" as the
// paragraph moves through the viewport, so reading pace and scroll pace line
// up. Trade-offs handled:
//  - legibility never depends on scroll position: every word's base layer is
//    --ink-muted (≥ 6.7:1 contrast in both themes); a full-ink copy fades in
//    on top, aria-hidden so screen readers read the sentence once;
//  - words finish inking by the time the block reaches the upper third;
//  - reduced motion renders plain ink text.
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block text-ink-muted">
      {children}
      <m.span aria-hidden="true" style={{ opacity }} className="absolute inset-0 text-ink">
        {children}
      </m.span>
    </span>
  );
}

export default function ScrollInkText({ text, className }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.3"] });

  if (reduced) return <p className={className}>{text}</p>;

  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
