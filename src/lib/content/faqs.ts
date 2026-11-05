import type { FAQ, FAQGroup } from "@/types"
import { LOGISTICS_FAQS } from "./logistics"
import { TRADERS_FAQS } from "./traders"
import { FREIGHT_QUOTE_FAQS } from "./logistics-seo"
import { DIGITAL_FAQS } from "./digital"
import { PORT_TO_PORT_FAQS } from "./logistics-port"

import { COFFEE_TRADING_FAQS } from "./traders-coffee"
import { INTL_COFFEE_FAQS } from "./traders-coffee-intl"
import { SOURCING_FAQS, SUPPLIER_FAQS } from "./traders-sourcing"

export const GROUP_FAQS: FAQ[] = [
  {
    question: "What is Versa Growth Ventures?",
    answer:
      "Versa Growth Ventures is a diversified venture group headquartered in Kakkanad, Kochi, Kerala. It runs six ventures: Versa Digital & IT Solutions (custom ERP, AI agents, automation and digital marketing), Versa Logistics (sea freight and transportation), Versa International Traders (spices and coffee trading and sourcing agent), Versa BPO (business process outsourcing), Versa Financial (portfolio management, trading, insurance, SIPs and mutual funds) and Versa Global (study abroad).",
  },
  {
    question: "Who are the founders of Versa Growth Ventures?",
    answer:
      "Versa Growth Ventures was founded by Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu, who lead finance and compliance, digital and growth, and strategy and international markets respectively.",
  },
  {
    question: "Where is Versa Growth Ventures located?",
    answer:
      "Our office is on the 3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021, India. Versa Digital & IT Solutions and Versa Global operate from the same address.",
  },
  {
    question: "How can I contact Versa Growth Ventures?",
    answer:
      "Call +91 97464 33133, +91 97467 33133 or +91 79072 15816, message us on WhatsApp at +91 79072 15816, email info@versagrowthventures.in, or send an enquiry through the contact form on this website.",
  },
  {
    question: "Are Versa Logistics and Versa International Traders the same company?",
    answer:
      "They are two ventures of the same group. Versa International Traders buys and sells coffee and spices; Versa Logistics provides freight and transportation. Buyers can use them together — product and freight in one conversation — or separately.",
  },
  {
    question: "Does Versa Logistics offer port-to-port shipping at the best price?",
    answer:
      "Yes. Versa Logistics quotes port-to-port sea freight from Kochi and other Indian ports to Jebel Ali, Khorfakkan and Gulf ports. It compares carriers and sailings on your port pair and sends the best price it can find, with every charge itemised and the validity stated.",
  },
  SOURCING_FAQS[0],
  {
    question: "Has Versa Growth Ventures traded coffee beans to the UAE?",
    answer:
      "Yes. Versa International Traders, a Versa Growth Ventures company, recently traded 160 MT of coffee beans to the UAE. Separately, Versa Logistics has shipped 17 × 40ft containers of coffee beans to Jebel Ali and Khorfakkan.",
  },
  {
    question: "Does Versa International Traders supply EUDR compliant coffee for European buyers?",
    answer:
      "Yes. Versa International Traders provides EUDR-compliant documentation — GPS geolocation data for the farm or estate, satellite forest-cover evidence, and Rainforest Alliance transaction certificates for certified lots — for every EU-bound green coffee shipment, supporting the EU importer&apos;s TRACES NT due-diligence statement. Indian coffee from Karnataka and Kerala is categorised as standard-risk under EUDR.",
  },
  {
    question: "Where can I find Versa Digital & IT Solutions and Versa Global?",
    answer:
      "Versa Digital & IT Solutions is online at versadigital.in and Versa Global at versaglobal.in. Both are ventures of Versa Growth Ventures.",
  },
  {
    question: "What has Versa Digital & IT Solutions delivered?",
    answer:
      "Versa Digital & IT Solutions has completed 20+ ERP and custom agent builds, 30+ AI agent builds and 20+ business automations, and serves 20+ active digital marketing clients. As of October 2026 it has three ERP builds, one CRM and three AI automation projects in delivery.",
  },
  {
    question: "What does Versa BPO do?",
    answer:
      "Versa BPO provides business process outsourcing from Kochi — customer support, telecalling and lead generation, back-office and data processing, and CRM management — for clients including Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions.",
  },
  {
    question: "What does Versa Financial offer?",
    answer:
      "Versa Financial offers portfolio management, trading and money management for 50+ clients, life, health and term insurance with 500+ policies completed, and SIPs and mutual funds.",
  },
  {
    question: "Who are some of Versa Growth Ventures' clients?",
    answer: "Clients across our ventures include Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions.",
  },
  {
    question: "When was Versa Growth Ventures founded?",
    answer: "Versa Growth Ventures was founded in 2025 in Kochi, Kerala.",
  },
  {
    question: "Can Versa International Traders source agro products beyond coffee and cardamom?",
    answer:
      "Yes. In addition to its primary commodities — green coffee beans and green cardamom — Versa International Traders can source other agro commodities from its supplier network. Send your product and quantity requirement and we will send a quotation.",
  },
  {
    question: "Does Versa Growth Ventures handle both the product and the freight for an export order?",
    answer:
      "Yes. Versa International Traders handles the supplier, quotation, samples, contract and quality. Versa Logistics handles sea freight and CHA (export customs clearance). Buyers can use the full service — product, freight and clearance — or either part separately.",
  },
]

