import type { DivisionPage, FAQ } from "@/types"
import { IMAGES } from "./site"
import { INTL_COFFEE_FAQS } from "./traders-coffee-intl"

export const MNEB_FAQS: FAQ[] = [
  {
    question: "What is MNEB coffee (Mysore Nuggets Extra Bold)?",
    answer:
      "MNEB stands for Mysore Nuggets Extra Bold — a premium washed Arabica grade from Karnataka, India. 'Nuggets' describes the distinctively large, dense, bold bean; 'Extra Bold' (EB) is the size designation, meaning beans retained on screen 18 (approximately 7.14 mm), larger than standard Plantation A (screen 15+). It is sourced from the coffee-growing districts of Hassan, Coorg (Kodagu) and Chikmagalur in Karnataka — historically part of the Mysore kingdom, hence the name.",
  },
  {
    question: "What does Mysore Nuggets Extra Bold taste like?",
    answer:
      "MNEB cups clean, balanced and fuller-bodied than standard Plantation Arabica. Typical descriptors include mild citrus (lemon zest, orange), caramel sweetness, gentle nuttiness and a long, clean finish. The large bean size produces slightly more body and sweetness than Plantation A, with low acidity — a hallmark of washed Karnataka Arabica. SCA cup scores typically range 82–86 for selected lots, with commercial-grade MNEB in the 80–84 range.",
  },
  {
    question: "What is the difference between MNEB, Plantation A and Plantation Specialty?",
    answer:
      "Plantation A is graded by screen 15+ and defect count — the standard commercial washed Arabica. MNEB (Extra Bold) is graded on screen 18+ — a larger, bolder bean, typically from better-tended estate gardens, commanding a premium over Plantation A. Plantation Specialty is cupped and scored — only lots scoring 82+ SCA are offered as Specialty, regardless of screen size. MNEB that also scores 82+ can be marketed as both Extra Bold and Specialty; commercial MNEB is not necessarily scored.",
  },
  {
    question: "Who uses Mysore Nuggets Extra Bold coffee?",
    answer:
      "MNEB is used by Italian espresso blenders (the extra-bold bean size suits their roast profiles), German and Scandinavian commercial roasters, UAE and GCC specialty and gahwa blenders, UK specialty importers building single-origin Indian offerings, and US importers adding a premium Indian Arabica to their portfolio. Its full body and clean, balanced cup make it one of the most versatile Indian coffees for both filter and espresso applications.",
  },
  {
    question: "Is MNEB EUDR compliant?",
    answer:
      "Yes. Versa International Traders provides EUDR-compliant documentation for MNEB lots bound for the EU: GPS geolocation data for each estate, satellite forest-cover evidence showing no deforestation after 31 December 2020, and Rainforest Alliance transaction certificates for RA-certified lots. Full due-diligence documentation is provided at the point of offer for pre-registered EU buyers.",
  },
  {
    question: "What is the MOQ for MNEB and how do I order?",
    answer:
      "Minimum order quantity is 1 FCL — approximately 19.2 metric tonnes (320 × 60 kg jute bags) in a standard 20ft container. Trial lots for first-time buyers can be arranged. Contact +91 97464 33133 or WhatsApp +91 79072 15816 with your destination port, required grade and quantity. We will send cupping notes and pricing within 24 hours.",
  },
]

