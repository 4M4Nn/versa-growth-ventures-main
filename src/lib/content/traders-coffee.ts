import type { DivisionPage, FAQ } from "@/types"
import { IMAGES } from "./site"

// User-supplied trade record
export const COFFEE_TRADE = {
  volume: "160 MT",
  destination: "UAE",
  record: "Versa International Traders recently traded 160 MT of coffee beans to the UAE.",
}

export const COFFEE_TRADING_FAQS: FAQ[] = [
  {
    question: "Does Versa International Traders trade coffee beans to the UAE?",
    answer:
      "Yes. Versa International Traders recently traded 160 MT of coffee beans to the UAE, and supplies unroasted Arabica and Robusta green coffee to importers, roasters and wholesalers in Dubai, Sharjah and across the GCC.",
  },
  {
    question: "How do I buy green coffee beans in bulk from India?",
    answer:
      "Agree the species, processing and grade (for example Robusta Cherry AB or Plantation A), approve a sample from the lot, sign a contract with the moisture and defect limits, quantity, shipment period, Incoterm and payment terms, then receive the quality report, phytosanitary certificate, certificate of origin and bill of lading with the shipment.",
  },
  {
    question: "How are green coffee prices set?",
    answer:
      "Arabica is usually priced against the ICE 'C' futures market in New York and Robusta against the ICE Robusta futures market in London, plus or minus a differential for origin, grade and quality. Indian coffee can also be sold at an outright fixed price. Prices change daily, so quotes carry a short validity.",
  },
  {
    question: "How much coffee is 160 MT?",
    answer: "160 metric tonnes is 160,000 kg — roughly 2,670 bags of 60 kg, the standard export bag for green coffee.",
  },
  {
    question: "How much green coffee fits in a container?",
    answer:
      "A 20ft container typically carries about 19.2 tonnes of green coffee — 320 bags of 60 kg. A 40ft container is used by arrangement; because of weight limits it usually carries only a little more weight than a 20ft.",
  },
  {
    question: "Which Indian coffee grades sell best in the UAE?",
    answer:
      "UAE roasters and importers buy both Robusta for espresso blends and Arabica for filter and specialty roasts. Robusta Cherry and Parchment in AB and PB, and Plantation and Arabica Cherry in A and AB, are common requests. We match the grade to your roast and price point.",
  },
  {
    question: "Can Versa International Traders deliver coffee beans CIF Jebel Ali?",
    answer:
      "Yes. Versa International Traders quotes FOB Indian port, or CFR and CIF Jebel Ali or Khorfakkan with freight arranged by sister venture Versa Logistics.",
  },
]

