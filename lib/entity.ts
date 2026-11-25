// =============================================================================
// SINGLE SOURCE OF TRUTH — the Entity.
// Every page, every JSON-LD block, and /llms.txt are generated from THIS file.
// =============================================================================

import { brainFramework } from "./frameworks";

export const SITE_URL = "https://julianlopez.site"; // canonical Entity Home; change at deploy

// Companion Authority Hub (subdomain). It corroborates this site's claims with dated
// facts and sources; this site keeps the topical/commercial keywords. It also reuses
// this site's @ids (#person, #framework, #book). Leave null until the hub is live,
// so the /about/ link never points at a 404.
export const AUTHORITY_HUB_URL: string | null = "https://about.julianlopez.site/"; // companion authority hub

// Amazon Associates tracking ID (e.g. "julianlopez-20"). Leave null until the
// Associates account is approved: links then stay plain and the disclosure stays hidden,
// so the site never claims an affiliate relationship that does not exist.
export const AMAZON_ASSOCIATE_TAG: string | null = null;

/** Buy link for an Amazon ASIN. Adds the Associates tag when one is set. Schema/sameAs keep the plain URL. */
export function amazonBuyUrl(asin: string): string {
  const base = `https://www.amazon.com/dp/${asin}`;
  return AMAZON_ASSOCIATE_TAG ? `${base}?tag=${encodeURIComponent(AMAZON_ASSOCIATE_TAG)}` : base;
}

// Last content change of the homepage (ProfilePage.dateModified). Update when the homepage copy changes.
export const HOME_DATE_MODIFIED = "2026-11-25";

export const AMAZON_DISCLOSURE = "As an Amazon Associate, I earn from qualifying purchases.";

