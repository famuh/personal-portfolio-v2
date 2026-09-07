"use client";

import { motion } from "framer-motion";

// Splits text into per-word spans that rise + fade in on a stagger as they
// enter the viewport. Framer's MotionConfig(reducedMotion="user") upstream
// takes care of collapsing this to an instant, fully-visible state.
export default function SplitWords({
  text,
  as: Tag = "span",
  className = "",
  wordClassName = "",
  staggerMs = 38,
  once = true,
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0"
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: "0.4em", opacity: 0 }}
            whileInView={{ y: "0em", opacity: 1 }}
            viewport={{ once, amount: 0.6 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: (i * staggerMs) / 1000,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
