import { caseStudies } from "@/content/projects";
import CuttingMat from "@/components/shared/CuttingMat";
import Reveal from "@/components/shared/Reveal";
import CaseStudyCard from "./CaseStudyCard";

// The four case studies laid out as a bento on a cutting mat. Order and
// tile sizes follow the order in content/projects.js.
const LAYOUT = [
  { size: "feature", className: "lg:col-span-4 lg:row-span-2" },
  { size: "tall", className: "lg:col-span-2 lg:row-span-2" },
  { size: "wide", className: "lg:col-span-3" },
  { size: "wide", className: "lg:col-span-3" },
];

export default function CaseStudyBento({ revealFirst = true }) {
  return (
    <div className="relative overflow-hidden rounded-panel border border-line">
      <CuttingMat />
      <ul className="relative grid gap-4 p-4 pl-10 pt-10 sm:gap-5 sm:p-8 sm:pl-12 sm:pt-12 lg:grid-cols-6 lg:p-10 lg:pl-14 lg:pt-14">
        {caseStudies.map((study, i) => {
          const { size, className } = LAYOUT[i] ?? LAYOUT[2];
          const card = <CaseStudyCard study={study} size={size} priority={i === 0 && !revealFirst} />;
          // The first tile may be above the fold on /work: render it without a
          // JS-dependent reveal there.
          return i === 0 && !revealFirst ? (
            <li key={study.slug} className={className}>{card}</li>
          ) : (
            <Reveal as="li" key={study.slug} index={i % 2} className={className}>
              {card}
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
