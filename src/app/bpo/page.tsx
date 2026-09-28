import type { Metadata } from "next"
import { BPO } from "@/lib/data"
import { VentureLandingPage } from "@/components/sections/VentureLandingPage"

export const metadata: Metadata = {
  title: { absolute: BPO.metaTitle },
  description: BPO.metaDescription,
  keywords: BPO.keywords,
  alternates: { canonical: "/bpo" },
  openGraph: { title: BPO.metaTitle, description: BPO.metaDescription, url: "/bpo" },
}

export default function Page() {
  return <VentureLandingPage data={BPO} />
}
