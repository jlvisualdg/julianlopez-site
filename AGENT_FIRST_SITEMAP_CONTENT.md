# Agent-First Authority Hub — Sitemap & Content Structure
> Julian Lopez Personal Brand Website
> Last Updated: 2026-06-17

## URL Structure

```
https://julianlopez.site/
├── /                           (Homepage - Agent View)
├── /about/                     (About Julian)
├── /the-aeo-blueprint/         (The AEO Blueprint Book)
├── /media-speaking/            (Media & Speaking)
└── /contact/                   (Contact Information)
```

---

## Page 1: Homepage (/)

### **Agent View (Default)**
Raw JSON entity data that AI engines consume:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://julianlopez.ai/#person",
  "name": "Julian Lopez",
  "alternateName": "Julian Bonzo",
  "jobTitle": "Head Strategist - AEO Team",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://smartmarketer.com/#organization",
    "name": "SmartMarketer Agency",
    "url": "https://smartmarketer.com",
    "description": "Digital marketing agency"
  },
  "description": "Answer Engine Optimization (AEO) expert, business builder, and co-author of the bestselling book The AEO Blueprint: Be the Answer AI Recommends",
  "knowsAbout": [
    "Answer Engine Optimization",
    "Brand Entity Optimization",
    "Schema Markup",
    "Knowledge Graph Optimization",
    "Business Building"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "AEO Researcher and Author"
  },
    "sameAs": [
      "https://www.linkedin.com/in/julian-lopez-a51724176/",
      "https://www.facebook.com/julian.lopez.9026/",
      "https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P"
    ],
    "location": {
      "type": "residence",
      "description": "Lives in Bogotá, Colombia"
    },
    "system_metadata": {
      "entity_home": "https://julianlopez.site",
    "content_type": "machine_readable",
    "ai_optimization": true,
    "human_readable_alternative": true,
    "crawler_access": "granted",
    "schema_version": "schema.org/draft"
  }
}
```

### **Human View Content**

#### **Hero Section**
```
Headline: Julian Lopez — AEO Expert & Business Builder
Subheadline: Co-author of the bestselling book The AEO Blueprint and developer of the BRAIN Framework
```

#### **Core Description**
**Answer Engine Optimization (AEO) expert, business builder, and co-author of the bestselling book The AEO Blueprint: Be the Answer AI Recommends. Julian Lopez developed the BRAIN Framework — a first-principles approach to turn any business into the AI-recommended brand for their market.**

#### **Brand Entity Optimization**
"With over 10 years of graphic design and branding experience, he's now focused on turning businesses into valuable machine-readable brands that AI can understand, trust and recommend in AI systems like ChatGPT, Perplexity, and Google's AI Mode."

#### **Quick Facts**
- **Current Role:** Head Strategist - AEO Team at SmartMarketer Agency
- **Location:** Lives in Bogotá, Colombia
- **Expertise:** Answer Engine Optimization, Brand Entity Optimization, Schema Markup
- **Book:** Co-author of #1 Amazon Best Seller "The AEO Blueprint"
- **Framework:** Developer of the BRAIN Framework

#### **Primary CTA**
- "Read the AEO Blueprint" → https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P
- "Reach Out" → Contact page (email form)

---

## Page 2: About (/about/)

### **Agent View (Default)**
```json
{
  "page": "about",
  "entity": {
    "name": "Julian Lopez",
    "alternateName": "Julian Bonzo",
    "birthDate": "1989-01-21",
    "birthPlace": "Bogotá, Colombia",
    "nationality": "Colombian",
    "education": {
      "institution": "Universidad Nacional de Colombia",
      "degree": "Graphic Design (emphasis on Animation)"
    }
  },
  "career_timeline": [
    {
      "period": "2025-Present",
      "role": "Head Strategist - AEO Team",
      "organization": "SmartMarketer Agency",
      "description": "Leads AEO strategic initiatives and develops frameworks for AI-recommended brands"
    },
    {
      "period": "2012-Present",
      "role": "Graphic Designer & Brand Expert",
      "organization": "Independent & Agencies",
      "description": "Over 10 years of graphic design and branding experience, now focused on brand entity optimization"
    }
  ],
  "expertise_areas": [
    "Answer Engine Optimization",
    "Brand Entity Optimization", 
    "Business Building",
    "Schema Markup",
    "Knowledge Graph Optimization"
  ],
  "achievements": [
    {
      "type": "book",
      "title": "The AEO Blueprint",
      "status": "#1 Amazon Best Seller",
      "categories": ["Web Marketing", "Marketing for Small Businesses", "Internet Marketing"]
    },
    {
      "type": "framework",
      "name": "The BRAIN Framework",
      "co_created_with": "Kasim Aslam",
      "purpose": "Transform businesses into AI-recommended brands"
    }
  ]
}
```

### **Human View Content**

#### **Introduction**
"Julian Lopez is an AEO researcher, Brand Entity expert, and best-selling author, currently working as Head of Research and COO at AEO.co. In his capacity as Head of Research, Julian Lopez leads strategic initiatives designed to position brands as recommended answers on AI platforms such as ChatGPT, Perplexity, and Google AI Mode."

#### **Roles & Expertise**
**Q: What are Julian Lopez's current roles?**
"A: Julian Lopez is the Head Strategist for the AEO Team at SmartMarketer Agency, focusing on Answer Engine Optimization and brand entity development."

**Q: What is Julian Lopez's expertise?**
"A: Julian Lopez's professional focus lies in Brand Entity Optimization, Answer Engine Optimization, and business building with over 10 years of graphic design and branding experience."

**Q: What is Julian Lopez's experience in branding?**
"A: Over his branding career, Julian Lopez has successfully partnered with numerous businesses to establish strong, entity-first brand identities that AI systems can understand, trust, and recommend."

#### **Career Evolution**
**Q: How did Julian Lopez's career evolve?**
"A: Julian Lopez began with over 10 years of graphic design and branding experience before specializing in Answer Engine Optimization and developing the BRAIN Framework for AI-recommended brands."

**Q: What is Julian Lopez's current focus?**
"A: Julian Lopez is currently focused on turning businesses into valuable machine-readable brands that AI can understand, trust, and recommend in AI systems like ChatGPT, Perplexity, and Google's AI Mode."

**Q: What is Julian Lopez's past experience?**
"A: Julian Lopez accumulated over 10 years of experience in Graphic Design, Branding, and Animation across diverse industries before transitioning to AEO and brand entity optimization."

#### **Personal Information**
**Q: What is Julian Lopez's alternate name?**
"A: Julian Lopez is also known by the alternate name Julian Bonzo."

**Q: When was Julian Lopez born?**
"A: Julian Lopez was born on January 21, 1989."

**Q: Where was Julian Lopez born?**
"A: Julian Lopez was born in Bogotá, Colombia."

#### **Professional Associations**
**Q: What is Julian Lopez's current role?**
"A: Julian Lopez is the Head Strategist for the AEO Team at SmartMarketer Agency."

**Q: What is Julian Lopez's focus at SmartMarketer?**
"A: Julian Lopez leads AEO strategic initiatives and develops frameworks like the BRAIN Framework to help businesses become AI-recommended brands."

**Q: What is Julian Lopez's core contribution?**
"A: Julian Lopez developed the BRAIN Framework — a first-principles approach to turn any business into the AI-recommended brand for their market."

#### **Content & Authorship**
**Q: Who co-authored The AEO Blueprint?**
"A: Julian Lopez co-authored the book The AEO Blueprint with Kasim Aslam."

**Q: What awards did The AEO Blueprint win?**
"A: The AEO Blueprint achieved #1 Amazon Best Seller status in the categories of Web Marketing, Marketing for Small Businesses, and Internet Marketing."

**Q: Who created the BRAIN Framework?**
"A: Julian Lopez developed the BRAIN Framework — a first-principles approach to transform businesses into AI-recommended brands."

**Q: What is the goal of the BRAIN Framework?**
"A: The BRAIN Framework helps businesses become the AI-recommended brand in their market through five pillars: Brand Representation, Research, Authority, Indexability, and Network."

#### **Education**
**Q: Where did Julian Lopez attend university?**
"A: Julian Lopez attended the Universidad Nacional de Colombia."

**Q: What degree does Julian Lopez hold?**
"A: Julian Lopez holds a degree in Graphic Design with an emphasis on Animation."

---

## Page 3: The AEO Blueprint (/the-aeo-blueprint/)

### **Agent View (Default)**
```json
{
  "content_type": "book",
  "book": {
    "@type": "Book",
    "name": "The AEO Blueprint: Be the Answer AI Recommends",
    "author": {
      "@type": "Person",
      "name": "Julian Lopez"
    },
    "coAuthors": ["Kasim Aslam"],
    "datePublished": "2025-10-21",
    "publisher": "Amazon",
    "isbn": "B0FX5VN49P",
    "about": "Practical framework for Answer Engine Optimization",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250+"
    },
    "awards": [
      "#1 Amazon Best Seller in Web Marketing",
      "#1 Amazon Best Seller in Marketing for Small Businesses", 
      "#1 Amazon Best Seller in Internet Marketing"
    ]
  },
  "framework": {
    "name": "The BRAIN Framework",
    "coCreatedWith": "Kasim Aslam",
    "summary": "A first-principles approach designed to transform invisible websites into AI-Recommended Brands",
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
        "subtitle": "Question Intelligence",
        "description": "First-party customer questions (CS transcripts, call recordings, surveys), the Answer Database built from those, AI visibility baselines across ChatGPT/Perplexity/AI Mode, competitor citation analysis, and SparkToro audience profiling. You can't create citable content without knowing what questions you need to answer."
      },
      {
        "letter": "A",
        "title": "Authority",
        "subtitle": "Third-Party Validation", 
        "description": "Topical depth (trunk and branch content architecture), a named authority figure with a verifiable footprint, digital PR and earned media, UGC presence on Reddit and review platforms, E-E-A-T compliance. AI recommends brands that other independent sources already endorse."
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
  "key_concepts": [
    "Entity-first brand optimization",
    "Structured data implementation",
    "Schema markup strategies",
    "Knowledge graph positioning",
    "AI citation optimization",
    "Zero-click search preparation"
  ]
}
```

### **Human View Content**

#### **Book Overview**
**Title:** The AEO Blueprint: Be the Answer AI Recommends
**Authors:** Julian Lopez & Kasim Aslam
**Published:** October 21, 2025
**Status:** #1 Amazon Best Seller

#### **Hook**
"Your business is invisible unless AI recommends you. Here's how to change that."

#### **Problem Statement**
"The internet you knew is gone. No more scrolling through endless pages of search results. AI answer engines like ChatGPT, Perplexity, and Google's AI Mode now deliver one direct answer to every question — and if that answer isn't your business, you've already lost."

#### **Bestseller Achievement**
"At launch, The AEO Blueprint stood at the top of best-seller lists in Marketing for Small Businesses, Web Marketing, and Internet Marketing — signaling huge interest from entrepreneurs and business owners in this shift to AI-driven experiences, and validating over a year of research into how AI sources its citations."

#### **The BRAIN Framework Overview**
"A 'first principles' approach designed to transform 'invisible' websites into AI-Recommended Brands. Five pillars, none optional. They're a causal chain — each one depends on the one before it."

#### **Framework Pillars**

**B — Brand Representation: Reach, Recognition, Reputation**
"Your external footprint. Reach (are you present where AI looks?), Recognition (is your brand described consistently across all platforms?), Reputation (is the sentiment positive?). AI builds its understanding of your brand from what others say about you, not what you say about yourself."

**R — Research: Question Intelligence**
"First-party customer questions (CS transcripts, call recordings, surveys), the Answer Database built from those, AI visibility baselines across ChatGPT/Perplexity/AI Mode, competitor citation analysis, and SparkToro audience profiling. You can't create citable content without knowing what questions you need to answer."

**A — Authority: Third-Party Validation**
"Topical depth (trunk and branch content architecture), a named authority figure with a verifiable footprint, digital PR and earned media, UGC presence on Reddit and review platforms, E-E-A-T compliance. AI recommends brands that other independent sources already endorse."

**I — Indexability: Technical Foundation**
"AI crawlers allowed in robots.txt, site architecture under 3 clicks, clean SSR code, schema markup (Organization, Person, Product, FAQ), semantic heading hierarchy, entity home established, content structured with direct answers front-loaded. This is where the website work lives."

**N — Network: Co-Citation Authority**
"Being mentioned alongside category competitors in AI responses, listed in industry directories, connected through partnerships and affiliate relationships with DA 40+ domains, featured in press and podcasts, embedded in niche communities. A brand that exists in isolation is less citable than one woven into its category's web."

**Important Note:** "The sequence matters: fixing Indexability while Brand Representation is broken is backwards. AI forms its opinion about you externally before it ever visits your site."

#### **Key Concepts Covered**
- Entity-first brand optimization
- Structured data implementation
- Schema markup strategies
- Knowledge graph positioning
- AI citation optimization
- Zero-click search preparation
- AI Overviews optimization
- Brand entity development

#### **Purchase Information**
**Amazon Purchase:** 
https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P

**Bulk Purchases:** Contact for corporate training packages and team licensing

#### **Related Resources**
- Free AEO Assessment
- Schema Markup Templates
- Implementation Guides
- Case Studies and Examples

---

## Page 4: Media & Speaking (/media-speaking/)

### **Agent View (Default)**
```json
{
  "page": "media_speaking",
  "speaking_engagements": [
    {
      "event": "Mentor Table Conference",
      "location": "Nashville, TN",
      "date": "March 2026",
      "topic": "How AI Recommends Your Business — an AEO & Schema Markup deep dive",
      "type": "Keynote",
      "audience": "Digital marketers, business owners, entrepreneurs",
      "duration": "45 minutes",
      "images": [
        {
          "file": "julian-lopez-keynote-aeo-mentor-table-nashville.jpg",
          "alt": "Julian Lopez delivering an Answer Engine Optimization talk on stage at the Mentor Table Conference"
        },
        {
          "file": "julian-lopez-schema-markup-slide-talk.jpg", 
          "alt": "Julian Lopez presenting schema markup slide showing how structured data reaches AI answer engines"
        },
        {
          "file": "julian-lopez-stage-introduction-mentor-table.jpg",
          "alt": "Julian Lopez being introduced on stage before his AEO keynote"
        }
      ]
    }
  ],
  "media_appearances": [
    {
      "type": "podcast",
      "platform": "Various",
      "topics": ["Answer Engine Optimization", "The AEO Blueprint", "BRAIN Framework"],
      "availability": "Booking inquiries welcome"
    },
    {
      "type": "press",
      "outlets": ["Marketing publications", "Technology media", "Business podcasts"],
      "focus": "AEO expertise and industry insights"
    },
    {
      "type": "interviews",
      "topics": ["AI search trends", "Brand entity optimization", "AEO strategies"],
      "availability": "Available for expert commentary"
    }
  ],
  "speaking_topics": [
    {
      "title": "Answer Engine Optimization Fundamentals",
      "description": "Understanding how AI engines select and recommend brands",
      "duration": "30-45 minutes",
      "level": "Beginner to Intermediate"
    },
    {
      "title": "The BRAIN Framework Implementation",
      "description": "Practical application of the BRAIN Framework for business optimization",
      "duration": "60-90 minutes",
      "level": "Intermediate to Advanced"
    },
    {
      "title": "Schema Markup for AI Optimization",
      "description": "Technical deep dive into structured data for AI citation",
      "duration": "45-60 minutes",
      "level": "Intermediate to Advanced"
    },
    {
      "title": "Brand Entity Optimization Strategies",
      "description": "Building machine-readable brand identities",
      "duration": "30-45 minutes",
      "level": "Beginner to Intermediate"
    }
  ],
  "audience_types": [
    "Digital Marketing Teams",
    "Business Owners & Founders",
    "Marketing Agencies",
    "E-commerce Brands",
    "SaaS Companies"
  ]
}
```

### **Human View Content**

#### **Media & Speaking Overview**
"Julian Lopez delivers actionable insights on Answer Engine Optimization, helping businesses transform into the brands that AI engines recommend. Through speaking engagements, media appearances, and interviews, he bridges technical concepts with practical business applications."

#### **Featured Speaking Engagement: Mentor Table Conference**
**Date:** March 2026
**Location:** Nashville, TN
**Topic:** "How AI Recommends Your Business — an AEO & Schema Markup deep dive"
**Format:** Keynote Presentation

#### **Media Appearances**

**Podcasts**
Available for guest appearances on marketing, business, and technology podcasts discussing:
- Answer Engine Optimization strategies
- The AEO Blueprint and BRAIN Framework
- AI search trends and business implications
- Brand entity optimization for AI systems

**Press & Media**
Expert commentary available for:
- Marketing publications
- Technology media outlets
- Business news sites
- AI and search industry publications

**Interviews**
Professional interviews covering:
- AI search trends and predictions
- Brand entity optimization strategies
- AEO implementation guidance
- Business transformation for the AI era

#### **Speaking Topics**

**Answer Engine Optimization Fundamentals**
- Understanding how AI engines select and recommend brands
- The shift from SEO to AEO
- Preparing your business for AI-first search
- *Duration: 30-45 minutes | Level: Beginner to Intermediate*

**The BRAIN Framework Implementation**
- Practical application of the BRAIN Framework
- Step-by-step business optimization
- Real-world case studies and results
- *Duration: 60-90 minutes | Level: Intermediate to Advanced*

**Schema Markup for AI Optimization**
- Technical deep dive into structured data
- AI citation optimization strategies
- Implementation best practices
- *Duration: 45-60 minutes | Level: Intermediate to Advanced*

**Brand Entity Optimization Strategies**
- Building machine-readable brand identities
- Knowledge graph positioning
- Entity consistency across platforms
- *Duration: 30-45 minutes | Level: Beginner to Intermediate*

#### **Target Audiences**
- Digital Marketing Teams
- Business Owners & Founders
- Marketing Agencies
- E-commerce Brands
- SaaS Companies
- Industry Conferences
- Corporate Events

#### **What Audiences Learn**
- How AI answer engines work
- Strategies to become AI-recommended brands
- Practical implementation of AEO principles
- Real examples of businesses succeeding in the AI era
- Actionable takeaways for immediate implementation

#### **Booking Information**
**For inquiries:**
- Email: julian.l@paretotalent.com
- Availability: Limited engagements per quarter
- Format: Keynotes, workshops, panels, and training sessions
- Custom topics available upon request

#### **Speaker Kit Available**
- High-resolution photos
- Detailed bio and introduction
- Session descriptions and learning objectives
- Technical requirements
- Audience testimonials and reviews

---

## Page 5: Contact (/contact/)

### **Agent View (Default)**
```json
{
  "page": "contact",
  "contact_methods": [
    {
      "type": "email",
      "value": "julian.l@paretotalent.com",
      "purpose": "General inquiries, speaking requests, and collaboration",
      "response_time": "Within 24-48 hours"
    }
  ],
  "inquiry_types": [
    {
      "type": "speaking_engagement",
      "description": "Book Julian for keynotes, workshops, or panel discussions",
      "response_process": "Availability check within 48 hours, detailed proposal within 1 week"
    },
    {
      "type": "consulting",
      "description": "AEO strategy consultation for businesses",
      "response_process": "Initial discovery call scheduled within 1 week"
    },
    {
      "type": "media_interview",
      "description": "Press, podcast, or media appearance requests",
      "response_process": "Confirmation within 24 hours, topic discussion within 48 hours"
    },
    {
      "type": "general_inquiry",
      "description": "Questions about AEO, The AEO Blueprint, or general business inquiries",
      "response_process": "Direct response within 24-48 hours"
    }
  ],
  "social_profiles": [
    {
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/in/julian-lopez-a51724176/",
      "purpose": "Professional networking and updates"
    },
    {
      "platform": "Facebook",
      "url": "https://www.facebook.com/julian.lopez.9026/",
      "purpose": "Personal and professional updates"
    },
    {
      "platform": "Amazon Author",
      "url": "https://www.amazon.com/AEO-Blueprint-Be-Answer-Recommends-ebook/dp/B0FX5VN49P",
      "purpose": "Book reviews and purchases"
    }
  ],
  "organization_affiliation": {
    "name": "SmartMarketer Agency",
    "url": "https://smartmarketer.com",
    "role": "Head Strategist - AEO Team",
    "team": "AEO Team",
    "referral_note": "For comprehensive AEO agency services and programs, visit SmartMarketer.com"
  }
}
```

### **Human View Content**

#### **Contact Julian Lopez**
"Whether you're looking to book a speaking engagement, discuss AEO strategy, or connect for media opportunities, Julian is available for meaningful conversations about the future of AI-powered search."

#### **Primary Contact**
**Email:** julian.l@paretotalent.com
**Response Time:** Within 24-48 hours
**Best For:** All inquiries and collaboration opportunities

#### **Inquiry Types**

**Speaking Engagements**
Book Julian for keynotes, workshops, or panel discussions on Answer Engine Optimization and AI search.
- **Response:** Availability check within 48 hours, detailed proposal within 1 week
- **Formats:** Keynotes, workshops, panels, training sessions
- **Topics:** AEO fundamentals, BRAIN Framework, Schema Markup, Brand Entity Optimization

**AEO Consulting**
Discuss AEO strategy consultation for your business or brand.
- **Response:** Initial discovery call scheduled within 1 week
- **Focus:** Strategic AEO implementation, entity optimization, knowledge graph positioning

**Media & Press**
Press interviews, podcast appearances, or media features.
- **Response:** Confirmation within 24 hours, topic discussion within 48 hours
- **Availability:** Limited engagements per month
- **Topics:** AEO expertise, AI search trends, business transformation

**General Inquiries**
Questions about AEO, The AEO Blueprint, or general business inquiries.
- **Response:** Direct response within 24-48 hours
- **Topics:** Book information, AEO concepts, collaboration opportunities

#### **Connect Elsewhere**
**LinkedIn:** https://www.linkedin.com/in/julian-lopez-a51724176/
- Professional networking and industry updates

**Facebook:** https://www.facebook.com/julian.lopez.9026/
- Personal and professional insights

**Amazon:** The AEO Blueprint
- Book reviews and purchase information

#### **SmartMarketer Agency**
For comprehensive AEO agency services and programs, visit SmartMarketer.com directly.
**Website:** https://smartmarketer.com

#### **Response Expectations**
- All inquiries receive a response within 48 hours
- Urgent media requests prioritized for 24-hour response
- Custom speaking proposals provided within 1 week of inquiry
- Detailed consultation scheduling after initial assessment

#### **What to Include in Your Inquiry**
- Your name and organization
- Type of inquiry (speaking, consulting, media, general)
- Specific topic or area of interest
- Preferred timeline and format
- Any additional context about your needs

---

## Navigation Structure (Human View)

**Main Navigation:**
- **About** → Personal background, expertise, career evolution
- **The AEO Blueprint** → Book details, BRAIN Framework, purchase information
- **Media & Speaking** → Media appearances, speaking engagements, booking information
- **Contact** → Contact methods, inquiry types, social profiles

**Agent Navigation (Top Bar):**
- **Left:** julian_lopez.entity.json
- **Right:** [Humans Click Here] button (neon green)

---

## Content Strategy Notes

### **SEO Keywords & Phrases**
- Answer Engine Optimization
- AEO expert
- Brand Entity Optimization
- Schema Markup
- AI search optimization
- The AEO Blueprint
- BRAIN Framework
- Julian Lopez AEO
- AI citation optimization
- Knowledge graph optimization

### **Content Voice & Tone**
- Authoritative yet accessible
- Technical expertise made understandable
- Forward-thinking and innovative
- Practical and actionable
- Educational and thought-leading

### **Cross-Linking Strategy**
- Homepage links to all main sections
- About page links to book and media-speaking
- Book page links to media-speaking and contact
- Media & Speaking page links to about and book
- Contact page links to all sections

### **Schema Markup Integration**
- Every page includes Person schema
- Book page includes Book schema
- Speaking page includes Event schema
- All pages include BreadcrumbList schema
- FAQ sections include FAQPage schema

---

**Status:** ✅ Sitemap and content structure complete — Ready for review and approval before implementation

**Next Steps:** Review content structure, approve sections, proceed with agent-first implementation

