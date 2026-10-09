import type { DivisionPage, FAQ } from "@/types"
import { IMAGES } from "./site"
import { LOGISTICS_EXTRA_PAGES, LOGISTICS_EXTRA_SECTIONS } from "./logistics-extra"
import { LOGISTICS_KEYWORD_FAQS, LOGISTICS_SEO_PAGES } from "./logistics-seo"
import { LOGISTICS_PORT_PAGES, PORT_TO_PORT_FAQS } from "./logistics-port"
import { CHA_PAGE } from "./traders-sourcing"

export const LOGISTICS_HUB = {
  metaTitle: "Versa Logistics — Port-to-Port Freight, Best Price, Kochi",
  metaDescription:
    "Versa Logistics is a Kochi freight forwarder offering port-to-port sea freight at the best price it can find, FCL/LCL, freight forwarding, export documentation and road transportation from India to Jebel Ali, Khorfakkan and the Gulf. Call +91 97464 33133.",
  keywords: [
    "Versa Logistics",
    "freight forwarder Kochi",
    "freight forwarding Kerala",
    "sea freight India to UAE",
    "container shipping India to Dubai",
    "shipping to Jebel Ali",
    "shipping to Khorfakkan",
    "40ft container shipping",
    "cargo transportation Kerala",
    "logistics company Kochi",
    "best logistics company in Kochi",
    "best logistics service in Kerala",
    "cheapest logistics service India",
    "freight quotation Kochi",
    "best freight rates India to UAE",
    "port to port shipping India",
    "port to port freight best price",
    "Kochi to Jebel Ali port to port",
    "Kochi to Khorfakkan port to port",
    "CHA Kochi",
    "customs clearance Kochi",
  ],
  eyebrow: "Venture 01 — Versa Logistics",
  h1: "Versa Logistics: freight forwarding, sea freight and transportation from Kochi, Kerala to the UAE and worldwide — with transparent freight quotes",
  lede:
    "We move containers. Full-load and part-load sea freight out of Kochi and India's west-coast gateways, road haulage from your warehouse to the terminal, and the documents that clear the cargo — delivered as one service with one accountable contact.",
  answer:
    "Versa Logistics is the freight and transportation venture of Versa Growth Ventures, based in Kakkanad, Kochi. It provides port-to-port and door-to-port FCL and LCL sea freight at competitive, itemised prices, freight forwarding, CHA (customs clearance), export documentation support and road transportation, with regular container movements from India to Jebel Ali (Dubai) and Khorfakkan (Sharjah). Recent work includes 15 × 40ft containers of coffee beans to Jebel Ali and 2 × 40ft containers of coffee beans to Khorfakkan.",
  services: [
    {
      title: "Sea freight — FCL & LCL",
      body: "20ft and 40ft full-container loads and consolidated part loads, booked with carriers on the India–Gulf trade lane and beyond.",
      href: "/logistics/sea-freight",
    },
    {
      title: "Freight forwarding",
      body: "Carrier booking, container release, stuffing coordination, documentation and shipment tracking — handled end to end.",
      href: "/logistics/freight-forwarding",
    },
    {
      title: "Transportation",
      body: "Container trucking and cargo haulage from farms, curing works, warehouses and factories to the port gate on time.",
      href: "/logistics/transportation",
    },
    {
      title: "India → Jebel Ali",
      body: "Container freight into Dubai's Jebel Ali port, the Gulf's main gateway for re-export and the Jebel Ali Free Zone.",
      href: "/logistics/india-to-jebel-ali-shipping",
    },
    {
      title: "India → Khorfakkan",
      body: "Sea freight into Khorfakkan, Sharjah's deep-water port on the Gulf of Oman — outside the Strait of Hormuz.",
      href: "/logistics/india-to-khorfakkan-shipping",
    },
    {
      title: "Coffee & spice cargo",
      body: "Specialist handling for green coffee, cardamom, pepper and other agri-commodities that are sensitive to moisture and odour.",
      href: "/logistics/coffee-and-spice-cargo",
    },
  ],
  process: [
    { step: "01", title: "Enquiry & quote", body: "Share the commodity, volume, origin, destination port and ready date. We come back with a clear all-in quote and a sailing plan." },
    { step: "02", title: "Booking & empty release", body: "We confirm space with the carrier and arrange empty container release and pickup at the depot." },
    { step: "03", title: "Stuffing & haulage", body: "The container is stuffed at your premises or a warehouse, sealed and trucked to the terminal before cut-off." },
    { step: "04", title: "Documents & customs", body: "Invoice, packing list, shipping bill, certificates and bill of lading are aligned and filed with your customs broker." },
    { step: "05", title: "Sailing & tracking", body: "We track the vessel and keep you and your consignee updated through to arrival at Jebel Ali, Khorfakkan or the final port." },
    { step: "06", title: "Arrival & handover", body: "Arrival notice, document release and coordination with the consignee's clearing agent for delivery." },
  ],
  copy: {
    heroCta: "Request a freight quote",
    heroSecondary: "See recent shipments",
    servicesEyebrow: "Services",
    servicesH2: "Freight, forwarding and transportation services from Kochi",
    laneEyebrow: "India → UAE lane",
    laneH2: "Where does Versa Logistics ship to?",
    laneBody:
      "Our regular service runs from Kochi and India's west-coast ports into Jebel Ali (Dubai) and Khorfakkan (Sharjah), with onward connections across the GCC and to other world ports on request.",
    processEyebrow: "How a shipment runs",
    reasonsEyebrow: "Why shippers choose us",
    reasonsH2: "Why choose Versa Logistics as your freight forwarder?",
    logEyebrow: "Shipment log",
    logH2: "Recent Versa Logistics shipments",
    faqEyebrow: "FAQ",
    faqH2: "Versa Logistics FAQs",
    industriesEyebrow: "Who we ship for",
    industriesH2: "Industries and shippers we serve",
    ctaTitle: "Move your next container with Versa Logistics.",
    ctaBody: "Tell us the commodity, volume, origin and destination port. We will reply with an itemised quote and a dated plan.",
    ctaSecondary: { label: "Shipping to Jebel Ali", href: "/logistics/india-to-jebel-ali-shipping" },
  },
  reasons: [
    "Proven on the India–UAE lane: 17 × 40ft containers of coffee beans delivered to Jebel Ali and Khorfakkan",
    "Experience with agri-commodities — coffee, spices and other cargo that must stay dry and uncontaminated",
    "Trade and freight under one group: buyers sourcing through Versa International Traders can book freight in the same conversation",
    "One named contact per shipment, reachable on phone and WhatsApp",
    "Based in Kakkanad, minutes from Kochi's ICTT Vallarpadam terminal",
  ],
}

