import type { DivisionPage, FAQ } from "@/types"
import { IMAGES } from "./site"

/* ----------------------------------------------------------------------------
 * Port-to-port freight: hub and home page block
 * --------------------------------------------------------------------------*/
export const PORT_TO_PORT = {
  eyebrow: "Port to port",
  h2: "Port-to-port freight from India at the best price — carriers compared, every charge shown",
  body: "Need only the sea leg? Give us the loading port, the discharge port and the container size. We compare carriers and sailings on that port pair and send the best all-in rate we can find, itemised and with its validity stated.",
  points: ["Port pair compared across carriers", "20ft, 40ft and LCL rates", "Surcharges shown line by line", "Validity stated on every quote"],
  cta: { label: "Get a port-to-port price", href: "/logistics/freight-quote" },
  more: { label: "How port-to-port shipping works", href: "/logistics/port-to-port-shipping" },
  lanesLabel: "Port pairs we quote",
  lanes: [
    { from: "Kochi", to: "Jebel Ali", note: "Dubai, UAE", href: "/logistics/kochi-to-jebel-ali-port-to-port" },
    { from: "Kochi", to: "Khorfakkan", note: "Sharjah, UAE", href: "/logistics/kochi-to-khorfakkan-port-to-port" },
    { from: "Kochi", to: "Jeddah", note: "Saudi Arabia", href: "/logistics/india-to-gulf-port-to-port-freight" },
    { from: "Kochi", to: "Dammam", note: "Saudi Arabia", href: "/logistics/india-to-gulf-port-to-port-freight" },
    { from: "Kochi", to: "Sohar", note: "Oman", href: "/logistics/india-to-gulf-port-to-port-freight" },
    { from: "Kochi", to: "Hamad", note: "Qatar", href: "/logistics/india-to-gulf-port-to-port-freight" },
    { from: "Nhava Sheva", to: "Jebel Ali", note: "Dubai, UAE", href: "/logistics/india-to-gulf-port-to-port-freight" },
    { from: "Mundra", to: "Jebel Ali", note: "Dubai, UAE", href: "/logistics/india-to-gulf-port-to-port-freight" },
  ],
}

export const PORT_TO_PORT_FAQS: FAQ[] = [
  {
    question: "What is port-to-port shipping?",
    answer:
      "Port-to-port shipping covers only the sea leg: the container is carried from the terminal at the loading port to the terminal at the discharge port. Pickup, export clearance, import clearance and final delivery are arranged separately by the shipper and the consignee.",
  },
  {
    question: "How do I get the best port-to-port freight price from India?",
    answer:
      "Give the exact port pair, container size, cargo weight and ready date, ask for an itemised quote with validity, and compare carriers on the same scope. Booking early and being flexible on the sailing date by a few days usually gives the best price. Versa Logistics compares carriers and sailings for you on every port pair.",
  },
  {
    question: "What does a port-to-port freight rate include?",
    answer:
      "It includes ocean freight and the carrier's surcharges for moving the container between the two ports. Terminal handling, documentation, haulage, customs clearance and destination delivery are separate, and a good quote lists which of them are included and which are not.",
  },
  {
    question: "Is port-to-port cheaper than door-to-door?",
    answer:
      "The port-to-port figure is lower because it covers less. It is the better choice when you already have a transporter and customs broker at origin and a clearing agent at destination. If you have to arrange those from scratch, a door-to-door quote can cost less in total.",
  },
  {
    question: "Does Versa Logistics quote port to port from Kochi to Jebel Ali and Khorfakkan?",
    answer:
      "Yes. Kochi to Jebel Ali and Kochi to Khorfakkan are our core port pairs, with 17 × 40ft containers of coffee beans delivered into the two ports. We quote 20ft, 40ft and LCL, port to port or with transport and documentation added.",
  },
  {
    question: "Which Incoterms go with port-to-port shipping?",
    answer:
      "FOB, CFR and CIF. Under FOB the buyer books and pays the port-to-port freight; under CFR and CIF the seller pays freight to the destination port, with insurance added under CIF.",
  },
  {
    question: "Does Versa Logistics guarantee the lowest freight rate?",
    answer:
      "No forwarder can honestly guarantee the lowest rate on every sailing, because carrier rates change week to week. What we commit to is comparing carriers and sailings on your port pair and showing every charge, so the price you accept is the best we can find for that shipment.",
  },
]

