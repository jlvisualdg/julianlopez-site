// =============================================================================
// AMAZON READER REVIEWS — The AEO Blueprint
// Transcribed verbatim (spelling as written) from the Amazon listing, captured
// 2026-11-20. Images are crops of that capture in /public/reviews/.
// Displayed only — NOT marked up as Review/AggregateRating schema: Google's
// review-snippet rules forbid marking up ratings aggregated from other sites.
// =============================================================================

export type BookReview = {
  slug: string;
  name: string;
  title: string;
  country: string;
  date: string;
  format: "Kindle" | "Paperback";
  verified: boolean;
  text: string[];
  truncated?: boolean; // Amazon showed a "Read more" cut-off
  w: number;
  h: number;
};

export const bookReviews: BookReview[] = [
  { slug: "susan-l-davis", name: "Susan L Davis", title: "The Future of Search Starts Here!", country: "United States", date: "October 31, 2025", format: "Kindle", verified: true, w: 688, h: 192,
    text: ["Game-changing and brilliantly practical! The AEO Blueprint doesn't just predict the future of marketing—it hands you the keys to thrive in it. Clear, actionable, and backed by real data, this guide shows exactly how to make your brand the one AI recommends. Every business owner, marketer, and content creator needs this book—before their competitors read it first."] },
  { slug: "ds-165", name: "DS_165", title: "The AEO Manual", country: "United States", date: "January 21, 2026", format: "Paperback", verified: true, w: 688, h: 254,
    text: ["Extremely well researched with detailed explanations, charts, and examples. If you want to understand the nitty gritty of AEO, this is the book, or more accurately the manual."] },
  { slug: "mackensie-l", name: "Mackensie L", title: "MUST HAVE book to understand AEO!", country: "United States", date: "October 29, 2025", format: "Kindle", verified: true, w: 688, h: 152,
    text: ["This is the most thorough explanation of what AEO is and in very easy to understand terminology and process!"] },
  { slug: "cnewton-indiana", name: "CNewton~Indiana", title: "A Real Roadmap with Actionable Steps!", country: "United States", date: "October 28, 2025", format: "Kindle", verified: false, w: 688, h: 420,
    text: [
      "As a marketer and educator, I constantly look for ways to stay ahead of the curve, and The AEO Blueprint does just that! Emerging technologies are progressing more rapidly than most of us can keep up, but this book will help turn that reality into opportunity. I love how the book is clearly written as a true blueprint - a practical step-by-step roadmap that connects the principles of traditional SEO to this new world of AEO and GEO.",
      "More than anything, I appreciate how accessible and actionable it is. The strategies are simplified, the explanations are very easy to follow, and the approach gives the reader the ability to spark real change almost immediately. It is not common to find a guide that so nicely balances the technical aspect with usability.",
      "I look forward to being able to apply these principles to my own website and to share them with my students who will soon become leaders in the next evolution of digital marketing. Thank you for your true dedication to testing, refining, and sharing your ultra valuable knowledge with the broader marketing community!",
    ] },
  { slug: "joy-obie", name: "Joy Obie", title: "The new SEO playbook for the AI age", country: "United States", date: "October 29, 2025", format: "Kindle", verified: false, w: 688, h: 332,
    text: [
      "A Must-Read for the Future of Digital Marketing",
      "The AEO Blueprint completely reframes how we think about visibility online. As someone who's watched SEO evolve for years, I found this book refreshingly honest about where the web is headed. Traditional SEO is fading, and Answer Engine Optimization (AEO) is quickly becoming the new map of the internet. Instead of competing for clicks, the goal now is to become the trusted source that AI tools like ChatGPT, Perplexity, and Google's AI Mode choose to cite.",
      "The authors break this down beautifully through their BR-A-IN Framework ~ Brand Representation, Authority, and Indexability ~ and show exactly how people and brands can adapt. It's practical, forward-thinking, and filled with strategies I'll be putting to work immediately. Highly recommend this to any marketer, creator, or business owner who wants to stay visible in the new Answer Era.",
    ] },
  { slug: "chicagopatty", name: "ChicagoPatty", title: "AEO is the new SEO but what does that mean?", country: "United States", date: "October 28, 2025", format: "Kindle", verified: true, w: 688, h: 460, truncated: true,
    text: [
      "It's all about the new technology, and this book explains it so well. Here's my personal example of what it's all about. My husband is a property manager and was looking for a new vendor that he needed immediately. Normally, he would go to google and get information for at least three vendors, he would check their reputation in google and then begin the selection process. But he now knows to use chatgpt, which he uses often for tenant correspondence. So he tried this vendor search in chaggpt, including what he would be looking for, are they local, reviews, do they do emergency service, etc. and was immediately presented with a list of six vendors including all their data and reviews that answered all he was looking for and presented contact information. He could then bring those findings to the board to get a fast and easy answer for vendor selection.",
      "For years we used keywords and long-tail and other factors to rank websites to be at the top of google. But now that so many are now using chatgpt and other AI tools, then whether or not they are at the top of google no longer matters. We need to get our clients ranked for chatgpt and other AI.",
      "If this makes sense to you, this is the book you need to read to get websites ranked for AI. Easy reading, and thorough instructions on how to. I am most grateful to have this instruction manual for helping my…",
    ] },
  { slug: "dustin-yoe", name: "Dustin Yoe", title: "Answer Engine Optimization a peek into the future.", country: "United States", date: "October 30, 2025", format: "Kindle", verified: true, w: 688, h: 211,
    text: ["WOW!! While Kasim and Perry are known for their marketing skills, this is excessive. Answer Engine Optimization (AEO) is what businesses need to be doing over the next few months. This book provides details on the why and how. If you don't want your business or name to go to the far side of the moon, then get this book and start implementing, or find someone to implement it for you. Get it now and read and execute."] },
  { slug: "scoops", name: "Scoops", title: "A must read if you are in the digital marketing space", country: "United Kingdom", date: "October 28, 2025", format: "Kindle", verified: true, w: 688, h: 159,
    text: ["If you are in the digital marketing space, or run a business then you need to read this book. How we are search and get results is changing quickly and reading this will help you stay ahead of the curve."] },
  { slug: "scarbarian", name: "Scarbarian", title: "AEO dont sleep on it or you will get left behind.", country: "Australia", date: "October 30, 2025", format: "Kindle", verified: true, w: 688, h: 200,
    text: ["Thanks Kasim, Julian and Perry .", "AEO Local don't sleep on it.", "The new citation Economy."] },
  { slug: "janetjosie", name: "JanetJosie", title: "Beyond skating to the puck", country: "Australia", date: "October 30, 2025", format: "Kindle", verified: true, w: 688, h: 199,
    text: ["be the answer…", "this blueprint sets the scene to fly to the golden snitch while most persist in skating to the puck..", "be the answer…"] },
  { slug: "jamie-henry-brown", name: "Jamie Henry Brown", title: "The AEO Blueprint review", country: "United Kingdom", date: "January 5, 2026", format: "Paperback", verified: true, w: 688, h: 379,
    text: ["I'm currently reading this beautiful marketing book.", "It's gonna be juicy.", "I'm a big fan of the authors as they are top marketers."] },
];

// Short pull quotes for the hero / summary (verbatim fragments).
export const pullQuotes = [
  { quote: "If you want to understand the nitty gritty of AEO, this is the book, or more accurately the manual.", name: "DS_165" },
  { quote: "This is the most thorough explanation of what AEO is and in very easy to understand terminology and process!", name: "Mackensie L" },
  { quote: "A practical step-by-step roadmap that connects the principles of traditional SEO to this new world of AEO and GEO.", name: "CNewton~Indiana" },
];
