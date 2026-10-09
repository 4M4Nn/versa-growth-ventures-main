import type { Founder, ImageAsset, NavLink, Phone, Stat, Venture } from "@/types"

export const SITE = {
  name: "Versa Growth Ventures",
  shortName: "Versa",
  legalName: "Versa Growth Ventures",
  tagline: "Trade, logistics and technology — built from Kochi, shipped to the world.",
  description:
    "Versa Growth Ventures is a diversified venture group in Kochi, Kerala, led by Versa International Traders — bridging international buyers and Indian suppliers — with Versa Digital & IT Solutions (custom ERP, AI agents, automation and digital marketing), Versa Logistics (sea freight to Jebel Ali and Khorfakkan), Versa International Traders (onion, cardamom, black pepper and green coffee trading, export and sourcing), Versa BPO, Versa Financial (portfolio management, trading, insurance, SIPs and mutual funds) and Versa Global (study abroad).",
  url: "https://versagrowthventures.in",
  founded: "2025",
  whatsapp: "917907215816",
  email: "info@versagrowthventures.in",
  address: {
    line1: "3rd Floor, Jogeo Building",
    line2: "Chembumukku, Kakkanad",
    city: "Kochi",
    region: "Kerala",
    postalCode: "682021",
    country: "India",
    countryCode: "IN",
    full: "3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021, India",
    mapQuery: "Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021",
  },
  keywords: [
    "Versa Growth Ventures",
    "diversified venture group Kochi",
    "business group Kerala",
    "Versa Digital & IT Solutions",
    "Versa BPO",
    "Versa Financial",
    "Versa Logistics",
    "Versa International Traders",
    "freight forwarder Kochi",
    "sea freight India to UAE",
    "port to port shipping India",
    "port to port freight best price",
    "container shipping to Jebel Ali",
    "Khorfakkan shipping from India",
    "green coffee bean exporter India",
    "cardamom exporter Kerala",
    "black pepper exporter India",
    "bulk spices supplier",
    "onion exporter India",
    "onion trading India to worldwide",
    "Kochi business group",
    "SEO company Kochi",
    "AEO agency Kerala",
    "custom ERP development Kochi",
    "CRM development Kerala",
    "AI automation Kochi",
  ],
}

export const BRAND = {
  mark: { src: "/brand/versa-mark.png", alt: "Versa Growth Ventures logo mark", width: 280, height: 267 },
  logo: { src: "/brand/versa-growth-ventures-logo.png", alt: "Versa Growth Ventures logo", width: 486, height: 408 },
  og: { src: "/brand/og-versa-growth-ventures.jpg", width: 1200, height: 630 },
}

