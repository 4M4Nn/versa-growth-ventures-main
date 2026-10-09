import type { ContentSection, DivisionPage, FAQ } from "@/types"
import { ONION_IMAGES } from "./traders-onion"

export const ONION_TRADING_FAQS: FAQ[] = [
  {
    question: "What is a big onion?",
    answer:
      "\"Big onion\" is the trade name — used especially in Sri Lanka, Malaysia and Singapore — for large red bulb onions, as opposed to small onions or shallots. Indian big onions are mainly Nashik red onions graded 55 mm and above.",
  },
  {
    question: "What sizes are big onions?",
    answer:
      "Big onions for export are usually graded 55 mm and above, with 60 mm-plus and 65 mm-plus bands for buyers who want the largest bulbs. Mid-size 45–65 mm onions are also widely traded for retail.",
  },
  {
    question: "Why is Nashik onion famous?",
    answer:
      "Nashik district in Maharashtra is India's largest onion-growing area, and Lasalgaon in Nashik hosts one of Asia's largest onion markets. Nashik red onions are known for their deep colour, firm bulbs, strong flavour and — for the rabi crop — long storage life.",
  },
  {
    question: "How does onion trading work in India?",
    answer:
      "Farmers sell onions at regulated wholesale markets (APMC mandis) such as Lasalgaon and Pimpalgaon Baswant, mostly by open auction. Traders buy there, store or grade the onions, and sell them on to domestic wholesalers or pack them for export.",
  },
  {
    question: "Does Versa International Traders sell onions in bulk to wholesalers?",
    answer:
      "Yes. Versa International Traders trades onions in bulk to importers, wholesalers and distributors — by the container for export, graded by size and packed in mesh or jute bags.",
  },
  {
    question: "Can I buy Nashik big onions for Sri Lanka or Malaysia?",
    answer:
      "Yes. Versa International Traders quotes Nashik big onions (55 mm and above) and mid-size red onions to Colombo, Port Klang, Penang and other Asian ports, FOB, CFR or CIF, in refrigerated or ventilated containers.",
  },
]

export const NASHIK_EXTRA_SECTIONS: ContentSection[] = [
  {
    heading: "Which Nashik onion markets do traders buy from?",
    body: [
      "Nashik district has several of India's busiest onion wholesale markets. Onions are sold by open auction at regulated APMC markets, and the day's arrivals and prices there set the tone for Indian onion prices.",
    ],
    bullets: ["Lasalgaon — one of Asia's largest onion markets", "Pimpalgaon Baswant", "Yeola", "Chandwad", "Umrane"],
  },
  {
    heading: "How are Nashik onions stored before export?",
    body: [
      "Rabi onions are cured in the field and stored in ventilated sheds known locally as kanda chawl, which let air move through the heap. Well-stored rabi onions keep for months, which is why Nashik can supply export orders long after the spring harvest.",
    ],
  },
  {
    heading: "Do you trade big Nashik onions?",
    body: [
      "Yes. Big onions of 55 mm and above — and 60 mm-plus for buyers who want the largest bulbs — are graded out of Nashik lots for retail and Asian big-onion markets. See our big onion page for sizes and packing.",
    ],
  },
]

const RELATED = ["onions", "nashik-red-onion", "big-onion-exporter", "onion-supplier-sri-lanka-malaysia", "onion-wholesale-trading-india"]

