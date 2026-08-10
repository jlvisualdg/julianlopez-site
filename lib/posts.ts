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
      "AI is the quickest path to an answer — and most brands aren't in those answers. I spent a year with a research team of eight finding the patterns that explain why, and building the B.R.A.I.N. Framework from what we found.",
    body: `AI is not a way to get results — it's the quickest path to an answer.

AI understands your query, not two or three keywords. A complex request like "[What are the best barefoot shoes for flat feet that I can use in the tropics under $100 with free shipping](https://www.amazon.com/dp/B09MVWCPP8)" — I wore them every day for a year and still got a bit of life left, so comfortable — is exactly the kind of question AI was built for. It will run through hundreds of sources: blogs, communities, review sites, social media comments, find the specific datapoints, and deliver an answer that looks like two hours of mental work were just saved. You're not as doubtful as you are grateful. The time and energy savings are what's making the act of searching through sources something we're no longer willing to put ourselves through.

If you run an ecommerce brand, a personal brand, a local business, or a digital services company — here's the problem you probably haven't felt yet.

AI is becoming the interface between your customers and your business.

When someone asks ChatGPT "what's the best [product] for [need]," it's got the answer. When they search Google and an AI Overview sits above every link, it's got the answer. And when wearables and helpful companion robots with AI brains are in every household, it will have the answer.

The question is whether your brand is in that answer.

Most brands aren't. Not because they're bad brands. Nobody is ever truly prepared for disruption — but the brands that move quickly, while the shift is still incomplete, are the ones that get in.

I know this because I spent a year running a research team of eight people to figure out exactly how AI makes those decisions. Not in theory. Across categories, inside real client accounts, finding patterns and building a theory of these new AI experiences.

Here's what we found and what to do with it.

## How I got here (the short version)

I spent ten years in branding. Identity work, visual systems, the craft of making something feel like it meant something. When the pandemic hit, I had to pivot — I opened a printshop to keep moving.

Once the streets opened again, I took every job that came through the door. Long hours. New techniques, new materials, daily. I was deeply in love with the craft.

Then a phrase from "The Win Without Pitching Manifesto" stopped me cold: "We will embrace sales as a basic business function that cannot be avoided and so we will learn to do it properly, as respectful facilitators."

Even working long hours, taking any job that came in, learning new techniques and finding new materials on a daily basis — I was only working on 50% of my business. I felt dumb. That was the moment I decided to retire from graphic design and face the career hangover with absolute resolution: jump to the front lines and learn marketing. Be closer to the business outcomes.

That decision led me to Pareto Talent, an agency that places operators from Colombia and Argentina alongside business owners in the United States. Through them, I connected with Kasim Aslam — who had just exited his Google Ads agency for seven figures and was now launching an executive staffing agency. I came in as an Executive Assistant and became a student of how ambitious businesses think and move.

When I later started researching how AI was changing search, I noticed the same posture I once had running that printshop: practitioners defending the old way instead of studying the new one. Articles about why AI search was flawed. Arguments that the old playbook still worked.

I recognized it immediately. That was me — insisting the craft was enough while the bills stacked up.

So I did what nobody else seemed to be doing. I built a research team. Eight people. Over a year. We pulled apart citation patterns, analyzed thousands of AI responses, and found the patterns that built into a real theory of how AI decides who to recommend.

We turned those findings into the B.R.A.I.N. Framework — five pillars, built from observation, not theory. And from that work came the AEO Blueprint: a structured way to make sense of the massive shift ahead as early as possible, and to start acting before your category gets decided without you.

## Four things the research keeps showing

### Brand mentions beat domain authority.

Being mentioned across the web — helping AI make up its mind about who you are with consistent, relevant signals — seems to be the new way authority is built in times of AI. Brands with DA 30 outrank brands with DA 70+ when the smaller brand has the same name, description, and positioning across every platform AI touches. When AI can describe you in one sentence that holds up everywhere it looks, traditional authority matters less. When your presence fragments, nothing saves you.

### Most of the work that determines AI visibility happens off your site.

AI sources its understanding of your brand from third-party surfaces — industry publications, reviews, forums, directories — before it ever touches your domain. Yet most AEO advice starts and ends with schema markup on your own website. That's the last mile. The first twenty-six happen somewhere else.

### Structure beats volume.

44.2% of ChatGPT citations come from the first 30% of page content. AI doesn't scroll. If your key claims are buried under preamble, you're invisible.

### The metric that matters is the one the industry forgot.

In a world without attribution, branded search demand increase could be the correlation we ground AI visibility on. People searching for your brand by name seem to be the most likely outcome after they discover you in an AI experience.

It's muscle memory. Google is hardcoded into our day-to-day. We want to validate the research as fast as possible — then the job is yours to get the sale.

The industry spent a decade optimizing away from branded search. AI just made it the most important signal again.

## What this means for you

If you're building an ecommerce brand, a personal brand, a local business, or a digital service — the window is open. AI-mediated discovery is reorganizing how customers find businesses. So far it appears that consensus-based influence is the way into these answers — or as I like to think of it, [building a brand in the BRAIN of AI](/the-aeo-blueprint). Everyone else becomes harder to find.

The community at skool.com/aeo is where I spend time with people running this same experiment — exchanging findings, testing approaches, and figuring out together what actually works in this new landscape.

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
