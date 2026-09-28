import type { DivisionPage, FAQ } from "@/types"
import { IMAGES } from "./site"

export const TRADERS_HUB = {
  metaTitle: "Versa Traders — Green Coffee Beans, Cardamom & Black Pepper Exporter, India",
  metaDescription:
    "Versa Traders is an Indian trader and exporter of export-quality unroasted green coffee beans, green cardamom and black pepper. Bulk quantities, samples on request, full quality documents and certification.",
  keywords: [
    "Versa Traders",
    "green coffee bean exporter India",
    "unroasted coffee beans supplier",
    "cardamom exporter Kerala",
    "black pepper exporter India",
    "bulk spices supplier India",
    "export quality spices",
    "spice trader Kochi",
    "coffee bean trader",
    "Malabar pepper exporter",
  ],
  eyebrow: "Venture 02 — Versa Traders",
  h1: "Versa Traders: export-quality green coffee beans, cardamom and black pepper, traded globally",
  lede:
    "High-quality unroasted coffee and whole spices from India, supplied in bulk to importers, roasters, wholesalers and processors worldwide — with samples first, quality documents always and certification on every shipment.",
  answer:
    "Versa Traders is the commodity trading venture of Versa Growth Ventures in Kochi, Kerala. It trades and exports unroasted green coffee beans, green cardamom and black pepper globally in bulk quantities. Samples are provided before orders, and every shipment is supported by quality documents and export certification such as a quality analysis report, phytosanitary certificate and certificate of origin.",
  products: [
    {
      name: "Green Coffee Beans",
      tag: "Unroasted · Arabica & Robusta",
      body: "Washed and natural Arabica and Robusta from India's coffee regions, graded and bagged for roasters and importers.",
      href: "/traders/green-coffee-beans",
      image: IMAGES.coffeeBeans,
    },
    {
      name: "Green Cardamom",
      tag: "Small cardamom · Size-graded",
      body: "Bold, green, aromatic small cardamom from Kerala's Cardamom Hills, graded by size, colour and litre weight.",
      href: "/traders/cardamom",
      image: IMAGES.cardamomPods,
    },
    {
      name: "Black Pepper",
      tag: "Malabar · Tellicherry grades",
      body: "Whole black pepper from the Western Ghats, from MG1 to bold Tellicherry grades, cleaned and graded for export.",
      href: "/traders/black-pepper",
      image: IMAGES.pepperWhole,
    },
  ],
  copy: {
    heroCta: "Request samples & price",
    heroSecondary: "Quality & certification",
    productsEyebrow: "Products",
    productsH2: "Export-quality coffee and spices we trade",
    promisesEyebrow: "The Versa Traders standard",
    promisesH2: "What comes with every Versa Traders order?",
    processEyebrow: "How buying works",
    processH2: "From sample to container in five steps",
    freightEyebrow: "Freight included, if you want it",
    freightH2: "Buy the product and the shipping from one group",
    freightBody:
      "Our sister venture Versa Logistics has delivered 15 × 40ft containers of coffee beans into Jebel Ali and 2 × 40ft into Khorfakkan. Buy FOB and use your own forwarder, or buy CFR/CIF and let us deliver to your port.",
    freightCta: "About Versa Logistics",
    faqEyebrow: "FAQ",
    faqH2: "Versa Traders FAQs",
    ctaTitle: "Start with a sample.",
    ctaBody: "Tell us the product, grade, quantity and destination port. We send a sample from the lot and a quote backed by our quality report.",
    ctaSecondary: { label: "Green coffee beans", href: "/traders/green-coffee-beans" },
  },
  process: [
    { step: "01", title: "Enquiry", body: "Product, grade, quantity, packing, destination port and Incoterm." },
    { step: "02", title: "Sample & quality report", body: "A representative sample from the offered lot, with its quality analysis." },
    { step: "03", title: "Contract", body: "Price, specification, shipment period and payment terms confirmed in writing." },
    { step: "04", title: "Packing & certification", body: "Cleaning, grading, packing, quality check, phytosanitary and origin certificates." },
    { step: "05", title: "Shipment & documents", body: "Stuffing, sailing and document release — with Versa Logistics or your forwarder." },
  ],
  promises: [
    { title: "Export quality", body: "Every lot is cleaned, graded and checked against the agreed specification before it is packed." },
    { title: "Samples provided", body: "Representative samples from the lot you will receive, sent to you before you commit." },
    { title: "Quality documents", body: "Quality analysis report with every order; independent lab testing and inspection on request." },
    { title: "Proper certification", body: "Phytosanitary certificate, certificate of origin and fumigation certificate as your market requires." },
    { title: "Bulk availability", body: "From trial lots to multiple full containers, with scheduled shipments for repeat buyers." },
    { title: "Freight in-house", body: "Versa Logistics can ship your order to Jebel Ali, Khorfakkan or any world port." },
  ],
}

