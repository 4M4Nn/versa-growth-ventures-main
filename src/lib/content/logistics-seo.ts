import type { DivisionPage, FAQ } from "@/types"
import { IMAGES } from "./site"

/* ----------------------------------------------------------------------------
 * Freight quotation page (/logistics/freight-quote)
 * --------------------------------------------------------------------------*/
export const FREIGHT_QUOTE_PAGE = {
  metaTitle: "Get a Freight Quote — Best Freight Rates from Kochi, Kerala & India | Versa Logistics",
  metaDescription:
    "Request an itemised freight quotation from Versa Logistics, Kochi: sea freight FCL/LCL to Jebel Ali, Khorfakkan, the GCC and worldwide, with transport, documentation and stuffing. Competitive rates, every charge shown.",
  keywords: [
    "freight quote Kochi",
    "freight quotation India",
    "best freight rates Kerala",
    "sea freight quote India to UAE",
    "container shipping quote Kochi",
    "cheapest freight India to Dubai",
    "freight forwarder quotation",
    "logistics quote Kerala",
  ],
  eyebrow: "Versa Logistics — Freight Quotation",
  h1: "Get a freight quotation from Versa Logistics: competitive, itemised rates from Kochi to the UAE, the GCC and worldwide",
  lede:
    "Tell us what you are shipping and where it is going. We compare carriers, sailings and routes, and send back an itemised freight quote — ocean freight, port charges, transport and documents — so you can see exactly what you are paying for.",
  answer:
    "To get a freight quotation from Versa Logistics, share the cargo type, weight or volume, container type (20ft, 40ft or LCL), pickup location, destination port and cargo-ready date using the form, WhatsApp +91 79072 15816, or phone. Versa Logistics compares carriers and routes and sends an itemised quote covering ocean freight, origin charges, haulage, documentation and optional services.",
  formH2: "Request your freight quote",
  formIntro: "The more detail you share, the more accurate the quote. Fields marked * are required.",
  whyH2: "Why Versa Logistics freight quotes are different",
  why: [
    { title: "Itemised, line by line", body: "Ocean freight, surcharges, terminal handling, documentation and haulage are listed separately — no single lump sum hiding extras." },
    { title: "Routes compared for you", body: "Jebel Ali or Khorfakkan, direct or transhipment, 20ft or 40ft — we recommend the option with the lowest total landed cost for your delivery point." },
    { title: "Validity stated upfront", body: "Freight markets move. Every quote says how long it is valid so you can plan and book with confidence." },
    { title: "One accountable contact", body: "The person who quotes your shipment follows it through booking, stuffing, sailing and arrival." },
  ],
  includedH2: "What is included in a Versa Logistics freight quote?",
  included: [
    "Ocean freight and applicable carrier surcharges",
    "Origin terminal handling and documentation charges",
    "Road transport from your premises to the port",
    "Container stuffing supervision (if requested)",
    "Export documentation coordination",
    "Optional: marine insurance, fumigation and certificates",
  ],
  stepsH2: "How does the freight quotation process work?",
  steps: [
    { step: "01", title: "Share your shipment", body: "Cargo, quantity, container, pickup point, destination and ready date." },
    { step: "02", title: "We compare options", body: "Carriers, sailings, ports and container sizes are compared for total cost and transit." },
    { step: "03", title: "Itemised quote", body: "You receive a clear quote with every charge listed and its validity period." },
    { step: "04", title: "Book & ship", body: "Approve the quote and we book space, arrange the container and manage the shipment." },
  ],
  destinations: [
    "Jebel Ali (Dubai, UAE)",
    "Khorfakkan (Sharjah, UAE)",
    "Jeddah (Saudi Arabia)",
    "Dammam (Saudi Arabia)",
    "Sohar (Oman)",
    "Hamad (Qatar)",
    "Shuwaikh (Kuwait)",
    "Khalifa Bin Salman (Bahrain)",
    "Other / worldwide",
  ],
  containers: ["20ft FCL", "40ft FCL", "40ft High Cube", "LCL (part load)", "Not sure — advise me"],
  extras: ["Road transport to port", "Export documentation", "Stuffing supervision", "Marine insurance", "Fumigation / certificates"],
}

