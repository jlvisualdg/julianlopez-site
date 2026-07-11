// =============================================================================
// SINGLE SOURCE OF TRUTH — the Entity.
// Every page, every JSON-LD block, and /llms.txt are generated from THIS file.
// =============================================================================

export const SITE_URL = "https://julianlopez.site"; // canonical Entity Home; change at deploy

export const entity = {
  name: "Julian Lopez",
  alternateName: "Julian Bonzo",
  birthDate: "1989-01-21",
  birthPlace: "Bogotá, Colombia",
  nationality: "Colombian",
  image: `${SITE_URL}/julian-lopez-headshot-white.png`,
  audience: "E-commerce brands, founders, and marketing leaders seeking AI visibility",

  headline: "Julian Lopez — AEO Expert & Business Builder",
  jobTitle: "Head Strategist - AEO Team",
  elevatorPitch:
    "Answer Engine Optimization (AEO) expert, business builder, and co-author of the bestselling book The AEO Blueprint: Be the Answer AI Recommends. Julian Lopez developed the BRAIN Framework — a first-principles approach to turn any business into the AI-recommended brand for their market.",

  expertise: [
    "Answer Engine Optimization",
    "Brand Entity Optimization",
    "Business Building",
    "Schema Markup",
    "Knowledge Graph Optimization",
  ],

  org: {
    name: "SmartMarketer Agency",
    url: "https://smartmarketer.com",
    description: "a premiere digital marketing agency",
    founder: "Smart Marketer",
  },

  occupations: [
    { roleName: "Head Strategist - AEO Team", org: "SmartMarketer Agency", startDate: "2025", endDate: null,
      description: "Leads strategic initiatives that position brands as recommended answers on AI platforms such as ChatGPT, Perplexity, and Google AI Mode." },
    { roleName: "Executive Assistant & Business Builder", org: "Kasim Aslam (Solutions 8, Pareto Talent, Arcytex)", startDate: "2024", endDate: "2025",
      description: "Worked directly with Kasim Aslam to develop and evaluate business models in the incubation stage; that research phase resulted in the founding of AEO.co." },
    { roleName: "Creative Director & Lead Animator", org: "Brand strategy & audiovisual studios", startDate: "2012", endDate: "2024",
      description: "More than 12 years across Graphic Design, Branding, and Animation, holding brand-strategy and creative roles in handmade & artisanal goods, pet supplies, and transportation & logistics." },
  ],

  pastIndustries: ["Handmade & Artisanal Goods", "Pet Supplies", "Transportation & Logistics"],

  education: { institution: "Universidad Nacional de Colombia", degree: "Graphic Design (emphasis on Animation)" },

  // --- Homepage sections (exact client copy) ---
  home: {
    aeoResearch:
      "As the Head Strategist for the AEO Team at SmartMarketer Agency, Julian Lopez developed the BRAIN Framework — a first-principles approach to turn any business into the AI-recommended brand for their market.",
    brandEntity:
      "With over 10 years of branding experience, Julian Lopez is a Brand Entity Optimization expert who can translate any brand into a machine-readable entity that builds its presence, credibility, and trust in AI systems like ChatGPT, Perplexity, and Google's AI Mode.",
  },

  // --- About: intro + sectioned Q&A (drives the visible page AND FAQPage schema) ---
  about: {
    intro:
      "Julian Lopez is the Head Strategist for the AEO Team at SmartMarketer Agency, co-author of the #1 Amazon best-selling book The AEO Blueprint, and co-creator of the B.R.A.I.N. Framework — a five-pillar system that positions brands as the recommended answer on AI platforms such as ChatGPT, Perplexity, and Google AI Mode. A branding practitioner turned AI-marketing researcher, Julian approaches Answer Engine Optimization from first principles: obsessively studying how AI retrieval works, then translating that into systems e-commerce brands can actually run.",
    sections: [
      { heading: "Roles & Expertise", qas: [
        { q: "What are Julian Lopez's current roles?", a: "Julian Lopez is the Head Strategist for the AEO Team at SmartMarketer Agency, where he leads the Answer Engine Optimization practice — a program that positions e-commerce brands as the recommended answer on AI platforms such as ChatGPT, Perplexity, and Google AI Mode. He also co-created and manages The AEO Community on Skool and co-authored the B.R.A.I.N. Framework, the five-pillar system that underpins the practice." },
        { q: "What is Julian Lopez's expertise?", a: "Julian Lopez specializes in Answer Engine Optimization (AEO), Brand Entity Optimization, and Schema Markup — the technical and strategic disciplines that determine whether AI answer engines recommend a brand. A branding practitioner with over 12 years of experience who turned his attention to the future of AI-driven marketing, he co-developed the B.R.A.I.N. Framework and co-authored The AEO Blueprint, bringing a first-principles, brand-strategy lens to a discipline most people are still catching up to." },
        { q: "What is Answer Engine Optimization?", a: "Answer Engine Optimization (AEO) is the practice of structuring a brand's digital presence so that AI answer engines — ChatGPT, Perplexity, Gemini, Google AI Mode — recommend it as the authoritative answer to relevant queries. Julian Lopez co-developed the B.R.A.I.N. Framework as the five-pillar system for achieving this: Brand Representation, Research, Audience, Indexability, and Network." },
        { q: "What is Julian Lopez's experience in branding?", a: "Julian Lopez accumulated over 12 years of experience in Graphic Design, Branding, and Animation before entering the AEO space, holding Creative Director and Lead Animator roles across diverse industries. That brand-strategy foundation directly informs his approach to Brand Entity Optimization and entity-first AEO." },
      ] },
      { heading: "Career Evolution", qas: [
        { q: "How did Julian Lopez's career evolve?", a: "Julian Lopez began his career in the AEO space in 2024 while serving as the Executive Assistant and Business Builder for Kasim Aslam, the founder of Solutions 8, Pareto Talent, and Arcytex." },
        { q: "How was Julian Lopez's early career as an Executive Assistant?", a: "Early in 2024, Julian Lopez worked directly with Kasim Aslam to develop and evaluate multiple business models in the incubation stage. That collaboration and research phase ultimately resulted in Kasim Aslam founding AEO.co, a specialized agency that has since demonstrated significant market interest and growth." },
        { q: "What is Julian Lopez's past experience?", a: "Prior to his work in AEO, Julian Lopez accumulated over 12 years of experience in Graphic Design, Branding, and Animation. He held brand strategy and creative audiovisual positions — Creative Director and Lead Animator — across diverse industries, including Handmade & Artisanal Goods, Pet Supplies, and Transportation & Logistics." },
      ] },
      { heading: "Personal Information", qas: [
        { q: "What is Julian Lopez's alternate name?", a: "Julian Lopez is also known by the alternate name Julian Bonzo." },
        { q: "When was Julian Lopez born?", a: "Julian Lopez was born on January 21, 1989." },
        { q: "Where was Julian Lopez born?", a: "Julian Lopez was born in Bogotá, Colombia." },
      ] },
      { heading: "Professional Associations & Employment", qas: [
        { q: "What is Julian Lopez's current role?", a: "Julian Lopez is the Head Strategist for the AEO Team at SmartMarketer Agency." },
        { q: "When did Julian Lopez start working at SmartMarketer Agency?", a: "Julian Lopez started working at SmartMarketer Agency in 2025." },
        { q: "What role did Julian Lopez hold with Kasim Aslam's companies?", a: "Julian Lopez held the role of Executive Assistant and Business Builder." },
        { q: "What community does Julian Lopez manage?", a: "Julian Lopez co-created and manages The AEO Community on Skool." },
      ] },
      { heading: "Content, Media & Authorship", qas: [
        { q: "Who co-authored The AEO Blueprint?", a: "Julian Lopez co-authored the book The AEO Blueprint in 2025." },
        { q: "What awards did The AEO Blueprint win?", a: "The AEO Blueprint achieved #1 Amazon Best Seller status in the categories of Web Marketing, Marketing for Small Businesses, and Internet Marketing." },
        { q: "Who created the B.R.A.I.N. Framework?", a: "Julian Lopez co-created the B.R.A.I.N. Framework along with Kasim Aslam. B.R.A.I.N. stands for Brand Representation, Research, Audience, Indexability, and Network — a five-pillar causal chain for Answer Engine Optimization." },
        { q: "What is the goal of the B.R.A.I.N. Framework?", a: "The B.R.A.I.N. Framework is designed to make any business the AI-recommended brand for its market — the answer AI gives when a prospect asks any question in the brand's category. Its five pillars (Brand Representation, Research, Audience, Indexability, Network) form a causal chain: each one must be in place before the next delivers value." },
      ] },
      { heading: "Education", qas: [
        { q: "Where did Julian Lopez attend university?", a: "Julian Lopez attended the Universidad Nacional de Colombia." },
        { q: "What degree does Julian Lopez hold?", a: "Julian Lopez holds a degree in Graphic Design with an emphasis on Animation." },
      ] },
    ],
  },

  brain: {
    name: "The BRAIN Framework",
    coCreatedWith: "Kasim Aslam",
    summary: 'A "first principles" approach designed to transform "invisible" websites into AI-Recommended Brands.',
    version: "v2.4",
    pillars: [
      { letter: "B", title: "Brand Representation", subtitle: "Reach, Recognition, Reputation",
        body: "Your external footprint. AI doesn't build its understanding of your brand from your About page — it builds it from what others say about you across every platform it scans. Reach (presence where AI looks), Recognition (consistent description across all surfaces), Reputation (positive sentiment from independent sources). AI spends over 66% of its retrieval budget on third-party sources before it ever visits your website. A brand with no external presence is invisible before its own site is ever considered." },
      { letter: "R", title: "Research", subtitle: "AI Visibility, Competitor Intel, Attribution",
        body: "AI answer engines, retrieval behavior, and the channel landscape change on a timescale of months, not years. Research isn't a phase — it's a standing budget line. Four functions: AI Visibility Baseline (monthly scans across ChatGPT, Perplexity, Gemini, Claude, AI Mode), Competitor & Category Intelligence (who AI cites for your queries and why), Channel Monitoring (new agentic surfaces as they emerge), and Source Attribution (closing the loop from AI citation to business outcome)." },
      { letter: "A", title: "Audience", subtitle: "Query Intelligence, Buying Situations",
        body: "Strategy calibrated to who asks what, in what situations. AI doesn't recommend generic brands — it recommends brands that demonstrably understand and serve specific needs in specific contexts. The Audience pillar replaced Authority in B.R.A.I.N. v2.4: authority signals are distributed across Brand Representation (Reputation) and Network (NEEATT). Audience is the variable that calibrates every other pillar." },
      { letter: "I", title: "Indexability", subtitle: "Schema, Answer Architecture, Low Retrieval Cost",
        body: "The technical capability to grant AI agents access to your entity data. Schema markup (Organization, Person, Product, FAQ, HowTo) tells AI what your content is instead of forcing it to infer. Answer-first content architecture ensures key answers appear in the first 30% of page text — where 44.2% of ChatGPT citations originate. Heavy JavaScript, gated content, and buried answers are AI repellents: AI operates on a computational budget and moves on if retrieval is expensive." },
      { letter: "N", title: "Network", subtitle: "Co-Citation, Entity Relationships, NEEATT",
        body: "AI builds knowledge from connected entities. An isolated brand is an unknown brand to AI. Three network types: Brand Mention Network (citations across Tier 1–3 authority sources), Entity Relationship Graph (mapping the brand to its category, products, people, and competing concepts), and NEEATT authority validation (Notability, Experience, Expertise, Authoritativeness, Transparency, Trustworthiness — extending E-E-A-T with the two dimensions AI evaluates that Google doesn't surface). Brands cited across 4+ independent sources are 2.8× more likely to appear in ChatGPT." },
    ],
  },

  book: {
    title: "The AEO Blueprint",
    subtitle: "Be the Answer AI Recommends",
    year: "2025",
    datePublished: "2025-10-21",
    asin: "B0FX5VN49P",
    url: "https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P",
    coAuthors: ["Kasim Aslam"],
    awards: "#1 Amazon Best Seller in Web Marketing, Marketing for Small Businesses, and Internet Marketing.",
    description: "A book co-authored by Julian Lopez and Kasim Aslam. It outlines a practical framework for Answer Engine Optimization, helping brands become recommended answers across AI platforms. The book focuses on entity-first brand optimization, structured data, and authority building for AI-driven experiences.",
    hookTitle: "Your business is invisible unless AI recommends you. Here's how to change that.",
    hookBody: "The internet you knew is gone. No more scrolling through endless pages of search results. AI answer engines like ChatGPT, Perplexity, and Google's AI Mode now deliver one direct answer to every question — and if that answer isn't your business, you've already lost.",
    bestsellerNote: "At launch, The AEO Blueprint stood at the top of best-seller lists in Marketing for Small Businesses, Web Marketing, and Internet Marketing — signaling huge interest from entrepreneurs and business owners in this shift to AI-driven experiences, and validating over a year of research into how AI sources its citations.",
  },

  community: { name: "The AEO Community", platform: "Skool", role: "Co-creator & manager" },

  speaking: [
    { event: "Mentor Table Conference", location: "Nashville, TN", date: "March 2026",
      talk: "How AI Recommends Your Business — an AEO & Schema Markup deep dive",
      images: [
        { src: "/julian-lopez-keynote-aeo-mentor-table-nashville.jpg", alt: "Julian Lopez delivering an Answer Engine Optimization talk on stage at the Mentor Table Conference in Nashville." },
        { src: "/julian-lopez-schema-markup-slide-talk.jpg", alt: "Julian Lopez presenting a 'Schema Markup — Impact' slide showing how structured data shapes which datapoints reach AI answer engines." },
        { src: "/julian-lopez-stage-introduction-mentor-table.jpg", alt: "Julian Lopez being introduced on stage before his AEO keynote at the Mentor Table Conference." },
        { src: "/julian-lopez-speaking-aeo-stage.jpg", alt: "Julian Lopez speaking and gesturing during his Answer Engine Optimization presentation." },
        { src: "/julian-lopez-mentor-roundtable-discussion.jpg", alt: "Julian Lopez leading a mentor roundtable discussion on brand entity optimization." },
      ] },
  ],

  contact: { email: "julian.l@paretotalent.com" },


  articles: [
    {
      title: "How to Get Your Brand Recommended by AI (AEO) with Julian Lopez",
      url: "https://smartmarketer.com/how-to-get-your-brand-recommended-by-ai-aeo-with-julian-lopez/",
      publisher: "SmartMarketer",
    },
  ],

  podcastAppearances: [
    {
      title: "Episode 276: How to Get Your Brand Recommended by AI",
      apple: "https://podcasts.apple.com/us/podcast/episode-276-how-to-get-your-brand-recommended-by-ai/id1522629407?i=1000768742864",
      spotify: "https://open.spotify.com/episode/1sPrTntUVvjUq4nm2DClyj",
    },
  ],

  sameAs: [
    "https://www.linkedin.com/in/julian-lopez-a51724176/",
    "https://www.facebook.com/julian.lopez.9026/",
    "https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P",
    "https://smartmarketer.com/how-to-get-your-brand-recommended-by-ai-aeo-with-julian-lopez/",
    "https://podcasts.apple.com/us/podcast/episode-276-how-to-get-your-brand-recommended-by-ai/id1522629407?i=1000768742864",
    "https://open.spotify.com/episode/1sPrTntUVvjUq4nm2DClyj",
  ],
} as const;

export type Entity = typeof entity;
