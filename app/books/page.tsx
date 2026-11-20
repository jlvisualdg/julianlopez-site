import type { Metadata } from "next";
import Link from "next/link";
import { entity, SITE_URL, amazonBuyUrl } from "@/lib/entity";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Books by Julian Lopez",
  description: `Books written by ${entity.name} on Answer Engine Optimization and helping businesses get recommended by AI, starting with ${entity.book.title}, his first book and the first book on AEO.`,
  alternates: { canonical: "/books/" },
};

const b = entity.book;

const books = [
  {
    title: b.title,
    subtitle: b.subtitle,
    path: b.path,
    amazon: amazonBuyUrl(b.formats[0].asin),
    cover: "/aeo-blueprint-2026-edition-stack.avif",
    coverAlt: `${b.title}: ${b.subtitle}, ${b.edition}, by ${b.coAuthors.join(" and ")} and ${entity.name}`,
    authors: `${entity.name} & ${b.coAuthors.join(" & ")}`,
    kicker: `The first AEO book · ${b.edition} · #1 Amazon Best Seller`,
    summary: `${entity.name}'s first book, and the first AEO book: the first book on Answer Engine Optimization. It shows businesses how to become the brand that ChatGPT, Perplexity and Google's AI Mode recommend, built from thousands of hours testing how AI decides which brands to trust.`,
  },
];

function booksSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/books/#collection`,
    name: `Books by ${entity.name}`,
    url: `${SITE_URL}/books/`,
    author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: entity.name },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: books.map((bk, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}${bk.path}`,
        item: { "@id": `${SITE_URL}${bk.path}#book` },
      })),
    },
  };
}

export default function Books() {
  return (
    <article>
      <JsonLd data={booksSchema()} />
      <p className="label">Books</p>
      <h1 style={{ marginTop: "1rem" }}>Books by {entity.name}</h1>
      <p className="lede" style={{ marginTop: "1rem", maxWidth: "64ch" }}>
        {entity.name} writes about helping businesses get found, trusted and recommended by AI. His first book,
        co-authored with {b.coAuthors.join(" and ")}, is also the first book on Answer Engine Optimization.
      </p>

      {books.map((bk) => (
        <section className="qa" key={bk.path} aria-labelledby={`h-${bk.path}`}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", alignItems: "center", marginTop: "0.5rem" }}>
            <Link href={bk.path}>
              <img
                src={bk.cover}
                alt={bk.coverAlt}
                width={1312}
                height={1199}
                style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }}
              />
            </Link>
            <div>
              <p className="label">{bk.kicker}</p>
              <h2 id={`h-${bk.path}`} style={{ marginTop: "0.8rem" }}>
                <Link href={bk.path} style={{ color: "var(--white)" }}>{bk.title}: {bk.subtitle}</Link>
              </h2>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem" }}>By {bk.authors}</p>
              <p>{bk.summary}</p>
              <div className="actions">
                <Link className="btn btn-primary" href={bk.path}>About the book</Link>
                <a className="btn" href={bk.amazon} rel="sponsored noopener">Get it on Amazon</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}