export const FREIGHT_QUOTE_FAQS: FAQ[] = [
  {
    question: "How do I get a freight quote from Versa Logistics?",
    answer:
      "Fill in the freight quote form, message +91 79072 15816 on WhatsApp, or call +91 97464 33133. Share the cargo, weight or volume, container type, pickup location, destination port and ready date, and we will send an itemised quotation.",
  },
  {
    question: "Is a freight quotation free?",
    answer: "Yes. Freight quotations from Versa Logistics are free and carry no obligation to book.",
  },
  {
    question: "What information is needed for an accurate freight quote?",
    answer:
      "Commodity, packing, gross weight, volume (CBM) or number of containers, container type, pickup address, destination port or city, cargo-ready date, Incoterm, and any extra services such as transport, documentation or insurance.",
  },
  {
    question: "How are sea freight rates calculated?",
    answer:
      "FCL rates are charged per container (20ft or 40ft); LCL rates are charged per cubic metre or tonne, whichever is greater. Carrier surcharges, terminal handling, documentation, haulage and optional services are added on top — which is why we itemise every quote.",
  },
  {
    question: "How long is a freight quote valid?",
    answer:
      "Ocean freight rates change with fuel prices, demand and season, so quotes carry a stated validity — often until a date in the current or following fortnight. The validity is written on every Versa Logistics quote.",
  },
  {
    question: "How can I get the cheapest freight rate from India to the UAE?",
    answer:
      "Book early, keep your cargo-ready date flexible, choose FCL once your cargo fills most of a container, compare Jebel Ali with Khorfakkan for your delivery point, and ask for an itemised quote so you compare like with like. Versa Logistics compares these options for you in every quote.",
  },
  {
    question: "Why are some freight quotes much cheaper than others?",
    answer:
      "Low headline rates often exclude origin charges, documentation, haulage or destination fees that appear later on the invoice. Always compare total cost for the same scope. Versa Logistics lists every charge so you can compare fairly.",
  },
  {
    question: "Can I get a quote for door-to-door delivery?",
    answer:
      "Yes. We quote pickup from your premises, ocean freight and coordination with a clearing agent at destination for delivery to your consignee's warehouse.",
  },
]

/* ----------------------------------------------------------------------------
 * Keyword / location pages
 * --------------------------------------------------------------------------*/
