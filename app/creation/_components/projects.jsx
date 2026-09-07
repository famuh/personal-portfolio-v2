// Single source of truth stays on /work — this file only curates and annotates
// that same data for the /creation showcase instead of retyping it.
import { website, mobile, others } from "@/app/work/page";

const findByName = (list, name) => {
  const project = list.find((p) => p.name === name);
  if (!project) {
    throw new Error(`creation/projects: "${name}" not found in /work data — did it get renamed?`);
  }
  return project;
};

const featuredMeta = [
  {
    name: "P3 ( Pembalian/Purchasing, Penjualan/Sales, Persediaan/Inventory )",
    source: website.projects,
    category: "Web",
    tag: "Full-Stack System",
    useCase:
      "For businesses juggling purchasing, sales and inventory across separate spreadsheets — one system to record, track and reconcile stock and transactions accurately.",
  },
  {
    name: "Alpha Coffee Medan",
    source: website.projects,
    category: "Web",
    tag: "Web Experience",
    useCase:
      "For a coffee shop that wanted online ordering without a marketplace cut — customers build their order on the site, then hand it straight to WhatsApp.",
  },
  {
    name: "Food Recognizer with TFLite",
    source: mobile.projects,
    category: "Mobile",
    tag: "Mobile + ML",
    useCase:
      "Point a camera at a plate and get back what it likely is, a recipe, and a rough nutritional breakdown — for anyone tracking what they eat without manual logging.",
  },
  {
    name: "Angkutin",
    source: mobile.projects,
    category: "Mobile",
    tag: "Mobile Platform",
    useCase:
      "Connects residents and waste collectors so pickup requests and reports don't get lost in a phone call — each role sees only what it needs to act on.",
  },
];

export const featuredProjects = featuredMeta.map((meta) => ({
  ...findByName(meta.source, meta.name),
  category: meta.category,
  tag: meta.tag,
  useCase: meta.useCase,
}));

const featuredNames = new Set(featuredMeta.map((m) => m.name));

export const otherProjects = [
  ...website.projects
    .filter((p) => !featuredNames.has(p.name))
    .map((p) => ({ ...p, category: "Web" })),
  ...mobile.projects
    .filter((p) => !featuredNames.has(p.name))
    .map((p) => ({ ...p, category: "Mobile" })),
  ...others.projects.map((p) => ({ ...p, category: "Other" })),
];
