import type { DivisionPage, FAQ, ImageAsset } from "@/types"

export const ONION_IMAGES = {
  redOnions: {
    src: "/images/red-onions-koyambedu-market.jpg",
    alt: "A heap of fresh red onions at Koyambedu wholesale market, Chennai",
    caption: "Fig. — Fresh red onions, Koyambedu market, Chennai",
  },
  meshBags: {
    src: "/images/red-onions-mesh-bags.jpg",
    alt: "Red onions packed in red mesh bags stacked on a market stall",
    caption: "Fig. — Red onions packed in mesh bags",
  },
  field: {
    src: "/images/onion-field-lasalgaon.jpg",
    alt: "Rows of onion plants growing in a field at Lasalgaon, Nashik district, Maharashtra",
    caption: "Fig. — Onion cultivation at Lasalgaon, Nashik — Asia's largest onion market town",
  },
  smallOnions: {
    src: "/images/small-onions-shallots.jpg",
    alt: "A round basket full of small red onions, also called shallots or sambar onions",
    caption: "Fig. — Small onions (sambar onions / shallots)",
  },
  sacks: {
    src: "/images/onion-sacks-mandi.jpg",
    alt: "Stacks of onion sacks outside a wholesale onion mandi in Tamil Nadu",
    caption: "Fig. — Bagged onions at a wholesale mandi, Tamil Nadu",
  },
} satisfies Record<string, ImageAsset>

export const ONION_FAQS: FAQ[] = [
  {
    question: "Does Versa International Traders export onions from India?",
    answer:
      "Yes. Versa International Traders trades and exports fresh Indian onions — Nashik red onions, Bangalore Rose onions, white onions and small onions (shallots) — in bulk to importers, wholesalers and distributors worldwide, with samples, size grading, mesh-bag packing and phytosanitary certification.",
  },
  {
    question: "Which onion varieties can I buy from India?",
    answer:
      "The main export types are Nashik red onion from Maharashtra (the large, pungent red onion most buyers know), Bangalore Rose onion from Karnataka (small, rose-coloured and mostly used for pickling and processing), white onion, and small onion or shallot from Tamil Nadu and Karnataka.",
  },
  {
    question: "What onion sizes are available for export?",
    answer:
      "Red onions are graded by diameter, most often 25–40 mm, 40–60 mm, 45–65 mm and 55 mm and above. Small onions are usually 20–30 mm. Buyers specify the size band in the contract and every lot is graded to it before packing.",
  },
  {
    question: "How are onions packed for export?",
    answer:
      "Usually in breathable leno mesh bags of 5, 10, 20, 25 or 50 kg, or in jute bags, and shipped in ventilated or refrigerated containers. Private-label printed bags can be arranged for regular buyers.",
  },
  {
    question: "How many tonnes of onions fit in a container?",
    answer:
      "A 40ft refrigerated container typically carries around 28–29 tonnes of onions, depending on bag size and stacking; a 20ft container carries roughly half. The exact load is confirmed with the shipping line before booking.",
  },
  {
    question: "When is the best time to buy onions from India?",
    answer:
      "India harvests onions in three seasons. The rabi crop, harvested from about March to May, stores best and supplies much of the year's export trade. Kharif and late-kharif crops are harvested from about October to March and are best shipped quickly.",
  },
  {
    question: "Can India stop onion exports?",
    answer:
      "Yes. The Government of India adjusts onion export policy from time to time — through minimum export prices, export duties or temporary restrictions — to manage domestic supply. Versa International Traders checks the current DGFT position before every contract and tells buyers if a policy change affects their order.",
  },
  {
    question: "Which countries import onions from India?",
    answer:
      "Indian onions are shipped to neighbouring South Asian countries, Southeast Asia — including Malaysia, Indonesia and Vietnam — and the Gulf, including the UAE, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. Versa International Traders quotes to buyers worldwide.",
  },
  {
    question: "How do I get a price for onions from Versa International Traders?",
    answer:
      "Share the variety, size band, packing, quantity, destination port and shipment month by phone (+91 97464 33133), WhatsApp (+91 79072 15816) or the contact form. Onion prices move with each harvest, so quotes carry a short validity.",
  },
]