export const LOGISTICS_SEO_PAGES: DivisionPage[] = [
  {
    slug: "logistics-company-kochi",
    division: "logistics",
    navLabel: "Logistics Company in Kochi",
    h1: "Logistics company in Kochi: freight forwarding, sea freight and transport from Kakkanad",
    metaTitle: "Best Logistics Company in Kochi — Freight Forwarding & Sea Freight | Versa Logistics",
    metaDescription:
      "Looking for the best logistics company in Kochi? Versa Logistics, Kakkanad, offers freight forwarding, FCL/LCL sea freight from ICTT Vallarpadam, container transport and export documentation with competitive, itemised freight quotes.",
    keywords: [
      "best logistics company in Kochi",
      "logistics company Kochi",
      "freight forwarders in Kochi",
      "logistics services Kakkanad",
      "shipping company Kochi",
      "cargo company Kochi",
      "Kochi freight forwarder",
    ],
    eyebrow: "Versa Logistics — Kochi",
    lede:
      "A Kochi logistics partner that answers the phone, quotes every charge and knows the road to Vallarpadam — from our office in Kakkanad.",
    image: IMAGES.kochiTerminal,
    summary:
      "Versa Logistics is a logistics company in Kakkanad, Kochi offering freight forwarding, FCL and LCL sea freight through ICTT Vallarpadam, container transportation, stuffing supervision and export documentation, with itemised freight quotes and a regular India–UAE service to Jebel Ali and Khorfakkan.",
    intro: [
      "Kochi is Kerala's gateway to the world, and a good logistics partner here makes the difference between a container that sails on time and one that waits for the next vessel. Versa Logistics works from Kakkanad, a short drive from the International Container Transshipment Terminal at Vallarpadam.",
    ],
    specs: [
      { label: "Office", value: "Kakkanad, Kochi 682021" },
      { label: "Gateway", value: "ICTT Vallarpadam, Kochi" },
      { label: "Services", value: "Freight forwarding, sea freight, transport, documents" },
      { label: "Track record", value: "17 × 40ft containers of coffee beans to the UAE" },
      { label: "Quotes", value: "Free, itemised, validity stated" },
    ],
    sections: [
      {
        heading: "What makes the best logistics company in Kochi?",
        body: ["When comparing logistics companies in Kochi, look for:"],
        bullets: [
          "Itemised freight quotes that show every charge, not just the ocean rate",
          "Local presence close to the Vallarpadam terminal",
          "Experience with your cargo type — agri-commodities need different care from machinery",
          "A named contact who follows the shipment from booking to arrival",
          "Proven delivery on your route — for Versa Logistics, 17 × 40ft containers into Jebel Ali and Khorfakkan",
        ],
      },
      {
        heading: "Which logistics services does Versa Logistics offer in Kochi?",
        body: [],
        bullets: [
          "FCL and LCL sea freight from Kochi to the UAE, GCC and worldwide",
          "Freight forwarding — carrier booking, container release and tracking",
          "Container trucking from Kerala, Karnataka and Tamil Nadu to Kochi port",
          "Container stuffing supervision with loading photos and seal records",
          "Export documentation — bills of lading, certificates of origin, phytosanitary certificates",
        ],
      },
      {
        heading: "How do I get a freight quote in Kochi?",
        body: [
          "Use our freight quote form or WhatsApp +91 79072 15816 with your cargo, quantity, container type, pickup location and destination. We compare carriers and routes and send an itemised quote.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is the best logistics company in Kochi?",
        answer:
          "The best logistics company for you is the one that quotes transparently, knows your route and cargo, and stays accountable until delivery. Versa Logistics in Kakkanad offers itemised freight quotes, a regular India–UAE service and has shipped 17 × 40ft containers of coffee beans to Jebel Ali and Khorfakkan.",
      },
      {
        question: "Where is Versa Logistics located in Kochi?",
        answer: "3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021 — close to Infopark and a short drive from the Vallarpadam container terminal.",
      },
      {
        question: "Does Versa Logistics handle small shipments from Kochi?",
        answer: "Yes. LCL (part-load) shipments are available for smaller cargo, alongside full 20ft and 40ft containers.",
      },
    ],
    related: ["kochi-port-export-shipping", "freight-forwarding", "logistics-company-kerala"],
  },
  {
    slug: "logistics-company-kerala",
    division: "logistics",
    navLabel: "Logistics Company in Kerala",
    h1: "Logistics company in Kerala: export freight, transport and forwarding for Kerala businesses",
    metaTitle: "Best Logistics Service in Kerala — Export Freight & Transport | Versa Logistics",
    metaDescription:
      "Versa Logistics is a Kerala logistics company for exporters in Ernakulam, Idukki, Wayanad, Thrissur, Kozhikode and beyond: road transport to port, sea freight, freight forwarding and export documents with transparent freight quotes.",
    keywords: [
      "best logistics service in Kerala",
      "logistics company Kerala",
      "freight forwarders Kerala",
      "export logistics Kerala",
      "cargo transport Kerala",
      "shipping company Kerala",
    ],
    eyebrow: "Versa Logistics — Kerala",
    lede:
      "From Idukki's cardamom hills to Thrissur's factories and Kozhikode's traders, Kerala's exporters need a logistics partner who knows every road to the port.",
    image: IMAGES.coffeePlants,
    summary:
      "Versa Logistics serves exporters across Kerala — Ernakulam, Idukki, Wayanad, Thrissur, Kottayam, Kozhikode and beyond — with road transport to port, FCL and LCL sea freight, freight forwarding and export documentation, backed by itemised freight quotes.",
    intro: [
      "Kerala exports spices, coffee, tea, seafood, coir, rubber products and processed foods to markets across the Gulf and the world. Each needs a different kind of care on the road and at sea. Versa Logistics plans the whole journey — from the gate of your unit to the destination port.",
    ],
    specs: [
      { label: "Coverage", value: "All Kerala districts + neighbouring states" },
      { label: "Ports", value: "Kochi, plus Tuticorin & Mangalore when better" },
      { label: "Cargo", value: "Spices, coffee, food products, general cargo" },
      { label: "Quotes", value: "Free, itemised freight quotations" },
    ],
    sections: [
      {
        heading: "Which Kerala regions does Versa Logistics serve?",
        body: [],
        bullets: [
          "Ernakulam and Kochi — factories, warehouses and traders",
          "Idukki — cardamom and spice growers and dealers",
          "Wayanad — coffee and pepper estates and curing works",
          "Thrissur, Palakkad and Kottayam — manufacturers and processors",
          "Kozhikode, Malappuram and Kannur — traders and exporters in north Kerala",
        ],
      },
      {
        heading: "What is the best logistics service for Kerala exporters?",
        body: [
          "The best logistics service for a Kerala exporter is one that handles the road leg, the port and the paperwork as one plan — so a container stuffed in Wayanad or Idukki reaches Kochi before cut-off with documents that match. That end-to-end approach is how Versa Logistics works.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is the best logistics company in Kerala for exports?",
        answer:
          "Choose a Kerala logistics company that quotes every charge, handles road transport and documentation together, and has proven delivery on your route. Versa Logistics offers this from Kochi, with a regular India–UAE service and 17 × 40ft containers delivered to Jebel Ali and Khorfakkan.",
      },
      {
        question: "Can Versa Logistics pick up cargo anywhere in Kerala?",
        answer: "Yes. We arrange container and loose-cargo transport from all Kerala districts to Kochi port, and from neighbouring states when needed.",
      },
    ],
    related: ["logistics-company-kochi", "transportation", "coffee-and-spice-cargo"],
  },
  {
    slug: "logistics-services-india",
    division: "logistics",
    navLabel: "Logistics Services in India",
    h1: "Logistics services in India: export freight from India's west coast to the Gulf and the world",
    metaTitle: "Best Logistics & Freight Services in India — Export to UAE & GCC | Versa Logistics",
    metaDescription:
      "Export logistics services in India from Versa Logistics: sea freight from Kochi, Tuticorin, Mangalore, Nhava Sheva and Mundra to the UAE, GCC and worldwide, with freight forwarding, transport and itemised freight quotes.",
    keywords: [
      "best logistics services in India",
      "logistics company India",
      "export logistics India",
      "freight forwarder India to UAE",
      "international logistics India",
      "sea freight services India",
    ],
    eyebrow: "Versa Logistics — India",
    lede:
      "India's exports leave from dozens of ports. We choose the right one for your cargo — and quote the full cost of getting it there and beyond.",
    image: IMAGES.shipAerial,
    summary:
      "Versa Logistics provides export logistics services across India — sea freight from Kochi, Tuticorin, Mangalore, Nhava Sheva and Mundra to the UAE, GCC and worldwide, with freight forwarding, road transport, export documentation and itemised freight quotations.",
    intro: [
      "Based in Kochi, Versa Logistics serves exporters across India, choosing the gateway port by total cost and schedule rather than habit. The UAE and wider Gulf are our core lanes, and we book worldwide on request.",
    ],
    specs: [
      { label: "Gateways", value: "Kochi, Tuticorin, Mangalore, Nhava Sheva, Mundra" },
      { label: "Core lanes", value: "India → UAE & GCC" },
      { label: "Modes", value: "FCL, LCL sea freight + road transport" },
      { label: "Quotes", value: "Itemised, with stated validity" },
    ],
    sections: [
      {
        heading: "How do you choose the best Indian port for export?",
        body: [
          "Compare the total cost — road haulage to the port plus ocean freight — and the sailing schedule, not just the ocean rate. For cargo in Kerala, Kochi is usually best; for north and west India, Nhava Sheva or Mundra may win. We quote the alternatives side by side.",
        ],
      },
      {
        heading: "What makes the best logistics service in India for exporters?",
        body: [],
        bullets: [
          "Transparent, itemised quotes you can compare fairly",
          "Knowledge of your destination market's documents",
          "Care for your cargo type — especially food and agri-commodities",
          "One contact from booking to delivery",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is the best logistics company in India for shipping to the UAE?",
        answer:
          "Look for a forwarder with proven UAE deliveries, transparent quotes and strong documentation. Versa Logistics runs a regular India–UAE service and has delivered 17 × 40ft containers of coffee beans to Jebel Ali and Khorfakkan.",
      },
      {
        question: "Does Versa Logistics ship from ports outside Kerala?",
        answer: "Yes. Depending on your cargo location and schedule, we book from Tuticorin, Mangalore, Nhava Sheva and Mundra as well as Kochi.",
      },
    ],
    related: ["sea-freight", "gcc-shipping", "affordable-freight-india-to-uae"],
  },
  {
    slug: "affordable-freight-india-to-uae",
    division: "logistics",
    navLabel: "Affordable Freight India → UAE",
    h1: "Cheapest way to ship from India to the UAE? Affordable, transparent freight to Dubai and Sharjah",
    metaTitle: "Cheapest Freight from India to UAE & Dubai — Affordable Shipping Rates | Versa Logistics",
    metaDescription:
      "How to find the cheapest reliable freight from India to the UAE: FCL vs LCL, Jebel Ali vs Khorfakkan, timing and hidden charges. Get an itemised, competitive freight quote from Versa Logistics, Kochi.",
    keywords: [
      "cheapest freight India to UAE",
      "cheapest shipping India to Dubai",
      "affordable freight Kochi to Dubai",
      "low cost shipping India to UAE",
      "best freight rates India to Dubai",
      "cheap container shipping to Dubai",
    ],
    eyebrow: "Versa Logistics — Freight Costs",
    lede:
      "The cheapest freight is not the lowest number on a quote — it is the lowest total cost to get your cargo delivered, on time, without surprises.",
    image: IMAGES.jebelAli,
    summary:
      "The cheapest reliable way to ship from India to the UAE is usually FCL sea freight from the nearest port on a direct service to the right UAE port for your delivery point. Versa Logistics compares routes, container sizes and sailings and sends itemised quotes so you can see the true total cost.",
    intro: [
      "Freight to the UAE is competitive, but headline rates can hide origin charges, documentation fees and destination costs. We help you find the genuinely lowest total cost — and show every line so you can check it.",
    ],
    specs: [
      { label: "Lowest cost per tonne", value: "Usually FCL once cargo fills the box" },
      { label: "Ports compared", value: "Jebel Ali vs Khorfakkan" },
      { label: "Best savings", value: "Early booking, flexible dates" },
      { label: "Quotes", value: "Itemised — no hidden charges" },
    ],
    sections: [
      {
        heading: "What is the cheapest way to ship from India to Dubai?",
        body: [
          "For regular commercial cargo, sea freight is far cheaper than air. Within sea freight, a full container (FCL) gives the lowest cost per tonne once your cargo fills most of the box; for small consignments, LCL is cheaper. Shipping from the Indian port nearest your cargo and landing at the UAE port nearest your consignee keeps road costs down at both ends.",
        ],
      },
      {
        heading: "How can you reduce freight costs to the UAE?",
        body: [],
        bullets: [
          "Book early — last-minute space costs more in peak season",
          "Be flexible on sailing date by a few days",
          "Consolidate orders into full containers where possible",
          "Choose 20ft or 40ft by weight as well as volume",
          "Compare Jebel Ali and Khorfakkan against your final delivery point",
          "Get documents right first time to avoid demurrage and detention",
        ],
      },
      {
        heading: "What hidden charges should you watch for?",
        body: [
          "Terminal handling, documentation, bill of lading, seal, haulage, customs brokerage and destination delivery-order charges are often left out of low headline rates. Ask for an itemised quote covering the same scope from every forwarder you compare.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the cheapest freight option from India to the UAE?",
        answer:
          "Sea freight. Choose FCL when your cargo fills most of a container and LCL for small shipments, ship from the nearest Indian port, and land at the UAE port nearest your consignee. Versa Logistics compares these options in an itemised quote.",
      },
      {
        question: "Is Khorfakkan cheaper than Jebel Ali?",
        answer:
          "It depends on the carrier and your final delivery point. For consignees in Sharjah, Fujairah or the east coast, Khorfakkan can lower the total cost; for Dubai and re-export, Jebel Ali often wins. We quote both.",
      },
      {
        question: "Does Versa Logistics offer the lowest freight rates?",
        answer:
          "We offer competitive, itemised rates and compare carriers and routes for every shipment, so you pay the lowest total cost we can find for your cargo — with every charge shown upfront.",
      },
    ],
    related: ["india-to-jebel-ali-shipping", "india-to-khorfakkan-shipping", "sea-freight"],
  },
]

/* ----------------------------------------------------------------------------
 * Extra logistics FAQs (best / cheapest / location searches)
 * --------------------------------------------------------------------------*/
export const LOGISTICS_KEYWORD_FAQS: FAQ[] = [
  {
    question: "Which is the best logistics company in Kochi?",
    answer:
      "Look for transparent itemised quotes, local presence near Vallarpadam, experience with your cargo and one accountable contact. Versa Logistics in Kakkanad offers all four, runs a regular India–UAE service and has shipped 17 × 40ft containers of coffee beans to Jebel Ali and Khorfakkan.",
  },
  {
    question: "Which is the best logistics service in Kerala?",
    answer:
      "The best logistics service for Kerala exporters handles road transport, port and documentation as one plan. Versa Logistics does this for cargo from every Kerala district to Kochi port and on to the UAE, GCC and worldwide.",
  },
  {
    question: "What is the cheapest and best logistics service in India for exports to the UAE?",
    answer:
      "The cheapest reliable option is usually FCL sea freight from the nearest Indian port to the UAE port nearest your consignee, quoted with every charge included. Versa Logistics compares carriers, ports and container sizes to find the lowest total cost.",
  },
  {
    question: "How can I get the best freight quotation in Kochi?",
    answer:
      "Share complete details — cargo, weight, volume, container type, pickup point, destination and ready date — and ask for an itemised quote with validity. Versa Logistics provides free itemised freight quotations through its online form, WhatsApp +91 79072 15816 or phone.",
  },
]

/* ----------------------------------------------------------------------------
 * Hub additions
 * --------------------------------------------------------------------------*/
export const LOGISTICS_HUB_EXTRA = {
  quoteEyebrow: "Freight quotation",
  quoteH2: "Get the best freight quote for your shipment — itemised, compared and free",
  quoteBody:
    "Tell us what you are shipping and where. We compare carriers, ports and container sizes and send an itemised quote with every charge listed and validity stated.",
  quoteCta: "Get a freight quote",
  quotePoints: ["Free & no obligation", "Every charge itemised", "Routes & ports compared", "Validity stated upfront"],
  locationsEyebrow: "Where we serve",
  locationsH2: "Logistics services in Kochi, across Kerala and India",
}
