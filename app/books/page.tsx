import type { Metadata } from "next";
import Link from "next/link";
import { entity, SITE_URL } from "@/lib/entity";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Books by Julian Lopez",
  description: `Books by ${entity.name}, including ${entity.book.title}: ${entity.book.subtitle}, the #1 Amazon best seller on Answer Engine Optimization.`,
  alternates: { canonical: "/books/" },
};

const books = [
  {
    title: entity.book.title,
    subtitle: entity.book.subtitle,
    url: entity.book.url,
    cover: "/aeo-blueprint-book-mockup-1.avif",
    coverAlt: `${entity.book.title}: ${entity.book.subtitle}, book by ${entity.name} and ${entity.book.coAuthors.join(", ")}`,
    authors: [entity.name, ...entity.book.coAuthors],
    year: entity.book.year,
    award: entity.book.awards,
    description: entity.book.description,
    detailPath: "/the-aeo-blueprint/",
  },
];

function booksSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/books/#collection`,
    name: `Books by ${entity.name}`,
    url: `${SITE_URL}/books/`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: books.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Book",
          "@id": `${b.url}#book`,
          name: `${b.title}: ${b.subtitle}`,
          url: b.url,
          author: [
            { "@type": "Person", "@id": `${SITE_URL}/#person`, name: entity.name },
            ...entity.book.coAuthors.map((name) => ({ "@type": "Person", name })),
          ],
          award: b.award,
        },
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
      <p className="lede" style={{ marginTop: "1rem", maxWidth: "62ch" }}>
        Books on Answer Engine Optimization and how brands get recommended by AI.
      </p>

      {books.map((b) => (
        <section className="qa" key={b.url} aria-labelledby="h-aeo-blueprint">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", alignItems: "center", marginTop: "0.5rem" }}>
            <a href={b.url} rel="noopener">
              <img
                src={b.cover}
                alt={b.coverAlt}
                width={1200}
                height={900}
                style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }}
              />
            </a>
            <div>
              <p className="label">{b.year} &middot; #1 Amazon Best Seller</p>
              <h2 id="h-aeo-blueprint" style={{ marginTop: "0.8rem" }}>
                <a href={b.url} rel="noopener" style={{ color: "var(--white)" }}>{b.title}: {b.subtitle}</a>
              </h2>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem" }}>By {b.authors.join(" & ")}</p>
              <p>{b.description}</p>
              <p>{b.award}</p>
              <div className="actions">
                <a className="btn btn-primary" href={b.url} rel="noopener">Get it on Amazon</a>
                <Link className="btn" href={b.detailPath}>About the book</Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}
