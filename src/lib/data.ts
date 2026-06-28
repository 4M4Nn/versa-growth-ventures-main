import type { Venture, Founder, Testimonial, BlogPost, Stat, FAQItem, Scheme, Milestone, Industry } from "@/types"

export const SITE = {
  name: "Versa Growth Ventures",
  tagline: "Five Ventures. One Vision.",
  phone: "+91 7907215816",
  email: "hello@versagrowthventures.com",
  address: "Kochi, Kerala, India",
  founded: "2025",
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Schemes", href: "/schemes" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export const STATS: Stat[] = [
  { value: 5, suffix: "", label: "Active Ventures", icon: "Building2" },
  { value: 13200, suffix: "+", label: "Students Placed", icon: "GraduationCap" },
  { value: 60, suffix: "+", label: "Countries Reached", icon: "Globe" },
  { value: 500, suffix: "+", label: "Happy Clients", icon: "Users" },
]

export const VENTURES: Venture[] = [
  {
    id: "ipb",
    name: "IPB Kochi",
    tagline: "Kerala's Premier Banking Institute",
    description: "The Institute of Professional Banking Kochi has placed 13,200+ students in banking and finance careers across India. NABARD-endorsed, NIESBUD-certified programs that transform aspirants into banking professionals.",
    metric: "13,200+",
    metricLabel: "Students Placed",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80",
    url: "https://versa-ipb-kochi.vercel.app",
    color: "#003087",
    features: ["NABARD Endorsed", "NIESBUD Certified", "100% Placement Support", "JAIIB/CAIIB Coaching"],
    status: "live",
  },
  {
    id: "digital",
    name: "Versa Digital",
    tagline: "AI-Powered Marketing Agency",
    description: "Kerala's most forward-thinking digital marketing agency. We combine artificial intelligence with deep market understanding to deliver campaigns that generate real revenue for businesses across industries.",
    metric: "3x",
    metricLabel: "Average ROI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    url: "https://versa-digital-marketing.vercel.app",
    color: "#00D4FF",
    features: ["AI SEO & AEO", "Meta & Google Ads", "WhatsApp Marketing", "Content Strategy"],
    status: "live",
  },
  {
    id: "global",
    name: "Versa Global",
    tagline: "Study Abroad Consultancy",
    description: "Kerala's most trusted study abroad consultancy. We guide students to universities in 60+ countries with expert counselling, complete visa support, and a 95% visa success rate that speaks for itself.",
    metric: "95%",
    metricLabel: "Visa Success Rate",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    url: "https://versa-global-education.vercel.app",
    color: "#1B2A4A",
    features: ["60+ Countries", "Free Profile Evaluation", "Visa Preparation", "Pre-Departure Support"],
    status: "live",
  },
  {
    id: "finance",
    name: "Versa Finance",
    tagline: "SEBI-Registered Investment Advisory",
    description: "SEBI-registered investment advisors helping Kerala families build real, sustainable wealth. From SIP investments to portfolio management, insurance to loan advisory — your complete financial partner.",
    metric: "₹50Cr+",
    metricLabel: "AUM Advisory",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    url: "https://finance-mauve-seven.vercel.app",
    color: "#00C9A7",
    features: ["SEBI Registered RIA", "Stocks & Mutual Funds", "Insurance Planning", "NRI Services"],
    status: "live",
  },
  {
    id: "exports",
    name: "Versa Exports",
    tagline: "Global Trade & Export Solutions",
    description: "Connecting Kerala's finest products with global markets. From spices to handicrafts, we help Kerala businesses reach international buyers through our growing network of global trade partners.",
    metric: "10+",
    metricLabel: "Export Markets",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    url: "#",
    color: "#C9A84C",
    features: ["Export Documentation", "Global Buyer Network", "Quality Certification", "Trade Finance"],
    status: "coming-soon",
  },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana",
    role: "Co-Founder & Operations Head",
    monogram: "SN",
    color: "#4A7C59",
    bio: "Sandeep is the operational architect of Versa Growth Ventures. With a deep background in business operations and process design, he ensures that every venture under the Versa umbrella runs with precision and consistency. From onboarding to delivery, Sandeep has built systems that scale without compromising client experience.",
    expertise: ["Business Operations", "Process Design", "Team Leadership", "Client Relations", "Quality Assurance"],
  },
  {
    name: "Sreenivasa Prabhu",
    role: "Co-Founder & Finance Head",
    monogram: "SP",
    color: "#C9A84C",
    bio: "Sreenivasa is a SEBI-registered investment advisor and the financial brain behind Versa Growth Ventures. He oversees the finance venture while ensuring the entire group operates on sound financial principles. His expertise spans investment advisory, financial planning, and helping Kerala families build generational wealth.",
    expertise: ["Investment Advisory", "SEBI Compliance", "Wealth Management", "Financial Planning", "Risk Assessment"],
  },
  {
    name: "Aman Faisal S",
    role: "Co-Founder & Marketing Head",
    monogram: "AF",
    color: "#10B981",
    bio: "Aman is the growth engine of Versa Growth Ventures. As the marketing strategist across all five ventures, he has built Versa into one of Kerala's most recognised business group brands. His AI-first approach to marketing and deep understanding of digital consumer behaviour gives all Versa ventures a competitive edge.",
    expertise: ["Digital Marketing", "Brand Strategy", "AI Marketing", "Growth Hacking", "Content Strategy"],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arya Krishnan",
    role: "Banking Professional",
    location: "Kochi",
    venture: "IPB Kochi",
    quote: "IPB Kochi changed my life. I went from struggling to find direction to landing a PO role at SBI within 6 months. The faculty here doesn't just teach — they mentor.",
    rating: 5,
    image: "AK",
  },
  {
    name: "Mehul Shah",
    role: "E-commerce Business Owner",
    location: "Thrissur",
    venture: "Versa Digital",
    quote: "Versa Digital 3x'd our online revenue in 4 months. Their AI-SEO strategy put us on page 1 for 40+ keywords. Best marketing investment we've ever made.",
    rating: 5,
    image: "MS",
  },
  {
    name: "Priya Nair",
    role: "Student",
    location: "Trivandrum",
    venture: "Versa Global",
    quote: "Versa Global got me into the University of Manchester. From profile evaluation to visa, they handled everything with care. I had zero stress throughout the process.",
    rating: 5,
    image: "PN",
  },
  {
    name: "Rajesh Menon",
    role: "IT Professional",
    location: "Kochi",
    venture: "Versa Finance",
    quote: "Started my SIP portfolio with Versa Finance 18 months ago. Already at 22% returns. They don't just manage money — they educate you about it.",
    rating: 5,
    image: "RM",
  },
  {
    name: "Deepa Pillai",
    role: "Parent",
    location: "Ernakulam",
    venture: "IPB Kochi",
    quote: "My son got placed as an insurance advisor through IPB. The practical training made him job-ready from day one. Worth every rupee.",
    rating: 5,
    image: "DP",
  },
  {
    name: "Arjun Thomas",
    role: "Restaurant Owner",
    location: "Kochi",
    venture: "Versa Digital",
    quote: "Our restaurant bookings doubled in 3 months after Versa Digital took over our social media. Their WhatsApp marketing campaign was particularly brilliant.",
    rating: 5,
    image: "AT",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-transforming-kerala-businesses",
    title: "How AI is Transforming Kerala Businesses in 2026",
    category: "Digital Marketing",
    author: "Aman Faisal S",
    date: "June 20, 2026",
    readTime: "7 min read",
    excerpt: "Artificial intelligence is no longer a distant concept for Kerala businesses — it is the competitive differentiator that separates growing brands from struggling ones.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    body: `Artificial intelligence is no longer a distant concept for Kerala businesses — it is the competitive differentiator that separates growing brands from struggling ones. From AI-powered SEO that answers conversational search queries to chatbots that handle customer inquiries at 3 AM, Kerala SMEs are discovering that AI adoption is not optional if you want to compete in 2026.

The most immediate impact of AI on Kerala businesses is in search engine optimisation. Google's AI-powered search experience means traditional keyword stuffing no longer works. What works now is Answer Engine Optimisation (AEO) — structuring your content to directly answer the questions your customers are asking in natural language. Versa Digital's AI-SEO team has helped Kochi-based businesses achieve page 1 rankings for 40+ high-intent search queries using this approach.

WhatsApp automation is perhaps the most Kerala-specific application of AI. With WhatsApp penetration among Kerala consumers approaching 95%, businesses that have implemented AI-driven WhatsApp campaigns report 4-6x higher engagement than email. We have built campaigns for restaurants, real estate developers, and educational institutes that generate measurable bookings within 48 hours of launch.

The businesses that will dominate Kerala's economy in 2030 are making their AI investment decisions today. The question is not whether to adopt AI — it is how quickly you can build the capability before your competitors do. Versa Digital offers a free AI readiness audit for Kerala businesses. Book yours today.`,
  },
  {
    slug: "study-abroad-versa-global",
    title: "5 Reasons to Study Abroad with Versa Global",
    category: "Study Abroad",
    author: "Sandeep Neelamana",
    date: "June 15, 2026",
    readTime: "5 min read",
    excerpt: "Choosing your study abroad consultant may be the most important decision in your academic journey. Here is why Kerala students consistently choose Versa Global.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    body: `Choosing your study abroad consultant may be the most important decision in your academic journey — more important than the country you choose or even the university. A great consultant opens doors. A poor one wastes years. Here is why Kerala students consistently choose Versa Global over other consultancies.

First, our 95% visa success rate is not a marketing claim — it is a track record built one student at a time. We achieve this by doing something many consultancies skip: a thorough pre-assessment of your profile before recommending any destination. We identify potential visa rejection risks early and build your documentation strategy to neutralise them before submission.

Second, we counsel — we do not sell. Our counsellors are not incentivised by commissions to push particular universities or countries. Your profile, goals, and budget drive every recommendation. This honesty means some students come to us expecting to study in the UK and leave with a better plan for Germany or Canada that saves their family ₹20-30 lakhs.

Third, our support extends far beyond the visa stamp. We connect you with Versa Global alumni already living in your destination city — real students who can answer questions no brochure will. Our pre-departure orientation covers banking, accommodation, transport cards, phone plans, and social life in your destination.

Fourth, we handle complexity that other consultancies avoid. NRI students, students with academic backlogs, students from non-engineering backgrounds seeking STEM programs — we have built pathways that others call impossible. Fifth, we are genuinely Kerala-focused. Our counsellors understand the specific financial, cultural, and family considerations that shape a Kerala student's study abroad decision. We speak your language — literally and culturally.`,
  },
  {
    slug: "banking-education-india-future",
    title: "The Future of Banking Education in India",
    category: "Banking Education",
    author: "Sreenivasa Prabhu",
    date: "June 10, 2026",
    readTime: "6 min read",
    excerpt: "India's banking sector is undergoing its most significant transformation in decades. What does this mean for students pursuing banking careers?",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    body: `India's banking sector is undergoing its most significant transformation in decades. The convergence of digital payments, AI-driven credit assessment, UPI's explosive growth, and the RBI's aggressive digital banking framework means the banker of 2030 will look fundamentally different from the banker of 2020. For students choosing banking education today, understanding this transformation is critical to picking the right program.

The traditional banking exam preparation model — memorising JAIIB syllabi and hoping for a clerical vacancy — is being supplemented by a new demand. Banks are urgently hiring professionals who understand digital credit underwriting, cybersecurity compliance, wealth management, and customer experience design. HDFC Bank, ICICI, Kotak, and SFBs are building entire teams around these new competencies.

IPB Kochi's curriculum was redesigned in 2025 to address exactly this gap. Our flagship programs now include digital banking operations, fintech fundamentals, MSME lending, and SEBI products — skills that translate directly to higher starting salaries and faster promotions. Our NABARD endorsement reflects the recognition that practical, market-aligned banking education produces better professionals than pure exam-coaching.

The opportunity for Kerala students is particularly significant. Kerala has the highest literacy rate and per-capita bank account penetration in India, yet banking professionals from Kerala are under-represented in leadership positions at major banks. The right education and certifications change this trajectory. IPB Kochi's 13,200+ placed students prove that Kerala banking talent, when properly trained, rises quickly.`,
  },
  {
    slug: "digital-marketing-business-2026",
    title: "Why Every Business Needs Digital Marketing in 2026",
    category: "Digital Marketing",
    author: "Aman Faisal S",
    date: "June 5, 2026",
    readTime: "5 min read",
    excerpt: "Consumer attention has permanently migrated online. If your business is not present where your customers are looking, you are invisible.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    body: `Consumer attention has permanently migrated online. If your business is not present where your customers are looking, you are invisible. This is not a Kerala-specific phenomenon — it is global. But Kerala's unique digital landscape, driven by extremely high smartphone penetration, multi-platform social media usage, and a population that researches extensively before purchasing, makes digital marketing not just useful but essential for any business with growth ambitions.

Consider the buyer's journey for any significant purchase in Kerala today. Whether someone is choosing a banking institute for their child, looking for a study abroad consultant, selecting a financial advisor, or finding a digital agency — they begin with a Google search, check Instagram pages, read Google reviews, and often engage on WhatsApp before making a decision. Each of these touchpoints is a digital marketing opportunity.

The businesses winning in Kerala right now share a common trait: they have built a digital presence that earns trust before the customer ever makes contact. This means a website that loads fast and explains value clearly, Google My Business profiles with recent reviews, consistent Instagram content that demonstrates expertise, and WhatsApp communication that feels personal and responsive.

The ROI of digital marketing, when done correctly, is measurable in a way that traditional advertising never was. Versa Digital's clients receive monthly reports showing exact cost per lead, cost per conversion, and revenue attributed to each digital channel. This accountability is what has made us the preferred digital partner for over 100 Kerala businesses.`,
  },
  {
    slug: "smart-investing-beginners-guide",
    title: "Smart Investing: A Beginner's Guide for Kerala Families",
    category: "Finance",
    author: "Sreenivasa Prabhu",
    date: "May 28, 2026",
    readTime: "8 min read",
    excerpt: "Most Kerala families save diligently but invest poorly. Fixed deposits, gold, and real estate dominate — despite these delivering inflation-adjusted returns close to zero.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    body: `Most Kerala families save diligently but invest poorly. Fixed deposits, gold, and real estate dominate the household balance sheet — despite these delivering inflation-adjusted returns close to zero or negative over the last decade. The gap between what Keralites save and what they actually build as wealth is the problem Versa Finance was founded to solve.

The starting point for any investment journey is understanding risk tolerance. Not in the abstract sense of "are you comfortable with volatility?" but in the practical sense of "what is the minimum you need available in 3 months if an emergency arises?" That minimum stays in a liquid fund or savings account. Everything above that threshold is your investment principal, and it should be working for you across a mix of asset classes.

For a Kerala salaried professional earning ₹50,000-1,00,000 monthly, the portfolio structure we recommend begins with three allocations: 15% in a liquid emergency fund, 60% in equity mutual funds through systematic SIP investments, and 25% in ELSS for tax saving under 80C. This basic allocation, started at age 28 and maintained for 25 years, historically produces a corpus between ₹2-5 crore depending on step-up increases and market performance.

The single most valuable habit we teach our clients is the step-up SIP — increasing your monthly SIP by 10% every year alongside salary increments. A ₹5,000 SIP at 15% returns grows to ₹1 crore in 20 years. The same SIP with 10% annual step-up grows to ₹2.1 crore. The additional ₹1.1 crore costs you only the discipline to increment annually. Versa Finance's clients have automated this process so it requires zero ongoing effort.`,
  },
  {
    slug: "choosing-right-banking-course",
    title: "How to Choose the Right Banking Course in Kerala",
    category: "Banking Education",
    author: "Sandeep Neelamana",
    date: "May 20, 2026",
    readTime: "6 min read",
    excerpt: "With dozens of banking institutes in Kerala making similar claims, choosing the right one is genuinely difficult. Here is the framework that matters.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    body: `With dozens of banking institutes in Kerala making similar claims — "100% placement," "NABARD endorsed," "expert faculty" — choosing the right one is genuinely difficult without knowing what to look for. Here is the framework that actually matters when evaluating a banking education program.

First, verify the placements claim independently. Any institute worth joining should be able to give you the names and contact information of recently placed students. Call them. Ask about their experience, what the institute actually delivered, and whether they would join again. The institutes that panic at this request have something to hide. IPB Kochi actively introduces prospective students to our alumni — because we have nothing to hide.

Second, understand what "placement support" actually means. At weak institutes, it means forwarding your resume to a few hiring managers. At IPB, placement support means interview skills workshops, mock interview sessions with actual bank HR professionals, profile matching to specific vacancies, and follow-up until you are actually employed — not just until you send your first application.

Third, look at the curriculum's alignment with current hiring. Banking exams are changing. The IBPS PO syllabus now includes sections on digital banking and financial technology. State Cooperative Bank exams increasingly test MSME lending knowledge. An institute teaching the 2018 syllabus is preparing you for jobs that are being automated. Ask to see the current curriculum and compare it against actual recent exam papers.

Fourth, consider the physical environment and infrastructure. Banking careers require professional presentation — does the institute prepare you to walk into a bank as a confident professional, or does it feel like a coaching centre operating from a first-floor rented space? IPB Kochi's purpose-built campus in Kochi signals what you are training for.`,
  },
  {
    slug: "study-abroad-destinations-2026",
    title: "Top Study Abroad Destinations for Kerala Students in 2026",
    category: "Study Abroad",
    author: "Sandeep Neelamana",
    date: "May 15, 2026",
    readTime: "7 min read",
    excerpt: "The study abroad landscape in 2026 has shifted significantly. Some traditional favourites have become harder; new opportunities have opened elsewhere.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    body: `The study abroad landscape in 2026 has shifted significantly. UK's international student policy tightened. Canada's study permit processing times improved but competition intensified. Germany's English-taught programs expanded dramatically. Australia opened more post-study work pathways. For Kerala students making decisions now, here is the updated picture.

United Kingdom remains the most prestigious destination for professional programs. The 2-year Graduate Route visa is intact, and universities like Manchester, Nottingham, and Birmingham offer strong Kerala alumni networks. Budget minimum ₹45-55 lakhs for a 1-year master's, including living costs. The ROI is highest in finance, law, and engineering.

Canada continues to offer the best immigration pathway. The PGWP-to-PR route, while more competitive than three years ago, remains the clearest path to Canadian permanent residency for a Kerala student. Target programs at universities in Ontario or British Columbia in IT, nursing, or business management. Budget CAD 45,000-60,000 per year.

Germany is the most underrated destination for 2026. Zero-tuition public universities, a booming tech sector in Munich and Berlin, and a straightforward visa process make Germany ideal for engineering and computer science students who can invest 6 months in A2 German preparation. Total cost of a 2-year master's including living expenses: approximately ₹12-18 lakhs. No other destination offers this quality-to-cost ratio.

Australia's revamped international student framework offers 2-6 year post-study work visas depending on the field of study, with healthcare graduates receiving the most generous terms. New Zealand and Ireland round out the English-speaking options for students who want smaller cities and stronger community networks.`,
  },
  {
    slug: "building-wealth-mutual-funds",
    title: "Building Wealth Through Mutual Funds: The Kerala Guide",
    category: "Finance",
    author: "Sreenivasa Prabhu",
    date: "May 8, 2026",
    readTime: "9 min read",
    excerpt: "Mutual funds have delivered life-changing wealth for Indian investors over the past 20 years. Here is how to participate effectively.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    body: `Mutual funds have delivered life-changing wealth for Indian investors over the past 20 years. The Sensex has grown from 5,000 in 2004 to over 75,000 in 2024 — a 15x increase. Equity mutual funds tracking this growth have made ordinary SIP investors into crorepatis without requiring stock market expertise, daily monitoring, or even large monthly commitments.

The SIP mechanism — investing a fixed amount monthly regardless of market conditions — is particularly powerful because it removes the biggest enemy of wealth creation: emotional decision-making. When markets fall, a SIP automatically buys more units at lower prices. When markets rise, your existing units grow in value. Over time, this mathematical process (called rupee cost averaging) consistently outperforms lump sum investments by timing-nervous individual investors.

For Kerala investors beginning their mutual fund journey in 2026, we recommend starting with three categories. First, a large-cap index fund (Nifty 50 or Sensex index) for stability and low cost — expense ratios below 0.2% mean more of your money compounds for you. Second, a flexi-cap or mid-cap fund for growth — these have historically delivered 15-18% CAGR over 10-year periods. Third, an ELSS (Equity Linked Savings Scheme) for the ₹1.5 lakh 80C deduction — the 3-year lock-in is actually a feature, not a bug, because it prevents panic redemption.

The practical steps to begin: open a KYC-compliant investment account through any SEBI-registered platform, set up autopay for your monthly SIP amounts across these three funds, and then — this is the crucial part — do nothing for 10 years except increase your SIP by 10% annually. Versa Finance's advisors set this up for new investors in a single 30-minute session. The session is free.`,
  },
  {
    slug: "rise-ai-marketing-kerala",
    title: "The Rise of AI Marketing in Kerala: What Businesses Must Know",
    category: "Digital Marketing",
    author: "Aman Faisal S",
    date: "May 1, 2026",
    readTime: "6 min read",
    excerpt: "AI-powered marketing tools have gone from experimental to essential in 18 months. Kerala businesses ignoring this shift are already falling behind.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    body: `AI-powered marketing tools have gone from experimental to essential in 18 months. Kerala businesses that adopted AI marketing tools early — automated content generation, AI-optimised ad bidding, predictive audience targeting — have seen measurable gains while competitors using traditional approaches are watching their cost-per-acquisition rise and their organic reach fall. This is not hype. The data from our own client campaigns makes the gap impossible to ignore.

The most impactful AI application for Kerala SMEs is not the headline-grabbing generative AI for content — it is AI-powered advertising optimisation. Meta's Advantage+ and Google's Performance Max campaigns use AI to continuously test thousands of ad combinations and allocate budget to the highest-performing variations in real time. When managed correctly by experienced marketers who understand how to train these AI systems, they consistently outperform manually-managed campaigns by 30-60% on cost per conversion.

Answer Engine Optimisation is the second critical AI-driven shift. As Google integrates AI-generated overviews into search results, the brands that appear in AI answers — not just the 10 blue links — get the highest-quality traffic. Appearing in an AI overview requires structuring your website content to directly answer specific questions with authority and depth. We have built AEO frameworks for Kerala businesses in education, finance, real estate, and healthcare that are generating organic visibility that simply cannot be bought.

The businesses that will dominate Kerala's digital landscape in 2027 are making their AI infrastructure investments now. The window for first-mover advantage in AI marketing is narrowing. Versa Digital offers a free AI marketing audit — a 45-minute analysis of your current digital presence and a specific roadmap for AI adoption. Book yours before your competitor does.`,
  },
]

