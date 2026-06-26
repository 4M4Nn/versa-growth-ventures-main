import type { Metadata } from "next"
import ClientWrapper from "@/components/layout/ClientWrapper"
import HeroSection from "@/components/sections/HeroSection"
import ProblemSection from "@/components/sections/ProblemSection"
import NumbersSection from "@/components/sections/NumbersSection"
import VenturesSection from "@/components/sections/VenturesSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import SchemesSection from "@/components/sections/SchemesSection"

export const metadata: Metadata = {
  title: "Versa Growth Ventures — Five Ventures, One Vision",
  description: "Kerala's premier multi-venture business group — IPB Kochi, Versa Digital, Versa Global, Versa Finance, and Versa Exports.",
}

export default function HomePage() {
  return (
    <ClientWrapper>
      <HeroSection />
      <ProblemSection />
      <NumbersSection />
      <VenturesSection />
      <FoundersSection />
      <BlogSection />
      <FAQSection />
      <SchemesSection />
    </ClientWrapper>
  )
}
