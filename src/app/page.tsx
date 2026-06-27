import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import ProblemSection from "@/components/sections/ProblemSection"
import NumbersSection from "@/components/sections/NumbersSection"
import VenturesSection from "@/components/sections/VenturesSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import SchemesSection from "@/components/sections/SchemesSection"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Versa Growth Ventures — Five Ventures, One Vision",
  description: "Kerala&apos;s premier multi-venture business group — IPB Kochi, Versa Digital, Versa Global, Versa Finance, and Versa Exports.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <NumbersSection />
      <VenturesSection />
      <FoundersSection />
      <BlogSection />
      <SchemesSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
