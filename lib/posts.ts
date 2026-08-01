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

The honest reason: the exchange rate. Living in Argentina and earning in dollars was a lifeline, not a vocation. I won't dress that up as a calling. It was survival with upside.

But survival got me to the right room.

Pareto Talent is a staffing agency that places people from Argentina and Colombia as right-hand operators to business owners in the United States. It's a specific kind of environment — you're not filling a role, you're being embedded in how someone thinks and builds.

I ended up working alongside Kasim Aslam. He created Solutions 8, the largest Google Ads agency in the world — managing over $100 million in ad spend a year. That's where the marketing education actually happened. Not in a course. Not in a classroom. Inside the machine, watching what actually moved the needle at scale.

That's where everything started.

The rest of that story I'll come back to in further posts. Here's what came after.

## The state of denial I recognized

While I was researching search — its origin, its mechanics, its latest developments — I noticed something strange about the industry I was entering.

The people who should have been the most curious were the most resistant.

Publications were running pieces on why AI search was flawed, why zero-click numbers were overstated, why the old playbook still worked if you just executed it correctly. Practitioners were spending more time criticizing the new features than trying to understand them.

I recognized the posture. I'd been in it myself — back when I was running a printshop full of machines and no system for actually selling what they produced.

For most people in the SEO industry, less traffic and fuzzy attribution was the end of the conversation. A problem to defend against. A loss to grieve.

I saw it differently. If you're a practitioner who has spent a career on being right about where digital attention moves, this is the most interesting moment in the last decade. The puzzle changed. The variables are different. The answer requires work nobody has fully figured out yet.

That's not a loss. That's adrenalin.

## What I found when I stopped defending

I co-authored the first best-selling book on Answer Engine Optimization. I ran a research team of eight people for over a year — specifically to figure out how AI recommends brands. Not in theory. Across categories, at scale, inside real client accounts.

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

## Where your brand sits right now

When someone asks an AI engine about your category, your brand is in one of three states.

Visible — AI knows you exist. It can name you. Most established brands with decent SEO are already here. This is the floor, not the goal.

Understood — AI can describe what you do, who you're for, and why you matter in that category. It has enough coherent signal to include you in the conversation. This is where the work starts to compound.

Recommended — AI mentions you without qualification, unprompted, as the answer to the question. This is what we're building toward.

The gap between Visible and Recommended isn't budget. It's clarity. AI doesn't reward the biggest brand — it rewards the most clearly defined one.

## The first thing to fix

Before schema. Before new content. Before anything technical.

Open LinkedIn. Crunchbase. Your industry directory listings. Your About page. Put them side by side.

Are they describing the same company in the same words? Or does each platform have its own version?

If AI reads five different descriptions across five platforms, it doesn't average them. It gets uncertain — and an uncertain AI won't recommend you. You stay Visible when you could be Recommended.

This is the work most brands skip because it's tedious and unglamorous. It's also the work that moves the needle fastest — because you're not building something new. You're aligning what already exists.

You're building the business brain. The structured, consistent, machine-readable entity that sits underneath everything the brand does. Right now, that's a competitive advantage. Within a few years, it'll be table stakes.

## What this is

I write the AEO Changelog for people who've built careers on being right about where to invest attention — and who see the current shift not as a loss but as the hard new puzzle that makes the work worth doing.

No theory. What I'm testing. What I'm finding. What I got wrong. Specific mechanics. Real audits. Live experiments from client work.

If you want to be the brand AI recommends when your customer asks, you're in the right place.

The community building this together is at skool.com/aeo. That's where I spend most of my time — because Network isn't a pillar on a slide. It's how this gets figured out.

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
  {
    slug: "aeo-changelog-welcome",
    title: "AEO Changelog: The Shift Already Happened",
    date: "2026-07-30",
    tags: ["AEO", "BRAIN Framework", "Answer Engines", "Newsletter"],
    author: "Julian Lopez",
    excerpt:
      "AI didn't come to search. It replaced it. And most brands are completely invisible to the new system — not because they did something wrong, but because they were never built for it.",
    body: `I want to tell you about a conversation I had with a founder six months ago.

She ran a successful e-commerce brand. Seven figures. Strong SEO. Good content. She asked me to pull up ChatGPT and search for something a customer would realistically ask about her category.

Her brand didn't appear. Not in the first response. Not in the follow-ups. Not even when I pushed.

She was confused. She ranked well on Google. She had backlinks. She had a blog. "What am I missing?" she asked.

I told her: everything you built was for the old system.

## The shift already happened

Search engines index pages and rank them. Answer engines — ChatGPT, Perplexity, Gemini, Google AI Mode — do something fundamentally different. They retrieve entities, synthesize across sources, and produce a single answer. There's no page 2. There's no "10 blue links." There's a recommendation.

And that recommendation either includes your brand or it doesn't.

Here's what makes it harder: AI forms its opinion about your brand before it ever visits your website. Internal research suggests AI spends 66%+ of its retrieval budget on third-party sources — industry blogs, review sites, community discussions — to identify and validate candidates before touching your domain. If you only exist on your own properties, you're invisible at the selection phase.

The founder's content was excellent. It just lived in the wrong part of the internet for how AI retrieves.

This wasn't a one-off. I've had this exact conversation — same confusion, same gap — with founders and marketing teams across every category I've worked in. Different products, different markets, different budgets. Same blind spot. The brands doing everything right by the old playbook, invisible to the new one.

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
