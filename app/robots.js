import { profile } from "@/content/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.url}/sitemap.xml`,
    host: profile.url,
  };
}
