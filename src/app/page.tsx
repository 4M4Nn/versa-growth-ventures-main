import type { Metadata } from "next"
import CinematicOpening from "@/components/sections/CinematicOpening"
import Hero from "@/components/sections/Hero"
import Metrics from "@/components/sections/Metrics"
import VenturesBento from "@/components/sections/VenturesBento"
import Mission from "@/components/sections/Mission"
import ScrollStatement from "@/components/sections/ScrollStatement"
import Contact from "@/components/sections/Contact"

export const metadata: Metadata = {
  title: "Versa Growth Ventures — Diversified Growth. Powered by AI.",
  description: "Six ventures. One vision. Infinite growth. Kerala's premier multi-venture enterprise spanning banking education, AI, digital marketing, study abroad, trading and exports.",
}

export default function HomePage() {
  return (
    <main>
      <CinematicOpening />
      <Hero />
      <Metrics />
      <VenturesBento />
      <Mission />
      <ScrollStatement />
      <Contact />
    </main>
  )
}
