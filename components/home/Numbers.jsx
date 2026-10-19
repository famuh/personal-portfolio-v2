import { profile } from "@/content/site";
import { projectCount } from "@/content/projects";
import { clientsServed } from "@/content/placeholders";
import CountUp from "@/components/shared/CountUp";
import Ph from "@/components/shared/Ph";

// Only numbers that are on record (or explicitly flagged as placeholders).
export const stats = [
  { value: new Date().getFullYear() - profile.startedYear, suffix: "+", label: "years building software" },
  { value: projectCount, suffix: "", label: "projects designed or built" },
  { value: 15, suffix: "+", label: "training sessions supported" },
  { value: clientsServed.value, suffix: clientsServed.suffix, label: clientsServed.label.toLowerCase(), placeholder: true },
];

// One bento tile per number. Rendered inside the About bento grid.
export default function StatTile({ stat, className }) {
  return (
    <div className={className}>
      <p className="text-h1 tracking-tight">
        <Ph active={Boolean(stat.placeholder)}>
          <CountUp value={stat.value} />
          <span className="text-accent-ink">{stat.suffix}</span>
        </Ph>
      </p>
      <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
    </div>
  );
}
