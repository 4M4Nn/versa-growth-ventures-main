import type { BlogPost } from "@/types"
import { IMAGES } from "./site"
import { SOURCING_IMAGES } from "./traders-sourcing"

const QUOTE = { label: "Get a quotation", href: "/contact?enquiry=sourcing" }
const SOURCE = { label: "Source any product from India", href: "/traders/export-sourcing-india" }
const SUPPLIERS = { label: "Suppliers — export with us", href: "/traders/export-with-us-suppliers" }
const CHA = { label: "CHA — customs clearance", href: "/logistics/customs-clearance-cha" }
const FREIGHT_QUOTE = { label: "Get a freight quote", href: "/logistics/freight-quote" }
const DIGITAL = { label: "Versa Digital & IT Solutions", href: "/ventures/versa-digital-it-solutions" }

// October 2026 update: one batch of new guides for every Insights section
export const BLOG_OCT_POSTS: BlogPost[] = [
  /* ---------------------------------------------------------------- Trade */
  {
    slug: "how-to-import-from-india-first-time-buyers-guide",
    title: "How to Import from India for the First Time: A Buyer's Guide to Suppliers, Quotations and Deals",
    metaDescription:
      "A first-time importer's guide to buying from India: defining the requirement, finding reliable suppliers, comparing quotations, samples, contracts, payment, logistics and customs.",
    category: "Trade",
    date: "2026-10-14",
    readTime: "8 min read",
    keywords: ["how to import from India", "buy products from India", "Indian suppliers for importers", "import from India guide", "sourcing agent India"],
    image: SOURCING_IMAGES.snacks,
    excerpt: "Buying from India is easier than it looks — if you settle these seven things before the first order.",
    answer:
      "To import from India for the first time, write a clear specification, find suppliers who can meet it, compare like-for-like quotations on the same Incoterm, approve samples, sign a written contract with price, quality, quantity and shipment period, agree safe payment terms, and arrange freight and customs clearance. A trading partner in India such as Versa International Traders can find the supplier, quote, and follow the deal through to delivery.",
    sections: [
      {
        heading: "Step 1: What should your requirement say?",
        body: [],
        bullets: ["Product and grade or specification", "Quantity per order and per year", "Packing and labelling", "Destination port and delivery timing", "Certificates your market requires"],
      },
      {
        heading: "Step 2: How do you find a reliable supplier?",
        body: [
          "Look for suppliers with export experience in your product, the registrations and certificates your market needs, and the capacity to supply repeatedly. A trading company with an existing supplier network can shortlist suppliers and check them for you.",
        ],
      },
      {
        heading: "Step 3: How do you compare quotations?",
        body: ["Ask every supplier to quote the same specification, packing and Incoterm — FOB, CFR or CIF — with a validity date. Then compare the totals, not just the unit price."],
      },
      {
        heading: "Step 4: Samples, contract and payment",
        body: [
          "Approve a sample from the lot, then put the specification, price, quantity, shipment period and payment terms in a written contract. Common terms are a partial advance with the balance against documents, cash against documents through banks, or a letter of credit.",
        ],
      },
      {
        heading: "Step 5: Freight and customs",
        body: [
          "Decide who books the freight. Under CFR or CIF the seller does; under FOB you do. Export customs clearance in India is handled by a CHA (customs broker), and import clearance by your own agent at destination.",
        ],
      },
    ],
    faqs: [
      { question: "Do I need an agent to import from India?", answer: "Not always, but a trading partner in India reduces risk for first orders by checking suppliers, samples, documents and shipment on your behalf." },
      { question: "What is the safest payment method for a first order?", answer: "A letter of credit gives the most protection for larger orders; for smaller orders, cash against documents through banks is common." },
    ],
    relatedLinks: [SOURCE, QUOTE, { label: "Incoterms explained", href: "/blog/incoterms-fob-cfr-cif-explained" }],
  },
  {
    slug: "desiccated-coconut-buyers-guide",
    title: "Desiccated Coconut Buyer's Guide: Grades, Fat Content, Moisture and Packing",
    metaDescription:
      "What importers should specify when buying desiccated coconut from India: fine, medium and coarse grades, high-fat and low-fat types, moisture limits, packing and documents.",
    category: "Trade",
    date: "2026-10-13",
    readTime: "5 min read",
    keywords: ["desiccated coconut grades", "desiccated coconut specification", "desiccated coconut supplier India", "buy desiccated coconut", "coconut powder import"],
    image: SOURCING_IMAGES.coconut,
    excerpt: "Fine or medium, high fat or low fat — the specification decides how desiccated coconut performs in your product.",
    answer:
      "Desiccated coconut is dried, grated coconut kernel. Buyers specify the cut (fine, medium or coarse granules, or flakes and chips), the fat type (high-fat, typically around 60% fat or more, or low-fat), a low moisture limit (commonly around 3% maximum), colour, free fatty acid limit, microbiological standards and packing — usually multi-wall paper bags with a polythene liner.",
    sections: [
      {
        heading: "Which cuts are available?",
        body: [],
        bullets: ["Fine — for biscuits, fillings and confectionery", "Medium — the most common general-purpose grade", "Coarse — for toppings and texture", "Flakes and chips — for cereals, snacks and decoration"],
      },
      {
        heading: "High-fat or low-fat?",
        body: ["High-fat desiccated coconut keeps the natural coconut oil and gives full flavour. Low-fat (reduced-fat) types have had part of the oil removed and are used where a drier, lighter ingredient is wanted."],
      },
      {
        heading: "What should the contract specify?",
        body: [],
        bullets: ["Cut and particle size", "Fat content range", "Maximum moisture", "Colour — white, free from brown specks", "Free fatty acid limit", "Microbiological standards", "Packing and shelf life"],
      },
    ],
    faqs: [
      { question: "Where does Indian desiccated coconut come from?", answer: "Mainly from processors in Kerala, Tamil Nadu and Karnataka, India's main coconut-growing states." },
    ],
    relatedLinks: [{ label: "Coconut products", href: "/traders/coconut-products-export" }, QUOTE, SOURCE],
  },
  {
    slug: "exporting-indian-snacks-to-the-uk-supplier-guide",
    title: "Exporting Indian Snacks and Foods to the UK: What Suppliers Need to Get Right",
    metaDescription:
      "A guide for Indian food and snack makers who want to supply the UK: labelling, ingredients and allergens, shelf life, packing, documents and why a UK distributor matters.",
    category: "Trade",
    date: "2026-10-12",
    readTime: "6 min read",
    keywords: ["export snacks to UK", "Indian food export UK", "banana chips export UK", "UK food import requirements", "UK distributor Indian food"],
    image: SOURCING_IMAGES.bananaChips,
    excerpt: "The UK is a big market for Indian snacks. These are the things a supplier must have in order before the first pallet ships.",
    answer:
      "To export Indian snacks and foods to the UK, suppliers need products that meet UK food safety rules, English-language labels with ingredients, allergens, net quantity, durability date and the UK importer's details, a realistic shelf life for the journey and time on shelf, export-grade packing and complete documents. Selling through a UK distributor gives the products an importer of record and a route to retailers.",
    sections: [
      {
        heading: "What must a UK food label show?",
        body: [],
        bullets: ["Product name and ingredients list", "Allergens emphasised in the ingredients", "Net quantity", "Best-before or use-by date", "Storage conditions", "Name and address of the UK food business responsible", "Country of origin where required"],
      },
      {
        heading: "Why does shelf life matter so much?",
        body: ["Sea freight from India to the UK takes several weeks, and retailers want enough shelf life left on arrival to sell the product. Fried snacks such as banana chips need packing that keeps out air and moisture."],
      },
      {
        heading: "Why sell through a UK distributor?",
        body: [
          "A distributor imports the goods, takes responsibility as the UK food business, and sells on to retailers and stores. Versa International Traders has a distribution partner in the UK and works with Indian suppliers who want to supply it regularly.",
        ],
      },
    ],
    faqs: [
      { question: "Can a small Indian snack maker export to the UK?", answer: "Yes, if the product, labels and packing meet UK requirements and it can supply consistently. A trader with a UK distributor can provide the route to market." },
    ],
    relatedLinks: [SUPPLIERS, { label: "Snacks & food products", href: "/traders/snacks-export" }, QUOTE],
  },

  /* ------------------------------------------------------------ Logistics */
  {
    slug: "what-is-a-cha-customs-broker-export",
    title: "What Is a CHA? The Customs Broker's Role in Exporting from India",
    metaDescription:
      "What a CHA (customs house agent, now customs broker) does for an export shipment from India: shipping bill filing, examination, let export order and documents — and why it matters for your sailing.",
    category: "Logistics",
    date: "2026-10-14",
    readTime: "5 min read",
    keywords: ["what is CHA", "customs house agent", "customs broker India export", "CHA Kochi", "export customs clearance India"],
    image: IMAGES.kochiTerminal,
    excerpt: "No container leaves an Indian port without customs clearance. This is who makes it happen.",
    answer:
      "A CHA — customs house agent, now formally called a customs broker in India — is the licensed agent who clears goods through customs for the exporter. For an export shipment the CHA files the shipping bill, coordinates any customs examination, obtains the let export order so the container can be loaded, and makes sure the declaration matches the invoice, packing list and certificates.",
    sections: [
      {
        heading: "What does a CHA do, step by step?",
        body: [],
        bullets: ["Checks the invoice, packing list and certificates", "Files the shipping bill electronically", "Coordinates examination if customs selects the cargo", "Obtains the let export order (LEO)", "Shares clearance status with the freight forwarder before cut-off"],
      },
      {
        heading: "Why should CHA and freight work together?",
        body: ["The container must be cleared before the vessel's cut-off. When the same group handles customs and freight, clearance and booking stay in step and missed sailings are less likely."],
      },
      {
        heading: "Who needs a CHA?",
        body: ["Every exporter needs customs clearance. Overseas buyers sourcing through Versa International Traders can have the CHA work handled for them by Versa Logistics."],
      },
    ],
    faqs: [
      { question: "Is a CHA the same as a freight forwarder?", answer: "No. The CHA handles customs clearance; the freight forwarder books and manages the transport. Some companies, including the Versa group, provide both." },
    ],
    relatedLinks: [CHA, FREIGHT_QUOTE, { label: "Export documentation", href: "/logistics/export-documentation" }],
  },
  {
    slug: "shipping-bill-and-let-export-order-explained",
    title: "Shipping Bill and Let Export Order Explained: India's Export Clearance in Plain English",
    metaDescription:
      "What a shipping bill is, what the let export order (LEO) means, how they fit into export clearance from Indian ports, and the common mistakes that delay containers.",
    category: "Logistics",
    date: "2026-10-13",
    readTime: "5 min read",
    keywords: ["shipping bill India", "let export order", "LEO export", "export clearance India", "shipping bill meaning"],
    image: IMAGES.truck,
    excerpt: "Two documents stand between a packed container and the vessel. Here is what they are.",
    answer:
      "The shipping bill is the export declaration filed with Indian customs, describing the goods, their value, the exporter and the destination. Once customs has assessed it and, if required, examined the cargo, it grants the let export order (LEO), which allows the container to be loaded onto the vessel. The LEO date is also used for export incentives and records.",
    sections: [
      {
        heading: "What is on a shipping bill?",
        body: [],
        bullets: ["Exporter details and IEC", "Description and classification of the goods", "Quantity and value", "Port of loading and destination", "Invoice and packing references"],
      },
      {
        heading: "What causes delays?",
        body: [],
        bullets: ["Mismatches between invoice, packing list and declaration", "Wrong product classification", "Missing certificates", "Filing too close to the vessel cut-off"],
      },
    ],
    faqs: [
      { question: "Who files the shipping bill?", answer: "Usually the CHA (customs broker) on behalf of the exporter." },
    ],
    relatedLinks: [CHA, { label: "What is a CHA?", href: "/blog/what-is-a-cha-customs-broker-export" }, FREIGHT_QUOTE],
  },
  {
    slug: "shipping-food-products-from-india-to-the-uk",
    title: "Shipping Food Products from India to the UK: Routes, Containers, Transit and Documents",
    metaDescription:
      "How food products and snacks are shipped from Indian ports to the UK: container choice, routing via transhipment hubs, typical transit, documents and how to protect shelf life.",
    category: "Logistics",
    date: "2026-10-12",
    readTime: "5 min read",
    keywords: ["shipping from India to UK", "India to UK sea freight", "food container India to UK", "Kochi to UK shipping", "export to UK freight"],
    image: IMAGES.shipAerial,
    excerpt: "The India–UK lane is longer than the Gulf. Plan the container, the route and the paperwork around it.",
    answer:
      "Food products ship from India to UK ports such as Felixstowe, Southampton and London Gateway in dry containers for shelf-stable goods, or refrigerated containers for chilled and temperature-sensitive products. Many services tranship at a hub port, and the sea voyage typically takes several weeks, so shelf life and moisture-proof packing matter. Exporters need a commercial invoice, packing list, bill of lading, certificate of origin and any health or product certificates the importer requires.",
    sections: [
      {
        heading: "Dry or refrigerated container?",
        body: ["Packaged snacks, desiccated coconut and other shelf-stable foods usually travel in dry containers, with moisture protection. Chilled or temperature-sensitive products need reefers."],
      },
      {
        heading: "Which UK ports receive Indian containers?",
        body: ["Felixstowe, Southampton and London Gateway are the main container ports, chosen according to the carrier's service and the importer's warehouse."],
      },
      {
        heading: "How do you protect shelf life on a long voyage?",
        body: [],
        bullets: ["Pack in moisture-barrier materials", "Use desiccants in dry containers", "Ship soon after production", "Choose services with fewer transhipments"],
      },
    ],
    faqs: [
      { question: "Can Versa Logistics ship to the UK?", answer: "Yes. Versa Logistics books sea freight from Indian ports worldwide, including to UK ports, with CHA and export documents." },
    ],
    relatedLinks: [FREIGHT_QUOTE, SUPPLIERS, CHA],
  },

  /* -------------------------------------------------------------- Digital */
  {
    slug: "seo-for-exporters-how-international-buyers-find-suppliers",
    title: "SEO for Exporters: How International Buyers Find Indian Suppliers Online",
    metaDescription:
      "How importers search for suppliers in India, and how exporters can be found: product and market pages, specifications, certifications, AEO-ready answers and trust signals.",
    category: "Digital",
    date: "2026-10-14",
    readTime: "6 min read",
    keywords: ["SEO for exporters", "export marketing India", "how buyers find suppliers", "B2B SEO India", "AEO for exporters"],
    plate: { title: "Buyer → Search", note: "How importers find Indian suppliers" },
    excerpt: "Importers search the way they buy: by product, grade, origin and market. Your website should answer in the same terms.",
    answer:
      "International buyers find suppliers by searching for a product plus origin and specification — for example \"Nashik onion exporter\" or \"desiccated coconut supplier India\" — and increasingly by asking AI assistants. Exporters get found by publishing a page for each product and each target market, stating specifications, packing, certifications and shipping terms clearly, answering buyers' common questions directly, and showing real trade records.",
    sections: [
      {
        heading: "How do importers search?",
        body: [],
        bullets: ["Product + \"exporter\" or \"supplier\" + country", "Product + grade or size, such as \"55 mm onion\"", "Product + destination, such as \"coffee beans to UAE\"", "Questions to AI assistants about where to source"],
      },
      {
        heading: "What should an exporter's product page include?",
        body: [],
        bullets: ["A heading with product, origin and \"exporter\"", "A direct one-paragraph answer to \"what do you supply?\"", "Specifications, sizes and packing", "Certifications and documents", "Incoterms and ports", "A clear way to request a quotation"],
      },
      {
        heading: "What builds trust with buyers?",
        body: ["Real records — volumes traded, ports delivered to, years in business — stated plainly, plus a physical address and reachable phone numbers."],
      },
    ],
    faqs: [
      { question: "Should an exporter have a page for each country?", answer: "For your main markets, yes. A page per market lets you answer that buyer's specific questions on ports, documents and terms." },
    ],
    relatedLinks: [DIGITAL, { label: "What is AEO?", href: "/blog/what-is-aeo-answer-engine-optimization-vs-seo" }, { label: "Discuss your project", href: "/contact?enquiry=digital" }],
  },
  {
    slug: "how-to-write-product-pages-ai-assistants-quote",
    title: "How to Write B2B Product Pages That AI Assistants Will Quote",
    metaDescription:
      "A practical template for B2B product pages built for answer engines: question headings, direct answers, specification tables, FAQs and structured data.",
    category: "Digital",
    date: "2026-10-13",
    readTime: "5 min read",
    keywords: ["AEO product pages", "write for AI search", "B2B product page SEO", "structured data product page", "answer engine optimisation template"],
    plate: { title: "Page → Answer", note: "A product page template for AI search" },
    excerpt: "AI assistants quote pages that answer clearly. Here is a structure that does.",
    answer:
      "A product page that AI assistants quote opens with a one-paragraph answer saying what the product is, where it comes from and who supplies it; uses question-style H2 headings with a short direct answer under each; lists specifications in a table; includes an FAQ section; and carries Product, Organization and FAQPage structured data. Facts should be specific and consistent with the rest of the website.",
    sections: [
      {
        heading: "What structure works best?",
        body: [],
        bullets: ["H1 — product, origin and role (\"exporter\", \"supplier\")", "Direct-answer paragraph", "Specification table", "Question-style H2 sections", "FAQs", "Quotation call to action"],
      },
      {
        heading: "Which structured data should you add?",
        body: ["Product markup for the item, Organization for the company, FAQPage for the questions and BreadcrumbList for the page path. This site uses all four on its product pages."],
      },
    ],
    faqs: [
      { question: "How long should a product page be?", answer: "Long enough to answer the buyer's real questions. Clear sections matter more than word count." },
    ],
    relatedLinks: [DIGITAL, { label: "Get recommended by AI assistants", href: "/blog/how-to-get-your-business-recommended-by-ai-assistants" }],
  },

  /* ---------------------------------------------------------------- Group */
  {
    slug: "versa-international-traders-why-the-new-name",
    title: "Why Versa Traders Became Versa International Traders",
    metaDescription:
      "The story behind the new name: how Versa International Traders bridges international buyers and Indian suppliers, works with a UK distribution partner, and offers logistics and CHA through the group.",
    category: "Group",
    date: "2026-10-14",
    readTime: "4 min read",
    keywords: ["Versa International Traders", "Versa Traders", "Versa Growth Ventures trading", "export sourcing India Kochi"],
    image: SOURCING_IMAGES.snacks,
    excerpt: "A bigger name for a bigger job: connecting buyers abroad with suppliers across India.",
    answer:
      "Versa Traders became Versa International Traders to reflect what the venture now does: it bridges international buyers and Indian suppliers. Buyers send any requirement — onions, coffee beans, spices, agro products, snacks, coconut products and more — and receive a quotation, with the deal followed through to delivery. Indian suppliers who want to export regularly can supply through it, including to its UK distribution partner, and logistics and CHA come from Versa Logistics.",
    sections: [
      {
        heading: "What changed?",
        body: ["The scope. Versa Traders started with coffee, cardamom and black pepper, then added onions. Versa International Traders now sources whatever buyers need from its supplier network and works with suppliers on regular export."],
      },
      {
        heading: "What stayed the same?",
        body: ["Samples before commitment, written specifications, quality documents and one accountable contact on every deal — and the coffee and onion trading desks, including the recent 160 MT coffee bean trade to the UAE."],
      },
      {
        heading: "How does it fit with the rest of the group?",
        body: ["Versa Logistics provides freight and CHA, so the group can handle product, shipping and customs together."],
      },
    ],
    faqs: [
      { question: "Did the website addresses change?", answer: "No. Versa International Traders pages stay at versagrowthventures.in/traders." },
    ],
    relatedLinks: [{ label: "Versa International Traders", href: "/traders" }, SOURCE, SUPPLIERS],
  },
  {
    slug: "one-group-trading-logistics-cha-how-it-works",
    title: "Trading, Freight and Customs from One Group: How Versa Works for Buyers",
    metaDescription:
      "How a buyer can source a product, ship it and clear export customs through one group: Versa International Traders for the product, Versa Logistics for freight and CHA.",
    category: "Group",
    date: "2026-10-12",
    readTime: "4 min read",
    keywords: ["sourcing and logistics India", "trading and freight one company", "export with CHA Kochi", "Versa Growth Ventures"],
    image: IMAGES.kochiSunset,
    excerpt: "Three jobs that usually mean three companies — handled by one team.",
    answer:
      "A buyer working with Versa Growth Ventures sends the requirement to Versa International Traders, which finds the supplier, quotes and manages the deal. Versa Logistics then books the sea freight and provides CHA for export customs clearance, so product, freight and customs move on one plan with one point of contact.",
    sections: [
      {
        heading: "Who does what?",
        body: [],
        bullets: ["Versa International Traders — supplier, quotation, samples, contract, quality", "Versa Logistics — container booking, transport, sea freight", "Versa Logistics CHA — shipping bill, examination, let export order"],
      },
      {
        heading: "Why does it help the buyer?",
        body: ["Fewer hand-offs mean fewer missed cut-offs and document mismatches, and one person to call about the shipment."],
      },
    ],
    faqs: [
      { question: "Can I use only part of the service?", answer: "Yes. Buy the product only, book freight only, or use the full service — whatever suits the shipment." },
    ],
    relatedLinks: [SOURCE, CHA, FREIGHT_QUOTE],
  },
]
