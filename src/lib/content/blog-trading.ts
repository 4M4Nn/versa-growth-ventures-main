import type { BlogPost } from "@/types"
import { IMAGES } from "./site"

const COFFEE_TRADING = { label: "Coffee bean trading", href: "/traders/coffee-bean-trading" }
const COFFEE_UAE = { label: "Coffee beans supplier — UAE", href: "/traders/coffee-beans-supplier-uae-dubai" }
const COFFEE_PRICE = { label: "Request coffee samples & price", href: "/contact?enquiry=coffee" }

const CEPA_FAQ = {
  question: "Can Indian coffee enter the UAE at reduced duty under CEPA?",
  answer:
    "Eligible Indian-origin goods can claim preferential treatment under the India–UAE Comprehensive Economic Partnership Agreement with a preferential certificate of origin issued for the consignment. Versa International Traders arranges the certificate where the product qualifies.",
}

export const BLOG_TRADING_POSTS: BlogPost[] = [
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
      "A coffee bean trade from India to the UAE starts with choosing the species, processing and grade, approving a sample and agreeing price — outright or as a differential to ICE futures — then contracting moisture and defect limits, quantity, shipment period, Incoterm and payment. The coffee ships in 60 kg bags with a quality report, phytosanitary certificate and certificate of origin, often preferential under India–UAE CEPA, to Jebel Ali or Khorfakkan. Versa International Traders recently traded 160 MT of coffee beans to the UAE this way.",
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
        body: ["About 2,670 bags of 60 kg. Versa International Traders recently traded 160 MT of coffee beans to the UAE, prepared and checked lot by lot against one contract specification."],
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