export const FAQS: FAQItem[] = [
  {
    question: "What is Versa Growth Ventures?",
    answer: "Versa Growth Ventures is a Kerala-based diversified business group founded in 2025, operating five distinct ventures: IPB Kochi (banking education), Versa Digital (AI-powered marketing), Versa Global (study abroad consultancy), Versa Finance (investment advisory), and Versa Exports (global trade). Each venture is independently managed by domain experts while sharing the group's infrastructure, values, and client network.",
    category: "General",
  },
  {
    question: "Who are the founders of Versa Growth Ventures?",
    answer: "Versa Growth Ventures was co-founded by three professionals: Sandeep Neelamana (Operations Head), Sreenivasa Prabhu (Finance Head), and Aman Faisal S (Marketing Head). Together they bring expertise in business operations, SEBI-registered investment advisory, and digital marketing strategy.",
    category: "General",
  },
  {
    question: "Where is Versa Growth Ventures based?",
    answer: "Versa Growth Ventures is headquartered in Kochi, Kerala, India. Our ventures serve clients across Kerala, pan-India, and internationally — particularly through Versa Global (study abroad) and Versa Finance (NRI services).",
    category: "General",
  },
  {
    question: "How can I contact Versa Growth Ventures?",
    answer: "You can reach us at +91 7907215816 (call or WhatsApp), hello@versagrowthventures.com, or through the contact form on our website. Our response time is under 24 hours on business days.",
    category: "General",
  },
  {
    question: "What is the IPB Kochi Student Bundle?",
    answer: "The Student Bundle pairs an IPB Kochi banking course with a Versa Global study abroad consultation at a bundled price. It is designed for students who want a banking career foundation while keeping international options open. The bundle includes IPB course fees, IELTS preparation guidance, and a free destination assessment from Versa Global.",
    category: "Schemes",
  },
  {
    question: "What does the Business Growth Package include?",
    answer: "The Business Growth Package combines Versa Digital's marketing services with Versa Finance's investment advisory. It is designed for business owners who want to grow their revenue while building personal wealth simultaneously. The package includes 3 months of digital marketing execution and a 1-year financial advisory retainer.",
    category: "Schemes",
  },
  {
    question: "How do I qualify for the Referral Rewards program?",
    answer: "Any existing Versa client can refer a friend or family member to any Versa venture. When the referred person enrolls in a paid program or service, the referring client earns a reward — ranging from ₹1,000 to ₹5,000 depending on the venture. There is no limit on referrals.",
    category: "Schemes",
  },
  {
    question: "What is IPB Kochi's placement record?",
    answer: "IPB Kochi has placed 13,200+ students in banking and finance careers since inception. Placements span public sector banks (SBI, Bank of Baroda, Union Bank), private banks (HDFC, ICICI, Axis), insurance companies, and NBFCs. Our placement team maintains active relationships with 50+ hiring organisations.",
    category: "IPB",
  },
  {
    question: "Does IPB Kochi offer online courses?",
    answer: "Yes, IPB Kochi offers both in-person and online formats for most programs. The online format uses live instruction with recorded backup sessions and includes the same placement support as in-person enrollment. Students outside Kochi or in the Gulf typically prefer the online format.",
    category: "IPB",
  },
  {
    question: "What is Versa Global's visa success rate?",
    answer: "Versa Global maintains a 95%+ visa success rate across all destinations. We achieve this through thorough pre-assessment, proactive risk identification, and meticulous document preparation. Our UK visa team specifically has a 97% first-attempt success rate for Kerala students.",
    category: "Study Abroad",
  },
  {
    question: "Which countries does Versa Global cover?",
    answer: "Versa Global provides counselling for 60+ countries, with deep expertise in UK, Canada, Australia, Germany, USA, Ireland, New Zealand, and UAE. We have counsellors specialised in each of these top destinations.",
    category: "Study Abroad",
  },
  {
    question: "Is Versa Finance SEBI registered?",
    answer: "Yes, Versa Finance is a SEBI-registered investment advisor (RIA). All investment advice is provided by SEBI-registered professionals following the fiduciary standard — meaning we are legally required to act in your financial interest, not ours.",
    category: "Finance",
  },
  {
    question: "What is the minimum investment to start with Versa Finance?",
    answer: "You can start a mutual fund SIP with ₹500/month. For stock advisory, we recommend starting with ₹50,000. Insurance and loan advisory services have no minimum. The initial financial health checkup is free for all enquiries.",
    category: "Finance",
  },
  {
    question: "Does Versa Digital work with small businesses?",
    answer: "Yes. Versa Digital works with businesses of all sizes — from local Kerala shops building their first Instagram presence to established companies scaling digital revenue. We have pricing tiers designed for different budget levels, and all engagements start with a free AI marketing audit.",
    category: "Digital Marketing",
  },
  {
    question: "What is the Versa Early Bird Discount?",
    answer: "Any student or client who enrolls in a Versa program at least 30 days before the course start date or service commencement qualifies for a 10-15% Early Bird Discount. Discounts are applicable across IPB Kochi courses and Versa Global counselling packages. Contact us to check current early bird availability.",
    category: "Schemes",
  },
]