/* ----------------------------------------------------------------------------
 * Port-to-port pages
 * --------------------------------------------------------------------------*/
export const LOGISTICS_PORT_PAGES: DivisionPage[] = [
  {
    slug: "port-to-port-shipping",
    division: "logistics",
    navLabel: "Port-to-Port Shipping",
    h1: "Port-to-port shipping from India: the best price for the sea leg, with every charge shown",
    metaTitle: "Port-to-Port Shipping from India — Best Price Sea Freight Quotes | Versa Logistics",
    metaDescription:
      "Port-to-port sea freight from Kochi and Indian ports to Jebel Ali, Khorfakkan and the Gulf. Versa Logistics compares carriers and sailings on your port pair and sends the best price it can find, itemised. 20ft, 40ft and LCL.",
    keywords: [
      "port to port shipping",
      "port to port freight best price",
      "port to port shipping India",
      "port to port sea freight rates",
      "best price sea freight India to UAE",
      "CY to CY shipping",
      "port to port container shipping Kochi",
    ],
    eyebrow: "Versa Logistics — Port to Port",
    lede:
      "You have your own transporter and your buyer has a clearing agent. All you need is the sea leg, at the best price. That is port-to-port shipping, and it is the simplest thing we quote.",
    image: IMAGES.shipAerial,
    summary:
      "Port-to-port shipping is sea freight from the terminal at the loading port to the terminal at the discharge port, without pickup, customs clearance or final delivery. Versa Logistics quotes port-to-port freight from Kochi and other Indian ports to Jebel Ali, Khorfakkan and Gulf ports, comparing carriers and sailings to find the best price for each port pair and listing every charge.",
    intro: [
      "A port-to-port quote answers one question: what does it cost to carry this container from this port to that port? Because the scope is narrow, port-to-port rates are the easiest to compare between forwarders — as long as each quote lists the same charges.",
      "Versa Logistics is based in Kakkanad, close to Kochi's Vallarpadam terminal. We compare the carriers serving your port pair, pick the sailing that suits your ready date and send one itemised price.",
    ],
    specs: [
      { label: "Scope", value: "Loading port terminal → discharge port terminal" },
      { label: "Also called", value: "CY/CY (container yard to container yard)" },
      { label: "Equipment", value: "20ft, 40ft, 40ft high cube, LCL" },
      { label: "Core port pairs", value: "Kochi → Jebel Ali, Kochi → Khorfakkan" },
      { label: "Price", value: "Per container, quoted for your port pair and date" },
      { label: "Quote", value: "Free, itemised, validity stated" },
    ],
    sections: [
      {
        heading: "What is port-to-port shipping?",
        body: [
          "In port-to-port shipping the carrier's responsibility starts when the loaded container is gated into the terminal at the loading port and ends when it is discharged at the destination terminal. It is also written CY/CY — container yard to container yard.",
          "Everything before the first gate and after the second is outside the rate: trucking to the port, export customs clearance, import clearance and delivery to the consignee's warehouse.",
        ],
      },
      {
        heading: "What is included in a port-to-port freight price?",
        body: ["A port-to-port quote from Versa Logistics separates the charges so nothing appears later:"],
        bullets: [
          "Ocean freight for the container or, for LCL, per cubic metre or tonne",
          "Carrier surcharges such as fuel and currency adjustments",
          "Origin terminal handling, shown as its own line",
          "Bill of lading and documentation fees",
          "A clear note of what is excluded — haulage, customs clearance and destination charges",
        ],
      },
      {
        heading: "How does Versa Logistics find the best port-to-port price?",
        body: [],
        bullets: [
          "We compare the carriers that serve your port pair, not just one line",
          "We check direct sailings against transhipment services for cost and transit time",
          "We size the container by weight as well as volume, so you do not pay for space you cannot use",
          "We compare neighbouring ports — Jebel Ali against Khorfakkan — against your consignee's location",
          "We time the booking around your ready date and the carrier's cut-off to avoid storage and rollover costs",
        ],
      },
      {
        heading: "When is port-to-port the right choice?",
        body: [
          "Choose port to port when you already have a transporter and customs broker at origin and your buyer has a clearing agent at destination, or when you sell on FOB, CFR or CIF terms and only need the freight line. If you would rather have one company handle the whole journey, ask us for a door-to-port or door-to-door quote on the same shipment and compare the totals.",
        ],
      },
      {
        heading: "How do I get a port-to-port quote?",
        body: [
          "Send the loading port, discharge port, container size and number, cargo and gross weight, and the cargo-ready date. Use the freight quote form, WhatsApp +91 79072 15816 or call +91 97464 33133.",
        ],
      },
    ],
    faqs: PORT_TO_PORT_FAQS.slice(0, 5),
    related: ["kochi-to-jebel-ali-port-to-port", "kochi-to-khorfakkan-port-to-port", "india-to-gulf-port-to-port-freight"],
  },
  {
    slug: "kochi-to-jebel-ali-port-to-port",
    division: "logistics",
    navLabel: "Kochi → Jebel Ali, Port to Port",
    h1: "Kochi to Jebel Ali port-to-port freight: best price for 20ft and 40ft containers",
    metaTitle: "Kochi to Jebel Ali Port-to-Port Freight — Best Price Container Rates | Versa Logistics",
    metaDescription:
      "Port-to-port sea freight from Kochi (ICTT Vallarpadam) to Jebel Ali, Dubai. Versa Logistics compares carriers for the best 20ft and 40ft container price, itemised. 15 × 40ft containers already delivered to Jebel Ali.",
    keywords: [
      "Kochi to Jebel Ali port to port",
      "Kochi to Jebel Ali freight rate",
      "Kochi to Dubai container shipping price",
      "Cochin to Jebel Ali sea freight",
      "best price freight Kochi to Dubai",
      "40ft container Kochi to Jebel Ali",
    ],
    eyebrow: "Port pair — Kochi → Jebel Ali",
    lede: "Our busiest port pair: Vallarpadam to Jebel Ali. Fifteen 40ft containers of coffee beans delivered, and a price for your next one on request.",
    image: IMAGES.jebelAli,
    summary:
      "Versa Logistics quotes port-to-port sea freight from Kochi's ICTT Vallarpadam terminal to Jebel Ali Port in Dubai for 20ft and 40ft containers and LCL cargo. It compares the carriers on the lane and sends the best price it can find, itemised with validity. Transit on a direct sailing is typically around a week.",
    intro: [
      "Kochi to Jebel Ali is one of the most direct container routes between India and the Gulf, and it is the lane Versa Logistics knows best. We have delivered 15 × 40ft containers of coffee beans into Jebel Ali and run the route as a regular service.",
    ],
    specs: [
      { label: "Loading port", value: "Kochi — ICTT Vallarpadam" },
      { label: "Discharge port", value: "Jebel Ali, Dubai, UAE" },
      { label: "Transit", value: "Around a week on a direct sailing" },
      { label: "Equipment", value: "20ft, 40ft, 40ft high cube, LCL" },
      { label: "Track record", value: "15 × 40ft containers delivered" },
      { label: "Price", value: "Quoted per container for your sailing date" },
    ],
    sections: [
      {
        heading: "What does Kochi to Jebel Ali port-to-port freight cost?",
        body: [
          "The price is quoted per container and changes with the carrier, the season and fuel surcharges, so any fixed figure published on a web page would soon be wrong. Send us your container size and ready date and we return the current best rate we can find on the lane, with its validity.",
        ],
      },
      {
        heading: "What decides the price on this port pair?",
        body: [],
        bullets: [
          "Container size — 20ft for dense cargo, 40ft for volume",
          "Direct sailing or transhipment service",
          "Season and space on the vessel",
          "Carrier surcharges in force that week",
          "How far ahead you book",
        ],
      },
      {
        heading: "Why Jebel Ali?",
        body: [
          "Jebel Ali is the largest port in the Middle East and the main gateway for Dubai, the Jebel Ali Free Zone and re-export across the region. Frequent sailings from India keep space available and rates competitive.",
        ],
      },
      {
        heading: "Can you add pickup and documents to a port-to-port quote?",
        body: [
          "Yes. Road transport from anywhere in Kerala to Vallarpadam, stuffing supervision and export documentation can be added as separate lines, so you still see the port-to-port freight on its own.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does port-to-port shipping from Kochi to Jebel Ali take?",
        answer: "Transit on a direct sailing is typically around a week. Transhipment services take longer. Allow extra days for gate-in before the vessel's cut-off.",
      },
      {
        question: "How can I get the best price from Kochi to Jebel Ali?",
        answer:
          "Share your container size and ready date early and stay flexible by a few days. Versa Logistics compares the carriers on the lane and sends an itemised quote with the best rate available for your dates.",
      },
      {
        question: "Has Versa Logistics shipped from Kochi to Jebel Ali before?",
        answer: "Yes. Versa Logistics has delivered 15 × 40ft containers of coffee beans to Jebel Ali Port and runs the lane as a regular service.",
      },
    ],
    related: ["port-to-port-shipping", "india-to-jebel-ali-shipping", "kochi-to-khorfakkan-port-to-port"],
  },
  {
    slug: "kochi-to-khorfakkan-port-to-port",
    division: "logistics",
    navLabel: "Kochi → Khorfakkan, Port to Port",
    h1: "Kochi to Khorfakkan port-to-port freight: best price to Sharjah's east-coast port",
    metaTitle: "Kochi to Khorfakkan Port-to-Port Freight — Best Price to Sharjah | Versa Logistics",
    metaDescription:
      "Port-to-port sea freight from Kochi to Khorfakkan Port, Sharjah. Versa Logistics compares carriers for the best container price and quotes Khorfakkan against Jebel Ali for your delivery point.",
    keywords: [
      "Kochi to Khorfakkan port to port",
      "Kochi to Khorfakkan freight rate",
      "Kochi to Sharjah container shipping",
      "Khorfakkan sea freight from India",
      "best price freight India to Sharjah",
    ],
    eyebrow: "Port pair — Kochi → Khorfakkan",
    lede: "For buyers in Sharjah, Fujairah and the northern Emirates, Khorfakkan can be the shorter and cheaper way in. We quote it side by side with Jebel Ali.",
    image: IMAGES.khorfakkanCranes,
    summary:
      "Versa Logistics quotes port-to-port sea freight from Kochi to Khorfakkan Port in Sharjah, on the UAE's east coast, for 20ft and 40ft containers and LCL cargo. It compares carriers and also prices Khorfakkan against Jebel Ali so the buyer can choose the lower total cost for their delivery point.",
    intro: [
      "Khorfakkan is Sharjah's deep-water container port on the Gulf of Oman, outside the Strait of Hormuz. Versa Logistics has delivered 2 × 40ft containers of coffee beans there and offers it alongside Jebel Ali on every UAE quote.",
    ],
    specs: [
      { label: "Loading port", value: "Kochi — ICTT Vallarpadam" },
      { label: "Discharge port", value: "Khorfakkan, Sharjah, UAE" },
      { label: "Best for", value: "Sharjah, Fujairah, northern Emirates" },
      { label: "Equipment", value: "20ft, 40ft, 40ft high cube, LCL" },
      { label: "Track record", value: "2 × 40ft containers delivered" },
      { label: "Price", value: "Quoted per container for your sailing date" },
    ],
    sections: [
      {
        heading: "Is Khorfakkan cheaper than Jebel Ali, port to port?",
        body: [
          "It depends on the carrier and the week. The more useful comparison is the total: port-to-port freight plus the road leg from the port to the consignee. For east-coast and northern Emirates deliveries, Khorfakkan often wins on the road leg even when the sea freight is similar.",
        ],
      },
      {
        heading: "What does a Kochi to Khorfakkan quote show?",
        body: [],
        bullets: [
          "Ocean freight per container",
          "Carrier surcharges",
          "Origin terminal handling and documentation",
          "Sailing date, routing and estimated arrival",
          "Validity of the rate",
        ],
      },
      {
        heading: "How do I book?",
        body: ["Send the container size, cargo, weight and ready date through the freight quote form or WhatsApp +91 79072 15816. We confirm the best available sailing and price, then book space once you approve."],
      },
    ],
    faqs: [
      {
        question: "Does Versa Logistics ship port to port from Kochi to Khorfakkan?",
        answer: "Yes. Versa Logistics has delivered 2 × 40ft containers of coffee beans to Khorfakkan Port and quotes the port pair for 20ft, 40ft and LCL cargo.",
      },
      {
        question: "Should I choose Khorfakkan or Jebel Ali?",
        answer:
          "Choose by your consignee's location. Khorfakkan suits Sharjah, Fujairah and the northern Emirates; Jebel Ali suits Dubai, free-zone and re-export cargo. We price both so you can compare the total cost.",
      },
    ],
    related: ["port-to-port-shipping", "india-to-khorfakkan-shipping", "kochi-to-jebel-ali-port-to-port"],
  },
  {
    slug: "india-to-gulf-port-to-port-freight",
    division: "logistics",
    navLabel: "India → Gulf, Port to Port",
    h1: "India to Gulf port-to-port freight: best price by port pair, from Kochi, Nhava Sheva and Mundra",
    metaTitle: "India to Gulf Port-to-Port Freight Rates — Best Price by Port Pair | Versa Logistics",
    metaDescription:
      "Port-to-port container freight from Indian ports (Kochi, Tuticorin, Mangalore, Nhava Sheva, Mundra) to Jebel Ali, Khorfakkan, Jeddah, Dammam, Sohar, Hamad, Shuwaikh and Bahrain. Itemised best-price quotes from Versa Logistics.",
    keywords: [
      "India to Gulf port to port freight",
      "India to GCC sea freight rates",
      "Nhava Sheva to Jebel Ali freight",
      "Mundra to Jebel Ali freight",
      "Kochi to Jeddah shipping",
      "Kochi to Dammam shipping",
      "best price container shipping India to GCC",
    ],
    eyebrow: "Port pairs — India → Gulf",
    lede: "Pick a loading port in India and a discharge port in the Gulf. We price the pair, compare the carriers on it and tell you if a neighbouring port would cost less.",
    image: IMAGES.kochiTerminal,
    summary:
      "Versa Logistics quotes port-to-port container freight from Indian ports — Kochi, Tuticorin, Mangalore, Nhava Sheva and Mundra — to Gulf ports including Jebel Ali, Khorfakkan, Jeddah, Dammam, Sohar, Hamad, Shuwaikh and Khalifa Bin Salman. Each port pair is priced across carriers and quoted with every charge itemised.",
    intro: [
      "The best price between India and the Gulf often depends on choosing the right port pair. A container from north or west India may cost less from Nhava Sheva or Mundra; cargo from Kerala usually ships best from Kochi. We quote the alternatives side by side.",
    ],
    specs: [
      { label: "Indian loading ports", value: "Kochi, Tuticorin, Mangalore, Nhava Sheva, Mundra" },
      { label: "UAE", value: "Jebel Ali, Khorfakkan" },
      { label: "Saudi Arabia", value: "Jeddah, Dammam" },
      { label: "Oman · Qatar", value: "Sohar · Hamad" },
      { label: "Kuwait · Bahrain", value: "Shuwaikh · Khalifa Bin Salman" },
      { label: "Price", value: "Per container, by port pair and sailing date" },
    ],
    sections: [
      {
        heading: "Which port pairs does Versa Logistics quote?",
        body: ["Our delivered track record is on Kochi to Jebel Ali and Kochi to Khorfakkan. For the other Gulf ports below we quote port to port on request, comparing the carriers that serve each pair."],
        bullets: [
          "Kochi → Jebel Ali and Khorfakkan (UAE)",
          "Kochi → Jeddah and Dammam (Saudi Arabia)",
          "Kochi → Sohar (Oman), Hamad (Qatar), Shuwaikh (Kuwait), Khalifa Bin Salman (Bahrain)",
          "Tuticorin and Mangalore → Gulf ports, when closer to your cargo",
          "Nhava Sheva and Mundra → Gulf ports, for cargo from west and north India",
        ],
      },
      {
        heading: "How do you choose the cheapest port pair?",
        body: [
          "Add the road cost to the loading port to the port-to-port freight, then add the road cost from the discharge port to the consignee. The lowest total wins — and it is not always the pair with the lowest sea freight.",
        ],
      },
      {
        heading: "Do rates differ between Gulf ports?",
        body: [
          "Yes. Ports with frequent direct sailings from India are usually priced more keenly than ports reached by transhipment, and transit time differs too. Every quote shows the routing so you can weigh price against time.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Indian port is cheapest for shipping to the Gulf?",
        answer:
          "Usually the port nearest your cargo, because road haulage is a large part of the total. Kochi suits Kerala cargo; Nhava Sheva and Mundra suit west and north India. Versa Logistics quotes the alternatives so you can compare totals.",
      },
      {
        question: "Can I get a port-to-port rate to Saudi Arabia, Oman, Qatar, Kuwait or Bahrain?",
        answer: "Yes. Versa Logistics quotes port to port to Jeddah, Dammam, Sohar, Hamad, Shuwaikh and Khalifa Bin Salman on request, for 20ft, 40ft and LCL cargo.",
      },
    ],
    related: ["port-to-port-shipping", "gcc-shipping", "logistics-services-india"],
  },
]
