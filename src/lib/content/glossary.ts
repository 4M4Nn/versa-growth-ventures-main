export interface GlossaryTerm {
  term: string
  slug: string
  category: "Shipping" | "Documents & trade" | "Coffee" | "Spices"
  definition: string
  href?: string
}

export const GLOSSARY_PAGE = {
  metaTitle: "Shipping, Export & Spice Trade Glossary — FCL, B/L, CEPA, MG1, AGEB | Versa Growth Ventures",
  metaDescription:
    "Plain-English glossary of shipping, export documentation, green coffee and spice trade terms: FCL, LCL, bill of lading, VGM, Incoterms, phytosanitary certificate, CEPA, AGEB, MG1, TGEB, Robusta Parchment and more.",
  eyebrow: "Glossary",
  h1: "Glossary of shipping, export and coffee & spice trade terms",
  lede: "The words exporters, importers and roasters use every day — defined plainly, with links to where we explain them in depth.",
}

export const GLOSSARY: GlossaryTerm[] = [
  // Shipping
  { term: "FCL (Full Container Load)", slug: "fcl", category: "Shipping", definition: "A shipment that uses an entire container for one shipper's cargo. The container is sealed at origin and opened only by the consignee.", href: "/logistics/sea-freight" },
  { term: "LCL (Less than Container Load)", slug: "lcl", category: "Shipping", definition: "A shipment that shares a container with other shippers' cargo and is charged by volume or weight. Suited to small or trial consignments.", href: "/blog/fcl-vs-lcl-shipping-explained" },
  { term: "TEU and FEU", slug: "teu-feu", category: "Shipping", definition: "Twenty-foot Equivalent Unit and Forty-foot Equivalent Unit — standard measures of container capacity. One 40ft container equals two TEU.", href: "/blog/20ft-vs-40ft-container-guide" },
  { term: "40ft High Cube", slug: "high-cube", category: "Shipping", definition: "A 40ft container roughly 30 cm taller than a standard 40ft box, giving extra volume for lighter, bulkier cargo." },
  { term: "Freight forwarder", slug: "freight-forwarder", category: "Shipping", definition: "A company that organises the movement of goods for a shipper — booking carriers, arranging haulage, coordinating documents and tracking the shipment.", href: "/logistics/freight-forwarding" },
  { term: "Cut-off", slug: "cut-off", category: "Shipping", definition: "The deadline by which a container must be gated into the terminal (or documents submitted) to be loaded on a particular vessel." },
  { term: "Gate-in", slug: "gate-in", category: "Shipping", definition: "The moment a loaded container enters the port terminal before loading." },
  { term: "Stuffing", slug: "stuffing", category: "Shipping", definition: "Loading cargo into a container, either at the exporter's premises (factory stuffing) or at a container freight station.", href: "/logistics/container-stuffing-and-loading" },
  { term: "VGM (Verified Gross Mass)", slug: "vgm", category: "Shipping", definition: "The declared total weight of a packed container, required by the carrier before the container can be loaded on a vessel." },
  { term: "Transhipment", slug: "transhipment", category: "Shipping", definition: "Moving a container from one vessel to another at an intermediate hub port, such as Jebel Ali or Khorfakkan, before its final destination.", href: "/logistics/gcc-shipping" },
  { term: "Demurrage and detention", slug: "demurrage-detention", category: "Shipping", definition: "Charges for keeping a container at the terminal (demurrage) or outside it (detention) beyond the free time allowed by the carrier." },
  { term: "Container rain", slug: "container-rain", category: "Shipping", definition: "Condensation that forms inside a container during a voyage and drips onto the cargo — a key risk for green coffee and dried spices.", href: "/logistics/coffee-and-spice-cargo" },
  { term: "Jebel Ali Port", slug: "jebel-ali", category: "Shipping", definition: "Dubai's main container port, operated by DP World and adjacent to the Jebel Ali Free Zone — the largest port in the Middle East.", href: "/logistics/india-to-jebel-ali-shipping" },
  { term: "Khorfakkan Port", slug: "khorfakkan", category: "Shipping", definition: "Sharjah's deep-water container port on the UAE's east coast, facing the Gulf of Oman outside the Strait of Hormuz.", href: "/logistics/india-to-khorfakkan-shipping" },
  { term: "ICTT Vallarpadam", slug: "ictt-vallarpadam", category: "Shipping", definition: "The International Container Transshipment Terminal at Vallarpadam — Kochi's deep-water container terminal.", href: "/logistics/kochi-port-export-shipping" },

  // Documents & trade
  { term: "Bill of lading (B/L)", slug: "bill-of-lading", category: "Documents & trade", definition: "The carrier's receipt for cargo, the contract of carriage and — as an original — the document of title needed to collect the goods.", href: "/logistics/export-documentation" },
  { term: "Telex release / sea waybill", slug: "telex-release", category: "Documents & trade", definition: "Ways of releasing cargo to the consignee without surrendering paper original bills of lading." },
  { term: "Shipping bill", slug: "shipping-bill", category: "Documents & trade", definition: "The export declaration filed with Indian customs, usually by a licensed customs broker, before goods can leave India." },
  { term: "Certificate of origin (COO)", slug: "certificate-of-origin", category: "Documents & trade", definition: "A document certifying the country in which goods were produced. A preferential COO can reduce import duty under trade agreements.", href: "/traders/quality-certification" },
  { term: "India–UAE CEPA", slug: "india-uae-cepa", category: "Documents & trade", definition: "The Comprehensive Economic Partnership Agreement between India and the UAE, which offers preferential tariffs on eligible Indian-origin goods.", href: "/blog/india-uae-cepa-certificate-of-origin-guide" },
  { term: "Phytosanitary certificate", slug: "phytosanitary-certificate", category: "Documents & trade", definition: "An official certificate confirming plant products such as coffee and spices have been inspected and meet the importing country's plant-health requirements.", href: "/blog/phytosanitary-certificate-india-export-guide" },
  { term: "Fumigation certificate", slug: "fumigation-certificate", category: "Documents & trade", definition: "Evidence that cargo or packaging has been fumigated against pests, required by some buyers and destinations." },
  { term: "Incoterms", slug: "incoterms", category: "Documents & trade", definition: "Standard trade terms (such as FOB, CFR and CIF) that define which party pays for and bears the risk of each stage of delivery.", href: "/blog/incoterms-fob-cfr-cif-explained" },
  { term: "FOB (Free On Board)", slug: "fob", category: "Documents & trade", definition: "The seller delivers goods loaded on the vessel at the origin port; the buyer arranges and pays the ocean freight." },
  { term: "CIF (Cost, Insurance and Freight)", slug: "cif", category: "Documents & trade", definition: "The seller pays freight and insurance to the destination port; risk passes to the buyer once goods are loaded at origin." },
  { term: "Letter of credit (L/C)", slug: "letter-of-credit", category: "Documents & trade", definition: "A bank's undertaking to pay the seller once compliant shipping documents are presented — a common payment method for larger commodity orders.", href: "/blog/letter-of-credit-vs-advance-payment-commodity-trade" },

  // Coffee
  { term: "Green coffee", slug: "green-coffee", category: "Coffee", definition: "Unroasted coffee beans, the form in which coffee is traded internationally and supplied to roasters.", href: "/traders/green-coffee-beans" },
  { term: "Plantation (coffee)", slug: "plantation-coffee", category: "Coffee", definition: "The Indian trade name for washed (wet-processed) Arabica coffee.", href: "/traders/arabica-green-coffee-beans" },
  { term: "Parchment (coffee)", slug: "parchment-coffee", category: "Coffee", definition: "The Indian trade name for washed Robusta coffee; also the papery layer around the bean after pulping.", href: "/traders/robusta-green-coffee-beans" },
  { term: "Cherry (coffee)", slug: "cherry-coffee", category: "Coffee", definition: "Natural (dry-processed) coffee dried as whole cherries — Arabica Cherry or Robusta Cherry in Indian grading." },
  { term: "AA, A, AB, PB", slug: "coffee-size-grades", category: "Coffee", definition: "Indian coffee size grades by screen: AA and A are the largest beans, AB a mix, and PB (peaberry) the round single beans.", href: "/blog/indian-green-coffee-grades-explained" },
  { term: "Screen size", slug: "screen-size", category: "Coffee", definition: "Bean size measured by the sieve on which beans are retained, used to grade green coffee." },
  { term: "Monsooned Malabar", slug: "monsooned-malabar", category: "Coffee", definition: "An Indian specialty coffee whose green beans are exposed to monsoon winds, giving a mellow, low-acid cup." },

  // Spices
  { term: "Small green cardamom", slug: "small-cardamom", category: "Spices", definition: "Elettaria cardamomum — the green cardamom grown in Kerala's Idukki hills and prized in the Gulf.", href: "/traders/cardamom" },
  { term: "AGEB / AGB", slug: "ageb", category: "Spices", definition: "Alleppey Green Extra Bold and Alleppey Green Bold — traditional trade grades for bold green cardamom.", href: "/blog/cardamom-grades-8mm-7mm-buyers-guide" },
  { term: "Litre weight", slug: "litre-weight", category: "Spices", definition: "The weight of one litre of cardamom pods or pepper berries; a higher figure indicates fuller, more mature produce." },
  { term: "MG1", slug: "mg1", category: "Spices", definition: "Malabar Garbled Grade 1 — the benchmark standard-size export grade of Indian black pepper.", href: "/traders/malabar-black-pepper-mg1" },
  { term: "TGEB / TGSEB", slug: "tgeb", category: "Spices", definition: "Tellicherry Garbled Extra Bold (≈4.25 mm+) and Special Extra Bold (≈4.75 mm+) — the boldest grades of Indian black pepper.", href: "/traders/tellicherry-black-pepper" },
  { term: "Garbled", slug: "garbled", category: "Spices", definition: "Cleaned and sorted to remove stems, dust, pinheads and light berries." },
  { term: "Steam sterilisation", slug: "steam-sterilisation", category: "Spices", definition: "Treating spices with steam to reduce microbial load for markets with strict microbiological limits.", href: "/blog/black-pepper-steam-sterilisation-why-it-matters" },
]
