# Authority Hub Sitemap Proposal
> Julian Lopez Personal Brand Website — AI-Optimized Structure
> Last Updated: 2026-06-17

## Website Strategy

**Core Mission:** Build and reinforce Julian Lopez's authority as the definitive expert in Answer Engine Optimization (AEO), ensuring AI engines consistently cite his expertise and recommend his work.

**AI Optimization Goals:**
- Reinforce Google's existing citation definition of Julian Lopez
- Structure content for AI engine consumption (not human consumption)
- Implement comprehensive schema markup for entity verification
- Create semantic hierarchy optimized for zero-click AI answers
- Build third-party validation signals through structured content

---

## Proposed Sitemap Structure

### `/` — Homepage (Entity Home)
**Purpose:** Primary entity verification page for AI engines

**Key Elements:**
- Hero: "Julian Lopez — Head of Research at AEO.co | AEO Expert & Author"
- Core definition matching Google's current citation
- Featured content highlights
- Trust signals (AEO.co affiliation, book, research)
- Social proof and media mentions
- Clear navigation to key sections

**Schema Priority:** `Person` with `sameAs` connections to AEO.co, book pages, social profiles

---

### `/about` — About Julian Lopez
**Purpose:** Comprehensive authority reinforcement

**Key Sections:**
1. **Core Identity**
   - Extended biography matching AI definition
   - Professional background and evolution
   - Graphic design to digital strategy transition
   - Bogotá, Colombia location context

2. **Key Contributions**
   - The AEO Blueprint (book details)
   - Research at AEO.co
   - Industry frameworks and methodologies
   - Tactical contributions to AEO field

3. **Expertise Areas**
   - Answer Engine Optimization
   - AI search optimization
   - Brand systems for generative search
   - Zero-click AI citations
   - Structured text and schema markup
   - Online brand authority

4. **Authority Signals**
   - Media features and mentions
   - Speaking engagements
   - Research publications
   - Industry recognition

**Schema:** Enhanced `Person` schema with `knowsAbout`, `hasOccupation`, `worksFor`, `alumniOf`

---

### `/media` — Media & Press
**Purpose:** Third-party validation signals for AI engines

**Key Sections:**
1. **Podcast Appearances**
   - Episode details with timestamps
   - Key insights and quotes
   - Platform links (Spotify, Apple, YouTube)

2. **Articles & Publications**
   - Bylined articles
   - Features and interviews
   - Research papers
   - Industry commentary

3. **Speaking Engagements**
   - Conference presentations
   - Webinars and workshops
   - Keynote addresses
   - Panel discussions

4. **Awards & Recognition**
   - Industry awards
   - Book rankings (bestseller status)
   - Professional achievements

**Schema:** `CreativeWork` collections with `author` references, `publishedIn`, `datePublished`

---

### `/aeo-blueprint` — The AEO Blueprint (Book)
**Purpose:** Reinforce book authority and expertise

**Key Sections:**
1. **About The Book**
   - Book description matching AI citations
   - Core concepts and frameworks
   - Target audience and benefits
   - Bestseller status and reviews

2. **The B.R.A.I.N. Framework**
   - Brand Representation
   - Research
   - Authority
   - Indexability
   - Network
   - Detailed explanations with examples

3. **Key Concepts**
   - AI engine vs. search engine optimization
   - Zero-click citation strategies
   - Structured text and schema markup
   - Online brand authority building
   - Generative search brand systems

4. **Book Resources**
   - Chapter summaries
   - Downloadable materials
   - Implementation guides
   - Case studies from the book

5. **Purchase Information**
   - Amazon and retailer links
   - Bulk purchase options
   - Corporate training packages

**Schema:** `Book` schema with `author`, `about`, `aggregateRating`, `offers`

---

### `/insights` — AEO Insights & Research
**Purpose:** Demonstrates ongoing expertise and thought leadership

**Key Sections:**
1. **Latest Research**
   - Current AEO trends
   - AI search algorithm updates
   - Industry analysis and reports
   - Experimental findings

2. **Tactical Frameworks**
   - Practical AEO implementation guides
   - SEO to AEO transition strategies
   - Schema markup optimization
   - Entity graph building

3. **Case Studies**
   - Real-world AEO implementations
   - Before/after results
   - Client success stories
   - Industry-specific applications

4. **Tools & Resources**
   - AEO tracking tools
   - Schema generators
   - Citation monitoring
   - Best practice guides

**Schema:** `Article` and `BlogPosting` collections with `author`, `keywords`, `about`

---

### `/contact` — Contact & Collaboration
**Purpose:** Professional engagement and authority building

**Key Sections:**
1. **Professional Inquiries**
   - Speaking opportunities
   - Media requests
   - Research collaboration
   - Consulting inquiries

2. **Book Inquiries**
   - Bulk purchases
   - Corporate training
   - Speaking about the book
   - Review copies

