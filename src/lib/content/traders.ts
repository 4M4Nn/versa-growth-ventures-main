import type { DivisionPage, FAQ } from "@/types"
import { IMAGES } from "./site"
import { TRADERS_EXTRA_PAGES, TRADERS_EXTRA_SECTIONS } from "./traders-extra"

import { COFFEE_TRADE, COFFEE_TRADING_FAQS, TRADERS_COFFEE_PAGES } from "./traders-coffee"
import { INTL_COFFEE_FAQS, TRADERS_COFFEE_INTL_PAGES } from "./traders-coffee-intl"
import { TRADERS_SOURCING_PAGES } from "./traders-sourcing"
import { TRADERS_ROBUSTA_2026_PAGES } from "./traders-robusta-2026"

export const TRADERS_HUB = {
  metaTitle: "Indian Green Coffee Beans & Cardamom Exporter — EUDR Compliant, Rainforest Alliance | Versa International Traders",
  metaDescription:
    "Versa International Traders exports Indian unroasted green coffee beans and green cardamom to UK, USA, UAE, Middle East and Europe. EUDR compliant documentation, Rainforest Alliance certified lots available. Arabica and Robusta, MOQ 1 FCL. Samples, quality reports and full export certification on every shipment.",
  keywords: [
    "Versa International Traders",
    "Indian green coffee beans exporter",
    "unroasted coffee beans supplier",
    "green coffee beans UK",
    "green coffee beans USA",
    "green coffee beans Europe",
    "EUDR compliant coffee India",
    "Rainforest Alliance coffee India",
    "Indian Arabica green coffee",
    "Indian Robusta green coffee",
    "cardamom exporter Kerala",
    "green cardamom bulk supplier",
    "coffee bean trader Kochi",
    "coffee beans to UAE",
    "coffee beans Middle East",
    "bulk coffee beans India",
    "MOQ 1 FCL coffee",
    "Indian coffee exporter",
    "Malabar coffee exporter",
    "black pepper exporter India",
  ],
  eyebrow: "Venture — Versa International Traders",
  h1: "Versa International Traders: Indian green coffee beans and cardamom exported to the UK, USA, UAE, Middle East and Europe — EUDR compliant, Rainforest Alliance certified",
  lede:
    "Two commodities, done properly. We export Indian unroasted green coffee beans — Arabica and Robusta — and green cardamom to buyers across the UK, USA, UAE, Middle East and Europe, with EUDR compliance documentation, Rainforest Alliance certified lots on request, samples before commitment, quality reports and full export certification on every order. MOQ is 1 FCL.",
  answer:
    "Versa International Traders is the international trading venture of Versa Growth Ventures, based in Kochi, Kerala. It exports two primary commodities from India: unroasted green coffee beans (Arabica and Robusta — Plantation, Arabica Cherry, Robusta Parchment, Robusta Cherry and Monsooned Malabar) and green cardamom (small cardamom, all size grades) to buyers in the UK, USA, UAE, Saudi Arabia, the wider Middle East and Europe. Coffee lots are available EUDR compliant — with GPS geolocation data, satellite forest-cover evidence and Rainforest Alliance transaction certificates — meeting the documentation requirement for EU and UK buyers. Minimum order quantity is 1 FCL. Versa International Traders recently traded 160 MT of coffee beans to the UAE, and its sister venture Versa Logistics has shipped 17 × 40ft containers of coffee beans into Jebel Ali and Khorfakkan. Every order is supported by a quality analysis report, phytosanitary certificate and certificate of origin.",
  products: [
    {
      name: "Green Coffee Beans",
      tag: "Arabica & Robusta · EUDR compliant · RA certified",
      body: "Unroasted Indian Arabica and Robusta — Plantation, Cherry and Monsooned Malabar — with EUDR-compliant documentation and Rainforest Alliance certification available. MOQ 1 FCL.",
      href: "/traders/green-coffee-beans",
      image: IMAGES.coffeeBeans,
    },
    {
      name: "Green Cardamom",
      tag: "Small cardamom · All variants · Size-graded",
      body: "Bold, aromatic small cardamom from Kerala&apos;s Idukki Cardamom Hills — 8mm+, 7–8mm and 6–7mm grades, AGEB, AGB and AGS — for the Gulf, UK and European markets.",
      href: "/traders/cardamom",
      image: IMAGES.cardamomPods,
    },
  ],
  copy: {
    heroCta: "Get a quotation",
    heroSecondary: "EUDR & certifications",
    productsEyebrow: "Products",
    productsH2: "What does Versa International Traders export from India?",
    deskEyebrow: "Trading desks",
    deskH2: "Coffee bean trading and cardamom — our two primary export commodities",
    promisesEyebrow: "The Versa International Traders standard",
    promisesH2: "What comes with every Versa International Traders coffee and cardamom order?",
    processEyebrow: "How buying works",
    processH2: "How does buying coffee beans or cardamom from Versa International Traders work?",
    freightEyebrow: "Freight included, if you want it",
    freightH2: "Buy the product and the shipping from one group",
    freightBody:
      "Our sister venture Versa Logistics has delivered 15 × 40ft containers of coffee beans into Jebel Ali and 2 × 40ft into Khorfakkan, and ships cardamom and spices worldwide. Buy FOB and use your own forwarder, or buy CFR/CIF and let us deliver to your port.",
    freightCta: "About Versa Logistics",
    faqEyebrow: "FAQ",
    faqH2: "Versa International Traders FAQs: coffee bean trading, EUDR, Rainforest Alliance and cardamom",
    marketsEyebrow: "Where we sell",
    marketsH2: "Markets we supply with Indian coffee beans and cardamom",
    ctaTitle: "Start with a sample.",
    ctaBody: "Tell us the grade, quantity and destination port. We send a sample from the lot and a price quote backed by our quality report. MOQ is 1 FCL.",
    ctaSecondary: { label: "EUDR compliant coffee", href: "/traders/eudr-compliant-coffee-beans" },
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
    question: "What does Versa International Traders export?",
    answer:
      "Versa International Traders exports two primary commodities from India: unroasted green coffee beans (Arabica and Robusta — Plantation, Arabica Cherry, Robusta Parchment, Robusta Cherry and Monsooned Malabar) and green cardamom (small cardamom, all size grades — AGEB, AGB and AGS). Coffee lots are available with EUDR-compliant documentation and Rainforest Alliance certification on request. MOQ 1 FCL.",
  },
  COFFEE_TRADING_FAQS[0],
  INTL_COFFEE_FAQS[0],
  INTL_COFFEE_FAQS[1],
  INTL_COFFEE_FAQS[2],
  INTL_COFFEE_FAQS[3],
  INTL_COFFEE_FAQS[4],
  INTL_COFFEE_FAQS[5],
  INTL_COFFEE_FAQS[6],
  {
    question: "Do you provide samples before a bulk order?",
    answer:
      "Yes. Samples are provided to buyers before they commit to an order, drawn from the lot being offered so what you test is what you receive. Share your address and required grade, and we will arrange dispatch.",
  },
  {
    question: "What quality documents come with coffee and cardamom orders?",
    answer:
      "Each order is supported by a quality analysis report covering the agreed parameters, plus export documents including a phytosanitary certificate, certificate of origin, commercial invoice, packing list and bill of lading. For EU-bound coffee, EUDR documentation — geolocation data and forest-cover evidence — is included. Rainforest Alliance transaction certificates, fumigation certificates, independent laboratory reports and third-party inspection can be arranged on request.",
  },
  {
    question: "Is Versa International Traders a certified exporter?",
    answer:
      "Yes. Versa International Traders holds the registrations and certifications required to export coffee and spices from India, including APEDA registration for coffee export. Rainforest Alliance certified lots are available with valid RA transaction certificates, and EUDR documentation is prepared for every EU-bound shipment.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "Versa International Traders exports to the UK, USA, UAE, Saudi Arabia, Oman, Bahrain, Kuwait, Qatar and other GCC markets, and to European buyers in the Netherlands, Germany, Belgium, Italy, France and elsewhere. The group has shipped 17 × 40ft containers of coffee beans to Jebel Ali and Khorfakkan (UAE), and recently traded 160 MT of coffee beans to the UAE.",
  },
  {
    question: "What Incoterms do you offer?",
    answer:
      "We quote FOB Indian port as standard, and CFR or CIF to your destination port when you would like Versa Logistics to arrange the freight. CIF to Felixstowe or Tilbury (UK), Rotterdam or Hamburg (Europe), and Jebel Ali (UAE) are the most requested delivery terms.",
  },
  {
    question: "How do I request a price for green coffee or cardamom?",
    answer:
      "Tell us the product, grade, quantity, packing, destination port and preferred Incoterm by phone (+91 97464 33133, +91 97467 33133, +91 79072 15816), WhatsApp (+91 79072 15816) or the contact form at versagrowthventures.in. Prices follow the market, so quotes are valid for a stated, short period.",
  },
]