export const TRADERS_FAQS: FAQ[] = [
  {
    question: "What products does Versa Traders export?",
    answer:
      "Versa Traders exports three core commodities: unroasted green coffee beans (Arabica and Robusta), green cardamom (small cardamom) and black pepper. All are export quality and available in bulk quantities.",
  },
  {
    question: "Do you provide samples before a bulk order?",
    answer:
      "Yes. Samples are provided to buyers before they commit to an order, drawn from the lot being offered so what you test is what you receive. Share your address and required grade, and we will arrange dispatch.",
  },
  {
    question: "What quality documents come with your coffee and spices?",
    answer:
      "Each order is supported by a quality analysis report covering the agreed parameters, plus export documents including a phytosanitary certificate, certificate of origin, commercial invoice, packing list and bill of lading. Fumigation certificates, independent laboratory reports and third-party inspection can be arranged on request.",
  },
  {
    question: "Is Versa Traders a certified exporter?",
    answer:
      "Yes. Versa Traders holds the registrations and certification required to export coffee and spices from India, and each shipment carries the certificates the destination market requires.",
  },
  {
    question: "What quantities can I order?",
    answer:
      "Bulk quantity is available. Most buyers order in full container loads — 20ft or 40ft — and we also supply smaller trial lots for new buyers. Scheduled monthly or quarterly shipments can be arranged for regular buyers.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "Versa Traders sells globally. The UAE is a key market — our group has shipped 17 × 40ft containers of coffee beans to Jebel Ali and Khorfakkan — and we supply buyers across the Middle East and other regions.",
  },
  {
    question: "What Incoterms do you offer?",
    answer:
      "We quote FOB Indian port as standard, and CFR or CIF to your destination port when you would like Versa Logistics to arrange the freight.",
  },
  {
    question: "How do I request a price?",
    answer:
      "Tell us the product, grade, quantity, packing, destination port and preferred Incoterm by phone (+91 97464 33133, +91 97467 33133, +91 79072 15816), WhatsApp or the contact form. Prices follow the market, so quotes are valid for a short, stated period.",
  },
]