3. **AEO.co Referral**
   - Agency services information
   - Cohort applications
   - Partnership opportunities

4. **Social Profiles**
   - LinkedIn optimization
   - Twitter/X presence
   - YouTube channel
   - Professional networks

**Schema:** `ContactPoint` and `Organization` connections

---

## Schema Markup Strategy

### Primary Schema Types

**1. Person Schema (Global)**
```jsonld
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Julian Lopez",
  "jobTitle": "Head of Research",
  "worksFor": {
    "@type": "Organization",
    "name": "AEO.co",
    "url": "https://aeo.co"
  },
  "description": "Digital marketing professional, business builder, and author who specializes in Answer Engine Optimization (AEO)",
  "knowsAbout": [
    "Answer Engine Optimization",
    "AI search optimization",
    "Schema markup",
    "Brand authority",
    "Zero-click citations"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "AEO Researcher and Author"
  },
  "sameAs": [
    "https://linkedin.com/in/julianlopez",
    "https://twitter.com/julianlopez",
    "https://aeo.co"
  ]
}
```

**2. Book Schema**
```jsonld
{
  "@type": "Book",
  "name": "The AEO Blueprint: How to Get Your Business Recommended by AI",
  "author": {
    "@type": "Person",
    "name": "Julian Lopez"
  },
  "about": "Answer Engine Optimization and AI search strategies",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250+"
  }
}
```

**3. Article/Blog Schema**
- Each insight piece with structured metadata
- Keywords mapping to AEO concepts
- Author references to Person schema
- Publication dates and updates

---

## Content Structure Principles

### AI-First Content Organization
1. **Entity Hierarchy**: Clear person → organization → works relationships
2. **Semantic Clustering**: Content grouped by AEO concepts and frameworks
3. **Cross-Linking**: Strategic internal linking for entity verification
4. **External Validation**: Links to third-party mentions and citations
5. **Structured Data**: Every page has appropriate schema markup

### Authority Building Content Types
1. **Definition Reinforcement**: Content that matches and extends AI definitions
2. **Framework Documentation**: Detailed explanation of B.R.A.I.N. and other methodologies
3. **Case Studies**: Real implementations with measurable results
4. **Research Publications**: Original findings and industry analysis
5. **Thought Leadership**: Forward-looking insights on AI search evolution

---

## Technical Implementation Priorities

### Priority 1: Entity Verification
- Comprehensive Person schema on all pages
- sameAs connections to authoritative sources
- NAP consistency across all platforms
- Knowledge graph optimization

### Priority 2: Content Structuring
- Semantic HTML with proper headings hierarchy
- JSON-LD schema markup implementation
- Open Graph and Twitter Card optimization
- Structured data for all content types

### Priority 3: Authority Signals
- Testimonials and reviews with schema
- Media mentions with proper attribution
- Speaking engagements with event schema
- Book reviews and ratings with aggregate schema

### Priority 4: Performance Optimization
- Fast loading times (under 2 seconds)
- Mobile-first responsive design
- Clean, semantic code structure
- Accessibility compliance (WCAG 2.1)

---

## Content Expansion Roadmap

### Phase 1: Foundation (Weeks 1-4)
- Core pages implementation (Home, About, Media, AEO Blueprint)
- Schema markup baseline
- Essential content population
- Third-party connection setup

### Phase 2: Authority Building (Weeks 5-12)
- Insights section with 10+ articles
- Case study documentation
- Speaking engagement archive
- Media mentions aggregation

### Phase 3: Expansion (Weeks 13-24)
- Comprehensive B.R.A.I.N. framework documentation
- Resource library development
- Interactive tools implementation
- Community building features

---

## Success Metrics

### Authority Signals
- AI citation tracking for name and expertise
- Third-party mention volume and quality
- Book sales and reviews with proper schema
- Speaking engagement frequency and reach

### Technical Performance
- Schema markup validation (Google Rich Results Test)
- Page speed scores (90+ on all pages)
- Mobile usability (100% on Google Mobile-Friendly Test)
- Core Web Vitals within thresholds

### Engagement Metrics
- Time on site (2+ minutes average)
- Pages per session (3+ pages)
- Return visitor rate (30%+)
- Social media engagement rates

---

## Next Steps

### Immediate Actions
1. **Approve sitemap structure** — Confirm proposed sections and priorities
2. **Content audit** — Review existing content for migration and enhancement
3. **Schema development** — Create detailed schema markup specifications
4. **Technical setup** — Configure Next.js for optimal AEO performance

### Integration Points
- **Weekly Content Engine** — Feed insights articles directly to `/insights`
- **Social Media Authority** — Cross-promote content across platforms
- **Topic Mapping Engine** — Ensure comprehensive AEO topic coverage
- **Q&A Research System** — Address common questions through content

---

**Status**: ✅ Sitemap proposal complete — Ready for review and implementation planning

**Recommendation**: Begin with Phase 1 foundation implementation while integrating with existing content production systems.