export const TRADE_TERMS_FAQS: FAQ[] = [
  {
    question: "What is the difference between FOB, CFR and CIF?",
    answer:
      "Under FOB the seller loads the goods on the vessel and the buyer pays freight and insurance. Under CFR the seller also pays freight to the destination port; under CIF the seller pays freight and insurance. In all three, risk passes to the buyer once goods are loaded at origin.",
  },
  {
    question: "What documents are needed to export coffee or spices from India?",
    answer:
      "Typically a commercial invoice, packing list, shipping bill, bill of lading, certificate of origin and phytosanitary certificate, plus a quality report and any fumigation or product certificates the buyer requires.",
  },
  {
    question: "What is a preferential certificate of origin under India–UAE CEPA?",
    answer:
      "It is a certificate that lets eligible Indian-origin goods enter the UAE at reduced or zero duty under the India–UAE Comprehensive Economic Partnership Agreement. It must be issued for the specific consignment.",
  },
  {
    question: "Which payment terms are common for bulk coffee and spice orders?",
    answer:
      "A partial advance with the balance against shipping documents, cash against documents through banks, or a letter of credit for larger orders.",
  },
  {
    question: "What is a telex release?",
    answer:
      "A telex release lets the consignee collect cargo at the destination without surrendering paper original bills of lading, once the shipper authorises release — usually after payment.",
  },
  {
    question: "What is VGM?",
    answer:
      "VGM (verified gross mass) is the declared weight of a packed container, which must be submitted to the carrier before the container can be loaded on a vessel.",
  },
  {
    question: "Where can I find definitions of shipping and spice trade terms?",
    answer: "Our glossary explains terms such as FCL, LCL, bill of lading, CEPA, AGEB, MG1, TGEB and Robusta Parchment in plain English.",
  },
  {
    question: "What is a phytosanitary certificate?",
    answer:
      "A phytosanitary certificate is issued by the Plant Quarantine Department of India and confirms that an agricultural export consignment has been inspected and is free of pests and diseases. It is compulsory for exporting coffee, spices and other agro commodities from India.",
  },
  {
    question: "What is a fumigation certificate?",
    answer:
      "A fumigation certificate confirms that a consignment or its packing (typically wooden pallets or wooden packing materials) has been treated to kill pests. Methyl bromide fumigation or heat treatment is required under ISPM 15 for wooden packing going to most countries.",
  },
  {
    question: "What is a switch bill of lading?",
    answer:
      "A switch bill of lading is a second set of bills of lading issued in place of the original set, often to hide the origin supplier, change the shipper name, or correct an error. It is issued at the transhipment port or by the carrier's agent and must be agreed in advance with the carrier.",
  },
  {
    question: "What does 'free on board' mean for Indian exporters?",
    answer:
      "Under FOB (Free On Board), the Indian exporter is responsible for delivering the goods on board the vessel at the agreed port and obtaining the let export order. Once the goods cross the ship's rail, risk and cost pass to the buyer, who arranges and pays for the sea freight and insurance.",
  },
]

