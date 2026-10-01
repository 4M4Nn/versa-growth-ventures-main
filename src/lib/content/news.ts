import type { LiveWorkItem, NewsDesk, NewsDeskCopy, NewsItem } from "@/types"
import { DIVISION_COPY, EXTERNAL, IMAGES } from "./site"
import { NEWS_GROUP } from "./news-group"

const deskFromDivision = (d: (typeof DIVISION_COPY)[keyof typeof DIVISION_COPY]): NewsDeskCopy => ({
  name: d.name,
  cta: d.cta,
  ctaTitle: d.ctaTitle,
  ctaBody: d.ctaBody,
})

export const NEWS_DESKS: Record<NewsDesk, NewsDeskCopy> = {
  logistics: deskFromDivision(DIVISION_COPY.logistics),
  traders: deskFromDivision(DIVISION_COPY.traders),
  digital: {
    name: EXTERNAL.digital.name,
    cta: { label: "Discuss your project", href: "/contact?enquiry=digital" },
    ctaTitle: "Have a system to build or a market to reach?",
    ctaBody: "Tell us the process you want to fix or the customers you want to reach. We reply with a plan, a scope and a timeline.",
  },
  bpo: {
    name: "Versa BPO",
    cta: { label: "Talk to Versa BPO", href: "/bpo" },
    ctaTitle: "Hand us the calls. Keep the customers.",
    ctaBody: "Tell us the process, volumes and hours you need covered. We will propose a team and a playbook.",
  },
  financial: {
    name: "Versa Financial",
    cta: { label: "Talk to Versa Financial", href: "/financial" },
    ctaTitle: "Make your next money decision with a plan.",
    ctaBody: "Portfolio, trading account, policy or SIP — tell us which and we will set up a conversation.",
  },
  global: {
    name: EXTERNAL.global.name,
    cta: { label: `Visit ${EXTERNAL.global.label}`, href: EXTERNAL.global.url, external: true },
    ctaTitle: "Planning to study or work abroad?",
    ctaBody: "Versa Global guides students through admissions, education finance, visas and job-focused career programmes.",
  },
  group: {
    name: "Versa Growth Ventures",
    cta: { label: "Explore our ventures", href: "/ventures" },
    ctaTitle: "Which venture can help you?",
    ctaBody: "Software, marketing, freight, spices, outsourcing or finance — tell us what you need and we will connect you with the right team.",
  },
}

// Projects currently in delivery at Versa Digital & IT Solutions
export const LIVE_WORK = {
  eyebrow: "Live work — Versa Digital & IT Solutions",
  title: { pre: "On the workbench ", em: "right now", post: "." },
  body: "Seven software builds are live and in delivery in Kochi, alongside continuing SEO and AEO programmes.",
  status: "Work ongoing",
  asOf: "October 2026",
  href: "/news/versa-digital-seven-live-projects-erp-crm-ai-automation",
  linkLabel: "Read the update",
  items: [
    { count: "03", label: "ERP builds", detail: "Custom ERP systems in active delivery" },
    { count: "01", label: "CRM build", detail: "Leads, follow-ups and customer records" },
    { count: "03", label: "AI automations", detail: "AI agents taking over repeatable tasks" },
    { count: "20+", label: "Marketing clients", detail: "Ongoing SEO, AEO and campaign programmes" },
  ] satisfies LiveWorkItem[],
}

