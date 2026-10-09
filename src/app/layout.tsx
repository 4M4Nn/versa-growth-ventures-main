import type { Metadata, Viewport } from "next"
import { Instrument_Serif, JetBrains_Mono, Manrope } from "next/font/google"
import "lenis/dist/lenis.css"
import "./globals.css"
import { TopBar } from "@/components/layout/TopBar"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp"
import { SmoothFlow } from "@/components/layout/SmoothFlow"
import { JsonLd } from "@/components/shared/JsonLd"
import { BRAND, EXTERNAL, FOUNDERS, PHONES, SITE } from "@/lib/data"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" })
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Versa Growth Ventures — Diversified Venture Group in Kochi, Kerala",
    template: "%s | Versa Growth Ventures",
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    url: SITE.url,
    title: "Versa Growth Ventures — Diversified Venture Group in Kochi, Kerala",
    description: SITE.description,
    images: [{ url: BRAND.og.src, width: BRAND.og.width, height: BRAND.og.height, alt: "Versa Growth Ventures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Versa Growth Ventures",
    description: SITE.description,
    images: [BRAND.og.src],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "business",
}

export const viewport: Viewport = {
  themeColor: "#15130f",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Versa Group",
  url: SITE.url,
  logo: `${SITE.url}${BRAND.logo.src}`,
  image: `${SITE.url}${BRAND.og.src}`,
  description: SITE.description,
  foundingDate: SITE.founded,
  email: SITE.email,
  founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.countryCode,
  },
  contactPoint: PHONES.map((p) => ({
    "@type": "ContactPoint",
    telephone: p.href,
    contactType: "sales",
    areaServed: ["IN", "AE", "Worldwide"],
    availableLanguage: ["English", "Malayalam", "Hindi"],
  })),
  subOrganization: [
    { "@type": "Organization", name: "Versa Logistics", url: `${SITE.url}/logistics` },
    { "@type": "Organization", name: "Versa International Traders", url: `${SITE.url}/traders` },
    { "@type": "Organization", name: "Versa BPO", url: `${SITE.url}/bpo` },
    { "@type": "Organization", name: "Versa Financial", url: `${SITE.url}/financial` },
    { "@type": "Organization", name: EXTERNAL.digital.name, url: EXTERNAL.digital.url },
    { "@type": "Organization", name: EXTERNAL.global.name, url: EXTERNAL.global.url },
  ],
  sameAs: [EXTERNAL.digital.url, EXTERNAL.global.url],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <TopBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <SmoothFlow />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  )
}
