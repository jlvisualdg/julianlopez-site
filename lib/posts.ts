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
      "I couldn't imagine leaving branding to pursue marketing. It took a printshop full of machines, a retroactive rent bill, and Kasim Aslam to show me the other half of the business — and eventually, the most interesting puzzle in marketing.",
    body: `I couldn't imagine leaving branding to pursue marketing.

Branding felt like the real craft — the identity layer, the visual language, the thing that earns a product its place in the world. Marketing felt downstream. More transactional. Too far from the thing I actually cared about making.

I was wrong about that. And the way I found out cost me more than I expected.

## The half of the business I wasn't running

I had a one-man printshop. More equipment than I had hands to run it.

I was skilled, creative, tenacious — the kind of person who figures out the technical side through sheer stubbornness. I could execute. I could produce. What I couldn't do — for longer than I should admit — was the other half of the business.

That half looks like this: understanding your client, talking clearly about the problem your product solves, and selling consistently. Not when you felt like it. Consistently.

I had mastered one side and ignored the other entirely. Not out of laziness. I genuinely didn't register it as a gap. That's the most dangerous kind of blind spot — the one you can't see because you've never had a reason to look.

The bills started stacking. The machines that were supposed to pay for themselves weren't.

I'd recently moved with my girlfriend — now my wife — into a new apartment. Then the building management sent a notice: the fees they'd failed to charge for six months were coming due in a single retroactive bill.

The lights were about to go out. Quite literally.

I had two options. Double down on the strategy that wasn't working. Or jump into territory I didn't know.

## The jump that wasn't about calling

I became an Executive Assistant.

The honest reason: the exchange rate. Living in Colombia and earning in dollars was a lifeline, not a vocation. I won't dress that up as a calling. It was survival with upside.

But survival got me to the right room.

Pareto Talent is a staffing agency that places people from Colombia and Argentina as right-hand operators to business owners in the United States. It's a specific kind of environment — you're not filling a role, you're being embedded in how someone thinks and builds.

I ended up working alongside Kasim Aslam. He created Solutions 8, the largest Google Ads agency in the world — managing over $100 million in ad spend a year. That's where the marketing education actually happened. Not in a course. Not in a classroom. Inside the machine, trying to engineer success.

That's where everything started.

The rest of that story I'll come back to in further posts. Here's what came after.

## The state of denial I recognized

While I was researching search — its origin, its mechanics, its latest developments — I noticed something strange about the industry I was entering.

The people who should have been the most curious were the most resistant.

Publications were running pieces on why AI search was flawed, why zero-click numbers were overstated, why the old playbook still worked if you just executed it correctly. Practitioners were spending more time criticizing the new features than trying to understand them.

I recognized the posture. I'd been in it myself — back when I was running a printshop full of machines and no system for actually selling what they produced.

For most people in the SEO industry, less traffic and fuzzy attribution was the end of the conversation. A problem to defend against. A loss to grieve.

I saw it differently. If you're a practitioner who has spent a career on being right about where digital attention moves, this is the most interesting moment in the last decade. The puzzle changed. The variables are different. The answer requires work nobody has fully figured out yet.

That's not loss. It's fear with a mix of adrenalin.

## What I found when I stopped defending

I co-authored the first best-selling book on Answer Engine Optimization. I ran a research team of eight people for over a year — specifically to figure out how AI recommends brands. Not in theory. Across categories, inside real client accounts.

What we built from that research is the B.R.A.I.N. Framework — five pillars designed to address the full complexity of AI retrieval while keeping your audience at the center. Not just technical signals. Not just content volume. The complete picture of what an answer engine is actually evaluating when it decides whether to recommend your brand.

Here's what the research keeps showing.

### Domain authority doesn't win. Entity clarity does.

I've watched brands with DA 70+ get passed over for brands with DA 30. The difference wasn't backlinks or page speed. The smaller brand had a perfectly consistent entity definition across 15+ platforms — the same name, description, and positioning everywhere AI looks. When AI can describe you in one sentence that matches everywhere, your authority score matters less than you think. When your description fragments, no amount of backlinks saves you.

### Most of the work happens off your site.

AI sources its understanding of your brand from third-party sources before it ever reaches your domain. Industry publications. Review sites. Community discussions. Directories. Yet most AEO strategies start and end with schema markup on the brand's own site. That's the last mile. The first twenty-six happen somewhere else entirely.

### Structure beats volume. Every time.

44.2% of ChatGPT citations come from the first 30% of page text. Not from deep in a 3,000-word post. From the top. AI operates on a computational budget — it doesn't scroll. If your key claims are buried under three paragraphs of scene-setting, you're not being thorough. You're invisible.

### Everything old is new again.

The metric that actually predicts AI visibility isn't rankings, traffic, or citation count. It's branded search volume. The thing everyone forgot about while chasing algorithms for a decade. AI retrieval systems reward brands that are recognized, remembered, and looked up by name. The SEO industry spent ten years optimizing away from that. AI just made it the most important metric again.

## What the cubicle was actually for

I spent a long time thinking the cubicle was something to escape.

Turns out it was the only place I could have learned what I needed to solve what came next.

The adrenalin from that period — the particular focus of someone who can't afford to be wrong — that's exactly the energy this work requires. Not patience. Not process. The hunger to notice what everyone else is defending against and ask what it actually means.

That's the brand new puzzle. Built for the adrenalin I picked up in that cubicle.

I write the AEO Changelog for people who see the AI shift the same way — not as a loss, but as the most interesting thing to figure out in the last decade. No theory. What I'm testing. What I'm finding. What I got wrong.

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