const TRADERS_CORE_PAGES: DivisionPage[] = [
  {
    slug: "green-coffee-beans",
    division: "traders",
    navLabel: "Green Coffee Beans",
    h1: "Unroasted green coffee beans from India: Arabica and Robusta, export quality, in bulk",
    metaTitle: "Green Coffee Beans Exporter India — Unroasted Arabica & Robusta in Bulk | Versa International Traders",
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
    eyebrow: "Versa International Traders — Green Coffee",
    lede:
      "India grows some of the world's most consistent shade-grown coffee. We source it, grade it and ship it green — ready for your roaster.",
    image: IMAGES.coffeeSack,
    summary:
      "Versa International Traders supplies export-quality unroasted green coffee beans from India — Arabica and Robusta, washed (plantation/parchment) and natural (cherry) — in bulk, with samples provided and a quality report and export certification on every order.",
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
      { label: "MOQ", value: "1 FCL (≈ 19.2 MT in a 20ft container)" },
      { label: "EUDR", value: "Compliant documentation provided for EU-bound lots" },
      { label: "Certification", value: "Rainforest Alliance certified lots available" },
      { label: "Recent trade", value: "160 MT of coffee beans to the UAE" },
    ],
    topic: "green coffee beans",
    topicStats: [
      { value: "160 MT", label: "Coffee beans recently traded to the UAE" },
      { value: "19.2 t", label: "Green coffee per 20ft container" },
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
        heading: "Who buys green coffee beans from Versa International Traders?",
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
          "Yes — it is exactly what our group has been doing. Versa International Traders recently traded 160 MT of coffee beans to the UAE, and our sister venture Versa Logistics has shipped 15 × 40ft containers of coffee beans to Jebel Ali and 2 × 40ft containers to Khorfakkan. Buy on FOB and use your own forwarder, or buy CFR/CIF and let us handle the freight.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you sell roasted coffee?",
        answer: "No. Versa International Traders supplies unroasted green coffee beans only, for roasters and importers who roast to their own profile.",
      },
      {
        question: "What is the minimum order for green coffee?",
        answer: "The minimum order quantity is 1 FCL — one full container load. A 20ft container carries approximately 19.2 metric tonnes (320 × 60 kg bags) of green coffee. Trial lots below one container are available for new buyers evaluating a grade before committing to full container volumes.",
      },
      {
        question: "Is Indian green coffee EUDR compliant?",
        answer: "Yes. Indian coffee — grown in Karnataka, Kerala and Tamil Nadu — qualifies as standard-risk under the EU Deforestation Regulation (EUDR). Versa International Traders provides the GPS geolocation data, satellite forest-cover evidence and Rainforest Alliance transaction certificate (for certified lots) needed to support an EU importer&apos;s TRACES due-diligence statement.",
      },
      {
        question: "Can I get a green coffee sample?",
        answer: "Yes. Samples are provided before orders, drawn from the lot we are offering. Tell us the grade, required certification (RA or non-RA) and your delivery address.",
      },
      {
        question: "How long does green coffee keep?",
        answer: "Stored cool and dry in jute with a hermetic liner, green coffee generally holds its quality for many months. Roast it within the period your quality team recommends for your blends.",
      },
    ],
    related: ["eudr-compliant-coffee-beans", "rainforest-alliance-coffee-india", "green-coffee-beans-uk"],
  },
  {
    slug: "cardamom",
    division: "traders",
    navLabel: "Green Cardamom",
    h1: "Green cardamom exporter from Kerala: bold, aromatic small cardamom in bulk",
    metaTitle: "Cardamom Exporter India — Green Cardamom All Variants, Bulk Supply to UK, UAE, Europe | Versa International Traders",
    metaDescription:
      "Export-quality green cardamom from Kerala's Idukki Cardamom Hills — all variants, 8mm+, 7–8mm and 6–7mm grades. Bulk supply to UK, UAE, Saudi Arabia, Middle East and Europe. Samples and certification. Versa International Traders, Kochi.",
    keywords: [
      "cardamom exporter India",
      "green cardamom supplier Kerala",
      "8mm cardamom bulk",
      "Idukki cardamom exporter",
      "small cardamom wholesale",
      "cardamom export to UAE",
      "cardamom exporter UK",
      "green cardamom Europe",
      "Alleppey green cardamom",
      "cardamom all variants India",
    ],
    eyebrow: "Versa International Traders — Green Cardamom",
    lede:
      "The Queen of Spices grows on the hills above Kochi. We select it by size, colour and aroma, and deliver it in bulk to the markets that prize it most.",
    image: IMAGES.cardamomPods,
    summary:
      "Versa International Traders exports green (small) cardamom from Kerala's Idukki Cardamom Hills in bulk, graded by pod size (8mm+, 7–8mm, 6–7mm), colour and litre weight, with samples and certification.",
    intro: [
      "Small green cardamom (Elettaria cardamomum) from Kerala is valued for its deep green colour, bold pods and high essential-oil content. The Gulf is one of the world's largest cardamom markets — used in Arabic coffee, sweets, rice dishes and spice blends.",
      "We source from growing and auction centres in the Idukki region and grade every lot before it is offered.",
    ],
    specs: [
      { label: "Type", value: "Small green cardamom (Elettaria cardamomum)" },
      { label: "Origin", value: "Idukki, Kerala" },
      { label: "Variants", value: "All variants available — size-graded and trade-graded" },
      { label: "Size grades", value: "8mm+, 7–8mm, 6–7mm" },
      { label: "Trade grades", value: "AGEB, AGB, AGS — or buyer specification" },
      { label: "Markets", value: "UAE, Saudi Arabia, UK, Europe, USA" },
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
    related: ["green-coffee-beans", "quality-certification", "samples-and-bulk-orders"],
  },
  {
    slug: "quality-certification",
    division: "traders",
    navLabel: "Quality & Certification",
    h1: "Quality documents and export certification for coffee and spices from India",
    metaTitle: "Quality Documents & Export Certification — Coffee & Spices | Versa International Traders",
    metaDescription:
      "Every Versa International Traders shipment of green coffee beans and cardamom includes a quality analysis report, phytosanitary certificate and certificate of origin. Lab testing and inspection on request.",
    keywords: [
      "spice export certification India",
      "phytosanitary certificate coffee",
      "certificate of origin spices",
      "spices quality analysis report",
      "export documents coffee India",
      "certified spice exporter",
    ],
    eyebrow: "Versa International Traders — Quality & Certification",
    lede:
      "A good sample earns a first order. Correct documents earn the second. We treat both with the same seriousness.",
    image: IMAGES.cardamomBowl,
    summary:
      "Versa International Traders supplies quality documents and proper export certification with every order of green coffee beans and cardamom, including a quality analysis report, phytosanitary certificate and certificate of origin, with laboratory testing and third-party inspection on request.",
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
        heading: "Which documents come with every Versa International Traders shipment?",
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
        heading: "Is Versa International Traders properly registered to export?",
        body: [
          "Yes. Versa International Traders holds the registrations and certification required to export coffee and spices from India. Copies of relevant registrations are shared with buyers during onboarding.",
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
    h1: "Request samples and order coffee and spices in bulk from Versa International Traders",
    metaTitle: "Coffee & Spice Samples, Bulk Orders and Pricing | Versa International Traders",
    metaDescription:
      "Request samples of green coffee beans and cardamom, then order in bulk — trial lots to multiple containers. How samples, pricing, payment and shipping work at Versa International Traders.",
    keywords: [
      "coffee bean samples",
      "spice samples for importers",
      "bulk cardamom order",
      "bulk coffee FCL order",
      "green coffee bulk price",
      "spice supplier samples India",
    ],
    eyebrow: "Versa International Traders — Samples & Bulk Orders",
    lede:
      "Test before you trust. Our buying process starts with a sample from the actual lot, and scales to as many containers as your market can take.",
    image: IMAGES.coffeeBeans,
    summary:
      "Versa International Traders provides samples of green coffee beans and cardamom before orders, and supplies in bulk — from trial lots to multiple full containers — with FOB, CFR and CIF pricing.",
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


export const TRADING_DESK = [
  {
    kicker: "Desk 01 — Coffee bean trading",
    title: `Coffee bean trading: ${COFFEE_TRADE.volume} recently traded to the ${COFFEE_TRADE.destination}`,
    body: "Unroasted Arabica and Robusta from India's coffee country, graded to contract and sampled first — traded to roasters and importers in the UAE and worldwide, FOB, CFR or CIF.",
    image: IMAGES.coffeeSack,
    stats: [
      { value: COFFEE_TRADE.volume, label: "Coffee beans recently traded to the UAE" },
      { value: "60 kg", label: "Standard export bag" },
    ],
    links: [
      { label: "Coffee bean trading", href: "/traders/coffee-bean-trading" },
      { label: "Coffee beans for the UAE", href: "/traders/coffee-beans-supplier-uae-dubai" },
      { label: "Green coffee grades", href: "/traders/green-coffee-beans" },
    ],
    cta: { label: "Get a coffee price", href: "/contact?enquiry=coffee" },
  },
]

export const TRADERS_PAGES: DivisionPage[] = [
  ...TRADERS_COFFEE_PAGES,
  ...TRADERS_COFFEE_INTL_PAGES,
  ...TRADERS_ROBUSTA_2026_PAGES,
  ...TRADERS_SOURCING_PAGES,
  ...TRADERS_CORE_PAGES.map((p) => (TRADERS_EXTRA_SECTIONS[p.slug] ? { ...p, sections: [...p.sections, TRADERS_EXTRA_SECTIONS[p.slug]] } : p)),
  ...TRADERS_EXTRA_PAGES,
]
