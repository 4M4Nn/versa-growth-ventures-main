import type { NewsItem } from "@/types"
import { IMAGES } from "./site"
import { ONION_IMAGES } from "./traders-onion"

const KAKKANAD = {
  src: "/images/kakkanad-infopark.jpg",
  alt: "Kakkanad's Infopark IT corridor in Kochi with office buildings among green trees",
  caption: "Fig. — Kakkanad, Kochi — where the Versa Digital & IT Solutions team works",
}

const PROJECT_SHEET = "Project sheet"
const UPDATE_SHEET = "Update at a glance"

// Updates from Versa Digital & IT Solutions and the wider group
export const NEWS_GROUP: NewsItem[] = [
  {
    slug: "versa-traders-160-mt-coffee-beans-traded-to-uae",
    title: "Versa Traders trades 160 MT of coffee beans to the UAE",
    metaDescription:
      "Versa Traders, the trading venture of Versa Growth Ventures in Kochi, has recently traded 160 metric tonnes of coffee beans to the UAE — about 2,670 bags of 60 kg.",
    date: "2026-10-07",
    dateLabel: "October 2026",
    division: "traders",
    kicker: "Trade — Coffee beans to the UAE",
    manifestTitle: "Trade sheet",
    manifest: [
      { label: "Commodity", value: "Coffee beans" },
      { label: "Quantity", value: "160 MT" },
      { label: "Equivalent", value: "≈ 2,670 bags of 60 kg" },
      { label: "Origin", value: "India" },
      { label: "Destination", value: "United Arab Emirates" },
      { label: "Trader", value: "Versa Traders, Kochi" },
    ],
    tag: { primary: "160 MT", secondary: "Coffee beans → UAE" },
    image: IMAGES.coffeeSack,
    lede:
      "Versa Traders, the commodity trading venture of Kochi-based Versa Growth Ventures, has recently traded 160 metric tonnes of coffee beans from India to the UAE.",
    body: [
      {
        heading: "How big is a 160 MT coffee trade?",
        body: [
          "160 metric tonnes is 160,000 kg of coffee — about 2,670 bags of 60 kg, the standard export bag for green coffee. A trade of that size is prepared lot by lot, with each lot checked for moisture, screen size and defects against the contract specification.",
        ],
      },
      {
        heading: "Why the UAE?",
        body: [
          "The UAE is one of the region's largest coffee hubs, with a fast-growing roasting and café scene and a re-export trade through Jebel Ali. Indian coffee reaches it on short, frequent sailings and can qualify for preferential origin under India–UAE CEPA.",
        ],
      },
      {
        heading: "What does this mean for coffee buyers?",
        body: [
          "Versa Traders is quoting further coffee bean trades to the UAE and worldwide — Robusta and Arabica, sampled before contract and shipped FOB, CFR or CIF. Call +91 97464 33133, WhatsApp +91 79072 15816 or use the contact form.",
        ],
      },
    ],
    keywords: ["coffee beans to UAE", "coffee bean trading India", "Versa Traders coffee", "160 MT coffee"],
  },
  {
    slug: "versa-traders-adds-onion-export-and-trading",
    title: "Versa Traders adds onion export and trading from India to buyers worldwide",
    metaDescription:
      "Versa Traders, Kochi, now trades and exports fresh Indian onions — Nashik red, Bangalore Rose, white and small onions — to importers in the Gulf, Asia, Africa and beyond.",
    date: "2026-10-05",
    dateLabel: "October 2026",
    division: "traders",
    kicker: "New product — Onions",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Product", value: "Fresh onions" },
      { label: "Varieties", value: "Nashik red, Bangalore Rose, white, small onion" },
      { label: "Sizes", value: "25–65 mm+ (small onion 20–30 mm)" },
      { label: "Markets", value: "Gulf, South & Southeast Asia, Africa, worldwide" },
      { label: "Freight", value: "Reefer containers via Versa Logistics" },
    ],
    tag: { primary: "Onion export", secondary: "India → worldwide" },
    image: ONION_IMAGES.redOnions,
    lede:
      "Versa Traders, the commodity trading venture of Versa Growth Ventures, has added fresh onions to its range alongside green coffee, cardamom and black pepper, and now trades onions from India to buyers worldwide.",
    body: [
      {
        heading: "Which onions does Versa Traders supply?",
        body: [],
        bullets: [
          "Nashik red onion from Maharashtra",
          "Bangalore Rose onion from Karnataka",
          "White onion",
          "Small onion (shallot / sambar onion)",
        ],
      },
      {
        heading: "Where will the onions go?",
        body: [
          "To importers, wholesalers and distributors in the UAE and the wider Gulf, South and Southeast Asia, Africa and other markets — quoted FOB, CFR or CIF, with reefer container freight available through sister venture Versa Logistics.",
        ],
      },
      {
        heading: "How do buyers start?",
        body: [
          "Send the variety, size band, packing, quantity, destination port and shipment month to +91 97464 33133, WhatsApp +91 79072 15816 or the contact form. Samples and a size-grading report come before any order.",
        ],
      },
    ],
    keywords: ["onion exporter India", "Versa Traders onions", "onion trading India", "Indian onion supplier"],
  },
  {
    slug: "versa-digital-seven-live-projects-erp-crm-ai-automation",
    title: "Versa Digital & IT Solutions has seven live projects in delivery: three ERP builds, one CRM and three AI automations",
    metaDescription:
      "October 2026 update from Versa Digital & IT Solutions, Kochi: three ERP builds, one CRM and three AI automation projects are live and in delivery, alongside ongoing SEO and AEO work.",
    date: "2026-10-01",
    dateLabel: "October 2026",
    division: "digital",
    kicker: "Live work — Versa Digital",
    manifestTitle: PROJECT_SHEET,
    manifest: [
      { label: "ERP builds", value: "3 — work ongoing" },
      { label: "CRM builds", value: "1 — work ongoing" },
      { label: "AI automation", value: "3 — work ongoing" },
      { label: "SEO & AEO", value: "Ongoing programmes" },
      { label: "Delivered by", value: "Versa Digital & IT Solutions, Kochi" },
    ],
    tag: { primary: "7 live projects", secondary: "ERP · CRM · AI automation" },
    image: KAKKANAD,
    lede:
      "Versa Digital & IT Solutions, the technology and marketing venture of Versa Growth Ventures, currently has seven software projects live and in delivery: three ERP builds, one CRM and three AI automation projects.",
    body: [
      {
        heading: "What is on the workbench right now?",
        body: [
          "As of October 2026 the Kochi team is working on seven live builds at the same time. Three are custom ERP systems, one is a CRM, and three are AI automation projects. Work on all seven is ongoing.",
          "These run alongside the venture's continuing SEO and AEO programmes for its marketing clients and for the group's own websites.",
        ],
        bullets: ["3 × custom ERP builds", "1 × CRM build", "3 × AI automation projects", "SEO and AEO work, ongoing"],
      },
      {
        heading: "How does this compare with what has already been delivered?",
        body: [
          "The live projects add to a track record of 20+ ERP and custom agent builds, 30+ AI agents and 20+ business automations, with 20+ active digital marketing clients.",
        ],
      },
      {
        heading: "How can a business start a project with Versa Digital & IT Solutions?",
        body: [
          "Projects start with a short discovery call about the process you want to fix, the systems you already use and the result you want to measure. Call +91 97464 33133, +91 97467 33133 or +91 79072 15816, or visit versadigital.in.",
        ],
      },
    ],
    keywords: ["Versa Digital & IT Solutions", "ERP development Kochi", "CRM development Kerala", "AI automation Kochi", "software company Kakkanad"],
  },
  {
    slug: "three-live-erp-projects-versa-digital-it-solutions",
    title: "Three ERP projects are live at Versa Digital & IT Solutions, with work ongoing",
    metaDescription:
      "Versa Digital & IT Solutions in Kochi has three custom ERP projects live and in delivery as of October 2026, adding to 20+ ERP and custom agent builds already completed.",
    date: "2026-10-01",
    dateLabel: "October 2026",
    division: "digital",
    kicker: "ERP — work ongoing",
    manifestTitle: PROJECT_SHEET,
    manifest: [
      { label: "Project type", value: "Custom ERP" },
      { label: "Live projects", value: "3" },
      { label: "Status", value: "Work ongoing" },
      { label: "Track record", value: "20+ ERP & custom agent builds" },
      { label: "Team", value: "Versa Digital & IT Solutions, Kochi" },
    ],
    tag: { primary: "3 ERP builds", secondary: "Work ongoing" },
    plate: { title: "ERP × 3", note: "Custom ERP builds — work ongoing" },
    lede:
      "Three custom ERP projects are currently live at Versa Digital & IT Solutions. All three are in active delivery, with work ongoing through October 2026.",
    body: [
      {
        heading: "What is a custom ERP build?",
        body: [
          "An ERP (enterprise resource planning) system puts the core records of a business — sales, purchases, stock, accounts, people and reports — into one connected system instead of separate spreadsheets and apps. A custom ERP is built around how that particular business already works, rather than asking the business to change to fit the software.",
        ],
      },
      {
        heading: "What does the work involve?",
        body: ["Each ERP project at Versa Digital & IT Solutions moves through the same stages, and the three live projects are at different points along them."],
        bullets: [
          "Mapping the current process, people and reports",
          "Designing the modules, roles and approvals",
          "Building and testing with real data",
          "Moving existing records into the new system",
          "Training the team and supporting go-live",
        ],
      },
      {
        heading: "Why are client names not listed?",
        body: [
          "ERP systems hold a company's most sensitive operating data, so Versa Digital & IT Solutions names clients only with their permission. The count is shared here as a plain record of the work in hand.",
        ],
      },
    ],
    keywords: ["custom ERP development Kochi", "ERP software company Kerala", "ERP implementation Kakkanad", "Versa Digital ERP"],
  },
  {
    slug: "crm-build-in-progress-versa-digital-it-solutions",
    title: "A CRM build is live at Versa Digital & IT Solutions, with work ongoing",
    metaDescription:
      "Versa Digital & IT Solutions in Kochi has one CRM project live and in delivery as of October 2026 — a system for leads, follow-ups and customer records.",
    date: "2026-10-01",
    dateLabel: "October 2026",
    division: "digital",
    kicker: "CRM — work ongoing",
    manifestTitle: PROJECT_SHEET,
    manifest: [
      { label: "Project type", value: "CRM" },
      { label: "Live projects", value: "1" },
      { label: "Status", value: "Work ongoing" },
      { label: "Team", value: "Versa Digital & IT Solutions, Kochi" },
    ],
    tag: { primary: "1 CRM build", secondary: "Work ongoing" },
    plate: { title: "CRM × 1", note: "Customer relationship management — work ongoing" },
    lede:
      "One CRM project is currently live at Versa Digital & IT Solutions and in active delivery, alongside the venture's three ERP builds and three AI automation projects.",
    body: [
      {
        heading: "What does a CRM do for a business?",
        body: [
          "A CRM (customer relationship management) system records every lead and customer in one place: where the enquiry came from, who is responsible for it, what was said, and what happens next. It replaces scattered WhatsApp chats, notebooks and spreadsheets with one list everyone can trust.",
        ],
        bullets: ["Lead capture from website forms, calls and WhatsApp", "Follow-up reminders and ownership", "Pipeline stages and conversion reports", "Customer history in one record"],
      },
      {
        heading: "How does a CRM connect with the rest of the group's work?",
        body: [
          "A CRM is most useful when the leads flowing into it are steady and well handled. Versa Digital & IT Solutions brings enquiries in through SEO, AEO and campaigns, and Versa BPO can call, qualify and follow up those leads on the client's behalf.",
        ],
      },
    ],
    keywords: ["CRM development Kochi", "custom CRM Kerala", "lead management system", "Versa Digital CRM"],
  },
  {
    slug: "three-ai-automation-projects-versa-digital-it-solutions",
    title: "Three AI automation projects are live at Versa Digital & IT Solutions, with work ongoing",
    metaDescription:
      "Versa Digital & IT Solutions in Kochi has three AI automation projects live and in delivery as of October 2026, building on 30+ AI agents and 20+ automations delivered.",
    date: "2026-10-01",
    dateLabel: "October 2026",
    division: "digital",
    kicker: "AI automation — work ongoing",
    manifestTitle: PROJECT_SHEET,
    manifest: [
      { label: "Project type", value: "AI automation" },
      { label: "Live projects", value: "3" },
      { label: "Status", value: "Work ongoing" },
      { label: "Track record", value: "30+ AI agents, 20+ automations" },
      { label: "Team", value: "Versa Digital & IT Solutions, Kochi" },
    ],
    tag: { primary: "3 AI automations", secondary: "Work ongoing" },
    plate: { title: "AI × 3", note: "AI automation projects — work ongoing" },
    lede:
      "Three AI automation projects are currently live at Versa Digital & IT Solutions, with work ongoing on each. They add to more than 30 AI agents and 20 business automations the venture has already delivered.",
    body: [
      {
        heading: "What is AI automation?",
        body: [
          "AI automation uses software agents to carry out repeatable business tasks that used to need a person at a keyboard: reading an enquiry, finding the right information, drafting a reply, updating a record or passing the job to the right team member.",
        ],
      },
      {
        heading: "Which tasks are usually automated first?",
        body: ["The best first candidates are frequent, rule-based tasks where a delay costs the business money."],
        bullets: [
          "Answering and routing first enquiries",
          "Following up leads that have gone quiet",
          "Entering data from documents into a system",
          "Preparing daily and weekly reports",
          "Reminders for payments, renewals and appointments",
        ],
      },
      {
        heading: "How is quality kept under control?",
        body: [
          "Each automation is built with clear limits on what it may do alone and what it must hand to a person, and it is tested on real examples before it goes into daily use. People stay responsible for decisions; the automation takes the repetitive steps.",
        ],
      },
    ],
    keywords: ["AI automation Kochi", "AI agents for business Kerala", "business process automation India", "Versa Digital AI"],
  },
  {
    slug: "seo-and-aeo-work-ongoing-versa-digital-it-solutions",
    title: "SEO and AEO work is ongoing at Versa Digital & IT Solutions for 20+ active marketing clients",
    metaDescription:
      "Versa Digital & IT Solutions, Kochi, is running ongoing SEO and AEO (answer engine optimisation) work for 20+ active marketing clients and for the Versa Growth Ventures group websites.",
    date: "2026-10-01",
    dateLabel: "October 2026",
    division: "digital",
    kicker: "SEO & AEO — work ongoing",
    manifestTitle: PROJECT_SHEET,
    manifest: [
      { label: "Work type", value: "SEO & AEO" },
      { label: "Active marketing clients", value: "20+" },
      { label: "Status", value: "Ongoing programmes" },
      { label: "Goal", value: "Organic reach on search and AI answers" },
      { label: "Team", value: "Versa Digital & IT Solutions, Kochi" },
    ],
    tag: { primary: "SEO & AEO", secondary: "20+ active clients" },
    plate: { title: "SEO → AEO", note: "Organic reach on search and AI answers" },
    lede:
      "Versa Digital & IT Solutions is running ongoing SEO and AEO work for more than 20 active marketing clients, and for the Versa Growth Ventures group's own websites.",
    body: [
      {
        heading: "What is the difference between SEO and AEO?",
        body: [
          "SEO (search engine optimisation) helps a website rank in search results. AEO (answer engine optimisation) helps a business get quoted and recommended when people ask a question to an AI assistant or see an AI-generated answer at the top of a search page. Both aim at organic reach — being found without paying for each click.",
        ],
      },
      {
        heading: "What does the ongoing work include?",
        body: [],
        bullets: [
          "Pages that answer one clear customer question each",
          "Question-style headings with a direct answer underneath",
          "Structured data so search engines and AI systems read the facts correctly",
          "Fast, mobile-first pages and a clean site map",
          "Regular new guides, FAQs and news",
        ],
      },
      {
        heading: "Where can the approach be seen?",
        body: [
          "This website is an example. Every guide in Insights opens with a short direct answer, each service page carries its own FAQ, and the site publishes a machine-readable summary for AI systems at /llms.txt.",
        ],
      },
    ],
    keywords: ["SEO company Kochi", "AEO agency Kerala", "answer engine optimisation India", "organic reach", "Versa Digital SEO"],
  },
  {
    slug: "versa-logistics-online-freight-quotation-desk",
    title: "Versa Logistics opens an online freight quotation desk",
    metaDescription:
      "Shippers can now request an itemised sea freight quote from Versa Logistics online, with cargo, container and port details, for India–UAE and Gulf lanes from Kochi.",
    date: "2026-09-29",
    dateLabel: "September 2026",
    division: "logistics",
    kicker: "Service — Freight quotes",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Service", value: "Online freight quotation" },
      { label: "Lanes", value: "India → UAE and the Gulf" },
      { label: "Equipment", value: "20ft & 40ft, FCL/LCL" },
      { label: "Reply", value: "Itemised quote and sailing plan" },
    ],
    tag: { primary: "Freight quotes", secondary: "Online request form" },
    image: IMAGES.kochiSunset,
    lede:
      "Versa Logistics has opened an online freight quotation desk, so exporters and importers can send cargo, container and port details in one form and receive an itemised quote.",
    body: [
      {
        heading: "What can shippers request?",
        body: [
          "The form covers full-container (FCL) and part-load (LCL) sea freight, 20ft and 40ft equipment, origin and destination ports, cargo type and readiness date. Versa Logistics replies with an itemised quote and a dated sailing plan.",
        ],
      },
      {
        heading: "Why itemised quotes?",
        body: [
          "A single all-in number hides the parts of a freight bill that change — ocean freight, surcharges, terminal handling, documentation and haulage. An itemised quote lets a shipper compare forwarders line by line.",
        ],
      },
    ],
    keywords: ["freight quotation India", "sea freight quote Kochi", "container shipping quote UAE", "Versa Logistics"],
  },
  {
    slug: "versa-growth-ventures-new-website-versagrowthventures-in",
    title: "Versa Growth Ventures launches its new group website at versagrowthventures.in",
    metaDescription:
      "Versa Growth Ventures has launched its new group website at versagrowthventures.in, with dedicated sections for Versa Logistics, Versa Traders, Versa BPO and Versa Financial.",
    date: "2026-09-28",
    dateLabel: "September 2026",
    division: "group",
    kicker: "Group — New website",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Address", value: "versagrowthventures.in" },
      { label: "Email", value: "info@versagrowthventures.in" },
      { label: "Ventures covered", value: "6" },
      { label: "Office", value: "Kakkanad, Kochi" },
    ],
    tag: { primary: "New website", secondary: "versagrowthventures.in" },
    plate: { title: "versagrowthventures.in", note: "The group's new home online" },
    lede:
      "Versa Growth Ventures has launched its new group website at versagrowthventures.in, bringing all six ventures, the group's news and its trade and freight guides together in one place.",
    body: [
      {
        heading: "What is on the new website?",
        body: [],
        bullets: [
          "Dedicated sections for Versa Logistics and Versa Traders",
          "Pages for Versa BPO and Versa Financial",
          "Links to Versa Digital & IT Solutions and Versa Global",
          "News, shipment updates and practical guides",
          "A glossary of shipping and spice trade terms",
        ],
      },
      {
        heading: "How can customers reach the group?",
        body: [
          "The group now has one common business email, info@versagrowthventures.in, alongside its phone lines +91 97464 33133, +91 97467 33133 and +91 79072 15816.",
        ],
      },
    ],
    keywords: ["Versa Growth Ventures website", "versagrowthventures.in", "Kochi business group"],
  },
  {
    slug: "versa-growth-ventures-six-ventures-bpo-financial",
    title: "Versa Growth Ventures is now six ventures, with Versa BPO and Versa Financial alongside technology, freight, trade and education",
    metaDescription:
      "Versa Growth Ventures, Kochi, now operates six ventures: Versa Digital & IT Solutions, Versa Logistics, Versa Traders, Versa BPO, Versa Financial and Versa Global.",
    date: "2026-09-28",
    dateLabel: "September 2026",
    division: "group",
    kicker: "Group — Six ventures",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Ventures", value: "6" },
      { label: "Sectors", value: "IT, marketing, freight, trade, BPO, finance, education" },
      { label: "Founders", value: "3" },
      { label: "Office", value: "Kakkanad, Kochi" },
    ],
    tag: { primary: "6 ventures", secondary: "One office in Kakkanad" },
    plate: { title: "06", note: "Ventures under one roof in Kakkanad, Kochi" },
    lede:
      "Versa Growth Ventures now operates six ventures from its office in Kakkanad, Kochi: Versa Digital & IT Solutions, Versa Logistics, Versa Traders, Versa BPO, Versa Financial and Versa Global.",
    body: [
      {
        heading: "What does each venture do?",
        body: [],
        bullets: [
          "Versa Digital & IT Solutions — custom ERP, CRM, AI agents, automation, SEO, AEO and digital marketing",
          "Versa Logistics — sea freight, freight forwarding and transportation",
          "Versa Traders — cardamom, black pepper and green coffee trading and sourcing",
          "Versa BPO — customer support, telecalling and back-office work",
          "Versa Financial — portfolio management, trading, insurance, SIPs and mutual funds",
          "Versa Global — study abroad and career programmes",
        ],
      },
      {
        heading: "Who leads the group?",
        body: [
          "All six ventures are led by the same founders — Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu — and share one office and one standard of accountability.",
        ],
      },
    ],
    keywords: ["Versa Growth Ventures", "diversified venture group Kochi", "Versa BPO", "Versa Financial"],
  },
  {
    slug: "versa-traders-spice-sourcing-buying-agent-service",
    title: "Versa Traders offers a spice sourcing and buying-agent service for overseas buyers",
    metaDescription:
      "Versa Traders, Kochi, acts as a sourcing and buying agent for overseas buyers of cardamom, black pepper and green coffee — samples, quality checks and export documents handled in India.",
    date: "2026-09-28",
    dateLabel: "September 2026",
    division: "traders",
    kicker: "Service — Sourcing agent",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Service", value: "Sourcing & buying agent" },
      { label: "Products", value: "Cardamom, black pepper, green coffee" },
      { label: "Includes", value: "Samples, quality report, certification" },
      { label: "Origin", value: "Kerala and South India" },
    ],
    tag: { primary: "Sourcing agent", secondary: "Cardamom · pepper · coffee" },
    image: IMAGES.cardamomBowl,
    lede:
      "Versa Traders now works as a sourcing and buying agent for overseas buyers who want export-quality cardamom, black pepper and green coffee from India without setting up their own buying office.",
    body: [
      {
        heading: "What does a sourcing agent do?",
        body: [
          "A sourcing agent acts for the buyer at origin: finding suitable lots, sending representative samples, checking quality against the agreed grade, and coordinating packing, certificates and shipment.",
        ],
      },
      {
        heading: "How does it work with Versa Logistics?",
        body: [
          "Because Versa Logistics is part of the same group, a buyer can have the product sourced and the container booked in one conversation, with a single team accountable from the lot to the destination port.",
        ],
      },
    ],
    keywords: ["spice sourcing agent India", "buying agent Kerala spices", "cardamom sourcing agent", "Versa Traders"],
  },
  {
    slug: "versa-financial-500-insurance-policies-50-trading-clients",
    title: "Versa Financial passes 500 insurance policies completed and 50 trading clients",
    metaDescription:
      "Versa Financial, Kochi, has completed more than 500 insurance policies across life, health and term schemes and manages trading and portfolios for more than 50 clients.",
    date: "2026-09-28",
    dateLabel: "September 2026",
    division: "financial",
    kicker: "Milestone — Versa Financial",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Insurance policies completed", value: "500+" },
      { label: "Trading clients managed", value: "50+" },
      { label: "Schemes", value: "Life, health & term" },
      { label: "Also offers", value: "SIPs, mutual funds, loan assistance" },
    ],
    tag: { primary: "500+ policies", secondary: "50+ trading clients" },
    plate: { title: "500+", note: "Insurance policies completed across life, health and term schemes" },
    lede:
      "Versa Financial has completed more than 500 insurance policies across life, health and term schemes, and manages trading and portfolios for more than 50 clients.",
    body: [
      {
        heading: "What does Versa Financial offer?",
        body: [
          "Versa Financial helps families and business owners in Kerala with portfolio management, trading and money management, life, health and term insurance, SIPs and mutual funds, and loan assistance through banks and NBFCs.",
        ],
      },
      {
        heading: "A note on risk",
        body: [
          "Investments in securities markets and mutual funds are subject to market risks; read all related documents carefully before investing. Past performance does not guarantee future returns. Insurance is the subject matter of solicitation.",
        ],
      },
    ],
    keywords: ["Versa Financial", "insurance agent Kochi", "portfolio management Kochi", "SIP mutual funds Kerala"],
  },
  {
    slug: "versa-bpo-supports-four-client-businesses-kochi",
    title: "Versa BPO supports four client businesses from Kochi",
    metaDescription:
      "Versa BPO in Kakkanad, Kochi, handles customer support, telecalling and back-office work for Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions.",
    date: "2026-09-28",
    dateLabel: "September 2026",
    division: "bpo",
    kicker: "Clients — Versa BPO",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Client businesses", value: "4" },
      { label: "Work", value: "Support, telecalling, back office" },
      { label: "Languages", value: "English & Malayalam" },
      { label: "Location", value: "Kakkanad, Kochi" },
    ],
    tag: { primary: "4 clients", secondary: "Support · telecalling · back office" },
    image: KAKKANAD,
    lede:
      "Versa BPO, the outsourcing venture of Versa Growth Ventures, handles customer support, telecalling and back-office work for four client businesses from its base in Kakkanad, Kochi.",
    body: [
      {
        heading: "Who does Versa BPO work with?",
        body: [],
        bullets: ["Future Optima IT Solutions", "IPB Kochi", "Astrum Study Abroad", "Macob IT Solutions"],
      },
      {
        heading: "What work is handled?",
        body: [
          "The team answers inbound enquiries, follows up leads, books appointments, keeps CRM records current and processes back-office data, working on each client's own systems.",
        ],
      },
    ],
    keywords: ["Versa BPO", "BPO company Kochi", "telecalling services Kerala", "customer support outsourcing Kochi"],
  },
  {
    slug: "versa-global-career-academy-it-infrastructure-engineer-program",
    title: "Versa Global opens its Career & Skills Academy with an IT Infrastructure Engineer Program",
    metaDescription:
      "Versa Global has launched a Career & Skills Academy alongside its study-abroad service. The first programme is an IT Infrastructure Engineer Program delivered with MACOB IT Solutions, Dubai.",
    date: "2026-09-07",
    dateLabel: "September 2026",
    division: "global",
    kicker: "Launch — Versa Global",
    manifestTitle: UPDATE_SHEET,
    manifest: [
      { label: "Launch", value: "Career & Skills Academy" },
      { label: "First programme", value: "IT Infrastructure Engineer" },
      { label: "Delivered with", value: "MACOB IT Solutions, Dubai" },
      { label: "Formats", value: "Online, hybrid, Dubai classroom" },
    ],
    tag: { primary: "Career Academy", secondary: "IT Infrastructure Engineer" },
    plate: { title: "Career Academy", note: "Versa Global — job-focused programmes" },
    lede:
      "Versa Global, the education venture of Versa Growth Ventures, has opened a Career & Skills Academy alongside its study-abroad guidance. The first programme trains IT infrastructure engineers for roles in the Gulf.",
    body: [
      {
        heading: "What does the first programme cover?",
        body: [
          "The IT Infrastructure Engineer Program covers Windows Server, Microsoft Azure, Office 365 and networking, and is delivered with MACOB IT Solutions in Dubai. It is available online, in a hybrid format or in a Dubai classroom.",
        ],
      },
      {
        heading: "Where can students find details?",
        body: ["Full programme details, eligibility and fees are published on the Versa Global website at versaglobal.in."],
      },
    ],
    keywords: ["Versa Global Career Academy", "IT infrastructure engineer course", "IT jobs Dubai training", "Versa Global"],
  },
]
