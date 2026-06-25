import LoadingScreen from "@/components/loading/LoadingScreen"
import HeroSection from "@/components/sections/HeroSection"
import NumbersSection from "@/components/sections/NumbersSection"
import VenturesSection from "@/components/sections/VenturesSection"
import StatementSection from "@/components/sections/StatementSection"
import MissionSection from "@/components/sections/MissionSection"
import ContactSection from "@/components/sections/ContactSection"
import MobileStickyBar from "@/components/ui/MobileStickyBar"

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <main>
        <HeroSection />
        <NumbersSection />
        <VenturesSection />
        <StatementSection />
        <MissionSection />
        <ContactSection />
      </main>
      <MobileStickyBar />
    </>
  )
}
