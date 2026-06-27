import type { Metadata } from "next"
import { SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Versa Growth Ventures website and services.",
}

export default function TermsPage() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-playfair text-4xl font-bold text-[#1B2A4A] mb-2">Terms of Service</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: June 2025</p>

        <div className="space-y-8 text-[#374151] leading-relaxed">
          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Use of Website</h2>
            <p>
              By accessing {SITE.url}, you agree to use this website for lawful purposes only. You must not use this site in any way that causes damage to the site or impairs the availability or accessibility of the website.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Services</h2>
            <p>
              Versa Growth Ventures provides information about our five business ventures. Specific service terms, fees, and conditions are discussed and agreed upon directly with the relevant venture team prior to engagement.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Financial Advisory Disclaimer</h2>
            <p>
              Investment advisory services are provided by Versa Finance, a SEBI-registered entity. All investment decisions are subject to market risks. Past performance is not indicative of future results. Please read all scheme-related documents carefully before investing.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Versa Growth Ventures or its content suppliers. Unauthorized use or reproduction is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Limitation of Liability</h2>
            <p>
              Versa Growth Ventures shall not be liable for any indirect or consequential losses arising from your use of this website. The information provided is for general guidance only.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Contact</h2>
            <p>
              For any questions regarding these terms, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-[#4A7C59] underline">
                {SITE.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
