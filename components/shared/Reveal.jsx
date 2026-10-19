"use client";

import { m } from "framer-motion";
import { riseIn, viewportOnce } from "@/lib/motion";

// One shared entrance for content blocks: fade + 16px rise when scrolled
// into view, staggered by `index`. MotionConfig(reducedMotion="user") in
// Providers turns this into an instant appearance for reduced-motion users.
export default function Reveal({ as = "div", index = 0, className, children, ...rest }) {
  const Tag = m[as] ?? m.div;
  return (
    <Tag
      className={className}
      variants={riseIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      custom={index}
      {...rest}
    >
      {children}
    </Tag>
  );
}
