import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CustomCursor from "@/components/CustomCursor"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import MobileStickyCTA from "@/components/MobileStickyCTA"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Versa Growth Ventures — Diversified Growth. Powered by AI.",
  description: "A multi-venture enterprise spanning education, technology, trading, exports, digital marketing, and AI innovation. Kerala, India.",
  keywords: ["Versa Growth Ventures", "IPB Kochi", "Elyra AI", "Versa Digital", "Versa Global", "Kerala ventures"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0C1A0E] text-white antialiased">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  )
}
