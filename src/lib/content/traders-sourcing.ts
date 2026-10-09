import type { DivisionPage, FAQ, ImageAsset } from "@/types"
import { IMAGES } from "./site"

export const SOURCING_IMAGES = {
  coconut: {
    src: "/images/coconut-whole-and-cracked.jpg",
    alt: "A whole brown coconut beside a coconut cracked open to show the white kernel",
    caption: "Fig. — Coconut, whole and opened — the source of desiccated and grated coconut",
  },
  bananaChips: {
    src: "/images/banana-chips-frying-kerala.jpg",
    alt: "Banana chips frying in a large iron pan at a snack maker in Palakkad, Kerala",
    caption: "Fig. — Banana chips being fried, Palakkad, Kerala",
  },
  snacks: {
    src: "/images/indian-snacks-namkeen.jpg",
    alt: "Bowls of colourful Indian namkeen snacks displayed at a market stall",
    caption: "Fig. — Indian namkeen snacks",
  },
} satisfies Record<string, ImageAsset>

export const INTERNATIONAL = {
  name: "Versa International Traders",
  tagline: "Bridging international buyers and Indian suppliers",
  eyebrow: "How we work",
  h2: "How does Versa International Traders bridge international buyers and Indian suppliers?",
  body: "Tell us what you need from India. We find it in our supplier network, send you a quotation, and stay with the deal until the goods are delivered — with logistics and CHA (customs clearance) provided by our own group if you need them.",
  categoriesH2: "What can you source from India through Versa International Traders?",
  categories: [
    { title: "Onions & fresh produce", body: "Nashik red and big onions, small onions and other fresh agro produce.", href: "/traders/onions" },
    { title: "Coffee beans", body: "Unroasted Arabica and Robusta — 160 MT recently traded to the UAE.", href: "/traders/coffee-bean-trading" },
    { title: "Spices", body: "Green cardamom, black pepper and other whole spices.", href: "/traders/cardamom" },
    { title: "Coconut products", body: "Desiccated and grated coconut, coconut oil, copra and more.", href: "/traders/coconut-products-export" },
    { title: "Snacks & food products", body: "Banana chips, Kerala snacks, namkeen and packaged foods.", href: "/traders/snacks-export" },
    { title: "Any other requirement", body: "Agro products, food ingredients and more — tell us what you need.", href: "/traders/export-sourcing-india" },
  ],
  stepsH2: "From your enquiry to a completed deal",
  steps: [
    { step: "01", title: "Send your requirement", body: "Product, specification, quantity, packing and destination — by phone, WhatsApp or the form." },
    { step: "02", title: "We match suppliers", body: "We find suitable suppliers in our network and check that they can meet the specification." },
    { step: "03", title: "Quotation", body: "You receive a clear quotation — FOB, CFR or CIF — with validity stated." },
    { step: "04", title: "Samples & contract", body: "Samples where needed, then a written contract with specification, price and shipment period." },
    { step: "05", title: "Logistics & CHA", body: "If you need them, Versa Logistics books freight and handles customs clearance (CHA)." },
    { step: "06", title: "Deal done", body: "We follow production, quality, documents and shipment until the goods reach you." },
  ],
  servicesH2: "Need logistics and CHA as well?",
  servicesBody:
    "Versa International Traders works with its sister venture Versa Logistics, so one group can handle the product, the freight and the customs clearance. Use as much or as little of it as you need.",
  services: ["Sourcing from verified Indian suppliers", "Quotations FOB, CFR or CIF", "Samples and quality checks", "Sea freight and transport", "CHA — export customs clearance", "Export documents and certificates"],
  cta: { label: "Get a quotation", href: "/contact?enquiry=sourcing" },
  suppliers: {
    eyebrow: "For Indian suppliers",
    h2: "Have products to export? Supply regularly through Versa International Traders",
    body: "We are traders with buyers abroad, including a distribution partner in the United Kingdom. If you make or grow products and want to export and supply regularly, contact us — we handle the buyer, the documents, the logistics and the CHA.",
    points: ["Regular export orders through our buyer network", "A UK distribution partner", "Agro products, foods, snacks, coconut products and more", "Logistics, CHA and export documents handled"],
    cta: { label: "Register as a supplier", href: "/contact?enquiry=supplier" },
    more: { label: "Export with us", href: "/traders/export-with-us-suppliers" },
  },
}

