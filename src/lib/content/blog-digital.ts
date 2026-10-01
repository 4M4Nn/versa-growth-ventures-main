import type { BlogPost } from "@/types"

const DIGITAL_LINK = { label: "Versa Digital & IT Solutions", href: "/ventures/versa-digital-it-solutions" }
const LIVE_WORK_LINK = { label: "Live projects: 3 ERP, 1 CRM, 3 AI automations", href: "/news/versa-digital-seven-live-projects-erp-crm-ai-automation" }
const CONTACT_LINK = { label: "Discuss your project", href: "/contact?enquiry=digital" }

// Guides on organic reach (SEO & AEO) and business systems (ERP, CRM, AI automation)
export const BLOG_DIGITAL_POSTS: BlogPost[] = [
  {
    slug: "what-is-aeo-answer-engine-optimization-vs-seo",
    title: "What Is AEO? Answer Engine Optimisation vs SEO, Explained Simply",
    metaDescription:
      "AEO (answer engine optimisation) helps your business get quoted by AI assistants and AI search answers. How it differs from SEO, what it needs, and where to start.",
    category: "Digital",
    date: "2026-10-01",
    readTime: "6 min read",
    keywords: ["what is AEO", "answer engine optimisation", "AEO vs SEO", "AI search optimisation", "AEO agency Kerala"],
    plate: { title: "SEO → AEO", note: "From ranking in a list to being the answer" },
    excerpt: "Search used to return ten links. Now it often returns one answer. AEO is how your business becomes part of it.",
    answer:
      "AEO, or answer engine optimisation, is the practice of making a website easy for AI assistants and AI-generated search answers to understand, quote and recommend. SEO aims to rank a page in a list of results; AEO aims to have your business named inside the answer itself. Both depend on clear content, accurate structured data and trustworthy, consistent facts.",
    sections: [
      {
        heading: "What is an answer engine?",
        body: [
          "An answer engine is any system that replies to a question with a written answer instead of a list of links. That includes AI assistants people chat with and the AI-generated summaries that now appear above ordinary search results.",
          "These systems read many pages, pick out the facts they trust and combine them into one reply. A business that is easy to read and easy to verify is more likely to be included.",
        ],
      },
      {
        heading: "How is AEO different from SEO?",
        body: ["The two overlap heavily, but the target is different."],
        bullets: [
          "SEO targets a position in a results list; AEO targets a mention inside the answer",
          "SEO is organised around keywords; AEO is organised around questions",
          "SEO rewards a page that covers a topic well; AEO also rewards a short, quotable answer near the top",
          "Both need a fast site, clean structure and content written for real customers",
        ],
      },
      {
        heading: "What does a page need to be quoted by AI?",
        body: [],
        bullets: [
          "A heading phrased as the question a customer would ask",
          "A direct answer in the first two or three sentences under it",
          "Specific facts — names, places, quantities, steps — rather than slogans",
          "Structured data such as FAQPage, Organization and Article markup",
          "The same business name, address and phone number everywhere it appears online",
        ],
      },
      {
        heading: "Where should a small business start with AEO?",
        body: [
          "List the ten questions customers ask most often before they buy. Give each one a clear answer on your website, on the page where it belongs. Add FAQ structured data, check that your business details match across your website and your Google Business Profile, and keep adding answers as new questions come in.",
        ],
      },
    ],
    faqs: [
      { question: "Does AEO replace SEO?", answer: "No. AEO builds on SEO. A site that is slow, thin or hard to crawl will struggle with both, so the foundations are shared." },
      { question: "Is AEO only for large companies?", answer: "No. Local and specialist businesses often benefit most, because AI answers favour specific, well-stated facts over broad marketing copy." },
      { question: "What is llms.txt?", answer: "llms.txt is a plain-text file at the root of a website that summarises what the site is about and links to its most useful pages, written for AI systems to read." },
    ],
    relatedLinks: [DIGITAL_LINK, { label: "SEO and AEO work ongoing", href: "/news/seo-and-aeo-work-ongoing-versa-digital-it-solutions" }, CONTACT_LINK],
  },
  {
    slug: "how-to-get-your-business-recommended-by-ai-assistants",
    title: "How to Get Your Business Recommended by AI Assistants and AI Search Answers",
    metaDescription:
      "A practical checklist for getting a business named in AI assistant replies and AI search answers: clear facts, question-led pages, structured data, reviews and consistent listings.",
    category: "Digital",
    date: "2026-10-01",
    readTime: "6 min read",
    keywords: ["get recommended by AI", "rank in AI search answers", "AI visibility for business", "AEO checklist", "organic reach AI"],
    plate: { title: "Ask → Answer", note: "How AI systems choose which business to name" },
    excerpt: "When a customer asks an AI assistant who to call, the reply names only a few businesses. Here is how to be one of them.",
    answer:
      "To be recommended by AI assistants, make your business easy to understand and easy to verify: state exactly what you do, where and for whom; answer common customer questions directly on your website; add structured data; keep your name, address and phone number identical across the web; and earn genuine reviews and mentions on sites that AI systems already trust.",
    sections: [
      {
        heading: "How do AI assistants decide which businesses to mention?",
        body: [
          "AI systems draw on what they have read across the web and, in many cases, on live search results. They favour businesses whose details are stated clearly and repeated consistently by several independent sources. Vague or conflicting information makes a business harder to recommend.",
        ],
      },
      {
        heading: "What should your website say?",
        body: ["Write as if a stranger had to describe your business accurately after reading one page."],
        bullets: [
          "What you do, in one plain sentence",
          "Where you are based and which areas you serve",
          "Who your customers are",
          "Numbers that prove experience — projects, clients, years, quantities",
          "How to contact you, on every page",
        ],
      },
      {
        heading: "Which technical steps help?",
        body: [],
        bullets: [
          "Organization or LocalBusiness structured data with address and phone",
          "FAQPage markup on question-and-answer content",
          "Article markup with dates on guides and news",
          "A site map, fast loading and pages that work without scripts",
          "A robots file that does not block AI crawlers you want to be read by",
        ],
      },
      {
        heading: "What happens outside your website?",
        body: [
          "A complete Google Business Profile, accurate directory listings, real customer reviews and mentions in local or industry publications all confirm that your business is what your website says it is. Consistency matters more than volume.",
        ],
      },
    ],
    faqs: [
      { question: "Can I pay to be recommended by an AI assistant?", answer: "Recommendations in AI answers are generally earned through clear, trustworthy information rather than bought. Paid advertising is a separate channel." },
      { question: "How long does it take?", answer: "Changes to your own website can be read within weeks, but building consistent mentions and reviews across the web is gradual work measured in months." },
    ],
    relatedLinks: [DIGITAL_LINK, { label: "What is AEO?", href: "/blog/what-is-aeo-answer-engine-optimization-vs-seo" }, CONTACT_LINK],
  },
  {
    slug: "how-to-increase-organic-reach-without-ads",
    title: "How to Increase Organic Reach Without Paying for Ads: A 10-Point Checklist",
    metaDescription:
      "Ten practical steps to grow organic reach on search and AI answers without ad spend: question-led pages, technical SEO, local listings, structured data and regular publishing.",
    category: "Digital",
    date: "2026-09-30",
    readTime: "7 min read",
    keywords: ["increase organic reach", "organic traffic without ads", "SEO checklist small business", "organic growth Kerala", "SEO AEO checklist"],
    plate: { title: "Organic reach", note: "A ten-point checklist — no ad spend" },
    excerpt: "Ads stop the day the budget stops. Organic reach keeps working. Ten things that build it.",
    answer:
      "To increase organic reach without ads, publish one clear page per customer question or service, fix site speed and mobile layout, write descriptive titles, add structured data, complete your Google Business Profile, link related pages together, earn mentions from relevant sites, collect reviews, publish regularly, and measure which pages bring enquiries.",
    sections: [
      {
        heading: "What is organic reach?",
        body: [
          "Organic reach is the number of people who find your business without you paying for the visit — through search results, AI answers, map listings, shared links and word of mouth online. It grows slowly, but it does not disappear when a campaign ends.",
        ],
      },
      {
        heading: "Which ten steps build organic reach?",
        body: [],
        bullets: [
          "Give every service and every location its own page",
          "Use the customer's question as the heading and answer it immediately",
          "Write a specific title and description for every page",
          "Make the site fast and comfortable to use on a phone",
          "Add structured data for the organisation, FAQs and articles",
          "Complete and maintain your Google Business Profile",
          "Link related pages to each other with descriptive link text",
          "Earn mentions and links from relevant, genuine websites",
          "Ask satisfied customers for reviews",
          "Publish new guides, FAQs or news on a regular schedule",
        ],
      },
      {
        heading: "How do you know it is working?",
        body: [
          "Watch three things: the searches your pages appear for, the pages people land on first, and the enquiries those pages produce. Rankings alone are not the goal — a page that brings fewer visitors but more enquiries is the better page.",
        ],
      },
      {
        heading: "When do ads still make sense?",
        body: [
          "Ads are useful for launches, seasonal offers and testing which message converts before investing in content. Organic reach and paid campaigns work best when they share the same pages and the same tracking.",
        ],
      },
    ],
    faqs: [
      { question: "How often should a business publish?", answer: "Consistency matters more than volume. A useful new page every week or two is better than a burst of posts followed by silence." },
      { question: "Do social media posts count as organic reach?", answer: "Yes — unpaid social reach is organic. This guide focuses on search and AI answers because those bring visitors who are already looking for a solution." },
    ],
    relatedLinks: [DIGITAL_LINK, { label: "What is AEO?", href: "/blog/what-is-aeo-answer-engine-optimization-vs-seo" }, CONTACT_LINK],
  },
  {
    slug: "local-seo-for-kochi-businesses-google-business-profile",
    title: "Local SEO for Kochi Businesses: How to Show Up When Customers Search Nearby",
    metaDescription:
      "How businesses in Kochi and across Kerala can appear in local search and map results: Google Business Profile, consistent details, reviews, location pages and local content.",
    category: "Digital",
    date: "2026-09-30",
    readTime: "5 min read",
    keywords: ["local SEO Kochi", "Google Business Profile Kerala", "SEO for small business Kochi", "near me search", "local search ranking"],
    plate: { title: "Kochi · near me", note: "Local search and map results" },
    excerpt: "Most local customers choose from the first few businesses they see on the map. Here is what puts a business there.",
    answer:
      "Local SEO helps a business appear when nearby customers search for its service. For a Kochi business, the essentials are a complete and verified Google Business Profile, the same name, address and phone number everywhere online, genuine customer reviews with replies, a page for each service and area served, and content that mentions the places you actually work in.",
    sections: [
      {
        heading: "Why does local search matter?",
        body: [
          "Someone searching for a service with a place name, or with words like \"near me\", is usually ready to call. Local results and map listings appear above ordinary results for these searches, so a business that is missing from them is invisible at the moment it matters most.",
        ],
      },
      {
        heading: "How do you set up a Google Business Profile properly?",
        body: [],
        bullets: [
          "Verify the profile and choose the most accurate primary category",
          "Enter the full address, phone number, website and working hours",
          "List each service you offer with a short description",
          "Add real photographs of the premises, team and work",
          "Post updates and answer questions customers leave",
        ],
      },
      {
        heading: "What should your website do for local SEO?",
        body: [
          "Show your address and phone number on every page, exactly as they appear on your profile. Create a page for each main service, and mention the areas you serve — Kakkanad, Edappally, Aluva, or the districts you cover — where it is true and useful.",
        ],
      },
      {
        heading: "How should you handle reviews?",
        body: [
          "Ask customers for a review soon after a good experience, make it easy with a direct link, and reply to every review — including critical ones — politely and specifically. Never buy reviews or write your own.",
        ],
      },
    ],
    faqs: [
      { question: "Do I need a physical office to rank locally?", answer: "A verified address helps, but service-area businesses can also list the areas they serve without showing a street address." },
      { question: "Does Malayalam content help?", answer: "If your customers search in Malayalam, clear Malayalam content can help you reach them. Write for the language your customers actually use." },
    ],
    relatedLinks: [DIGITAL_LINK, { label: "Increase organic reach without ads", href: "/blog/how-to-increase-organic-reach-without-ads" }, CONTACT_LINK],
  },
  {
    slug: "how-long-does-seo-take-to-show-results",
    title: "How Long Does SEO Take to Show Results? An Honest Timeline",
    metaDescription:
      "What to expect from SEO month by month: technical fixes, indexing, early rankings and steady growth — and the factors that make it faster or slower.",
    category: "Digital",
    date: "2026-09-29",
    readTime: "5 min read",
    keywords: ["how long does SEO take", "SEO timeline", "SEO results time", "SEO for new website", "SEO expectations"],
    plate: { title: "Month 1 → 6", note: "A realistic SEO timeline" },
    excerpt: "Anyone promising page one in a week is selling something else. Here is how the work actually unfolds.",
    answer:
      "SEO builds gradually. Technical fixes and new pages are typically picked up by search engines within a few weeks. Early movement for less competitive searches often follows over the next two to three months, and steady growth in rankings and enquiries generally takes several months of consistent work. The timeline depends on competition, the age and quality of the site, and how regularly it is improved.",
    sections: [
      {
        heading: "What happens in the first month?",
        body: [
          "The first weeks go on foundations: checking that search engines can crawl the site, fixing speed and mobile problems, correcting titles and descriptions, and planning which pages need to exist. These changes rarely move rankings on their own, but nothing else works without them.",
        ],
      },
      {
        heading: "When do rankings start to move?",
        body: [
          "As new and improved pages are indexed, they begin to appear for specific, lower-competition searches — a service plus a place name, or a detailed question. These early positions are where the first organic enquiries usually come from.",
        ],
      },
      {
        heading: "What makes SEO faster or slower?",
        body: [],
        bullets: [
          "Competition — crowded markets take longer",
          "The site's history — an established site moves sooner than a brand-new domain",
          "Content quality — specific, useful pages outperform thin ones",
          "Consistency — regular improvement beats occasional bursts",
          "Technical health — a slow or broken site holds everything back",
        ],
      },
      {
        heading: "How should progress be reported?",
        body: [
          "Ask for a simple monthly report: which searches the site appeared for, which pages gained or lost ground, what was changed, and how many enquiries came from organic visitors. The enquiries are what count.",
        ],
      },
    ],
    faqs: [
      { question: "Can anyone guarantee a number-one ranking?", answer: "No. Search engines decide rankings, and they change. A trustworthy provider commits to the work and reports results honestly rather than guaranteeing positions." },
      { question: "Is SEO a one-time job?", answer: "No. Competitors keep improving and customers keep asking new questions, so SEO is ongoing maintenance and publishing rather than a one-off project." },
    ],
    relatedLinks: [DIGITAL_LINK, { label: "Local SEO for Kochi businesses", href: "/blog/local-seo-for-kochi-businesses-google-business-profile" }, CONTACT_LINK],
  },
  {
    slug: "erp-vs-crm-which-does-your-business-need-first",
    title: "ERP vs CRM: What Is the Difference, and Which Does Your Business Need First?",
    metaDescription:
      "ERP and CRM explained in plain English: what each system does, how they differ, how they connect, and how a growing business should decide which to implement first.",
    category: "Digital",
    date: "2026-10-01",
    readTime: "6 min read",
    keywords: ["ERP vs CRM", "difference between ERP and CRM", "CRM for small business", "ERP for SME Kerala", "which software first"],
    plate: { title: "ERP / CRM", note: "Operations on one side, customers on the other" },
    excerpt: "One runs the back of the business, the other runs the front. The right first step depends on where you are losing time.",
    answer:
      "A CRM manages leads, customers and follow-ups — the sales side of a business. An ERP manages operations — orders, stock, purchases, accounts and staff. If you are losing enquiries or cannot see your sales pipeline, start with a CRM. If you are losing track of stock, orders or money, start with an ERP. Most growing businesses eventually connect the two.",
    sections: [
      {
        heading: "What does a CRM do?",
        body: ["A CRM (customer relationship management) system keeps every lead and customer in one shared record."],
        bullets: ["Captures enquiries from every channel", "Assigns an owner and a next step", "Reminds the team to follow up", "Shows the pipeline and conversion rate"],
      },
      {
        heading: "What does an ERP do?",
        body: ["An ERP (enterprise resource planning) system connects the operating records of the business."],
        bullets: ["Sales orders and invoicing", "Purchases and suppliers", "Stock and warehouses", "Accounts, payroll and reporting"],
      },
      {
        heading: "Which should come first?",
        body: [
          "Look at where the business loses time and money today. A services firm whose problem is unanswered enquiries needs a CRM. A trading or manufacturing firm whose problem is stock mismatches and late invoices needs an ERP. Starting with the bigger pain gives the faster return and builds the team's confidence in using a system.",
        ],
      },
      {
        heading: "Do the two systems connect?",
        body: [
          "Yes. When a lead in the CRM becomes an order, the ERP should pick it up without anyone retyping it. Planning that link at the start avoids two systems holding two versions of the same customer.",
        ],
      },
    ],
    faqs: [
      { question: "Can one system do both?", answer: "Many ERP systems include a CRM module, and a custom build can combine both. What matters is that sales and operations share one set of customer records." },
      { question: "Is a spreadsheet enough?", answer: "For a very small team, yes. A system becomes worthwhile when several people need the same up-to-date information and errors start costing money." },
    ],
    relatedLinks: [DIGITAL_LINK, LIVE_WORK_LINK, CONTACT_LINK],
  },
  {
    slug: "custom-erp-vs-off-the-shelf-erp-for-smes",
    title: "Custom ERP vs Off-the-Shelf ERP: Which Is Right for a Growing Business?",
    metaDescription:
      "Compare custom ERP development with ready-made ERP software for small and mid-sized businesses: fit, cost over time, flexibility, implementation and ownership.",
    category: "Digital",
    date: "2026-09-30",
    readTime: "6 min read",
    keywords: ["custom ERP vs off the shelf", "custom ERP development", "ERP for small business India", "ERP software Kerala", "ERP implementation"],
    plate: { title: "Build / Buy", note: "Custom ERP compared with ready-made ERP" },
    excerpt: "Ready-made software is quicker to start. Custom software fits the way you already work. How to choose.",
    answer:
      "Off-the-shelf ERP software suits businesses with standard processes that want to start quickly and accept the software's way of working. A custom ERP suits businesses whose processes are a competitive advantage or do not fit standard packages. Compare the total cost over several years, how much the business would have to change to fit the software, and who owns and can modify the system.",
    sections: [
      {
        heading: "What is the case for off-the-shelf ERP?",
        body: [],
        bullets: [
          "Quick to start, with features already built",
          "Predictable subscription pricing",
          "Updates and maintenance handled by the vendor",
          "Best when your processes match common practice",
        ],
      },
      {
        heading: "What is the case for a custom ERP?",
        body: [],
        bullets: [
          "Built around your actual process, approvals and reports",
          "Only the modules you need — no unused screens",
          "No per-user licence that grows with your team",
          "Can change as the business changes",
        ],
      },
      {
        heading: "How should the costs be compared?",
        body: [
          "Compare the full cost over several years, not the first invoice. Ready-made software carries licence or subscription fees, add-on modules and customisation charges. A custom build carries development and maintenance. For each option, also count the cost of staff time spent working around a poor fit.",
        ],
      },
      {
        heading: "What makes an ERP project succeed?",
        body: [
          "A clear owner inside the business, a process mapped before any screen is designed, real data used in testing, and training before go-live. Software choice matters less than these four.",
        ],
      },
    ],
    faqs: [
      { question: "How long does a custom ERP take to build?", answer: "It depends on the number of modules and how settled the process is. A focused first version covering the most important modules is usually delivered first, with further modules added in stages." },
      { question: "Can a custom ERP start small?", answer: "Yes. Starting with one or two modules — for example sales and stock — and expanding in stages is the lower-risk way to build." },
    ],
    relatedLinks: [DIGITAL_LINK, { label: "Three ERP projects live", href: "/news/three-live-erp-projects-versa-digital-it-solutions" }, CONTACT_LINK],
  },
  {
    slug: "ai-automation-for-small-business-what-to-automate-first",
    title: "AI Automation for Small Business: What Should You Automate First?",
    metaDescription:
      "A practical guide to AI automation for small and mid-sized businesses: which tasks to automate first, what AI agents can and cannot do, and how to keep quality under control.",
    category: "Digital",
    date: "2026-09-29",
    readTime: "6 min read",
    keywords: ["AI automation for small business", "what to automate first", "AI agents for business", "business process automation", "AI automation Kerala"],
    plate: { title: "AI agents", note: "Start with the task you repeat every day" },
    excerpt: "The best first automation is rarely the most impressive one. It is the dull task someone repeats thirty times a day.",
    answer:
      "Start AI automation with tasks that are frequent, rule-based and costly when delayed: answering and routing first enquiries, following up leads, entering data from documents, preparing routine reports and sending reminders. Keep a person responsible for decisions, test each automation on real examples, and measure the time saved before automating the next task.",
    sections: [
      {
        heading: "What is an AI agent?",
        body: [
          "An AI agent is software that can read a request, decide what to do within limits you set, use your systems to do it and report back. Unlike a fixed script, it can handle variation in how people write and ask.",
        ],
      },
      {
        heading: "Which tasks are good first candidates?",
        body: [],
        bullets: [
          "Replying to common enquiries outside office hours",
          "Sorting incoming messages and assigning them to the right person",
          "Chasing leads that have not replied",
          "Reading invoices or forms and entering the details into a system",
          "Compiling daily sales or operations summaries",
          "Payment, renewal and appointment reminders",
        ],
      },
      {
        heading: "What should not be automated?",
        body: [
          "Decisions that carry legal, financial or reputational risk should stay with a person: approving credit, giving specific professional advice, handling a complaint that has gone wrong. Automation can prepare the information; a person should make the call.",
        ],
      },
      {
        heading: "How do you keep quality under control?",
        body: [],
        bullets: [
          "Define exactly what the agent may do alone",
          "Set a clear hand-over to a person for anything else",
          "Test on real past examples before going live",
          "Review a sample of its work every week",
          "Record every action so mistakes can be traced",
        ],
      },
    ],
    faqs: [
      { question: "Will AI automation replace my staff?", answer: "In practice it removes repetitive steps so the same team can handle more work and spend time on tasks that need judgement and relationships." },
      { question: "Do I need an ERP or CRM first?", answer: "Automation works best when it has a reliable system to read from and write to. A simple CRM or well-kept records are enough to begin." },
    ],
    relatedLinks: [DIGITAL_LINK, { label: "Three AI automation projects live", href: "/news/three-ai-automation-projects-versa-digital-it-solutions" }, CONTACT_LINK],
  },
]
