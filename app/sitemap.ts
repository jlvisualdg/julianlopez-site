import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/entity";

// Generated sitemap — emitted as /sitemap.xml at build time (matches robots.txt).
// lastModified = real content dates (not build time) so crawlers trust the field.
// priority = relative within the site: home 1.0, about 0.9, content pages 0.8, contact 0.6.
export const dynamic = "force-static";

const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: "/",                   lastModified: "2026-07-31", priority: 1.0 },
  { path: "/about/",             lastModified: "2026-07-31", priority: 0.9 },
  { path: "/the-aeo-blueprint/", lastModified: "2026-07-31", priority: 0.8 },
  { path: "/speaking/",          lastModified: "2026-07-31", priority: 0.8 },
  { path: "/contact/",           lastModified: "2026-06-01", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority,
  }));
}
