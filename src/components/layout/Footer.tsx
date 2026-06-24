import Link from "next/link"
import { siteConfig, ventures } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#060E07] border-t border-[#4A7C59]/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#8FBC5A] flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="font-playfair text-white text-xl font-semibold">
                Versa Growth Ventures
              </span>
            </div>
            <p className="text-[#A8B89A] text-sm leading-relaxed max-w-sm">
              A diversified growth ecosystem spanning education, technology, trading, exports, digital marketing, and AI innovation.
            </p>
          </div>

          <div>
            <h4 className="text-[#8FBC5A] font-semibold mb-4 text-sm tracking-wider uppercase">Our Ventures</h4>
            <div className="flex flex-col gap-2">
              {ventures.filter(v => !v.comingSoon).map((v) => (
                <a key={v.id} href={v.url} className="text-[#A8B89A] hover:text-white transition-colors text-sm">
                  {v.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#8FBC5A] font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <div className="flex flex-col gap-2 text-[#A8B89A] text-sm">
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.email}</span>
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4A7C59]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A8B89A] text-sm">
            &copy; {new Date().getFullYear()} Versa Growth Ventures. All rights reserved.
          </p>
          <p className="text-[#A8B89A] text-sm">
            Built by{" "}
            <span className="text-[#8FBC5A]">Loopgen Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
