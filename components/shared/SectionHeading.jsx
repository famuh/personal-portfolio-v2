import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

// Section opener used on every page: small label, heading, optional intro.
export default function SectionHeading({ id, eyebrow, title, intro, as: Tag = "h2", align = "left", className }) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow flex items-center gap-2 text-ink-muted">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal index={1}>
        <Tag id={id} className="max-w-[22ch] text-h2">{title}</Tag>
      </Reveal>
      {intro && (
        <Reveal as="p" index={2} className="measure text-ink-muted">
          {intro}
        </Reveal>
      )}
    </div>
  );
}