export const SCHEMES: Scheme[] = [
  {
    id: "free-consultation",
    name: "Free Consultation",
    badge: "Always Free",
    price: "₹0",
    description: "Every journey with Versa starts with a free consultation. Before you commit a single rupee, our experts assess your profile, answer your questions, and recommend the best path forward — with zero obligation.",
    includes: [
      "30-minute expert consultation",
      "Profile assessment across relevant ventures",
      "Personalised recommendation report",
      "WhatsApp follow-up support",
      "No obligation or hidden fees",
    ],
    terms: "Available to all new enquiries. One free consultation per person per venture.",
    cta: "Book Free Consultation",
    highlight: false,
    color: "#4A7C59",
  },
  {
    id: "student-bundle",
    name: "Student Bundle",
    badge: "Most Popular",
    price: "Contact for Price",
    description: "Designed for ambitious students who want a banking career foundation while keeping study abroad options open. Pairs an IPB Kochi program with Versa Global consultation at a special bundled price.",
    includes: [
      "IPB Kochi banking program enrollment",
      "IELTS preparation guidance",
      "Versa Global destination assessment",
      "Scholarship identification report",
      "Dual career path planning session",
      "12-month email and WhatsApp support",
    ],
    terms: "Student Bundle pricing available for new enrollments. IPB and Global enrollment must be concurrent.",
    cta: "Enquire About Bundle",
    highlight: true,
    color: "#003087",
  },
  {
    id: "business-growth",
    name: "Business Growth Package",
    badge: "Best Value",
    price: "Contact for Price",
    description: "For business owners who want to grow their revenue and their personal wealth simultaneously. Combines Versa Digital's marketing power with Versa Finance's investment expertise.",
    includes: [
      "3 months Versa Digital marketing execution",
      "AI SEO + social media + performance ads",
      "Monthly ROI reporting",
      "1-year Versa Finance advisory retainer",
      "Quarterly portfolio review calls",
      "Business loan advisory included",
    ],
    terms: "Minimum 3-month commitment for digital services. Finance advisory is annual subscription.",
    cta: "Enquire About Package",
    highlight: false,
    color: "#00D4FF",
  },
  {
    id: "referral-rewards",
    name: "Referral Rewards",
    badge: "Earn While You Learn",
    price: "₹1,000–₹5,000",
    description: "Our happiest clients are our best marketers. When you refer someone to any Versa venture and they enroll, you earn a cash reward. There is no limit on referrals — the more you refer, the more you earn.",
    includes: [
      "₹1,000 reward per IPB referral",
      "₹2,000 reward per Global referral",
      "₹2,000 reward per Finance referral",
      "₹3,000 reward per Digital referral",
      "Instant bank transfer within 7 days",
      "No cap on referrals",
    ],
    terms: "Reward paid after referred client completes enrollment and payment. Existing clients only.",
    cta: "Start Referring",
    highlight: false,
    color: "#C9A84C",
  },
  {
    id: "early-bird",
    name: "Early Bird Discount",
    badge: "Plan Ahead",
    price: "10–15% Off",
    description: "Students and clients who enroll at least 30 days before their intended start date receive our Early Bird Discount. A simple reward for planning ahead — and planning ahead is the first habit of successful people.",
    includes: [
      "10% off IPB Kochi course fees",
      "15% off Versa Global counselling packages",
      "Priority counsellor assignment",
      "First choice of batch timing",
      "Extended EMI options",
      "Free profile enhancement session",
    ],
    terms: "Must enroll minimum 30 days before course/service start. Valid for new enrollments only.",
    cta: "Enquire About Early Bird",
    highlight: false,
    color: "#10B981",
  },
  {
    id: "loyalty-benefits",
    name: "Loyalty Benefits",
    badge: "For Existing Clients",
    price: "Exclusive Perks",
    description: "Clients who use two or more Versa ventures receive our Loyalty Benefits program — preferential pricing, priority service, and exclusive access to new programs before they are publicly launched.",
    includes: [
      "10% discount on all future Versa services",
      "Priority scheduling and response",
      "Exclusive access to new program launches",
      "Annual strategy review session",
      "Dedicated relationship manager",
      "Invitations to Versa events and workshops",
    ],
    terms: "Loyalty Benefits activate automatically when a client enrolls in a second Versa venture.",
    cta: "Learn More",
    highlight: false,
    color: "#8B5CF6",
  },
]

