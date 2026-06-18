import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/entity";

// Generated sitemap — emitted as /sitemap.xml at build time (matches robots.txt).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about/", "/the-aeo-blueprint/", "/speaking/", "/contact/"];
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" || path === "/about/" ? 1 : 0.7,
  }));
}
