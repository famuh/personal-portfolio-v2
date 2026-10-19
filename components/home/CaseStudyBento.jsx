import { caseStudies, featuredCaseStudies } from "@/content/projects";
import CuttingMat from "@/components/shared/CuttingMat";
import Reveal from "@/components/shared/Reveal";
import CaseStudyCard from "./CaseStudyCard";

// Case studies laid out as a bento on a cutting mat. The first four use the
// big layout (feature, tall, wide, wide); any further ones (only on /work,
// `all`) continue as compact tiles, three per row.
const LAYOUT = [
  { size: "feature", className: "lg:col-span-4 lg:row-span-2" },
  { size: "tall", className: "lg:col-span-2 lg:row-span-2" },
  { size: "wide", className: "lg:col-span-3" },
  { size: "wide", className: "lg:col-span-3" },
];
const COMPACT = { size: "compact", className: "sm:col-span-1 lg:col-span-2" };

export default function CaseStudyBento({ all = false, revealFirst = true }) {
  const studies = all ? caseStudies : featuredCaseStudies;

  return (
    <div className="relative overflow-hidden rounded-panel border border-line">
      <CuttingMat />
      <ul className="relative grid gap-4 p-4 pl-10 pt-10 sm:grid-cols-2 sm:gap-5 sm:p-8 sm:pl-12 sm:pt-12 lg:grid-cols-6 lg:p-10 lg:pl-14 lg:pt-14">
        {studies.map((study, i) => {
          const { size, className } = LAYOUT[i] ?? COMPACT;
          const span = LAYOUT[i] ? `sm:col-span-2 ${className}` : className;
          const card = <CaseStudyCard study={study} size={size} priority={i === 0 && !revealFirst} />;
          // The first tile may be above the fold on /work: render it without a
          // JS-dependent reveal there.
          return i === 0 && !revealFirst ? (
            <li key={study.slug} className={span}>{card}</li>
          ) : (
            <Reveal as="li" key={study.slug} index={i % 3} className={span}>
              {card}
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
