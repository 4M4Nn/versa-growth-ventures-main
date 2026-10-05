import type { BlogPost } from "@/types"
import { IMAGES } from "./site"
import { BLOG_EXTRA_POSTS } from "./blog-extra"
import { BLOG_LOGISTICS_POSTS } from "./blog-logistics"
import { BLOG_DIGITAL_POSTS } from "./blog-digital"
import { BLOG_PORT_POSTS } from "./blog-port"
import { BLOG_ONION_POSTS } from "./blog-onion"

const BLOG_CORE_POSTS: BlogPost[] = [
  {
    slug: "how-to-ship-coffee-beans-from-india-to-uae-40ft-container",
    title: "How to Ship Coffee Beans from India to the UAE in a 40ft Container",
    metaDescription:
      "A step-by-step guide to shipping coffee beans from India to Jebel Ali or Khorfakkan in a 40ft container: booking, moisture control, documents, transit time and costs.",
    category: "Logistics",
    date: "2026-09-22",
    readTime: "7 min read",
    keywords: ["ship coffee beans India to UAE", "40ft container coffee", "coffee export shipping", "coffee to Jebel Ali"],
    image: IMAGES.coffeeSack,
    excerpt:
      "What it actually takes to get a 40ft container of coffee from an Indian curing works to a UAE port — in the order it happens.",
    answer:
      "To ship coffee beans from India to the UAE in a 40ft container, book space with a carrier or freight forwarder, inspect and line the container, stuff dry, conditioned bags, truck it to the port before cut-off, and ship with a commercial invoice, packing list, bill of lading, certificate of origin and phytosanitary certificate. Direct sailings from Kochi to Jebel Ali typically take around a week.",
    sections: [
      {
        heading: "Step 1: How do you book a container for coffee?",
        body: [
          "Start with your cargo-ready date and destination port — usually Jebel Ali for Dubai and re-export, or Khorfakkan for Sharjah and the east coast. A freight forwarder compares carriers, confirms space on a sailing and arranges release of an empty container from the depot nearest your stuffing point.",
          "Book early in the harvest season. Coffee exports from India peak in the months after harvest, and space on popular sailings fills quickly.",
        ],
      },
      {
        heading: "Step 2: How do you stop coffee getting wet inside a container?",
        body: [
          "Green coffee is hygroscopic: it absorbs and releases moisture. As the container moves from humid Kerala to a hot Gulf port, moisture can condense on the roof and drip onto the bags. Prevention starts before loading.",
        ],
        bullets: [
          "Reject containers with holes, damp floors or odours",
          "Line the walls and roof with kraft paper or a container liner",
          "Add desiccant packs sized for the voyage",
          "Stuff only coffee dried to the contracted moisture level",
          "Never stuff in the rain",
        ],
      },
      {
        heading: "Step 3: Which documents do you need?",
        body: ["For coffee shipments to the UAE, prepare:"],
        bullets: [
          "Commercial invoice and packing list",
          "Shipping bill filed through your customs broker",
          "Bill of lading",
          "Certificate of origin — preferential under India–UAE CEPA where eligible",
          "Phytosanitary certificate",
          "Quality or analysis report requested by the buyer",
        ],
      },
      {
        heading: "Step 4: How long does it take and what does it cost?",
        body: [
          "The ocean leg on a direct Kochi–Jebel Ali service is typically around a week; door to door, plan for two to three weeks including booking, stuffing and clearance at both ends. Costs combine ocean freight, surcharges, origin terminal and documentation charges, haulage and any fumigation or insurance. Rates move with the market, so ask for an itemised quote.",
        ],
      },
      {
        heading: "What does this look like at scale?",
        body: [
          "Versa Logistics recently shipped 15 × 40ft containers of coffee beans to Jebel Ali and 2 × 40ft containers to Khorfakkan. At that volume, success depends on staggering the stuffing, keeping every container's paperwork separate and exact, and giving the buyer one person to call.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many bags of coffee fit in a container?",
        answer: "A 20ft container is commonly loaded with 320 bags of 60 kg (about 19.2 tonnes). A 40ft container can hold more, subject to carrier and road weight limits.",
      },
      {
        question: "Do I need a phytosanitary certificate for coffee to the UAE?",
        answer: "Green coffee is a plant product, and a phytosanitary certificate issued in India is generally required for import into the UAE.",
      },
    ],
    relatedLinks: [
      { label: "Shipping from India to Jebel Ali", href: "/logistics/india-to-jebel-ali-shipping" },
      { label: "Coffee & spice cargo handling", href: "/logistics/coffee-and-spice-cargo" },
      { label: "Buy green coffee beans", href: "/traders/green-coffee-beans" },
    ],
  },
  {
    slug: "jebel-ali-vs-khorfakkan-which-uae-port",
    title: "Jebel Ali vs Khorfakkan: Which UAE Port Should Your Cargo Use?",
    metaDescription:
      "Comparing Jebel Ali and Khorfakkan for shipments from India: location, sailings, transit, final delivery and when each port makes more sense.",
    category: "Logistics",
    date: "2026-09-19",
    readTime: "6 min read",
    keywords: ["Jebel Ali vs Khorfakkan", "UAE ports comparison", "Khorfakkan port", "Jebel Ali port shipping"],
    image: IMAGES.khorfakkanCranes,
    excerpt:
      "Both ports can land your container in the UAE. The better choice depends on where your cargo is going next.",
    answer:
      "Jebel Ali, in Dubai inside the Gulf, has the most sailings from India and is best for Dubai-bound and re-export cargo. Khorfakkan, in Sharjah on the Gulf of Oman outside the Strait of Hormuz, can suit consignees on the east coast and in the northern Emirates. Compare total landed cost, including the road leg, before choosing.",
    sections: [
      {
        heading: "Where are Jebel Ali and Khorfakkan?",
        body: [
          "Jebel Ali lies on the UAE's west coast in Dubai, inside the Arabian Gulf, beside the Jebel Ali Free Zone. Khorfakkan lies on the east coast in the Emirate of Sharjah, facing the Gulf of Oman — outside the Strait of Hormuz.",
        ],
      },
      {
        heading: "Which port has more sailings from India?",
        body: [
          "Jebel Ali. As the Middle East's largest port, it has the deepest carrier network and the most frequent direct services from Indian ports. That usually means more choice of sailing dates and competitive rates. Khorfakkan is a major transhipment hub, but has fewer direct India services.",
        ],
      },
      {
        heading: "When does Khorfakkan make more sense?",
        body: ["Khorfakkan can be the better option when:"],
        bullets: [
          "Your consignee's warehouse is in Sharjah, Fujairah or the east coast",
          "A carrier's direct service calls Khorfakkan on the dates you need",
          "The shorter final road leg outweighs a difference in ocean freight",
        ],
      },
      {
        heading: "How do you decide?",
        body: [
          "Compare door-to-door, not port-to-port. Ask your forwarder for both options with ocean freight, destination charges and the road leg to the final warehouse. At Versa Logistics we have delivered 15 × 40ft containers into Jebel Ali and 2 × 40ft into Khorfakkan, and we quote whichever route is cheaper or faster for your delivery point.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Khorfakkan part of Dubai?",
        answer: "No. Khorfakkan is in the Emirate of Sharjah, on the UAE's east coast.",
      },
      {
        question: "Can cargo landed at Khorfakkan be delivered to Dubai?",
        answer: "Yes. Khorfakkan is connected by road to Dubai and the rest of the UAE.",
      },
    ],
    relatedLinks: [
      { label: "India → Jebel Ali shipping", href: "/logistics/india-to-jebel-ali-shipping" },
      { label: "India → Khorfakkan shipping", href: "/logistics/india-to-khorfakkan-shipping" },
      { label: "News: 2 × 40ft to Khorfakkan", href: "/news/two-forty-foot-containers-coffee-beans-khorfakkan-port" },
    ],
  },
  {
    slug: "fcl-vs-lcl-shipping-explained",
    title: "FCL vs LCL: Which Sea Freight Option Is Right for Your Export?",
    metaDescription:
      "FCL vs LCL explained for Indian exporters: cost, safety, transit time and when to switch from part loads to a full container.",
    category: "Logistics",
    date: "2026-09-12",
    readTime: "5 min read",
    keywords: ["FCL vs LCL", "full container load", "less than container load", "sea freight options India"],
    image: IMAGES.shipAerial,
    excerpt: "Part load or full box? The answer is mostly arithmetic — plus a few things the arithmetic misses.",
    answer:
      "FCL (full container load) means you rent a whole container; LCL (less than container load) means you share one and pay by volume. LCL is cheaper for small shipments, but FCL becomes more economical once your cargo fills a large share of a 20ft container, and it is safer because the box stays sealed from origin to consignee.",
    sections: [
      {
        heading: "What is FCL?",
        body: [
          "With FCL you book an entire 20ft or 40ft container. It is stuffed at your premises or a warehouse, sealed, and opened only at destination. You pay a flat rate per container regardless of how full it is.",
        ],
      },
      {
        heading: "What is LCL?",
        body: [
          "With LCL your cargo is consolidated with other shippers' goods in a shared container. You pay per cubic metre or per tonne, whichever is greater. The container is packed at a consolidation warehouse and unpacked at a deconsolidation warehouse at destination.",
        ],
      },
      {
        heading: "Which is cheaper?",
        body: [
          "For small volumes, LCL. As your cargo grows, the per-cubic-metre LCL charges add up until a full container costs the same or less. Ask your forwarder to price both once your shipment approaches that crossover point.",
        ],
      },
      {
        heading: "Which is safer for food and commodities?",
        body: [
          "FCL. Fewer handlings mean less risk of damage, contamination or odour transfer — critical for coffee and spices. LCL is fine for well-packed samples and trial lots, but most commodity trade moves FCL.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is LCL slower than FCL?",
        answer: "Usually, yes. Consolidation and deconsolidation add days at each end.",
      },
      {
        question: "Can I ship a trial order LCL and switch to FCL later?",
        answer: "Yes. That is a common path for new buyer–supplier relationships.",
      },
    ],
    relatedLinks: [
      { label: "Sea freight: FCL & LCL", href: "/logistics/sea-freight" },
      { label: "Freight forwarding in Kochi", href: "/logistics/freight-forwarding" },
    ],
  },
  {
    slug: "export-documents-checklist-india",
    title: "Export Documents Checklist: What Every Shipment from India Needs",
    metaDescription:
      "A practical checklist of export documents for shipments from India — invoice, packing list, shipping bill, bill of lading, certificate of origin, phytosanitary and more.",
    category: "Logistics",
    date: "2026-09-05",
    readTime: "6 min read",
    keywords: ["export documents India", "export documentation checklist", "shipping documents list", "certificate of origin India"],
    image: IMAGES.kochiTerminal,
    excerpt: "Most shipping delays are paperwork delays. Here is the checklist we work from.",
    answer:
      "A typical export shipment from India needs a commercial invoice, packing list, shipping bill, bill of lading, and — depending on product and market — a certificate of origin, phytosanitary certificate, fumigation certificate, insurance certificate and quality or analysis report. All documents must agree on weights, descriptions and consignee details.",
    sections: [
      {
        heading: "Which documents does every export need?",
        body: ["Regardless of product, you will need:"],
        bullets: [
          "Commercial invoice — the sale price and terms",
          "Packing list — what is packed where, with weights",
          "Shipping bill — the customs export declaration",
          "Bill of lading — the carrier's receipt and title document",
        ],
      },
      {
        heading: "Which extra documents do agricultural products need?",
        body: ["For coffee, spices and other plant products, expect:"],
        bullets: [
          "Phytosanitary certificate from the plant quarantine authority",
          "Fumigation certificate if the buyer or destination requires it",
          "Quality or analysis report against the contract specification",
        ],
      },
      {
        heading: "When do you need a certificate of origin?",
        body: [
          "Most buyers ask for one, and it is essential if the importing country offers a tariff preference for Indian goods — for example under the India–UAE CEPA. A preferential certificate of origin must be applied for correctly to be accepted.",
        ],
      },
      {
        heading: "What is the most common documentation mistake?",
        body: [
          "Inconsistency. A net weight that differs between invoice and bill of lading, or a consignee name written two ways, can hold cargo at destination. Cross-check every document against the others before submission.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who issues the bill of lading?",
        answer: "The carrier or its agent issues the bill of lading once the container is loaded, based on the shipping instructions you or your forwarder submit.",
      },
      {
        question: "Can my freight forwarder prepare the documents?",
        answer: "A forwarder prepares and coordinates most shipping documents; customs filing is done by a licensed customs broker.",
      },
    ],
    relatedLinks: [
      { label: "Freight forwarding services", href: "/logistics/freight-forwarding" },
      { label: "Quality documents & certification", href: "/traders/quality-certification" },
    ],
  },
  {
    slug: "20ft-vs-40ft-container-guide",
    title: "20ft vs 40ft Container: Which Size for Coffee, Pepper or Cardamom?",
    metaDescription:
      "How to choose between a 20ft and a 40ft container for coffee and spices: weight limits, volume, cost per tonne and practical loading tips.",
    category: "Logistics",
    date: "2026-08-29",
    readTime: "5 min read",
    keywords: ["20ft vs 40ft container", "container size for coffee", "spice container loading", "40ft container capacity"],
    image: IMAGES.truck,
    excerpt: "A 40ft container has twice the space of a 20ft — but not twice the weight allowance. That changes everything for dense cargo.",
    answer:
      "Choose by weight versus volume. Dense cargo such as green coffee often reaches its weight limit before filling a container — a 20ft commonly carries about 19.2 tonnes (320 × 60 kg bags). Lighter, bulkier cargo such as cardamom fills a 40ft more economically. Check carrier limits and road-weight rules at both ends.",
    sections: [
      {
        heading: "How big are 20ft and 40ft containers?",
        body: [
          "A standard 20ft dry container offers roughly 33 cubic metres of space; a 40ft offers roughly 67. A 40ft high cube adds about 30 cm of height. Payload limits vary by container and carrier, and road rules in India and the UAE can restrict gross weight further.",
        ],
      },
      {
        heading: "Which size suits green coffee?",
        body: [
          "Coffee is dense, so it hits weight limits first. The trade standard is 320 × 60 kg bags in a 20ft container. A 40ft can carry more, but not double — so compare freight per tonne rather than per box.",
        ],
      },
      {
        heading: "Which size suits pepper and cardamom?",
        body: [
          "Black pepper is moderately dense and often ships in 20ft containers. Cardamom is light relative to its volume and high in value; buyers commonly ship smaller quantities, sometimes consolidated with other spices.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a 40ft container always cheaper per tonne?",
        answer: "Not for heavy cargo. If weight limits stop you filling the 40ft, a 20ft can be cheaper per tonne.",
      },
    ],
    relatedLinks: [
      { label: "Sea freight options", href: "/logistics/sea-freight" },
      { label: "Container trucking", href: "/logistics/transportation" },
    ],
  },
  {
    slug: "indian-green-coffee-grades-explained",
    title: "Indian Green Coffee Grades Explained: Plantation, Cherry, Parchment, AA and AB",
    metaDescription:
      "A buyer's guide to Indian green coffee grades — Arabica Plantation and Cherry, Robusta Parchment and Cherry, and size grades AA, A, AB, PB and C.",
    category: "Trade",
    date: "2026-09-16",
    readTime: "7 min read",
    keywords: ["Indian coffee grades", "Robusta Parchment AB", "Arabica Plantation AA", "green coffee grades India", "Robusta Cherry"],
    image: IMAGES.coffeeBeans,
    excerpt: "Plantation AA, Robusta Cherry AB, Parchment PB — here is what every word on an Indian coffee contract means.",
    answer:
      "Indian green coffee is graded by species (Arabica or Robusta), processing (washed — called Plantation for Arabica and Parchment for Robusta — or natural, called Cherry) and bean size (AA, A, AB, PB, C). For example, 'Robusta Parchment AB' is washed Robusta of the AB screen size.",
    sections: [
      {
        heading: "What do Plantation, Parchment and Cherry mean?",
        body: [
          "They describe processing. Washed Arabica is called Plantation; washed Robusta is called Parchment. Natural — sun-dried whole-cherry — coffee is called Cherry for both species: Arabica Cherry and Robusta Cherry. Washed coffees tend to taste cleaner and brighter; naturals are heavier-bodied.",
        ],
      },
      {
        heading: "What do AA, A, AB and PB mean?",
        body: [
          "They are size and shape grades determined by screens. AA and A are the largest beans; AB is a mix of A and B sizes and one of India's most traded grades; PB (peaberry) are the round single beans from cherries that develop only one seed; C covers smaller beans.",
        ],
      },
      {
        heading: "What else should a green coffee contract specify?",
        body: ["Beyond the grade name, agree in writing:"],
        bullets: [
          "Moisture limit — commonly 12.5% or lower",
          "Defect allowance and foreign matter",
          "Screen retention percentage",
          "Crop year and packing (60 kg jute, liners)",
          "Sampling and approval process",
        ],
      },
      {
        heading: "Which grade should a roaster buy?",
        body: [
          "Espresso roasters often blend Robusta Parchment or Cherry AB with washed Arabica for body and crema. Instant-coffee manufacturers typically buy Robusta Cherry. Always cup an approved sample from the actual lot.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is Monsooned Malabar?",
        answer: "A specialty Indian coffee whose green beans are exposed to monsoon winds on the Malabar Coast, which swells them and produces a mellow, low-acid cup.",
      },
      {
        question: "Is Indian Robusta good quality?",
        answer: "Indian washed Robusta is well regarded internationally for its clean cup and body, and is widely used in espresso blends.",
      },
    ],
    relatedLinks: [
      { label: "Green coffee beans from Versa Traders", href: "/traders/green-coffee-beans" },
      { label: "Request samples", href: "/traders/samples-and-bulk-orders" },
    ],
  },
  {
    slug: "cardamom-grades-8mm-7mm-buyers-guide",
    title: "Cardamom Grades Explained: 8mm, 7mm, AGEB and What Buyers Should Check",
    metaDescription:
      "How green cardamom is graded — pod size, colour, litre weight and moisture — and what importers should check before buying in bulk.",
    category: "Trade",
    date: "2026-09-08",
    readTime: "6 min read",
    keywords: ["cardamom grades", "8mm cardamom", "AGEB cardamom", "cardamom litre weight", "green cardamom buying guide"],
    image: IMAGES.cardamomPods,
    excerpt: "Size gets the headline, but colour and litre weight tell you whether the pod is worth the price.",
    answer:
      "Green cardamom is graded by pod size in millimetres (8mm+, 7–8mm, 6–7mm), by colour (a deeper, even green is better) and by litre weight — the grams per litre of pods, which reflects maturity. Buyers should also check moisture and the share of empty, split and immature pods.",
    sections: [
      {
        heading: "How is cardamom size graded?",
        body: [
          "Pods are sieved through screens and classified by the size at which they are retained. 8mm and above is the boldest premium grade, popular in Gulf retail; 7–8mm is the most widely traded export size; 6–7mm is used for grinding and blending.",
        ],
      },
      {
        heading: "What do AGEB and AGB mean?",
        body: [
          "They are traditional trade grades named after Alleppey, the historic cardamom trading town: AGEB is Alleppey Green Extra Bold and AGB is Alleppey Green Bold. Many buyers now specify directly in millimetres instead.",
        ],
      },
      {
        heading: "Why does litre weight matter?",
        body: [
          "Two lots of the same size can differ greatly in quality. A higher litre weight means fuller, more mature pods with more seeds and oil. It is one of the quickest ways to separate a premium lot from a merely large one.",
        ],
      },
      {
        heading: "What should you check in a cardamom sample?",
        body: ["Before approving a lot, check:"],
        bullets: [
          "Size distribution against the stated grade",
          "Colour — even green without yellowing or bleaching",
          "Litre weight",
          "Moisture",
          "Percentage of empty, split and immature pods",
          "Aroma when a pod is crushed",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is Kerala cardamom so green?",
        answer: "Careful harvesting and controlled drying preserve the green chlorophyll colour that buyers associate with freshness and quality.",
      },
    ],
    relatedLinks: [
      { label: "Green cardamom from Versa Traders", href: "/traders/cardamom" },
      { label: "Quality documents", href: "/traders/quality-certification" },
    ],
  },
  {
    slug: "malabar-black-pepper-grades-mg1-tgeb",
    title: "Malabar Black Pepper Grades: MG1, TGEB, TGSEB and Bulk Density",
    metaDescription:
      "What MG1, TGEB, TGSEB and 500/550 g/L mean for Indian black pepper, and how to judge pepper quality before buying in bulk.",
    category: "Trade",
    date: "2026-08-31",
    readTime: "5 min read",
    keywords: ["MG1 pepper", "TGEB pepper", "Tellicherry pepper grades", "black pepper bulk density", "Malabar pepper"],
    image: IMAGES.pepperWhole,
    excerpt: "The grade names are a century old. The logic behind them — size and density — is simple.",
    answer:
      "MG1 (Malabar Garbled Grade 1) is the standard Malabar export grade. TGEB (Tellicherry Garbled Extra Bold) covers berries of about 4.25 mm and above, and TGSEB (Special Extra Bold) about 4.75 mm and above. Density grades such as 500 g/L and 550 g/L describe how much a litre of pepper weighs — higher means heavier, more mature berries.",
    sections: [
      {
        heading: "What does 'garbled' mean?",
        body: [
          "Garbled pepper has been cleaned and sorted to remove stems, dust, pinheads and light berries. Ungarbled pepper has not. Export buyers almost always specify garbled grades.",
        ],
      },
      {
        heading: "What is the difference between MG1 and Tellicherry?",
        body: [
          "Both come from India's Malabar Coast. Tellicherry grades are the largest berries selected from the crop and command a premium for their size and aroma. MG1 is the benchmark standard-size grade used widely by processors.",
        ],
      },
      {
        heading: "Why does bulk density matter?",
        body: [
          "Density reflects maturity. Light, hollow berries lower density and flavour. Processors buying on density — 500 g/L or 550 g/L — get a predictable yield when grinding.",
        ],
      },
      {
        heading: "What else should you test?",
        body: ["Ask for results on:"],
        bullets: [
          "Moisture",
          "Light berries and pinheads",
          "Extraneous matter",
          "Microbiological counts — steam sterilisation where required",
          "Pesticide residues for regulated markets",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Tellicherry pepper better than Malabar?",
        answer: "It is larger and more aromatic, and priced accordingly. For grinding, a good MG1 or density grade often offers better value.",
      },
    ],
    relatedLinks: [
      { label: "Black pepper from Versa Traders", href: "/traders/black-pepper" },
      { label: "Samples & bulk orders", href: "/traders/samples-and-bulk-orders" },
    ],
  },
  {
    slug: "how-to-evaluate-coffee-and-spice-samples",
    title: "How to Evaluate Coffee and Spice Samples Before a Bulk Order",
    metaDescription:
      "A practical checklist for importers evaluating green coffee, cardamom and black pepper samples before committing to a container order.",
    category: "Trade",
    date: "2026-08-24",
    readTime: "6 min read",
    keywords: ["evaluate spice samples", "coffee sample evaluation", "pre-shipment sample", "spice supplier samples"],
    image: IMAGES.cardamomBowl,
    excerpt: "A sample is only useful if it represents the lot — and if you know what to measure.",
    answer:
      "Ask for a sample drawn from the actual lot, with the supplier's quality report. Test the same parameters yourself — moisture, size, density, defects and aroma for spices; moisture, screen size, defects and cup quality for coffee — and put the approved results into the contract so the shipment must match.",
    sections: [
      {
        heading: "Why must the sample come from the actual lot?",
        body: [
          "A 'typical' sample tells you what a supplier can produce, not what you will receive. Insist on a sample drawn from the lot being offered, labelled with a lot reference that appears on the contract and shipping documents.",
        ],
      },
      {
        heading: "What should you measure in a coffee sample?",
        body: [],
        bullets: [
          "Moisture content",
          "Screen size distribution",
          "Defect count per 300 g or 500 g",
          "Odour of the green beans",
          "Cup quality after a sample roast",
        ],
      },
      {
        heading: "What should you measure in a spice sample?",
        body: [],
        bullets: [
          "Size grade and uniformity",
          "Colour (cardamom) or bulk density (pepper)",
          "Moisture",
          "Extraneous matter and light or empty pods and berries",
          "Aroma and oil content where relevant",
        ],
      },
      {
        heading: "How do you make the sample binding?",
        body: [
          "Write the approved values into the contract as the specification, reference the sample, and agree how disputes will be resolved — for example by an independent lab or pre-shipment inspection.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I pay for pre-shipment inspection?",
        answer: "For first orders and large containers, independent inspection is inexpensive insurance and is recommended.",
      },
    ],
    relatedLinks: [
      { label: "Request samples", href: "/traders/samples-and-bulk-orders" },
      { label: "Quality & certification", href: "/traders/quality-certification" },
    ],
  },
  {
    slug: "buying-bulk-spices-from-india-gcc-importers-guide",
    title: "Buying Bulk Spices from India: A Practical Guide for GCC Importers",
    metaDescription:
      "How GCC importers can source cardamom, black pepper and green coffee from India: choosing a supplier, specifications, payment terms, documents and freight.",
    category: "Trade",
    date: "2026-08-18",
    readTime: "7 min read",
    keywords: ["buy spices from India", "bulk spices UAE importer", "Indian spice supplier GCC", "import cardamom UAE"],
    image: IMAGES.pepperMacro,
    excerpt: "From first sample to first container — a workflow that protects the importer.",
    answer:
      "To buy bulk spices from India, shortlist exporters who provide lot samples and quality reports, agree a written specification, choose an Incoterm (FOB or CIF), agree secure payment terms such as advance-plus-documents or a letter of credit, and confirm the certificate of origin and phytosanitary documents your customs broker needs.",
    sections: [
      {
        heading: "How do you choose an Indian spice supplier?",
        body: ["Look for a supplier who:"],
        bullets: [
          "Sends samples from the actual lot",
          "Issues a quality report with each lot",
          "Provides export registrations and certificates without hesitation",
          "Can arrange or coordinate freight to your port",
          "Answers the phone — before and after you pay",
        ],
      },
      {
        heading: "FOB or CIF?",
        body: [
          "FOB (free on board) means you arrange and pay the ocean freight; CIF (cost, insurance and freight) means the supplier does. If you have a strong forwarder, FOB gives control; if not, CIF with a supplier who has an in-house logistics arm is simpler.",
        ],
      },
      {
        heading: "What payment terms are common?",
        body: [
          "Common structures include a partial advance with the balance against shipping documents, cash against documents through banks, or a letter of credit for larger orders. Agree terms before the lot is packed.",
        ],
      },
      {
        heading: "Does India–UAE CEPA help importers?",
        body: [
          "The India–UAE Comprehensive Economic Partnership Agreement provides preferential tariffs on many Indian-origin goods. Ask your supplier for the correct preferential certificate of origin and confirm eligibility with your customs broker.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can one supplier provide both spices and freight?",
        answer: "Yes. Versa Traders supplies the product and Versa Logistics, its sister venture, handles the freight to Jebel Ali, Khorfakkan or other ports.",
      },
    ],
    relatedLinks: [
      { label: "Versa Traders", href: "/traders" },
      { label: "Versa Logistics", href: "/logistics" },
    ],
  },
  {
    slug: "why-uae-importers-source-coffee-and-spices-from-kerala",
    title: "Why UAE Importers Source Coffee and Spices from Kerala",
    metaDescription:
      "Kerala's spice heritage, shade-grown coffee, short sea route to the UAE and CEPA trade terms make it a natural source for Gulf importers.",
    category: "Trade",
    date: "2026-08-10",
    readTime: "5 min read",
    keywords: ["Kerala spices export UAE", "Kerala coffee export", "India UAE spice trade", "why buy spices from Kerala"],
    image: IMAGES.coffeePlants,
    excerpt: "Two thousand years of trade across the Arabian Sea — and the reasons it still makes sense.",
    answer:
      "UAE importers source coffee and spices from Kerala because the region grows premium cardamom, black pepper and shade-grown coffee; Kochi is roughly a week's direct sailing from Jebel Ali; India–UAE CEPA offers preferential trade terms; and long-standing Kerala–Gulf business ties make communication and trust easier.",
    sections: [
      {
        heading: "What does Kerala grow best?",
        body: [
          "Kerala is India's heartland for small green cardamom and a historic source of black pepper, and its hills — together with neighbouring Karnataka and Tamil Nadu — produce shade-grown Arabica and Robusta coffee.",
        ],
      },
      {
        heading: "How close is Kerala to the UAE by sea?",
        body: [
          "Close. Direct sailings from Kochi to Jebel Ali take around a week, making Kerala one of the fastest origins for Gulf importers.",
        ],
      },
      {
        heading: "Why do relationships matter?",
        body: [
          "Generations of Keralites have lived and traded in the Gulf. That shared language and network makes it easier to verify suppliers, resolve issues and build long-term supply.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Kerala the largest cardamom producer in India?",
        answer: "Yes. Kerala, especially the Idukki district, produces the majority of India's small green cardamom.",
      },
    ],
    relatedLinks: [
      { label: "Green cardamom", href: "/traders/cardamom" },
      { label: "India → Jebel Ali shipping", href: "/logistics/india-to-jebel-ali-shipping" },
    ],
  },
  {
    slug: "versa-growth-ventures-diversified-venture-group",
    title: "Inside Versa Growth Ventures: A Diversified Venture Group from Kochi",
    metaDescription:
      "How Versa Growth Ventures brings together Versa Digital & IT Solutions, Versa Logistics, Versa Traders, Versa BPO, Versa Financial and Versa Global — and why a diversified group helps customers.",
    category: "Group",
    date: "2026-09-26",
    readTime: "4 min read",
    keywords: ["Versa Growth Ventures", "diversified venture group Kochi", "Kochi business group", "Versa BPO", "Versa Financial", "Versa Digital & IT Solutions"],
    image: IMAGES.kochiSunset,
    excerpt: "Six businesses, one office in Kakkanad, and one idea about accountability.",
    answer:
      "Versa Growth Ventures is a diversified venture group in Kochi founded in 2025 by Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu. It runs Versa Digital & IT Solutions (ERP, AI agents, automation and marketing), Versa Logistics (freight), Versa Traders (spices and coffee trading and sourcing), Versa BPO (outsourcing), Versa Financial (portfolio, trading, insurance, SIPs and mutual funds) and Versa Global (study abroad).",
    sections: [
      {
        heading: "Why build a group rather than a single company?",
        body: [
          "Each venture serves a different customer, but they share leadership, systems and standards. Trade and freight in particular reinforce each other: a buyer of Versa Traders' coffee can have Versa Logistics ship it, with one team accountable end to end.",
        ],
      },
      {
        heading: "What have the trade ventures delivered so far?",
        body: [
          "Versa Logistics has shipped 15 × 40ft containers of coffee beans to Jebel Ali and 2 × 40ft to Khorfakkan, and now runs a regular India–UAE service. Versa Traders supplies green coffee, cardamom and black pepper in bulk with samples and certification.",
        ],
      },
      {
        heading: "Where do technology, outsourcing and finance fit?",
        body: [
          "Versa Digital & IT Solutions (versadigital.in) has delivered 20+ ERP and custom agent builds, 30+ AI agents and 20+ automations, and serves 20+ active marketing clients. Versa BPO runs customer support and back-office work for clients including Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions. Versa Financial manages portfolios and trading for 50+ clients and has completed 500+ insurance policies. Versa Global (versaglobal.in) guides students abroad.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who founded Versa Growth Ventures?",
        answer: "Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu.",
      },
    ],
    relatedLinks: [
      { label: "About the group", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "All ventures", href: "/ventures" },
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [...BLOG_ONION_POSTS, ...BLOG_DIGITAL_POSTS, ...BLOG_PORT_POSTS, ...BLOG_CORE_POSTS, ...BLOG_EXTRA_POSTS, ...BLOG_LOGISTICS_POSTS]
