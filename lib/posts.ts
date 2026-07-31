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
    slug: "aeo-changelog-welcome",
    title: "AEO Changelog: The Shift Already Happened",
    date: "2026-07-30",
    tags: ["AEO", "BRAIN Framework", "Answer Engines", "Newsletter"],
    author: "Julian Lopez",
    excerpt:
      "AI didn't come to search. It replaced it. And most brands are completely invisible to the new system — not because they did something wrong, but because they were never built for it.",
    body: `I want to tell you about a conversation I had with a founder six months ago.

She ran a successful e-commerce brand. Seven figures. Strong SEO. Good content. She asked me to pull up ChatGPT and search for her category — "best magnesium supplement for sleep."

Her brand didn't appear. Not in the first response. Not in the follow-ups. Not even when I pushed.

She was confused. She ranked well on Google. She had backlinks. She had a blog. "What am I missing?" she asked.

I told her: everything you built was for the old system.

## The shift already happened

Search engines index pages and rank them. Answer engines — ChatGPT, Perplexity, Gemini, Google AI Mode — do something fundamentally different. They retrieve entities, synthesize across sources, and produce a single answer. There's no page 2. There's no "10 blue links." There's a recommendation.

And that recommendation either includes your brand or it doesn't.

Here's what makes it harder: AI forms its opinion about your brand before it ever visits your website. Internal research suggests AI spends 66%+ of its retrieval budget on third-party sources — industry blogs, review sites, community discussions — to identify and validate candidates before touching your domain. If you only exist on your own properties, you're invisible at the selection phase.

The founder's content was excellent. It just lived in the wrong part of the internet for how AI retrieves.

## This isn't SEO with a new name

I want to be clear about what Answer Engine Optimization actually is — and what it isn't.

It isn't "do your SEO, but also add schema." It isn't a plugin or a checklist. It's a different model of how brands need to exist in the world. Because AI doesn't rank — it recommends. And to be recommended, AI needs to be confident about what you are.

That confidence comes from one thing: clarity. Not visibility. Clarity.

If AI can't describe your brand in one consistent sentence — if your LinkedIn says one thing, your website says another, and the third-party reviews say a third — AI won't recommend you. The uncertainty is too high. It hedges instead: "According to their website, they claim to..."

A hedging AI is a lost sale.

## The three states your brand can be in

When someone asks AI about your category right now, your brand is in one of three states:

Visible — AI knows you exist. It can name you. But that's the floor, not the goal.

Understood — AI can describe what you do, who you're for, and why you're relevant. It has enough signal to place you in the conversation.

Recommended — AI mentions you without qualification, unprompted, as the answer. This is what we're building toward.

Most brands I audit are stuck at Visible at best. Often not even that. The good news: all three states are buildable. The bad news: they require building something most brands have never thought to build.

## What I've built to solve it

Over the past two years — running an agency, working with Cohort 1 and Cohort 2 clients across verticals — I've developed a framework called B.R.A.I.N.

Brand Representation · Research · Audience · Indexability · Network.

Five pillars. A causal chain, not a checklist. Each one assumes the previous is in place.

B is external presence — because AI builds its understanding of your brand from what third parties say about you, not what you say about yourself. Brands cited across four or more independent sources are 2.8× more likely to appear in ChatGPT.

R is ongoing research — because AI retrieval behavior changes on a timescale of months. A strategy built on a six-month-old audit is already out of date.

A is Audience — because AI doesn't recommend generic brands. It recommends brands that demonstrably answer specific questions for specific people in specific situations.

I is Indexability — because AI can't "see" your website. It reads the data layer. 44.2% of ChatGPT citations come from the first 30% of page text. Structure matters more than volume.

N is Network — because AI builds trust from co-citation chains, NEEATT signals, and entity relationships. Branded web mentions have a stronger correlation with AI visibility than backlinks. Stronger than domain rating. The machine watches what others say when you're not in the room.

This isn't five things to do. It's one system, built in order, that moves a brand from invisible to recommended.

## What this newsletter is

Every issue of the AEO Changelog will go one layer deeper on some part of this system — specific mechanics, live experiments from client work, what's actually moving the needle versus what just sounds good in a conference deck.

I don't write theory. I write what I'm running. What I've found. What I got wrong.

If you're building an e-commerce brand and you want to be the brand AI recommends when your customer asks — this is the right place to be.

The community lives at skool.com/aeo. If you want to work through this with other practitioners, that's where I spend my time.

Let's build.`,
  },
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
