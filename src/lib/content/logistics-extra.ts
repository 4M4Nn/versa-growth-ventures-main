import type { DivisionPage } from "@/types"
import { IMAGES } from "./site"

export const LOGISTICS_EXTRA_PAGES: DivisionPage[] = [
  {
    slug: "export-documentation",
    division: "logistics",
    navLabel: "Export Documentation",
    h1: "Export documentation services in Kochi: invoices, bills of lading, certificates of origin and phytosanitary certificates",
    metaTitle: "Export Documentation Services Kochi — Bill of Lading, COO, Phytosanitary | Versa Logistics",
    metaDescription:
      "Export documentation support from Versa Logistics, Kochi: commercial invoice and packing list checks, shipping instructions, bill of lading, certificate of origin (incl. India–UAE CEPA), phytosanitary and fumigation certificates.",
    keywords: [
      "export documentation Kochi",
      "export documents India",
      "bill of lading India",
      "certificate of origin Kerala",
      "phytosanitary certificate Kochi",
      "CEPA certificate of origin UAE",
      "shipping documents freight forwarder",
    ],
    eyebrow: "Versa Logistics — Documentation",
    lede:
      "Cargo moves on paper before it moves on water. We prepare, align and chase every document your shipment needs, so it clears on both sides without a hold.",
    image: IMAGES.kochiSunset,
    summary:
      "Versa Logistics provides export documentation support from Kochi — checking commercial invoices and packing lists, filing shipping instructions, drafting bills of lading and coordinating certificates of origin, phytosanitary and fumigation certificates — working with licensed customs brokers for customs filing.",
    intro: [
      "Most delays at a destination port are not caused by ships. They are caused by a missing certificate, a weight that does not match, or a consignee name spelled two different ways. Documentation is where small mistakes become expensive demurrage.",
      "Our documentation desk treats every shipment as a set: each document is checked against the others and against the cargo before anything is submitted.",
    ],
    specs: [
      { label: "Core documents", value: "Invoice, packing list, shipping instructions, B/L" },
      { label: "Certificates", value: "Origin (incl. CEPA), phytosanitary, fumigation" },
      { label: "Customs filing", value: "Via licensed customs brokers" },
      { label: "Drafts", value: "Shared for shipper & buyer approval" },
    ],
    sections: [
      {
        heading: "Which export documents does Versa Logistics handle?",
        body: ["For each shipment we prepare or coordinate:"],
        bullets: [
          "Commercial invoice and packing list review against the booking",
          "Shipping instructions and bill of lading (B/L) drafts",
          "Certificate of origin — non-preferential or preferential (for example under India–UAE CEPA)",
          "Phytosanitary certificate for plant products such as coffee and spices",
          "Fumigation certificate where the buyer or destination requires it",
          "Weight and quality certificates requested by the consignee",
        ],
      },
      {
        heading: "What is a bill of lading and why does it matter?",
        body: [
          "The bill of lading is issued by the shipping line once the container is loaded. It is the receipt for the goods, the contract of carriage and — for an original B/L — the document of title that lets the consignee collect the cargo. Errors on a B/L are costly to amend after issue, which is why we share drafts for approval before it is released.",
        ],
      },
      {
        heading: "What is the difference between an original B/L and a telex release?",
        body: [
          "With original bills, paper documents travel to the consignee (often through banks) and must be surrendered to collect the cargo. A telex release or sea waybill lets the consignee collect without paper originals, which is faster when the buyer and seller trust each other or payment is already settled. We advise which fits your payment terms.",
        ],
      },
      {
        heading: "How does India–UAE CEPA affect documentation?",
        body: [
          "Under the India–UAE Comprehensive Economic Partnership Agreement, eligible Indian-origin goods can enter the UAE at preferential duty — but only with a correctly issued preferential certificate of origin. We coordinate that application so the importer can claim the benefit at clearance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you file the shipping bill with Indian customs?",
        answer: "The shipping bill is filed by a licensed customs broker. We coordinate the broker, the documents and the timeline so you deal with one contact.",
      },
      {
        question: "How early should documents be ready?",
        answer: "Invoice and packing list should be final before stuffing; shipping instructions are due before the carrier's documentation cut-off, usually a day or two before sailing.",
      },
      {
        question: "Can you help if a document was issued with an error?",
        answer: "Yes. We coordinate amendments with the issuing authority or carrier. Amendments are simplest before the vessel sails, which is why we check drafts first.",
      },
      {
        question: "Do you provide documentation-only services?",
        answer: "Yes. Exporters who book freight elsewhere can still use our documentation support.",
      },
    ],
    related: ["freight-forwarding", "sea-freight", "container-stuffing-and-loading"],
  },
  {
    slug: "container-stuffing-and-loading",
    division: "logistics",
    navLabel: "Container Stuffing & Loading",
    h1: "Container stuffing and loading supervision: inspected boxes, careful loading, sealed and photographed",
    metaTitle: "Container Stuffing & Loading Supervision in Kerala | Versa Logistics",
    metaDescription:
      "Container stuffing and loading supervision in Kochi and Kerala. Container inspection, liners and desiccants, correct weight distribution, sealing and loading photographs for coffee, spices and general cargo.",
    keywords: [
      "container stuffing Kochi",
      "container loading supervision",
      "factory stuffing container Kerala",
      "container inspection before loading",
      "coffee container stuffing",
      "container liner desiccant",
    ],
    eyebrow: "Versa Logistics — Stuffing & Loading",
    lede:
      "The way a container is packed decides how the cargo arrives. We supervise the loading so the box that leaves Kerala is the box your buyer expects to open.",
    image: IMAGES.truck,
    summary:
      "Versa Logistics supervises container stuffing and loading in Kochi and across Kerala — inspecting empty containers, fitting liners and desiccants, loading for correct weight distribution, sealing and recording loading photographs and seal numbers for every container.",
    intro: [
      "Container stuffing happens either at the exporter's premises (factory stuffing) or at a container freight station. Either way, the same rules apply: a clean, dry, sound box; cargo that is ready and dry; and loading that keeps the weight balanced and the goods off the walls and floor.",
    ],
    specs: [
      { label: "Where", value: "Your premises or a container freight station" },
      { label: "Checks", value: "Holes, damp, odour, door seals, floor" },
      { label: "Protection", value: "Kraft paper, liners, desiccants, dunnage" },
      { label: "Records", value: "Loading photos, seal number, tally" },
    ],
    sections: [
      {
        heading: "What do you check before a container is loaded?",
        body: ["Every empty container is inspected before a single bag goes in:"],
        bullets: [
          "Light test for holes in the roof and walls",
          "Dry, clean floor without stains or residue",
          "No odour that could taint food cargo",
          "Doors, gaskets and locking bars in working order",
          "CSC plate and container number matching the booking",
        ],
      },
      {
        heading: "How should bagged coffee and spices be loaded?",
        body: [
          "Bags are stacked on kraft paper or dunnage, away from the container walls, with the weight spread evenly along the floor. Liners and desiccant strips reduce the risk of condensation on long, warm voyages. We never load in rain, and we tally bag counts against the packing list as the container fills.",
        ],
      },
      {
        heading: "What records do you share after stuffing?",
        body: [
          "You receive photographs of the empty container, loading in progress, the final load and the sealed doors, together with the container number, seal number and bag count — evidence that protects both shipper and buyer if a claim ever arises.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is factory stuffing?",
        answer: "Factory stuffing means the empty container is brought to the exporter's premises, loaded there and sealed, then trucked to port — reducing handling compared with stuffing at a freight station.",
      },
      {
        question: "Can you supervise stuffing for cargo you are not shipping?",
        answer: "Yes. Buyers and exporters can book loading supervision as a standalone service.",
      },
      {
        question: "What is VGM and who declares it?",
        answer: "VGM is the verified gross mass of a packed container, which must be declared to the carrier before loading on the vessel. We coordinate weighment and the VGM declaration with the shipper.",
      },
    ],
    related: ["coffee-and-spice-cargo", "transportation", "export-documentation"],
  },
  {
    slug: "kochi-port-export-shipping",
    division: "logistics",
    navLabel: "Shipping from Kochi Port",
    h1: "Shipping from Kochi port: container exports through ICTT Vallarpadam, Cochin",
    metaTitle: "Shipping from Kochi Port (Cochin) — ICTT Vallarpadam Container Exports | Versa Logistics",
    metaDescription:
      "Export containers through Kochi port's International Container Transshipment Terminal (ICTT Vallarpadam). Versa Logistics, Kakkanad, books FCL/LCL from Cochin to Jebel Ali, Khorfakkan, the GCC and worldwide.",
    keywords: [
      "shipping from Kochi port",
      "Cochin port export",
      "ICTT Vallarpadam shipping",
      "Kochi container terminal freight forwarder",
      "export from Kerala port",
      "Cochin to Dubai shipping",
    ],
    eyebrow: "Versa Logistics — Gateway: Kochi",
    lede:
      "Kochi is Kerala's gateway to the world's shipping lanes, and our office in Kakkanad sits a short drive from its container terminal.",
    image: IMAGES.kochiTerminal,
    summary:
      "Versa Logistics books container exports through Kochi port's International Container Transshipment Terminal (ICTT) at Vallarpadam, handling haulage, documentation and sailings from Cochin to Jebel Ali, Khorfakkan, the GCC and other world ports.",
    intro: [
      "The International Container Transshipment Terminal at Vallarpadam is Kochi's deep-water container terminal, close to the main east–west shipping route that passes the southern tip of India. For exporters in Kerala — and much of Tamil Nadu and Karnataka — it is the closest container gateway.",
      "Shipping through Kochi means shorter road hauls from the plantations and curing works of the Western Ghats, and a direct route across the Arabian Sea to the Gulf.",
    ],
    specs: [
      { label: "Terminal", value: "ICTT Vallarpadam, Kochi" },
      { label: "Hinterland", value: "Kerala, south Karnataka, west Tamil Nadu" },
      { label: "Key lanes", value: "Gulf, Middle East, Europe, Far East" },
      { label: "Our office", value: "Kakkanad, Kochi" },
    ],
    sections: [
      {
        heading: "Why export through Kochi instead of another port?",
        body: ["For cargo originating in Kerala and nearby districts, Kochi usually offers:"],
        bullets: [
          "The shortest and cheapest road leg from plantation or factory to port",
          "Direct and transhipment services to the Gulf and beyond",
          "Less road risk for moisture-sensitive agri-cargo",
          "A local team that can reach the terminal quickly when something needs attention",
        ],
      },
      {
        heading: "What happens at the terminal before my container sails?",
        body: [
          "After stuffing, the loaded container is trucked to the terminal and gated in before the vessel cut-off. It is weighed or its VGM declared, customs clearance is completed through the shipping bill, and the container is stacked for loading. Once loaded, the carrier issues the bill of lading.",
        ],
      },
      {
        heading: "When is another Indian port the better choice?",
        body: [
          "If your cargo originates far from Kerala, or a specific carrier service runs only from another port, we book from Tuticorin, Mangalore, Nhava Sheva or Mundra instead. The comparison is made on total door-to-port cost and transit, not on habit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Kochi port the same as Cochin port?",
        answer: "Yes. Kochi is the current name of the city also known as Cochin; the container terminal is the International Container Transshipment Terminal at Vallarpadam.",
      },
      {
        question: "How far is your office from the Kochi container terminal?",
        answer: "Our office in Kakkanad is a short drive from the Vallarpadam terminal.",
      },
      {
        question: "Can I ship LCL from Kochi?",
        answer: "Yes. Consolidated LCL services are available from Kochi to major Gulf destinations; we confirm schedules when you enquire.",
      },
    ],
    related: ["sea-freight", "india-to-jebel-ali-shipping", "transportation"],
  },
  {
    slug: "gcc-shipping",
    division: "logistics",
    navLabel: "Shipping to the GCC",
    h1: "Shipping from India to the GCC: Saudi Arabia, Oman, Qatar, Kuwait and Bahrain",
    metaTitle: "Shipping from India to GCC — Saudi Arabia, Oman, Qatar, Kuwait, Bahrain | Versa Logistics",
    metaDescription:
      "Sea freight from India to GCC countries: Jeddah and Dammam (Saudi Arabia), Sohar (Oman), Hamad (Qatar), Shuwaikh (Kuwait) and Khalifa Bin Salman (Bahrain), plus UAE ports. Booking, documents and tracking by Versa Logistics.",
    keywords: [
      "shipping India to Saudi Arabia",
      "sea freight India to Oman",
      "shipping India to Qatar",
      "shipping India to Kuwait",
      "shipping India to Bahrain",
      "GCC freight forwarder India",
      "India to Middle East shipping",
    ],
    eyebrow: "Versa Logistics — Route: India → GCC",
    lede:
      "The UAE is our core lane. From the same Kochi desk we also book containers to the rest of the Gulf Cooperation Council — direct, or via Jebel Ali and Khorfakkan.",
    image: IMAGES.shipAerial,
    summary:
      "Versa Logistics books sea freight from India to GCC countries — Saudi Arabia, Oman, Qatar, Kuwait and Bahrain — on direct services or via UAE transhipment hubs, with documentation and tracking handled from Kochi.",
    intro: [
      "Gulf importers buy heavily from India: rice, spices, coffee, tea, fresh and processed food, building materials and machinery. Every GCC country is reachable from India's west coast by sea, either on a direct service or by transhipment through Jebel Ali or Khorfakkan.",
    ],
    specs: [
      { label: "Saudi Arabia", value: "Jeddah, Dammam" },
      { label: "Oman", value: "Sohar, Muscat" },
      { label: "Qatar", value: "Hamad Port" },
      { label: "Kuwait", value: "Shuwaikh, Shuaiba" },
      { label: "Bahrain", value: "Khalifa Bin Salman Port" },
    ],
    sections: [
      {
        heading: "Which GCC ports can you ship to from India?",
        body: [
          "We book to the principal container ports of each GCC country — Jeddah and Dammam in Saudi Arabia, Sohar in Oman, Hamad in Qatar, Shuwaikh in Kuwait and Khalifa Bin Salman in Bahrain — as well as Jebel Ali and Khorfakkan in the UAE.",
        ],
      },
      {
        heading: "Direct service or transhipment through the UAE?",
        body: [
          "Some GCC ports have frequent direct sailings from India; others are best served by transhipment through Jebel Ali or Khorfakkan. We compare schedule, transit time and total cost for each shipment and recommend the better option.",
        ],
      },
      {
        heading: "What documents do GCC importers expect?",
        body: [
          "Requirements vary by country and product, but most shipments need a commercial invoice, packing list, bill of lading and certificate of origin, with phytosanitary or health certificates for food and plant products. Several GCC countries require certificates to be attested or registered — confirm specifics with your importer, and we will align the paperwork.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you have a regular service to Saudi Arabia?",
        answer: "Our regular service runs to the UAE. For Saudi Arabia and other GCC countries we book on the carriers serving each port for your shipment date.",
      },
      {
        question: "Can cargo go to Oman through Khorfakkan?",
        answer: "Yes. Depending on the carrier, cargo for Oman can move via UAE hubs or on a direct service to Sohar.",
      },
      {
        question: "Do you ship coffee and spices to the GCC?",
        answer: "Yes. Coffee and spices are among the most common cargoes we handle, whether sourced from Versa Traders or other suppliers.",
      },
    ],
    related: ["india-to-jebel-ali-shipping", "india-to-khorfakkan-shipping", "export-documentation"],
  },
]

export const LOGISTICS_EXTRA_SECTIONS: Record<string, { heading: string; body: string[]; bullets?: string[] }> = {
  "sea-freight": {
    heading: "Which cargo types can you ship by sea from India?",
    body: ["We book sea freight for cargo including:"],
    bullets: [
      "Green coffee beans, cardamom, black pepper and other spices",
      "Rice, pulses, tea and packaged food products",
      "Coir, rubber and natural-fibre products from Kerala",
      "Building materials, tiles and hardware",
      "Machinery, spare parts and general cargo",
    ],
  },
  "freight-forwarding": {
    heading: "What does a freight forwarder cost?",
    body: [
      "Forwarding charges depend on the service scope — booking only, or booking with haulage, documentation and destination coordination. We quote each component separately, so you can see exactly what you are paying for and compare it fairly against a direct booking.",
    ],
  },
  transportation: {
    heading: "Which road routes do you arrange?",
    body: ["Typical road legs include:"],
    bullets: [
      "Wayanad, Idukki and Munnar hill regions to Kochi",
      "Coorg and Chikmagalur (Karnataka) to Kochi or Mangalore",
      "Tamil Nadu spice and textile clusters to Kochi or Tuticorin",
      "Warehouse-to-terminal shuttles within Ernakulam district",
    ],
  },
  "india-to-jebel-ali-shipping": {
    heading: "What happens after my container arrives at Jebel Ali?",
    body: [
      "On arrival the carrier issues an arrival notice, the consignee's clearing agent lodges the import declaration with Dubai Customs, pays duties if applicable, and collects the delivery order once the bill of lading is released. The container is then trucked to the consignee's warehouse or free-zone facility. We keep both sides updated until release.",
    ],
  },
  "india-to-khorfakkan-shipping": {
    heading: "What cargo suits Khorfakkan best?",
    body: [
      "Cargo for importers in Sharjah, Fujairah, Ras Al Khaimah and the UAE's east coast often benefits from Khorfakkan — coffee and spice traders, food distributors and building-material suppliers in particular.",
    ],
  },
  "coffee-and-spice-cargo": {
    heading: "What is container rain and how do you prevent it?",
    body: [
      "Container rain is condensation that forms on the inside of the container roof when temperatures change during the voyage, then drips onto the cargo. For hygroscopic goods like green coffee, it can cause mould and quality claims. Prevention combines dry cargo, dry containers, liners, desiccants and correct ventilation — the checklist we apply to every agri-commodity container.",
    ],
  },
}

export const LOGISTICS_INDUSTRIES = [
  { title: "Coffee exporters & curing works", body: "Green coffee in 60 kg jute, container-loaded for roasters and traders." },
  { title: "Spice traders & processors", body: "Cardamom, black pepper and whole spices bound for the Gulf." },
  { title: "Food & FMCG exporters", body: "Rice, tea, packaged foods and Kerala specialities." },
  { title: "Coir & natural products", body: "Coir, rubber and fibre products from Kerala's industries." },
  { title: "Building materials", body: "Tiles, hardware and construction supplies for GCC projects." },
  { title: "Importers in the UAE & GCC", body: "Buyers who need a dependable forwarder at the Indian end." },
]
