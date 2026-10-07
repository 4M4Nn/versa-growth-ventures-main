import type { BlogPost } from "@/types"
import { IMAGES } from "./site"
import { ONION_IMAGES } from "./traders-onion"

const ONION_TRADING = { label: "Onion wholesale trading", href: "/traders/onion-wholesale-trading-india" }
const BIG_ONIONS = { label: "Big onions — 55 mm+", href: "/traders/big-onion-exporter" }
const NASHIK = { label: "Nashik onion", href: "/traders/nashik-red-onion" }
const ONION_PRICE = { label: "Request onion samples & price", href: "/contact?enquiry=onion" }
const COFFEE_TRADING = { label: "Coffee bean trading", href: "/traders/coffee-bean-trading" }
const COFFEE_UAE = { label: "Coffee beans supplier — UAE", href: "/traders/coffee-beans-supplier-uae-dubai" }
const COFFEE_PRICE = { label: "Request coffee samples & price", href: "/contact?enquiry=coffee" }

const CEPA_FAQ = {
  question: "Can Indian coffee enter the UAE at reduced duty under CEPA?",
  answer:
    "Eligible Indian-origin goods can claim preferential treatment under the India–UAE Comprehensive Economic Partnership Agreement with a preferential certificate of origin issued for the consignment. Versa Traders arranges the certificate where the product qualifies.",
}

