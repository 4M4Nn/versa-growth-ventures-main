import type { Venture, Founder, BlogPost, FAQ, Scheme, NavLink } from "@/types"

export const SITE_NAME = "Versa Growth Ventures"
export const SITE_TAGLINE = "Five Ventures. One Vision. Infinite Growth."
export const SITE_DESCRIPTION = "Kerala's most ambitious multi-venture business group — IPB Kochi, Versa Digital, Versa Global, Versa Finance, and Versa Exports."
export const PHONE = "+91 7907215816"
export const WHATSAPP = "917907215816"
export const WA_URL = "https://wa.me/917907215816"
export const EMAIL = "hello@versagrowthventures.com"
export const ADDRESS = "Kochi, Kerala, India"
export const SOURCE = "versa-main"

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export const VENTURES: Venture[] = [
  {
    id: "ipb", num: "01", label: "EDUCATION", name: "IPB Kochi", sub: "Kerala's Premier Banking Institute",
    story: "Thousands of Kerala graduates want banking careers. IPB makes it happen with 100% placement assistance.",
    metric: "13,200+", metricLabel: "Students Placed",
    url: "https://versa-ipb-kochi-future-optima-s-projects.vercel.app",
    accent: "#C9A84C", bg: "#0A1628",
    stats: [{ value: "13,200+", label: "Students Placed" }, { value: "25+", label: "Partner Banks" }, { value: "100%", label: "Placement Support" }],
  },
  {
    id: "digital", num: "02", label: "MARKETING", name: "Versa Digital", sub: "AI-Powered Marketing Agency",
    story: "Kerala businesses deserve world-class digital marketing. We deliver it with AI — 24/7, data-driven, results-focused.",
    metric: "4x", metricLabel: "Average ROAS",
    url: "https://versa-digital-marketing-future-optima-s-projects.vercel.app",
    accent: "#00D4C8", bg: "#050816",
    stats: [{ value: "3x", label: "Organic Traffic" }, { value: "5x", label: "Engagement" }, { value: "4x", label: "ROAS" }],
  },
  {
    id: "global", num: "03", label: "EDUCATION ABROAD", name: "Versa Global", sub: "Study Abroad Consultancy",
    story: "Every Kerala student deserves a world-class education. We open those doors — from Kerala to Cambridge.",
    metric: "60+", metricLabel: "Destination Countries",
    url: "https://versa-global-education-future-optima-s-projects.vercel.app",
    accent: "#10B981", bg: "#0A1628",
    stats: [{ value: "1,000+", label: "Students Placed" }, { value: "60+", label: "Countries" }, { value: "95%", label: "Visa Success" }],
  },
  {
    id: "finance", num: "04", label: "FINANCIAL SERVICES", name: "Versa Finance", sub: "Wealth Management & Advisory",
    story: "Financial freedom should not be a privilege. We give Kerala families access to the same tools the wealthy have always used.",
    metric: "15%+", metricLabel: "Average Returns",
    url: "https://finance.versagrowthventures.com",
    accent: "#00C9A7", bg: "#0A0F1E",
    stats: [{ value: "₹50Cr+", label: "Assets Managed" }, { value: "500+", label: "Investors" }, { value: "15%+", label: "Avg Returns" }],
  },
  {
    id: "exports", num: "05", label: "EXPORTS", name: "Versa Exports", sub: "Premium Kerala Exports",
    story: "Kerala's finest products deserve global markets. We build those bridges — connecting local excellence with international demand.",
    metric: "Global", metricLabel: "Market Reach",
    url: "#",
    accent: "#E8C96A", bg: "#1A0F00",
    comingSoon: true,
    stats: [{ value: "Global", label: "Market Reach" }, { value: "Premium", label: "Quality" }, { value: "Soon", label: "Launching" }],
  },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#4A7C59",
    bio: "The architect of our systems. Sandeep ensures every venture operates at peak efficiency, building the operational backbone that powers Versa's growth across all five verticals.",
    quote: "Systems create freedom. When operations run perfectly, people can dream bigger.",
  },
  {
    name: "Sreenivasa Prabhu", role: "Founder & Finance Head", monogram: "SP", color: "#C9A84C",
    bio: "The financial strategist. Sreenivasa drives sustainable growth across all ventures, ensuring every decision is backed by sound financial principles and long-term vision.",
    quote: "Sustainable growth is not an accident. It is the result of disciplined financial strategy.",
  },
  {
    name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#00D4C8",
    bio: "The growth engine. Aman builds the brand presence that puts Versa on the map — from digital marketing strategy to content that converts and campaigns that scale.",
    quote: "A great product with no visibility is invisible. Marketing is the bridge between value and impact.",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-kerala-businesses",
    title: "How AI is Transforming Kerala Businesses in 2026",
    date: "June 2026", tag: "Technology",
    excerpt: "Artificial intelligence is no longer a luxury for large corporations. Kerala's small and medium businesses are discovering that AI tools can multiply their efficiency by 3-5x.",
    body: `Artificial intelligence has arrived at the doorstep of Kerala's business community, and the results are nothing short of transformative. From a small textile shop in Thrissur using AI to predict demand, to a Kochi startup using machine learning for customer segmentation — the revolution is here.\n\nVersa Digital has been at the forefront of this transformation, helping Kerala businesses implement AI-powered marketing systems that run 24/7. Our clients have seen average traffic increases of 3x and engagement improvements of 5x within the first 90 days.\n\nThe key insight is this: AI doesn't replace human creativity — it amplifies it. When AI handles the repetitive tasks of scheduling, A/B testing, and performance monitoring, human teams can focus on strategy and innovation.\n\nFor Kerala businesses looking to compete on a global stage, AI isn't optional anymore. It's the great equalizer — giving a Kochi startup the same marketing power as a Mumbai enterprise.`,
  },
  {
    slug: "versa-global-reasons",
    title: "5 Reasons Kerala Students Choose Versa Global",
    date: "May 2026", tag: "Education",
    excerpt: "Study abroad dreams are closer than ever for Kerala students. Here are five reasons why 1,000+ students have trusted Versa Global for their international education journey.",
    body: `The dream of studying abroad is universal among Kerala's students. But the process — university selection, applications, visas, scholarships — can feel impossibly complex. That's why over 1,000 students have chosen Versa Global to guide their journey.\n\nFirst, our counselors have first-hand knowledge of every destination country. They've studied abroad themselves, so the advice is real — not from a brochure.\n\nSecond, we have a 95% visa success rate. Our documentation process is meticulous, covering every requirement before submission.\n\nThird, we find scholarships. Our scholarship finder service has helped students save lakhs in tuition — from university merit scholarships to government-funded programs.\n\nFourth, our support doesn't end at the airport. We have partner networks in every destination country who provide arrival support, accommodation guidance, and community connections.\n\nFifth, our fees are transparent. No hidden charges, no surprise costs. What we quote is what you pay.`,
  },
  {
    slug: "future-banking-education",
    title: "The Future of Banking Education in India",
    date: "April 2026", tag: "Banking",
    excerpt: "The banking sector is changing rapidly. Traditional banking degrees are being replaced by focused, industry-aligned programs that guarantee placements.",
    body: `India's banking sector is undergoing the most significant transformation in its history. Digital banking, fintech disruption, and regulatory changes are creating an urgent need for a new generation of banking professionals.\n\nThe traditional banking education model — a 3-year degree with no guaranteed placement — is increasingly obsolete. Banks want candidates who are ready on day one, not trainees who need 6 months of on-the-job learning.\n\nIPB Kochi recognized this gap early. Our curriculum was designed by senior banking professionals who understand exactly what banks need. Our CBFS program produces candidates who know KYC compliance, digital banking platforms, customer service excellence, and sales fundamentals from day one.\n\nThe results speak for themselves: 13,200+ placements, 25+ partner banks, and an average starting package of ₹2.6 LPA. The future of banking education is focused, practical, and placement-driven — and IPB is leading that future in Kerala.`,
  },
]