export const SOURCING_FAQS: FAQ[] = [
  {
    question: "What is Versa International Traders?",
    answer:
      "Versa International Traders, formerly Versa Traders, is the international trading venture of Versa Growth Ventures in Kochi, India. It bridges the gap between international buyers and Indian suppliers — sourcing onions, coffee beans, spices, agro products, snacks, coconut products and other requirements, sending quotations and following each deal through to delivery, with logistics and CHA available from the group.",
  },
  {
    question: "Can I source any product from India through Versa International Traders?",
    answer:
      "Send us your requirement. Our supplier network covers agro products, onions and fresh produce, coffee, spices, coconut products such as desiccated coconut, snacks and packaged foods, and more. We confirm whether we can meet the specification and send a quotation.",
  },
  {
    question: "How do I get a quotation from Versa International Traders?",
    answer:
      "Share the product, specification, quantity, packing, destination port and timing by phone (+91 97464 33133), WhatsApp (+91 79072 15816), email (info@versagrowthventures.in) or the contact form. There is no charge for a quotation.",
  },
  {
    question: "Do you provide logistics and CHA for export orders?",
    answer:
      "Yes. Through Versa Logistics, the group provides sea freight, transport to port and CHA (customs house agent) services for export customs clearance, along with export documentation. Buyers can also use their own forwarder.",
  },
  {
    question: "How do you make sure the deal is completed?",
    answer:
      "We put the specification, price and shipment period in a written contract, check quality before packing, coordinate documents and freight, and keep one named contact on the deal from quotation until the goods are delivered.",
  },
  {
    question: "Do you work with suppliers or buyers?",
    answer:
      "Both. We are traders: we work with Indian suppliers of agro products, foods and commodities who want to export regularly, and with importers, wholesalers and distributors abroad — including our distribution partner in the United Kingdom — and connect the two.",
  },
]

export const SUPPLIER_FAQS: FAQ[] = [
  {
    question: "I am an Indian supplier. Can I export my products through Versa International Traders?",
    answer:
      "Yes. Versa International Traders works with Indian growers, processors and manufacturers who want to export and supply regularly. Contact us with your products, capacity and certifications; we match you with buyers, including our distribution partner in the United Kingdom, and handle documents, logistics and CHA.",
  },
  {
    question: "Does Versa International Traders have a distributor in the UK?",
    answer:
      "Yes. Versa International Traders has a distribution partner in the United Kingdom, alongside buyers in the Gulf and other markets, which gives suppliers a route to regular export orders.",
  },
  {
    question: "What do suppliers need to start exporting with you?",
    answer:
      "Product details and specifications, monthly or seasonal capacity, packing options, and any food safety or quality certifications you hold. We help with the export documents and provide logistics and CHA through Versa Logistics.",
  },
]