export const PHONES: Phone[] = [
  { display: "+91 97464 33133", href: "+919746433133" },
  { display: "+91 97467 33133", href: "+919746733133" },
  { display: "+91 79072 15816", href: "+917907215816" },
]

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`

export const EXTERNAL = {
  digital: { name: "Versa Digital & IT Solutions", url: "https://versadigital.in", label: "versadigital.in" },
  global: { name: "Versa Global", url: "https://www.versaglobal.in", label: "versaglobal.in" },
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Ventures",
    href: "/ventures",
    children: [
      { label: "Versa Logistics", href: "/logistics", description: "Sea freight, forwarding & transportation" },
      { label: "Versa International Traders", href: "/traders", description: "Bridging international buyers & Indian suppliers" },
      {
        label: "Versa Digital & IT Solutions",
        href: EXTERNAL.digital.url,
        description: "ERP, AI agents, automation & digital marketing",
        external: true,
      },
      { label: "Versa BPO", href: "/bpo", description: "Customer support, telecalling & back office" },
      { label: "Versa Financial", href: "/financial", description: "Portfolio, trading, insurance, SIPs & mutual funds" },
      { label: "Versa Global", href: EXTERNAL.global.url, description: "Study abroad & career pathways", external: true },
    ],
  },
  { label: "International Traders", href: "/traders" },
  { label: "Logistics", href: "/logistics" },
  { label: "News", href: "/news" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
]

export const IMAGES = {
  shipAerial: {
    src: "/images/container-ship-aerial.jpg",
    alt: "Loaded container ship leaving port, seen from above",
    caption: "Fig. — A loaded container vessel outbound from port",
  },
  kochiTerminal: {
    src: "/images/kochi-ictt-vallarpadam.jpg",
    alt: "Container vessel under ship-to-shore cranes at the International Container Transshipment Terminal, Kochi",
    caption: "Fig. — ICTT Vallarpadam, Kochi — our gateway port",
  },
  kochiSunset: {
    src: "/images/vallarpadam-terminal-sunset.jpg",
    alt: "Gantry cranes silhouetted at sunset over the Vallarpadam container terminal in Kochi",
    caption: "Fig. — Vallarpadam terminal at dusk, Kochi",
  },
  jebelAli: {
    src: "/images/jebel-ali-port-night.jpg",
    alt: "Jebel Ali port and container yards lit up at night in Dubai",
    caption: "Fig. — Jebel Ali, Dubai — the largest port in the Middle East",
  },
  khorfakkanCranes: {
    src: "/images/khorfakkan-port-cranes.jpg",
    alt: "Row of orange ship-to-shore cranes at Khorfakkan container port, Sharjah",
    caption: "Fig. — Khorfakkan Port, Sharjah, on the Gulf of Oman",
  },
  khorfakkanVessel: {
    src: "/images/khorfakkan-port-vessel.jpg",
    alt: "Container vessel berthing at Khorfakkan port beside the corniche",
    caption: "Fig. — A container vessel arriving at Khorfakkan",
  },
  truck: {
    src: "/images/container-truck-mumbai.jpg",
    alt: "Container truck carrying a shipping container through city traffic in India",
    caption: "Fig. — Road haulage of a container to port, India",
  },
  coffeeSack: {
    src: "/images/green-coffee-jute-sack.jpg",
    alt: "Green unroasted coffee beans spilling from an open jute sack",
    caption: "Fig. — Green coffee in jute, ready for export packing",
  },
  coffeeBeans: {
    src: "/images/green-coffee-beans.jpg",
    alt: "Heap of green unroasted coffee beans on a dark surface",
    caption: "Fig. — Unroasted green coffee beans",
  },
  coffeePlants: {
    src: "/images/coffee-plants-wayanad.jpg",
    alt: "Coffee plants growing under shade trees on a plantation in Wayanad, Kerala",
    caption: "Fig. — Shade-grown coffee, Wayanad, Kerala",
  },
  cardamomPods: {
    src: "/images/cardamom-green-pods.jpg",
    alt: "Whole green cardamom pods scattered on a white background",
    caption: "Fig. — Bold green cardamom pods",
  },
  cardamomBowl: {
    src: "/images/cardamom-brass-bowl.jpg",
    alt: "Green cardamom pods in a traditional brass bowl",
    caption: "Fig. — Green cardamom in a brass bowl",
  },
  pepperMacro: {
    src: "/images/black-pepper-macro.jpg",
    alt: "Close-up of whole dried black peppercorns",
    caption: "Fig. — Whole black peppercorns, close-up",
  },
  pepperWhole: {
    src: "/images/black-pepper-whole.jpg",
    alt: "A heap of whole dried black pepper berries on a light background",
    caption: "Fig. — Dried black pepper, whole",
  },
} satisfies Record<string, ImageAsset>

export const VENTURES: Venture[] = [
  {
    slug: "versa-digital-it-solutions",
    code: "VD",
    name: "Versa Digital & IT Solutions",
    sector: "IT Solutions · AI Agents · Digital Marketing",
    summary:
      "Custom ERP, AI agents and business automation, plus SEO, AEO and performance marketing — 20+ ERP and custom agent builds, 30+ AI agents, 20+ automations and 20+ active marketing clients.",
    description:
      "Versa Digital & IT Solutions helps businesses get found on Google and recommended by AI assistants, and builds the software they run on — from high-performance websites to custom ERP, CRM and agentic AI workflows.",
    href: "/ventures/versa-digital-it-solutions",
    external: true,
    liveUrl: EXTERNAL.digital.url,
    liveLabel: EXTERNAL.digital.label,
    image: IMAGES.kochiSunset,
    highlights: ["Custom ERP & CRM", "AI agents & automation", "SEO, AEO & performance marketing", "Web & app development"],
    stats: [
      { value: "20+", label: "ERP & custom agent builds" },
      { value: "30+", label: "AI agents built" },
      { value: "20+", label: "Automations delivered" },
      { value: "20+", label: "Active marketing clients" },
    ],
    accent: "ink",
  },
  {
    slug: "versa-logistics",
    code: "VL",
    name: "Versa Logistics",
    sector: "Freight · Shipping · Transportation",
    summary:
      "Sea freight, freight forwarding and road transportation from India to the UAE and beyond — with regular container movements into Jebel Ali and Khorfakkan.",
    description:
      "Versa Logistics moves full-container and part-load cargo out of Kochi and other Indian gateways, coordinates road haulage from warehouse to port, and manages the paperwork that keeps a container moving. Our recent work includes 15 × 40ft containers of coffee beans into Jebel Ali and 2 × 40ft containers into Khorfakkan.",
    href: "/logistics",
    external: false,
    image: IMAGES.shipAerial,
    stats: [{ value: "17", label: "× 40ft containers to the UAE" }],
    highlights: ["FCL & LCL sea freight", "Freight forwarding & documentation", "Road transportation to port", "India → Jebel Ali & Khorfakkan"],
    accent: "ocean",
  },
  {
    slug: "versa-traders",
    code: "VT",
    name: "Versa International Traders",
    sector: "International Trading · Export Sourcing · Onions · Coffee",
    summary:
      "Bridging the gap between international buyers and Indian suppliers — onions, coffee beans, spices, agro products, snacks and coconut products. Free quotations, deals followed to delivery, a UK distribution partner for suppliers, and logistics and CHA when needed.",
    description:
      "Versa International Traders sources fresh onions and high-quality coffee and spices from India's growing regions and supplies importers, roasters, wholesalers and processors worldwide. Every order is backed by samples before commitment, a quality report and full export certification.",
    href: "/traders",
    external: false,
    image: IMAGES.coffeeSack,
    highlights: ["Source any product from India", "Onion & coffee bean trading", "Agro products, snacks & coconut", "Logistics & CHA provided"],
    stats: [{ value: "160 MT", label: "Coffee beans recently traded to the UAE" }],
    accent: "spice",
  },
  {
    slug: "versa-bpo",
    code: "VB",
    name: "Versa BPO",
    sector: "BPO · Customer Support · Back Office",
    summary:
      "Business process outsourcing from Kochi — customer support, telecalling and lead generation, back-office and data processing — for clients including Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions.",
    description:
      "Versa BPO handles the calls, enquiries and back-office work businesses need done well every day, from customer support and lead follow-up to CRM management and data processing.",
    href: "/bpo",
    external: false,
    image: { src: "/images/kakkanad-infopark.jpg", alt: "Kakkanad IT corridor, Kochi", caption: "Fig. — Kakkanad, Kochi" },
    highlights: ["Customer support", "Telecalling & lead generation", "Back-office & data processing", "CRM & appointments"],
    accent: "green",
  },
  {
    slug: "versa-financial",
    code: "VF",
    name: "Versa Financial",
    sector: "Portfolio · Trading · Insurance · SIPs",
    summary:
      "Portfolio management, trading and money management for 50+ clients, life, health and term insurance with 500+ policies completed, and SIPs and mutual funds.",
    description:
      "Versa Financial helps families and business owners grow, protect and plan their money — portfolios, trading, insurance, SIPs and mutual funds, and loan assistance.",
    href: "/financial",
    external: false,
    image: { src: "/images/kochi-ictt-vallarpadam.jpg", alt: "Kochi", caption: "Fig. — Kochi" },
    highlights: ["Portfolio management", "Trading & money management", "Life, health & term insurance", "SIPs & mutual funds"],
    stats: [
      { value: "50+", label: "Trading clients managed" },
      { value: "500+", label: "Insurance policies completed" },
    ],
    accent: "brass",
  },
  {
    slug: "versa-global",
    code: "VG",
    name: "Versa Global",
    sector: "Study Abroad · Careers",
    summary:
      "Study-abroad and career guidance from Kochi — university admissions, education loans, visas and job-focused career programmes across leading destinations.",
    description:
      "Versa Global guides students from Kerala through university selection, applications, education finance and visas for destinations including the UK, Canada, Australia, Germany, Ireland and the USA, and runs job-focused career academy programmes.",
    href: "/ventures/versa-global",
    external: true,
    liveUrl: EXTERNAL.global.url,
    liveLabel: EXTERNAL.global.label,
    image: IMAGES.jebelAli,
    highlights: ["University admissions", "Education loans & visas", "Career academy programmes", "10+ study destinations"],
    accent: "ocean",
  },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana",
    role: "Co-Founder",
    focus: "Finance, compliance & partnerships",
    monogram: "SN",
    bio: [
      "Sandeep is a financial-services veteran with leadership roles at Reliance Nippon Life Insurance, Future Generali India Insurance and Care Health Insurance. Through AssureX Fin Solutions he led franchise operations worth over ₹100 crore.",
      "He is also the founder of Future Optima IT Solutions and LoopGen Technologies. At Versa Growth Ventures he anchors finance, regulatory compliance and the banking and trade partnerships that let the group move cargo and commodities with confidence.",
    ],
  },
  {
    name: "Aman Faisal S",
    role: "Co-Founder",
    focus: "Digital, technology & growth",
    monogram: "AF",
    bio: [
      "Aman is a digital marketing and outreach specialist with a record of building online communities and running high-performing campaigns.",
      "He leads the group's digital, technology and growth work — from Versa Digital & IT Solutions' client programmes to the way Versa Logistics and Versa International Traders reach importers and shippers online.",
    ],
  },
  {
    name: "Sreenivasa Prabhu",
    role: "Co-Founder",
    focus: "Strategy & international markets",
    monogram: "SP",
    bio: [
      "Sreenivasa is a serial entrepreneur with an M.Sc. in Chemistry, an MBA and a Master's in Innovation Management, who has built ventures across healthcare, education, training and technology.",
      "Having studied in Europe and worked across international markets, he brings the global outlook behind the group's trading relationships and its cross-border ventures.",
    ],
  },
]

export const STATS: Stat[] = [
  { value: "06", label: "Ventures", note: "IT, marketing, logistics, trading, BPO & finance" },
  { value: "30+", label: "AI agents built", note: "Plus 20+ ERP & custom builds and 20+ automations" },
  { value: "20+", label: "Marketing clients", note: "Active digital marketing clients" },
  { value: "500+", label: "Insurance policies", note: "Completed across life, health & term schemes" },
  { value: "50+", label: "Trading clients", note: "Portfolios and trading managed" },
  { value: "17", label: "× 40ft containers", note: "Coffee beans shipped to Jebel Ali & Khorfakkan" },
  { value: "160", label: "MT coffee beans", note: "Recently traded to the UAE by Versa International Traders" },
  { value: "55mm+", label: "Big onions", note: "Nashik onion trading, India to the world" },
]

export const TICKER = [
  "Custom ERP",
  "AI agents",
  "Business automation",
  "Digital marketing",
  "SEO & AEO",
  "Sea freight to the UAE",
  "Port-to-port freight, best price",
  "Cardamom & black pepper",
  "Green coffee",
  "Versa International Traders",
  "Source anything from India",
  "Logistics & CHA",
  "Onion trading — Nashik & big onions",
  "Coffee bean trading — 160 MT to the UAE",
  "Spice sourcing agent",
  "BPO & customer support",
  "Portfolio management",
  "Insurance & SIPs",
  "Study abroad",
]

export const HOME = {
  eyebrow: "Versa Growth Ventures — a diversified venture group, Kochi",
  // Each line is [plain text, emphasised text?]
  h1: [["A diversified venture group,"], ["from ", "IT and marketing"], ["to ", "onion & coffee trading,"], ["freight and finance."]] as [string, string?][],
  lede:
    "Versa Growth Ventures is a Kochi business group with six ventures under one roof in Kakkanad. We build custom ERP systems, AI agents and automation and run SEO, AEO and digital marketing through Versa Digital & IT Solutions; ship containers port to port from India to Jebel Ali and Khorfakkan at competitive prices with Versa Logistics; trade onions — Nashik and big onions — and coffee beans worldwide through Versa International Traders, which recently traded 160 MT of coffee beans to the UAE, alongside cardamom and black pepper; run customer support and back-office work at Versa BPO; manage portfolios, trading, insurance, SIPs and mutual funds at Versa Financial; and guide students abroad with Versa Global.",
  metaTitle: "Versa Growth Ventures — Onion & Coffee Trading, Freight, IT | Kochi",
  metaDescription:
    "Versa Growth Ventures, Kochi — a diversified venture group: SEO, AEO, custom ERP, CRM and AI automation with Versa Digital & IT Solutions; port-to-port sea freight at the best price to Jebel Ali and Khorfakkan with Versa Logistics; onion trading and coffee bean trading (160 MT recently traded to the UAE) with Versa International Traders; plus Versa BPO, Versa Financial and Versa Global.",
  primaryCta: { label: "Explore our ventures", href: "/ventures" },
  secondaryCta: { label: "Talk to the group", href: "/contact" },
  gridLabel: "Our ventures",
}

export const HOME_SECTIONS = {
  ventures: {
    index: "01",
    eyebrow: "The ventures",
    title: { pre: "Six ventures in Kochi, ", em: "one standard", post: ": trading, freight, IT, BPO and finance." },
    body: "Technology, marketing, freight, commodity trading, outsourcing and financial services — each run by specialists, all led by the same founders from one office in Kakkanad.",
  },
  logistics: {
    index: "02",
    eyebrow: "Versa Logistics",
    title: { pre: "Port-to-port sea freight from Kochi, ", em: "on time", post: " into the Gulf." },
    body: "Port-to-port sea freight, freight forwarding and transportation with a regular India–UAE service, quoted at the best price we can find. Seventeen 40ft containers of coffee beans delivered into Jebel Ali and Khorfakkan — and counting.",
  },
  traders: {
    index: "03",
    eyebrow: "Versa International Traders",
    title: { pre: "Versa International Traders: ", em: "bridging international buyers", post: " and Indian suppliers." },
    body: "Onions, coffee beans, spices, agro products, snacks and coconut products — tell us your requirement, get a quotation, and we see the deal through to delivery, with logistics and CHA if you need them.",
  },
  services: {
    index: "04",
    eyebrow: "Business & financial services",
    title: { pre: "BPO and financial services, ", em: "handled well", post: "." },
    body: "Versa BPO takes care of your customers' calls and your back office; Versa Financial helps you grow, protect and plan your money.",
  },
  clients: {
    index: "",
    eyebrow: "Clients across our ventures",
    title: { pre: "Clients who trust ", em: "Versa Growth Ventures", post: "." },
  },
  news: {
    index: "05",
    eyebrow: "Newsroom",
    title: { pre: "News: coffee trades, ", em: "live projects", post: " and shipments." },
    body: "What the group is building, shipping and launching right now.",
  },
  connected: {
    index: "06",
    eyebrow: "Also from Versa",
    title: { pre: "Technology, marketing and education, ", em: "under their own names", post: "." },
    body: "Versa Digital & IT Solutions and Versa Global run their own live websites. Their track record, at a glance.",
  },
  founders: {
    index: "07",
    eyebrow: "Leadership",
    title: { pre: "The founders of ", em: "Versa Growth Ventures", post: "." },
    body: "Versa Growth Ventures is led by its founders, who stay close to every venture's customers.",
  },
  insights: {
    index: "08",
    eyebrow: "Insights",
    title: { pre: "Guides on onion and coffee trading, ", em: "freight", post: " and growth." },
    body: "Practical guides on organic reach, business software, freight and the onion, coffee and spice trade.",
  },
  faq: {
    index: "09",
    eyebrow: "Questions",
    title: { pre: "Versa Growth Ventures FAQs: ", em: "straight answers", post: "." },
  },
  cta: {
    title: "Whatever you are building, one of our ventures can help.",
    body: "Software, marketing, freight, spices, outsourcing or finance — tell us what you need and we will connect you with the right team.",
  },
  labels: {
    logisticsServices: "What we move and how",
    routeFrom: "Origin",
    routeTo: "Destinations",
    tradersPromises: "Every order includes",
    viewAllNews: "All news & updates",
    viewAllPosts: "All insights",
    viewAllFaqs: "All FAQs",
    exploreLogistics: "Explore Versa Logistics",
    exploreTraders: "Explore Versa International Traders",
    requestSamples: "Request samples",
    visitSite: "Visit",
    meetLeadership: "Meet the leadership",
    exploreBpo: "Explore Versa BPO",
    exploreFinancial: "Explore Versa Financial",
  },
} satisfies Record<string, unknown>

export const DIVISION_COPY = {
  logistics: {
    name: "Versa Logistics",
    hub: "/logistics",
    accent: "ocean" as const,
    specTitle: "Service at a glance",
    cta: { label: "Request a freight quote", href: "/logistics/freight-quote" },
    ctaTitle: "Ready to book a container?",
    ctaBody: "Send us the cargo, volume, origin and destination port. We reply with an itemised quote and a dated sailing plan.",
    whatsapp: "Hello Versa Logistics, I need a freight quote for ",
  },
  traders: {
    name: "Versa International Traders",
    hub: "/traders",
    accent: "spice" as const,
    specTitle: "Product specification",
    cta: { label: "Request samples & price", href: "/contact?enquiry=samples" },
    ctaTitle: "Test a sample before you commit.",
    ctaBody: "Tell us the product, grade, quantity and destination. We send a sample from the lot and a quote with our quality report.",
    whatsapp: "Hello Versa International Traders, I would like samples and a price for ",
  },
}

export const ABOUT = {
  h1: "About Versa Growth Ventures — a multi-venture group from Kochi, Kerala",
  lede:
    "We started Versa Growth Ventures in 2025 with a simple idea: the businesses Kerala is best at — technology, talent, spices, trade and trusted service — deserve modern, accountable operators.",
  story: [
    "Versa Growth Ventures is a privately held, diversified venture group headquartered in Kakkanad, Kochi. We operate six ventures that share one leadership team, one office and one standard of accountability: Versa Digital & IT Solutions, Versa Logistics, Versa International Traders, Versa BPO, Versa Financial and Versa Global.",
    "The two trade-facing ventures were built to work together. Versa International Traders sources and exports fresh onions, green coffee beans, cardamom and black pepper; Versa Logistics moves them — and other shippers' cargo — by container from India to the UAE and onward markets. A buyer who sources through Versa International Traders can have the same group handle the freight, the documents and the delivery schedule.",
    "Versa Digital & IT Solutions has delivered 20+ ERP and custom agent builds, 30+ AI agents and 20+ automations, and serves 20+ active marketing clients. Versa BPO handles customer support and back-office work for clients including Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions. Versa Financial manages portfolios and trading for 50+ clients and has completed 500+ insurance policies, while Versa Global guides students abroad.",
  ],
  principles: [
    { title: "Samples before commitments", body: "No buyer should commit to a bulk order on a photograph. We send representative samples and a quality report first." },
    { title: "Documents that match the cargo", body: "Invoices, packing lists, certificates of origin and phytosanitary certificates are prepared to match exactly what is in the container." },
    { title: "One accountable contact", body: "Each shipment and each trade order has a named person at Versa who answers the phone until the cargo is delivered." },
    { title: "Straight answers on price and timing", body: "We quote what a shipment really costs and how long it really takes — including the parts that are outside our control." },
  ],
}

export const PAGE_COPY = {
  ventures: {
    metaTitle: "Our Ventures — Trading, Logistics, IT, BPO & Finance | Versa",
    metaDescription:
      "The six ventures of Versa Growth Ventures, Kochi: Versa Digital & IT Solutions, Versa Logistics, Versa International Traders, Versa BPO, Versa Financial and Versa Global.",
    eyebrow: "Portfolio",
    h1: "The ventures of Versa Growth Ventures: IT, marketing, logistics, spices trading, BPO, finance and education",
    lede: "Six businesses run by one leadership team from one office in Kakkanad, Kochi — a diversified venture group built for growth.",
    answer:
      "Versa Growth Ventures operates six ventures: Versa Digital & IT Solutions (custom ERP, AI agents, automation and digital marketing), Versa Logistics (sea freight and transportation), Versa International Traders (onion, spice and coffee trading, export and sourcing agent), Versa BPO (business process outsourcing), Versa Financial (portfolio management, trading, insurance, SIPs and mutual funds) and Versa Global (study abroad).",
    ctaTitle: "Which venture can help you?",
    ctaBody: "Not sure where your enquiry belongs? Call any of our numbers and we will connect you with the right team.",
    externalLead: "Visit the live website",
    externalAbout: "What does it do?",
    externalGroup: "How does it fit the group?",
    externalGroupBody:
      "It is one of six ventures of Versa Growth Ventures and operates from the group office in Kakkanad, Kochi, under the same founders — Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu.",
  },
  about: {
    metaTitle: "About Versa Growth Ventures — Kochi Business Group Since 2025",
    metaDescription:
      "Versa Growth Ventures is a diversified venture group in Kochi, Kerala, founded in 2025 — running Versa Digital & IT Solutions, Versa Logistics, Versa International Traders, Versa BPO, Versa Financial and Versa Global from Kakkanad.",
    eyebrow: "About the group",
    storyH2: "How is Versa Growth Ventures structured?",
    principlesH2: "What principles does the group work by?",
    officeH2: "Where is Versa Growth Ventures based?",
  },
  leadership: {
    metaTitle: "Leadership — Founders of Versa Growth Ventures",
    metaDescription:
      "Meet the founders of Versa Growth Ventures: Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu — the team behind Versa Digital & IT Solutions, Versa Logistics, Versa International Traders, Versa BPO, Versa Financial and Versa Global.",
    eyebrow: "Leadership",
    h1: "The founders of Versa Growth Ventures: Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu",
    lede: "Finance and compliance, digital growth and international strategy — three founders who stay close to every venture's customers.",
  },
  news: {
    metaTitle: "News — Coffee Trades, Live Projects & Shipments | Versa Growth Ventures",
    metaDescription:
      "Latest from Versa Growth Ventures, Kochi: 160 MT of coffee beans traded to the UAE, onion trading, three ERP builds, one CRM and three AI automation projects in delivery, ongoing SEO and AEO work, and container shipments of coffee beans to Jebel Ali and Khorfakkan.",
    eyebrow: "Newsroom",
    h1: "News, live projects and shipments from Versa Growth Ventures",
    lede: "Software builds in delivery, SEO and AEO work, container movements, new services and milestones from across the group.",
    logH2: "All news and updates",
  },
  blog: {
    metaTitle: "Insights — Onion, Coffee, Freight & SEO Guides | Versa Growth Ventures",
    metaDescription:
      "Guides on SEO, AEO and organic reach, ERP, CRM and AI automation, port-to-port freight and getting the best price, shipping from India to the UAE, export documents, green coffee grades, and cardamom and black pepper grading.",
    eyebrow: "Insights",
    h1: "Insights on organic reach, business systems, freight and the onion, coffee and spice trade",
    lede: "Practical, plain-English guides for business owners, exporters, importers and spice buyers — written by the people who do the work.",
    categoryTitles: {
      Digital: "SEO, AEO & business systems guides",
      Logistics: "Freight & shipping guides",
      Trade: "Onion, coffee & spice trade guides",
      Group: "From the group",
    } as Record<string, string>,
  },
  faq: {
    metaTitle: "FAQ — Onion & Coffee Trading, Freight, SEO & AEO | Versa Growth Ventures",
    metaDescription:
      "Answers about Versa Growth Ventures: SEO, AEO, ERP, CRM and AI automation with Versa Digital & IT Solutions, port-to-port freight at the best price to Jebel Ali and Khorfakkan with Versa Logistics, and onions, green coffee, cardamom and black pepper from Versa International Traders.",
    eyebrow: "Frequently asked questions",
    h1: "Frequently asked questions about Versa Growth Ventures and its ventures",
    lede: "SEO and AEO, software projects, shipping, samples, certification and how to reach us — answered directly.",
  },
  contact: {
    metaTitle: "Contact Versa Growth Ventures — Freight Quotes, Samples & Enquiries",
    metaDescription:
      "Contact Versa Growth Ventures in Kakkanad, Kochi. Call +91 97464 33133, +91 97467 33133 or +91 79072 15816, or email info@versagrowthventures.in — IT and marketing, freight, spices, BPO and financial services.",
    eyebrow: "Contact",
    h1: "Contact Versa Growth Ventures — IT, marketing, logistics, trading, BPO and financial services",
    lede: "Tell us what you need to move or source. A person — not a bot — will reply with a price, a plan and a date.",
    phonesH2: "Call, WhatsApp or email",
    officeH2: "Visit the office",
    formH2: "Send an enquiry",
  },
  siteMap: {
    metaTitle: "Site Map — All Pages",
    metaDescription: "Every page on the Versa Growth Ventures website: Versa Logistics services and routes, Versa International Traders products, news, insights, glossary and company pages.",
    eyebrow: "Site map",
    h1: "Site map: every page on Versa Growth Ventures",
    lede: "Browse all services, products, routes, news, guides and company pages in one place.",
  },
  credits: {
    metaTitle: "Image Credits",
    metaDescription: "Credits and licences for the photographs used on the Versa Growth Ventures website.",
    eyebrow: "Credits",
    h1: "Image credits",
    lede: "Photographs on this site are used under open licences from Wikimedia Commons. We thank the photographers below.",
  },
}

export const ENQUIRY_TYPES = [
  { value: "logistics", label: "Freight quote — Versa Logistics" },
  { value: "samples", label: "Samples — Versa International Traders" },
  { value: "coffee", label: "Bulk order — Green coffee beans" },
  { value: "cardamom", label: "Bulk order — Cardamom" },
  { value: "sourcing", label: "Quotation — source any product from India (Versa International Traders)" },
  { value: "supplier", label: "Supplier — export my products regularly (Versa International Traders)" },
  { value: "pepper", label: "Bulk order — Black pepper" },
  { value: "onion", label: "Bulk order — Onions (export & trading)" },
  { value: "digital", label: "IT, ERP, AI agents or marketing — Versa Digital & IT Solutions" },
  { value: "bpo", label: "Outsourcing — Versa BPO" },
  { value: "financial", label: "Portfolio, trading, insurance or SIP — Versa Financial" },
  { value: "global", label: "Versa Global" },
  { value: "general", label: "General enquiry" },
]
