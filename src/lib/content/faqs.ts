import type { FAQ, FAQGroup } from "@/types"
import { LOGISTICS_FAQS } from "./logistics"
import { TRADERS_FAQS } from "./traders"
import { FREIGHT_QUOTE_FAQS } from "./logistics-seo"

export const GROUP_FAQS: FAQ[] = [
  {
    question: "What is Versa Growth Ventures?",
    answer:
      "Versa Growth Ventures is a diversified venture group headquartered in Kakkanad, Kochi, Kerala. It runs six ventures: Versa Digital & IT Solutions (custom ERP, AI agents, automation and digital marketing), Versa Logistics (sea freight and transportation), Versa Traders (spices and coffee trading and sourcing agent), Versa BPO (business process outsourcing), Versa Financial (portfolio management, trading, insurance, SIPs and mutual funds) and Versa Global (study abroad).",
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
    question: "Are Versa Logistics and Versa Traders the same company?",
    answer:
      "They are two ventures of the same group. Versa Traders buys and sells coffee and spices; Versa Logistics provides freight and transportation. Buyers can use them together — product and freight in one conversation — or separately.",
  },
  {
    question: "Where can I find Versa Digital & IT Solutions and Versa Global?",
    answer:
      "Versa Digital & IT Solutions is online at versadigital.in and Versa Global at versaglobal.in. Both are ventures of Versa Growth Ventures.",
  },
  {
    question: "What has Versa Digital & IT Solutions delivered?",
    answer:
      "Versa Digital & IT Solutions has completed 20+ ERP and custom agent builds, 30+ AI agent builds and 20+ business automations, and serves 20+ active digital marketing clients.",
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
]

export const FAQ_GROUPS: FAQGroup[] = [
  { id: "group", title: "About the group", items: GROUP_FAQS },
  { id: "logistics", title: "Versa Logistics — freight & transportation", items: LOGISTICS_FAQS },
  { id: "freight-quotes", title: "Freight quotes & rates", items: FREIGHT_QUOTE_FAQS },
  { id: "traders", title: "Versa Traders — coffee & spices", items: TRADERS_FAQS },
  { id: "trade-terms", title: "Documents, payments & trade terms", items: TRADE_TERMS_FAQS },
]
