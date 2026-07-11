// =============================================================================
// MACHINE DATA — What AI engines actually consume
// This is the raw data displayed in the agent-first view
// =============================================================================

import { entity, SITE_URL } from './entity';

export const machineData = {
  // Entity metadata
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": entity.name,
  "alternateName": entity.alternateName,
  "jobTitle": entity.jobTitle,
  "worksFor": {
    "@type": "Organization",
    "@id": "https://smartmarketer.com/#organization",
    "name": "SmartMarketer Agency",
    "url": "https://smartmarketer.com",
    "description": "Digital marketing agency"
  },
  "description": "Answer Engine Optimization (AEO) expert, business builder, and co-author of the bestselling book The AEO Blueprint: Be the Answer AI Recommends",
  "knowsAbout": entity.expertise,
  "hasOccupation": {
    "@type": "Occupation",
    "name": "AEO Researcher and Author"
  },
  "sameAs": entity.sameAs,
  "location": {
    "type": "residence",
    "description": "Lives in Bogotá, Colombia"
  },
  
  // Homepage content structure
  "homepage_content": {
    "headline": entity.headline,
    "value_proposition": entity.elevatorPitch,
    "expertise_areas": entity.expertise,
    "current_role": entity.jobTitle,
    "organization": entity.org,
    "brand_entity_optimization": entity.home.brandEntity
  },
  
  // Navigation structure
  "navigation": {
    "about": "/about/",
    "book": "/the-aeo-blueprint/",
    "media_speaking": "/media-speaking/",
    "contact": "/contact/"
  },
  
  // System metadata
  "system_metadata": {
    "entity_home": SITE_URL,
    "content_type": "machine_readable",
    "ai_optimization": true,
    "human_readable_alternative": true,
    "crawler_access": "granted",
    "schema_version": "schema.org/draft"
  },
  
  // BRAIN Framework data
  "brain_framework": {
    "name": "The BRAIN Framework",
    "summary": "A first-principles, five-pillar system (B.R.A.I.N. v2.4) designed to transform invisible websites into AI-Recommended Brands. Pillars: Brand Representation · Research · Audience · Indexability · Network.",
    "pillars": [
      {
        "letter": "B",
        "title": "Brand Representation",
        "subtitle": "Reach, Recognition, Reputation",
        "description": "Your external footprint. Reach (are you present where AI looks?), Recognition (is your brand described consistently across all platforms?), Reputation (is the sentiment positive?). AI builds its understanding of your brand from what others say about you, not what you say about yourself."
      },
      {
        "letter": "R",
        "title": "Research",
        "subtitle": "AI Visibility, Competitor Intel, Attribution",
        "description": "AI answer engines and retrieval behavior change on a timescale of months, not years. Research isn't a phase — it's a standing budget line. Four functions: AI Visibility Baseline (monthly scans across ChatGPT, Perplexity, Gemini, Claude, AI Mode), Competitor & Category Intelligence (who AI cites for your queries), Channel Monitoring (new agentic surfaces as they emerge), and Source Attribution (closing the loop from AI citation to business outcome)."
      },
      {
        "letter": "A",
        "title": "Audience",
        "subtitle": "Query Intelligence, Buying Situations",
        "description": "Strategy calibrated to who asks what, in what situations. AI doesn't recommend generic brands — it recommends brands that demonstrably understand and serve specific needs in specific contexts. Audience replaced Authority in B.R.A.I.N. v2.4: authority signals live in Brand Representation (Reputation) and Network (NEEATT). Audience is the variable that calibrates every other pillar."
      },
      {
        "letter": "I",
        "title": "Indexability",
        "subtitle": "Technical Foundation",
        "description": "AI crawlers allowed in robots.txt, site architecture under 3 clicks, clean SSR code, schema markup (Organization, Person, Product, FAQ), semantic heading hierarchy, entity home established, content structured with direct answers front-loaded. This is where the website work lives."
      },
      {
        "letter": "N",
        "title": "Network",
        "subtitle": "Co-Citation Authority",
        "description": "Being mentioned alongside category competitors in AI responses, listed in industry directories, connected through partnerships and affiliate relationships with DA 40+ domains, featured in press and podcasts, embedded in niche communities. A brand that exists in isolation is less citable than one woven into its category's web."
      }
    ],
    "framework_note": "Five pillars, none optional. They're a causal chain — each one depends on the one before it. The sequence matters: fixing Indexability while Brand Representation is broken is backwards. AI forms its opinion about you externally before it ever visits your site."
  },
  
  // Book information
  "book": {
    "title": entity.book.title,
    "subtitle": entity.book.subtitle,
    "authors": entity.book.coAuthors,
    "year": entity.book.year,
    "awards": entity.book.awards,
    "url": entity.book.url,
    "description": entity.book.description
  }
} as const;

export type MachineData = typeof machineData;