export const LOGISTICS_FAQS: FAQ[] = [
  ...PORT_TO_PORT_FAQS.slice(0, 3),
  ...LOGISTICS_KEYWORD_FAQS,
  {
    question: "What does Versa Logistics do?",
    answer:
      "Versa Logistics is a Kochi-based freight and transportation company. We arrange FCL and LCL sea freight, freight forwarding, export documentation support and road transportation, with regular container shipments from India to Jebel Ali and Khorfakkan in the UAE and onward to other markets.",
  },
  {
    question: "Do you ship 40ft containers from India to the UAE?",
    answer:
      "Yes. Shipping 40ft containers to the UAE is our core lane. We have moved 15 × 40ft containers of coffee beans to Jebel Ali Port in Dubai and 2 × 40ft containers of coffee beans to Khorfakkan Port in Sharjah, and we offer a regular service on this route.",
  },
  {
    question: "Which Indian ports do you ship from?",
    answer:
      "Our home gateway is Kochi (ICTT Vallarpadam). Depending on your cargo location, carrier schedules and freight rates we also book from other west-coast ports such as Tuticorin, Mangalore, Nhava Sheva and Mundra.",
  },
  {
    question: "How long does sea freight from Kochi to Jebel Ali take?",
    answer:
      "Transit on a direct sailing from Kochi to Jebel Ali is typically around a week. Services with transhipment take longer. Allow additional time for booking, stuffing, customs and port handling at both ends — we give a realistic door-to-door timeline with every quote.",
  },
  {
    question: "Can you transport cargo from my farm or warehouse to the port?",
    answer:
      "Yes. We arrange container trucking and cargo haulage from farms, curing works, warehouses and factories across Kerala and South India to the port, timed to the vessel cut-off.",
  },
  {
    question: "Do you handle export documentation?",
    answer:
      "Yes. We prepare and coordinate the shipping documents — commercial invoice and packing list alignment, bill of lading instructions, certificate of origin and phytosanitary certificate applications where required — and provide CHA (customs house agent) services for export customs clearance.",
  },
  {
    question: "Do you only ship coffee and spices?",
    answer:
      "No. Agricultural commodities are a specialty, but Versa Logistics carries general cargo for any shipper — food products, building materials, machinery, packaged goods and more.",
  },
  {
    question: "How do I get a freight quote?",
    answer:
      "Call +91 97464 33133, +91 97467 33133 or +91 79072 15816, message us on WhatsApp, or use the contact form. Tell us the commodity, weight or volume, container type, origin, destination port and ready date.",
  },
]

