import type { BlogPost } from "@/types"
import { IMAGES } from "./site"

const QUOTE = { label: "Get a port-to-port price", href: "/logistics/freight-quote" }
const P2P = { label: "Port-to-port shipping", href: "/logistics/port-to-port-shipping" }

// Guides on port-to-port freight and getting the best price
export const BLOG_PORT_POSTS: BlogPost[] = [
  {
    slug: "port-to-port-shipping-explained",
    title: "Port-to-Port Shipping Explained: What Is Included, What Is Not, and Who Pays",
    metaDescription:
      "Port-to-port shipping covers only the sea leg between two terminals. What the rate includes, what it leaves out, who pays which charge, and when to choose it.",
    category: "Logistics",
    date: "2026-10-01",
    readTime: "6 min read",
    keywords: ["port to port shipping", "what is port to port shipping", "CY CY shipping", "port to port freight charges", "sea freight scope"],
    image: IMAGES.shipAerial,
    excerpt: "The narrowest freight quote there is — and the easiest to compare, once you know what sits outside it.",
    answer:
      "Port-to-port shipping is sea freight from the terminal at the loading port to the terminal at the discharge port. The rate covers ocean freight and carrier surcharges. It does not cover trucking to the port, export or import customs clearance, or delivery from the destination port — the shipper and consignee arrange those separately.",
    sections: [
      {
        heading: "What does port to port mean?",
        body: [
          "The carrier takes responsibility for the container when it is gated into the terminal at the loading port and gives it up when the container is discharged at the destination terminal. The trade writes this as CY/CY: container yard to container yard.",
        ],
      },
      {
        heading: "What is included in a port-to-port rate?",
        body: [],
        bullets: [
          "Ocean freight per container, or per cubic metre or tonne for LCL",
          "Carrier surcharges — fuel, currency and similar adjustments",
          "Loading at origin and discharge at destination",
        ],
      },
      {
        heading: "What is not included?",
        body: [],
        bullets: [
          "Road transport from the shipper to the loading port",
          "Export customs clearance and shipping bill",
          "Terminal handling and documentation fees, when billed separately",
          "Import customs clearance, duties and taxes",
          "Delivery from the discharge port to the consignee",
          "Marine insurance",
        ],
      },
      {
        heading: "Who pays for the port-to-port leg?",
        body: [
          "The Incoterm decides. Under FOB the buyer books and pays the sea freight. Under CFR and CIF the seller pays freight to the destination port, adding insurance under CIF. Destination charges fall to the buyer in all three.",
        ],
      },
    ],
    faqs: [
      { question: "Is port to port the same as CY/CY?", answer: "Yes. CY/CY means container yard to container yard — the carrier's responsibility runs between the two port terminals." },
      { question: "Does port-to-port include insurance?", answer: "No. Marine insurance is arranged separately, or by the seller under CIF terms." },
    ],
    relatedLinks: [QUOTE, P2P],
  },
  {
    slug: "port-to-port-vs-door-to-door-which-is-cheaper",
    title: "Port-to-Port vs Door-to-Door Shipping: Which Is Really Cheaper?",
    metaDescription:
      "Port-to-port quotes look cheaper than door-to-door because they cover less. How to compare the two fairly, and how to tell which gives the lower total cost for your shipment.",
    category: "Logistics",
    date: "2026-10-01",
    readTime: "5 min read",
    keywords: ["port to port vs door to door", "door to door vs port to port cost", "cheapest shipping option India to UAE", "sea freight scope comparison"],
    image: IMAGES.truck,
    excerpt: "One number is smaller. That does not make it the cheaper shipment.",
    answer:
      "Port-to-port is cheaper on paper because it covers only the sea leg. It gives the lower total cost when you already have a transporter and customs broker at origin and a clearing agent at destination. Door-to-door can cost less overall when you would otherwise arrange those services one by one, because a forwarder plans the legs together and avoids waiting charges.",
    sections: [
      {
        heading: "What is the difference in scope?",
        body: [],
        bullets: [
          "Port to port — sea freight between two terminals only",
          "Door to port — pickup, export clearance and sea freight",
          "Door to door — pickup, sea freight, import clearance and delivery",
        ],
      },
      {
        heading: "How do you compare the two fairly?",
        body: [
          "Build the full cost for each option. To the port-to-port rate add your own trucking, clearance at both ends and delivery. Then compare that total with the door-to-door quote. Compare the same container size, sailing and validity period.",
        ],
      },
      {
        heading: "When does port to port win?",
        body: [],
        bullets: [
          "You ship regularly and have negotiated transport rates",
          "Your buyer insists on their own clearing agent",
          "You sell on FOB, CFR or CIF terms",
          "Your factory or warehouse is close to the port",
        ],
      },
      {
        heading: "When does door to door win?",
        body: [
          "For first-time and occasional shippers, and for cargo that must reach the terminal against a tight cut-off. A missed vessel, a day of detention or a document mismatch can cost more than the saving on the freight line.",
        ],
      },
    ],
    faqs: [
      { question: "Can I get both quotes for the same shipment?", answer: "Yes. Versa Logistics will quote port to port and door to door side by side so you can compare the totals." },
    ],
    relatedLinks: [QUOTE, P2P, { label: "Door-to-door shipping guide", href: "/blog/door-to-door-shipping-india-to-uae-guide" }],
  },
  {
    slug: "how-to-get-best-port-to-port-freight-price-india-to-uae",
    title: "How to Get the Best Port-to-Port Freight Price from India to the UAE",
    metaDescription:
      "Seven practical ways to get the best port-to-port container price from India to Jebel Ali and Khorfakkan: port pair, container size, timing, carrier comparison and itemised quotes.",
    category: "Logistics",
    date: "2026-10-01",
    readTime: "6 min read",
    keywords: ["best port to port freight price", "India to UAE freight rate", "best price container shipping India to Dubai", "Kochi to Jebel Ali rate", "reduce sea freight cost"],
    image: IMAGES.jebelAli,
    excerpt: "The best price is found before you ask for it — in the port pair, the container and the week you choose.",
    answer:
      "To get the best port-to-port price from India to the UAE, choose the loading port nearest your cargo, compare Jebel Ali with Khorfakkan for your buyer's location, pick the container size by weight as well as volume, book early with a flexible sailing date, ask for itemised quotes with validity, and compare carriers on the same scope.",
    sections: [
      {
        heading: "Which seven steps lower the price?",
        body: [],
        bullets: [
          "Choose the loading port that minimises road haulage",
          "Price Jebel Ali and Khorfakkan against the consignee's address",
          "Match the container to the cargo — 20ft for dense goods, 40ft for volume",
          "Book early, especially in the months after harvest",
          "Allow a few days' flexibility on the sailing date",
          "Compare direct sailings with transhipment services",
          "Insist on an itemised quote with a validity date",
        ],
      },
      {
        heading: "Why does the port pair matter so much?",
        body: [
          "Carriers price each port pair separately, and frequent direct services are usually keener than routes that need transhipment. From Kerala, Kochi to Jebel Ali is a direct, well-served lane; Khorfakkan can lower the total cost for east-coast buyers.",
        ],
      },
      {
        heading: "How do you compare port-to-port quotes?",
        body: [
          "Check that every quote covers the same lines — ocean freight, surcharges, terminal handling and documentation — and the same validity. A low freight line with missing charges is not the best price.",
        ],
      },
      {
        heading: "Can a forwarder get a better price than booking direct?",
        body: [
          "Often, yes. A forwarder compares several carriers on the lane and can place your container on the sailing that is both available and best priced for your dates. It also handles the booking, cut-offs and bill of lading for you.",
        ],
      },
    ],
    faqs: [
      { question: "When is the cheapest time to ship from India to the UAE?", answer: "Rates are generally softer outside peak export months. Booking ahead and staying flexible on dates matters more than any single month." },
      { question: "Is a 40ft container twice the price of a 20ft?", answer: "No. A 40ft is usually well under double the price of a 20ft, so it gives a lower cost per cubic metre for bulky cargo." },
    ],
    relatedLinks: [QUOTE, { label: "Kochi → Jebel Ali, port to port", href: "/logistics/kochi-to-jebel-ali-port-to-port" }, { label: "Kochi → Khorfakkan, port to port", href: "/logistics/kochi-to-khorfakkan-port-to-port" }],
  },
  {
    slug: "port-to-port-freight-charges-explained",
    title: "Port-to-Port Freight Charges Explained: Ocean Freight, Surcharges, THC and B/L Fees",
    metaDescription:
      "Every line on a port-to-port freight quote explained in plain English: ocean freight, fuel and currency surcharges, terminal handling charges, bill of lading and seal fees.",
    category: "Logistics",
    date: "2026-09-30",
    readTime: "6 min read",
    keywords: ["port to port freight charges", "terminal handling charges explained", "sea freight surcharges", "bill of lading fee", "freight quote breakdown"],
    image: IMAGES.kochiTerminal,
    excerpt: "A freight quote is a short list of lines. Know what each one is and you can compare any two quotes in a minute.",
    answer:
      "A port-to-port freight quote is made up of ocean freight, carrier surcharges such as fuel and currency adjustments, terminal handling charges at the loading port, and documentation charges such as the bill of lading and seal fees. Destination terminal handling and delivery-order fees are paid by the consignee at the other end.",
    sections: [
      {
        heading: "What is ocean freight?",
        body: ["The base price for carrying the container between the two ports. For FCL it is charged per container; for LCL per cubic metre or per tonne, whichever is greater."],
      },
      {
        heading: "What are carrier surcharges?",
        body: ["Additions the carrier applies on top of the base rate. They change more often than the base rate, which is why quotes carry a validity date."],
        bullets: ["Fuel (bunker) adjustment", "Currency adjustment", "Peak-season surcharge", "Equipment or congestion surcharges, when they apply"],
      },
      {
        heading: "What are terminal handling charges?",
        body: [
          "Terminal handling charges (THC) cover moving the container within the port terminal and loading or discharging it. Origin THC is paid at the loading port, destination THC at the discharge port.",
        ],
      },
      {
        heading: "Which documentation fees appear?",
        body: [],
        bullets: ["Bill of lading fee", "Container seal fee", "Export documentation or manifest fee", "Telex release fee, if originals are surrendered at origin"],
      },
    ],
    faqs: [
      { question: "Why do two port-to-port quotes for the same route differ?", answer: "Usually because they use different carriers or sailings, or because one leaves out lines such as terminal handling or documentation. Compare totals for the same scope." },
      { question: "Who pays destination charges?", answer: "The consignee, under FOB, CFR and CIF terms." },
    ],
    relatedLinks: [QUOTE, P2P, { label: "Hidden charges in freight quotes", href: "/blog/hidden-charges-in-freight-quotes" }],
  },
  {
    slug: "kochi-to-jebel-ali-port-to-port-shipping-guide",
    title: "Kochi to Jebel Ali, Port to Port: A Shipper's Guide to Price, Transit and Paperwork",
    metaDescription:
      "What to know before booking port-to-port freight from Kochi (Vallarpadam) to Jebel Ali, Dubai: transit time, what drives the price, cut-offs and the documents the carrier needs.",
    category: "Logistics",
    date: "2026-09-30",
    readTime: "5 min read",
    keywords: ["Kochi to Jebel Ali shipping", "Cochin to Dubai sea freight", "Kochi to Jebel Ali transit time", "Kochi to Dubai container price", "Vallarpadam to Jebel Ali"],
    image: IMAGES.kochiSunset,
    excerpt: "One of the most direct lanes between India and the Gulf — and the one Versa Logistics ships most.",
    answer:
      "Port-to-port freight from Kochi to Jebel Ali moves containers from ICTT Vallarpadam to Dubai's Jebel Ali Port, typically in around a week on a direct sailing. The price is quoted per container and depends on container size, carrier, season and surcharges. The shipper must gate the container in before cut-off and submit shipping instructions and VGM.",
    sections: [
      {
        heading: "How long does Kochi to Jebel Ali take?",
        body: ["Around a week at sea on a direct service. Add the days needed to stuff the container, truck it to Vallarpadam and gate in before the vessel's cut-off."],
      },
      {
        heading: "What drives the price on this lane?",
        body: [],
        bullets: ["20ft or 40ft equipment", "Direct or transhipment routing", "Season and available space", "Surcharges in force that week", "How early the booking is made"],
      },
      {
        heading: "What must the shipper provide for a port-to-port booking?",
        body: [],
        bullets: [
          "Shipper, consignee and notify party details",
          "Cargo description, packages and weights",
          "Shipping instructions for the bill of lading",
          "VGM — the verified gross mass of the packed container",
          "The customs-cleared shipping bill before gate-in",
        ],
      },
      {
        heading: "What has Versa Logistics shipped on this lane?",
        body: ["Fifteen 40ft containers of coffee beans from India to Jebel Ali, as part of a regular India–UAE container service."],
      },
    ],
    faqs: [
      { question: "Is Cochin the same port as Kochi?", answer: "Yes. Cochin is the older name; container traffic uses the International Container Transshipment Terminal at Vallarpadam." },
    ],
    relatedLinks: [QUOTE, { label: "Kochi → Jebel Ali, port to port", href: "/logistics/kochi-to-jebel-ali-port-to-port" }, { label: "India → Jebel Ali shipping", href: "/logistics/india-to-jebel-ali-shipping" }],
  },
  {
    slug: "fob-cfr-cif-and-port-to-port-freight",
    title: "FOB, CFR or CIF? How Your Incoterm Decides Who Buys the Port-to-Port Freight",
    metaDescription:
      "How FOB, CFR and CIF divide the cost of port-to-port sea freight between seller and buyer, and how to choose the term that gives you the best total price.",
    category: "Logistics",
    date: "2026-09-29",
    readTime: "5 min read",
    keywords: ["FOB vs CFR vs CIF freight", "who pays sea freight", "incoterms port to port", "CIF Jebel Ali", "FOB Kochi"],
    image: IMAGES.khorfakkanVessel,
    excerpt: "Three letters on the invoice decide who books the vessel — and who gets to shop for the best rate.",
    answer:
      "Under FOB the buyer books and pays the port-to-port freight from the loading port. Under CFR the seller pays freight to the destination port, and under CIF the seller pays freight and insurance. Whoever controls the freight can shop for the best price, so sellers with good freight rates often quote CFR or CIF, and buyers with their own forwarder prefer FOB.",
    sections: [
      {
        heading: "What does each term cover?",
        body: [],
        bullets: [
          "FOB Kochi — seller delivers on board at Kochi; buyer pays sea freight and insurance",
          "CFR Jebel Ali — seller pays sea freight to Jebel Ali; buyer insures",
          "CIF Jebel Ali — seller pays sea freight and insurance to Jebel Ali",
        ],
      },
      {
        heading: "Where does risk pass?",
        body: ["In all three terms, risk passes to the buyer once the goods are loaded on the vessel at the origin port, even when the seller is paying the freight."],
      },
      {
        heading: "Which term gives the best price?",
        body: [
          "Ask for the goods priced both ways. If the seller's CFR price minus their FOB price is less than the buyer's own freight quote, CFR is the better deal; if not, buy FOB and book the freight yourself.",
        ],
      },
    ],
    faqs: [
      { question: "Can Versa Logistics quote freight for either party?", answer: "Yes. We quote port-to-port freight for exporters selling CFR or CIF and for importers buying FOB." },
    ],
    relatedLinks: [QUOTE, P2P, { label: "Incoterms explained", href: "/blog/incoterms-fob-cfr-cif-explained" }],
  },
]