const ONION_RELATED_PAGES = ["onions", "nashik-red-onion", "big-onion-exporter", "onion-wholesale-trading-india", "onion-supplier-uae-gulf", "onion-trading-worldwide"]

export const TRADERS_ONION_PAGES: DivisionPage[] = [
  {
    slug: "onions",
    division: "traders",
    navLabel: "Onions — Export & Trading",
    topic: "onion export from India",
    h1: "Onion exporter from India: fresh red, white and small onions traded to buyers worldwide",
    metaTitle: "Onion Exporter India — Bulk Onion Trading Worldwide | Versa International Traders",
    topicStats: [
      { value: "4", label: "Onion types: Nashik red, Bangalore Rose, white, small" },
      { value: "25–65 mm+", label: "Export size bands, big onions 55 mm+" },
    ],
    metaDescription:
      "Versa International Traders exports fresh Indian onions in bulk: Nashik red onion, Bangalore Rose, white onion and small onion. Size-graded 25–65 mm+, mesh-bag packing, phytosanitary certificate, reefer shipping. Samples and quotes on request.",
    keywords: [
      "onion exporter India",
      "onion exporters in India",
      "fresh onion supplier India",
      "red onion export",
      "bulk onions from India",
      "onion trading India",
      "Indian onion importer",
      "onion supplier worldwide",
      "Nashik onion exporter",
    ],
    eyebrow: "Versa International Traders — Onions",
    lede:
      "India is one of the world's largest onion producers. Versa International Traders sources fresh onions from India's main growing regions, grades them to your size band, packs them for the voyage and ships them to your port.",
    image: ONION_IMAGES.redOnions,
    summary:
      "Versa International Traders is an Indian onion trader and exporter. It supplies fresh Nashik red onions, Bangalore Rose onions, white onions and small onions (shallots) in bulk to importers, wholesalers and distributors worldwide — graded by size, packed in mesh or jute bags, certified with a phytosanitary certificate and shipped in ventilated or refrigerated containers, with freight available through Versa Logistics.",
    intro: [
      "India grows onions on a vast scale across Maharashtra, Karnataka, Madhya Pradesh, Gujarat and other states, and harvests them in three seasons. That gives buyers a supply that runs through most of the year, at grades and sizes to suit both retail and processing.",
      "Versa International Traders handles the parts that decide whether onions arrive in good condition: choosing well-cured lots, grading and packing them, booking the right container and getting the certificates right.",
    ],
    specs: [
      { label: "Varieties", value: "Nashik red, Bangalore Rose, white, small onion" },
      { label: "Sizes", value: "25–40, 40–60, 45–65, 55 mm+ (small onion 20–30 mm)" },
      { label: "Packing", value: "Mesh bags 5–50 kg, jute bags, private label" },
      { label: "Container", value: "40ft reefer ~28–29 t; 20ft on request" },
      { label: "Documents", value: "Phytosanitary, certificate of origin, quality report" },
      { label: "Terms", value: "FOB, CFR, CIF" },
    ],
    sections: [
      {
        heading: "Which onions does Versa International Traders export?",
        body: [],
        bullets: [
          "Nashik red onion — the large, pungent red onion from Maharashtra, India's main export type",
          "Bangalore Rose onion — small, rose-coloured onion from Karnataka, prized for pickling and processing",
          "White onion — for processing, dehydration and markets that prefer a milder onion",
          "Small onion (shallot / sambar onion) — 20–30 mm, popular in South Asian and Southeast Asian cooking",
        ],
      },
      {
        heading: "What quality do export onions need?",
        body: ["Every lot is checked against the contract before packing:"],
        bullets: [
          "Well cured, with dry, intact outer skins and dry necks",
          "Firm and sound — free from rot, sprouting and mechanical damage",
          "Uniform colour and graded to the agreed size band",
          "Free from soil, loose skins and foreign matter",
        ],
      },
      {
        heading: "How are onions packed and shipped?",
        body: [
          "Onions need to breathe. They are packed in leno mesh bags or jute bags and shipped in ventilated or refrigerated containers set to the temperature and ventilation agreed with the shipping line. Versa Logistics, our sister venture, books the container and handles the export documents if you buy CFR or CIF.",
        ],
      },
      {
        heading: "Which export documents come with an onion shipment?",
        body: [],
        bullets: [
          "Phytosanitary certificate from India's plant quarantine authority",
          "Certificate of origin — preferential under India–UAE CEPA where eligible",
          "Commercial invoice, packing list and bill of lading",
          "Quality and size-grading report",
          "Fumigation certificate when the importing country requires it",
        ],
      },
      {
        heading: "Does Indian onion export policy change?",
        body: [
          "Yes. India sometimes sets a minimum export price, applies an export duty or restricts onion exports for a period to protect domestic supply. We check the current DGFT position before every contract and tell you straight away if a change affects your shipment.",
        ],
      },
    ],
    faqs: ONION_FAQS.slice(0, 6),
    related: ONION_RELATED_PAGES.filter((s) => s !== "onions"),
  },
  {
    slug: "nashik-red-onion",
    division: "traders",
    navLabel: "Nashik Onion",
    topic: "Nashik onion",
    h1: "Nashik onion exporter and trader: big red onions from Lasalgaon and Nashik district, graded for overseas buyers",
    metaTitle: "Nashik Onion Exporter — Big Red Onions from Lasalgaon | Versa International Traders",
    topicStats: [
      { value: "Lasalgaon", label: "One of Asia's largest onion markets" },
      { value: "55 mm+", label: "Big Nashik onion grade" },
    ],
    metaDescription:
      "Buy Nashik red onions from India in bulk: Lasalgaon and Nashik-region red onion, graded 40–60 mm, 45–65 mm and 55 mm+, rabi crop for long storage, mesh-bag packing and reefer shipping. Samples and export quotes from Versa International Traders.",
    keywords: [
      "Nashik onion",
      "Nashik onion exporter",
      "Nashik big onion",
      "Nashik red onion exporter",
      "Nashik onion export",
      "Lasalgaon onion supplier",
      "Indian red onion price",
      "rabi onion export",
      "red onion 55mm export",
    ],
    eyebrow: "Variety — Nashik red onion",
    lede:
      "Nashik district in Maharashtra is the heart of India's onion trade, and Lasalgaon is home to Asia's largest onion market. Its red onions are what most importers mean when they ask for Indian onions.",
    image: ONION_IMAGES.field,
    summary:
      "Nashik red onion is the large, pungent red onion grown in the Nashik district of Maharashtra, traded through markets such as Lasalgaon. Versa International Traders supplies Nashik red onions for export in bulk, graded to 40–60 mm, 45–65 mm or 55 mm and above, packed in mesh bags and shipped in refrigerated or ventilated containers.",
    intro: [
      "Nashik red onions are known for their deep red to pink colour, firm flesh and strong flavour. The rabi crop, harvested in spring, has thicker skins and stores well, which makes it the backbone of India's onion exports for much of the year.",
    ],
    specs: [
      { label: "Origin", value: "Nashik district, Maharashtra" },
      { label: "Colour", value: "Dark red to pink" },
      { label: "Export sizes", value: "40–60, 45–65, 55 mm+" },
      { label: "Best storage crop", value: "Rabi — harvested about March to May" },
      { label: "Usual port", value: "Nhava Sheva (JNPT), Mumbai" },
      { label: "Packing", value: "Mesh bags 10, 20, 25 or 50 kg" },
    ],
    sections: [
      {
        heading: "Why is Nashik red onion preferred for export?",
        body: [],
        bullets: [
          "Strong colour and pungency that suit Gulf, South Asian and Southeast Asian cooking",
          "Rabi-season onions with thick, dry skins that tolerate a sea voyage",
          "A large, well-organised trade around Lasalgaon and Pimpalgaon for consistent volumes",
          "Short road distance to Nhava Sheva, India's busiest container port",
        ],
      },
      {
        heading: "Which size should I order?",
        body: [
          "Retail buyers usually choose 45–65 mm or 55 mm and above for a uniform pack; food service and processing buyers often take 40–60 mm for value. Tell us your end use and we will suggest the grade.",
        ],
      },
      {
        heading: "How are Nashik onions shipped?",
        body: [
          "Most Nashik onions leave through Nhava Sheva in 40ft refrigerated or ventilated containers. For Gulf buyers, sailings to Jebel Ali and other Gulf ports are frequent and short.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is Lasalgaon?",
        answer: "Lasalgaon, in Nashik district, Maharashtra, hosts one of Asia's largest onion wholesale markets and is a reference point for Indian onion prices.",
      },
      {
        question: "Is Nashik onion the same as Indian red onion?",
        answer: "Nashik red onion is the best-known Indian red onion. Red onions are also grown in other states, but Nashik is the largest and most traded source.",
      },
      ONION_FAQS[4],
    ],
    related: ONION_RELATED_PAGES.filter((s) => s !== "nashik-red-onion"),
  },
  {
    slug: "onion-supplier-uae-gulf",
    division: "traders",
    navLabel: "Onion Supplier — UAE & Gulf",
    topic: "onions for the UAE and Gulf",
    h1: "Onion supplier for the UAE and the Gulf: Indian onions delivered to Dubai, Sharjah, Saudi Arabia, Oman and Qatar",
    metaTitle: "Onion Supplier UAE & Gulf — Indian Onions to Dubai | Versa International Traders",
    metaDescription:
      "Indian onion supplier for UAE and GCC importers: Nashik red onions and small onions delivered CFR/CIF Jebel Ali, Khorfakkan, Jeddah, Dammam, Sohar and Hamad, with reefer freight through Versa Logistics.",
    keywords: [
      "onion supplier UAE",
      "onion importer Dubai",
      "Indian onion supplier Dubai",
      "onion supplier Saudi Arabia",
      "onion wholesale GCC",
      "red onion supplier Sharjah",
    ],
    eyebrow: "Market — UAE & GCC",
    lede: "The Gulf is next door to India by sea, and Indian onions are a staple of its kitchens. We supply them with the freight handled by our own logistics venture.",
    image: ONION_IMAGES.meshBags,
    summary:
      "Versa International Traders supplies Indian onions — mainly Nashik red onions and small onions — to importers and wholesalers in the UAE, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain, delivered CFR or CIF to Jebel Ali, Khorfakkan and other Gulf ports, with reefer container freight arranged through Versa Logistics.",
    intro: [
      "Short sailing times from India's west coast to the Gulf help onions arrive firm and fresh. Our group already runs a regular India–UAE container service into Jebel Ali and Khorfakkan, which we use to quote delivered onion prices.",
    ],
    specs: [
      { label: "Products", value: "Nashik red onion, small onion, white onion" },
      { label: "UAE ports", value: "Jebel Ali, Khorfakkan" },
      { label: "Other GCC", value: "Jeddah, Dammam, Sohar, Hamad, Shuwaikh" },
      { label: "Freight", value: "Reefer or ventilated, via Versa Logistics" },
      { label: "Documents", value: "Phytosanitary, COO (incl. CEPA), quality report" },
    ],
    sections: [
      {
        heading: "Why buy onions for the Gulf through Versa International Traders?",
        body: [],
        bullets: [
          "Size-graded lots packed in the bag sizes Gulf wholesalers use",
          "Delivered CFR/CIF pricing through our own logistics venture",
          "Preferential certificate of origin under India–UAE CEPA where eligible",
          "One contact for product, container and documents",
        ],
      },
      {
        heading: "Which onions sell best in the Gulf?",
        body: [
          "Red onions of 45–65 mm and 55 mm and above are the main retail and wholesale grades; small onions are in steady demand for South Asian and home cooking. We quote the grades your customers buy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you deliver onions to Dubai?",
        answer: "Yes. We quote onions delivered CFR or CIF Jebel Ali, or Khorfakkan for Sharjah and the east coast, shipped in refrigerated or ventilated containers.",
      },
      {
        question: "Do you supply onions to Saudi Arabia, Oman and Qatar?",
        answer: "Yes. We quote delivered prices to Jeddah, Dammam, Sohar, Hamad and other GCC ports on request.",
      },
      ONION_FAQS[6],
    ],
    related: ["coffee-and-spice-supplier-uae", ...ONION_RELATED_PAGES.filter((s) => s !== "onion-supplier-uae-gulf")],
  },
  {
    slug: "onion-trading-worldwide",
    division: "traders",
    navLabel: "Onion Trading — Worldwide",
    topic: "onion trading worldwide",
    h1: "Onion trading from India to global markets: Asia, the Gulf, Africa and beyond",
    metaTitle: "Onion Trading from India to the World | Versa International Traders",
    metaDescription:
      "Versa International Traders trades Indian onions to buyers worldwide — Malaysia, Sri Lanka, Bangladesh, Nepal, Indonesia, Vietnam, the Gulf and Africa. Bulk volumes, size grading, FOB/CFR/CIF pricing and export certification.",
    keywords: [
      "onion trading India",
      "onion export to Malaysia",
      "onion export to Sri Lanka",
      "onion export to Bangladesh",
      "Indian onions worldwide",
      "bulk onion trader",
      "onion import from India",
    ],
    eyebrow: "Versa International Traders — Worldwide",
    lede: "Indian onions travel by sea to Southeast Asia, the Gulf and Africa, and by road to neighbouring countries. We trade them to wherever the buyer is.",
    image: ONION_IMAGES.sacks,
    summary:
      "Versa International Traders trades Indian onions to importers worldwide, including South Asia (Bangladesh, Sri Lanka, Nepal), Southeast Asia (Malaysia, Indonesia, Vietnam, Singapore), the Gulf and Africa. It supplies bulk volumes graded by size, quoted FOB, CFR or CIF, with phytosanitary certification and freight available through Versa Logistics.",
    intro: [
      "India is one of the world's leading onion exporters, and its onions are a familiar staple across Asia and the Middle East. Versa International Traders connects overseas buyers with that supply, managing grading, packing, certification and shipment from India.",
    ],
    specs: [
      { label: "South Asia", value: "Bangladesh, Sri Lanka, Nepal" },
      { label: "Southeast Asia", value: "Malaysia, Indonesia, Vietnam, Singapore" },
      { label: "Middle East", value: "UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain" },
      { label: "Other", value: "Africa and further markets on request" },
      { label: "Terms", value: "FOB, CFR, CIF" },
    ],
    sections: [
      {
        heading: "How does onion trading with Versa International Traders work?",
        body: [],
        bullets: [
          "Enquiry — variety, size band, packing, quantity, destination and shipment month",
          "Sample and quality report from the offered lot",
          "Contract with price, specification, shipment period and payment terms",
          "Grading, packing and phytosanitary inspection",
          "Container booking, stuffing and shipment — with Versa Logistics or your forwarder",
          "Documents released to you or your bank",
        ],
      },
      {
        heading: "Which Indian port ships to my market?",
        body: [
          "Maharashtra onions usually leave through Nhava Sheva; onions from South India can ship from Chennai, Tuticorin or Kochi. We choose the port by the onion's origin and the sailing to your destination, to keep the time in transit short.",
        ],
      },
      {
        heading: "What affects the price of Indian onions?",
        body: [
          "The harvest season, crop size and weather, domestic demand, India's export policy at the time and freight rates all move the price. Quotes are valid for a short, stated period and confirmed when the contract is signed.",
        ],
      },
    ],
    faqs: [ONION_FAQS[7], ONION_FAQS[5], ONION_FAQS[8]],
    related: ONION_RELATED_PAGES.filter((s) => s !== "onion-trading-worldwide"),
  },
]
