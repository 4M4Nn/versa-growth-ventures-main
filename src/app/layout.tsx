import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"
import { SITE } from "@/lib/data"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: `${SITE.name} — Kerala's Diversified Business Group`, template: `%s | ${SITE.name}` },
  description: "Versa Growth Ventures — Kerala's most ambitious diversified business group. Five ventures: IPB Kochi, Versa Digital, Versa Global, Versa Finance, Versa Exports.",
  keywords: ["Versa Growth Ventures", "Kerala business group", "IPB Kochi", "Versa Digital", "Versa Global", "Versa Finance", "study abroad Kerala"],
  openGraph: { type: "website", locale: "en_IN", siteName: SITE.name },
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
