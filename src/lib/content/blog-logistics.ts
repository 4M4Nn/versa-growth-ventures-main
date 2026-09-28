import type { BlogPost } from "@/types"
import { IMAGES } from "./site"

const QUOTE = { label: "Get a free freight quote", href: "/logistics/freight-quote" }

export const BLOG_LOGISTICS_POSTS: BlogPost[] = [
  {
    slug: "how-to-get-the-best-freight-quotation-india",
    title: "How to Get the Best Freight Quotation in India (and Compare Quotes Fairly)",
    metaDescription:
      "A practical guide to getting the best freight quotation in India: what information to share, what an itemised quote should include, and how to compare forwarders fairly.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "7 min read",
    keywords: ["best freight quotation India", "freight quote comparison", "how to get freight quote", "freight rates India", "freight forwarder quote Kochi"],
    image: IMAGES.kochiTerminal,
    excerpt: "The best quote is not the lowest number — it is the clearest picture of what your shipment will really cost.",
    answer:
      "To get the best freight quotation in India, give forwarders complete shipment details (cargo, weight, volume, container type, pickup point, destination, ready date and Incoterm), ask for an itemised quote with stated validity, and compare the total cost for the same scope — not just the ocean freight line.",
    sections: [
      {
        heading: "What information should you give for a freight quote?",
        body: ["Accurate quotes need accurate inputs. Share:"],
        bullets: [
          "Commodity and packing (bags, pallets, cartons)",
          "Gross weight and volume in CBM, or number of containers",
          "Container type — 20ft, 40ft, 40ft high cube or LCL",
          "Pickup address and destination port or city",
          "Cargo-ready date and preferred Incoterm (FOB, CFR, CIF)",
          "Extra services needed — transport, documentation, insurance",
        ],
      },
      {
        heading: "What should an itemised freight quote include?",
        body: ["A good quote separates each charge so nothing is hidden:"],
        bullets: [
          "Ocean freight and carrier surcharges",
          "Origin terminal handling charges",
          "Documentation and bill of lading fees",
          "Road transport to the port",
          "Customs brokerage (or a note that it is excluded)",
          "Validity date",
        ],
      },
      {
        heading: "How do you compare freight quotes fairly?",
        body: [
          "Line quotes up by scope. If one forwarder includes haulage and documentation and another does not, the cheaper-looking quote may cost more in the end. Ask every forwarder to quote the same services, then compare the totals and the validity dates.",
        ],
      },
      {
        heading: "Why do freight quotes expire?",
        body: [
          "Ocean freight changes with fuel costs, demand and season. A quote reflects the market on the day it is issued, which is why reputable forwarders state how long each quote is valid.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are freight quotations free?",
        answer: "Yes, most forwarders — including Versa Logistics — provide freight quotations free and without obligation.",
      },
      {
        question: "How long does it take to get a freight quote?",
        answer: "It depends on the route and cargo. Standard India–UAE container quotes are usually quick once complete details are shared.",
      },
    ],
    relatedLinks: [QUOTE, { label: "Affordable freight India → UAE", href: "/logistics/affordable-freight-india-to-uae" }],
  },
  {
    slug: "how-sea-freight-rates-are-calculated-india",
    title: "How Sea Freight Rates Are Calculated for Shipments from India",
    metaDescription:
      "How FCL and LCL sea freight rates are calculated for exports from India: per-container vs per-CBM pricing, surcharges, origin charges and what drives rates up or down.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "6 min read",
    keywords: ["how sea freight is calculated", "sea freight rates India", "FCL rate per container", "LCL per CBM rate", "freight surcharges"],
    image: IMAGES.shipAerial,
    excerpt: "Per box, per cubic metre, plus surcharges — here is how the number on your quote is built.",
    answer:
      "FCL sea freight is priced per container (20ft or 40ft); LCL is priced per cubic metre or per tonne, whichever is higher. Carrier surcharges, terminal handling, documentation and inland transport are added on top. Rates move with fuel prices, demand, season and route.",
    sections: [
      {
        heading: "How is FCL freight priced?",
        body: ["FCL is a flat rate per container for the route, regardless of how full it is. That is why FCL becomes cheaper per tonne as your cargo fills more of the box."],
      },
      {
        heading: "How is LCL freight priced?",
        body: [
          "LCL uses 'weight or measure': you pay per cubic metre or per tonne, whichever is greater. Consolidation and deconsolidation charges apply at each end.",
        ],
      },
      {
        heading: "Which surcharges appear on freight quotes?",
        body: [],
        bullets: [
          "Bunker or fuel adjustment surcharges",
          "Peak season surcharges in busy periods",
          "Terminal handling charges at origin and destination",
          "Documentation and bill of lading fees",
          "Equipment or imbalance surcharges on some lanes",
        ],
      },
      {
        heading: "What makes freight rates go up or down?",
        body: [
          "Fuel prices, vessel capacity, seasonal demand, port congestion and currency movements all affect rates. Booking ahead and staying flexible on dates are the most reliable ways to protect your cost.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a 40ft container twice the price of a 20ft?",
        answer: "Usually not — a 40ft often costs less than double a 20ft, which is why bulky cargo is cheaper per unit in a 40ft. Weight limits still apply.",
      },
    ],
    relatedLinks: [QUOTE, { label: "Sea freight FCL & LCL", href: "/logistics/sea-freight" }],
  },
  {
    slug: "cheapest-way-to-ship-from-india-to-dubai",
    title: "The Cheapest Way to Ship from India to Dubai in 2026",
    metaDescription:
      "Find the cheapest reliable way to ship from India to Dubai: sea vs air, FCL vs LCL, the right ports, timing and how to avoid hidden charges.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "6 min read",
    keywords: ["cheapest way to ship India to Dubai", "cheapest shipping to Dubai from India", "cheap freight Kochi to Dubai", "shipping cost India to Dubai"],
    image: IMAGES.jebelAli,
    excerpt: "Cheap and reliable are not opposites — if you plan the whole route.",
    answer:
      "The cheapest reliable way to ship commercial cargo from India to Dubai is sea freight to Jebel Ali: FCL once your cargo fills most of a container, LCL for smaller loads, shipped from the Indian port nearest your cargo, booked early and quoted with every charge included.",
    sections: [
      {
        heading: "Sea freight or air freight?",
        body: ["For anything heavier than small parcels, sea freight costs a fraction of air freight. Air makes sense only for urgent, high-value, low-weight goods."],
      },
      {
        heading: "Which Indian port is cheapest for Dubai?",
        body: [
          "The cheapest port is usually the one nearest your cargo, because road transport in India adds significant cost. For Kerala cargo that is Kochi; direct sailings from Kochi to Jebel Ali take around a week.",
        ],
      },
      {
        heading: "Five ways to cut your shipping cost to Dubai",
        body: [],
        bullets: [
          "Fill containers — consolidate orders into FCL where possible",
          "Book early, especially before peak seasons",
          "Stay flexible on the sailing date",
          "Get documents right first time to avoid demurrage",
          "Ask for itemised quotes and compare total cost",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does sea freight from Kochi to Dubai take?",
        answer: "A direct sailing from Kochi to Jebel Ali is typically around a week at sea; allow extra days for booking, stuffing and clearance.",
      },
    ],
    relatedLinks: [QUOTE, { label: "Shipping India → Jebel Ali", href: "/logistics/india-to-jebel-ali-shipping" }],
  },
  {
    slug: "how-to-choose-the-best-logistics-company-in-kochi",
    title: "How to Choose the Best Logistics Company in Kochi",
    metaDescription:
      "A checklist for choosing the best logistics company in Kochi: transparent quotes, route experience, cargo expertise, documentation strength and accountability.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "5 min read",
    keywords: ["best logistics company in Kochi", "choose freight forwarder Kochi", "logistics company Kerala", "best logistics service Kochi"],
    image: IMAGES.kochiSunset,
    excerpt: "Seven questions that separate a reliable Kochi logistics partner from a cheap-looking quote.",
    answer:
      "The best logistics company in Kochi quotes transparently with every charge itemised, has proven experience on your route and with your cargo, handles documentation carefully, is close to the Vallarpadam terminal, and gives you one accountable contact from booking to delivery.",
    sections: [
      {
        heading: "Seven questions to ask a Kochi logistics company",
        body: [],
        bullets: [
          "Will you send an itemised quote with validity?",
          "Which shipments have you delivered on my route?",
          "Have you handled my type of cargo before?",
          "Who prepares and checks the documents?",
          "Can you arrange transport from my premises to port?",
          "Who is my contact, and how do I reach them?",
          "What happens if the vessel is delayed or cargo rolls over?",
        ],
      },
      {
        heading: "Why local presence in Kochi matters",
        body: [
          "A forwarder close to Vallarpadam can resolve gate-in problems, weighment issues and document queries the same day — the difference between making a sailing and missing it.",
        ],
      },
      {
        heading: "Red flags to watch for",
        body: [],
        bullets: [
          "A single lump-sum rate with no breakdown",
          "No stated validity on the quote",
          "Vague answers about destination charges",
          "No named contact after booking",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Versa Logistics based in Kochi?",
        answer: "In Kakkanad, Kochi — a short drive from the ICTT Vallarpadam container terminal.",
      },
    ],
    relatedLinks: [{ label: "Logistics company in Kochi", href: "/logistics/logistics-company-kochi" }, QUOTE],
  },
  {
    slug: "hidden-charges-in-freight-quotes",
    title: "Hidden Charges in Freight Quotes: What to Check Before You Book",
    metaDescription:
      "The hidden charges that turn a cheap freight quote into an expensive invoice — THC, documentation, B/L fees, haulage, destination charges, demurrage — and how to avoid them.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "6 min read",
    keywords: ["hidden charges freight quote", "freight surcharges explained", "THC charges India", "demurrage detention charges", "freight invoice extra charges"],
    image: IMAGES.khorfakkanCranes,
    excerpt: "The cheapest quote is often the one that left the most out.",
    answer:
      "Common hidden charges in freight quotes include origin and destination terminal handling, documentation and bill of lading fees, haulage, customs brokerage, delivery-order fees and demurrage or detention. Ask for an itemised quote that states exactly what is included and excluded.",
    sections: [
      {
        heading: "Which charges are often left out of freight quotes?",
        body: [],
        bullets: [
          "Origin terminal handling charges (THC)",
          "Documentation, bill of lading and seal fees",
          "Road transport to the port",
          "Customs brokerage and shipping bill filing",
          "Destination THC and delivery-order charges",
          "Fumigation, certificates and insurance",
        ],
      },
      {
        heading: "What are demurrage and detention?",
        body: [
          "Demurrage is charged when a container stays at the terminal beyond the free days; detention when it stays outside the terminal too long. Both are avoidable with good planning and correct documents.",
        ],
      },
      {
        heading: "How to protect yourself",
        body: [
          "Ask every forwarder to list included and excluded items, confirm the free days at destination, and get the validity in writing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Versa Logistics include all charges in its quotes?",
        answer: "Every charge within the agreed scope is listed line by line, and anything excluded is stated clearly.",
      },
    ],
    relatedLinks: [QUOTE, { label: "Export documentation", href: "/logistics/export-documentation" }],
  },
  {
    slug: "freight-forwarding-costs-kerala",
    title: "Freight Forwarding Costs in Kerala: A Plain-English Breakdown",
    metaDescription:
      "What exporters in Kerala pay for when they ship: road transport, port and terminal charges, documentation, ocean freight and forwarder service fees — explained simply.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "5 min read",
    keywords: ["freight forwarding cost Kerala", "export shipping cost Kerala", "logistics cost Kochi", "freight charges Kerala"],
    image: IMAGES.truck,
    excerpt: "Where every rupee of an export shipment from Kerala actually goes.",
    answer:
      "An export shipment from Kerala typically costs: road transport to Kochi port, origin terminal handling, documentation and customs brokerage, ocean freight with surcharges, and the forwarder's service fee — plus optional insurance, fumigation and certificates.",
    sections: [
      {
        heading: "What are the main cost components?",
        body: [],
        bullets: [
          "Inland transport from your unit to Kochi (distance-based)",
          "Origin terminal handling at Vallarpadam",
          "Shipping bill filing and documentation",
          "Ocean freight and surcharges",
          "Forwarding service fee",
        ],
      },
      {
        heading: "How can Kerala exporters lower costs?",
        body: [
          "Ship through Kochi when your cargo is in Kerala, plan stuffing to avoid extra truck trips, and book with enough lead time to secure the better sailings.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it cheaper to ship from Kochi than Chennai for Kerala cargo?",
        answer: "Usually yes, because the shorter road leg to Kochi saves more than any difference in ocean freight — but we compare both when it matters.",
      },
    ],
    relatedLinks: [QUOTE, { label: "Logistics company in Kerala", href: "/logistics/logistics-company-kerala" }],
  },
  {
    slug: "how-to-reduce-freight-costs-exporters",
    title: "10 Ways Exporters Can Reduce Freight Costs Without Risking Delivery",
    metaDescription:
      "Ten practical ways for Indian exporters to cut freight costs: consolidation, container choice, booking timing, port choice, packing, documents and more.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "6 min read",
    keywords: ["reduce freight costs", "lower shipping costs exporters", "save on freight India", "cheap freight tips"],
    image: IMAGES.coffeeSack,
    excerpt: "Most savings come from planning, not from bargaining.",
    answer:
      "Exporters reduce freight costs most by consolidating into full containers, choosing container size by weight and volume, booking early, staying flexible on dates, shipping from the nearest port, packing efficiently, and getting documents right the first time to avoid demurrage.",
    sections: [
      {
        heading: "Ten ways to cut freight costs",
        body: [],
        bullets: [
          "Consolidate shipments into full containers",
          "Pick 20ft vs 40ft by both weight and volume",
          "Book early ahead of peak seasons",
          "Stay flexible on sailing dates",
          "Ship from the port nearest your cargo",
          "Land at the port nearest your consignee",
          "Pack to use container space efficiently",
          "Prepare documents correctly the first time",
          "Avoid storage by timing stuffing with the cut-off",
          "Compare itemised quotes, not headline rates",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a forwarder help reduce costs?",
        answer: "A good forwarder compares carriers, routes and container sizes and plans timing to avoid extra charges — often saving more than its fee.",
      },
    ],
    relatedLinks: [QUOTE, { label: "20ft vs 40ft container guide", href: "/blog/20ft-vs-40ft-container-guide" }],
  },
  {
    slug: "best-time-to-book-freight-india-to-gulf",
    title: "When Is the Best Time to Book Freight from India to the Gulf?",
    metaDescription:
      "How early to book sea freight from India to the UAE and GCC, how seasons and festivals affect space and rates, and how to plan around peak periods.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "4 min read",
    keywords: ["when to book freight", "peak season shipping India", "book container early", "freight booking India UAE"],
    image: IMAGES.khorfakkanVessel,
    excerpt: "Book too late in peak season and the cheapest option is already gone.",
    answer:
      "Book sea freight from India to the Gulf as early as your cargo-ready date allows — ideally a couple of weeks ahead, and earlier before festival and year-end peaks when space tightens and peak-season surcharges can apply.",
    sections: [
      {
        heading: "Why booking early saves money",
        body: ["Early bookings secure space on preferred sailings at current rates, before capacity tightens and surcharges rise."],
      },
      {
        heading: "Which periods get busy?",
        body: [
          "Demand rises ahead of major festivals, around year-end restocking and during harvest export seasons for commodities like coffee and spices. Plan these shipments earlier.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book before my cargo is ready?",
        answer: "Yes. Share the expected ready date and we plan the booking around it, adjusting if production timing changes.",
      },
    ],
    relatedLinks: [QUOTE, { label: "Shipping to the GCC", href: "/logistics/gcc-shipping" }],
  },
  {
    slug: "door-to-door-shipping-india-to-uae-guide",
    title: "Door-to-Door Shipping from India to the UAE: How It Works",
    metaDescription:
      "How door-to-door shipping from India to the UAE works: pickup, export clearance, ocean freight, UAE customs clearance and delivery — and what each party handles.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "5 min read",
    keywords: ["door to door shipping India to UAE", "door to door cargo Kochi Dubai", "India to UAE cargo delivery", "freight forwarder door to door"],
    image: IMAGES.truck,
    excerpt: "From your gate in India to your buyer's warehouse in the UAE — step by step.",
    answer:
      "Door-to-door shipping from India to the UAE covers pickup from the shipper, export customs clearance, ocean freight to Jebel Ali or Khorfakkan, UAE import clearance by a clearing agent, and delivery to the consignee's warehouse — coordinated by the freight forwarder.",
    sections: [
      {
        heading: "What are the stages of door-to-door shipping?",
        body: [],
        bullets: [
          "Pickup and stuffing at the shipper's premises",
          "Road transport to the Indian port",
          "Export clearance and shipping bill",
          "Ocean freight to the UAE port",
          "Import clearance by the consignee's clearing agent",
          "Delivery to the final warehouse",
        ],
      },
      {
        heading: "Who pays for which part?",
        body: ["The Incoterm decides: under FOB the buyer pays from loading onward; under CIF the seller pays freight and insurance; under DAP or DDP the seller covers delivery to destination (and duties under DDP)."],
      },
    ],
    faqs: [
      {
        question: "Can Versa Logistics quote door-to-door to Dubai?",
        answer: "Yes. We quote pickup, ocean freight and coordination with a UAE clearing agent for delivery to your consignee.",
      },
    ],
    relatedLinks: [QUOTE, { label: "Freight forwarding", href: "/logistics/freight-forwarding" }],
  },
]