export const TRADERS_PAGES: DivisionPage[] = [
  {
    slug: "green-coffee-beans",
    division: "traders",
    navLabel: "Green Coffee Beans",
    h1: "Unroasted green coffee beans from India: Arabica and Robusta, export quality, in bulk",
    metaTitle: "Green Coffee Beans Exporter India — Unroasted Arabica & Robusta in Bulk | Versa Traders",
    metaDescription:
      "Buy export-quality unroasted green coffee beans from India in bulk. Arabica and Robusta, washed and natural, graded and bagged. Samples provided, quality report and certification with every order.",
    keywords: [
      "green coffee beans exporter India",
      "unroasted coffee beans bulk",
      "Indian Robusta green coffee",
      "Indian Arabica green coffee",
      "raw coffee beans supplier",
      "green coffee beans wholesale",
      "coffee beans export to UAE",
    ],
    eyebrow: "Versa Traders — Green Coffee",
    lede:
      "India grows some of the world's most consistent shade-grown coffee. We source it, grade it and ship it green — ready for your roaster.",
    image: IMAGES.coffeeSack,
    summary:
      "Versa Traders supplies export-quality unroasted green coffee beans from India — Arabica and Robusta, washed (plantation/parchment) and natural (cherry) — in bulk, with samples provided and a quality report and export certification on every order.",
    intro: [
      "Indian coffee is grown under a canopy of shade trees in Karnataka, Kerala and Tamil Nadu, often alongside pepper and cardamom. The result is a clean, mild cup in Arabica and a full-bodied, low-acid Robusta that roasters around the world use in espresso blends and instant coffee.",
      "We trade green coffee only — unroasted — so the beans reach your roastery with their full shelf life and character intact.",
    ],
    specs: [
      { label: "Varieties", value: "Arabica, Robusta" },
      { label: "Processing", value: "Washed (Plantation / Parchment), Natural (Cherry)" },
      { label: "Common grades", value: "AA, A, AB, PB, C — to buyer specification" },
      { label: "Moisture", value: "Typically 12.5% max, per contract" },
      { label: "Packing", value: "60 kg jute bags; hermetic liners on request" },
      { label: "Load", value: "20ft ≈ 19.2 t (320 × 60 kg); 40ft by arrangement" },
    ],
    sections: [
      {
        heading: "Which green coffee grades do you supply?",
        body: [
          "Indian green coffee is described by species, processing method and bean size. Washed Arabica is traded as Plantation; natural Arabica as Arabica Cherry; washed Robusta as Robusta Parchment; and natural Robusta as Robusta Cherry. Size grades such as AA, A, AB and PB describe screen size and bean shape.",
          "We confirm the exact grade, screen, defect count and moisture limit in the contract, and the sample you approve is drawn from that lot.",
        ],
      },
      {
        heading: "Who buys green coffee beans from Versa Traders?",
        body: ["Our customers include:"],
        bullets: [
          "Coffee roasters building espresso and filter blends",
          "Importers and wholesalers supplying roasters in the GCC and beyond",
          "Instant and soluble coffee manufacturers",
          "Trading houses consolidating origin coffee for re-export",
        ],
      },
      {
        heading: "How is the coffee checked before shipment?",
        body: [
          "Every lot is checked for moisture, screen size, defects and foreign matter against the agreed specification. The results are issued as a quality analysis report. On request we arrange cupping notes, independent laboratory testing and third-party inspection before stuffing.",
        ],
      },
      {
        heading: "Can you ship green coffee to Jebel Ali and Khorfakkan?",
        body: [
          "Yes — it is exactly what our group has been doing. Our sister venture Versa Logistics has shipped 15 × 40ft containers of coffee beans to Jebel Ali and 2 × 40ft containers to Khorfakkan. Buy on FOB and use your own forwarder, or buy CFR/CIF and let us handle the freight.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you sell roasted coffee?",
        answer: "No. Versa Traders supplies unroasted green coffee beans only, for roasters and importers who roast to their own profile.",
      },
      {
        question: "What is the minimum order for green coffee?",
        answer: "Most orders are full container loads. We can also supply smaller trial lots to new buyers so they can evaluate a grade before committing to container volumes.",
      },
      {
        question: "Can I get a green coffee sample?",
        answer: "Yes. Samples are provided before orders, drawn from the lot we are offering. Tell us the grade and your delivery address.",
      },
      {
        question: "How long does green coffee keep?",
        answer: "Stored cool and dry in jute with a hermetic liner, green coffee generally holds its quality for many months. Roast it within the period your quality team recommends for your blends.",
      },
    ],
    related: ["samples-and-bulk-orders", "quality-certification", "black-pepper"],
  },
  {
    slug: "cardamom",
    division: "traders",
    navLabel: "Green Cardamom",
    h1: "Green cardamom exporter from Kerala: bold, aromatic small cardamom in bulk",
    metaTitle: "Cardamom Exporter India — Green Cardamom 8mm, 7mm Bulk Supplier | Versa Traders",
    metaDescription:
      "Export-quality green cardamom from Kerala's Idukki Cardamom Hills. 8mm, 7–8mm and 6–7mm grades, graded by colour and litre weight. Bulk supply, samples and certification. Versa Traders, Kochi.",
    keywords: [
      "cardamom exporter India",
      "green cardamom supplier Kerala",
      "8mm cardamom bulk",
      "Idukki cardamom exporter",
      "small cardamom wholesale",
      "cardamom export to UAE",
      "Alleppey green cardamom",
    ],
    eyebrow: "Versa Traders — Green Cardamom",
    lede:
      "The Queen of Spices grows on the hills above Kochi. We select it by size, colour and aroma, and deliver it in bulk to the markets that prize it most.",
    image: IMAGES.cardamomPods,
    summary:
      "Versa Traders exports green (small) cardamom from Kerala's Idukki Cardamom Hills in bulk, graded by pod size (8mm+, 7–8mm, 6–7mm), colour and litre weight, with samples and certification.",
    intro: [
      "Small green cardamom (Elettaria cardamomum) from Kerala is valued for its deep green colour, bold pods and high essential-oil content. The Gulf is one of the world's largest cardamom markets — used in Arabic coffee, sweets, rice dishes and spice blends.",
      "We source from growing and auction centres in the Idukki region and grade every lot before it is offered.",
    ],
    specs: [
      { label: "Type", value: "Small green cardamom (Elettaria cardamomum)" },
      { label: "Origin", value: "Idukki, Kerala" },
      { label: "Size grades", value: "8mm+, 7–8mm, 6–7mm" },
      { label: "Trade grades", value: "AGEB, AGB, AGS — or buyer specification" },
      { label: "Checked for", value: "Colour, litre weight, moisture, empty & split pods" },
      { label: "Packing", value: "Poly-lined bags or cartons, per buyer" },
    ],
    sections: [
      {
        heading: "What cardamom grades do you supply?",
        body: [
          "Cardamom is graded primarily by pod size, measured in millimetres, and by colour and litre weight — the weight of one litre of pods, a practical measure of how full and mature they are. Bolder, greener pods with a higher litre weight command higher prices.",
        ],
        bullets: [
          "8mm and above — premium bold pods for the Gulf retail market",
          "7–8mm — bold, the most traded export size",
          "6–7mm — for blending, grinding and value markets",
          "Traditional trade grades such as AGEB (Alleppey Green Extra Bold) on request",
        ],
      },
      {
        heading: "Why is Kerala cardamom preferred?",
        body: [
          "The Cardamom Hills of Idukki have the altitude, rainfall and shade canopy the crop needs. Kerala growers have also invested heavily in drying technology that preserves the green colour buyers look for — colour is one of the first things an importer checks.",
        ],
      },
      {
        heading: "How is cardamom quality verified?",
        body: [
          "Each lot is checked for size distribution, colour, litre weight, moisture and the proportion of empty, split or immature pods. The results are documented in a quality report. Pesticide-residue testing and independent inspection can be arranged for markets with specific limits.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is 8mm cardamom?",
        answer: "8mm cardamom means pods that are retained on an 8mm sieve — the boldest, most premium size grade of green cardamom.",
      },
      {
        question: "Do you supply cardamom to the Gulf?",
        answer: "Yes. The UAE and wider GCC are key markets for green cardamom, and our group ships regularly to Jebel Ali and Khorfakkan.",
      },
      {
        question: "Can I order a mix of cardamom grades?",
        answer: "Yes. A single shipment can include several size grades, each packed and labelled separately.",
      },
      {
        question: "How should cardamom be stored?",
        answer: "In a cool, dry and dark place, sealed from air and away from strong odours, so it keeps its colour and aroma.",
      },
    ],
    related: ["black-pepper", "quality-certification", "samples-and-bulk-orders"],
  },
  {
    slug: "black-pepper",
    division: "traders",
    navLabel: "Black Pepper",
    h1: "Black pepper exporter from India: Malabar and Tellicherry grades, bulk supply",
    metaTitle: "Black Pepper Exporter India — Malabar MG1 & Tellicherry TGEB in Bulk | Versa Traders",
    metaDescription:
      "Export-quality whole black pepper from Kerala and the Western Ghats. MG1, 500 and 550 g/L, TGEB and TGSEB grades. Cleaned, graded and certified. Bulk quantities and samples from Versa Traders.",
    keywords: [
      "black pepper exporter India",
      "Malabar black pepper supplier",
      "Tellicherry pepper TGEB",
      "MG1 black pepper bulk",
      "whole black pepper wholesale",
      "black pepper export to UAE",
      "Kerala pepper exporter",
    ],
    eyebrow: "Versa Traders — Black Pepper",
    lede:
      "Kerala's Malabar Coast made pepper the most traded spice in history. We carry that trade forward with graded, cleaned, certified whole black pepper in bulk.",
    image: IMAGES.pepperMacro,
    summary:
      "Versa Traders exports whole black pepper from Kerala and India's Western Ghats in bulk — Malabar grades such as MG1 and density grades of 500–550 g/L, plus bold Tellicherry TGEB and TGSEB — cleaned, graded and certified.",
    intro: [
      "Indian black pepper is known for its pungency and aroma, a result of high piperine and essential-oil content. Malabar pepper and the larger, bolder Tellicherry pepper remain benchmarks in the global spice trade.",
      "We supply whole black pepper to spice processors, grinders, packers and importers, cleaned and graded to the specification in your contract.",
    ],
    specs: [
      { label: "Product", value: "Whole black pepper (Piper nigrum)" },
      { label: "Origin", value: "Kerala & Western Ghats, India" },
      { label: "Grades", value: "MG1, 500 g/L, 550 g/L, TGEB, TGSEB" },
      { label: "Checked for", value: "Bulk density, moisture, light berries, extraneous matter" },
      { label: "Processing", value: "Machine-cleaned; steam sterilised on request" },
      { label: "Packing", value: "Jute or PP bags, per buyer" },
    ],
    sections: [
      {
        heading: "What black pepper grades are available?",
        body: [
          "Black pepper is graded by berry size and bulk density — the weight of one litre of berries. Higher density means more mature, heavier berries with fewer light or hollow ones.",
        ],
        bullets: [
          "MG1 (Malabar Garbled Grade 1) — the classic Malabar export grade",
          "500 g/L and 550 g/L — density grades for processors and grinders",
          "TGEB (Tellicherry Garbled Extra Bold) — large berries of about 4.25 mm and above",
          "TGSEB (Tellicherry Garbled Special Extra Bold) — the boldest berries, about 4.75 mm and above",
        ],
      },
      {
        heading: "How do you ensure clean, export-quality pepper?",
        body: [
          "Pepper is machine-cleaned to remove dust, stones, stems and light berries, then graded to size and density. Each lot is checked for moisture, bulk density, light berries and extraneous matter and documented in a quality report. For markets with microbiological or residue limits, we arrange steam sterilisation and independent laboratory testing.",
        ],
      },
      {
        heading: "Who buys black pepper from Versa Traders?",
        body: [
          "Spice grinders and packers, food manufacturers, seasoning makers, wholesalers and importers — particularly in the GCC, where Indian pepper is a staple of household and restaurant cooking.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between Malabar and Tellicherry pepper?",
        answer: "Both come from India's Malabar Coast. Tellicherry grades are the largest, boldest berries selected from the crop, while Malabar grades such as MG1 describe the standard export size.",
      },
      {
        question: "What does 550 g/L mean for pepper?",
        answer: "It is the bulk density — one litre of the pepper weighs at least 550 grams. Higher density indicates heavier, more mature berries.",
      },
      {
        question: "Do you supply white pepper or ground pepper?",
        answer: "Our core export product is whole black pepper. Contact us for other forms and we will tell you what we can supply to specification.",
      },
    ],
    related: ["cardamom", "quality-certification", "samples-and-bulk-orders"],
  },
  {
    slug: "quality-certification",
    division: "traders",
    navLabel: "Quality & Certification",
    h1: "Quality documents and export certification for coffee and spices from India",
    metaTitle: "Quality Documents & Export Certification — Coffee & Spices | Versa Traders",
    metaDescription:
      "Every Versa Traders shipment of green coffee, cardamom and black pepper includes a quality analysis report, phytosanitary certificate and certificate of origin. Lab testing and inspection on request.",
    keywords: [
      "spice export certification India",
      "phytosanitary certificate coffee",
      "certificate of origin spices",
      "spices quality analysis report",
      "export documents coffee India",
      "certified spice exporter",
    ],
    eyebrow: "Versa Traders — Quality & Certification",
    lede:
      "A good sample earns a first order. Correct documents earn the second. We treat both with the same seriousness.",
    image: IMAGES.cardamomBowl,
    summary:
      "Versa Traders supplies quality documents and proper export certification with every order of green coffee, cardamom and black pepper, including a quality analysis report, phytosanitary certificate and certificate of origin, with laboratory testing and third-party inspection on request.",
    intro: [
      "Importers need to know three things before accepting a container: that the product matches the contract, that it is safe and legal to import, and that the paperwork will clear customs without delay. Our documentation is designed to answer all three.",
    ],
    specs: [
      { label: "With every order", value: "Quality analysis report" },
      { label: "Export certificates", value: "Phytosanitary, Certificate of Origin" },
      { label: "Shipping documents", value: "Invoice, packing list, bill of lading" },
      { label: "On request", value: "Fumigation, lab testing, third-party inspection" },
    ],
    sections: [
      {
        heading: "Which documents come with every Versa Traders shipment?",
        body: ["Every order ships with a complete document set:"],
        bullets: [
          "Quality analysis report for the lot shipped",
          "Phytosanitary certificate issued by the Indian plant quarantine authority",
          "Certificate of origin — including preferential origin where the buyer's market allows",
          "Commercial invoice and detailed packing list",
          "Bill of lading",
          "Weight certificate",
        ],
      },
      {
        heading: "What additional testing can you arrange?",
        body: ["For buyers with specific market or retail requirements, we arrange:"],
        bullets: [
          "Independent laboratory testing — moisture, aflatoxin, pesticide residues, microbiology",
          "Third-party pre-shipment inspection and supervision of stuffing",
          "Fumigation and fumigation certificates",
          "Steam sterilisation for spices where required",
        ],
      },
      {
        heading: "Is Versa Traders properly registered to export?",
        body: [
          "Yes. Versa Traders holds the registrations and certification required to export coffee and spices from India. Copies of relevant registrations are shared with buyers during onboarding.",
        ],
      },
      {
        heading: "Can I claim duty preferences in the UAE?",
        body: [
          "Under the India–UAE Comprehensive Economic Partnership Agreement (CEPA), eligible Indian-origin goods can qualify for preferential tariffs with the correct certificate of origin. We issue the appropriate certificate of origin where the product qualifies, and your customs broker confirms eligibility at import.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will I receive document drafts before shipment?",
        answer: "Yes. Draft invoices, packing lists and bill of lading details are shared for approval before the final documents are issued.",
      },
      {
        question: "Can you use my preferred inspection agency?",
        answer: "Yes. Nominate an inspection agency and we will coordinate access for sampling and supervision of stuffing.",
      },
      {
        question: "Do your certificates cover every container?",
        answer: "Yes. Certificates and reports reference the container numbers and lots they cover, so each container's paperwork matches its contents.",
      },
    ],
    related: ["samples-and-bulk-orders", "green-coffee-beans", "cardamom"],
  },
  {
    slug: "samples-and-bulk-orders",
    division: "traders",
    navLabel: "Samples & Bulk Orders",
    h1: "Request samples and order coffee and spices in bulk from Versa Traders",
    metaTitle: "Coffee & Spice Samples, Bulk Orders and Pricing | Versa Traders",
    metaDescription:
      "Request samples of green coffee beans, cardamom and black pepper, then order in bulk — trial lots to multiple containers. How samples, pricing, payment and shipping work at Versa Traders.",
    keywords: [
      "coffee bean samples",
      "spice samples for importers",
      "bulk cardamom order",
      "bulk black pepper order",
      "green coffee bulk price",
      "spice supplier samples India",
    ],
    eyebrow: "Versa Traders — Samples & Bulk Orders",
    lede:
      "Test before you trust. Our buying process starts with a sample from the actual lot, and scales to as many containers as your market can take.",
    image: IMAGES.coffeeBeans,
    summary:
      "Versa Traders provides samples of green coffee beans, cardamom and black pepper before orders, and supplies in bulk — from trial lots to multiple full containers — with FOB, CFR and CIF pricing.",
    intro: [
      "Buying commodities from a new supplier is a risk. We reduce it the traditional way: by sending you a sample of the actual lot, putting the agreed specification in writing and backing the shipment with documents.",
    ],
    specs: [
      { label: "Samples", value: "Provided before orders" },
      { label: "Order sizes", value: "Trial lots to multiple containers" },
      { label: "Incoterms", value: "FOB, CFR, CIF" },
      { label: "Freight", value: "Via Versa Logistics or your forwarder" },
    ],
    sections: [
      {
        heading: "How do I request a sample?",
        body: [
          "Contact us with the product, grade, intended use and your full delivery address. We confirm the lot, dispatch a representative sample by courier and share the tracking details. Samples come with the lot's quality report so you can compare our results against your own tests.",
        ],
      },
      {
        heading: "How does a bulk order work?",
        body: ["Once you approve the sample, the order runs in six steps:"],
        bullets: [
          "Price confirmation for the approved grade, quantity and Incoterm",
          "Contract or proforma invoice stating the specification and shipment period",
          "Payment terms agreed — for example an advance with the balance against documents, or a letter of credit",
          "Cleaning, grading, packing and quality check of the lot",
          "Stuffing, certification and shipment — via Versa Logistics or your forwarder",
          "Documents released to you or your bank for clearance",
        ],
      },
      {
        heading: "Why do coffee and spice prices change?",
        body: [
          "Coffee and spices are traded commodities. Prices move with harvests, weather, global demand and currency rates, so we quote with a short validity period and confirm the price when the contract is signed. Regular buyers can plan scheduled shipments to smooth out purchasing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are samples free?",
        answer: "Samples are provided to genuine trade buyers. For international courier delivery we agree the courier arrangement case by case.",
      },
      {
        question: "Can I visit or send an agent to inspect the lot?",
        answer: "Yes. Buyers or their appointed inspection agencies are welcome to inspect and sample lots before stuffing.",
      },
      {
        question: "Can you pack under my brand?",
        answer: "Private-label packing of bulk bags or cartons can be discussed for regular volume buyers.",
      },
    ],
    related: ["quality-certification", "green-coffee-beans", "cardamom"],
  },
]
