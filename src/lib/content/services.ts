import type { ContentSection, FAQ, ImageAsset } from "@/types"

export interface VentureLanding {
  slug: "bpo" | "financial"
  name: string
  code: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  eyebrow: string
  h1: string
  lede: string
  answer: string
  image?: ImageAsset
  servicesEyebrow: string
  servicesH2: string
  services: { title: string; body: string }[]
  process?: { step: string; title: string; body: string }[]
  processH2?: string
  clientsH2?: string
  clientsBody?: string
  showClients?: boolean
  sections: ContentSection[]
  faqs: FAQ[]
  cta: { title: string; body: string; label: string; href: string }
  whatsapp: string
  disclaimer?: string
}

export const CLIENTS = ["Future Optima IT Solutions", "IPB Kochi", "Astrum Study Abroad", "Macob IT Solutions"]

export const DIGITAL_STATS = [
  { value: "20+", label: "ERP & custom agent builds" },
  { value: "30+", label: "AI agents built" },
  { value: "20+", label: "Business automations delivered" },
  { value: "20+", label: "Active digital marketing clients" },
]

export const BPO: VentureLanding = {
  slug: "bpo",
  name: "Versa BPO",
  code: "VB",
  metaTitle: "Versa BPO — Business Process Outsourcing, Customer Support & Back-Office Services in Kochi",
  metaDescription:
    "Versa BPO, Kakkanad, Kochi: customer support, telecalling and lead generation, back-office and data processing, CRM and appointment management and digital marketing support. Clients include Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions.",
  keywords: [
    "Versa BPO",
    "BPO company Kochi",
    "BPO services Kerala",
    "business process outsourcing Kakkanad",
    "customer support outsourcing India",
    "telecalling services Kochi",
    "lead generation BPO Kerala",
    "back office outsourcing Kochi",
    "data entry services Kerala",
  ],
  eyebrow: "Venture — Versa BPO",
  h1: "Versa BPO: business process outsourcing, customer support and back-office services from Kochi",
  lede:
    "Your customers call, message and enquire every day. Versa BPO answers, follows up and keeps the records straight — so your own team can focus on the work only they can do.",
  answer:
    "Versa BPO is the business process outsourcing venture of Versa Growth Ventures, based in Kakkanad, Kochi. It provides customer support by phone, chat and email, telecalling and lead generation, back-office and data processing, CRM and appointment management, and digital marketing support. Clients include Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions.",
  image: {
    src: "/images/kakkanad-infopark.jpg",
    alt: "Kakkanad's Infopark IT corridor in Kochi with office buildings among green trees",
    caption: "Fig. — Kakkanad, Kochi — Kerala's IT corridor and home of Versa BPO",
  },
  servicesEyebrow: "Services",
  servicesH2: "What can Versa BPO handle for your business?",
  services: [
    { title: "Customer support", body: "Inbound calls, WhatsApp, chat and email answered in your brand's voice, with issues logged and escalated correctly." },
    { title: "Telecalling & lead generation", body: "Outbound calling to qualify enquiries, follow up leads and book appointments for your sales team." },
    { title: "Admissions & enquiry handling", body: "Course, programme and service enquiries handled end to end for education and training businesses." },
    { title: "Back-office & data processing", body: "Data entry, document processing, record updates and reporting — accurate, confidential and on schedule." },
    { title: "CRM & appointment management", body: "Keeping your CRM clean and current, managing calendars, reminders and follow-ups." },
    { title: "Digital marketing support", body: "Campaign lead handling, social media response and reporting support alongside Versa Digital & IT Solutions." },
  ],
  processH2: "How does outsourcing to Versa BPO work?",
  process: [
    { step: "01", title: "Discovery", body: "We map your process, volumes, hours, systems and the outcomes you measure." },
    { step: "02", title: "Playbook", body: "Scripts, FAQs, escalation paths and quality checks are written and approved with you." },
    { step: "03", title: "Onboarding", body: "Our team is trained on your products and set up on your CRM, phone lines or shared inbox." },
    { step: "04", title: "Go-live & reporting", body: "Work starts with agreed reporting, so you see calls, leads and outcomes every week." },
  ],
  clientsH2: "Businesses Versa BPO works with",
  clientsBody: "From IT companies to study-abroad consultancies, our clients trust us with their customers' first conversation.",
  showClients: true,
  sections: [
    {
      heading: "Why outsource to a BPO in Kochi?",
      body: [
        "Kochi combines a large, well-educated, multilingual workforce with lower operating costs than India's metro cities. Kakkanad, home to Infopark and SmartCity, is Kerala's IT corridor — which makes it a natural base for customer support and back-office work.",
      ],
    },
    {
      heading: "Which languages does Versa BPO support?",
      body: ["Our Kochi team works in English and Malayalam — ideal for businesses serving customers across Kerala and the Malayali community in the Gulf. Tell us which other languages your customers need and we will confirm coverage."],
    },
    {
      heading: "How do you protect client data?",
      body: [
        "Access is limited to the people who need it, work happens on client-approved systems, and confidentiality obligations are agreed in writing before onboarding. We follow each client's own data policies and can sign non-disclosure agreements.",
      ],
    },
    {
      heading: "Who is Versa BPO a good fit for?",
      body: [],
      bullets: [
        "Small and growing businesses that need reliable call and enquiry handling without hiring in-house",
        "Education, training and study-abroad firms with seasonal enquiry peaks",
        "IT and service companies that want consistent lead follow-up",
        "Businesses running digital campaigns that generate more leads than their team can call back",
      ],
    },
  ],
  faqs: [
    {
      question: "What does Versa BPO do?",
      answer:
        "Versa BPO provides business process outsourcing from Kochi — customer support, telecalling and lead generation, admissions and enquiry handling, back-office and data processing, CRM and appointment management, and digital marketing support.",
    },
    {
      question: "Who are Versa BPO's clients?",
      answer: "Clients include Future Optima IT Solutions, IPB Kochi, Astrum Study Abroad and Macob IT Solutions.",
    },
    {
      question: "Where is Versa BPO located?",
      answer: "Versa BPO operates from the Versa Growth Ventures office on the 3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021.",
    },
    {
      question: "Can Versa BPO work on our CRM and phone system?",
      answer: "Yes. We work on your existing CRM, phone lines, WhatsApp or shared inbox, or help you set up a simple system if you do not have one.",
    },
    {
      question: "How is BPO work priced?",
      answer: "Pricing depends on the process, volumes, hours and number of agents. We quote after a short discovery call about your requirements.",
    },
  ],
  cta: {
    title: "Hand us the calls. Keep the customers.",
    body: "Tell us the process, volumes and hours you need covered. We will propose a team and a playbook.",
    label: "Talk to Versa BPO",
    href: "/contact?enquiry=bpo",
  },
  whatsapp: "Hello Versa BPO, I would like to discuss outsourcing ",
}

