"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

const FURNITURE = "text-[10.5px] uppercase tracking-[0.18em] font-medium";
const EASE = [0.16, 1, 0.3, 1];

export default function FeaturedProject({ project, index, bodoniFont }) {
  const reversed = index % 2 === 1;

  return (
    <section className="relative flex min-h-[100svh] items-center bg-primary px-6 py-20 sm:px-12">
      <div
        className={`mx-auto grid w-full max-w-6xl gap-10 xl:grid-cols-2 xl:items-center xl:gap-16 ${
          reversed ? "xl:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/20 p-2"
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={project.preview}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 40vw, 90vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <p className={`${FURNITURE} text-accent-hover`}>
            {project.category} · {project.tag}
          </p>

          <h3
            style={{ fontFamily: bodoniFont, fontWeight: 600 }}
            className="mt-3 text-3xl leading-tight text-white sm:text-4xl"
          >
            {project.name}
          </h3>

          <p className="mt-4 text-white/70">{project.description}</p>

          <div className="mt-5">
            <p className={`${FURNITURE} text-white/40`}>Use Case</p>
            <p className="mt-2 italic text-white/70">{project.useCase}</p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-4">
            {project.techstack.map((tech, i) => (
              <li key={i} className="group text-xl text-white/60">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="group-hover:text-accent-hover transition-all duration-500">
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

          {project.demo?.length > 0 && (
            <Link
              href={project.demo}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent-hover/5 px-5 py-2.5 text-sm text-accent-hover transition-all duration-500 hover:bg-accent-hover/10"
            >
              View Demo
              <BsArrowDownRight className="text-lg transition-all duration-500 group-hover:-rotate-45" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