export const DIGITAL_GEO_FAQS: FAQ[] = [
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer:
      "GEO (Generative Engine Optimization) is the practice of structuring website content so that AI tools — Google AI Overviews, ChatGPT, Perplexity, Gemini and Microsoft Copilot — cite your business in their generated answers. It goes beyond traditional SEO (ranking on a results page) and AEO (winning featured snippets) to target the AI-generated answers that now appear above all other results for most informational queries.",
  },
  {
    question: "What is the difference between SEO, AEO and GEO?",
    answer:
      "SEO wins you a ranked position on Google's traditional blue-link results page. AEO wins you the featured snippet or 'People also ask' box — zero-position answers pulled directly from your content. GEO wins you a citation in AI-generated conversational answers from ChatGPT, Perplexity, Google AI Overviews and similar tools. In 2026, all three disciplines are needed for maximum organic visibility.",
  },
  {
    question: "How much does custom ERP development cost in India in 2026?",
    answer:
      "Custom ERP development in India typically costs ₹5–10 lakh for a focused single-module system (inventory, billing or HR) and ₹25–60 lakh+ for a full multi-module ERP. The cost depends on number of modules, business logic complexity, integrations required (Tally, payment gateways, shipping APIs) and whether a mobile companion app is included. Versa Digital & IT Solutions scopes and prices projects on a fixed-cost basis — contact +91 97464 33133 for a scoping call.",
  },
  {
    question: "What is an AI agent and how is it different from a chatbot?",
    answer:
      "A chatbot answers questions in a conversation window. An AI agent uses a large language model (LLM) as a reasoning engine and can take actions — reading and writing files, calling APIs, sending emails, updating databases, filling forms — to complete multi-step tasks autonomously. For example, an AI agent can read an incoming enquiry email, look up product data, draft a quote, log it in the CRM and send it, all without human intervention.",
  },
  {
    question: "How quickly does AEO show results for an Indian business?",
    answer:
      "Well-structured AEO content on a site Google already crawls can win a featured snippet or AI Overview citation within 4–8 weeks of publishing — faster than traditional SEO, which typically takes 3–9 months for competitive keywords. Versa Digital & IT Solutions focuses on answer-first content architecture to accelerate this timeline for clients.",
  },
  {
    question: "Does Versa Digital & IT Solutions do GEO and AEO for clients?",
    answer:
      "Yes. Versa Digital & IT Solutions provides SEO, AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) as part of its digital marketing service. The team builds answer-first content architectures, implements structured data (FAQ, HowTo, Article schema) and tracks AI Overview and featured snippet wins alongside traditional rank tracking. Contact +91 97464 33133.",
  },
]