export const TRADERS_MNEB_INTL_PAGES: DivisionPage[] = [
  // ── MNEB product page ───────────────────────────────────────────────────
  {
    slug: "mysore-nuggets-extra-bold-india",
    division: "traders",
    navLabel: "Mysore Nuggets Extra Bold",
    topic: "Mysore Nuggets Extra Bold (MNEB) Indian Arabica coffee",
    h1: "Mysore Nuggets Extra Bold (MNEB) — premium washed Indian Arabica, screen 18+, Karnataka",
    metaTitle: "Mysore Nuggets Extra Bold (MNEB) Indian Coffee — Screen 18+, Karnataka | Versa International Traders",
    metaDescription:
      "Buy Mysore Nuggets Extra Bold (MNEB) Indian Arabica green coffee — washed, extra bold screen 18+, full body, clean, balanced, SCA 82–86. EUDR compliant. MOQ 1 FCL. Versa International Traders.",
    keywords: [
      "Mysore Nuggets Extra Bold",
      "MNEB coffee India",
      "Indian extra bold Arabica",
      "Mysore Nuggets coffee exporter",
      "MNEB green coffee bulk",
      "Karnataka extra bold Arabica",
      "screen 18 Indian Arabica",
      "premium Indian Arabica coffee",
    ],
    eyebrow: "Versa International Traders — Arabica Premium",
    lede:
      "Mysore Nuggets Extra Bold — India's most recognised premium Arabica grade. Large, bold, washed beans from Karnataka estates. Full-bodied, clean and balanced, with the size to match the cup.",
    image: IMAGES.coffeeBeans,
    summary:
      "Versa International Traders supplies Mysore Nuggets Extra Bold (MNEB) — washed Indian Arabica graded on screen 18+, sourced from Hassan, Coorg and Chikmagalur districts of Karnataka. Full body, clean cup, mild citrus and caramel, low acidity. SCA 82–86 for selected lots. EUDR-compliant documentation. Rainforest Alliance certified lots available. MOQ 1 FCL.",
    topicStats: [
      { value: "Screen 18+", label: "Extra Bold — larger than Plantation A" },
      { value: "SCA 82–86", label: "Cup score for selected lots" },
    ],
    intro: [
      "Mysore Nuggets Extra Bold (MNEB) is the premium washed Arabica grade that has represented Indian coffee in the world's finest espresso blends for generations. The name comes from the former Mysore kingdom — now Karnataka — where the coffee estates of Hassan, Coorg and Chikmagalur sit at 900–1,500 metres under the shade of silver oaks and pepper vines.",
      "'Extra Bold' is not marketing language — it is an official Indian grading designation specifying beans retained on screen 18 (approximately 7.14 mm), larger and denser than Plantation A (screen 15+). The larger bean size produces more body, more sweetness and a richer roast development — qualities that make MNEB the first choice for Italian-style espresso blenders and commercial roasters building full-bodied blends.",
    ],
    specs: [
      { label: "Grade", value: "Mysore Nuggets Extra Bold (MNEB) — screen 18+" },
      { label: "Also known as", value: "Mysore Nuggets EB, Mysore Gold (in some markets)" },
      { label: "Origin", value: "Hassan, Coorg (Kodagu), Chikmagalur — Karnataka, India" },
      { label: "Process", value: "Washed (Plantation)" },
      { label: "Bean size", value: "Screen 18+ (Extra Bold)" },
      { label: "SCA cup score", value: "82–86 selected lots; commercial MNEB 80–83" },
      { label: "Cup profile", value: "Full body, clean, balanced, mild citrus, caramel, low acidity, long finish" },
      { label: "Moisture", value: "Below 12.5%" },
      { label: "Defects", value: "Low — per MNEB grade specification" },
      { label: "Packing", value: "60 kg jute bags; GrainPro on request" },
      { label: "MOQ", value: "1 FCL (≈ 19.2 MT in a 20ft container)" },
      { label: "EUDR", value: "Compliant documentation provided" },
      { label: "Certification", value: "Rainforest Alliance certified lots available" },
    ],
    sections: [
      {
        heading: "What makes MNEB different from other Indian Arabica grades?",
        body: [
          "The key distinction is bean size and density. Standard Plantation A is graded on screen 15 (approximately 6 mm) — a commercial-grade washed Arabica. MNEB is graded on screen 18 (approximately 7.14 mm) — the same estates, the same growing conditions, but only the largest, densest beans in each lot. Larger beans absorb more heat during roasting, produce more consistent roast development and yield more body and sweetness in the cup.",
          "In the green coffee trade, MNEB is priced at a premium to Plantation A and is typically offered only during the main crop season when sufficient extra-bold beans are available after grading. It is not always available year-round — buyers are encouraged to pre-register interest before the season to secure allocation.",
        ],
      },
      {
        heading: "MNEB for espresso blending — why Italian roasters choose it",
        body: [
          "Italian roasters have used Indian Arabica — particularly MNEB — in their espresso blends for decades. The full body of MNEB holds up to the high-extraction conditions of espresso, contributing body and sweetness that lighter-bodied Arabicas cannot supply at the same price point. For a traditional Italian-style espresso blend (70% Arabica / 30% Robusta), MNEB as the Arabica base delivers the body and balance the blend needs while keeping the overall cup clean.",
          "For dark-roast commercial applications — the kind common in Italian households and food service — MNEB's large bean size means less moisture loss per batch, more consistent yield, and a sweeter, less bitter dark roast than smaller-bean Arabica at equivalent roast level.",
        ],
      },
      {
        heading: "MNEB for UAE and GCC buyers",
        body: [
          "In the UAE and broader GCC, MNEB is used in gahwa (Arabic coffee) preparations and commercial espresso blends. Its full body and low acidity suit the GCC palate — where mild, balanced, low-acid coffees are preferred — and its Indian origin means short sea freight times (4–7 days from Kochi to Jebel Ali), low freight cost and established trade documentation.",
          "Versa International Traders has an established supply route to the UAE and can deliver MNEB to Jebel Ali CIF or FOB Kochi on 1 FCL minimum.",
        ],
      },
      {
        heading: "How to order MNEB from Versa International Traders",
        body: [
          "Pre-register your interest with grade (MNEB), quantity (FCL), destination port and required documentation (EUDR, RA certificate). We will send cupping notes and pricing from the available crop lot. For EU-bound shipments, full EUDR documentation is prepared at the point of offer. Trial lots for first-time buyers can be arranged.",
          "Contact +91 97464 33133 or WhatsApp +91 79072 15816. Response within 24 hours.",
        ],
      },
    ],
    faqs: [MNEB_FAQS[0], MNEB_FAQS[1], MNEB_FAQS[2], MNEB_FAQS[3], MNEB_FAQS[4], MNEB_FAQS[5]],
    related: ["arabica-plantation-specialty-india", "arabica-plantation-ab-india", "eudr-compliant-coffee-beans"],
  },

  // ── Australia ────────────────────────────────────────────────────────────
  {
    slug: "green-coffee-beans-australia",
    division: "traders",
    navLabel: "Green Coffee — Australia",
    topic: "Indian green coffee beans for Australian roasters and importers",
    h1: "Indian green coffee beans for Australian roasters — Arabica, Robusta and MNEB, FOB Kochi",
    metaTitle: "Indian Green Coffee Beans for Australian Roasters — Arabica, Robusta, MNEB | Versa International Traders",
    metaDescription:
      "Buy Indian green coffee beans for delivery to Australia — Arabica Plantation, Mysore Nuggets Extra Bold (MNEB), Robusta AAA, AA and specialty grades. EUDR documentation. MOQ 1 FCL. Versa International Traders.",
    keywords: [
      "Indian green coffee beans Australia",
      "buy green coffee India Australia",
      "Indian Arabica for Australian roasters",
      "Indian Robusta Australia import",
      "MNEB coffee Australia",
      "green coffee supplier India Australia",
      "Indian coffee exporter Australia",
    ],
    eyebrow: "Versa International Traders — Australia",
    lede:
      "Australian roasters and importers sourcing Indian green coffee — Arabica Plantation, MNEB, Robusta graded lots and specialty selection. FOB Kochi or CFR Fremantle/Melbourne/Sydney. MOQ 1 FCL.",
    image: IMAGES.coffeeSack,
    summary:
      "Versa International Traders exports Indian green coffee beans to Australia — Arabica Plantation A, Arabica Plantation Specialty (82+ SCA), Mysore Nuggets Extra Bold (MNEB), natural Robusta AAA/AA/A/PB and Arabica Cherry AB. Ships to Fremantle (Perth), Melbourne, Sydney and Brisbane. EUDR documentation. Rainforest Alliance certified lots. MOQ 1 FCL.",
    topicStats: [
      { value: "15–22 days", label: "Sea transit Kochi → Fremantle (Perth)" },
      { value: "5 grades", label: "Arabica and Robusta available" },
    ],
    intro: [
      "India is an underexplored origin for Australian green coffee buyers — most specialty volumes come from Ethiopia, Colombia and Honduras. Indian origin brings genuine differentiation: washed Arabica from shade-grown Karnataka estates (Chikmagalur, Coorg), natural Robusta from Coorg and Chikmagalur with distinctive earthy complexity, and Mysore Nuggets Extra Bold — a grade with a long history in espresso blending that few Australian roasters have on their menu.",
      "Sea freight from Kochi to Fremantle takes approximately 15–22 days; to Melbourne and Sydney, 20–28 days. India's geographic position — not far from Australia's direct trade corridor — means lead times and freight costs are competitive with Central American origins.",
    ],
    specs: [
      { label: "Available grades", value: "Arabica Plantation A, Plantation B, Plantation Specialty (82+ SCA), MNEB (screen 18+), Arabica Cherry AB, Robusta AAA/AA/A/PB natural, Monsooned Malabar AA/AB" },
      { label: "Destination ports", value: "Fremantle (Perth), Melbourne (Webb Dock), Sydney (Port Botany), Brisbane" },
      { label: "Transit time", value: "15–22 days to Fremantle; 20–28 days to Melbourne/Sydney" },
      { label: "Incoterms", value: "FOB Kochi, CFR or CIF nominated Australian port" },
      { label: "Packing", value: "60 kg jute bags; GrainPro on request" },
      { label: "MOQ", value: "1 FCL (≈ 19.2 MT in a 20ft container)" },
      { label: "EUDR", value: "Compliant documentation available on request" },
      { label: "Certification", value: "Rainforest Alliance certified lots available" },
      { label: "Payment", value: "TT advance, LC at sight or CAD — discuss with our trade desk" },
    ],
    sections: [
      {
        heading: "Why Australian roasters source Indian green coffee",
        body: [],
        bullets: [
          "Origin differentiation: Indian coffee — particularly MNEB and Plantation Specialty — is rare on Australian menus, creating a talking point for specialty café customers",
          "Price: Indian washed Arabica is typically priced below comparable Central American and Ethiopian origins while delivering a consistently clean, 80–84 SCA cup — competitive for filter menus",
          "Natural Robusta: Indian Robusta AAA natural from Coorg and Chikmagalur gives Australian espresso blenders a high-quality natural Robusta alternative to Vietnamese and Indonesian origins",
          "Freight: sea transit from India to Fremantle is competitive with South American origins, and Kochi is an established, well-documented export port with consistent vessel services",
          "EUDR-ready documentation: Australian green importers supplying European roasters or retailers need EUDR documentation — Versa International Traders provides this as standard",
        ],
      },
      {
        heading: "What Indian coffee grades are available for Australia?",
        body: [
          "The full Arabica range: Plantation A (commercial washed, 78–82 SCA), Plantation B, Plantation Specialty (selected lots, 82+ SCA), Mysore Nuggets Extra Bold — MNEB (screen 18+, full body, 80–84 SCA), Arabica Cherry AB (natural sun-dried, stone fruit, heavier body) and Monsooned Malabar (earthy, very low acid, used in Italian-style espresso blends). The full Robusta range: natural sun-dried 2026 crop AAA (screen 19), AA (screen 18), A (screen 17) and PB (peaberry) from Coorg and Chikmagalur.",
        ],
      },
    ],
    faqs: [
      INTL_COFFEE_FAQS[4],
      MNEB_FAQS[0],
      MNEB_FAQS[4],
      {
        question: "What is the sea freight transit time from India to Australia?",
        answer:
          "From Kochi (Cochin) to Fremantle (Perth), approximately 15–22 days. To Melbourne (Webb Dock) or Sydney (Port Botany), approximately 20–28 days. Services route via Port Klang (Malaysia) or Singapore. Versa Logistics can quote CIF or CFR to your nominated Australian port.",
      },
      {
        question: "Can I order a trial lot before committing to a full container?",
        answer:
          "Yes. For first-time buyers, Versa International Traders can arrange samples (cupping lot) by air freight before the FCL purchase decision. Trial lots below one FCL can also be arranged via LCL (groupage) shipping, though FOB pricing is based on FCL volumes. Contact us at +91 97464 33133.",
      },
    ],
    related: ["mysore-nuggets-extra-bold-india", "arabica-plantation-specialty-india", "eudr-compliant-coffee-beans"],
  },

  // ── Middle East wholesale ────────────────────────────────────────────────
  {
    slug: "green-coffee-beans-middle-east-gcc",
    division: "traders",
    navLabel: "Green Coffee — Middle East",
    topic: "Indian green coffee beans for Middle East and GCC buyers",
    h1: "Indian green coffee beans for the Middle East and GCC — Arabica, Robusta and MNEB, FOB Kochi",
    metaTitle: "Indian Green Coffee Beans — Middle East, GCC, Dubai, Saudi Arabia | Versa International Traders",
    metaDescription:
      "Indian green coffee beans for GCC importers — Arabica Plantation, MNEB, Robusta AAA and specialty. 4–7 days Kochi to Jebel Ali. EUDR documentation. MOQ 1 FCL. Versa International Traders.",
    keywords: [
      "Indian green coffee beans Middle East",
      "green coffee supplier UAE Dubai",
      "Indian coffee beans Saudi Arabia",
      "buy coffee beans from India GCC",
      "Indian Arabica Robusta UAE importer",
      "green coffee beans Jebel Ali India",
      "MNEB coffee UAE",
    ],
    eyebrow: "Versa International Traders — Middle East & GCC",
    lede:
      "India's closest green coffee export route: Kochi to Jebel Ali in 4–7 days. Arabica Plantation, Mysore Nuggets Extra Bold, Robusta and specialty grades for GCC roasters, blenders and importers.",
    image: IMAGES.jebelAli,
    summary:
      "Versa International Traders exports Indian green coffee beans to the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman — Arabica Plantation A, MNEB, Arabica Cherry AB, Robusta AAA/AA/A/PB and Monsooned Malabar. Established supply route to Jebel Ali (160 MT traded). CIF or CFR Jebel Ali, Khorfakkan. EUDR documentation. MOQ 1 FCL.",
    topicStats: [
      { value: "4–7 days", label: "Sea transit Kochi → Jebel Ali" },
      { value: "160 MT", label: "Coffee beans already traded to UAE" },
    ],
    intro: [
      "India is the natural source for GCC coffee buyers. Kochi to Jebel Ali is one of the shortest long-haul sea freight routes in Indian export trade — 4–7 days sailing, weekly vessel services, established port relationships. Versa International Traders has already traded 160 metric tonnes of coffee beans to the UAE and maintains active supply into Jebel Ali and Khorfakkan.",
      "The GCC coffee market is growing fast: Dubai and Riyadh have established specialty café scenes; Saudi Arabia is the world's fastest-growing coffee consumer market; and gahwa (Arabic coffee) blending uses Indian Arabica, Robusta and Monsooned Malabar at scale. Versa supplies the full range — from commercial Plantation B to Mysore Nuggets Extra Bold and specialty lots.",
    ],
    specs: [
      { label: "Available grades", value: "Arabica Plantation A/B, Plantation Specialty (82+ SCA), MNEB (screen 18+), Arabica Cherry AB, Robusta AAA/AA/A/PB natural, Monsooned Malabar AA/AB" },
      { label: "Destination ports", value: "Jebel Ali (Dubai), Khorfakkan (Sharjah), Dammam (Saudi Arabia), Shuwaikh (Kuwait), Mina Sultan Qaboos (Muscat)" },
      { label: "Transit time", value: "4–7 days Kochi → Jebel Ali; 7–10 days → Dammam" },
      { label: "Incoterms", value: "FOB Kochi, CFR or CIF Jebel Ali or nominated GCC port" },
      { label: "Packing", value: "60 kg jute bags; vacuum packed or GrainPro on request" },
      { label: "MOQ", value: "1 FCL (≈ 19.2 MT in a 20ft container)" },
      { label: "EUDR", value: "Compliant documentation available" },
      { label: "Certification", value: "Rainforest Alliance certified lots available" },
    ],
    sections: [
      {
        heading: "Indian coffee for gahwa, espresso and specialty blending in the GCC",
        body: [],
        bullets: [
          "Gahwa (Arabic coffee): Monsooned Malabar — earthy, low-acid, full body — is the traditional Indian origin for gahwa blends; Arabica Plantation and MNEB provide the balanced base notes",
          "Commercial espresso (café chains, QSR): Robusta AAA/AA natural from Coorg adds body and crema to espresso blends; MNEB as Arabica base delivers the sweetness and balance that GCC blenders prefer",
          "Specialty espresso and filter: Arabica Plantation Specialty (82+ SCA) and MNEB selected lots are used by UAE specialty roasters building single-origin Indian offerings for the growing Dubai and Abu Dhabi specialty scene",
          "Green coffee for UAE roasters: Versa supplies unroasted green coffee directly to UAE-based roasters in FCL quantities; short transit means fresher, more consistent lots than longer-haul origins",
        ],
      },
      {
        heading: "Established UAE supply track record",
        body: [
          "Versa International Traders has traded 160 MT of coffee beans to the UAE — the equivalent of approximately 8 × 20ft container loads. Versa Logistics has shipped 17 × 40ft container loads of coffee beans to Jebel Ali and Khorfakkan. The documentation, carrier relationships and customs procedures for India-to-UAE coffee are well-established, reducing first-shipment friction for new UAE buyers.",
        ],
      },
    ],
    faqs: [
      MNEB_FAQS[0],
      MNEB_FAQS[3],
      INTL_COFFEE_FAQS[4],
      {
        question: "How long does sea freight from Kochi to Jebel Ali take?",
        answer:
          "4–7 days on direct vessel services — the shortest sea freight route for Indian coffee export. Versa Logistics books weekly sailings from Kochi to Jebel Ali and can quote CIF Jebel Ali or FOB Kochi. Contact +91 97464 33133 for rates.",
      },
      {
        question: "Can Versa supply green coffee to Saudi Arabia and Qatar?",
        answer:
          "Yes. Shipments are routed via Jebel Ali as a transshipment hub to Dammam (Saudi Arabia), Hamad Port (Qatar), Shuwaikh Port (Kuwait) and Mina Sultan Qaboos (Oman). Transit time from Kochi to Saudi Arabian Gulf ports is typically 7–12 days. Contact us at +91 97464 33133.",
      },
    ],
    related: ["mysore-nuggets-extra-bold-india", "coffee-beans-supplier-uae-dubai", "robusta-aaa-natural-india-2026"],
  },
]
