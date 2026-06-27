import type { Venture, Founder, Testimonial, BlogPost, Stat } from "@/types"

export const SITE = {
  name: "Versa Growth Ventures",
  tagline: "India's Diversified Business Group",
  phone: "+91 7907215816",
  email: "hello@versagrowthventures.com",
  address: "Kochi, Kerala, India",
  url: "https://versagrowthventures.com",
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Ventures", href: "/#ventures" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

export const VENTURES: Venture[] = [
  {
    id: "ipb",
    name: "IPB Kochi",
    tagline: "Banking & Finance Education",
    description:
      "Kerala's premier banking institute with 13,200+ placements. CBFS, PO Programs, and specialized banking courses.",
    href: "https://ipb.versagrowthventures.com",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop",
    color: "#003087",
  },
  {
    id: "digital",
    name: "Versa Digital",
    tagline: "AI-Powered Digital Marketing",
    description:
      "Results-driven digital marketing agency. 3× traffic, 5× engagement, 4× ROAS for Kerala businesses.",
    href: "https://digital.versagrowthventures.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
    color: "#00D4FF",
  },
  {
    id: "global",
    name: "Versa Global",
    tagline: "Study Abroad Consultancy",
    description:
      "Expert guidance for studying in 60+ countries. 95% visa success rate. UK, Canada, Australia, Germany and more.",
    href: "https://global.versagrowthventures.com",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format&fit=crop",
    color: "#C9A84C",
  },
  {
    id: "finance",
    name: "Versa Finance",
    tagline: "Investment Advisory",
    description:
      "SEBI registered investment advisors. Stocks, mutual funds, insurance, loans, and wealth management.",
    href: "https://finance.versagrowthventures.com",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop",
    color: "#00C9A7",
  },
  {
    id: "exports",
    name: "Versa Exports",
    tagline: "Global Trade Solutions",
    description:
      "Premium Kerala products to international markets. Spices, seafood, handicrafts and agricultural exports.",
    href: "#",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80&auto=format&fit=crop",
    color: "#E8C96A",
    badge: "Coming Soon",
  },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana",
    role: "Founder & Operations Head",
    monogram: "SN",
    color: "#4A7C59",
    bio: "Operational architect of Versa Growth Ventures, Sandeep ensures every venture delivers world-class service.",
  },
  {
    name: "Sreenivasa Prabhu",
    role: "Founder & Finance Head",
    monogram: "SP",
    color: "#C9A84C",
    bio: "Financial strategist and SEBI-registered advisor driving Versa Finance and the group's investment strategy.",
  },
  {
    name: "Aman Faisal S",
    role: "Founder & Marketing Head",
    monogram: "AF",
    color: "#00C9A7",
    bio: "Brand and marketing visionary, Aman leads digital strategy and client acquisition across all ventures.",
  },
]

export const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Active Ventures" },
  { value: 13200, suffix: "+", label: "Students Placed" },
  { value: 60, suffix: "+", label: "Countries" },
  { value: 500, suffix: "+", label: "Clients Served" },
]

export const TRUST_BADGES = [
  {
    icon: "Shield",
    title: "SEBI Registered",
    description: "Our financial advisory services operate under full SEBI compliance for your peace of mind.",
  },
  {
    icon: "Award",
    title: "13,200+ Placements",
    description: "IPB Kochi has placed over 13,200 students in leading banks and financial institutions.",
  },
  {
    icon: "Globe",
    title: "60+ Countries",
    description: "Versa Global connects students and businesses across 60+ countries worldwide.",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Menon",
    role: "Banking Professional",
    location: "Kochi, Kerala",
    quote:
      "IPB Kochi transformed my career. The structured curriculum and placement support helped me land a position at a leading private bank within 3 months of completing the course.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    location: "Thrissur, Kerala",
    quote:
      "Versa Digital doubled our online revenue in just 6 months. Their data-driven approach and transparent reporting set them apart from every other agency we have worked with.",
    rating: 5,
  },
  {
    name: "Arjun Krishnan",
    role: "International Student",
    location: "Now in Toronto, Canada",
    quote:
      "Versa Global made my dream of studying in Canada a reality. They handled everything from university selection to visa processing. Truly a world-class consultancy.",
    rating: 5,
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "banking-career-kerala-2025",
    title: "Banking Career Opportunities in Kerala: A Complete 2025 Guide",
    date: "June 10, 2025",
    excerpt:
      "Kerala's banking sector is booming with thousands of new openings every year. Here is everything you need to know about building a successful banking career.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop",
    category: "Banking",
  },
  {
    slug: "digital-marketing-trends-2025",
    title: "Top Digital Marketing Trends Transforming Kerala Businesses in 2025",
    date: "May 28, 2025",
    excerpt:
      "AI-powered campaigns, short-form video, and hyper-local targeting are reshaping how Kerala businesses reach their customers online.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80&auto=format&fit=crop",
    category: "Digital Marketing",
  },
  {
    slug: "study-abroad-guide-2025",
    title: "How to Choose the Right Country for Your Higher Education in 2025",
    date: "May 15, 2025",
    excerpt:
      "With over 60 destination countries available, choosing where to study can feel overwhelming. Our expert advisors break down the top factors to consider.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop",
    category: "Study Abroad",
  },
]