export const FINANCIAL_STATS = [
  { value: "50+", label: "Trading clients managed" },
  { value: "500+", label: "Insurance policies completed" },
]

export const FINANCIAL: VentureLanding = {
  slug: "financial",
  name: "Versa Financial",
  code: "VF",
  metaTitle: "Versa Financial — Portfolio Management, Trading, Insurance, SIP & Mutual Funds in Kochi",
  metaDescription:
    "Versa Financial, Kochi: portfolio management, trading and money management for 50+ clients, 500+ insurance policies completed (life, health, term), SIPs and mutual funds, and loan assistance. A Versa Growth Ventures company.",
  keywords: [
    "Versa Financial",
    "portfolio management Kochi",
    "trading services Kerala",
    "money management Kochi",
    "life insurance agent Kochi",
    "health insurance Kerala",
    "term insurance Kochi",
    "SIP mutual funds Kochi",
    "financial services Kakkanad",
  ],
  eyebrow: "Venture — Versa Financial",
  h1: "Versa Financial: portfolio management, trading, insurance, SIPs and mutual funds in Kochi, Kerala",
  lede:
    "Grow it, protect it, plan it. Versa Financial manages portfolios and trading for more than 50 clients and has completed over 500 insurance policies — helping families and business owners in Kerala make their money work with discipline.",
  answer:
    "Versa Financial is the financial services venture of Versa Growth Ventures in Kakkanad, Kochi. It offers portfolio management, trading and money management — currently for 50+ clients — insurance planning across life, health and term plans with 500+ policies completed across different schemes, SIP and mutual fund investments, and loan assistance through banks and NBFCs.",
  servicesEyebrow: "Services",
  servicesH2: "What does Versa Financial offer?",
  services: [
    { title: "Portfolio management", body: "Building and reviewing investment portfolios around your goals, risk appetite and time horizon." },
    { title: "Trading", body: "Trading support and account management for active investors — more than 50 clients managed." },
    { title: "Money management", body: "Cash-flow planning, savings discipline and allocation across investments, insurance and goals." },
    { title: "Life, health & term insurance", body: "Policy selection, comparison and servicing — 500+ policies completed across different schemes." },
    { title: "SIPs & mutual funds", body: "Goal-based SIPs and mutual fund selection, with regular reviews as your life and markets change." },
    { title: "Loan assistance", body: "Education, home, business and personal loans — lender options, documents and follow-through." },
  ],
  processH2: "What does working with Versa Financial look like?",
  process: [
    { step: "01", title: "Understand", body: "Your income, goals, commitments, existing investments and risk appetite." },
    { step: "02", title: "Plan", body: "A written plan across protection, investments and trading, with costs explained." },
    { step: "03", title: "Execute", body: "Policies issued, SIPs started, portfolios built — paperwork handled with you." },
    { step: "04", title: "Review", body: "Regular reviews of performance and cover, adjusted as your needs change." },
  ],
  sections: [
    {
      heading: "Why do insurance and investments belong in one plan?",
      body: [
        "Protection comes first: term insurance and health cover stop one emergency from undoing years of saving. Only then do SIPs, mutual funds and portfolios compound as intended. Versa Financial plans both together, so cover and investments support the same goals.",
      ],
    },
    {
      heading: "Term, life and health insurance — what is the difference?",
      body: [],
      bullets: [
        "Term insurance — pure life cover at low premiums; pays your family if you pass away during the term",
        "Life insurance (savings/endowment) — combines cover with savings or maturity benefits",
        "Health insurance — pays hospitalisation and treatment costs for you and your family",
      ],
    },
    {
      heading: "Who leads Versa Financial?",
      body: [
        "Versa Financial draws on co-founder Sandeep Neelamana's experience in financial services, including leadership roles at Reliance Nippon Life Insurance, Future Generali India Insurance and Care Health Insurance, and franchise operations worth over ₹100 crore through AssureX Fin Solutions.",
      ],
    },
    {
      heading: "Can Versa Financial help students going abroad?",
      body: [
        "Yes. Students guided by Versa Global can get education loan and proof-of-funds support from Versa Financial, keeping admission, finance and visa timelines aligned.",
      ],
    },
  ],
  faqs: [
    {
      question: "What services does Versa Financial offer?",
      answer:
        "Portfolio management, trading and money management, life, health and term insurance, SIPs and mutual funds, and loan assistance for individuals, families and businesses in Kerala.",
    },
    {
      question: "How many clients does Versa Financial manage?",
      answer: "Versa Financial manages trading and portfolios for more than 50 clients and has completed over 500 insurance policies across different schemes.",
    },
    {
      question: "Should I start a SIP or buy insurance first?",
      answer: "Generally, secure adequate term and health cover first, then start SIPs. We help you plan both together based on your income and goals.",
    },
    {
      question: "Does Versa Financial give loans directly?",
      answer: "No. Loans are sanctioned by banks and NBFCs; Versa Financial helps you choose lenders and prepare and follow through the application.",
    },
    {
      question: "Where is Versa Financial located?",
      answer: "At the Versa Growth Ventures office on the 3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021.",
    },
  ],
  cta: {
    title: "Make your next money decision with a plan.",
    body: "Tell us whether it is a portfolio, trading account, policy or SIP — we will set up a conversation.",
    label: "Talk to Versa Financial",
    href: "/contact?enquiry=financial",
  },
  whatsapp: "Hello Versa Financial, I would like guidance on ",
  disclaimer:
    "Investments in securities markets and mutual funds are subject to market risks; read all related documents carefully before investing. Past performance does not guarantee future returns, and trading involves risk of loss. Insurance is the subject matter of solicitation. Loan sanction and terms are at the sole discretion of the lending institution.",
}