export const FAQS: FAQ[] = [
  { q: "What is Versa Growth Ventures?", a: "Kerala's premier multi-venture business group with 5 specialized verticals — IPB Kochi (banking education), Versa Digital (AI marketing), Versa Global (study abroad), Versa Finance (wealth management), and Versa Exports (premium exports)." },
  { q: "How many ventures does Versa operate?", a: "5 active ventures, each solving a distinct problem for Kerala's businesses and individuals. Together they form an integrated growth ecosystem." },
  { q: "Where is Versa Growth Ventures located?", a: "Our headquarters and operations are based in Kochi, Kerala. Our ventures operate across 14+ states with global reach." },
  { q: "How can I partner with Versa?", a: "Contact us via WhatsApp at +91 7907215816 or through our contact form. We welcome strategic partnerships across all venture verticals." },
  { q: "Which venture handles digital marketing?", a: "Versa Digital — our AI-powered marketing arm handles SEO, social media, performance ads, video, podcast, content, and WhatsApp marketing." },
  { q: "Does Versa offer internships?", a: "Yes, we offer internships across all ventures for students and fresh graduates. Apply through our contact form mentioning your preferred venture." },
  { q: "How do I invest with Versa Finance?", a: "Contact our Versa Finance team for a free financial health checkup and investment consultation covering stocks, mutual funds, insurance, and wealth management." },
  { q: "Can I study abroad through Versa?", a: "Yes, Versa Global provides complete study abroad guidance from university selection to arrival support for 60+ destination countries." },
]

export const SCHEMES: Scheme[] = [
  {
    title: "Free Consultation", tag: "ALL VENTURES",
    desc: "Book a 30-minute free consultation with any of our venture teams. Explore how Versa can transform your career, business, or financial future.",
    cta: "Book Free Consultation",
  },
  {
    title: "Student Bundle", tag: "IPB + GLOBAL",
    desc: "Combine IPB's banking course with Versa Global's study abroad guidance at a special combo rate. Perfect for Kerala graduates exploring all their options.",
    cta: "Explore Bundle",
  },
  {
    title: "Business Growth Package", tag: "DIGITAL + FINANCE",
    desc: "Pair Versa Digital's AI marketing with Versa Finance's strategic advisory. The complete growth package for established Kerala businesses.",
    cta: "Get Growth Package",
  },
]

export const NUMBERS = [
  { value: "5", label: "Active Ventures", suffix: "" },
  { value: "13200", label: "Banking Students Placed", suffix: "+" },
  { value: "60", label: "Countries Covered", suffix: "+" },
  { value: "3", label: "Founders, One Vision", suffix: "" },
]
