import type { Metadata } from "next";
import Link from "next/link";
import { entity } from "@/lib/entity";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: `${entity.name}'s perspective on Answer Engine Optimization, brand entity, and AI-driven marketing.`,
  alternates: { canonical: "/blog/" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <article>
      <p className="label">Perspectives</p>
      <h1 style={{ marginTop: "1rem" }}>Writing</h1>
      <p className="lede" style={{ marginTop: "1rem", marginBottom: "2.5rem" }}>
        AEO, brand entity, and what it actually means to be the answer AI recommends.
        Written by {entity.name}.
      </p>

      <div className="data-table">
        <div className="table-header" style={{ gridTemplateColumns: "2fr 1fr" }}>
          <span>Post</span>
          <span>Date &amp; Tags</span>
        </div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            style={{ display: "contents", textDecoration: "none" }}
          >
            <div
              className="table-row"
              style={{ gridTemplateColumns: "2fr 1fr", cursor: "pointer" }}
            >
              <div>
                <h3 style={{ color: "var(--white)", marginBottom: "0.4rem" }}>
                  {post.title}
                </h3>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", maxWidth: "none" }}>
                  {post.excerpt}
                </p>
              </div>
              <div>
                <p style={{ margin: "0 0 0.6rem", fontSize: "12.5px", color: "var(--muted-light)" }}>
                  {formatDate(post.date)}
                </p>
                <div className="tags" style={{ marginTop: 0 }}>
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
