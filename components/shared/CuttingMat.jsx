import { useId } from "react";
import { DraftingCompass, PenTool, PencilRuler, Scissors, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";

// Decorative "self-healing cutting mat" — the surface you plan and build on.
// Grid (20px minor / 100px major), rulers on two edges, angle guides, a
// circle template, a few dimension notes and drafting tools. Colours come
// from the --mat* tokens so it adapts to both themes. Purely decorative:
// aria-hidden, pointer-events-none, no motion.
const LEN = 2000; // px of ruler; overflow is clipped
const MAJORS = Array.from({ length: LEN / 100 }, (_, i) => i + 1);

// Ruler ticks are an SVG pattern (cheap to render); only the major marks get
// a number. One mark every 20px, a longer one every 100px.
function Ruler({ id, vertical = false }) {
  return (
    <svg
      className={cn("absolute left-0 top-0", vertical ? "h-[2000px] w-6" : "h-6 w-[2000px]")}
      viewBox={vertical ? `0 0 24 ${LEN}` : `0 0 ${LEN} 24`}
    >
      <defs>
        <pattern id={id} width={vertical ? 24 : 100} height={vertical ? 100 : 24} patternUnits="userSpaceOnUse">
          {[0, 20, 40, 60, 80].map((p) =>
            vertical ? (
              <line key={p} x1="0" y1={p} x2={p === 0 ? 10 : 5} y2={p} className="stroke-mat-line-strong" />
            ) : (
              <line key={p} x1={p} y1="0" x2={p} y2={p === 0 ? 10 : 5} className="stroke-mat-line-strong" />
            )
          )}
        </pattern>
      </defs>
      <rect width={vertical ? 24 : LEN} height={vertical ? LEN : 24} className="fill-mat" />
      <rect width={vertical ? 24 : LEN} height={vertical ? LEN : 24} fill={`url(#${id})`} />
      {MAJORS.map((n) =>
        vertical ? (
          <text key={n} x="13" y={n * 100 + 3} className="fill-mat-line-strong font-mono text-[8px]">{n}</text>
        ) : (
          <text key={n} x={n * 100} y="20" textAnchor="middle" className="fill-mat-line-strong font-mono text-[8px]">{n}</text>
        )
      )}
      <line
        x1={vertical ? 23.5 : 0}
        y1={vertical ? 0 : 23.5}
        x2={vertical ? 23.5 : LEN}
        y2={vertical ? LEN : 23.5}
        className="stroke-mat-line-strong"
      />
    </svg>
  );
}

export default function CuttingMat({ className }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const tool = "absolute text-mat-line-strong";

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-mat", className)}>
      <svg className="absolute inset-0 size-full">
        <defs>
          <pattern id={`${id}-minor`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" className="stroke-mat-line" />
          </pattern>
          <pattern id={`${id}-major`} width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill={`url(#${id}-minor)`} />
            <path d="M100 0H0V100" fill="none" className="stroke-mat-line-strong" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-major)`} />

        {/* 45° and 60° angle guides from the bottom-left corner */}
        <g fill="none" className="stroke-mat-line-strong" strokeDasharray="2 8">
          <line x1="0" y1="100%" x2="1400" y2="-400" />
          <line x1="0" y1="100%" x2="900" y2="-700" />
        </g>

        {/* circle template, top right */}
        <g fill="none" className="stroke-mat-line-strong">
          <circle cx="92%" cy="14%" r="150" />
          <circle cx="92%" cy="14%" r="100" strokeDasharray="3 6" />
          <circle cx="92%" cy="14%" r="3" className="fill-mat-line-strong" />
        </g>
      </svg>

      <Ruler id={`${id}-rx`} />
      <Ruler id={`${id}-ry`} vertical />

      {/* dimension notes */}
      <div className="absolute right-[6%] bottom-6 hidden items-center gap-2 font-mono text-[10px] text-mat-line-strong sm:flex">
        <span className="h-3 w-px bg-current" />
        <span className="h-px w-24 bg-current" />
        <span>1200 × 800</span>
        <span className="h-px w-24 bg-current" />
        <span className="h-3 w-px bg-current" />
      </div>
      <p className="absolute left-10 bottom-6 hidden font-mono text-[10px] text-mat-line-strong md:block">
        scale 1:1 · grid 20 px · drafted in Medan
      </p>

      {/* drafting tools */}
      <DraftingCompass strokeWidth={0.75} className={cn(tool, "-right-6 top-[38%] size-40 rotate-12")} />
      <PencilRuler strokeWidth={0.75} className={cn(tool, "left-[42%] -top-6 size-28 -rotate-12")} />
      <PenTool strokeWidth={0.75} className={cn(tool, "bottom-[12%] left-[4%] size-24 rotate-6 max-md:hidden")} />
      <Scissors strokeWidth={0.75} className={cn(tool, "-bottom-4 right-[34%] size-20 -rotate-45 max-md:hidden")} />
      <Crosshair strokeWidth={0.75} className={cn(tool, "left-[30%] top-[55%] size-8")} />
    </div>
  );
}
