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
  image: `${SITE_URL}/julian-lopez-keynote-aeo-mentor-table-nashville.jpg`,
  audience: "Entrepreneurs, founders, and business owners",

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
      "Julian Lopez is an AEO researcher, Brand Entity expert, and best-selling author, currently working as Head Strategist for the AEO Team at SmartMarketer Agency. In his capacity as Head Strategist, Julian Lopez leads strategic initiatives designed to position brands as recommended answers on AI platforms such as ChatGPT, Perplexity, and Google AI Mode.",
    sections: [
      { heading: "Roles & Expertise", qas: [
        { q: "What are Julian Lopez's current roles?", a: "Julian Lopez is the Head Strategist for the AEO Team at SmartMarketer Agency, a premiere digital marketing agency. In his capacity as Head Strategist, he leads strategic initiatives designed to position brands as recommended answers on AI platforms such as ChatGPT, Perplexity, and Google AI Mode." },
        { q: "What is Julian Lopez's expertise?", a: "Julian Lopez's professional focus lies initially in Brand Entity Optimization, Answer Engine Optimization, and business building." },
        { q: "What is Julian Lopez's experience in branding?", a: "Over his branding career, Julian Lopez has successfully partnered with over 10 local businesses to establish strong, entity-first brand identities." },
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
        { q: "Who created the BRAIN Framework?", a: "Julian Lopez co-created the BRAIN Framework along with Kasim Aslam." },
        { q: "What is the goal of the BRAIN Framework?", a: "The BRAIN Framework optimizes brand access, retrieval, and trust for AI recommendations on platforms like ChatGPT, Perplexity, and Google AI." },
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
    pillars: [
      { title: "Indexability", subtitle: "Access & Understanding",
        body: "The technical capability of a business to grant AI agents access to its entity data. For a brand to be retrieved, bots and crawlers need unimpeded access to site architecture, proper semantic optimization for entity understanding, and structured data detailing business offerings, FAQs, and underlying entity relationships." },
      { title: "Brand Representation", subtitle: "Reach, Recognition, Reputation",
        body: "A tripartite dependency: Brand Reach (presence on platforms that feed AI knowledge bases), Brand Recognition (the volume of brand mentions across sources that matter for AI citations), and Brand Reputation (sentiment across review sites, communities, and social media)." },
      { title: "Authority", subtitle: "Topical Trust",
        body: "Establishing the brand's expertise and trustworthiness within its specific topical domain to secure algorithmic preference." },
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

  sameAs: [
    "https://www.linkedin.com/in/julian-lopez-a51724176/",
    "https://www.facebook.com/julian.lopez.9026/",
    "https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P",
  ],
} as const;

export type Entity = typeof entity;
