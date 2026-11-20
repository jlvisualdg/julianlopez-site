import type { Metadata } from "next";
import Link from "next/link";
import { entity } from "@/lib/entity";

// Moved 2026-11-20 to /books/the-aeo-blueprint/. GitHub Pages has no server
// redirects, so this static page points browsers and crawlers to the new URL
// (canonical + noindex + meta refresh + JS fallback + visible link).
const target = entity.book.path;

export const metadata: Metadata = {
  title: entity.book.title,
  alternates: { canonical: target },
  robots: { index: false, follow: true },
  other: { refresh: `0; url=${target}` },
};

export default function MovedBookPage() {
  return (
    <article>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(target)})` }} />
      <p className="label">Moved</p>
      <h1 style={{ marginTop: "1rem" }}>{entity.book.title} has moved</h1>
      <p className="lede" style={{ marginTop: "1rem" }}>
        The page now lives at <Link href={target}>{target}</Link>.
      </p>
    </article>
  );
}
