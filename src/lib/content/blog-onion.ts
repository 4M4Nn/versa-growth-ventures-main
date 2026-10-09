import type { BlogPost } from "@/types"
import { ONION_IMAGES } from "./traders-onion"

const ONIONS = { label: "Onions — export & trading", href: "/traders/onions" }
const PRICE = { label: "Request onion samples & price", href: "/contact?enquiry=onion" }

// Buyer guides for Indian onion imports
export const BLOG_ONION_POSTS: BlogPost[] = [
  {
    slug: "how-to-import-onions-from-india-buyers-guide",
    title: "How to Import Onions from India: A Buyer's Guide to Varieties, Sizes, Packing and Documents",
    metaDescription:
      "Step-by-step guide for importers buying onions from India: choosing a variety and size band, packing, reefer shipping, phytosanitary documents, export policy checks and payment terms.",
    category: "Trade",
    date: "2026-10-05",
    readTime: "8 min read",
    keywords: ["import onions from India", "buy onions from India", "Indian onion supplier", "onion import guide", "onion exporter India"],
    image: ONION_IMAGES.redOnions,
    excerpt: "Everything an importer needs to settle before the first container of Indian onions leaves port.",
    answer:
      "To import onions from India, choose the variety and size band (for example Nashik red onion, 45–65 mm), agree packing such as 25 kg mesh bags, confirm the shipment month and Incoterm, check India's current onion export policy, and make sure the exporter supplies a phytosanitary certificate, certificate of origin, commercial invoice, packing list and bill of lading. Onions usually ship in refrigerated or ventilated 40ft containers carrying around 28–29 tonnes.",
    sections: [
      {
        heading: "Step 1: Which variety should you buy?",
        body: [],
        bullets: [
          "Nashik red onion — the large red onion most markets expect from India",
          "Bangalore Rose onion — small and rose-coloured, mainly for pickling and processing",
          "White onion — milder, used for processing and some retail markets",
          "Small onion or shallot — 20–30 mm, for South and Southeast Asian cooking",
        ],
      },
      {
        heading: "Step 2: Which size band and packing?",
        body: [
          "Red onions are sold by diameter: 25–40 mm, 40–60 mm, 45–65 mm or 55 mm and above. Choose by your customers — retail chains prefer uniform larger sizes, food service and processors buy for value. Packing is usually in 5, 10, 20, 25 or 50 kg leno mesh bags, which let the onions breathe.",
        ],
      },
      {
        heading: "Step 3: How are onions shipped?",
        body: [
          "In 40ft refrigerated or ventilated containers, with temperature and ventilation settings agreed with the shipping line. Shorter voyages — India to the Gulf, South Asia and Southeast Asia — suit onions well. Ask the exporter to quote CFR or CIF if you want delivery to your port.",
        ],
      },
      {
        heading: "Step 4: Which documents do you need?",
        body: [],
        bullets: [
          "Phytosanitary certificate issued by India's plant quarantine authority",
          "Certificate of origin",
          "Commercial invoice and packing list",
          "Bill of lading",
          "Quality and size-grading report",
          "Any import permit your own country requires",
        ],
      },
      {
        heading: "Step 5: Why check India's export policy?",
        body: [
          "India changes onion export rules when domestic prices rise — through a minimum export price, an export duty or a temporary restriction. A reliable exporter checks the current DGFT notification before signing and builds the policy position into the contract.",
        ],
      },
    ],
    faqs: [
      { question: "What is the minimum order for onions from India?", answer: "Most export orders are in full containers. A 40ft reefer carries around 28–29 tonnes of onions; some suppliers also load 20ft containers for trial orders." },
      { question: "Can I get samples before ordering onions?", answer: "Yes. Versa International Traders sends samples and a size-grading report from the offered lot before you commit." },
    ],
    relatedLinks: [ONIONS, PRICE, { label: "Nashik red onion", href: "/traders/nashik-red-onion" }],
  },
  {
    slug: "onion-sizes-and-grades-for-export",
    title: "Onion Sizes and Grades for Export: 25–40 mm, 40–60 mm, 45–65 mm and 55 mm+ Explained",
    metaDescription:
      "What onion size bands mean in the export trade, which buyers use each grade, and the quality checks every export onion lot should pass.",
    category: "Trade",
    date: "2026-10-05",
    readTime: "5 min read",
    keywords: ["onion sizes for export", "onion grading mm", "55mm onion", "onion export specification", "onion quality standards"],
    image: ONION_IMAGES.meshBags,
    excerpt: "An onion contract lives or dies on its size band. Here is what each one means.",
    answer:
      "Export onions are graded by bulb diameter. Common bands are 25–40 mm for value and processing, 40–60 mm for food service and general wholesale, 45–65 mm for mainstream retail and 55 mm and above for premium retail. Small onions are usually 20–30 mm. Every lot should also be well cured, firm, dry-necked, free from rot and sprouting, and uniform in colour.",
    sections: [
      {
        heading: "Which buyers use which size?",
        body: [],
        bullets: [
          "25–40 mm — processors, pickling and price-sensitive markets",
          "40–60 mm — food service, restaurants and general wholesale",
          "45–65 mm — supermarket and mainstream retail packs",
          "55 mm and above — premium retail and buyers who want a uniform large bulb",
          "20–30 mm small onion — South and Southeast Asian home cooking",
        ],
      },
      {
        heading: "What quality checks matter besides size?",
        body: [],
        bullets: [
          "Curing — dry outer skins and dry, tight necks",
          "Firmness — no soft, hollow or bruised bulbs",
          "Freedom from rot, mould and sprouting",
          "Colour uniformity within the lot",
          "Clean bulbs, without soil or loose skins",
        ],
      },
      {
        heading: "How is grading checked?",
        body: [
          "Onions are passed over grading screens or sorted by hand to the agreed band, then sampled before packing. Ask for a grading report with each lot, and for photographs of the packed bags before stuffing.",
        ],
      },
    ],
    faqs: [
      { question: "Is a bigger onion always better?", answer: "No. Bigger onions sell for more in retail, but many food service and processing buyers prefer mid-sized bulbs for value and yield." },
    ],
    relatedLinks: [ONIONS, PRICE],
  },
  {
    slug: "shipping-onions-in-reefer-containers",
    title: "Shipping Onions in Containers: Reefer vs Ventilated, Load Weights and How to Avoid Spoilage",
    metaDescription:
      "How onions are shipped by sea: refrigerated vs ventilated containers, how many tonnes fit in a 40ft, stuffing practices and the mistakes that cause rot and sprouting in transit.",
    category: "Trade",
    date: "2026-10-04",
    readTime: "6 min read",
    keywords: ["shipping onions reefer container", "onion container load", "onion export shipping", "how many tons of onion in 40ft container", "onion transit spoilage"],
    image: ONION_IMAGES.sacks,
    excerpt: "Onions are alive in the container. Ship them like it.",
    answer:
      "Onions are shipped in refrigerated (reefer) or ventilated containers so that heat and moisture can escape. A 40ft reefer typically carries around 28–29 tonnes of onions in mesh bags. To avoid spoilage, ship only well-cured onions, pre-cool where possible, stack bags so air can circulate, keep the agreed temperature and ventilation settings, and keep the voyage short.",
    sections: [
      {
        heading: "Reefer or ventilated container?",
        body: [
          "Refrigerated containers hold a set temperature with fresh-air ventilation and give the most control, especially on longer voyages or in hot weather. Ventilated containers rely on airflow and suit shorter, cooler routes. The shipping line and exporter agree the settings before loading.",
        ],
      },
      {
        heading: "How many tonnes of onions fit in a container?",
        body: [
          "A 40ft reefer typically takes around 28–29 tonnes of onions in mesh bags, depending on bag size and stacking pattern. A 20ft container takes roughly half. The exact figure is confirmed against the carrier's weight limits before booking.",
        ],
      },
      {
        heading: "What causes onions to spoil in transit?",
        body: [],
        bullets: [
          "Loading onions that were not fully cured",
          "Stuffing warm onions straight from the field or the sun",
          "Blocking airflow by stacking bags too tightly",
          "Wrong temperature or ventilation settings",
          "Long transhipment delays",
        ],
      },
      {
        heading: "Who arranges the container?",
        body: [
          "Under CFR or CIF the exporter books it. Versa International Traders ships onions with its sister venture Versa Logistics, which books reefers on India's west-coast lanes to the Gulf and beyond.",
        ],
      },
    ],
    faqs: [
      { question: "How long do onions last in a reefer container?", answer: "Well-cured onions held at the right settings travel well over typical voyages from India to Asia and the Gulf. Long transhipments raise the risk, so direct sailings are preferred." },
    ],
    relatedLinks: [ONIONS, { label: "Port-to-port shipping", href: "/logistics/port-to-port-shipping" }, PRICE],
  },
  {
    slug: "india-onion-harvest-seasons-kharif-rabi",
    title: "India's Onion Seasons: Kharif, Late Kharif and Rabi — When to Buy and Why It Matters",
    metaDescription:
      "When India harvests onions, how the kharif, late-kharif and rabi crops differ in storage life, and how importers should plan purchases around the Indian onion calendar.",
    category: "Trade",
    date: "2026-10-04",
    readTime: "5 min read",
    keywords: ["India onion season", "rabi onion", "kharif onion", "best time to buy onions from India", "onion harvest calendar India"],
    image: ONION_IMAGES.field,
    excerpt: "Three harvests, three different onions. Plan your buying around them.",
    answer:
      "India harvests onions in three seasons. The kharif crop is harvested from about October to December, the late-kharif crop from about January to March, and the rabi crop from about March to May. Rabi onions have thicker skins and store for months, so they supply much of the export trade through the summer and autumn. Kharif onions keep less well and are best shipped soon after harvest.",
    sections: [
      {
        heading: "What are the three onion seasons?",
        body: [],
        bullets: [
          "Kharif — sown with the monsoon, harvested about October to December",
          "Late kharif — harvested about January to March",
          "Rabi — sown in winter, harvested about March to May; the largest and best-storing crop",
        ],
      },
      {
        heading: "Why does the season matter to an importer?",
        body: [
          "Storage life decides how far onions can travel and how long they last on arrival. Rabi onions, stored in well-ventilated sheds, supply exports for months after harvest. Kharif onions are fresher but softer-skinned and should move quickly.",
        ],
      },
      {
        heading: "When do prices usually move?",
        body: [
          "Prices tend to firm as stored rabi stocks run down before the new kharif crop arrives, and weather that damages a crop can lift prices quickly. That is also when India is most likely to tighten export policy, so buyers plan ahead.",
        ],
      },
    ],
    faqs: [
      { question: "Which Indian onion stores longest?", answer: "Rabi-season onions, harvested in spring, have the thickest skins and the longest storage life." },
    ],
    relatedLinks: [ONIONS, { label: "Nashik red onion", href: "/traders/nashik-red-onion" }, PRICE],
  },
  {
    slug: "india-onion-export-policy-mep-duty-explained",
    title: "India's Onion Export Policy Explained: Minimum Export Price, Export Duty and Restrictions",
    metaDescription:
      "Why India changes its onion export rules, what a minimum export price (MEP), an export duty and a restriction mean for buyers, and how to protect your contract.",
    category: "Trade",
    date: "2026-10-03",
    readTime: "5 min read",
    keywords: ["India onion export policy", "onion MEP", "onion export duty India", "onion export ban India", "DGFT onion"],
    image: ONION_IMAGES.smallOnions,
    excerpt: "Onions are politically sensitive in India. Here is how the export rules work and how to plan around them.",
    answer:
      "Onions are an everyday staple in India, so when domestic prices rise the government can limit exports. The main tools are a minimum export price (MEP) below which onions may not be exported, an export duty that raises the cost of exporting, and temporary restrictions or prohibitions. The Directorate General of Foreign Trade (DGFT) and the finance ministry notify these measures. Buyers should ask their exporter to confirm the current position before each contract.",
    sections: [
      {
        heading: "What is a minimum export price?",
        body: ["An MEP is a floor price per tonne. Onions may not be exported below it, so it effectively raises the lowest price an overseas buyer can pay while it is in force."],
      },
      {
        heading: "What is an export duty?",
        body: ["An export duty is a percentage charged on the value of onions exported. It raises the exporter's cost, which usually feeds into the price quoted to buyers."],
      },
      {
        heading: "What happens during an export restriction?",
        body: [
          "Exports may be prohibited or allowed only under specific permissions for a period. Contracts that cannot be shipped in time may need to be renegotiated, which is why a clear policy clause in the contract matters.",
        ],
      },
      {
        heading: "How can buyers protect themselves?",
        body: [],
        bullets: [
          "Ask the exporter to confirm the current DGFT position before signing",
          "Agree in writing what happens if policy changes before shipment",
          "Keep shipment periods short and specific",
          "Buy in the main rabi storage season when supply is deepest",
        ],
      },
    ],
    faqs: [
      { question: "Where are India's onion export rules published?", answer: "Through notifications of the Directorate General of Foreign Trade (DGFT) and, for duties, the Ministry of Finance. Your exporter should track them for you." },
    ],
    relatedLinks: [ONIONS, PRICE, { label: "Onion trading worldwide", href: "/traders/onion-trading-worldwide" }],
  },
]