export const MILESTONES: Milestone[] = [
  {
    year: "2025 Q1",
    title: "Versa Growth Ventures Founded",
    description: "Three founders unite in Kochi with a vision to build Kerala's most ambitious multi-venture business group.",
  },
  {
    year: "2025 Q2",
    title: "Versa Digital Launched",
    description: "Kerala's first AI-powered marketing agency opens its doors, onboarding its first clients within weeks of launch.",
  },
  {
    year: "2025 Q3",
    title: "Versa Finance Established",
    description: "SEBI registration secured. Versa Finance launches with stocks, mutual funds, and insurance advisory services.",
  },
  {
    year: "2026 Q1",
    title: "IPB Kochi Launched",
    description: "Institute of Professional Banking Kochi opens with its flagship banking certification programs. First batch: 120 students.",
  },
  {
    year: "2026 Q2",
    title: "Versa Global Launched",
    description: "Study abroad consultancy goes live, guiding Kerala students to universities in 60+ countries with a 95% visa success rate.",
  },
  {
    year: "2026",
    title: "13,200+ Placements & Versa Exports",
    description: "IPB Kochi surpasses 13,200 career placements. Versa Exports enters development as the group expands globally.",
  },
]

export const INDUSTRIES: Industry[] = [
  { name: "Education", icon: "GraduationCap", description: "Banking certification, study abroad guidance, professional development" },
  { name: "Finance", icon: "TrendingUp", description: "Investment advisory, wealth management, insurance, loans" },
  { name: "Marketing", icon: "BarChart3", description: "AI SEO, performance marketing, social media, WhatsApp campaigns" },
  { name: "Exports", icon: "Globe", description: "International trade facilitation, buyer discovery, export documentation" },
  { name: "Technology", icon: "Cpu", description: "AI-powered solutions, marketing automation, digital transformation" },
  { name: "Consulting", icon: "Briefcase", description: "Business strategy, career counselling, financial planning" },
]

export const WHY_CHOOSE = [
  { icon: "Building2", title: "Diversified Portfolio", description: "Five complementary ventures mean we serve every stage of a Kerala family's ambition — education, career, wealth, and global reach." },
  { icon: "Users", title: "Expert Leadership", description: "Each venture is led by domain specialists. Banking experts run IPB. A SEBI-registered RIA runs Finance. AI marketers run Digital." },
  { icon: "Trophy", title: "Proven Results", description: "13,200+ placements, 95% visa success, ₹50Cr+ AUM, 3x average marketing ROI. Our track record precedes us." },
  { icon: "Zap", title: "AI-Powered", description: "From AI-SEO to intelligent investment tracking, all Versa ventures leverage artificial intelligence to deliver superior outcomes." },
  { icon: "MapPin", title: "Kerala Roots", description: "Born in Kochi, built for Kerala. We understand the aspirations, concerns, and cultural nuances of our community." },
  { icon: "Globe", title: "Global Reach", description: "60+ countries for Global, NRI services for Finance, international buyer networks for Exports. Local roots, global ambition." },
]
