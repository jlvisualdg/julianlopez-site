// =============================================================================
// FRAMEWORKS — single source of truth for /frameworks/ and every framework page.
// No imports (entity.ts imports from here). Paths are site-relative.
// Sources are numbered; pillar evidence cites them as [n] -> #source-n.
// =============================================================================

export type Source = { n: number; label: string; url: string; host: string };

export const brainSources: Source[] = [
  { n: 1, label: "Adobe, \"AI traffic now generates 83% higher revenue per visit for U.S. retailers,\" Oct 29, 2026.", url: "https://business.adobe.com/blog/ai-traffic-higher-revenue-per-visit-retail-holiday", host: "business.adobe.com" },
  { n: 2, label: "Ahrefs (Louise Linehan), \"Top Brand Visibility Factors in ChatGPT, AI Mode and AI Overviews (75K Brands),\" updated Aug 2026. Correlation, not causation.", url: "https://ahrefs.com/blog/ai-brand-visibility-correlations", host: "ahrefs.com" },
  { n: 3, label: "Ahrefs (Mateusz Makosiewicz), \"I Ran an AI Misinformation Experiment,\" Dec 2025.", url: "https://ahrefs.com/blog/ai-vs-made-up-brand-experiment", host: "ahrefs.com" },
  { n: 4, label: "Wil Reynolds, Seer Interactive, \"ChatGPT named 21 competitors in 2025 and us 0,\" Nov 12, 2026.", url: "https://www.seerinteractive.com/insights/chatgpt-named-21-competitors-in-2025-and-us-0-today-many-are-at-0-we-are-at-65-percent", host: "seerinteractive.com" },
  { n: 5, label: "Tinuiti AI citation tracking, Feb-Apr 2026, as reported by Shopifreaks.", url: "https://www.shopifreaks.com/reddits-share-of-perplexity-ai-citations-collapsed-from-25-to-7-between-february-and-april-tinuiti-report-finds/", host: "shopifreaks.com" },
  { n: 6, label: "Google Search Central, \"Creating helpful, reliable, people-first content.\"", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", host: "developers.google.com" },
  { n: 7, label: "Google Search Central, \"Introduction to structured data markup.\"", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data", host: "developers.google.com" },
  { n: 8, label: "Google Search Central, \"AI features and your website.\"", url: "https://developers.google.com/search/docs/appearance/ai-features", host: "developers.google.com" },
  { n: 9, label: "Aggarwal et al., \"GEO: Generative Engine Optimization,\" KDD 2024 (Princeton University and others).", url: "https://arxiv.org/abs/2311.09735", host: "arxiv.org" },
  { n: 10, label: "Common Crawl Foundation, \"Introducing the AI Visibility Audit,\" Jun 2026.", url: "https://commoncrawl.org/blog/introducing-the-ai-visibility-audit", host: "commoncrawl.org" },
  { n: 11, label: "LLM Pulse, \"Top Cited Domains Across ChatGPT, Perplexity, Gemini and Google AI\" (live data study).", url: "https://llmpulse.ai/data-studies/top-cited-domains", host: "llmpulse.ai" },
  { n: 12, label: "Google Search Central, \"Get to know E-E-A-T and the quality rater guidelines\" (section of the helpful content guide).", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content#eeat", host: "developers.google.com" },
];

export type Pillar = {
  letter: string;
  slug: string;
  title: string;
  subtitle: string;      // the pillar's components, short
  chainStep: string;     // what this pillar unlocks in the causal chain
  need: string;          // "What AI needs" one-liner
  needLabel?: string;    // defaults to "What AI needs"
  body: string;
  components: { name: string; text: string }[];
  evidence: string;      // research summary; [n] markers map to brainSources
};

export const brainFramework = {
  slug: "brain-framework",
  path: "/frameworks/brain-framework/",
  name: "The B.R.A.I.N. Framework",
  alternateNames: ["BRAIN Framework", "B.R.A.I.N. framework", "BRAIN framework for AEO", "B.R.A.I.N. AEO framework"],
  creator: "Julian Lopez",
  version: "2.4",
  dateModified: "2026-11-20",
  tagline: "How AI decides which brands to recommend.",
  definition:
    "The B.R.A.I.N. Framework is a five-pillar system for Answer Engine Optimization (AEO), created by Julian Lopez, Head Strategist for the AEO Team at SmartMarketer Agency and Head of Research for AEO.co. It explains what AI assistants like ChatGPT, Perplexity, Gemini and Google AI Mode need before they recommend a brand: Brand Representation, Research, Audience, Indexability and Network.",
  summary:
    "A first-principles, five-pillar system for Answer Engine Optimization that turns what AI checks before it names a brand into an ordered plan: Brand Representation, Research, Audience, Indexability, Network.",
  whatItIs:
    "B.R.A.I.N. is a model of what an AI assistant checks before it names a brand in an answer. AI does not rank pages the way a search results page does. It assembles an answer from many sources and picks the brands it can identify, understand and confirm. B.R.A.I.N. breaks that into five pillars a business can work on, in order.",
  oneLine: "B.R.A.I.N. is the checklist AI runs on your brand, turned into a plan you can run on yourself.",
  whyNow:
    "AI-referred visitors to US retail sites converted 90% better than other traffic and brought 83% more revenue per visit in September 2026, according to Adobe's analysis of more than a trillion site visits [1]. Being the brand AI names is becoming one of the most valuable places to be.",
  outcome:
    "AI Authority: being the brand AI recommends across a market's important questions. AEO.co calls that BE THE ANSWER®.",
  origin: [
    "Julian Lopez developed B.R.A.I.N. to explain why some brands get recommended by AI while others with better search rankings do not.",
    "Julian came to Answer Engine Optimization from more than a decade in brand building, graphic design and animation, not from traditional SEO. That outside view shaped the framework: it starts with how a brand is represented across the web, because that is where AI looks first, and only then turns to the website.",
    "The framework grew out of research into how AI engines choose brands that Julian began in 2024, and it is tested every month in AEO.co client work across ecommerce, health and professional-service brands.",
  ],
  versionHistory: [
    { change: "Audience replaced Authority as the \"A\"", why: "Authority signals now live under Brand Representation (Reputation) and Network (NEEATT); Audience is the variable that calibrates every other pillar." },
    { change: "Research replaced Reach as the \"R\"", why: "The AI landscape shifts too fast for a one-time audit, so measurement became a standing pillar. Reach moved inside Brand Representation." },
  ],
  chainIntro:
    "Each pillar depends on the one before it. If AI can't identify the brand, nothing on the website matters. If the strategy isn't current, the rest optimizes for an AI landscape that has already moved. If you don't know who is asking, there's nothing to aim at. If the site is hard to read, AI can't confirm what it suspects. And without outside sources, AI has nothing to back the recommendation.",
  pillars: [
    {
      letter: "B", slug: "brand-representation", title: "Brand Representation", subtitle: "Reach, Recognition, Reputation",
      chainStep: "AI can identify you",
      need: "a fact, confirmed by many sources, not a claim on your About page.",
      body: "AI confirms who a brand is by looking for agreement across the places it reads: video, social profiles, directories, communities, reviews and publications. Brand Representation is how much space a brand occupies in those places, and how consistently it is described there.",
      components: [
        { name: "Reach", text: "being present on the platforms AI scans, not only on your own site." },
        { name: "Recognition", text: "the same name, description and core claim everywhere, so AI can tell it is one brand." },
        { name: "Reputation", text: "what reviews, customers and the press say when you're not in the room." },
      ],
      evidence: "Across 75,000 brands, mentions of a brand on YouTube and across the web correlated more strongly with AI visibility than backlinks or domain rating [2]. In a separate experiment, AI engines repeated false information about a made-up brand when the most detailed story came from outside sources, not the brand's own site [3].",
    },
    {
      letter: "R", slug: "research", title: "Research", subtitle: "AI Visibility, Competitor Intel, New Channels, Attribution",
      chainStep: "Your strategy stays current",
      needLabel: "What it does",
      need: "keeps every other pillar pointed at the AI landscape as it is now.",
      body: "AI engines, the sources they cite and the channels where buyers ask questions change on a timescale of months. Research is the ongoing measurement that tells you when your strategy has gone stale. It is a standing budget line, not a kickoff phase.",
      components: [
        { name: "AI visibility baseline", text: "the same buyer questions, run repeatedly across engines, every month." },
        { name: "Competitor intelligence", text: "who AI names instead of you, and which sources it uses to justify it." },
        { name: "New channels", text: "new answer engines and AI shopping agents as they launch." },
        { name: "Attribution", text: "which AI platforms actually send visitors and revenue." },
      ],
      evidence: "Seer Interactive re-ran the same prompts 21 months apart: most of the agencies ChatGPT named in 2025 had all but disappeared from its answers, and Seer went from never named to named in 65% of runs [4]. Tinuiti saw Reddit's share of Perplexity citations fall from 25% to 7% in two months [5]. A one-time audit can't keep up with that.",
    },
    {
      letter: "A", slug: "audience", title: "Audience", subtitle: "Buying Situations, Question Mining, the AI Journey",
      chainStep: "You know who asks what",
      need: "a brand that clearly serves a specific person in a specific situation.",
      body: "AI does not recommend generic brands. It recommends the brand that best fits the question someone asked. The Audience pillar maps who is asking, the buying situations that trigger the question and the exact words they use, so every page and every outside mention answers a real question.",
      components: [
        { name: "Buying situations", text: "the moments someone turns to AI about your category." },
        { name: "Question mining", text: "real questions from sales calls, support, reviews, communities and AI itself." },
        { name: "The AI journey", text: "how the answer changes from \"what are my options\" to \"who should I buy from.\"" },
      ],
      evidence: "Google's own guidance asks whether content is made for a clearly defined audience and leaves them satisfied [6]. Answer engines apply the same test, one question at a time.",
    },
    {
      letter: "I", slug: "indexability", title: "Indexability", subtitle: "Structured Data, Answer-First Pages, Low Retrieval Cost",
      chainStep: "AI can read and quote you",
      need: "content that is cheap to read and easy to quote.",
      body: "AI reads the layer underneath your design. If answers are buried, loaded by scripts or hidden behind forms, AI moves on to a source that is easier to use. Indexability makes the brand's own pages the most convenient confirmation AI can find.",
      components: [
        { name: "Structured data", text: "Organization, Person, Product and FAQ markup that says exactly what a page is." },
        { name: "Answer-first pages", text: "the answer in the first lines, one question per section, specific and attributed facts." },
        { name: "Low retrieval cost", text: "key facts in the initial HTML, open to the crawlers you want, fast to load." },
        { name: "Fast discovery", text: "protocols like IndexNow and llms.txt that point machines to what matters." },
      ],
      evidence: "Google documents how structured data helps it understand a page [7] and how its AI features draw on indexed, helpful content [8]. A Princeton-led study of generative engines found that adding statistics, quotations and cited sources made content noticeably more visible in AI answers, while keyword stuffing did not help [9]. Common Crawl notes that many site and CDN defaults silently block AI crawlers [10].",
    },
    {
      letter: "N", slug: "network", title: "Network", subtitle: "Mentions, Entity Relationships, NEEATT",
      chainStep: "Others confirm you",
      need: "independent sources that agree with you.",
      body: "AI builds its picture of a brand from connected entities: the people, products, categories and publications around it. A brand with no connections is an unknown to AI. When several independent sources confirm a brand for a question, AI stops hedging and recommends it.",
      components: [
        { name: "Mentions across tiers", text: "major publications, industry media and niche communities." },
        { name: "Entity relationships", text: "clear links between the brand, its people, products and category." },
        { name: "Consistent identity", text: "the same name and details everywhere, so every mention adds up." },
        { name: "NEEATT", text: "Notability, Experience, Expertise, Authoritativeness, Transparency and Trustworthiness: Google's E-E-A-T, plus the two signals AI needs to attach trust to the right entity." },
      ],
      evidence: "The most-cited domains across ChatGPT, Perplexity, Gemini and Google AI are platforms and communities like YouTube, Reddit and LinkedIn, not brand websites [11]. Google's quality rater guidelines describe the experience, expertise, authoritativeness and trust signals the Network pillar builds on [12].",
    },
  ] as Pillar[],
  measurementIntro:
    "B.R.A.I.N. is measured with an AI Visibility Score: a fixed set of the questions a brand's buyers ask, run more than once on every major AI engine and tracked over time. Repeated runs matter because AI answers change from one run to the next. The score places a brand in one of four states.",
  states: [
    { name: "Invisible", range: "0%", text: "AI never names the brand." },
    { name: "Present", range: "1-30%", text: "AI names it sometimes, usually low on the list." },
    { name: "Trusted", range: "31-60%", text: "AI names it often and places it well." },
    { name: "Recommended", range: "61-100%", text: "AI's go-to pick across the buyer questions." },
  ],
  accuracyNote:
    "Brand Accuracy is checked separately: open questions about the brand, scored 1-5 against how the brand describes itself. A brand can be named often and still be described wrong. When Recommended holds across a market's important questions, the brand has become an authority for AI.",
  effects: [
    { title: "AI identifies the brand", text: "Consistent representation across the web lets AI resolve the brand as one entity instead of guessing between look-alikes." },
    { title: "AI describes it correctly", text: "Brand Accuracy rises when the brand's own pages and outside sources tell the same, specific story." },
    { title: "AI names it more often", text: "The AI Visibility Score moves the brand from Invisible toward Recommended across its buyers' questions." },
    { title: "AI sends valuable visitors", text: "AI-referred traffic is a high-intent channel: Adobe measured 83% more revenue per visit for US retailers in September 2026 [1]." },
  ],
  comparison: [
    { row: "Goal", seo: "Rank a page in a list of links", brain: "Be the brand AI names in the answer" },
    { row: "Where the work happens", seo: "Mostly on your own website", brain: "Across the web first (B, N), then your site (I)" },
    { row: "Who it starts with", seo: "Keywords", brain: "People and the situations they ask in (A)" },
    { row: "How often it's checked", seo: "Rankings, periodically", brain: "Repeated AI runs every month, plus new channels (R)" },
    { row: "Trust signals", seo: "Backlinks, E-E-A-T", brain: "Mentions, entity links, NEEATT" },
    { row: "Success measure", seo: "Position and clicks", brain: "AI Visibility Score, Brand Accuracy, AI-referred results" },
  ],
  seoNote:
    "SEO still matters: AI engines draw on what search engines index. B.R.A.I.N. covers the part SEO was never designed for: what other sources say about a brand, and whether AI can confirm it.",
  useIt: [
    { title: "Learn it", text: "The free AEO Community teaches the framework pillar by pillar, with a weekly test you can run on your own brand.", cta: "Join free", url: "https://aeo.co/community/" },
    { title: "See where you stand", text: "An AI visibility audit runs your buyers' questions across the engines and shows which pillar is holding you back.", cta: "Request an audit", url: "https://aeo.co/audit/" },
    { title: "Have it built", text: "AEO.co runs all five pillars for brands, measured every month.", cta: "Book a discovery call", url: "https://aeo.co/discovery" },
  ],
  faq: [
    { q: "What does B.R.A.I.N. stand for?", a: "B.R.A.I.N. stands for Brand Representation, Research, Audience, Indexability and Network: the five pillars an AI assistant needs in place before it recommends a brand." },
    { q: "Who created the B.R.A.I.N. framework?", a: "Julian Lopez created the B.R.A.I.N. framework. He is Head Strategist for the AEO Team at SmartMarketer Agency, Head of Research for AEO.co and co-author, with Kasim Aslam, of the #1 Amazon best seller The AEO Blueprint." },
    { q: "Is B.R.A.I.N. a checklist?", a: "No. B.R.A.I.N. is a causal chain: each pillar depends on the one before it. Fixing Indexability while Brand Representation is broken is backwards, because AI forms its opinion about a brand from outside sources before it ever visits the brand's website." },
    { q: "Why is \"A\" Audience and not Authority?", a: "In version 2.4 Audience replaced Authority because authority signals already live in Brand Representation (Reputation) and Network (NEEATT). Audience is the variable that calibrates every other pillar: AI recommends the brand that best fits a specific person's question." },
    { q: "How is B.R.A.I.N. different from SEO?", a: "SEO works to rank a page in a list of links, mostly through work on the website. B.R.A.I.N. works to make a brand the one AI names in its answer, starting with what other sources say about the brand (Brand Representation, Network) and then making the brand's own pages easy for AI to read and quote (Indexability). SEO still matters, because AI engines draw on what search engines index." },
    { q: "How do you know if B.R.A.I.N. is working?", a: "Three measures: the AI Visibility Score (a fixed set of buyer questions run repeatedly on every major AI engine, placing a brand as Invisible, Present, Trusted or Recommended), Brand Accuracy (open questions scored 1-5 against how the brand describes itself) and AI-referred results (visitors and revenue from AI platforms)." },
    { q: "How long does B.R.A.I.N. take to show results?", a: "It depends on where a brand starts and how competitive its category is, so it is measured monthly rather than promised. Research is an ongoing pillar because AI engines and their sources keep changing. No one can guarantee a ranking, citation or recommendation from an AI engine." },
    { q: "Can I apply the B.R.A.I.N. framework myself?", a: "Yes. The free AEO Community teaches it pillar by pillar with a weekly test you can run on your own brand. An AI visibility audit from AEO.co shows which pillar is holding a brand back, and AEO.co can also run all five pillars for you." },
  ],
  disclaimer:
    "Results vary. No one can guarantee a ranking, citation, recommendation or what an AI engine says.",
};

// /frameworks/ hub copy: what kinds of frameworks Julian works on, the classic
// marketing frameworks B.R.A.I.N. builds on, and the long-term execution sequence.
export const frameworksHub = {
  intro:
    "Julian Lopez builds marketing frameworks for a world where AI assistants answer the buying question before anyone visits a website. His frameworks explain how ChatGPT, Perplexity, Gemini and Google AI Mode decide which brands to recommend, and turn that into plans a business can run, measure and improve over years, not weeks.",
  kinds: [
    { name: "Brand strategy frameworks", text: "More than a decade of brand identity, positioning and creative direction work, before AEO existed. This is where B.R.A.I.N. starts: with how a brand is represented, not with a website." },
    { name: "Answer Engine Optimization frameworks", text: "The B.R.A.I.N. Framework: the five pillars AI needs before it recommends a brand, in the order they depend on each other." },
    { name: "Measurement frameworks", text: "The AI Visibility Score, the Invisible-to-Recommended states and Brand Accuracy: how to tell whether AI names a brand, how well it places it and whether it describes it correctly." },
    { name: "Execution frameworks", text: "The long-term AEO execution sequence below: how to run B.R.A.I.N. month after month so a brand compounds its place in AI answers." },
  ],
  classicIntro:
    "B.R.A.I.N. did not come from nowhere. It applies proven marketing frameworks to a new kind of audience: the AI model that sits between a buyer and a brand.",
  classics: [
    { name: "AIDA", origin: "E. St. Elmo Lewis, 1898", idea: "Attention, Interest, Desire, Action.", ai: "AI answers compress the funnel into one conversation. The Audience pillar maps every stage, from \"what are my options\" to \"who should I buy from.\"" },
    { name: "STP: Segmentation, Targeting, Positioning", origin: "Popularized by Philip Kotler", idea: "Choose who you serve and own a clear position in their mind.", ai: "AI recommends the brand that best fits a specific person's question. Audience and Recognition make that position explicit and consistent." },
    { name: "The 4 Ps", origin: "E. Jerome McCarthy, 1960", idea: "Product, Price, Place, Promotion.", ai: "\"Place\" now includes the AI answer itself. Reach, inside Brand Representation, is about being present where AI looks." },
    { name: "Jobs to Be Done", origin: "Clayton Christensen", idea: "People hire products to make progress in a specific situation.", ai: "Buying situations are the core of the Audience pillar: the moments someone turns to AI about a category." },
    { name: "How Brands Grow", origin: "Byron Sharp, 2010", idea: "Growth comes from mental availability, physical availability and distinctive brand assets.", ai: "AEO builds the AI version of mental availability: a brand that comes to the model's mind, consistently described, when a buying question is asked." },
    { name: "The Long and the Short of It", origin: "Les Binet and Peter Field, 2013", idea: "Long-term brand building and short-term activation work together; brand building drives most long-term growth.", ai: "B.R.A.I.N. is long-term brand building for AI. Mentions, reputation and entity links compound; one-off tactics fade when the engines change." },
    { name: "E-E-A-T", origin: "Google Search Quality Rater Guidelines", idea: "Experience, Expertise, Authoritativeness and Trust.", ai: "The Network pillar extends it to NEEATT, adding Notability and Transparency so AI can attach trust to the right entity." },
  ],
  executionTitle: "The long-term AEO execution framework",
  executionIntro:
    "How to run B.R.A.I.N. as a long-term strategy for building a brand in the brain of AI. The steps follow the pillar order, then repeat every month. Each cycle adds mentions, reviews, pages and entity links that AI keeps finding, so the work compounds instead of resetting.",
  execution: [
    { pillar: "B", name: "Define the entity", text: "Write one name, one description and one core claim, and use them on every profile, directory, listing and page. AI can only recommend a brand it can identify." },
    { pillar: "R", name: "Set the baseline", text: "Run a fixed set of buyer questions on ChatGPT, Perplexity, Gemini and Google AI Mode, more than once each. Record the AI Visibility Score, Brand Accuracy and which competitors and sources AI cites instead." },
    { pillar: "A", name: "Map the audience", text: "List the buying situations and the exact questions buyers ask, from sales calls, support, reviews and communities. Prioritize the questions where AI names competitors today." },
    { pillar: "I", name: "Make the site the easiest confirmation", text: "Answer-first pages for the priority questions, structured data, key facts in the initial HTML, open crawler access and an llms.txt file." },
    { pillar: "N", name: "Build the network", text: "Earn mentions on the platforms AI cites most, such as YouTube, Reddit, LinkedIn, industry media and review sites, and connect the brand to its people, products and category." },
    { pillar: "R", name: "Measure monthly and compound", text: "Re-run the same questions every month, watch for new engines and channels, and move effort to the weakest pillar. Repeat the cycle." },
  ],
};

// The /frameworks/ collection. Add future frameworks here.
export const frameworks = [
  {
    path: brainFramework.path,
    name: brainFramework.name,
    kicker: "Answer Engine Optimization",
    summary: brainFramework.summary,
    tags: ["AEO", "AI Visibility", "Brand Entity", "Five Pillars"],
  },
  {
    path: `${brainFramework.path}#measurement`,
    name: "The AI Visibility Score",
    kicker: "Measurement, part of B.R.A.I.N.",
    summary: "How B.R.A.I.N. is measured: a fixed set of buyer questions run repeatedly on every major AI engine, placing a brand as Invisible, Present, Trusted or Recommended, with Brand Accuracy scored separately.",
    tags: ["Measurement", "AI Visibility Score", "Brand Accuracy"],
  },
];
