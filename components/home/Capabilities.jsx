import Link from "next/link";
import { ArrowRight, Code, Compass, PenTool, Users, Workflow } from "lucide-react";
import { capabilities, stack } from "@/content/expertise";
import { caseStudies } from "@/content/projects";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Chip from "@/components/shared/Chip";

const ICONS = { Compass, Workflow, Code, Users, PenTool };
const proofName = (slug) => caseStudies.find((c) => c.slug === slug)?.name;

// Bento: five capability tiles (4+2, then 2+2+2; the first sits on a soft
// gradient with a glass panel) and one wide tile for the stack.
const SPANS = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

function CapabilityTile({ item, featured }) {
  const Icon = ICONS[item.icon];
  const body = (
    <>
      <span className="flex size-10 items-center justify-center rounded-control bg-canvas text-ink shadow-card">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-h3">{item.title}</h3>
        <p className="font-medium">{item.problem}</p>
        <p className="text-sm text-ink-muted">{item.body}</p>
      </div>
      <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-2">
        <ul className="flex flex-wrap gap-1.5" aria-label="Deliverables">
          {item.deliverables.map((d) => (
            <li key={d}><Chip>{d}</Chip></li>
          ))}
        </ul>
        {/* Only link to a case study that exists (a slug may point to one not written yet). */}
        {proofName(item.proof) && (
          <Link href={`/work/${item.proof}`} className="group/proof inline-flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-ink">
            Example: {proofName(item.proof)}
            <ArrowRight aria-hidden="true" className="size-3.5 transition-transform duration-(--dur-base) group-hover/proof:translate-x-0.5" />
          </Link>
        )}
      </div>
    </>
  );

  return featured ? (
    <div className="bg-mesh flex h-full rounded-card border border-line p-3">
      <div className="glass flex flex-1 flex-col gap-5 rounded-control p-5">{body}</div>
    </div>
  ) : (
    <div className="flex h-full flex-col gap-5 rounded-card border border-line bg-surface p-6">{body}</div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="cap-title" className="section-y">
      <div className="shell flex flex-col gap-10">
        <SectionHeading
          id="cap-title"
          eyebrow="What I do"
          title="From the field visit to the training session."
          intro="Consulting, analysis, development and the material that explains it, by the same person. Fewer hand-offs means less gets lost."
        />

        <div className="grid gap-4 lg:grid-cols-6">
          {capabilities.map((item, i) => (
            <Reveal key={item.id} index={i % 3} className={cn(SPANS[i])}>
              <CapabilityTile item={item} featured={i === 0} />
            </Reveal>
          ))}

          <Reveal className="rounded-card border border-line p-6 lg:col-span-6">
            <h3 className="mb-5 text-sm text-ink-muted">Tools I use most</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((group) => (
                <div key={group.domain} className="flex flex-col gap-2.5">
                  <p className="text-sm font-semibold">{group.domain}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((t) => (
                      <li key={t}><Chip>{t}</Chip></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