export const TRADERS_COFFEE_PAGES: DivisionPage[] = [
  {
    slug: "coffee-bean-trading",
    division: "traders",
    navLabel: "Coffee Bean Trading",
    topic: "coffee bean trading",
    h1: "Coffee bean trading from India: 160 MT of coffee beans recently traded to the UAE, and green coffee supplied worldwide",
    metaTitle: "Coffee Bean Trading India to UAE — 160 MT Traded | Versa International Traders",
    metaDescription:
      "Versa International Traders trades Indian coffee beans in bulk — 160 MT recently traded to the UAE. Unroasted Arabica and Robusta, graded to contract, sampled first, shipped FOB, CFR or CIF to Dubai and worldwide.",
    keywords: [
      "coffee bean trading India",
      "coffee bean trader",
      "coffee beans to UAE",
      "bulk coffee beans India",
      "green coffee trading company",
      "coffee beans exporter to Dubai",
      "coffee trading Kochi",
    ],
    eyebrow: "Versa International Traders — Coffee bean trading",
    lede:
      "Coffee is a market that moves every day. We buy well at origin, grade to contract and deliver to the buyer's port — most recently 160 MT of coffee beans into the UAE.",
    image: IMAGES.coffeeBeans,
    summary:
      "Versa International Traders is a coffee bean trader based in Kochi, India. It recently traded 160 MT of coffee beans to the UAE and supplies unroasted Arabica and Robusta green coffee in bulk to importers, roasters and wholesalers worldwide — sampled before contract, graded to specification, documented with a quality report and phytosanitary certificate, and shipped FOB, CFR or CIF.",
    topicStats: [
      { value: "160 MT", label: "Coffee beans recently traded to the UAE" },
      { value: "60 kg", label: "Standard green coffee export bag" },
    ],
    intro: [
      "Coffee bean trading sits between the curing works in India and the roastery abroad. The trader's job is to find the right lot, lock in the price and specification, and make sure what arrives matches what was agreed.",
      "Versa International Traders does that from Kochi, close to India's coffee country in Karnataka, Kerala and Tamil Nadu. Its most recent trade moved 160 MT of coffee beans to the UAE.",
    ],
    specs: [
      { label: "Recent trade", value: "160 MT of coffee beans to the UAE" },
      { label: "Products", value: "Unroasted Arabica and Robusta" },
      { label: "Processing", value: "Washed (Plantation / Parchment), Natural (Cherry)" },
      { label: "Packing", value: "60 kg jute bags; liners on request" },
      { label: "Pricing", value: "Outright or differential to ICE futures" },
      { label: "Terms", value: "FOB, CFR, CIF" },
    ],
    sections: [
      {
        heading: "What does a coffee bean trader do?",
        body: [
          "A coffee bean trader buys green coffee at origin and sells it to importers and roasters abroad. In practice that means selecting lots, sampling and grading them, fixing a price, contracting the quality, arranging packing, certificates and freight, and standing behind the delivery.",
        ],
      },
      {
        heading: "What did the 160 MT coffee trade to the UAE involve?",
        body: [
          "Versa International Traders traded 160 MT of coffee beans to a buyer in the UAE. For scale, that is about 2,670 bags of 60 kg. A trade of that size is prepared lot by lot: each lot is checked for moisture, screen size and defects, bagged, certified and shipped against a single contract specification.",
        ],
      },
      {
        heading: "Which coffee beans can you trade?",
        body: [],
        bullets: [
          "Robusta Cherry and Robusta Parchment — for espresso blends and instant coffee",
          "Plantation (washed Arabica) and Arabica Cherry — for filter and specialty roasts",
          "Size grades such as AA, A, AB, PB and C, to the buyer's specification",
        ],
      },
      {
        heading: "How is coffee priced in a trade?",
        body: [
          "Robusta is commonly priced against the ICE Robusta futures market in London and Arabica against the ICE 'C' market in New York, plus or minus a differential for origin and grade. Smaller buyers often prefer a fixed outright price. Either way the price, quantity, quality and shipment period are fixed in the contract.",
        ],
      },
      {
        heading: "How do I start trading coffee with Versa International Traders?",
        body: [
          "Send the species, processing, grade, quantity, destination port and shipment month to +91 97464 33133, WhatsApp +91 79072 15816 or the contact form. We send a sample from the lot and a quote with its validity.",
        ],
      },
    ],
    faqs: [COFFEE_TRADING_FAQS[0], COFFEE_TRADING_FAQS[2], COFFEE_TRADING_FAQS[3], COFFEE_TRADING_FAQS[1]],
    related: ["green-coffee-beans", "coffee-beans-supplier-uae-dubai", "robusta-green-coffee-beans"],
  },
  {
    slug: "coffee-beans-supplier-uae-dubai",
    division: "traders",
    navLabel: "Coffee Beans Supplier — UAE",
    topic: "coffee beans for the UAE",
    h1: "Coffee beans supplier for the UAE: Indian green coffee delivered to Dubai, Sharjah and the GCC",
    metaTitle: "Coffee Beans Supplier UAE & Dubai — Indian Green Coffee | Versa International Traders",
    metaDescription:
      "Indian green coffee beans supplier for UAE roasters and importers: Robusta and Arabica delivered CFR/CIF Jebel Ali or Khorfakkan. 160 MT of coffee beans recently traded to the UAE. Samples first.",
    keywords: [
      "coffee beans supplier UAE",
      "green coffee supplier Dubai",
      "coffee beans wholesale Dubai",
      "Indian coffee importer UAE",
      "Robusta supplier Dubai",
      "coffee beans Sharjah",
    ],
    eyebrow: "Market — UAE coffee",
    lede: "The UAE roasts, re-exports and drinks a great deal of coffee, and India is a short voyage away. We supply its roasters and importers directly.",
    image: IMAGES.jebelAli,
    summary:
      "Versa International Traders supplies Indian unroasted green coffee beans — Robusta and Arabica — to roasters, importers and wholesalers in the UAE, delivered CFR or CIF to Jebel Ali or Khorfakkan. It recently traded 160 MT of coffee beans to the UAE, and its sister venture Versa Logistics has shipped 17 × 40ft containers of coffee beans into UAE ports.",
    topicStats: [
      { value: "160 MT", label: "Coffee beans recently traded to the UAE" },
      { value: "17", label: "× 40ft coffee containers shipped to UAE ports by Versa Logistics" },
    ],
    intro: [
      "For UAE coffee businesses, India offers dependable Robusta for espresso blends and clean, mild Arabica, with short sailing times to Jebel Ali and Khorfakkan and preferential origin under India–UAE CEPA where the product qualifies.",
    ],
    specs: [
      { label: "Recent trade", value: "160 MT of coffee beans to the UAE" },
      { label: "Delivery", value: "CFR / CIF Jebel Ali or Khorfakkan" },
      { label: "Coffee", value: "Robusta and Arabica, washed and natural" },
      { label: "Documents", value: "Quality report, phytosanitary, COO (incl. CEPA)" },
      { label: "Freight", value: "Via Versa Logistics, or your forwarder" },
    ],
    sections: [
      {
        heading: "Why buy Indian coffee beans for the UAE market?",
        body: [],
        bullets: [
          "Short, frequent sailings from India's west coast to Jebel Ali and Khorfakkan",
          "Indian Robusta's body and crema suit espresso-led café menus",
          "Washed Arabica (Plantation) for clean filter and specialty roasts",
          "Preferential certificate of origin under India–UAE CEPA where eligible",
        ],
      },
      {
        heading: "What does Versa International Traders deliver to UAE buyers?",
        body: [
          "A sample from the lot before contract, a quality analysis report with the shipment, export certificates and a delivered price to your port. Versa Logistics, part of the same group, books the container so product and freight are handled by one team.",
        ],
      },
      {
        heading: "What is the group's coffee record in the UAE?",
        body: [
          "Versa International Traders recently traded 160 MT of coffee beans to the UAE. Separately, Versa Logistics has shipped 15 × 40ft containers of coffee beans to Jebel Ali and 2 × 40ft containers to Khorfakkan.",
        ],
      },
    ],
    faqs: [COFFEE_TRADING_FAQS[0], COFFEE_TRADING_FAQS[5], COFFEE_TRADING_FAQS[6], COFFEE_TRADING_FAQS[4]],
    related: ["coffee-bean-trading", "green-coffee-beans", "coffee-and-spice-supplier-uae"],
  },
]