export const HERO = {
  badge: "India&apos;s Diversified Business Group",
  headline: "Building Kerala's Future, One Venture at a Time",
  subtext:
    "From banking education to digital marketing, global education consultancy to investment advisory — Versa Growth Ventures empowers individuals and businesses to grow beyond boundaries.",
  cta_primary: "Explore Our Ventures",
  cta_secondary: "Book a Free Consultation",
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop",
}

export const ABOUT = {
  eyebrow: "About Versa Growth Ventures",
  heading: "A Group Built on Purpose, Powered by Expertise",
  paragraphs: [
    "Founded in Kochi, Kerala, Versa Growth Ventures is a diversified business group with five active ventures spanning education, digital marketing, international consultancy, financial advisory, and global trade.",
    "Our mission is simple: make world-class services accessible to every individual and business in Kerala and beyond. With three passionate founders and a growing team of specialists, we are committed to delivering measurable results.",
  ],
  checkpoints: [
    "5 active ventures across diverse sectors",
    "13,200+ successful student placements",
    "SEBI registered investment advisory",
    "95% visa success rate for study abroad",
  ],
  cta: "Learn More About Us",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
}

export const MISSION_VISION = {
  mission: {
    heading: "Our Mission",
    text: "To empower individuals and businesses across Kerala and India by providing access to world-class education, financial advisory, digital solutions, and global opportunities — all under one trusted umbrella.",
  },
  vision: {
    heading: "Our Vision",
    text: "To be India's most trusted diversified growth conglomerate by 2030, with a presence in every major city and a portfolio of ventures that collectively impact over one million lives.",
  },
}

export const OFFER = {
  heading: "Get a Free Business Consultation",
  subtext:
    "Whether you are looking to grow your business digitally, place your child in a top university, or build a secure financial future — our experts are ready to guide you.",
  cta_primary: "Book Free Consultation",
  cta_secondary: "WhatsApp Us Now",
}

export const FAQ_ITEMS = [
  {
    question: "What does Versa Growth Ventures do?",
    answer:
      "Versa Growth Ventures is a diversified business group based in Kochi, Kerala. We operate five ventures: IPB Kochi (banking education), Versa Digital (digital marketing), Versa Global (study abroad consultancy), Versa Finance (investment advisory), and Versa Exports (global trade).",
  },
  {
    question: "How do I get started with any of your ventures?",
    answer:
      "Simply reach out via our contact form, call us at +91 7907215816, or WhatsApp us. Our team will connect you with the right venture advisor based on your needs.",
  },
  {
    question: "Are your financial advisory services SEBI registered?",
    answer:
      "Yes. Versa Finance operates as a SEBI-registered investment advisor, ensuring all financial guidance is compliant, transparent, and in your best interest.",
  },
  {
    question: "What banking courses does IPB Kochi offer?",
    answer:
      "IPB Kochi offers CBFS (Certificate in Banking and Financial Services), Bank PO coaching, Clerk and IBPS preparation, and specialized banking operations courses. All programs include placement support.",
  },
  {
    question: "Which countries does Versa Global cover for study abroad?",
    answer:
      "We provide consultancy for 60+ countries including the UK, Canada, Australia, Germany, Ireland, the UAE, New Zealand, and more. Our counselors specialize in visa processing, university selection, and pre-departure guidance.",
  },
  {
    question: "Does Versa Digital work with small businesses?",
    answer:
      "Absolutely. We serve businesses of all sizes — from local Kerala SMEs to regional enterprises. Our data-driven campaigns are scaled to your budget and growth goals.",
  },
]

export const SCHEMES = [
  {
    icon: "GraduationCap",
    title: "IPB Scholarship Program",
    venture: "IPB Kochi",
    description:
      "Merit-based scholarships for top-performing students in banking courses. Covers up to 50% of course fees for eligible candidates.",
    eligibility: "Class 12 pass-outs with 60%+ aggregate",
    cta: "Apply Now",
  },
  {
    icon: "TrendingUp",
    title: "Free SIP Starter Plan",
    venture: "Versa Finance",
    description:
      "Start investing with as little as ₹500/month. Our SEBI-registered advisors set up your first SIP with zero advisory fees for 6 months.",
    eligibility: "First-time investors",
    cta: "Start Investing",
  },
  {
    icon: "Globe",
    title: "Education Loan Tie-Up",
    venture: "Versa Global",
    description:
      "Exclusive tie-ups with leading banks to help students secure education loans for international study with competitive interest rates.",
    eligibility: "Students with confirmed university offer",
    cta: "Get Loan Assistance",
  },
  {
    icon: "Rocket",
    title: "Startup Digital Package",
    venture: "Versa Digital",
    description:
      "3-month digital marketing starter pack for new businesses — includes social media setup, Google Business optimization, and 1 ad campaign.",
    eligibility: "Business registered within last 2 years",
    cta: "Claim Package",
  },
]
