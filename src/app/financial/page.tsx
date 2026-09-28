import type { Metadata } from "next"
import { FINANCIAL } from "@/lib/data"
import { VentureLandingPage } from "@/components/sections/VentureLandingPage"

export const metadata: Metadata = {
  title: { absolute: FINANCIAL.metaTitle },
  description: FINANCIAL.metaDescription,
  keywords: FINANCIAL.keywords,
  alternates: { canonical: "/financial" },
  openGraph: { title: FINANCIAL.metaTitle, description: FINANCIAL.metaDescription, url: "/financial" },
}

export default function Page() {
  return <VentureLandingPage data={FINANCIAL} />
}