export const TRADERS_SOURCING_PAGES: DivisionPage[] = [
  {
    slug: "export-with-us-suppliers",
    division: "traders",
    navLabel: "Suppliers — Export With Us",
    topic: "exporting with Versa International Traders",
    h1: "Indian suppliers: export your products regularly through Versa International Traders — buyers abroad, including our UK distributor",
    metaTitle: "Export Your Products — Supplier Partners | Versa International Traders",
    metaDescription:
      "Indian growers, processors and manufacturers: supply regularly to international buyers through Versa International Traders, including our UK distribution partner. Agro products, foods, snacks, coconut products. Logistics and CHA handled.",
    keywords: [
      "export my products from India",
      "find international buyers India",
      "supplier for UK distributor",
      "export agro products to UK",
      "Indian food products export UK",
      "become an export supplier",
    ],
    eyebrow: "Versa International Traders — Suppliers",
    lede: "You make it. We have the buyers. If you want to export and supply regularly, Versa International Traders connects you with buyers abroad — including our distribution partner in the UK.",
    image: SOURCING_IMAGES.bananaChips,
    summary:
      "Versa International Traders is a trading company that works with Indian suppliers who want to export regularly. It connects growers, processors and manufacturers of agro products, foods, snacks, coconut products and more with buyers abroad — including its distribution partner in the United Kingdom — and handles the export documents, logistics and CHA through the group.",
    topicStats: [
      { value: "UK", label: "Distribution partner for regular supply" },
      { value: "1", label: "Team for buyer, documents, freight and CHA" },
    ],
    intro: [
      "Many good Indian producers never export because finding buyers, meeting their paperwork and booking freight is too much alongside running the business. Versa International Traders takes on that side, so suppliers can focus on making the product.",
    ],
    specs: [
      { label: "Who", value: "Growers, processors, manufacturers in India" },
      { label: "Products", value: "Agro products, foods, snacks, coconut products, more" },
      { label: "Markets", value: "United Kingdom (distributor), Gulf, worldwide" },
      { label: "We handle", value: "Buyer, contract, documents, logistics, CHA" },
      { label: "Contact", value: "+91 97464 33133 · info@versagrowthventures.in" },
    ],
    sections: [
      {
        heading: "Who should contact us?",
        body: [],
        bullets: [
          "Farmer groups and growers of agro products",
          "Food processors and snack makers",
          "Coconut product manufacturers",
          "Any Indian supplier that wants regular export orders",
        ],
      },
      {
        heading: "What does Versa International Traders do for suppliers?",
        body: [],
        bullets: [
          "Matches your products with buyers abroad, including our UK distributor",
          "Agrees specifications, packing and pricing with the buyer",
          "Coordinates samples, quality checks and export documents",
          "Provides logistics and CHA through Versa Logistics",
          "Plans regular, repeat supply rather than one-off orders",
        ],
      },
      {
        heading: "How do I start?",
        body: ["Send your product list, specifications, capacity, packing options and certifications by phone, WhatsApp +91 79072 15816, email or the contact form. We review them and come back with the buyer requirements that fit."],
      },
    ],
    faqs: SUPPLIER_FAQS,
    related: ["export-sourcing-india", "snacks-export", "coconut-products-export"],
  },
  {
    slug: "export-sourcing-india",
    division: "traders",
    navLabel: "Source Any Product from India",
    topic: "export sourcing from India",
    h1: "Source any product from India: agro products, snacks, coconut products and more — quotation to delivery",
    metaTitle: "Source Products from India — Export Sourcing Agent | Versa International Traders",
    metaDescription:
      "Versa International Traders bridges international buyers and Indian suppliers: agro products, onions, coffee, spices, desiccated coconut, snacks and more. Free quotations, samples, contracts, logistics and CHA — until the deal is done.",
    keywords: [
      "source products from India",
      "export sourcing agent India",
      "Indian suppliers for international buyers",
      "agro products exporter India",
      "buy from India",
      "import from India quotation",
      "Versa International Traders",
    ],
    eyebrow: "Versa International Traders — Sourcing",
    lede: "One contact in India for whatever you need to import. Tell us the requirement — we find the supplier, quote the price and make sure the deal is done.",
    image: SOURCING_IMAGES.snacks,
    summary:
      "Versa International Traders sources products from India for international buyers. It matches buyers with suppliers in its network — agro products, onions, coffee beans, spices, coconut products, snacks and packaged foods — sends a quotation, arranges samples and a written contract, and follows the order through quality checks, documents and shipment. Logistics and CHA (customs clearance) are available from sister venture Versa Logistics.",
    topicStats: [
      { value: "1", label: "Contact for product, freight and customs" },
      { value: "6", label: "Steps from enquiry to completed deal" },
    ],
    intro: [
      "Buying from a new country is hard when you do not know the suppliers, the documents or the ports. Versa International Traders closes that gap. We work with Indian suppliers across agro products and foods, and with buyers abroad, and we stay accountable for the deal in between.",
    ],
    specs: [
      { label: "Products", value: "Agro products, onions, coffee, spices, coconut products, snacks, more" },
      { label: "Quotation", value: "Free, FOB / CFR / CIF, validity stated" },
      { label: "Quality", value: "Samples and pre-shipment checks" },
      { label: "Logistics", value: "Sea freight and transport via Versa Logistics" },
      { label: "Customs", value: "CHA — export customs clearance" },
      { label: "Contact", value: "+91 97464 33133 · WhatsApp +91 79072 15816" },
    ],
    sections: [
      {
        heading: "Which products can we source for you?",
        body: ["Our supplier network includes, for example:"],
        bullets: [
          "Agro products — onions, fresh produce, pulses, grains and more",
          "Coffee beans — unroasted Arabica and Robusta",
          "Spices — cardamom, black pepper and other whole spices",
          "Coconut products — desiccated and grated coconut, coconut oil, copra",
          "Snacks and foods — banana chips, Kerala snacks, namkeen and packaged foods",
          "Other requirements — ask, and we will confirm whether we can supply",
        ],
      },
      {
        heading: "How does a sourcing deal work?",
        body: [],
        bullets: [
          "You send the product, specification, quantity, packing and destination",
          "We match suitable suppliers and confirm they can meet it",
          "You receive a quotation with price, terms and validity",
          "Samples where needed, then a written contract",
          "We follow production, quality checks, documents and shipment",
          "The goods reach your port — and the deal is done",
        ],
      },
      {
        heading: "Do you provide logistics and CHA?",
        body: [
          "Yes, if you need them. Versa Logistics, part of the same group, books sea freight, arranges transport to the port and provides CHA (customs house agent) services for export customs clearance, along with the export documents. If you prefer your own forwarder, we work with them instead.",
        ],
      },
      {
        heading: "Who do we work with?",
        body: [
          "Importers, wholesalers, distributors, retailers and food companies abroad on the buying side; Indian growers, processors and manufacturers on the supplying side. Buyers can contact us freely for a quotation at any time.",
        ],
      },
    ],
    faqs: [SOURCING_FAQS[1], SOURCING_FAQS[2], SOURCING_FAQS[3], SOURCING_FAQS[4]],
    related: ["coconut-products-export", "snacks-export", "onions"],
  },
  {
    slug: "coconut-products-export",
    division: "traders",
    navLabel: "Coconut Products — Desiccated Coconut",
    topic: "coconut products",
    h1: "Coconut products from India: desiccated coconut, grated coconut, coconut oil and copra for international buyers",
    metaTitle: "Desiccated Coconut & Coconut Products from India | Versa International Traders",
    metaDescription:
      "Source desiccated coconut, grated coconut, coconut oil and copra from Kerala and South India through Versa International Traders. Supplier matching, quotations, samples, logistics and CHA.",
    keywords: [
      "desiccated coconut exporter India",
      "grated coconut supplier",
      "coconut products export Kerala",
      "coconut oil supplier India",
      "copra exporter India",
    ],
    eyebrow: "Category — Coconut products",
    lede: "Kerala's name comes from its coconut palms. We connect overseas buyers with South Indian suppliers of coconut products.",
    image: SOURCING_IMAGES.coconut,
    summary:
      "Versa International Traders sources coconut products from Kerala and South India for international buyers — desiccated coconut, grated coconut, coconut oil and copra — through its supplier network, with quotations, samples, contracts, logistics and CHA handled by the group.",
    intro: [
      "Kerala, Tamil Nadu and Karnataka are among India's main coconut-growing states. Their processors make the coconut products food manufacturers, bakeries and distributors buy around the world.",
    ],
    specs: [
      { label: "Products", value: "Desiccated coconut, grated coconut, coconut oil, copra" },
      { label: "Origin", value: "Kerala and South India" },
      { label: "Specification", value: "Grade, fat content, cut and packing to your requirement" },
      { label: "Freight & customs", value: "Versa Logistics — freight and CHA" },
    ],
    sections: [
      {
        heading: "Which coconut products can you source?",
        body: [],
        bullets: [
          "Desiccated coconut — dried, grated coconut for bakery, confectionery and food manufacturing",
          "Grated coconut — fresh-frozen or dried, to specification",
          "Coconut oil — for food and other uses",
          "Copra — dried coconut kernel",
        ],
      },
      {
        heading: "What should a coconut product quotation include?",
        body: ["The product and grade, fat and moisture limits, cut or particle size, packing, quantity, shipment period and Incoterm. We confirm each with the supplier before quoting."],
      },
    ],
    faqs: [SOURCING_FAQS[2], SOURCING_FAQS[3]],
    related: ["export-sourcing-india", "snacks-export", "packaging-and-private-label"],
  },
  {
    slug: "snacks-export",
    division: "traders",
    navLabel: "Snacks & Food Products",
    topic: "snacks and food products from India",
    h1: "Snacks and food products from India: banana chips, Kerala snacks and namkeen for international buyers",
    metaTitle: "Banana Chips & Indian Snacks Export | Versa International Traders",
    metaDescription:
      "Source banana chips, Kerala snacks, namkeen and packaged Indian foods for import through Versa International Traders. Supplier matching, private label, quotations, logistics and CHA.",
    keywords: [
      "banana chips exporter Kerala",
      "Indian snacks exporter",
      "namkeen export India",
      "Kerala snacks supplier",
      "Indian food products importer",
    ],
    eyebrow: "Category — Snacks & foods",
    lede: "Indian snacks travel well and sell wherever Indian communities live. We connect overseas buyers with the makers.",
    image: SOURCING_IMAGES.bananaChips,
    summary:
      "Versa International Traders sources Indian snacks and food products for international buyers — Kerala banana chips, traditional Kerala snacks, namkeen and other packaged foods — matching buyers with suppliers, arranging quotations, samples and private label, and handling logistics and CHA through the group.",
    intro: [
      "Kerala banana chips, fried in coconut oil, are among India's best-known snack exports, alongside a wide range of namkeen and ready-to-eat foods. Retailers and distributors abroad buy them for Indian and international customers alike.",
    ],
    specs: [
      { label: "Products", value: "Banana chips, Kerala snacks, namkeen, packaged foods" },
      { label: "Packing", value: "Retail packs, bulk cartons, private label" },
      { label: "Buyers", value: "Importers, distributors, supermarkets, Indian stores" },
      { label: "Freight & customs", value: "Versa Logistics — freight and CHA" },
    ],
    sections: [
      {
        heading: "Which snacks and foods can you source?",
        body: [],
        bullets: ["Kerala banana chips", "Traditional Kerala snacks", "Namkeen and savoury mixes", "Other packaged and ready-to-eat foods on request"],
      },
      {
        heading: "Can snacks be packed under my brand?",
        body: ["Many suppliers offer private-label packing for regular volumes. Tell us your pack sizes, labelling and destination-market requirements and we will match a suitable supplier."],
      },
    ],
    faqs: [SOURCING_FAQS[1], SOURCING_FAQS[2]],
    related: ["export-sourcing-india", "coconut-products-export", "packaging-and-private-label"],
  },
]

