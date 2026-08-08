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
    slug: "adrenalin-in-the-cubicle",
    title: "Adrenalin in the Cubicle: A Brand New Puzzle",
    date: "2026-08-01",
    tags: ["AEO", "Origin Story", "BRAIN Framework", "Answer Engines"],
    author: "Julian Lopez",
    excerpt:
      "I spent a year running a research team of eight people to figure out how AI decides which brands to recommend. But the path that got me there — a printshop, artisanal beer, and a business laboratory — explains why I approach this differently.",
    body: `I spent a year running a research team of eight people to answer one question.

How does AI actually decide which brands to recommend?

Not in theory. Not from whitepapers. Across categories, inside real client accounts, observing what got cited and what didn't.

The findings changed how I think about visibility entirely. But the path that got me to that question — that's worth explaining first, because it explains why I approach this differently than most people in the industry.

## The craftsman who learned to sell everything else

Before any of this, I ran a printshop. One man, more equipment than I had hands. I was deeply in love with the craft — the identity work, the technical execution, the part where you make something real from nothing.

What I lacked wasn't drive. It was the commercial layer — understanding the client, communicating clearly about the problem I solved, building a system for selling consistently. That gap is only dangerous when you can't see it. And for a long time, I couldn't.

But what that chapter gave me was something no classroom ever could: the stubbornness to figure things out under real pressure.

When the finances got tight, I didn't fold. I improvised. I learned to bake — real baking, structured recipes, something worth paying for. I brewed artisanal beer and learned how to move it. I sold peanuts, almonds, and oatmeal like it was illegal. It wasn't. But the energy felt like it should be — that particular kind of hustle where you're betting on yourself with very little margin for error.

Each of those small ventures was its own education. Each required showing up, making something worth buying, and convincing someone to hand over money for it. That's where I first understood the difference between production and commerce. Between craft and the thing that makes craft sustainable.

The bills still stacked. I'd just moved into a new apartment with my girlfriend — now my wife — when the building sent a notice: six months of unpaid fees, due immediately, in one retroactive bill.

All that hustle, and it still wasn't enough for the life I needed to build.

That wasn't a signal to give up. It was a signal to leap.

## The business laboratory

At some point, resilience isn't about grinding harder at the same thing. It's about recognizing when a completely different kind of bet is required.

Pareto Talent is a staffing agency that places operators from Colombia and Argentina alongside business owners in the United States. Through them, I ended up working alongside Kasim Aslam — who built Solutions 8, the largest Google Ads agency in the world, managing over $100 million in ad spend a year.

My title was Executive Assistant. What I actually became was a business builder.

Kasim runs what can only be described as a business laboratory — an environment where you're not filling a role, you're embedded in how someone thinks, builds, and moves. Where the people around you are obsessed with solving hard commercial problems, and the standard for what's worth doing is set by outcomes, not effort.

That's where the real marketing education happened. Not from a course. Not from a certification. Inside the machine, trying to engineer outcomes.

And inside that machine, something caught our attention.

AI was changing search. Not gradually. Structurally. The way brands get recommended, the way questions get answered, the way visibility gets assigned — all of it was being rewritten at the infrastructure level.

Most of the industry was busy debating whether the shift was real. We thought that was the wrong question. The more interesting question was: how does AI actually decide which brands to recommend?

We just went at it.

## What a year of studying citations actually showed

I co-authored the first best-selling book on Answer Engine Optimization. Then I assembled eight people and we spent over a year doing the unglamorous work: analyzing AI responses, tracking citation patterns, testing what moved the needle.

We turned the findings into the B.R.A.I.N. Framework. Five pillars. Not a theory — a model built from observation.

### Entity clarity beats domain authority.

I've watched brands with DA 70+ lose to brands with DA 30. The difference: the smaller brand had the same name, description, and positioning across every platform AI touches. When AI can describe you in one sentence that holds up everywhere it looks, authority matters less than you'd think. When your description fragments across platforms, no amount of backlinks saves you.

### Most of the work that determines AI visibility happens off your site.

AI sources its understanding of your brand from third-party surfaces before it ever touches your domain. Industry publications. Reviews. Forums. Directories. Yet most AEO advice starts and ends with schema markup on the brand's own website. That's the last mile. The first twenty-six happen somewhere else.

### Structure beats volume.

44.2% of ChatGPT citations come from the first 30% of page content. AI doesn't scroll. It operates on a computational budget. If your key claims are buried under scene-setting and preamble, you're not thorough — you're invisible.

### The metric that matters is the one the industry forgot.

Branded search volume. Not rankings. Not traffic. Not citation count. AI retrieval systems reward brands that people look up by name. The SEO industry spent a decade optimizing away from branded search. AI just made it the most important signal again.

## On gratitude

None of this happens without Kasim. The laboratory he created — the way he thinks, builds, and gives people room to discover things at full speed — was exactly the environment I needed to find the problem worth solving. I'm grateful for that in ways that are hard to measure but easy to feel.

And then came the Smart Marketer team.

Working with them has taught me something I think about constantly: there's a ceiling on what any one person can figure out alone, and the right team blows that ceiling off entirely. What Smart Marketer compounds isn't just output — it's the human value per hour. The quality of what you learn, who you learn it from, and how much of your actual potential gets unlocked in the process. That's what working alongside people who are genuinely great at what they do actually feels like. It raises the bar on what you thought you were capable of.

The printshop taught me resilience. The side hustles taught me that commerce is its own craft. Kasim's laboratory taught me how to think in systems. The research team taught me how to build knowledge from scratch. And Smart Marketer showed me what it looks like when all of it compounds.

## What this is actually about

I used to think the cubicle was something to escape. It turned out to be the only place I could have learned what I needed for what came next.

The focus you develop when you can't afford to be wrong — that's the energy this work demands. Not patience. Not process. The willingness to notice what everyone else is defending against and ask what it actually means.

I write for ecommerce brand owners and personal brands who see the shift the same way — not as a loss to manage, but as the most interesting puzzle in a decade. And I write to be a guide for others stepping into these new experiences. Because the people who thrived through every previous shift in marketing weren't the ones who waited for the dust to settle. They were the ones who moved while the ground was still shifting.

That's where we are right now. And it's the best time to be paying attention.

I run the AEO Changelog. I share what I'm testing, finding, and getting wrong. No theory. What the data says.

The community is at skool.com/aeo. That's where I spend my time.

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

Next: Adrenalin in the Cubicle — how I went from a one-man printshop and a retroactive rent bill to running AEO research for one of the biggest marketing agencies in the world. And what the SEO industry's reaction to the AI shift has in common with my own state of denial.

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
