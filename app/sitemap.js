import { profile } from "@/content/site";
import { caseStudies } from "@/content/projects";
import { notes } from "@/content/notes";

export default function sitemap() {
  const now = new Date();
  const pages = ["", "/work", "/about", "/notes", "/cv", "/contact"].map((path) => ({
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
  const posts = notes.map((n) => ({
    url: `${profile.url}/notes/${n.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...studies, ...posts];
}
