import { cn } from "@/lib/utils";

export default function Chip({ children, tone = "line", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-chip px-3 py-1 font-mono text-xs",
        tone === "line" && "border border-line text-ink-muted",
        tone === "solid" && "bg-surface-2 text-ink",
        tone === "accent" && "bg-accent text-on-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
