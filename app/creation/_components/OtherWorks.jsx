"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

const FURNITURE = "text-[10.5px] uppercase tracking-[0.18em] font-medium";
const CATEGORY_ORDER = ["Web", "Mobile", "Other"];

function Grid({ items }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, i) => (
        <li key={i} className="flex flex-col rounded-2xl bg-black/20 p-4">
          <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl">
            <Image
              src={item.preview}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 30vw, 90vw"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className={`${FURNITURE} text-accent-hover`}>{item.category}</span>
            {item.demo?.length > 0 && (
              <Link
                href={item.demo}
                className="text-white/50 transition-colors hover:text-accent-hover"
              >
                <BsArrowDownRight />
              </Link>
            )}
          </div>
          <h4 className="mt-2 text-lg font-semibold text-white">{item.name}</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {item.techstack.map((tech, ti) => (
              <li key={ti} className="group text-lg text-white/50">
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
        </li>
      ))}
    </ul>
  );
}

export default function OtherWorks({ projects }) {
  const byCategory = (cat) => projects.filter((p) => p.category === cat);

  return (
    <section className="bg-primary px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <p className={`${FURNITURE} text-white/40`}>Other Work</p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Smaller builds, side projects &amp; experiments
        </h3>

        <div className="mt-10 flex flex-col gap-3">
          {CATEGORY_ORDER.map((cat) => {
            const items = byCategory(cat);
            if (!items.length) return null;
            return (
              <details key={cat} className="group rounded-2xl bg-black/20 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-white">
                  <span className="text-lg font-semibold">
                    {cat} <span className="text-sm font-normal text-white/40">({items.length})</span>
                  </span>
                  <span className="relative h-4 w-4 shrink-0 text-accent-hover">
                    <span className="absolute inset-0 my-auto h-px w-4 bg-current" />
                    <span className="absolute inset-0 mx-auto h-4 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <div className="mt-6">
                  <Grid items={items} />
                </div>
              </details>
            );
          })}
        </div>

        <Link
          href="/work"
          className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-accent-hover transition-colors hover:text-white"
        >
          View full archive on /work
          <BsArrowDownRight />
        </Link>
      </div>
    </section>
  );
}
