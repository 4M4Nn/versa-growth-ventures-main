import type { Metadata } from "next"
import { SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Versa Growth Ventures collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-playfair text-4xl font-bold text-[#1B2A4A] mb-2">Privacy Policy</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: June 2025</p>

        <div className="space-y-8 text-[#374151] leading-relaxed">
          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Information We Collect</h2>
            <p>
              When you submit a contact form or book a consultation on {SITE.url}, we collect your name, email address, phone number, and any message you provide. This information is used solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">How We Use Your Information</h2>
            <p>
              Your data is used to: respond to your consultation requests, send relevant updates about our ventures (with your consent), and improve our services. We do not sell or share your personal information with third parties except as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Data Security</h2>
            <p>
              All data submitted through our forms is stored securely using industry-standard encryption. We retain your information only for as long as necessary to fulfil the purpose for which it was collected.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-[#4A7C59] underline">
                {SITE.email}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Contact</h2>
            <p>
              For privacy-related questions, reach us at {SITE.email} or call {SITE.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