export const LOGISTICS_GLOBAL_FAQS: FAQ[] = [
  {
    question: "How long does sea freight from India to the UK take?",
    answer:
      "Sea freight from Kochi (Cochin) to Felixstowe or Tilbury takes approximately 24–28 days via Port Klang or Colombo transshipment. From Nhava Sheva (Mumbai) to Felixstowe it is 20–24 days. All times are for FCL (full container load) sailings; LCL (groupage) adds 2–5 days for consolidation and deconsolidation.",
  },
  {
    question: "What is a CHA (Customs House Agent) and do I need one to export from India?",
    answer:
      "A CHA (Customs House Agent) is a CBIC-licensed agent who files your shipping bill in ICEGATE (India's customs IT portal) and coordinates Let Export Order (LEO) from customs to allow loading. While not legally mandatory, almost all commercial exporters use a CHA because customs procedures are complex, involve strict deadlines and carry penalties for incorrect filings. Versa Logistics provides CHA services as part of its export freight offering.",
  },
  {
    question: "What is the difference between LCL and FCL sea freight from India?",
    answer:
      "LCL (Less than Container Load): your cargo shares a container with other shippers' goods; you pay per CBM. FCL (Full Container Load): you book the entire container for a flat rate. FCL is cheaper per kilo and faster above 10–12 CBM of cargo. For coffee beans, spices and dense agro commodities, FCL is almost always the right choice — a standard 20ft container holds approximately 19.2 MT of coffee beans (320 × 60 kg bags).",
  },
  {
    question: "What documents do I need to export agro commodities from India to Europe or the UK?",
    answer:
      "For agro commodity exports (coffee, spices, grains) from India to the UK or EU: IEC (Import Export Code), commercial invoice, packing list, bill of lading, certificate of origin, shipping bill, phytosanitary certificate from the Plant Quarantine Department, and — for commodities covered by the EU/UK EUDR legislation — a due-diligence statement with GPS geolocation data for the production land. Versa Logistics and Versa International Traders supply the full document pack.",
  },
  {
    question: "Can first-time exporters use Versa Logistics?",
    answer:
      "Yes. Versa Logistics regularly works with first-time exporters — handling CHA filing, phytosanitary coordination, freight booking and documentation from start to finish. First-time exporters need an IEC (Import Export Code from DGFT) and a confirmed order from their buyer; Versa Logistics handles the rest. Call +91 97464 33133 or use the freight quote form.",
  },
  {
    question: "Does Versa Logistics ship from ports other than Kochi?",
    answer:
      "Yes. While Kochi (ICTT Vallarpadam and Cochin Port) is the primary gateway, Versa Logistics also ships from Nhava Sheva (Mumbai), Chennai, Mangalore and Tuticorin depending on the cargo origin and routing. For Karnataka-origin coffee, Mangalore or Nhava Sheva is sometimes more efficient; for South Kerala cardamom, Kochi is typically the best option.",
  },
]

export const BPO_INTL_FAQS: FAQ[] = [
  {
    question: "Can businesses outside India use Versa BPO's services?",
    answer:
      "Yes. Versa BPO serves international clients including businesses in the UAE, USA, Canada, UK and Australia. Services are delivered remotely — the agent team works from Kochi and accesses client systems over secure internet connections. Engagements typically start with a 4–6 week pilot on a defined process.",
  },
  {
    question: "What is the time zone for BPO services — do agents cover UAE or US hours?",
    answer:
      "India Standard Time (IST, UTC +5:30) overlaps naturally with UAE business hours by 5–6 hours (IST is 1.5 hours ahead of UAE time). For US clients, agents work an afternoon/evening shift (12pm–9pm IST) to cover US Eastern morning hours, or process overnight queues for the US team to find completed at start of day. Versa BPO structures shift schedules to match the client's core operating hours.",
  },
  {
    question: "How much does BPO outsourcing cost for a UAE or US business?",
    answer:
      "A fully managed English-speaking BPO agent in India costs approximately USD 400–750 per month — covering agent salary, infrastructure, supervision and QA. This compares to USD 2,500–5,000 for a US-based equivalent or AED 5,000–9,000 for a UAE-based equivalent. A 5-agent team typically costs USD 2,000–3,500 per month from India versus USD 12,500–25,000 from the US.",
  },
  {
    question: "What is the minimum engagement for international clients at Versa BPO?",
    answer:
      "The minimum is 1 full-time equivalent (FTE) agent on a defined process, with a recommended 4–6 week pilot period. No long-term minimum commitment is required during the pilot. After the pilot, engagements typically run on 3-month rolling terms. Contact +91 97464 33133 or info@versagrowthventures.in.",
  },
  {
    question: "Is English proficiency strong enough in India for US and UK customer support?",
    answer:
      "India produces over 1.5 million English-speaking graduates per year and has the world's largest English-language BPO industry. Kochi's talent pool is strong in professional English for both written and voice communication. For roles where US or UK accent neutrality is critical, Versa BPO provides accent assessment during agent selection.",
  },
]