export const CHA_PAGE: DivisionPage = {
  slug: "customs-clearance-cha",
  division: "logistics",
  navLabel: "CHA — Customs Clearance",
  topic: "CHA and customs clearance",
  h1: "CHA and customs clearance in Kochi: export clearance alongside freight from Versa Logistics",
  metaTitle: "CHA & Customs Clearance Kochi — Export Clearance | Versa Logistics",
  metaDescription:
    "CHA (customs house agent) and export customs clearance with Versa Logistics, Kochi: shipping bills, examination, let export order and documents — together with freight, for exporters and buyers of Versa International Traders.",
  keywords: ["CHA Kochi", "customs house agent Kochi", "customs clearance Kochi", "export customs clearance Kerala", "customs broker Kochi"],
  eyebrow: "Versa Logistics — CHA",
  lede: "A container cannot sail until customs lets it. We handle the clearance with the freight, so nothing waits between the two.",
  image: IMAGES.kochiTerminal,
  summary:
    "Versa Logistics provides CHA (customs house agent) services for export customs clearance from Kochi alongside its freight forwarding — filing the shipping bill, coordinating examination and the let export order, and aligning the export documents — for exporters and for buyers sourcing through Versa International Traders.",
  intro: [
    "A CHA — now formally called a customs broker in India — files the export declaration with customs and sees the shipment through clearance. When the same group handles the CHA work and the freight, cut-offs, documents and vessel bookings stay in step.",
  ],
  specs: [
    { label: "Service", value: "Export customs clearance (CHA)" },
    { label: "Port", value: "Kochi — ICTT Vallarpadam" },
    { label: "Includes", value: "Shipping bill, examination, let export order" },
    { label: "With", value: "Freight, transport and export documents" },
  ],
  sections: [
    {
      heading: "What does a CHA do for an export shipment?",
      body: [],
      bullets: [
        "Files the shipping bill with customs",
        "Coordinates customs examination of the cargo if required",
        "Obtains the let export order so the container can be loaded",
        "Aligns invoice, packing list and certificates with the declaration",
      ],
    },
    {
      heading: "Why combine CHA with freight?",
      body: ["Because clearance and vessel cut-off are linked. One team handling both avoids missed sailings and extra port charges."],
    },
    {
      heading: "Who uses this service?",
      body: ["Exporters shipping through Kochi, and overseas buyers sourcing from India through Versa International Traders who want the whole export handled for them."],
    },
  ],
  faqs: [
    SOURCING_FAQS[3],
    { question: "Is a CHA the same as a customs broker?", answer: "Yes. CHA (customs house agent) is the older term; Indian regulations now use 'customs broker'. Both mean the licensed agent who handles customs clearance." },
  ],
  related: ["export-documentation", "freight-forwarding", "port-to-port-shipping"],
}