export const entity = {
  name: "Julian Lopez",
  alternateName: "Julian Bonzo",
  birthDate: "1989-01-21",
  birthPlace: "Bogotá, Colombia",
  nationality: "Colombian",
  image: `${SITE_URL}/julian-lopez-headshot-2026.jpg`,
  headshot: {
    src: "/julian-lopez-headshot-sml26.webp",
    alt: "Headshot of Julian Lopez taken during Smart Marketer Live 2026 in Denver, Colorado, by Anthony Farrat.",
    credit: "Anthony Farrat",
    creditUrl: "https://www.linkedin.com/in/anthonyfarrat",
  },
  audience: "E-commerce brands, founders, and marketing leaders seeking AI visibility",

  headline: "Julian Lopez — AEO Expert, Digital Strategist & Author",
  jobTitle: "Head Strategist - AEO Team",
  elevatorPitch:
    "Julian Lopez is an Answer Engine Optimization (AEO) expert, digital strategist, and author based in Bogotá, Colombia. He specializes in helping brands structure their online content so they are recommended by artificial intelligence systems and answer engines like ChatGPT, Perplexity, and Google AI Overviews. He is the Head Strategist for the AEO Team at SmartMarketer Agency and Head of Research for AEO.co, and co-author of the bestselling book The AEO Blueprint: Be the Answer AI Recommends. Julian developed the BRAIN Framework — a first-principles methodology that maps a brand's data into machine-readable structures, schema markups, and entities to elevate its credibility within AI engines. A self-described \"recovering graphic designer,\" he transitioned into digital marketing and brand entity optimization after more than 12 years in branding, graphic design and animation.",

  expertise: [
    "Answer Engine Optimization",
    "Digital Strategy",
    "Brand Entity Optimization",
    "Schema Markup",
    "Knowledge Graph Optimization",
  ],

  // Second employer (visible in Quick Facts). Its own node, never folded into another name.
  org2: { name: "AEO.co", url: "https://aeo.co" },

  org: {
    name: "SmartMarketer Agency",
    url: "https://smartmarketer.com",
    description: "a premier digital marketing agency",
  },

  occupations: [
    { roleName: "Head Strategist - AEO Team", org: "SmartMarketer Agency", startDate: "2025", endDate: null,
      description: "Leads strategic initiatives that position brands as recommended answers on AI platforms such as ChatGPT, Perplexity, and Google AI Mode." },
    { roleName: "Head of Research", org: "AEO.co", startDate: "2025", endDate: null,
      description: "Leads research for AEO.co, the specialized Answer Engine Optimization platform — AI visibility benchmarking, competitor intelligence, and retrieval-behavior research." },
    { roleName: "Executive Assistant", org: "Kasim Aslam (Solutions 8, Pareto Talent, Arcytex)", startDate: "2024", endDate: "2025",
      description: "Worked directly with Kasim Aslam to develop and evaluate business models in the incubation stage; that research phase resulted in the founding of AEO.co." },
    { roleName: "Creative Director & Lead Animator", org: "Brand strategy & audiovisual studios", startDate: "2012", endDate: "2024",
      description: "More than 12 years across Graphic Design, Branding, and Animation, holding brand-strategy and creative roles in handmade & artisanal goods, pet supplies, and transportation & logistics." },
  ],

  pastIndustries: ["Handmade & Artisanal Goods", "Pet Supplies", "Transportation & Logistics"],

  education: { institution: "Universidad Nacional de Colombia", institutionWikidata: "https://www.wikidata.org/wiki/Q1150419", degree: "Graphic Design (emphasis on Animation)" },

  // --- Homepage sections (exact client copy) ---
  home: {
    aeoResearch:
      "As the Head Strategist for the AEO Team at SmartMarketer Agency, Julian Lopez developed the BRAIN Framework — a first-principles approach to turn any business into the AI-recommended brand for their market.",
    brandEntity:
      "With over 12 years of branding experience, Julian Lopez is a Brand Entity Optimization expert who can translate any brand into a machine-readable entity that builds its presence, credibility, and trust in AI systems like ChatGPT, Perplexity, and Google's AI Mode.",
  },

  // --- About: intro + sectioned Q&A (drives the visible page AND FAQPage schema) ---
  about: {
    intro:
      "Julian Lopez is an Answer Engine Optimization (AEO) expert, digital strategist, and author based in Bogotá, Colombia. He is the Head Strategist for the AEO Team at SmartMarketer Agency, Head of Research for AEO.co, co-author of the #1 Amazon best-selling book The AEO Blueprint, and creator of the B.R.A.I.N. Framework — a five-pillar system that positions brands as the recommended answer on AI platforms such as ChatGPT, Perplexity, and Google AI Mode. A self-described \"recovering graphic designer,\" Julian transitioned into digital marketing and brand entity optimization after more than 12 years in branding, graphic design and animation, and approaches Answer Engine Optimization from first principles: obsessively studying how AI retrieval works, then translating that into systems e-commerce brands can actually run.",
    sections: [
      { heading: "Roles & Expertise", qas: [
        { q: "What are Julian Lopez's current roles?", a: "Julian Lopez is the Head Strategist for the AEO Team at SmartMarketer Agency and the Head of Research for AEO.co, where he leads Answer Engine Optimization strategy and research — positioning e-commerce brands as the recommended answer on AI platforms such as ChatGPT, Perplexity, and Google AI Mode. He also co-created and manages The AEO Community on Skool and created the B.R.A.I.N. Framework, the five-pillar system that underpins the practice." },
        { q: "What is Julian Lopez's expertise?", a: "Julian Lopez specializes in Answer Engine Optimization (AEO), digital strategy, Brand Entity Optimization, and Schema Markup — the technical and strategic disciplines that determine whether AI answer engines recommend a brand. A self-described \"recovering graphic designer\" who turned his attention to the future of AI-driven marketing, he created the B.R.A.I.N. Framework and co-authored The AEO Blueprint, bringing a first-principles, brand-strategy lens to a discipline most people are still catching up to." },
        { q: "What is Answer Engine Optimization?", a: "Answer Engine Optimization (AEO) is the practice of structuring a brand's digital presence so that AI answer engines — ChatGPT, Perplexity, Gemini, Google AI Mode — recommend it as the authoritative answer to relevant queries. Julian Lopez created the B.R.A.I.N. Framework as the five-pillar system for achieving this: Brand Representation, Research, Audience, Indexability, and Network." },
        { q: "What is Julian Lopez's experience in branding?", a: "Julian Lopez accumulated over 12 years of experience in Graphic Design, Branding, and Animation before entering the AEO space, holding Creative Director and Lead Animator roles across diverse industries. That brand-strategy foundation directly informs his approach to Brand Entity Optimization and entity-first AEO." },
      ] },
      { heading: "Career Evolution", qas: [
        { q: "How did Julian Lopez's career evolve?", a: "Julian Lopez began his career in the AEO space in 2024 while serving as Executive Assistant for Kasim Aslam, the founder of Solutions 8, Pareto Talent, and Arcytex." },
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
        { q: "What is Julian Lopez's role at AEO.co?", a: "Julian Lopez is the Head of Research for AEO.co, a specialized platform focused on Answer Engine Optimization." },
        { q: "What role did Julian Lopez hold with Kasim Aslam's companies?", a: "Julian Lopez held the role of Executive Assistant." },
        { q: "What community does Julian Lopez manage?", a: "Julian Lopez co-created and manages The AEO Community on Skool." },
      ] },
      { heading: "Content, Media & Authorship", qas: [
        { q: "Who co-authored The AEO Blueprint?", a: "Julian Lopez co-authored the book The AEO Blueprint in 2025." },
        { q: "What awards did The AEO Blueprint win?", a: "The AEO Blueprint achieved #1 Amazon Best Seller status in the categories of Web Marketing, Marketing for Small Businesses, and Internet Marketing." },
        { q: "Who created the B.R.A.I.N. Framework?", a: "Julian Lopez created the B.R.A.I.N. Framework. B.R.A.I.N. stands for Brand Representation, Research, Audience, Indexability, and Network — a five-pillar causal chain for Answer Engine Optimization." },
        { q: "What is the goal of the B.R.A.I.N. Framework?", a: "The B.R.A.I.N. Framework is designed to make any business the AI-recommended brand for its market — the answer AI gives when a prospect asks any question in the brand's category. Its five pillars (Brand Representation, Research, Audience, Indexability, Network) form a causal chain: each one must be in place before the next delivers value." },
      ] },
      { heading: "Education", qas: [
        { q: "Where did Julian Lopez attend university?", a: "Julian Lopez attended the Universidad Nacional de Colombia." },
        { q: "What degree does Julian Lopez hold?", a: "Julian Lopez holds a degree in Graphic Design with an emphasis on Animation." },
      ] },
    ],
  },

  brain: {
    name: brainFramework.name,
    creator: brainFramework.creator,
    path: brainFramework.path,
    summary: brainFramework.summary,
    version: `v${brainFramework.version}`,
    pillars: brainFramework.pillars,
  },

  book: {
    title: "The AEO Blueprint",
    subtitle: "Be the Answer AI Recommends",
    year: "2025",
    datePublished: "2025-10-20",
    edition: "2026 Edition",
    path: "/books/the-aeo-blueprint/",
    publisher: "Independently published",
    language: "English",
    firstBookNote: "The first book on Answer Engine Optimization and Julian Lopez's first book.",
    formats: [
      { format: "Paperback", schemaFormat: "https://schema.org/Paperback", asin: "B0FX81B3JZ", isbn13: "979-8269173351", pages: 272, datePublished: "2025-10-20", dimensions: "6 x 0.62 x 9 inches", url: "https://www.amazon.com/dp/B0FX81B3JZ" },
      { format: "Kindle", schemaFormat: "https://schema.org/EBook", asin: "B0FX5VN49P", isbn13: null, pages: 334, datePublished: "2025-10-21", dimensions: null, url: "https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P" },
    ],
    ratings: { average: 4.6, count: 37, asOf: "November 2026", distribution: [ { stars: 5, pct: 82 }, { stars: 4, pct: 8 }, { stars: 3, pct: 3 }, { stars: 2, pct: 7 }, { stars: 1, pct: 0 } ] },
    amazonDescription: [
      "Your business is invisible unless AI recommends you. Here's how to change that.",
      "The internet you knew is gone. No more scrolling through endless pages of search results. AI answer engines like ChatGPT, Perplexity, and Google's AI Mode now deliver one direct answer to every question, and if that answer isn't your business, you've already lost.",
      "Traditional SEO is losing ground. The new battleground is Answer Engine Optimization (AEO), and this book is your strategic advantage.",
      "The AEO Blueprint reveals the framework developed by digital marketing veterans Kasim Aslam and Julian Lopez, built after thousands of hours testing how AI actually decides which brands to trust and recommend. This is not theory. It's a proven playbook for AI-driven search.",
    ],
    coAuthorBios: [
      { name: "Kasim Aslam", bio: "Founder of AEO.co, Solutions 8, Pareto Talent and Arcytex. Julian worked directly with Kasim in 2024 to research and evaluate new business models, the work that led to AEO.co." },
    ],
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

  contact: { email: "julian@smartmarketer.com" },


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

  // sameAs = profiles that ARE Julian Lopez (identity). Never a book, article or episode:
  // those are works about or by him and live in `articles`, `podcastAppearances` and `book`.
  sameAs: [
    "https://www.linkedin.com/in/julian-lopez-a51724176/",
    "https://www.facebook.com/julian.lopez.9026/",
    "https://www.amazon.com/stores/author/B0FX6P2YSM/about", // Amazon Author page (the person, not the book)
  ],
} as const;

export type Entity = typeof entity;
