import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import LenisProvider from "@/components/providers/LenisProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "Versa Growth Ventures — Diversified Growth | Kerala, India",
  description: "A multi-venture enterprise spanning education, technology, trading, exports, digital marketing, and AI innovation — powered by Kerala's boldest entrepreneurial vision.",
  keywords: ["Versa Growth Ventures", "Kerala business", "IPB Kochi", "AI solutions Kerala", "diversified business Kerala"],
  openGraph: { title: "Versa Growth Ventures", description: "Six ventures. One vision. Infinite scale.", type: "website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#080E08] text-white overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </LenisProvider>
      </body>
    </html>
  )
}