// Onion and coffee trading guides
export const BLOG_TRADING_POSTS: BlogPost[] = [
  {
    slug: "nashik-onion-guide-for-importers",
    title: "Nashik Onion: Why India's Most Famous Onion Is the Importer's Default",
    metaDescription:
      "What makes Nashik onion different: colour, pungency, size, rabi storage life, the Lasalgaon market and how importers should specify Nashik onions in a contract.",
    category: "Trade",
    date: "2026-10-07",
    readTime: "6 min read",
    keywords: ["Nashik onion", "Nashik onion exporter", "Nashik red onion quality", "Lasalgaon onion", "Indian onion for import"],
    image: ONION_IMAGES.field,
    excerpt: "Ask an importer for \"Indian onions\" and they usually mean Nashik. Here is why.",
    answer:
      "Nashik onion is the red onion grown in Nashik district, Maharashtra — India's largest onion-growing area. It is valued for its deep red colour, firm bulbs and strong pungency, and the rabi crop harvested in spring stores for months, which lets Nashik supply export markets for much of the year. Importers specify it by size band, crop season, packing and curing standard.",
    sections: [
      {
        heading: "What makes Nashik onion different?",
        body: [],
        bullets: [
          "Deep red to pink colour that sells well at retail",
          "Firm, compact bulbs with strong pungency",
          "A large rabi crop with thick, dry skins and long storage life",
          "A huge, liquid trade through markets such as Lasalgaon",
        ],
      },
      {
        heading: "Where is Nashik onion traded?",
        body: [
          "At regulated APMC markets across Nashik district — Lasalgaon, Pimpalgaon Baswant, Yeola, Chandwad and Umrane among them — mostly by open auction. Lasalgaon is one of Asia's largest onion markets, and its daily prices are watched across India.",
        ],
      },
      {
        heading: "How should importers specify Nashik onion?",
        body: [],
        bullets: [
          "Size band — for example 45–65 mm or 55 mm and above",
          "Crop — rabi for storage, kharif for fresh, quick-moving trade",
          "Curing — dry skins and dry necks",
          "Packing — mesh bag size and labelling",
          "Container — reefer or ventilated, with agreed settings",
        ],
      },
    ],
    faqs: [
      { question: "Is Nashik onion the same as Lasalgaon onion?", answer: "Lasalgaon is a market town in Nashik district, so Lasalgaon onions are Nashik onions traded through the Lasalgaon market." },
    ],
    relatedLinks: [NASHIK, BIG_ONIONS, ONION_PRICE],
  },
  {
    slug: "big-onion-vs-small-onion",
    title: "Big Onion vs Small Onion: What Importers Mean and Which to Buy from India",
    metaDescription:
      "The difference between big onions and small onions in the Asian and Gulf trade, typical sizes, uses, and how to order each from India.",
    category: "Trade",
    date: "2026-10-07",
    readTime: "4 min read",
    keywords: ["big onion vs small onion", "big onion meaning", "small onion shallot", "big onion import", "onion types India"],
    image: ONION_IMAGES.smallOnions,
    excerpt: "Two words that run the onion trade across South and Southeast Asia.",
    answer:
      "In the onion trade — especially in Sri Lanka, Malaysia and Singapore — a big onion is a large red bulb onion, typically Nashik red onion of 55 mm and above, used sliced or chopped. A small onion is a shallot-type onion of about 20–30 mm, used whole or ground into pastes. India exports both, and they are ordered, graded and priced separately.",
    sections: [
      {
        heading: "What is a big onion?",
        body: ["A large red bulb onion. Indian big onions are mostly Nashik red onions graded 55 mm and above, with 60 mm-plus for the largest bulbs."],
      },
      {
        heading: "What is a small onion?",
        body: ["A small, multiplier or shallot-type onion of roughly 20–30 mm, sometimes called sambar onion in India. It has a sweeter, more aromatic flavour and is used whole in curries and pastes."],
      },
      {
        heading: "How do you order each one?",
        body: [],
        bullets: [
          "Big onions — specify size band, colour, crop and mesh-bag weight",
          "Small onions — specify size range, dryness and bag size",
          "Both — agree container type, settings and shipment period",
        ],
      },
    ],
    faqs: [
      { question: "Are big onions more expensive than small onions?", answer: "It depends on the season. Each is a separate market with its own supply, so prices are quoted separately." },
    ],
    relatedLinks: [BIG_ONIONS, { label: "Onions for Sri Lanka & Malaysia", href: "/traders/onion-supplier-sri-lanka-malaysia" }, ONION_PRICE],
  },
  {
    slug: "how-onion-trading-works-mandi-to-container",
    title: "How Onion Trading Works in India: From Mandi Auction to Export Container",
    metaDescription:
      "Inside Indian onion trading: APMC mandi auctions, curing and storage, size grading, packing, phytosanitary inspection and shipping — and what a good onion trader does at each step.",
    category: "Trade",
    date: "2026-10-06",
    readTime: "6 min read",
    keywords: ["onion trading India", "how onion trading works", "onion mandi auction", "onion trader", "onion export process"],
    image: ONION_IMAGES.sacks,
    excerpt: "The journey of an onion from a Nashik auction yard to a port overseas, step by step.",
    answer:
      "Indian onion trading starts at regulated APMC mandis, where farmers' lots are auctioned to licensed traders. Traders cure and store the onions, sort and grade them by size, pack them in mesh or jute bags, have them inspected for a phytosanitary certificate, and ship them in refrigerated or ventilated containers to importers abroad.",
    sections: [
      {
        heading: "Step 1: Buying at the mandi",
        body: ["Lots are auctioned daily. The trader judges colour, size, firmness and dryness by eye and hand, and bids on the lots that will meet the buyer's specification."],
      },
      {
        heading: "Step 2: Curing and storage",
        body: ["Onions are cured so their skins and necks dry, then stored in ventilated sheds if they are not shipped straight away."],
      },
      {
        heading: "Step 3: Grading and packing",
        body: ["Onions are sorted to the contract size band, cleaned of loose skins and soil, and packed in mesh or jute bags of the agreed weight."],
      },
      {
        heading: "Step 4: Inspection and shipment",
        body: ["The lot is inspected for the phytosanitary certificate, stuffed with space for airflow, and shipped with a certificate of origin, invoice, packing list and bill of lading."],
      },
    ],
    faqs: [
      { question: "What is an APMC?", answer: "An Agricultural Produce Market Committee — a regulated wholesale market where farmers sell produce to licensed traders, usually by auction." },
    ],
    relatedLinks: [ONION_TRADING, NASHIK, ONION_PRICE],
  },
  {
    slug: "what-affects-indian-onion-export-prices",
    title: "What Affects Indian Onion Export Prices? Seasons, Size, Weather, Policy and Freight",
    metaDescription:
      "The factors that move the price of onions exported from India: harvest season, crop size, size band, weather, mandi arrivals, export policy and freight — and how buyers can plan around them.",
    category: "Trade",
    date: "2026-10-06",
    readTime: "5 min read",
    keywords: ["onion price India export", "onion export price factors", "Nashik onion price", "big onion price", "onion market India"],
    image: ONION_IMAGES.meshBags,
    excerpt: "Onion prices can double in weeks. These are the levers that move them.",
    answer:
      "Indian onion export prices depend on the harvest season and stored stock, the size of the crop, weather events, daily arrivals at mandis such as Lasalgaon, the size band ordered, India's export policy at the time, and freight rates to the destination. Larger bands such as 55 mm and above usually carry a premium.",
    sections: [
      {
        heading: "Which factors move the price?",
        body: [],
        bullets: [
          "Season — prices often firm as stored rabi stocks run down",
          "Crop size and weather — heavy rain or drought can tighten supply quickly",
          "Mandi arrivals — fewer arrivals, higher prices",
          "Size band — big onions of 55 mm+ cost more than mixed sizes",
          "Export policy — minimum export prices or duties add to cost",
          "Freight — reefer rates to your port",
        ],
      },
      {
        heading: "How can buyers plan?",
        body: ["Buy in the main rabi storage season, agree short shipment periods, ask for quotes with clear validity and keep a policy clause in the contract."],
      },
    ],
    faqs: [
      { question: "Why are onion quotes valid for such a short time?", answer: "Because mandi prices change daily with arrivals and weather. A short validity protects both buyer and seller." },
    ],
    relatedLinks: [BIG_ONIONS, ONION_TRADING, ONION_PRICE],
  },
  {
    slug: "coffee-bean-trading-india-to-uae",
    title: "Coffee Bean Trading from India to the UAE: Grades, Pricing, Documents and Delivery",
    metaDescription:
      "How coffee bean trades from India to the UAE work: choosing Robusta or Arabica grades, ICE-linked or outright pricing, contracts, CEPA certificate of origin and delivery to Jebel Ali — with a recent 160 MT example.",
    category: "Trade",
    date: "2026-10-07",
    readTime: "7 min read",
    keywords: ["coffee bean trading India UAE", "coffee beans to Dubai", "green coffee trade UAE", "Indian coffee export UAE", "coffee trader Kochi"],
    image: IMAGES.coffeeSack,
    excerpt: "From a sample in Kochi to bags in a Dubai roastery — how a coffee trade is put together.",
    answer:
      "A coffee bean trade from India to the UAE starts with choosing the species, processing and grade, approving a sample and agreeing price — outright or as a differential to ICE futures — then contracting moisture and defect limits, quantity, shipment period, Incoterm and payment. The coffee ships in 60 kg bags with a quality report, phytosanitary certificate and certificate of origin, often preferential under India–UAE CEPA, to Jebel Ali or Khorfakkan. Versa Traders recently traded 160 MT of coffee beans to the UAE this way.",
    sections: [
      {
        heading: "Which Indian coffee do UAE buyers trade?",
        body: [],
        bullets: [
          "Robusta Cherry and Robusta Parchment for espresso blends",
          "Plantation (washed Arabica) for filter and specialty roasts",
          "Arabica Cherry for body and value",
        ],
      },
      {
        heading: "How is the price agreed?",
        body: ["Either as a fixed outright price, or as a differential to the ICE Robusta (London) or ICE 'C' Arabica (New York) futures price, fixed before shipment."],
      },
      {
        heading: "What goes into the contract?",
        body: [],
        bullets: ["Grade, screen size, moisture and defect limits", "Quantity and bag type", "Shipment period", "Incoterm — FOB, CFR or CIF", "Payment terms", "Quality and arbitration terms"],
      },
      {
        heading: "What does 160 MT of coffee look like?",
        body: ["About 2,670 bags of 60 kg. Versa Traders recently traded 160 MT of coffee beans to the UAE, prepared and checked lot by lot against one contract specification."],
      },
    ],
    faqs: [CEPA_FAQ],
    relatedLinks: [COFFEE_TRADING, COFFEE_UAE, COFFEE_PRICE],
  },
  {
    slug: "how-to-buy-green-coffee-beans-in-bulk-from-india",
    title: "How to Buy Green Coffee Beans in Bulk from India: A Step-by-Step Guide for Roasters and Importers",
    metaDescription:
      "Step-by-step guide to buying unroasted green coffee beans in bulk from India: grades, samples, contracts, moisture limits, packing, container loads, documents and payment.",
    category: "Trade",
    date: "2026-10-06",
    readTime: "7 min read",
    keywords: ["buy green coffee beans bulk India", "bulk coffee beans supplier", "wholesale green coffee India", "import coffee beans from India", "green coffee buying guide"],
    image: IMAGES.coffeeBeans,
    excerpt: "Six steps from first enquiry to a container of green coffee at your door.",
    answer:
      "To buy green coffee beans in bulk from India: choose the species, processing and grade; request a sample from the offered lot; agree price, specification and shipment period in a contract; confirm packing (usually 60 kg jute bags) and container load (about 19.2 tonnes in a 20ft); agree payment terms; and receive the quality report, phytosanitary certificate, certificate of origin and bill of lading with the shipment.",
    sections: [
      {
        heading: "Step 1: Choose the coffee",
        body: ["Decide on Robusta or Arabica, washed or natural, and a size grade such as AA, A, AB or PB."],
      },
      {
        heading: "Step 2: Approve a sample",
        body: ["Roast and cup a sample from the actual lot before you sign."],
      },
      {
        heading: "Step 3: Contract",
        body: ["Fix price, grade, moisture and defect limits, quantity, shipment period, Incoterm and payment terms in writing."],
      },
      {
        heading: "Step 4: Packing and loading",
        body: ["Green coffee ships in 60 kg jute bags, with liners on request. A 20ft container holds about 320 bags, or 19.2 tonnes."],
      },
      {
        heading: "Step 5: Documents and arrival",
        body: ["Expect a quality report, phytosanitary certificate, certificate of origin, invoice, packing list and bill of lading."],
      },
    ],
    faqs: [
      { question: "What is the minimum bulk order for green coffee?", answer: "Usually one 20ft container, about 19.2 tonnes. Smaller trial lots can be arranged for new buyers." },
    ],
    relatedLinks: [{ label: "Green coffee beans", href: "/traders/green-coffee-beans" }, COFFEE_TRADING, COFFEE_PRICE],
  },
  {
    slug: "how-green-coffee-prices-are-set",
    title: "How Green Coffee Prices Are Set: ICE Futures, Differentials and Outright Prices",
    metaDescription:
      "Plain-English explanation of green coffee pricing: ICE 'C' Arabica and ICE Robusta futures, origin differentials, outright prices, price fixing and why quotes expire quickly.",
    category: "Trade",
    date: "2026-10-05",
    readTime: "5 min read",
    keywords: ["green coffee price", "coffee differential pricing", "ICE robusta futures", "coffee C price", "coffee bean price India"],
    image: IMAGES.coffeePlants,
    excerpt: "The number on a coffee contract is built from two parts. Here is how they fit.",
    answer:
      "Green coffee is usually priced as a futures price plus or minus a differential. Arabica refers to the ICE 'C' futures market in New York and Robusta to the ICE Robusta futures market in London; the differential reflects origin, grade, quality and supply. The futures part is \"fixed\" on an agreed date. Some buyers prefer a single outright price instead. Because futures move daily, coffee quotes are valid only briefly.",
    sections: [
      {
        heading: "What is the futures price?",
        body: ["The traded benchmark for coffee. It moves every trading day with global supply, demand, weather and currency."],
      },
      {
        heading: "What is a differential?",
        body: ["A premium or discount to the futures price for a particular origin and grade — for example an Indian Robusta Parchment AB against the London Robusta contract."],
      },
      {
        heading: "Outright or differential: which should you choose?",
        body: ["Outright prices are simpler for smaller buyers. Differential contracts let larger buyers choose when to fix the futures part of the price."],
      },
    ],
    faqs: [
      { question: "Why does my coffee quote expire after a day or two?", answer: "Because the futures price underneath it changes every trading day." },
    ],
    relatedLinks: [COFFEE_TRADING, { label: "Robusta green coffee", href: "/traders/robusta-green-coffee-beans" }, COFFEE_PRICE],
  },
]
