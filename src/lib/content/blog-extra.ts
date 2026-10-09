import type { BlogPost } from "@/types"
import { IMAGES } from "./site"

export const BLOG_EXTRA_POSTS: BlogPost[] = [
  {
    slug: "incoterms-fob-cfr-cif-explained",
    title: "Incoterms Explained for Coffee and Spice Trade: FOB vs CFR vs CIF",
    metaDescription:
      "FOB, CFR and CIF explained for buyers and exporters of coffee and spices: who pays freight and insurance, where risk passes, and which term to choose.",
    category: "Trade",
    date: "2026-09-27",
    readTime: "6 min read",
    keywords: ["Incoterms explained", "FOB vs CIF", "CFR meaning", "Incoterms coffee trade", "FOB Kochi"],
    image: IMAGES.kochiTerminal,
    excerpt: "Three letters on a contract decide who pays for the ship, who insures the cargo and who carries the risk at sea.",
    answer:
      "Under FOB the seller loads the goods on the vessel and the buyer pays ocean freight and insurance. Under CFR the seller also pays freight to the destination port, and under CIF the seller pays freight and insurance. In all three, risk passes to the buyer once the goods are loaded at the origin port.",
    sections: [
      {
        heading: "What does FOB mean?",
        body: [
          "Free On Board: the seller clears the goods for export and delivers them loaded on the vessel nominated by the buyer at the origin port — for example FOB Kochi. The buyer books and pays the ocean freight, insures the cargo and handles everything at destination.",
        ],
      },
      {
        heading: "What does CFR mean?",
        body: [
          "Cost and Freight: the seller also books and pays ocean freight to the named destination port — for example CFR Jebel Ali. Risk still passes to the buyer at loading, so the buyer should insure the cargo.",
        ],
      },
      {
        heading: "What does CIF mean?",
        body: [
          "Cost, Insurance and Freight: as CFR, plus the seller buys minimum marine insurance for the buyer's benefit. Many buyers who want a delivered price with less administration choose CIF.",
        ],
      },
      {
        heading: "Which Incoterm should a buyer choose?",
        body: ["A simple rule of thumb:"],
        bullets: [
          "Choose FOB if you have a strong forwarder and want control of freight",
          "Choose CFR or CIF if you want one delivered price and your supplier has reliable logistics",
          "Always state the named port and the Incoterms version (e.g. Incoterms 2020) in the contract",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Incoterms does Versa International Traders offer?",
        answer: "FOB Indian port as standard, and CFR or CIF to your destination port with freight handled by Versa Logistics.",
      },
      {
        question: "Does CIF mean the seller is responsible if cargo is damaged at sea?",
        answer: "No. Under CIF, risk passes to the buyer once goods are loaded; the seller's insurance policy is for the buyer's benefit to claim against.",
      },
    ],
    relatedLinks: [
      { label: "Samples & bulk orders", href: "/traders/samples-and-bulk-orders" },
      { label: "Glossary: FOB, CIF & more", href: "/glossary" },
    ],
  },
  {
    slug: "phytosanitary-certificate-india-export-guide",
    title: "Phytosanitary Certificates for Exporting Coffee and Spices from India",
    metaDescription:
      "What a phytosanitary certificate is, when coffee and spice exports from India need one, how inspection works, and how to avoid delays at destination.",
    category: "Logistics",
    date: "2026-09-25",
    readTime: "5 min read",
    keywords: ["phytosanitary certificate India", "phytosanitary certificate coffee export", "spice export certificate", "plant quarantine India export"],
    image: IMAGES.cardamomBowl,
    excerpt: "The plant-health certificate that decides whether your coffee or spices clear at the other end.",
    answer:
      "A phytosanitary certificate is an official document confirming that plant products have been inspected and meet the importing country's plant-health rules. Most destinations, including the UAE, require one for green coffee and whole spices. It is issued by India's plant quarantine authority after inspection of the consignment, close to shipment.",
    sections: [
      {
        heading: "Why do coffee and spices need a phytosanitary certificate?",
        body: [
          "Green coffee beans and whole spices are plant products that can carry pests or diseases. Importing countries protect their agriculture by requiring certification that each consignment was inspected and found free of regulated pests.",
        ],
      },
      {
        heading: "How is the certificate issued?",
        body: ["The usual sequence is:"],
        bullets: [
          "Apply online with invoice, packing list and consignment details",
          "The consignment is inspected (and fumigated if required)",
          "The certificate is issued for that specific shipment",
          "The original travels with the shipping documents to the consignee",
        ],
      },
      {
        heading: "What causes delays?",
        body: [
          "Mismatches between the certificate and the invoice or bill of lading — quantities, descriptions, consignee names — are the most common problem. Apply early and cross-check every detail.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does roasted coffee need a phytosanitary certificate?",
        answer: "Requirements for processed products differ by country. Green (unroasted) coffee, as a plant product, generally does.",
      },
    ],
    relatedLinks: [
      { label: "Export documentation services", href: "/logistics/export-documentation" },
      { label: "Quality & certification", href: "/traders/quality-certification" },
    ],
  },
  {
    slug: "india-uae-cepa-certificate-of-origin-guide",
    title: "India–UAE CEPA: How a Certificate of Origin Can Cut Import Duty",
    metaDescription:
      "How the India–UAE Comprehensive Economic Partnership Agreement works for coffee and spice importers, and why the preferential certificate of origin matters.",
    category: "Trade",
    date: "2026-09-21",
    readTime: "5 min read",
    keywords: ["India UAE CEPA", "CEPA certificate of origin", "preferential certificate of origin India", "import duty UAE India goods"],
    image: IMAGES.jebelAli,
    excerpt: "A trade agreement only saves money if the paperwork is right.",
    answer:
      "The India–UAE Comprehensive Economic Partnership Agreement (CEPA), in force since 2022, lowers or removes UAE import duty on many Indian-origin goods. To claim the benefit, the importer must present a valid preferential certificate of origin issued for the shipment, and the goods must meet the agreement's rules of origin.",
    sections: [
      {
        heading: "What is CEPA?",
        body: [
          "CEPA is a bilateral trade agreement between India and the UAE designed to reduce tariffs and simplify trade. For many product lines, duty on Indian goods entering the UAE is reduced or eliminated.",
        ],
      },
      {
        heading: "What does the importer need?",
        body: [],
        bullets: [
          "A preferential certificate of origin under CEPA for the specific consignment",
          "Goods that meet the agreement's rules of origin (for coffee and spices grown in India, origin is usually straightforward)",
          "Consistent details across the certificate, invoice and bill of lading",
        ],
      },
      {
        heading: "Who confirms eligibility?",
        body: [
          "The exporter applies for the certificate in India; the importer's customs broker confirms the preferential rate for the product's tariff code at clearance in the UAE.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Versa International Traders issue a CEPA certificate of origin?",
        answer: "Where the product qualifies, we apply for the appropriate preferential certificate of origin for your shipment.",
      },
    ],
    relatedLinks: [
      { label: "Coffee & spice supplier for the UAE", href: "/traders/coffee-and-spice-supplier-uae" },
      { label: "Export documentation", href: "/logistics/export-documentation" },
    ],
  },
  {
    slug: "letter-of-credit-vs-advance-payment-commodity-trade",
    title: "Letter of Credit vs Advance Payment: Paying for Coffee and Spice Imports Safely",
    metaDescription:
      "Compare payment methods for bulk coffee and spice orders: advance, advance plus balance against documents, cash against documents and letters of credit.",
    category: "Trade",
    date: "2026-09-17",
    readTime: "6 min read",
    keywords: ["letter of credit commodity trade", "cash against documents", "advance payment import", "payment terms spice import"],
    image: IMAGES.coffeeSack,
    excerpt: "The right payment term protects both buyer and seller — and keeps the container moving.",
    answer:
      "Common payment methods for bulk coffee and spice orders are full advance, a partial advance with the balance against shipping documents, cash against documents (CAD) through banks, and a letter of credit (L/C). An L/C gives both sides the most protection but costs more and demands exact documents; partial advance plus balance against documents is a common middle ground.",
    sections: [
      {
        heading: "How does a partial advance work?",
        body: [
          "The buyer pays a portion (for example 20–30%) on contract to confirm the order; the balance is paid when the seller shares copies of the shipping documents, before originals are released. It balances risk for new relationships.",
        ],
      },
      {
        heading: "What is cash against documents?",
        body: [
          "The seller's bank sends the original documents to the buyer's bank, which releases them only when the buyer pays. The buyer cannot take the cargo without paying, but the seller has no guarantee the buyer will pay.",
        ],
      },
      {
        heading: "When is a letter of credit worth it?",
        body: [
          "For large orders or new trading partners, an L/C adds a bank's payment undertaking. The seller must present documents that match the L/C terms exactly, so draft L/C terms carefully and agree them with the seller before opening.",
        ],
      },
    ],
    faqs: [
      {
        question: "What payment terms does Versa International Traders accept?",
        answer: "Terms are agreed per contract — for example an advance with the balance against documents, or a letter of credit for larger orders.",
      },
    ],
    relatedLinks: [
      { label: "Samples & bulk orders", href: "/traders/samples-and-bulk-orders" },
      { label: "Glossary: letter of credit", href: "/glossary" },
    ],
  },
  {
    slug: "black-pepper-steam-sterilisation-why-it-matters",
    title: "Steam-Sterilised Black Pepper: Why Food Manufacturers Ask for It",
    metaDescription:
      "What steam sterilisation does to black pepper, why food manufacturers and some markets require it, and how it affects flavour and cost.",
    category: "Trade",
    date: "2026-09-14",
    readTime: "4 min read",
    keywords: ["steam sterilised black pepper", "pepper microbiology", "sterilised spices supplier", "black pepper food safety"],
    image: IMAGES.pepperMacro,
    excerpt: "Pepper is a natural, sun-dried product. For some uses, that means an extra step before it reaches a factory.",
    answer:
      "Steam sterilisation treats whole black pepper with controlled steam to reduce its natural microbial load, so it meets strict microbiological limits set by food manufacturers and some importing markets. Done correctly, it preserves most of the pepper's aroma and pungency.",
    sections: [
      {
        heading: "Why does pepper need sterilising at all?",
        body: [
          "Black pepper is harvested and sun-dried outdoors, so it naturally carries bacteria and moulds from the environment. That is harmless for most home cooking, where pepper is heated, but ready-to-eat food manufacturers often need tighter limits.",
        ],
      },
      {
        heading: "Who asks for sterilised pepper?",
        body: [],
        bullets: [
          "Ready-meal, sauce and snack manufacturers",
          "Seasoning blenders supplying food factories",
          "Buyers in markets with strict microbiological standards",
        ],
      },
      {
        heading: "Does sterilisation change the flavour?",
        body: [
          "Steam sterilisation is designed to minimise loss of volatile oils. Ask for a sample of the treated lot and compare it with untreated pepper before committing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Versa International Traders supply steam-sterilised pepper?",
        answer: "Yes, steam sterilisation can be arranged for buyers who require it, with laboratory testing on request.",
      },
    ],
    relatedLinks: [
      { label: "Malabar black pepper MG1", href: "/traders/malabar-black-pepper-mg1" },
      { label: "Quality & certification", href: "/traders/quality-certification" },
    ],
  },
  {
    slug: "how-to-prevent-container-rain-coffee-shipping",
    title: "How to Prevent Container Rain When Shipping Coffee and Spices",
    metaDescription:
      "What causes container rain, how it damages green coffee and spices, and a practical checklist to prevent condensation in shipping containers.",
    category: "Logistics",
    date: "2026-09-11",
    readTime: "5 min read",
    keywords: ["container rain", "condensation in shipping container", "coffee shipping moisture", "desiccant container coffee"],
    image: IMAGES.coffeeBeans,
    excerpt: "The biggest threat to a coffee container is often the water that was already inside it.",
    answer:
      "Container rain is condensation that forms on the inside of a container roof as temperatures change during a voyage and then drips onto the cargo. Prevent it by shipping properly dried cargo, rejecting damp containers, lining the container with kraft paper or liners, adding desiccants and never loading in rain.",
    sections: [
      {
        heading: "Why is coffee so vulnerable?",
        body: [
          "Green coffee is hygroscopic — it absorbs and releases moisture. Warm, humid air trapped at loading in Kerala can condense when the container cools, then wet the top layer of bags, leading to mould and quality claims.",
        ],
      },
      {
        heading: "A prevention checklist",
        body: [],
        bullets: [
          "Dry cargo to the contracted moisture level before packing",
          "Inspect and reject containers with holes, damp floors or odours",
          "Line roof and walls with kraft paper or a container liner",
          "Add desiccant strips sized for the voyage length",
          "Keep bags off the floor and walls with dunnage",
          "Stuff under cover — never in the rain",
        ],
      },
      {
        heading: "Does voyage length matter?",
        body: [
          "Yes. Longer voyages and routes with large temperature swings increase risk. Short routes such as Kochi to the Gulf help, but the same precautions still apply.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are desiccants enough on their own?",
        answer: "No. Desiccants work best alongside dry cargo, a dry container and liners — they cannot compensate for wet cargo.",
      },
    ],
    relatedLinks: [
      { label: "Coffee & spice cargo handling", href: "/logistics/coffee-and-spice-cargo" },
      { label: "Container stuffing & loading", href: "/logistics/container-stuffing-and-loading" },
    ],
  },
  {
    slug: "robusta-vs-arabica-green-coffee-buyers-guide",
    title: "Robusta vs Arabica: A Buyer's Guide to Indian Green Coffee",
    metaDescription:
      "Robusta vs Arabica green coffee from India: flavour, caffeine, processing, grades, uses and price — and how roasters decide what to buy.",
    category: "Trade",
    date: "2026-09-09",
    readTime: "6 min read",
    keywords: ["Robusta vs Arabica", "Indian green coffee buyers guide", "Robusta or Arabica for espresso", "green coffee types"],
    image: IMAGES.coffeePlants,
    excerpt: "Two species, two cups, two markets — and most roasters need both.",
    answer:
      "Arabica is sweeter and more acidic with complex flavour, grown at higher altitude and usually priced higher. Robusta is heavier-bodied, lower in acidity and higher in caffeine, and is favoured for espresso crema and instant coffee. India produces both, including washed Robusta Parchment and washed Arabica Plantation grades.",
    sections: [
      {
        heading: "How do Robusta and Arabica taste different?",
        body: [
          "Arabica tends towards sweetness, acidity and aromatic complexity; Robusta brings body, bitterness and a thick crema. Indian washed Robusta is known for being cleaner than many Robustas, which makes it popular in quality espresso blends.",
        ],
      },
      {
        heading: "Which is better for espresso?",
        body: [
          "Many espresso blends combine both: Arabica for sweetness and aroma, Robusta for body and crema. The ratio is a matter of style — Italian-style blends often use more Robusta.",
        ],
      },
      {
        heading: "Which is better for instant coffee?",
        body: [
          "Robusta, particularly natural Robusta Cherry, dominates soluble coffee because of its body, yield and cost.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Robusta have more caffeine than Arabica?",
        answer: "Yes. Robusta typically contains roughly twice the caffeine of Arabica.",
      },
    ],
    relatedLinks: [
      { label: "Robusta green coffee beans", href: "/traders/robusta-green-coffee-beans" },
      { label: "Arabica green coffee beans", href: "/traders/arabica-green-coffee-beans" },
    ],
  },
  {
    slug: "how-cardamom-is-harvested-and-dried-kerala",
    title: "How Green Cardamom Is Harvested and Dried in Kerala",
    metaDescription:
      "From Idukki's hills to the export bag: how Kerala's green cardamom is picked, dried, graded and packed — and why drying decides the colour buyers pay for.",
    category: "Trade",
    date: "2026-09-06",
    readTime: "5 min read",
    keywords: ["cardamom harvesting Kerala", "cardamom drying process", "Idukki cardamom", "green cardamom colour"],
    image: IMAGES.cardamomPods,
    excerpt: "The green that buyers pay for is created in the drying room.",
    answer:
      "Kerala's green cardamom is hand-picked in rounds as capsules ripen, then dried in curing chambers with controlled heat that removes moisture while preserving the green colour. The dried pods are cleaned, sorted by size (for example 8 mm, 7 mm, 6 mm), checked for colour and litre weight, and packed for export.",
    sections: [
      {
        heading: "Where is cardamom grown in Kerala?",
        body: [
          "Most of India's small green cardamom comes from the Cardamom Hills of Idukki district, where altitude, rainfall and forest shade suit the plant.",
        ],
      },
      {
        heading: "Why is cardamom picked by hand?",
        body: [
          "Capsules on the same plant ripen at different times, so they are harvested selectively in several rounds during the season. Picking at the right maturity gives fuller pods and better colour.",
        ],
      },
      {
        heading: "How does drying affect quality?",
        body: [
          "Controlled drying in curing chambers keeps the pods green and aromatic. Sun-drying or excessive heat can bleach or darken the pods, lowering their value.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is cardamom graded after drying?",
        answer: "By sieving into size grades, then checking colour, litre weight, moisture and the share of empty or split pods.",
      },
    ],
    relatedLinks: [
      { label: "Green cardamom from Versa International Traders", href: "/traders/cardamom" },
      { label: "Cardamom grades explained", href: "/blog/cardamom-grades-8mm-7mm-buyers-guide" },
    ],
  },
  {
    slug: "shipping-from-india-to-saudi-arabia-guide",
    title: "Shipping from India to Saudi Arabia: Ports, Documents and Transit",
    metaDescription:
      "A practical guide to sea freight from India to Saudi Arabia: Jeddah vs Dammam, direct vs transhipment, documents and planning tips for exporters.",
    category: "Logistics",
    date: "2026-09-03",
    readTime: "5 min read",
    keywords: ["shipping India to Saudi Arabia", "Kochi to Jeddah shipping", "sea freight India Dammam", "export to Saudi Arabia from India"],
    image: IMAGES.shipAerial,
    excerpt: "Two coasts, two main ports — pick the one closest to your buyer.",
    answer:
      "Sea freight from India to Saudi Arabia usually goes to Jeddah on the Red Sea coast or Dammam on the Arabian Gulf coast, on direct services or via transhipment hubs. Choose the port nearest the consignee, and prepare an invoice, packing list, bill of lading, certificate of origin and any product certificates the importer requires.",
    sections: [
      {
        heading: "Jeddah or Dammam?",
        body: [
          "Jeddah (Jeddah Islamic Port) serves the western region including Mecca and Medina; Dammam (King Abdulaziz Port) serves the Eastern Province and, by road, Riyadh. The right choice depends on where the consignee's warehouse is.",
        ],
      },
      {
        heading: "Direct or transhipment?",
        body: [
          "Some carriers offer direct India–Saudi services; others tranship through hubs such as Jebel Ali. Compare total transit and cost for your shipment date.",
        ],
      },
      {
        heading: "What documents are needed?",
        body: [
          "Expect a commercial invoice, packing list, bill of lading and certificate of origin, with health or phytosanitary certificates for food and plant products. Saudi importers may require product registration or certificate attestation — confirm with your buyer early.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Versa Logistics ship to Saudi Arabia?",
        answer: "Yes. We book sea freight to Jeddah and Dammam on the carriers serving each port for your shipment date.",
      },
    ],
    relatedLinks: [
      { label: "Shipping to the GCC", href: "/logistics/gcc-shipping" },
      { label: "Sea freight from India", href: "/logistics/sea-freight" },
    ],
  },
]
