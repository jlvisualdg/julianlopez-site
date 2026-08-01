import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllSlugs } from "@/lib/posts";
import { entity, SITE_URL } from "@/lib/entity";

// Static generation: pre-render every slug at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: [entity.name],
      tags: post.tags,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

// Minimal body renderer — no dependencies
// ## Heading → h2 | ### Sub → h3 | - item → li (grouped) | blank line → paragraph break
function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;

    // h2
    if (block.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{ marginTop: "2rem", marginBottom: "0.6rem" }}>
          {block.slice(3)}
        </h2>
      );
      continue;
    }

    // h3
    if (block.startsWith("### ")) {
      elements.push(
        <h3 key={i} style={{ marginTop: "1.5rem", marginBottom: "0.4rem" }}>
          {block.slice(4)}
        </h3>
      );
      continue;
    }

    // unordered list (lines starting with "- ")
    if (block.split("\n").every((l) => l.startsWith("- "))) {
      elements.push(
        <ul key={i} className="clean" style={{ marginTop: "0.5rem" }}>
          {block.split("\n").map((line, j) => (
            <li key={j}>{line.slice(2)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // default: paragraph
    elements.push(
      <p key={i} style={{ maxWidth: "65ch" }}>{block}</p>
    );
  }

  return elements;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article>
      {/* Structured data for article authorship */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: entity.name,
              url: SITE_URL,
            },
            keywords: post.tags.join(", "),
            url: `${SITE_URL}/blog/${post.slug}/`,
          }),
        }}
      />

      {/* Header */}
      <p className="label">
        <Link href="/blog/" style={{ color: "var(--spring-laser)" }}>Writing</Link>
      </p>

      <h1 style={{ marginTop: "1rem", maxWidth: "36ch" }}>{post.title}</h1>

      {/* Meta row */}
      <div className="rows" style={{ marginTop: "1.5rem" }}>
        <div className="row">
          <dt>Author</dt>
          <dd>{post.author}</dd>
        </div>
        <div className="row">
          <dt>Published</dt>
          <dd>{formatDate(post.date)}</dd>
        </div>
        <div className="row">
          <dt>Tags</dt>
          <dd>
            <div className="tags" style={{ marginTop: 0 }}>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </dd>
        </div>
      </div>

      {/* Body */}
      <section className="qa" style={{ marginTop: "2rem" }}>
        {renderBody(post.body)}
      </section>

      {/* Footer nav */}
      <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-active)" }}>
        <Link href="/blog/" className="btn">← All posts</Link>
      </div>
    </article>
  );
}
