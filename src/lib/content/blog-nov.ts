import type { BlogPost } from "@/types"
import { IMAGES } from "./site"
import { SOURCING_IMAGES } from "./traders-sourcing"

const QUOTE = { label: "Get a quotation", href: "/contact?enquiry=sourcing" }
const SOURCE = { label: "Source from India", href: "/traders/export-sourcing-india" }
const SUPPLIERS = { label: "Suppliers — export with us", href: "/traders/export-with-us-suppliers" }
const CHA = { label: "CHA — customs clearance", href: "/logistics/customs-clearance-cha" }
const FREIGHT_QUOTE = { label: "Get a freight quote", href: "/logistics/freight-quote" }
const DIGITAL = { label: "Versa Digital & IT Solutions", href: "/ventures/versa-digital-it-solutions" }

// November 2026 update: fresh guides for every Insights section
export const BLOG_NOV_POSTS: BlogPost[] = [
  /* ---------------------------------------------------------------- Trade */
  {
    slug: "black-pepper-export-from-india-buyers-guide",
    title: "Black Pepper from India: A Buyer's Guide to Grades, Specification and Export",
    metaDescription:
      "What importers need to know when sourcing black pepper from India: grades, moisture, piperine content, packing, certificates and how to compare suppliers.",
    category: "Trade",
    date: "2026-11-03",
    readTime: "6 min read",
    keywords: ["black pepper export India", "Indian black pepper supplier", "buy black pepper India", "black pepper grade specification", "Malabar pepper exporter"],
    image: IMAGES.pepperWhole,
    excerpt: "Malabar and Tellicherry black pepper from India is the benchmark for heat and aroma. Specify it right before the first order.",
    answer:
      "Black pepper from India is exported in three main grades: Malabar (the standard grade), Tellicherry (a larger, fully mature berry with stronger aroma, grown mainly in the Wayanad and Kozhikode belt), and Tellicherry Extra Bold (the largest screen size). Buyers specify moisture content (typically 12% maximum), piperine content, bulk density, foreign matter limits, and packing — usually multi-wall jute bags with a polyethylene liner. A phytosanitary certificate and FSSAI-approved processing plant documentation are standard export requirements.",
    sections: [
      {
        heading: "What are the main grades of Indian black pepper?",
        body: [],
        bullets: [
          "Malabar Garbled (MG1, ASTA) — the most traded grade, consistent and clean",
          "Tellicherry (TGEB, 4.25 mm or 4.75 mm screen) — larger berry, richer aroma, premium priced",
          "Tellicherry Extra Bold (AGEB, 5.0 mm screen) — the top specification, highest oil and piperine content",
          "Light berries and pinheads — low-grade by-product, used in oleoresin extraction",
        ],
      },
      {
        heading: "What should a specification include?",
        body: [],
        bullets: [
          "Grade and screen size",
          "Moisture content (typically ≤ 12%)",
          "Piperine content minimum",
          "Bulk density",
          "Foreign matter and light berry limits",
          "Packing, bag weight and labelling",
          "Pest treatment if required (steam sterilised, irradiated or ETO-free)",
        ],
      },
      {
        heading: "What certifications do buyers require?",
        body: [
          "A phytosanitary certificate from the Plant Quarantine Department, a certificate of origin, and an FSSAI-approved facility certificate. Organic buyers also need a valid organic certificate from an APEDA-approved certifier.",
        ],
      },
      {
        heading: "Which months are best for sourcing?",
        body: [
          "The Indian black pepper harvest runs from November to February, with new season stocks arriving from December. Sourcing immediately post-harvest gives the best moisture and aroma; buying close to the next harvest season may mean older stock.",
        ],
      },
    ],
    faqs: [
      { question: "Which Indian state produces the best black pepper?", answer: "Kerala, particularly Wayanad, Idukki and Kozhikode districts, produces Tellicherry and top Malabar grades. Karnataka is also a significant producer of Malabar grade pepper." },
      { question: "Can I buy black pepper directly from a Kerala farmer?", answer: "For small quantities, yes. For bulk export — consistent grade, documents, certificates, packing and freight — a trading company with supplier relationships and CHA access is the practical route." },
    ],
    relatedLinks: [QUOTE, SOURCE, { label: "Cardamom export guide", href: "/blog/cardamom-export-from-india-buyers-guide" }],
  },
  {
    slug: "cardamom-export-from-india-buyers-guide",
    title: "Green Cardamom from India: What Importers Need to Know About Grades, Specification and Export",
    metaDescription:
      "A buyer's guide to sourcing green cardamom from India: bold and extra bold grades, moisture and volatile oil content, packing, documents and the Cardamom Board certification.",
    category: "Trade",
    date: "2026-11-05",
    readTime: "5 min read",
    keywords: ["green cardamom export India", "cardamom supplier India", "buy cardamom India", "cardamom grade specification", "Kerala cardamom exporter"],
    image: IMAGES.cardamomPods,
    excerpt: "India's green cardamom is graded, certified and packed to a precise standard. Here is what buyers need to specify.",
    answer:
      "Green cardamom from India is graded by size (6 mm, 7 mm, 8 mm screen), colour (green), volatile oil content (typically 5–6% minimum for premium grades), and moisture content (typically 10–12% maximum). The Spices Board of India certifies the processing and grading unit; a phytosanitary certificate is required for export. Packing is usually 25 kg metal tins or multi-wall bags to protect the volatile oil.",
    sections: [
      {
        heading: "What grades are available?",
        body: [],
        bullets: [
          "Extra Bold (8 mm+ screen) — largest, highest oil content, premium aroma",
          "Bold (7 mm screen) — the most widely traded grade",
          "Medium (6 mm screen) — smaller, lower oil content, price-accessible",
          "Light green and mixed — lower grade used for grinding and oleoresin",
        ],
      },
      {
        heading: "Why does volatile oil content matter?",
        body: [
          "The aroma and flavour of cardamom come from the essential oil in the seeds. Volatile oil content — typically reported as a percentage of the pod weight — is the clearest quality indicator. Extra Bold Indian cardamom consistently delivers 5–6% or above; lower grades or old stock may fall below 4%.",
        ],
      },
      {
        heading: "What certification is required for export?",
        body: [
          "Every Indian cardamom export lot needs a Spices Board of India Certificate of Inspection, a phytosanitary certificate, and a certificate of origin. Buyers with organic requirements need an additional organic certificate from an APEDA-approved certifier.",
        ],
      },
    ],
    faqs: [
      { question: "Where is Indian green cardamom grown?", answer: "Idukki district in Kerala accounts for the majority of India's green cardamom production, followed by parts of Karnataka. Idukki's high-altitude, humid climate produces the most aromatic pods." },
      { question: "Is there a difference between Indian and Guatemalan cardamom?", answer: "Indian cardamom is smaller, darker green, and carries a significantly more intense aroma and volatile oil content. Guatemalan cardamom is larger, lighter, and dominates global volume. For premium flavour and oil content, Indian is the benchmark." },
    ],
    relatedLinks: [QUOTE, SOURCE, { label: "Black pepper export guide", href: "/blog/black-pepper-export-from-india-buyers-guide" }],
  },
  {
    slug: "how-to-source-agro-products-from-india-for-importers",
    title: "How to Source Agro Products from India: A Practical Guide for International Buyers",
    metaDescription:
      "How international buyers source agro commodities — spices, coffee, onions, coconut products, snacks — from India: supplier network, specification, documents, logistics and a trading partner's role.",
    category: "Trade",
    date: "2026-11-07",
    readTime: "7 min read",
    keywords: ["source agro products India", "agro commodity supplier India", "import agricultural products India", "Indian agro exporter", "sourcing agent India"],
    image: SOURCING_IMAGES.snacks,
    excerpt: "India supplies a wider range of agro products than most importers realise. Finding the right supplier is the hard part.",
    answer:
      "International buyers source agro commodities from India — spices, coffee, onions, coconut products, snacks and more — by identifying a supplier with the right product, grade, certifications and capacity, then using a trading company or sourcing agent to shortlist suppliers, negotiate price, check samples, arrange export documents and book freight. Versa International Traders acts as that trading partner for buyers worldwide, sourcing from its supplier network and following the deal to delivery.",
    sections: [
      {
        heading: "Which agro products can be sourced from India?",
        body: [],
        bullets: [
          "Spices — black pepper, cardamom, cumin, turmeric, chilli, coriander, nutmeg",
          "Coffee — green Arabica and Robusta beans, processed coffee",
          "Onions — Nashik red, Bangalore Rose, small onion, white onion",
          "Coconut products — desiccated coconut, coconut oil, coconut cream, coconut flour",
          "Snacks and foods — banana chips, murukku, jackfruit snacks, rice snacks",
          "Pulses and grains — toor dal, chana, rice varieties",
        ],
      },
      {
        heading: "How do you find a reliable supplier?",
        body: [
          "Look for a supplier with export experience in your specific product, the certifications your market requires (Spices Board for spices, FSSAI approval, APEDA for organics), consistent supply capacity and a track record of export documentation. A trading company with an existing verified supplier network reduces the time and risk of finding and vetting suppliers yourself.",
        ],
      },
      {
        heading: "What happens between quotation and shipment?",
        body: [],
        bullets: [
          "Sample approval against your specification",
          "Price and volume agreement on a confirmed Incoterm",
          "Written contract with specification, quality, quantity, shipment period and payment terms",
          "Pre-shipment inspection if required",
          "CHA handling of shipping bill and let export order",
          "Sea freight booking and bill of lading",
          "Certificate of origin, phytosanitary and quality certificates",
        ],
      },
    ],
    faqs: [
      { question: "Does Versa International Traders source products beyond coffee and onions?", answer: "Yes. Buyers can send any product requirement — spices, coconut products, snacks, grains or other agro commodities — and we find the supplier, quote and follow the deal through." },
      { question: "Does Versa Logistics handle the freight for sourcing orders?", answer: "Yes. Versa Logistics provides sea freight, CHA and export customs clearance for orders placed through Versa International Traders, so product, freight and clearance are handled by one group." },
    ],
    relatedLinks: [SOURCE, SUPPLIERS, CHA],
  },

  /* ------------------------------------------------------------ Logistics */
  {
    slug: "kochi-to-colombo-sea-freight",
    title: "Kochi to Colombo Sea Freight: Routes, Containers, Transit and Documents",
    metaDescription:
      "Sea freight from Kochi (Cochin) to Colombo, Sri Lanka — direct and tranship services, container options, typical transit time, documents needed and how to book.",
    category: "Logistics",
    date: "2026-11-04",
    readTime: "5 min read",
    keywords: ["Kochi to Colombo sea freight", "Cochin to Sri Lanka shipping", "India to Sri Lanka container", "sea freight Kochi Colombo", "Colombo port shipping"],
    image: IMAGES.kochiTerminal,
    excerpt: "Kochi and Colombo are just over 300 nautical miles apart. The route is short and well-served — here is how to use it.",
    answer:
      "Kochi (Cochin) and Colombo are connected by regular container services with a sea voyage of typically two to four days, making it one of the shortest international container routes from India. Both direct services and tranship services via nearby hub ports operate on this lane. Exporters need a commercial invoice, packing list, bill of lading, certificate of origin, and any product certificates their cargo requires.",
    sections: [
      {
        heading: "What container options are there?",
        body: [],
        bullets: [
          "FCL (Full Container Load) 20ft and 40ft — for large volumes going to one consignee",
          "LCL (Less Than Container Load) — for smaller volumes consolidated with other cargo",
          "Reefer containers — for temperature-sensitive cargo such as fresh produce",
        ],
      },
      {
        heading: "What documents are needed?",
        body: [],
        bullets: [
          "Commercial invoice",
          "Packing list",
          "Shipping bill (filed by CHA)",
          "Bill of lading",
          "Certificate of origin (DGFT or Chamber of Commerce, as required by the Sri Lanka buyer)",
          "Phytosanitary certificate for agro commodities",
          "Product certificates as required by the importer",
        ],
      },
      {
        heading: "What is the Incoterm for India-Sri Lanka shipments?",
        body: [
          "FOB Kochi (or Cochin Port) and CIF Colombo are common for this lane, depending on who the buyer wants to arrange freight and insurance. We can advise on the right Incoterm for your transaction.",
        ],
      },
    ],
    faqs: [
      { question: "Does Versa Logistics ship from Kochi to Colombo?", answer: "Yes. Versa Logistics quotes sea freight on the Kochi–Colombo lane and provides CHA for export customs clearance at Kochi." },
      { question: "Is there a direct service from Kochi to Colombo?", answer: "Some carriers operate direct services; others route via a tranship hub. We compare options and advise on the best service for your cargo and timeline." },
    ],
    relatedLinks: [FREIGHT_QUOTE, CHA, { label: "Kochi to Jebel Ali", href: "/logistics/kochi-to-jebel-ali-port-to-port" }],
  },
  {
    slug: "export-documents-checklist-india",
    title: "Export Documents Checklist for India: What You Need Before the Container Leaves",
    metaDescription:
      "The complete checklist of export documents required for a sea freight shipment from India — invoice, packing list, shipping bill, bill of lading, certificate of origin, and product-specific certificates.",
    category: "Logistics",
    date: "2026-11-06",
    readTime: "6 min read",
    keywords: ["export documents India", "India export checklist", "documents for export from India", "shipping documents India", "export paperwork India"],
    image: IMAGES.truck,
    excerpt: "Missing one document can hold a container at the port or delay customs at destination. This is the checklist.",
    answer:
      "Every export shipment from India needs at minimum a commercial invoice, packing list, shipping bill (the export customs declaration filed by a CHA), and a bill of lading issued by the carrier. On top of this core set, most shipments also need a certificate of origin and product-specific certificates — a phytosanitary certificate for agro commodities, a Spices Board certificate for spices, a health certificate for food, or a fumigation certificate if the cargo or packing requires it.",
    sections: [
      {
        heading: "Core documents — every shipment",
        body: [],
        bullets: [
          "Commercial invoice (with HS code, IEC, buyer and seller details, value)",
          "Packing list (number of packages, gross and net weights, dimensions)",
          "Shipping bill (e-filed by your CHA with Indian Customs)",
          "Let export order (LEO) — granted by Customs after the shipping bill is approved",
          "Bill of lading (issued by the carrier or freight forwarder after loading)",
        ],
      },
      {
        heading: "Certificate of origin — when and which type?",
        body: [
          "A non-preferential certificate of origin (issued by the Chamber of Commerce or DGFT) states where the goods were produced and is required by many buyers and destination customs. A preferential certificate of origin (such as the Form I under India–UAE CEPA) allows duty reduction at the destination under a trade agreement and must be applied for separately with DGFT.",
        ],
      },
      {
        heading: "Product-specific certificates",
        body: [],
        bullets: [
          "Phytosanitary certificate (plant quarantine) — for agro commodities, spices, coffee, onions",
          "Spices Board Certificate of Inspection — for spice exports",
          "FSSAI food safety certificate or GMP certificate — required by some food-importing countries",
          "Fumigation certificate — for wooden packing materials and some agro cargo",
          "Quality / pre-shipment inspection report — if specified in the buyer's contract",
        ],
      },
      {
        heading: "What if a document is wrong?",
        body: [
          "Errors on the invoice (wrong HS code, value mismatch, typo on buyer address) cause customs examination delays at the origin and destination. Errors on the bill of lading (wrong consignee, incorrect cargo description) require costly amendments. The best time to check is before filing — your CHA should validate every document against the invoice and packing list.",
        ],
      },
    ],
    faqs: [
      { question: "Who files the shipping bill for export from India?", answer: "The CHA (customs house agent, now called customs broker) files the shipping bill electronically on behalf of the exporter. Versa Logistics provides CHA services from Kochi." },
      { question: "Is a certificate of origin always required?", answer: "Not always, but most buyers ask for one and some destination customs require it. For shipments to countries with a trade agreement with India (UAE, Australia, Japan, ASEAN), a preferential certificate of origin can save the buyer duty — ask us when booking." },
    ],
    relatedLinks: [CHA, FREIGHT_QUOTE, { label: "What is a CHA?", href: "/blog/what-is-a-cha-customs-broker-export" }],
  },

  /* -------------------------------------------------------------- Digital */
  {
    slug: "whatsapp-business-api-for-b2b-exporters",
    title: "WhatsApp Business API for B2B Exporters: How It Helps You Follow Up Faster and Lose Fewer Leads",
    metaDescription:
      "How B2B exporters and trading companies use the WhatsApp Business API — instant enquiry replies, automated quotation follow-ups, and AI agents for lead qualification — to convert more inbound buyer interest.",
    category: "Digital",
    date: "2026-11-05",
    readTime: "5 min read",
    keywords: ["WhatsApp Business API exporters", "B2B WhatsApp automation", "WhatsApp lead follow-up India", "export business WhatsApp", "AEO for exporters"],
    plate: { title: "WhatsApp → Faster Deals", note: "Automating buyer follow-up for exporters" },
    excerpt: "An international buyer messages you on WhatsApp at midnight. Without automation, they wait until morning — and message your competitor instead.",
    answer:
      "The WhatsApp Business API lets export companies reply instantly to buyer enquiries at any hour, send automated quotation follow-ups, and qualify leads with an AI agent before the sales team picks up the conversation. For an exporter, the clearest win is speed — a buyer who messages at midnight in the UAE time zone gets a confirmation and a preliminary quotation outline instantly, without waiting for the Kochi office to open.",
    sections: [
      {
        heading: "What can a WhatsApp Business API setup do for an exporter?",
        body: [],
        bullets: [
          "Instant reply to inbound enquiries 24/7 — 'We have received your enquiry and will send a quotation within X hours'",
          "Collect product, quantity, destination port and Incoterm details automatically before a human picks it up",
          "Send quotation follow-ups at set intervals if a buyer goes quiet",
          "Route the qualified enquiry to the right salesperson with full context",
          "Confirm order milestones — shipment booked, container loaded, ETA at destination",
        ],
      },
      {
        heading: "Is this different from a regular WhatsApp Business account?",
        body: [
          "Yes. The regular WhatsApp Business app is a manual tool for one-to-one conversations. The API is a programmatic interface that lets you connect WhatsApp to a CRM, an automation workflow, or an AI agent — so it responds to hundreds of buyers simultaneously without a team member reading every message.",
        ],
      },
      {
        heading: "How long does setup take?",
        body: [
          "A focused enquiry-response and follow-up automation typically takes two to four weeks, including Meta verification, template approval, integration with your CRM or enquiry system, and testing.",
        ],
      },
    ],
    faqs: [
      { question: "Does the WhatsApp API work for buyers in the UAE, UK and USA?", answer: "Yes. WhatsApp is widely used for B2B communication in the UAE, and increasingly in the UK and other markets. The API works globally." },
    ],
    relatedLinks: [DIGITAL, { label: "How AI assistants find suppliers", href: "/blog/seo-for-exporters-how-international-buyers-find-suppliers" }],
  },
  {
    slug: "erp-for-export-business-india",
    title: "ERP for an Export Business in India: What It Should Track and When You Actually Need One",
    metaDescription:
      "What an ERP system built for an Indian export business does — trade orders, samples, certificates, freight, invoicing and compliance — and the honest signal that tells you when you need one.",
    category: "Digital",
    date: "2026-11-07",
    readTime: "6 min read",
    keywords: ["ERP for export business India", "export management software India", "custom ERP trading company", "trade order management system", "ERP for spice exporter"],
    plate: { title: "Trade Order → ERP", note: "When an exporter needs a business system" },
    excerpt: "Most export companies grow past spreadsheets well before they realise it. Here is what an ERP built for a trading business actually does.",
    answer:
      "An ERP for an Indian export business should track the complete lifecycle of a trade order — from buyer enquiry and sample approval through price negotiation, contract, pre-shipment inspection, customs clearance, freight, and invoice settlement. For a trading and logistics company like Versa Growth Ventures, it should also connect the trading side (Versa International Traders) with the freight and CHA side (Versa Logistics) so that one order record drives both sets of tasks.",
    sections: [
      {
        heading: "What should an export ERP track?",
        body: [],
        bullets: [
          "Buyer and supplier master records with product history",
          "Trade orders with product, grade, specification, quantity, price, Incoterm and shipment date",
          "Sample tracking — requested, sent, approved",
          "Certificates due — phytosanitary, origin, Spices Board, fumigation",
          "Freight bookings and container reference linked to the order",
          "CHA clearance status and shipping bill number",
          "Invoice and payment milestones (advance received, balance due, settled)",
        ],
      },
      {
        heading: "When does an export business actually need an ERP?",
        body: [
          "The signal is when two or more of these are true: your team is maintaining parallel spreadsheets that get out of sync, you regularly miss document deadlines because nobody tracked who was responsible, your finance team reconciles invoices manually against shipping documents at month-end, or you cannot quickly answer a buyer who asks the current status of their order.",
        ],
      },
      {
        heading: "Off-the-shelf or custom?",
        body: [
          "Generic ERP platforms (Odoo, Zoho) can handle basic order-to-invoice flow. For the certificate-tracking, inspection coordination and freight-CHA linkage specific to an agro export business, a customised platform or a lightweight custom build on top of an open-source base is usually more practical than forcing a generic platform to track phytosanitary certificate status.",
        ],
      },
    ],
    faqs: [
      { question: "Does Versa Digital & IT Solutions build ERP for export companies?", answer: "Yes. The IT Solutions team has delivered 20+ ERP and custom agent builds. An export-business ERP is a specific request we can scope and build from a process audit." },
    ],
    relatedLinks: [DIGITAL, { label: "How to write product pages AI assistants quote", href: "/blog/how-to-write-product-pages-ai-assistants-quote" }],
  },

  /* ---------------------------------------------------------------- Group */
  {
    slug: "versa-growth-ventures-november-2026-update",
    title: "November 2026: What Is Moving at Versa Growth Ventures",
    metaDescription:
      "A group update from Versa Growth Ventures — active trades, ongoing ERP and AI builds, and the expanded sourcing offer at Versa International Traders.",
    category: "Group",
    date: "2026-11-01",
    readTime: "3 min read",
    keywords: ["Versa Growth Ventures", "Versa International Traders", "Versa Logistics news", "Versa Digital IT Solutions update"],
    image: IMAGES.kochiSunset,
    excerpt: "A brief update on what is live and active across the group this month.",
    answer:
      "In November 2026, Versa International Traders is active on coffee, onion, spice, coconut and snack sourcing for international buyers, with logistics and CHA provided by Versa Logistics. Versa Digital & IT Solutions has three ERP builds, one CRM and three AI automation projects in delivery. New destination-specific guides for black pepper, cardamom and agro sourcing have been published on Insights.",
    sections: [
      {
        heading: "Versa International Traders",
        body: [
          "The team is sourcing for international buyers across a wider product range — coffee beans, onions (Nashik red, big onion), black pepper, green cardamom, desiccated coconut, banana chips and other Indian snacks. If you have a sourcing requirement from India, send a product and quantity to get a quotation.",
        ],
      },
      {
        heading: "Versa Logistics",
        body: [
          "Sea freight quotes from Kochi to Jebel Ali, Khorfakkan, Colombo and other Gulf and South Asian ports. CHA — export customs clearance — available from Kochi. A new guide on export documents has been published on Insights this month.",
        ],
      },
      {
        heading: "Versa Digital & IT Solutions",
        body: [
          "Three custom ERP systems, one CRM build and three AI automation projects in active delivery. New guides on WhatsApp Business API for exporters and ERP for trading companies published this month.",
        ],
      },
    ],
    faqs: [
      { question: "How do I contact Versa Growth Ventures?", answer: "Call +91 97464 33133, +91 97467 33133 or +91 79072 15816, or email info@versagrowthventures.in. WhatsApp: +91 79072 15816." },
    ],
    relatedLinks: [SOURCE, FREIGHT_QUOTE, DIGITAL],
  },
]