export const TRADERS_ONION_TRADING_PAGES: DivisionPage[] = [
  {
    slug: "big-onion-exporter",
    division: "traders",
    navLabel: "Big Onions — 55 mm+",
    topic: "big onions",
    h1: "Big onion exporter from India: large Nashik red onions, 55 mm, 60 mm and above",
    metaTitle: "Big Onion Exporter India — Nashik Big Onions 55mm+ | Versa International Traders",
    metaDescription:
      "Export-grade big onions from India: large Nashik red onions graded 55 mm, 60 mm and 65 mm plus, uniform colour, rabi crop, mesh-bag packing, reefer shipping. Bulk supply to Asia, the Gulf and worldwide.",
    keywords: [
      "big onion exporter India",
      "big onion supplier",
      "large red onion export",
      "55mm onion exporter",
      "60mm onion India",
      "Nashik big onion",
      "big onion price India",
    ],
    eyebrow: "Versa International Traders — Big onions",
    lede: "Retail shelves and big-onion markets want large, uniform, deep-red bulbs. We grade them out of Nashik lots and pack them to travel.",
    image: ONION_IMAGES.redOnions,
    summary:
      "Versa International Traders exports big onions from India — large Nashik red onions graded 55 mm and above, with 60 mm-plus and 65 mm-plus bands — to importers and wholesalers in Asia, the Gulf and worldwide. Lots are cured, size-graded, packed in mesh bags and shipped in refrigerated or ventilated containers.",
    topicStats: [
      { value: "55 mm+", label: "Standard big-onion grade" },
      { value: "60–65 mm+", label: "Premium large-bulb bands" },
    ],
    intro: [
      "In much of Asia, onions are sold as either \"big onions\" or \"small onions\". Big onions are the large red bulb onions that India's Nashik region grows in huge volumes; small onions are shallot-type onions used whole in curries.",
      "Versa International Traders supplies the big-onion trade with graded Nashik red onions, mainly from the rabi crop, which has the firm, dry-skinned bulbs that hold up best on a sea voyage.",
    ],
    specs: [
      { label: "Variety", value: "Nashik red onion" },
      { label: "Sizes", value: "55 mm+, 60 mm+, 65 mm+" },
      { label: "Colour", value: "Uniform dark red to pink" },
      { label: "Crop", value: "Rabi preferred for storage life" },
      { label: "Packing", value: "Mesh bags 10, 20, 25 or 50 kg" },
      { label: "Container", value: "40ft reefer ~28–29 t" },
    ],
    sections: [
      {
        heading: "What makes a good export big onion?",
        body: [],
        bullets: [
          "Size graded to the band — no undersized bulbs in a 55 mm+ pack",
          "Fully cured, with dry outer skins and tight, dry necks",
          "Firm bulbs, free from rot, sprouting and splits",
          "Even colour across the lot",
        ],
      },
      {
        heading: "Which markets buy Indian big onions?",
        body: [
          "Sri Lanka, Malaysia, Singapore and other Southeast Asian markets use the term \"big onion\" and import Indian red onions regularly. Gulf retailers and wholesalers also buy large red onions for supermarket packs.",
        ],
      },
      {
        heading: "Do big onions cost more?",
        body: [
          "Usually, yes. Only part of any harvest grades above 55 mm, so larger bands carry a premium over mixed or mid-size onions. The premium varies with the crop and the season, and is shown on every quote.",
        ],
      },
    ],
    faqs: [ONION_TRADING_FAQS[0], ONION_TRADING_FAQS[1], ONION_TRADING_FAQS[5]],
    related: RELATED.filter((s) => s !== "big-onion-exporter"),
  },
  {
    slug: "onion-supplier-sri-lanka-malaysia",
    division: "traders",
    navLabel: "Onions — Sri Lanka, Malaysia & Asia",
    topic: "onion exports to Asia",
    h1: "Big onion supplier for Sri Lanka, Malaysia, Bangladesh and Southeast Asia: Indian onions by the container",
    metaTitle: "Onion Supplier Sri Lanka & Malaysia — Indian Big Onions | Versa International Traders",
    metaDescription:
      "Indian big onions and red onions for importers in Sri Lanka, Malaysia, Bangladesh, Singapore, Indonesia and Vietnam. Nashik onions graded 45–65 mm and 55 mm+, shipped CFR/CIF Colombo, Port Klang and Asian ports.",
    keywords: [
      "onion supplier Sri Lanka",
      "big onion import Sri Lanka from India",
      "onion supplier Malaysia",
      "Indian onion importer Malaysia",
      "onion export to Bangladesh",
      "onion supplier Singapore",
    ],
    eyebrow: "Market — South & Southeast Asia",
    lede: "Asia is the biggest buyer of Indian onions. Short sailings and familiar varieties make India the natural source for big onions and red onions alike.",
    image: ONION_IMAGES.meshBags,
    summary:
      "Versa International Traders supplies Indian big onions and red onions to importers in Sri Lanka, Malaysia, Bangladesh, Singapore, Indonesia and Vietnam — Nashik onions graded 45–65 mm or 55 mm and above, packed in mesh bags and shipped CFR or CIF to Colombo, Port Klang, Penang, Chattogram and other Asian ports.",
    intro: [
      "South and Southeast Asian kitchens use onions in almost every dish, and many of those onions come from India. Versa International Traders quotes container loads to Asian ports, timed around India's harvests and export policy.",
    ],
    specs: [
      { label: "Markets", value: "Sri Lanka, Malaysia, Bangladesh, Singapore, Indonesia, Vietnam" },
      { label: "Products", value: "Big onions 55 mm+, red onions 45–65 mm, small onions" },
      { label: "Ports", value: "Colombo, Port Klang, Penang, Chattogram, others" },
      { label: "Container", value: "Reefer or ventilated, 40ft" },
      { label: "Terms", value: "FOB, CFR, CIF" },
    ],
    sections: [
      {
        heading: "Which onions do Asian importers buy from India?",
        body: [],
        bullets: [
          "Big onions — Nashik red, 55 mm and above",
          "Mid-size red onions — 45–65 mm for general wholesale",
          "Small onions — 20–30 mm, for markets that cook with shallot-type onions",
        ],
      },
      {
        heading: "Which Indian port is used for Asian shipments?",
        body: [
          "Nashik onions usually ship from Nhava Sheva. Onions sourced in South India can leave from Chennai or Tuticorin, which are closer to Sri Lanka and Southeast Asia. We choose the port that gives the shortest reliable transit.",
        ],
      },
      {
        heading: "How do importers manage India's onion export policy?",
        body: [
          "India's onion export rules can change at short notice. We confirm the current position before contract, keep shipment periods short and agree in writing what happens if a change affects the order.",
        ],
      },
    ],
    faqs: [ONION_TRADING_FAQS[5], ONION_TRADING_FAQS[0], ONION_TRADING_FAQS[4]],
    related: RELATED.filter((s) => s !== "onion-supplier-sri-lanka-malaysia"),
  },
  {
    slug: "onion-wholesale-trading-india",
    division: "traders",
    navLabel: "Onion Wholesale Trading",
    topic: "onion wholesale trading",
    h1: "Onion wholesale trading in India: from Nashik mandis to importers worldwide",
    metaTitle: "Onion Wholesale Trading India — Bulk Onion Trader | Versa International Traders",
    metaDescription:
      "How Versa International Traders trades onions wholesale: buying at Nashik APMC mandis, curing, grading, mesh-bag packing and export by the container. Bulk onion supply for importers, wholesalers and distributors.",
    keywords: [
      "onion wholesale trading India",
      "bulk onion trader",
      "onion wholesaler India",
      "onion trading business",
      "Nashik onion wholesale",
      "onion mandi trading",
    ],
    eyebrow: "Versa International Traders — Onion trading",
    lede: "Onion trading is won at the mandi: buying the right lots on the right day, then grading and packing them so they arrive the way they left.",
    image: ONION_IMAGES.sacks,
    summary:
      "Versa International Traders trades onions wholesale — buying at Indian APMC mandis such as those in Nashik district, curing and grading the onions, packing them in mesh or jute bags and selling them in bulk to importers, wholesalers and distributors worldwide, by the container.",
    topicStats: [
      { value: "3", label: "Indian onion harvests a year" },
      { value: "5–50 kg", label: "Mesh and jute bag sizes" },
    ],
    intro: [
      "India's onions move from farm to buyer through regulated wholesale markets. A trader who knows those markets — and how to grade, store and pack what is bought there — can supply importers consistently through the year.",
    ],
    specs: [
      { label: "Sourcing", value: "APMC mandis, Nashik district and beyond" },
      { label: "Buyers", value: "Importers, wholesalers, distributors" },
      { label: "Sizes", value: "25–40, 40–60, 45–65, 55 mm+" },
      { label: "Packing", value: "Mesh bags, jute bags, private label" },
      { label: "Volume", value: "Container loads" },
    ],
    sections: [
      {
        heading: "How does the onion trade chain work?",
        body: [],
        bullets: [
          "Farmers bring onions to an APMC mandi",
          "Lots are sold by open auction to licensed traders",
          "Traders cure, sort and grade the onions by size",
          "Onions are packed in mesh or jute bags and inspected",
          "Containers are stuffed and shipped with a phytosanitary certificate",
        ],
      },
      {
        heading: "What does Versa International Traders add as your onion trader?",
        body: [
          "Lot selection at the mandi, size grading to your band, packing in your bag size or brand, a grading report and photographs before stuffing, the right container settings, and freight through Versa Logistics if you want delivery to your port.",
        ],
      },
      {
        heading: "How are wholesale onion prices set?",
        body: [
          "Prices follow daily mandi auctions, which move with arrivals, the crop season, weather and India's export policy. Quotes are given with a short validity and confirmed at contract.",
        ],
      },
    ],
    faqs: [ONION_TRADING_FAQS[3], ONION_TRADING_FAQS[4], ONION_TRADING_FAQS[2]],
    related: RELATED.filter((s) => s !== "onion-wholesale-trading-india"),
  },
]
