import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: "Versa Growth Ventures — Five Ventures, One Vision", template: "%s | Versa Growth Ventures" },
  description: "Kerala's premier multi-venture business group — IPB Kochi, Versa Digital, Versa Global, Versa Finance, and Versa Exports.",
  keywords: ["Versa Growth Ventures", "Kochi", "Kerala", "business group", "IPB Kochi", "Versa Digital", "Versa Global", "Versa Finance"],
  openGraph: { type: "website", locale: "en_IN", url: "https://versagrowthventures.com", siteName: "Versa Growth Ventures" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  )
}
