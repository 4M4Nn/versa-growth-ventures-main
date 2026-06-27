import type { Metadata } from "next"
import FAQClient from "./FAQClient"

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description: "15 frequently asked questions about Versa Growth Ventures, IPB Kochi banking courses, Versa Global study abroad, Versa Digital marketing, and Versa Finance investment.",
}

export default function FAQPage() {
  return <FAQClient />
}
