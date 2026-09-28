import type { FAQ, FAQGroup } from "@/types"
import { LOGISTICS_FAQS } from "./logistics"
import { TRADERS_FAQS } from "./traders"

export const GROUP_FAQS: FAQ[] = [
  {
    question: "What is Versa Growth Ventures?",
    answer:
      "Versa Growth Ventures is a business group headquartered in Kakkanad, Kochi, Kerala. It runs four ventures: Versa Logistics (sea freight, freight forwarding and transportation), Versa Traders (export of green coffee beans, cardamom and black pepper), Versa Digital & IT Solutions (digital marketing, AEO and software) and Versa Global (study abroad and careers).",
  },
  {
    question: "Who are the founders of Versa Growth Ventures?",
    answer:
      "Versa Growth Ventures was founded by Sandeep Neelamana, Aman Faisal S and Sreenivasa Prabhu, who lead finance and compliance, digital and growth, and strategy and international markets respectively.",
  },
  {
    question: "Where is Versa Growth Ventures located?",
    answer:
      "Our office is on the 3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021, India. Versa Digital & IT Solutions and Versa Global operate from the same address.",
  },
  {
    question: "How can I contact Versa Growth Ventures?",
    answer:
      "Call +91 97464 33133, +91 97467 33133 or +91 79072 15816, message us on WhatsApp at +91 79072 15816, or send an enquiry through the contact form on this website.",
  },
  {
    question: "Are Versa Logistics and Versa Traders the same company?",
    answer:
      "They are two ventures of the same group. Versa Traders buys and sells coffee and spices; Versa Logistics provides freight and transportation. Buyers can use them together — product and freight in one conversation — or separately.",
  },
  {
    question: "Where can I find Versa Digital & IT Solutions and Versa Global?",
    answer:
      "Versa Digital & IT Solutions is online at versadigital.in and Versa Global at versaglobal.in. Both are ventures of Versa Growth Ventures.",
  },
  {
    question: "When was Versa Growth Ventures founded?",
    answer: "Versa Growth Ventures was founded in 2025 in Kochi, Kerala.",
  },
]

export const FAQ_GROUPS: FAQGroup[] = [
  { id: "group", title: "About the group", items: GROUP_FAQS },
  { id: "logistics", title: "Versa Logistics — freight & transportation", items: LOGISTICS_FAQS },
  { id: "traders", title: "Versa Traders — coffee & spices", items: TRADERS_FAQS },
]
