import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Chip from "@/components/shared/Chip";
import Ph from "@/components/shared/Ph";

// Glass tile for one case study, used in the bento grid on the home and
// /work pages. Shows a short preview (3 bullets + one result); the full story
// is one click away. The title link stretches over the whole card.
//   size="feature" → big tile, image on top
//   size="tall"    → narrow tall tile, image on top
//   size="wide"    → half-width tile, image beside the text
//   size="compact" → small tile, image on top, two bullets
export default function CaseStudyCard({ study, size = "feature", priority = false, headingLevel: H = "h3" }) {
  const result = study.results[0];
  const resultsPh = study.placeholders?.includes("results");
  const wide = size === "wide";
  const compact = size === "compact";
  const bullets = wide || compact ? study.preview.slice(0, 2) : study.preview;

  return (
    <article
      className={cn(
        "glass group relative flex h-full overflow-hidden rounded-card transition-[transform,box-shadow] duration-(--dur-base) ease-out-expo hover:-translate-y-1 hover:shadow-lift",
        wide ? "flex-col sm:flex-row" : "flex-col"
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden border-line bg-surface-2",
          size === "feature" && "aspect-[16/9] border-b",
          size === "tall" && "aspect-[4/3] border-b",
          compact && "aspect-[16/10] border-b",
          wide && "aspect-[16/10] border-b sm:order-2 sm:aspect-auto sm:w-[42%] sm:border-b-0 sm:border-l"
        )}
      >
        <Image
          src={study.cover}
          alt={study.coverAlt}
          fill
          priority={priority}
          sizes={size === "feature" ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
          style={{ objectPosition: study.coverPosition ?? "center top" }}
          className="object-cover transition-transform duration-(--dur-slow) ease-out-expo group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-sm text-ink-muted">
          <span>{study.kind}</span>
          <span className="whitespace-nowrap font-mono text-xs">{study.name}</span>
        </div>

        <H className={cn(size === "feature" ? "text-h2" : "text-h3")}>
          <Link href={`/work/${study.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {study.title}
          </Link>
        </H>

        <ul className="flex flex-col gap-2 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-ink" />
              <span className="text-ink-muted">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-4 pt-2">
          <p className="flex items-baseline gap-2 border-t border-line pt-4 text-sm">
            <Ph active={resultsPh}>
              <span className="text-xl font-semibold tracking-tight">{result.value}</span>{" "}
              <span className="text-ink-muted">{result.label}</span>
            </Ph>
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
              {study.stack.slice(0, wide || compact ? 2 : 3).map((t) => (
                <li key={t}><Chip>{t}</Chip></li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1 rounded-chip bg-ink px-3.5 py-1.5 text-sm font-medium text-canvas transition-colors duration-(--dur-base) group-hover:bg-accent group-hover:text-on-accent">
              Read case study
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
