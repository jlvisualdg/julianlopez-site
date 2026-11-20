import type { Metadata } from "next";
import Link from "next/link";
import { entity } from "@/lib/entity";
import { bookSchema, bookFaq } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { bookReviews, pullQuotes } from "@/lib/reviews";

const b = entity.book;
const paperback = b.formats[0];
const kindle = b.formats[1];
const authorLine = `${b.coAuthors.join(" & ")} & ${entity.name}`;

export const metadata: Metadata = {
  title: `The First AEO Book: ${b.title} (${b.edition})`,
  description: `${b.title} is the first AEO book: the first book on Answer Engine Optimization, by ${entity.name} and ${b.coAuthors.join(" and ")}. How to get your business recommended by ChatGPT, Perplexity and Google AI Mode. #1 Amazon Best Seller, rated ${b.ratings.average} out of 5.`,
  alternates: { canonical: b.path },
  openGraph: {
    title: `The First AEO Book: ${b.title}`,
    description: `The first book on Answer Engine Optimization. ${b.amazonDescription[0]}`,
    url: b.path,
    type: "book",
    images: ["/aeo-blueprint-2026-edition-stack.avif"],
  },
};

const whyPoints = [
  { title: "AI is the first impression now", text: "Buyers ask ChatGPT, Perplexity or Google's AI Mode and get one direct answer. Your website has become the second impression: people visit to confirm what AI already told them." },
  { title: "AI has to understand who you are", text: "Answer engines recommend brands they can identify, describe and confirm across many sources. The book shows how to make your business that brand." },
  { title: "AI needs signals it can trust", text: "Mentions, reviews, structured data and consistent facts tell AI your business is real and the right fit. The book explains which signals matter and how to build them." },
  { title: "Tactics change, the bones don't", text: "Engines and citation sources shift month to month. The AEO Blueprint focuses on the fundamentals that keep working, so you don't rebuild your strategy every time an AI model updates." },
];

const forWho = [
  "Ecommerce brands and founders who want AI to recommend their products",
  "Business owners and entrepreneurs watching search traffic fall while AI answers rise",
  "Marketing leaders who need a plan for AI visibility, not another SEO checklist",
  "Agencies and consultants adding Answer Engine Optimization to their services",
];

const proofImages = [
  { src: "/aeo-blueprint-amazon-listing.avif", alt: "Amazon Kindle listing for The AEO Blueprint: Be the Answer AI Recommends, showing the #1 Best Seller badge in Web Marketing", w: 1200, h: 626 },
  { src: "/aeo-blueprint-bestseller.avif", alt: "Amazon Best Seller badge for The AEO Blueprint", w: 1200, h: 893 },
  { src: "/aeo-blueprint-amz-2.avif", alt: "The AEO Blueprint at #1 Best Seller in Internet Marketing on Amazon", w: 1200, h: 893 },
  { src: "/aeo-blueprint-amz-4.avif", alt: "The AEO Blueprint at #1 Best Seller in Marketing for Small Businesses on Amazon", w: 1200, h: 893 },
  { src: "/aeo-blueprint-amz-3.avif", alt: "Amazon product page for The AEO Blueprint", w: 1200, h: 893 },
];

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span aria-hidden="true" style={{ color: "var(--spring-laser)", letterSpacing: "2px" }}>
      {"★".repeat(full)}{"☆".repeat(5 - full)}
    </span>
  );
}

function BuyButtons() {
  return (
    <div className="actions">
      <a className="btn btn-primary" href={paperback.url} rel="noopener">Get the paperback on Amazon</a>
      <a className="btn" href={kindle.url} rel="noopener">Read it on Kindle</a>
    </div>
  );
}

