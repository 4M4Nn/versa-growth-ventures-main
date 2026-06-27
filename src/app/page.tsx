"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import IntroAnimation from "@/components/ui/IntroAnimation"
import HeroSection from "@/components/sections/HeroSection"
import TrustBadges from "@/components/sections/TrustBadges"
import StatsSection from "@/components/sections/StatsSection"
import AboutPreview from "@/components/sections/AboutPreview"
import VenturesShowcase from "@/components/sections/VenturesShowcase"
import WhyChooseSection from "@/components/sections/WhyChooseSection"
import MissionVision from "@/components/sections/MissionVision"
import ApproachSection from "@/components/sections/ApproachSection"
import FoundersSection from "@/components/sections/FoundersSection"
import MilestonesSection from "@/components/sections/MilestonesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import IndustriesSection from "@/components/sections/IndustriesSection"
import BlogPreview from "@/components/sections/BlogPreview"
import SchemesPreview from "@/components/sections/SchemesPreview"
import FAQPreview from "@/components/sections/FAQPreview"
import CTABanner from "@/components/sections/CTABanner"
import ContactSection from "@/components/sections/ContactSection"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const seen = sessionStorage.getItem("versa-intro-seen")
    if (!seen) {
      setShowIntro(true)
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem("versa-intro-seen", "1")
    setShowIntro(false)
  }

  if (!mounted) return null

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <div className="pt-16 md:pt-20">
        <HeroSection />
        <TrustBadges />
        <StatsSection />
        <AboutPreview />
        <VenturesShowcase />
        <WhyChooseSection />
        <MissionVision />
        <ApproachSection />
        <FoundersSection />
        <MilestonesSection />
        <TestimonialsSection />
        <IndustriesSection />
        <BlogPreview />
        <SchemesPreview />
        <FAQPreview />
        <CTABanner />
        <ContactSection />
      </div>
    </>
  )
}
