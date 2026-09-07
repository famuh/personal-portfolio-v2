"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

const FURNITURE = "text-[10.5px] uppercase tracking-[0.18em] font-medium";

// Desktop-only, scroll-driven category/project menu + live preview — the same
// pinned-scrub mechanic as RevealStage, just steering through featured projects
// instead of a single image. Mobile and prefers-reduced-motion get the plain
// stacked <FeaturedProject> list instead (see WorksSection in page.jsx).
export default function WorksMenu({ projects, bodoniFont }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, projects.length]);

  const [active, setActive] = useState(0);
  useMotionValueEvent(rawIndex, "change", (v) => {
    const idx = Math.min(projects.length - 1, Math.max(0, Math.floor(v)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const groups = useMemo(() => {
    const map = new Map();
    projects.forEach((p, i) => {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category).push({ ...p, globalIndex: i });
    });
    return Array.from(map.entries());
  }, [projects]);

  if (reduced) return null;

  const activeProject = projects[active];

  const handleJump = (index) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const target = window.scrollY + rect.top + (index / projects.length) * rect.height + 5;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative hidden xl:block" style={{ height: `${projects.length * 100}svh` }}>
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden bg-primary px-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(220px,280px)_1fr] gap-16">
          <nav className="flex flex-col gap-8">
            {groups.map(([category, items]) => (
              <div key={category}>
                <p className={`${FURNITURE} text-white/40`}>{category}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {items.map((item) => {
                    const isActive = item.globalIndex === active;
                    return (
                      <li key={item.name}>
                        <button
                          type="button"
                          onClick={() => handleJump(item.globalIndex)}
                          className={`flex items-baseline gap-3 text-left transition-colors duration-300 ${
                            isActive ? "text-accent-hover" : "text-white/35 hover:text-white/60"
                          }`}
                        >
                          <span className="text-xs tabular-nums opacity-60">
                            {String(item.globalIndex + 1).padStart(2, "0")}
                          </span>
                          <span className={`text-sm ${isActive ? "font-semibold" : ""}`}>{item.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/20 p-2">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.preview}
                      alt={activeProject.name}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject.name}-caption`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <p className={`${FURNITURE} text-accent-hover`}>
                  {activeProject.category} · {activeProject.tag}
                </p>
                <h3
                  style={{ fontFamily: bodoniFont, fontWeight: 600 }}
                  className="mt-2 text-2xl text-white"
                >
                  {activeProject.name}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/70">{activeProject.description}</p>
                <p className="mt-2 max-w-xl text-sm italic text-white/50">{activeProject.useCase}</p>

                <div className="mt-4 flex items-center gap-4">
                  <ul className="flex flex-wrap gap-3">
                    {activeProject.techstack.map((tech, i) => (
                      <li key={i} className="group text-lg text-white/50">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="transition-colors group-hover:text-accent-hover">
                                {tech.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>

                  {activeProject.demo?.length > 0 && (
                    <Link
                      href={activeProject.demo}
                      className="group ml-auto inline-flex items-center gap-2 text-sm text-accent-hover"
                    >
                      Demo
                      <BsArrowDownRight className="transition-transform duration-300 group-hover:-rotate-45" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