export const BPO_GLOBAL_FAQS: FAQ[] = [
  {
    question: "What BPO services does Versa BPO offer?",
    answer:
      "Versa BPO provides back-office outsourcing and customer support services from Kochi: customer support (voice, email, chat), data entry and processing, invoice and accounts payable processing, HR administration, sales support and CRM data management. Services are available on a per-agent or managed-team basis. Contact +91 97464 33133 or info@versagrowthventures.in.",
  },
  {
    question: "How much does BPO outsourcing cost per agent in India in 2026?",
    answer:
      "BPO cost in India ranges from ₹25,000–40,000 per month for data entry and basic back-office agents, ₹35,000–55,000 for English customer support agents, and ₹50,000–80,000 for skilled finance or HR specialists. These rates are 60–80% lower than hiring equivalent staff in the UK, USA or UAE, and typically include infrastructure, supervision and quality assurance.",
  },
  {
    question: "What countries does Versa Global help students go to?",
    answer:
      "Versa Global, the study-abroad venture of Versa Growth Ventures, advises on university selection, application and visa process for the UK, Ireland, Canada, Germany and Australia — the five most popular study-abroad destinations for Indian students. Each country has its own intake timelines, visa requirements and post-study work rights. Consult Versa Global for destination-specific guidance at +91 97464 33133.",
  },
  {
    question: "Can Indian students work after graduating from a UK university?",
    answer:
      "Yes. The UK Graduate Route visa allows international students who complete an eligible UK degree to remain and work in the UK for 2 years (3 years for PhD graduates) without a job offer or sponsor. There is no minimum salary requirement and no restriction on sector or hours. Applications are made from inside the UK before the Student visa expires.",
  },
  {
    question: "What financial services does Versa Financial provide?",
    answer:
      "Versa Financial offers portfolio management, equity and F&O trading support, insurance (life and general), SIP and mutual fund investment planning, and financial advisory. The venture is based in Kochi and serves individual and business clients across Kerala. Contact Versa Growth Ventures at +91 97464 33133 for a consultation.",
  },
]

export const FAQ_GROUPS: FAQGroup[] = [
  { id: "group", title: "About the group", items: GROUP_FAQS },
  { id: "digital", title: "Versa Digital & IT Solutions — SEO, AEO, ERP & AI", items: DIGITAL_FAQS },
  {
    id: "logistics",
    title: "Versa Logistics — freight & transportation",
    items: LOGISTICS_FAQS.filter((f) => !PORT_TO_PORT_FAQS.some((p) => p.question === f.question)),
  },
  { id: "port-to-port", title: "Port-to-port freight & best price", items: PORT_TO_PORT_FAQS },
  { id: "freight-quotes", title: "Freight quotes & rates", items: FREIGHT_QUOTE_FAQS },
  {
    id: "traders",
    title: "Versa International Traders — coffee beans, cardamom & spices",
    items: TRADERS_FAQS.filter((f) => ![...COFFEE_TRADING_FAQS, ...SOURCING_FAQS, ...INTL_COFFEE_FAQS].some((o) => o.question === f.question)),
  },
  {
    id: "international-traders",
    title: "Versa International Traders — sourcing, quotations, logistics & CHA",
    items: [...SOURCING_FAQS, ...SUPPLIER_FAQS],
  },
  {
    id: "coffee-trading",
    title: "Coffee bean trading — India to the UAE and worldwide",
    items: COFFEE_TRADING_FAQS,
  },
  {
    id: "coffee-international",
    title: "Coffee beans — UK, USA, Europe, EUDR & Rainforest Alliance",
    items: INTL_COFFEE_FAQS,
  },
  { id: "trade-terms", title: "Documents, payments & trade terms", items: TRADE_TERMS_FAQS },
  { id: "digital-geo-aeo", title: "GEO, AEO, AI agents & ERP — Versa Digital", items: DIGITAL_GEO_FAQS },
  { id: "logistics-global", title: "Sea freight — UK, Europe & first-time exporters", items: LOGISTICS_GLOBAL_FAQS },
  { id: "bpo-global-financial", title: "Versa BPO, Versa Global & Versa Financial", items: BPO_GLOBAL_FAQS },
  { id: "bpo-international", title: "BPO outsourcing for UAE, USA & international clients", items: BPO_INTL_FAQS },
]
