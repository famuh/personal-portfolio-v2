import { profile } from "@/content/site";
import { caseStudies } from "@/content/projects";

export default function sitemap() {
  const now = new Date();
  const pages = ["", "/work", "/about", "/contact"].map((path) => ({
    url: `${profile.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const studies = caseStudies.map((c) => ({
    url: `${profile.url}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));
  return [...pages, ...studies];
}