const NEWS_SHIPMENTS: NewsItem[] = [
  {
    slug: "15-forty-foot-containers-coffee-beans-jebel-ali-port",
    title: "Versa Logistics ships 15 × 40ft containers of coffee beans to Jebel Ali Port, Dubai",
    metaDescription:
      "Versa Logistics has shipped fifteen 40ft containers of coffee beans from India to Jebel Ali Port in Dubai — its largest India–UAE coffee movement to date, part of a regular container service.",
    date: "2026-09-10",
    dateLabel: "September 2026",
    division: "logistics",
    kicker: "Shipment — Jebel Ali",
    manifest: [
      { label: "Cargo", value: "Coffee beans" },
      { label: "Equipment", value: "15 × 40ft containers" },
      { label: "Origin", value: "India" },
      { label: "Destination", value: "Jebel Ali Port, Dubai, UAE" },
      { label: "Service", value: "Sea freight + forwarding" },
    ],
    image: IMAGES.jebelAli,
    lede:
      "Versa Logistics, the freight venture of Kochi-based Versa Growth Ventures, has completed a shipment of fifteen 40ft containers of coffee beans from India to Jebel Ali Port in Dubai.",
    body: [
      {
        heading: "Fifteen containers, one coordinated plan",
        body: [
          "Moving fifteen full 40ft containers of a moisture-sensitive commodity is less about the voyage than about the preparation. Each container had to be inspected, stuffed with properly conditioned cargo, sealed, trucked to the terminal before its cut-off and matched to its own set of documents.",
          "Versa Logistics coordinated carrier bookings, empty container releases, haulage and documentation across the full movement, keeping the shipper and the consignee in Dubai updated at every milestone.",
        ],
      },
      {
        heading: "Why Jebel Ali?",
        body: [
          "Jebel Ali, operated by DP World, is the largest port in the Middle East and the main gateway for goods entering Dubai and the wider region. Frequent direct sailings from India and the adjacent Jebel Ali Free Zone make it the natural destination for coffee bound for UAE roasters, traders and re-export markets.",
        ],
      },
      {
        heading: "A regular service on the India–UAE lane",
        body: [
          "The Jebel Ali shipment is part of Versa Logistics' continuing India–UAE container service. Together with its recent Khorfakkan shipment, the company has now moved 17 forty-foot containers of coffee beans into UAE ports.",
          "Exporters and importers looking to move coffee, spices or general cargo between India and the UAE can request a quote on +91 97464 33133, +91 97467 33133 or +91 79072 15816.",
        ],
      },
    ],
    keywords: ["coffee beans to Jebel Ali", "40ft container coffee shipment", "India to Dubai coffee shipping", "Versa Logistics news"],
  },
  {
    slug: "two-forty-foot-containers-coffee-beans-khorfakkan-port",
    title: "Versa Logistics delivers 2 × 40ft containers of coffee beans to Khorfakkan Port, Sharjah",
    metaDescription:
      "Versa Logistics has shipped two 40ft containers of coffee beans from India to Khorfakkan Port in Sharjah, expanding its UAE service to the east-coast deep-water port.",
    date: "2026-09-18",
    dateLabel: "September 2026",
    division: "logistics",
    kicker: "Shipment — Khorfakkan",
    manifest: [
      { label: "Cargo", value: "Coffee beans" },
      { label: "Equipment", value: "2 × 40ft containers" },
      { label: "Origin", value: "India" },
      { label: "Destination", value: "Khorfakkan Port, Sharjah, UAE" },
      { label: "Service", value: "Sea freight + forwarding" },
    ],
    image: IMAGES.khorfakkanVessel,
    lede:
      "Versa Logistics has shipped two 40ft containers of coffee beans from India to Khorfakkan Port in the Emirate of Sharjah, adding the UAE's east-coast gateway to its regular service.",
    body: [
      {
        heading: "Serving the UAE's east coast",
        body: [
          "Khorfakkan is Sharjah's deep-water container port on the Gulf of Oman, outside the Strait of Hormuz. For consignees in Sharjah, Fujairah and the northern Emirates it can offer a shorter final road leg than routing through the west-coast ports.",
          "The two-container shipment gave the buyer a direct route to their east-coast operations, with a single consignee and clearing agent handling arrival.",
        ],
      },
      {
        heading: "Two UAE ports, one service",
        body: [
          "With deliveries into both Jebel Ali and Khorfakkan, Versa Logistics can now recommend the UAE port that best fits a buyer's schedule, rate and final destination rather than defaulting to one gateway.",
        ],
      },
    ],
    keywords: ["coffee beans to Khorfakkan", "Khorfakkan port shipment", "India to Sharjah shipping", "Versa Logistics news"],
  },
  {
    slug: "versa-logistics-regular-india-uae-container-service",
    title: "Versa Logistics now runs a regular India–UAE container service for coffee, spices and general cargo",
    metaDescription:
      "Following 17 × 40ft coffee shipments to Jebel Ali and Khorfakkan, Versa Logistics now offers a continuous India–UAE container service for coffee, spices and general cargo from Kochi.",
    date: "2026-09-24",
    dateLabel: "September 2026",
    division: "logistics",
    kicker: "Service — India ⇄ UAE",
    manifest: [
      { label: "Lane", value: "India → UAE" },
      { label: "UAE ports", value: "Jebel Ali, Khorfakkan" },
      { label: "Equipment", value: "20ft & 40ft, FCL/LCL" },
      { label: "Cargo", value: "Coffee, spices, general cargo" },
      { label: "Frequency", value: "Continuous, sailing-by-sailing" },
    ],
    image: IMAGES.kochiTerminal,
    lede:
      "After delivering 17 forty-foot containers of coffee beans into Jebel Ali and Khorfakkan, Versa Logistics is offering its India–UAE container service on a continuous basis to exporters and importers.",
    body: [
      {
        heading: "What the service covers",
        body: [
          "The service covers carrier booking, empty container release, stuffing coordination, road haulage to the port, export documentation support and vessel tracking through to arrival and document release in the UAE.",
        ],
      },
      {
        heading: "Built for commodity shippers",
        body: [
          "Because its sister venture Versa Traders exports green coffee, cardamom and black pepper, Versa Logistics applies commodity-grade handling — container inspection, moisture control and certificate coordination — as standard.",
          "The service is equally open to general cargo shippers who need a dependable, communicative forwarder on the India–UAE lane.",
        ],
      },
    ],
    keywords: ["India UAE container service", "regular shipping Kochi to Dubai", "freight forwarder India UAE", "Versa Logistics"],
  },
]

export const NEWS: NewsItem[] = [...NEWS_GROUP, ...NEWS_SHIPMENTS]
