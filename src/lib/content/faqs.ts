import type { FAQ, FAQGroup } from "@/types"
import { LOGISTICS_FAQS } from "./logistics"
import { TRADERS_FAQS } from "./traders"
import { FREIGHT_QUOTE_FAQS } from "./logistics-seo"
import { DIGITAL_FAQS } from "./digital"
import { PORT_TO_PORT_FAQS } from "./logistics-port"
import { ONION_FAQS } from "./traders-onion"
import { ONION_TRADING_FAQS } from "./traders-onion-trading"
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
      "Yes. In addition to its primary commodities — green coffee beans and green cardamom — Versa International Traders sources any agro commodity buyers require from its supplier network, including black pepper, desiccated coconut, banana chips, other Indian spices and grains. Send your product and quantity requirement and we will send a quotation.",
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
      "A phytosanitary certificate is issued by the Plant Quarantine Department of India and confirms that an agricultural export consignment has been inspected and is free of pests and diseases. It is compulsory for exporting spices, coffee, onions and other agro commodities from India.",
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
    items: TRADERS_FAQS.filter((f) => ![...ONION_FAQS, ...ONION_TRADING_FAQS, ...COFFEE_TRADING_FAQS, ...SOURCING_FAQS, ...INTL_COFFEE_FAQS].some((o) => o.question === f.question)),
  },
  {
    id: "international-traders",
    title: "Versa International Traders — sourcing, quotations, logistics & CHA",
    items: [...SOURCING_FAQS, ...SUPPLIER_FAQS],
  },
  {
    id: "onions",
    title: "Onion trading & export — Nashik and big onions",
    items: [...ONION_FAQS, ...ONION_TRADING_FAQS],
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
]