export default function AeoBlueprintPage() {
  return (
    <article>
      <JsonLd data={bookSchema()} />

      <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--muted)", marginBottom: "1.25rem" }}>
        <Link href="/">Home</Link> / <Link href="/books/">Books</Link> / <span aria-current="page">{b.title}</span>
      </nav>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
        <div>
          <p className="label">The first book on Answer Engine Optimization</p>
          <h1 style={{ marginTop: "1rem" }}>
            {b.title}: The First AEO Book
            <br />
            <span style={{ color: "var(--ink-soft)" }}>{b.subtitle}</span>
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", marginTop: "0.8rem", color: "var(--muted-light)" }}>
            {b.edition} &middot; By {authorLine}
          </p>
          <p style={{ marginTop: "0.9rem", fontSize: "0.9rem" }}>
            <Stars value={b.ratings.average} />{" "}
            <strong style={{ color: "var(--white)" }}>{b.ratings.average} out of 5</strong>{" "}
            <span style={{ color: "var(--muted)" }}>&middot; {b.ratings.count} Amazon ratings &middot; #1 Best Seller in Web Marketing</span>
          </p>
          <p className="lede" style={{ marginTop: "1.25rem" }}>
            <strong style={{ color: "var(--white)" }}>{b.amazonDescription[0]}</strong> {b.amazonDescription[1]}
          </p>
          <BuyButtons />
          <blockquote style={{ margin: "1.5rem 0 0", paddingLeft: "1rem", borderLeft: "2px solid var(--spring-laser)" }}>
            <p style={{ margin: 0, color: "var(--white)", fontStyle: "italic" }}>&ldquo;{pullQuotes[0].quote}&rdquo;</p>
            <p style={{ margin: "0.4rem 0 0", fontSize: "12px", color: "var(--muted)" }}>&mdash; {pullQuotes[0].name}, verified Amazon reader</p>
          </blockquote>
        </div>
        <a href={paperback.url} rel="noopener">
          <img
            src="/aeo-blueprint-2026-edition-stack.avif"
            alt={`${b.title}, the first AEO book, ${b.edition}, by ${b.coAuthors.join(" and ")} and ${entity.name}, standing on a stack of copies`}
            width={1312}
            height={1199}
            style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }}
          />
        </a>
      </section>

      <div className="facts-grid" style={{ marginTop: "2.5rem" }}>
        <div className="fact-cell"><strong>#1</strong><span>Amazon Best Seller</span></div>
        <div className="fact-cell"><strong>{b.ratings.average}&#9733;</strong><span>{b.ratings.count} ratings</span></div>
        <div className="fact-cell"><strong>{paperback.pages}</strong><span>Pages, paperback</span></div>
        <div className="fact-cell"><strong>2026</strong><span>Edition</span></div>
      </div>

      {/* THE PROBLEM */}
      <section className="qa" aria-labelledby="h-problem">
        <p className="label">Why this book</p>
        <h2 id="h-problem" style={{ marginTop: "0.8rem" }}>Why the first AEO book matters now: traditional SEO is losing ground</h2>
        {b.amazonDescription.slice(2).map((p) => <p key={p}>{p}</p>)}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {whyPoints.map((w) => (
            <div className="cell" key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="qa" aria-labelledby="h-for">
        <h2 id="h-for">Who the first AEO book is for</h2>
        <ul style={{ paddingLeft: "1.1rem", marginTop: "0.8rem" }}>
          {forWho.map((x) => <li key={x} style={{ color: "var(--muted)", marginTop: "0.45rem" }}>{x}</li>)}
        </ul>
        <img
          src="/aeo-blueprint-2026-edition-desk.avif"
          alt={`${b.title} ${b.edition} by ${b.coAuthors.join(" and ")} and ${entity.name} lying on a desk`}
          width={1312}
          height={1199}
          loading="lazy"
          style={{ width: "100%", maxWidth: "560px", height: "auto", borderRadius: "8px", display: "block", marginTop: "1.75rem" }}
        />
      </section>

      {/* READERS */}
      <section className="qa" aria-labelledby="h-ratings">
        <p className="label">Readers</p>
        <h2 id="h-ratings" style={{ marginTop: "0.8rem" }}>Rated {b.ratings.average} out of 5 by readers on Amazon</h2>
        <p>{b.ratings.count} global ratings, {b.ratings.distribution[0].pct}% of them five stars ({b.ratings.asOf}).</p>
        <div style={{ maxWidth: "420px", marginTop: "1rem" }}>
          {b.ratings.distribution.map((d) => (
            <div key={d.stars} style={{ display: "grid", gridTemplateColumns: "3.5rem 1fr 2.5rem", gap: "0.6rem", alignItems: "center", marginTop: "0.45rem", fontSize: "12.5px" }}>
              <span style={{ color: "var(--muted-light)" }}>{d.stars} star</span>
              <span style={{ height: "10px", background: "var(--surface-3)", border: "1px solid var(--border-active)", display: "block" }}>
                <span style={{ display: "block", height: "100%", width: `${d.pct}%`, background: "var(--spring-laser)" }} />
              </span>
              <span style={{ color: "var(--muted)", textAlign: "right" }}>{d.pct}%</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1rem" }}>
          Readers call it &ldquo;the manual&rdquo; for AEO, &ldquo;the most thorough explanation of what AEO is&rdquo; and
          &ldquo;a practical step-by-step roadmap&rdquo; from traditional SEO to AEO and GEO.
        </p>
      </section>

      {/* REVIEWS */}
      <section className="qa" id="reviews" aria-labelledby="h-reviews">
        <p className="label">Reader reviews</p>
        <h2 id="h-reviews" style={{ marginTop: "0.8rem" }}>What readers say about the first AEO book</h2>
        <p>Five-star reviews from Amazon readers in the United States, the United Kingdom and Australia, shown as posted.</p>
        <div style={{ columns: "2 320px", columnGap: "1rem", marginTop: "1.5rem" }}>
          {bookReviews.map((r) => (
            <figure key={r.slug} style={{ breakInside: "avoid", margin: "0 0 1rem", border: "1px solid var(--border-active)", background: "var(--surface)", padding: "0.75rem" }}>
              <img
                src={`/reviews/aeo-blueprint-review-${r.slug}.webp`}
                alt={`Screenshot of a 5-star Amazon review of The AEO Blueprint by ${r.name}, titled "${r.title}", reviewed in ${r.country} on ${r.date}${r.verified ? ", verified purchase" : ""}. Full text below.`}
                width={r.w}
                height={r.h}
                loading="lazy"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }}
              />
              <figcaption style={{ fontFamily: "inherit", marginTop: "0.6rem" }}>
                <details>
                  <summary style={{ cursor: "pointer", color: "var(--muted-light)", fontSize: "12px" }}>
                    {r.name} &middot; &#9733;&#9733;&#9733;&#9733;&#9733; &middot; {r.format}{r.verified ? " · Verified Purchase" : ""} &middot; review text
                  </summary>
                  <blockquote style={{ margin: "0.5rem 0 0" }}>
                    <p style={{ margin: 0, color: "var(--white)", fontWeight: 600, fontSize: "13px" }}>{r.title}</p>
                    {r.text.map((t, i) => <p key={i} style={{ margin: "0.4rem 0 0", fontSize: "13px" }}>{t}</p>)}
                    <p style={{ margin: "0.4rem 0 0", fontSize: "11.5px", color: "var(--muted)" }}>
                      &mdash; {r.name}, reviewed in {r.country} on {r.date}{r.truncated ? " (excerpt)" : ""}
                    </p>
                  </blockquote>
                </details>
              </figcaption>
            </figure>
          ))}
        </div>
        <p style={{ marginTop: "0.5rem" }}><a href={paperback.url} rel="noopener">Read all reviews on Amazon &rarr;</a></p>
      </section>

      {/* BESTSELLER PROOF */}
      <section className="qa" aria-labelledby="h-bestseller">
        <h2 id="h-bestseller">The first AEO book, a #1 Amazon Best Seller in three categories</h2>
        <p>{b.bestsellerNote}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
          {proofImages.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: "6px", display: "block" }} />
          ))}
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="qa" aria-labelledby="h-framework">
        <p className="label">The framework behind the book</p>
        <h2 id="h-framework" style={{ marginTop: "0.8rem" }}>From the book to {entity.brain.name}</h2>
        <p>
          The book&apos;s core idea is simple: AI needs to understand who a brand is, find signals it can trust and confirm
          them across sources before it recommends it. {entity.name} turned that into {entity.brain.name}, five pillars in
          the order AI needs them:
        </p>
        <dl className="rows">
          {entity.brain.pillars.map((p) => (
            <div className="row" key={p.letter}>
              <dt>{p.letter} &middot; {p.title}</dt>
              <dd>{p.chainStep}</dd>
            </div>
          ))}
        </dl>
        <div className="actions">
          <Link className="btn" href={entity.brain.path}>Explore the B.R.A.I.N. Framework</Link>
        </div>
      </section>

      {/* AUTHORS */}
      <section className="qa" aria-labelledby="h-authors">
        <h2 id="h-authors">About the authors</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="cell">
            <span className="n">Co-author</span>
            <h3><Link href="/about/" style={{ color: "var(--white)" }}>{entity.name}</Link></h3>
            <p>
              Head Strategist for the AEO Team at {entity.org.name}, Head of Research for AEO.co and creator of
              the B.R.A.I.N. Framework. A self-described &quot;recovering graphic designer&quot; with more than 12 years in
              branding, graphic design and animation. The AEO Blueprint is his first book.
            </p>
          </div>
          {b.coAuthorBios.map((a) => (
            <div className="cell" key={a.name}>
              <span className="n">Co-author</span>
              <h3>{a.name}</h3>
              <p>{a.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILS */}
      <section className="qa" aria-labelledby="h-details">
        <h2 id="h-details">Book details</h2>
        <dl className="rows">
          <div className="row"><dt>Title</dt><dd>{b.title}: {b.subtitle}</dd></div>
          <div className="row"><dt>Authors</dt><dd>{authorLine}</dd></div>
          <div className="row"><dt>Edition</dt><dd>{b.edition}</dd></div>
          <div className="row"><dt>Paperback</dt><dd>{paperback.pages} pages &middot; ISBN-13 {paperback.isbn13} &middot; ASIN {paperback.asin} &middot; {paperback.dimensions} &middot; published October 20, 2025</dd></div>
          <div className="row"><dt>Kindle</dt><dd>{kindle.pages} pages &middot; ASIN {kindle.asin} &middot; published October 21, 2025</dd></div>
          <div className="row"><dt>Publisher</dt><dd>{b.publisher}</dd></div>
          <div className="row"><dt>Language</dt><dd>{b.language}</dd></div>
          <div className="row"><dt>Awards</dt><dd>{b.awards}</dd></div>
        </dl>
      </section>

      {/* FAQ */}
      <section className="qa" aria-labelledby="h-faq">
        <p className="label">FAQ</p>
        <h2 id="h-faq" style={{ marginTop: "0.8rem" }}>Questions about The AEO Blueprint</h2>
        {bookFaq.map((f) => (
          <div key={f.q} style={{ marginTop: "1.25rem" }}>
            <h3>{f.q}</h3>
            <p style={{ marginTop: "0.4rem" }}>{f.a}</p>
          </div>
        ))}
      </section>

      {/* CLOSING CTA */}
      <section className="qa" aria-labelledby="h-cta" style={{ textAlign: "center" }}>
        <h2 id="h-cta">Be the answer AI recommends.</h2>
        <p style={{ marginInline: "auto" }}>Get {b.title}, the first AEO book, on Amazon in paperback or Kindle.</p>
        <div style={{ display: "flex", justifyContent: "center" }}><BuyButtons /></div>
      </section>
    </article>
  );
}
