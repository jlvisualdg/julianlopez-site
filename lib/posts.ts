// =============================================================================
// BLOG POSTS — Single source of truth.
// To publish a new post: add an object to the posts array below.
// Fields: slug (URL), title, date (YYYY-MM-DD), tags, author, excerpt, body.
//
// Body formatting (plain text, no HTML needed):
//   ## Heading      → renders as <h2>
//   ### Subheading  → renders as <h3>
//   - Item          → renders as list item (consecutive lines grouped)
//   blank line      → paragraph break
// =============================================================================

export type Post = {
  slug: string;
  title: string;
  date: string;       // YYYY-MM-DD
  tags: string[];
  author: string;
  excerpt: string;    // 1–2 sentences shown on the listing page
  body: string;       // full post content using the format above
};

export const posts: Post[] = [
  {
    slug: "why-ai-ignores-your-brand",
    title: "Why AI Ignores Your Brand (And What To Do About It)",
    date: "2026-07-30",
    tags: ["AEO", "Brand Entity", "AI Search"],
    author: "Julian Lopez",
    excerpt:
      "Most brands are invisible to AI not because they're doing something wrong — but because they were never designed to be machine-readable in the first place.",
    body: `Most brands are invisible to AI not because they're doing something wrong — but because they were never designed to be machine-readable in the first place.

That distinction matters. A lot.

## The problem isn't your content

You've written the blog posts. You've done the SEO. You've built the backlinks. And still, when someone asks ChatGPT or Perplexity who the best option is in your category, your brand doesn't come up.

The instinct is to produce more content. More blog posts. More social media. More Google Ads.

None of that addresses the actual problem.

## AI doesn't read. It retrieves.

Search engines index pages and rank them. AI answer engines do something different: they retrieve entities and assemble answers from what they've learned about those entities.

If AI doesn't have a clear, consistent, machine-readable understanding of what your brand is — not what you do, what you are — it can't recommend you. It doesn't have the confidence to put your name in an answer.

That's the gap. Not visibility. Clarity.

## What machine-readable actually means

It means three things, in this order.

First: your brand exists as a distinct entity. Not just a website. An entity with a name, a description, a category, a set of relationships to other known things. Schema markup is how you declare this formally. The Organization type, the Person type, the Product type — these are the vocabulary AI uses to build its understanding.

Second: that entity description is consistent everywhere AI looks. Your website says one thing. Your LinkedIn says another. Your press mentions call you something else entirely. AI averages all of it, and the average is incoherent.

Third: independent sources corroborate what you claim. AI is not going to recommend a brand based solely on what that brand says about itself. It needs third-party confirmation. Citations. Mentions. The same entity description appearing across sources it already trusts.

## The B.R.A.I.N. order is not arbitrary

Brand Representation comes first in the BRAIN Framework for a reason. AI forms its opinion about your brand from external sources — third-party mentions, review sites, directories, press — before it ever reads your website. If your external footprint is weak, incoherent, or absent, the rest of the framework can't compensate.

You cannot index-optimize your way out of a brand representation problem.

## The one question worth asking

If someone asked an AI "who is the best [your category] for [your ideal customer]" right now — what would it say?

That answer, or the absence of your name in it, is the clearest signal of where you actually stand.

The good news: this is fixable. The BRAIN Framework exists precisely to walk brands through it, in the right order, without guesswork.`,
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