const LOGISTICS_CORE_PAGES: DivisionPage[] = [
  {
    slug: "sea-freight",
    division: "logistics",
    navLabel: "Sea Freight (FCL & LCL)",
    h1: "Sea freight from India: FCL and LCL container shipping to the UAE and worldwide",
    metaTitle: "Sea Freight India to UAE — FCL & LCL Container Shipping | Versa Logistics",
    metaDescription:
      "FCL and LCL sea freight from Kochi and Indian ports to Jebel Ali, Khorfakkan and worldwide. 20ft and 40ft container shipping with booking, documentation and tracking by Versa Logistics.",
    keywords: ["sea freight India", "FCL shipping India to UAE", "LCL shipping Kochi", "40ft container shipping", "20ft container freight", "ocean freight Kerala"],
    eyebrow: "Versa Logistics — Sea Freight",
    lede:
      "Full-container and consolidated shipping out of Kochi and India's west coast, with space booked on the carriers that serve the Gulf reliably.",
    image: IMAGES.shipAerial,
    summary:
      "Versa Logistics provides FCL (full container load) and LCL (less than container load) sea freight from Kochi and other Indian ports to Jebel Ali, Khorfakkan and ports worldwide, in 20ft and 40ft dry containers.",
    intro: [
      "Sea freight is how most of the world's trade moves, and for India–Gulf cargo it is almost always the right answer on cost. The difference between a smooth shipment and an expensive one is rarely the ocean leg itself — it is the booking, the paperwork and the timing around it.",
      "We book space, release empties, coordinate stuffing, align documents and track the vessel so the container arrives when your buyer expects it.",
    ],
    specs: [
      { label: "Container types", value: "20ft dry, 40ft dry, 40ft high cube" },
      { label: "Load types", value: "FCL and LCL (consolidated)" },
      { label: "Home gateway", value: "Kochi — ICTT Vallarpadam" },
      { label: "Key destinations", value: "Jebel Ali, Khorfakkan and onward GCC" },
      { label: "Typical cargo", value: "Coffee, spices, food products, general cargo" },
    ],
    sections: [
      {
        heading: "What is the difference between FCL and LCL?",
        body: [
          "FCL — full container load — means you pay for and use a whole 20ft or 40ft container. It is sealed at origin and opened only by your consignee, which makes it the safest and usually the cheapest option per tonne once you have enough cargo to fill most of a box.",
          "LCL — less than container load — means your cargo shares a container with other shippers' goods and you pay by volume. It suits smaller trial orders and samples, but involves extra handling at consolidation and deconsolidation warehouses and usually takes longer.",
        ],
      },
      {
        heading: "Should I ship a 20ft or a 40ft container?",
        body: [
          "A 40ft container has about twice the volume of a 20ft but not twice the weight allowance, so the choice depends on whether your cargo is heavy or bulky. Dense cargo like green coffee often reaches its weight limit before it fills the space; lighter, bulkier cargo fills a 40ft far more economically.",
          "We check your packing, the carrier's weight limits and road-weight rules at origin and destination before recommending a container size.",
        ],
      },
      {
        heading: "What is included in a Versa Logistics sea freight quote?",
        body: ["Every quote is itemised so there are no surprises when the invoice arrives. A typical door-to-port quote includes:"],
        bullets: [
          "Ocean freight and applicable carrier surcharges",
          "Origin terminal handling and documentation charges",
          "Container haulage from your premises to the port",
          "Bill of lading issuance and shipment tracking",
          "Optional services: fumigation, insurance and certificate coordination",
        ],
      },
      {
        heading: "How do you keep cargo safe on the ocean leg?",
        body: [
          "For moisture-sensitive cargo such as coffee and spices we inspect containers before loading, use container liners and desiccants where appropriate, and plan stuffing so cargo is not exposed to rain or ground moisture. For every shipment we record seal numbers and share loading photographs with the shipper.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the minimum cargo for sea freight?",
        answer: "There is no strict minimum for LCL — you can ship even a single pallet. For FCL, you pay for the whole container, so it becomes economical once your cargo fills a large share of a 20ft or 40ft box.",
      },
      {
        question: "Do you offer door-to-door sea freight?",
        answer: "We handle origin pickup, haulage, export documentation and ocean freight, and coordinate with the consignee's clearing agent at destination for delivery.",
      },
      {
        question: "Can I track my container?",
        answer: "Yes. We share the bill of lading and container number, and update you at key milestones: gate-in, loading, sailing, transhipment if any, and arrival.",
      },
      {
        question: "Which carriers do you work with?",
        answer: "We book with the main-line and regional carriers that serve the India–Gulf trade, choosing by schedule reliability, transit time and rate for each shipment.",
      },
    ],
    related: ["freight-forwarding", "india-to-jebel-ali-shipping", "india-to-khorfakkan-shipping"],
  },
  {
    slug: "freight-forwarding",
    division: "logistics",
    navLabel: "Freight Forwarding",
    h1: "Freight forwarding in Kochi, Kerala: bookings, documents and tracking in one place",
    metaTitle: "Freight Forwarder in Kochi, Kerala — Export Freight Forwarding | Versa Logistics",
    metaDescription:
      "Versa Logistics is a freight forwarding company in Kochi, Kerala. Carrier booking, container release, stuffing, export documentation and tracking for shipments to the UAE and worldwide.",
    keywords: ["freight forwarder Kochi", "freight forwarding company Kerala", "export freight forwarder India", "freight forwarding services Kakkanad", "international freight forwarding"],
    eyebrow: "Versa Logistics — Freight Forwarding",
    lede:
      "A freight forwarder is the one party that sees your whole shipment. We book it, coordinate it, document it and keep you informed until it is delivered.",
    image: IMAGES.kochiTerminal,
    summary:
      "Versa Logistics is a Kochi freight forwarder that arranges carrier bookings, empty container release, stuffing, haulage, export documentation and tracking for exporters shipping from India to the UAE and worldwide.",
    intro: [
      "Exporting involves a carrier, a trucking company, a container depot, a customs broker, a certifying authority and your buyer. As your freight forwarder, we coordinate all of them so you deal with one team.",
      "Our office in Kakkanad is close to Kochi's ICTT Vallarpadam terminal, and we work on the India–Gulf lane every week.",
    ],
    specs: [
      { label: "Scope", value: "Booking, haulage, documents, tracking" },
      { label: "Modes", value: "Sea freight (FCL/LCL) + road" },
      { label: "Base", value: "Kakkanad, Kochi" },
      { label: "Specialism", value: "Agri-commodities & India–UAE lane" },
    ],
    sections: [
      {
        heading: "What does a freight forwarder actually do?",
        body: [
          "A freight forwarder organises the movement of goods on behalf of the shipper. We do not replace the shipping line or the customs broker — we manage them, so your cargo meets every cut-off and every document matches the goods.",
        ],
        bullets: [
          "Compare carriers and book space on the right sailing",
          "Arrange empty container release and haulage to your premises",
          "Coordinate stuffing, sealing and gate-in before cut-off",
          "Prepare shipping instructions and bill of lading drafts",
          "Coordinate certificates of origin, phytosanitary and fumigation certificates",
          "Track the vessel and handle arrival notices with the consignee",
        ],
      },
      {
        heading: "Why use a freight forwarder instead of booking directly with a shipping line?",
        body: [
          "Shipping lines move containers port to port. They do not chase your truck, check your invoice against your packing list, or call your buyer when a vessel is delayed. A forwarder does. For exporters shipping a few containers a month, a forwarder usually also has access to better rates and more sailing options than a direct booking.",
        ],
      },
      {
        heading: "How do you prevent documentation errors?",
        body: [
          "Most delays at destination come from mismatched documents — a weight on the invoice that differs from the bill of lading, or a consignee name spelled two ways. We cross-check every document against the others before submission, and share drafts with you and the buyer for approval before the bill of lading is issued.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are you a customs broker?",
        answer: "We are a freight forwarder. Customs filing is done by licensed customs brokers we work with regularly, and we coordinate the full process so you have a single point of contact.",
      },
      {
        question: "Can you forward cargo that I sold on FOB terms?",
        answer: "Yes. On FOB shipments we handle everything up to loading on the vessel. On CIF or CFR shipments we can also arrange the ocean freight and insurance on your behalf.",
      },
      {
        question: "Do you work with first-time exporters?",
        answer: "Yes. We walk first-time exporters through the documents and timeline, and flag registrations or certificates they need before the first booking.",
      },
      {
        question: "What do you need from me to start?",
        answer: "Commodity, packing, gross weight, volume, pickup location, destination port, consignee details, Incoterm and cargo ready date.",
      },
    ],
    related: ["sea-freight", "transportation", "coffee-and-spice-cargo"],
  },
  {
    slug: "transportation",
    division: "logistics",
    navLabel: "Transportation",
    h1: "Cargo transportation and container trucking: from warehouse to port, on time",
    metaTitle: "Cargo Transportation & Container Trucking in Kerala | Versa Logistics",
    metaDescription:
      "Container trucking and cargo transportation from farms, warehouses and factories in Kerala and South India to Kochi and other ports. Timed to vessel cut-offs by Versa Logistics.",
    keywords: ["cargo transportation Kerala", "container trucking Kochi", "transport company Kochi", "road freight South India", "warehouse to port transport"],
    eyebrow: "Versa Logistics — Transportation",
    lede:
      "A container that misses its cut-off misses its ship. Our transportation service exists to make sure that never happens because of the road.",
    image: IMAGES.truck,
    summary:
      "Versa Logistics arranges container trucking and cargo transportation from farms, curing works, warehouses and factories in Kerala and South India to Kochi and other ports, scheduled around vessel cut-offs.",
    intro: [
      "Coffee comes down from the hills of Wayanad, Coorg and Chikmagalur. Cardamom comes from Idukki. Pepper comes from across the Western Ghats. Getting that cargo into a container and onto a terminal before cut-off is where many export schedules slip.",
      "We plan the road leg backwards from the vessel: empty pickup, stuffing slot, travel time, gate-in window.",
    ],
    specs: [
      { label: "Service", value: "Container trucking & cargo haulage" },
      { label: "Coverage", value: "Kerala, Karnataka & Tamil Nadu" },
      { label: "Destinations", value: "Kochi and west-coast ports" },
      { label: "Loads", value: "20ft, 40ft and loose cargo" },
    ],
    sections: [
      {
        heading: "What transportation services does Versa Logistics offer?",
        body: ["We arrange road transport for export and domestic cargo, including:"],
        bullets: [
          "Empty container pickup from the depot to your premises",
          "Loaded container haulage to the port terminal",
          "Loose cargo transport from farms and curing works to a stuffing warehouse",
          "Domestic cargo movement between warehouses and cities",
        ],
      },
      {
        heading: "How do you make sure the container reaches the port before cut-off?",
        body: [
          "We schedule the truck from the vessel's gate-in cut-off, not from when the cargo is ready. That leaves a buffer for loading delays, traffic and weighbridge queues. If a delay looks likely, we tell you early enough to re-plan rather than roll the container to the next sailing without warning.",
        ],
      },
      {
        heading: "Can you transport agricultural produce safely?",
        body: [
          "Yes. For coffee and spices we use covered vehicles for loose cargo, avoid loading in rain, and keep produce away from odorous goods. Loading photographs and seal numbers are shared with you for every container.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you transport cargo outside Kerala?",
        answer: "Yes. We regularly move cargo from Karnataka and Tamil Nadu growing and manufacturing regions to Kochi and other west-coast ports.",
      },
      {
        question: "Can I book transportation without booking sea freight?",
        answer: "Yes. Transportation can be booked as a standalone service for export or domestic cargo.",
      },
      {
        question: "Is my cargo insured during transport?",
        answer: "Transit insurance can be arranged on request. We recommend it for high-value agri-commodities.",
      },
    ],
    related: ["freight-forwarding", "sea-freight", "coffee-and-spice-cargo"],
  },
  {
    slug: "india-to-jebel-ali-shipping",
    division: "logistics",
    navLabel: "India → Jebel Ali",
    h1: "Shipping from India to Jebel Ali Port, Dubai: 20ft and 40ft container freight",
    metaTitle: "Shipping from India to Jebel Ali Port, Dubai — Container Freight | Versa Logistics",
    metaDescription:
      "Container shipping from Kochi and India to Jebel Ali Port, Dubai. Versa Logistics has shipped 15 × 40ft containers of coffee beans to Jebel Ali. FCL/LCL, documentation and tracking.",
    keywords: ["shipping India to Jebel Ali", "Kochi to Jebel Ali shipping", "container shipping to Dubai from India", "sea freight India to Dubai", "Jebel Ali port freight forwarder", "40ft container to Dubai"],
    eyebrow: "Versa Logistics — Route: India → Jebel Ali",
    lede:
      "Jebel Ali is the Gulf's busiest gateway and the natural first stop for Indian exports heading into Dubai, the UAE and re-export markets. It is also where we delivered 15 forty-foot containers of coffee beans.",
    image: IMAGES.jebelAli,
    summary:
      "Versa Logistics ships 20ft and 40ft containers from Kochi and other Indian ports to Jebel Ali Port in Dubai, handling booking, haulage, documentation and tracking. The company has shipped 15 × 40ft containers of coffee beans to Jebel Ali.",
    intro: [
      "Jebel Ali Port, operated by DP World, is the largest port in the Middle East and sits beside the Jebel Ali Free Zone (JAFZA). For Indian exporters it offers frequent direct sailings, deep carrier choice and a fast route into Dubai's wholesale and re-export trade.",
      "We run a regular service on this lane and know what Jebel Ali consignees expect from the paperwork.",
    ],
    specs: [
      { label: "Origin", value: "Kochi (ICTT Vallarpadam) + west-coast ports" },
      { label: "Destination", value: "Jebel Ali Port, Dubai, UAE" },
      { label: "Transit (direct)", value: "Typically around one week" },
      { label: "Track record", value: "15 × 40ft containers of coffee beans" },
      { label: "Load types", value: "FCL 20ft/40ft, LCL" },
    ],
    sections: [
      {
        heading: "Why ship to Jebel Ali?",
        body: [
          "Jebel Ali has the widest carrier network in the region, so there are more sailings and more competitive rates from India than to most other Gulf ports. Cargo can be cleared for the UAE market or stored in the free zone for re-export to the wider GCC, Africa and Central Asia.",
        ],
      },
      {
        heading: "How long does shipping from Kochi to Jebel Ali take?",
        body: [
          "The ocean leg on a direct service is typically around a week. Door-to-door, allow additional days for booking, empty release, stuffing, customs clearance in India and clearance at Jebel Ali. We give you a dated plan with each quote rather than a best-case transit time.",
        ],
      },
      {
        heading: "What documents are needed to ship to Jebel Ali?",
        body: ["For most commercial cargo from India to Dubai your consignee will expect:"],
        bullets: [
          "Commercial invoice and packing list",
          "Bill of lading",
          "Certificate of origin",
          "Phytosanitary certificate for plant products such as coffee and spices",
          "Any product-specific certificates your buyer or UAE authorities require",
        ],
      },
      {
        heading: "Case in point: 15 × 40ft containers of coffee beans",
        body: [
          "Versa Logistics moved 15 forty-foot containers of coffee beans from India to Jebel Ali. The shipment called for staggered stuffing, coordinated haulage to meet successive cut-offs and document sets that matched each container exactly — the kind of volume work our regular India–UAE service is built for.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you ship to Jebel Ali every week?",
        answer: "We book on the sailings that best fit your cargo-ready date. There are frequent weekly sailings from India to Jebel Ali, and our service on this lane runs continuously.",
      },
      {
        question: "Can you deliver to JAFZA?",
        answer: "Yes. We coordinate with your consignee's clearing agent for delivery to warehouses in the Jebel Ali Free Zone or elsewhere in Dubai.",
      },
      {
        question: "What cargo have you shipped to Jebel Ali?",
        answer: "Our most recent large movement was 15 × 40ft containers of coffee beans. We also handle spices, food products and general cargo on this route.",
      },
      {
        question: "Is Jebel Ali or Khorfakkan better for my cargo?",
        answer: "Jebel Ali suits most Dubai-bound and re-export cargo. Khorfakkan can suit consignees in Sharjah, the east coast or the northern Emirates. We compare both on rate, transit and final delivery before you book.",
      },
    ],
    related: ["india-to-khorfakkan-shipping", "sea-freight", "coffee-and-spice-cargo"],
  },
  {
    slug: "india-to-khorfakkan-shipping",
    division: "logistics",
    navLabel: "India → Khorfakkan",
    h1: "Shipping from India to Khorfakkan Port, Sharjah: container freight to the UAE east coast",
    metaTitle: "Shipping from India to Khorfakkan Port, Sharjah — Sea Freight | Versa Logistics",
    metaDescription:
      "Sea freight from Kochi and India to Khorfakkan Port, Sharjah. Versa Logistics has shipped 2 × 40ft containers of coffee beans to Khorfakkan. FCL booking, documents and tracking.",
    keywords: ["shipping India to Khorfakkan", "Khorfakkan port shipping", "sea freight to Sharjah from India", "Kochi to Khorfakkan", "container shipping Khorfakkan", "Khor Fakkan freight forwarder"],
    eyebrow: "Versa Logistics — Route: India → Khorfakkan",
    lede:
      "Khorfakkan is Sharjah's deep-water container port on the Gulf of Oman. For the right consignee it is a quicker, calmer way into the UAE — and a route we have already delivered on.",
    image: IMAGES.khorfakkanCranes,
    summary:
      "Versa Logistics ships containers from Kochi and other Indian ports to Khorfakkan Port in Sharjah, UAE, and has delivered 2 × 40ft containers of coffee beans on this route.",
    intro: [
      "Khorfakkan sits on the UAE's east coast, outside the Strait of Hormuz. It is a major transhipment hub and serves importers in Sharjah, Fujairah and the northern Emirates, with road links across to the west coast.",
      "We shipped 2 × 40ft containers of coffee beans into Khorfakkan and offer continuing service on the route.",
    ],
    specs: [
      { label: "Origin", value: "Kochi + west-coast ports" },
      { label: "Destination", value: "Khorfakkan Port, Sharjah, UAE" },
      { label: "Location", value: "East coast, Gulf of Oman" },
      { label: "Track record", value: "2 × 40ft containers of coffee beans" },
      { label: "Load types", value: "FCL 20ft/40ft" },
    ],
    sections: [
      {
        heading: "Why choose Khorfakkan over Jebel Ali?",
        body: [
          "Khorfakkan lies outside the Strait of Hormuz, so vessels calling there avoid the extra sailing into the Gulf. For consignees in Sharjah, Fujairah and the east coast, the final road leg can also be shorter. The trade-off is fewer direct sailings from India than Jebel Ali, so the right choice depends on your schedule and final delivery point.",
        ],
      },
      {
        heading: "How do shipments to Khorfakkan work?",
        body: [
          "The origin process is the same as any UAE shipment: booking, empty release, stuffing, haulage, documentation and sailing. At destination we coordinate the arrival notice and document release with your consignee's clearing agent in Sharjah.",
        ],
      },
      {
        heading: "Case in point: 2 × 40ft containers of coffee beans",
        body: [
          "Versa Logistics shipped two 40ft containers of coffee beans from India to Khorfakkan. For a buyer on the east coast, this avoided the longer road haul from Jebel Ali and kept the documents simple with a single consignee and clearing agent.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Khorfakkan Port?",
        answer: "Khorfakkan Port is in the Emirate of Sharjah on the UAE's east coast, facing the Gulf of Oman and outside the Strait of Hormuz.",
      },
      {
        question: "Have you shipped to Khorfakkan before?",
        answer: "Yes. Versa Logistics has shipped 2 × 40ft containers of coffee beans from India to Khorfakkan.",
      },
      {
        question: "Can cargo landed at Khorfakkan be delivered to Dubai?",
        answer: "Yes. Khorfakkan is connected by road to Sharjah, Dubai and the rest of the UAE. We compare the total cost against shipping directly to Jebel Ali before recommending a route.",
      },
    ],
    related: ["india-to-jebel-ali-shipping", "sea-freight", "freight-forwarding"],
  },
  {
    slug: "coffee-and-spice-cargo",
    division: "logistics",
    navLabel: "Coffee & Spice Cargo",
    h1: "Coffee and spice cargo shipping: agri-commodity freight from India, handled with care",
    metaTitle: "Coffee & Spice Cargo Shipping from India — Agri-Commodity Freight | Versa Logistics",
    metaDescription:
      "Specialist freight for green coffee, cardamom, black pepper and other agri-commodities from India to the UAE and worldwide. Moisture control, fumigation and phytosanitary coordination.",
    keywords: ["coffee shipping from India", "spice cargo shipping", "agri commodity freight India", "green coffee container shipping", "spice export logistics Kerala"],
    eyebrow: "Versa Logistics — Commodity Cargo",
    lede:
      "Coffee and spices are valuable, hygroscopic and easily tainted. Shipping them well is a craft — and it is the craft our group was built around.",
    image: IMAGES.coffeeSack,
    summary:
      "Versa Logistics specialises in shipping green coffee, cardamom, black pepper and other agricultural commodities from India, with moisture control, fumigation and phytosanitary certificate coordination.",
    intro: [
      "Our sister venture Versa International Traders exports coffee and spices, so Versa Logistics was built to understand what that cargo needs. A container of green coffee can lose value to condensation; pepper and cardamom can pick up odours from the wrong neighbour in a warehouse.",
      "We apply the same care to other shippers' agri-cargo that we apply to our own.",
    ],
    specs: [
      { label: "Commodities", value: "Green coffee, cardamom, pepper, other spices" },
      { label: "Controls", value: "Container inspection, liners, desiccants" },
      { label: "Certificates", value: "Phytosanitary & fumigation coordination" },
      { label: "Track record", value: "17 × 40ft containers of coffee beans to the UAE" },
    ],
    sections: [
      {
        heading: "What makes coffee and spice cargo different?",
        body: [
          "Green coffee and dried spices absorb and release moisture. As a container travels from humid Kerala across warmer seas, that moisture can condense on the roof and drip back onto the bags — so-called container rain. Spices also absorb odours easily, so warehouse and container hygiene matters.",
        ],
      },
      {
        heading: "How do you protect coffee and spices in transit?",
        body: ["Our standard checklist for agri-commodity containers includes:"],
        bullets: [
          "Inspecting containers for holes, damp and odour before accepting them",
          "Using liners, kraft paper and desiccant packs where appropriate",
          "Stuffing only dry, properly conditioned cargo, and never in the rain",
          "Keeping bags off the container floor and walls",
          "Coordinating fumigation and phytosanitary certificates in time for sailing",
        ],
      },
      {
        heading: "Can you ship coffee and spices sourced from other suppliers?",
        body: [
          "Yes. Versa Logistics is an independent freight service. Whether your coffee or spices come from Versa International Traders or another supplier, the same handling standard applies.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do coffee and spices need a phytosanitary certificate?",
        answer: "Plant products such as green coffee beans and whole spices generally require a phytosanitary certificate issued in India for most destinations, including the UAE. We coordinate the inspection and certificate application in time for sailing.",
      },
      {
        question: "How much green coffee fits in a container?",
        answer: "A 20ft container is commonly loaded with about 19.2 tonnes — 320 bags of 60 kg. A 40ft container can take more, subject to carrier and road weight limits at origin and destination.",
      },
      {
        question: "Can I buy coffee from Versa International Traders and ship with Versa Logistics?",
        answer: "Yes. That is the advantage of the group: one conversation covers product, samples, documents and freight.",
      },
    ],
    related: ["india-to-jebel-ali-shipping", "sea-freight", "transportation"],
  },
]

export const LOGISTICS_PAGES: DivisionPage[] = [
  ...LOGISTICS_CORE_PAGES.map((p) => (LOGISTICS_EXTRA_SECTIONS[p.slug] ? { ...p, sections: [...p.sections, LOGISTICS_EXTRA_SECTIONS[p.slug]] } : p)),
  ...LOGISTICS_EXTRA_PAGES,
  ...LOGISTICS_SEO_PAGES,
  ...LOGISTICS_PORT_PAGES,
  CHA_PAGE,
]
