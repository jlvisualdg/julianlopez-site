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
    slug: "what-nobody-tells-you-about-getting-your-brand-into-ai-answers",
    title: "What Nobody Tells You About Getting Your Brand Into AI Answers",
    date: "2026-08-01",
    tags: ["AEO", "Origin Story", "BRAIN Framework", "Answer Engines"],
    author: "Julian Lopez",
    excerpt:
      "Most brands aren't in AI answers — not because they're bad brands, but because they never built the signals AI looks for. I spent a year with a research team of eight figuring out exactly what those signals are.",
    body: `If you run an ecommerce brand or a personal brand, here's the problem you probably haven't felt yet.

AI is becoming the interface between your customers and your business.

When someone asks ChatGPT "what's the best [product] for [need]," it answers. When they search Google and an AI Overview sits above every link, it answers. When their voice assistant recommends a provider, it answers.

The question is whether your brand is in that answer.

Most brands aren't. Not because they're bad brands. Because they never built the signals AI systems look for when deciding who to cite and recommend.

I know this because I spent a year running a research team of eight people to figure out exactly how AI makes those decisions. Not in theory. Across categories, inside real client accounts, tracking what got cited and what didn't.

Here's what we found and what to do with it.

## How I got here (the short version)

Before any of this, I ran a printshop. I was good at the craft and terrible at the other half — understanding clients, communicating clearly, selling consistently. The bills stacked up. The lights were about to go out.

Survival pushed me into an Executive Assistant role in Colombia, where I ended up working alongside Kasim Aslam at Solutions 8 — the largest Google Ads agency in the world. That's where I actually learned marketing. Inside the machine, trying to engineer outcomes.

When I later started researching how AI was changing search, I noticed the same posture I once had in that printshop: practitioners defending the old way instead of studying the new one. Articles about why AI search was flawed. Arguments that the old playbook still worked.

I recognized it immediately. That was me — insisting the craft was enough while the bills stacked up.

So I did what nobody else seemed to be doing. I built a research team. Eight people. Over a year. We pulled apart citation patterns, analyzed thousands of AI responses, and tracked what actually moved the needle.

We turned the findings into the B.R.A.I.N. Framework — five pillars, built from observation, not theory.

## Four things the research keeps showing

### Entity clarity beats domain authority.

Brands with DA 30 outrank brands with DA 70+ when the smaller brand has the same name, description, and positioning across every platform AI touches. When AI can describe you in one sentence that holds up everywhere it looks, authority matters less. When your description fragments, nothing saves you.

### Most of the work that determines AI visibility happens off your site.

AI sources its understanding of your brand from third-party surfaces — industry publications, reviews, forums, directories — before it ever touches your domain. Yet most AEO advice starts and ends with schema markup on your own website. That's the last mile. The first twenty-six happen somewhere else.

### Structure beats volume.

44.2% of ChatGPT citations come from the first 30% of page content. AI doesn't scroll. If your key claims are buried under preamble, you're invisible.

### The metric that matters is the one the industry forgot.

Branded search volume. Not rankings. Not traffic. AI systems reward brands that people look up by name. The industry spent a decade optimizing away from branded search. AI just made it the most important signal again.

## What this means for you

If you're building an ecommerce brand or a personal brand, the window is open. AI-mediated discovery is reorganizing how customers find businesses. The brands that build the right signals now get locked in as defaults. Everyone else becomes harder to find.

I write the AEO Changelog for people who see this shift the same way — not as a loss to manage, but as the most interesting problem in a decade. I share what I'm testing, finding, and getting wrong. No theory. What the data says.

The community is at skool.com/aeo.

Let's build.`,
  },
  {
    slug: "why-traffic-fell-while-rankings-held",
    title: "Why Your Traffic Fell While Your Rankings Didn't",
    date: "2026-08-01",
    tags: ["AEO", "Zero-Click Search", "Traffic", "Analytics"],
    author: "Julian Lopez",
    excerpt:
      "Your rankings held, your technical SEO is clean, and traffic is still going down. Here's the honest explanation — and it's not one a CTR optimization sprint is going to solve.",
    body: `A marketing director sent me a screenshot last month. Google Search Console. 90-day view.

Impressions: up 22%. Clicks: down 18%.

Her first message: "The SEO agency said everything's working."

Her second, an hour later: "Why is everything working and traffic is still going down?"

I've gotten versions of this question a dozen times in the last six months. Different industries, different-sized brands, same chart. The metrics that used to move together stopped moving together — and nobody on the existing team has a clean explanation for why.

Here's the honest one.

## The playbook is running on dead assumptions

For twenty years, digital marketing operated on a chain that felt like physics: impressions led to clicks, clicks led to sessions, sessions led to revenue. Optimize each link in the chain and the business grew. The logic was clean. The feedback loops were tight.

That chain broke at the first link.

The SEO discipline was designed for a world where receiving an impression meant a person was about to decide whether to click. That's no longer the world. A growing share of impressions now end inside the AI interface. The user received the answer, closed the tab, moved on. Your rankings held. The SERP still shows your page. But above the first organic result, there's an AI-generated response — and for informational queries, that response is where the journey ends.

The technical name is zero-click search. More than half of online searches now end without a website visit. That share has moved in one direction since 2014. AI accelerated it.

This is not a failure of SEO. Your content is being indexed, your pages are being ranked, the system is working exactly as designed. The design was built for a world where clicking through was the natural next step. That world is smaller every quarter.

## What I'm finding across client accounts

### Optimizing CTR treats the symptom, not the source.

The instinct when clicks fall is to improve the title tag. Better meta description. A/B test the snippet. Run a few variants.

None of that addresses why the click didn't happen. The click didn't happen because an AI engine answered the question one step earlier in the journey — before the user ever reached the organic results. No headline improvement changes what happens in the layer above your page.

I've watched brands spend three months iterating on title tags while their AI visibility problem compounded untouched. The chart kept getting worse. The titles kept getting better. These are not the same problem.

### Informational queries went first. The consideration layer is going next.

Zero-click started with purely informational queries — how does X work, what's the difference between Y and Z, who handles this type of problem. Those moved into AI interfaces and stopped coming out.

Commercial queries — ones where the user intends to buy — still drive clicks, because a user who wants to purchase still needs to visit a page to complete the transaction. That's stable for now.

But watch the middle layer. The research phase — where someone forms a preference before they're ready to buy — is moving fully into AI. Customers are arriving at your site with opinions already formed. If your brand wasn't present in the AI conversation during that research phase, the customers who do arrive may already have a different brand in mind.

### Ranked and recommended are now two different things.

Search engines reward pages. Answer engines reward entities.

Those two systems use different criteria, produce different winners, and require different strategies. A brand can hold position one on a high-volume keyword and receive zero AI citations for the same query — because citation is driven by entity clarity, external corroboration, and answer-first content structure. Not by keyword density or link equity alone.

I've seen this pattern consistently: a brand visible at the top of search results, invisible in AI answers for the same queries. The SEO is working. The AEO problem is untouched.

### The fix is upstream of your website.

AI forms its opinion about your brand from third-party sources before it ever reaches your domain. Industry publications. Review platforms. Community discussions. Directories. It cross-references these to build its understanding of what you are and whether you're worth recommending.

Most AEO strategies start with schema markup on the brand's own site. That's the last mile. The brands getting cited have clean, consistent entity definitions across those external sources. The brands not getting cited are spending their optimization budget on properties AI hasn't validated them through yet.

You're doing the last mile while ignoring the first twenty-six.

## The first question to ask

Before you touch a title tag, open ChatGPT and Perplexity. Type the question your best customer asks when they're actively looking for what you sell — not a keyword-research query, the actual question from your sales calls and DMs.

Does your brand appear?

If it doesn't, that's your baseline and your problem statement. Not a click-through rate problem. A recommendation problem. The fix is entity clarity: a consistent, machine-readable definition of what you are and who you serve, built across the sources AI consults before it reaches your site.

That's different work than SEO. It's also more durable — because it compounds the same way brand authority always has.

## Most will adjust the meta descriptions

Most people who read this will go back to their analytics, look at the divergence, and add it to the list of things to monitor. Uncomfortable but not urgent enough to change the strategy.

A few will ask a different question: what does AI actually think about my brand right now?

That's where this work starts. And if you're in that second group, the AEO Changelog is where I document what I'm finding — the patterns across client accounts, the specific mechanics, the things that actually moved the needle.

Next: What Nobody Tells You About Getting Your Brand Into AI Answers — the four things a year of citation research kept showing, and what to do about them.

Let's build.`,
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
