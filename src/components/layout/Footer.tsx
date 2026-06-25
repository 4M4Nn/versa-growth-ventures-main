"use client"
import { siteConfig, ventures } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#050A05] pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-playfair font-bold text-xl text-white mb-3">VERSA<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C] ml-1 align-middle" /></p>
            <p className="text-[#5A6B5C] text-sm font-inter leading-relaxed">Six ventures. One vision. Building Kerala&apos;s most diversified growth ecosystem.</p>
          </div>
          <div>
            <p className="label text-[#C9A84C] mb-4">Ventures</p>
            <ul className="space-y-2">
              {ventures.map(v => (
                <li key={v.id}>
                  {v.url ? <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#5A6B5C] hover:text-white transition-colors font-inter">{v.name}</a>
                  : <span className="text-sm text-[#5A6B5C]/50 font-inter">{v.name} <span className="text-[10px] border border-[#5A6B5C]/30 px-1 py-0.5 rounded">Soon</span></span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-[#C9A84C] mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-[#5A6B5C] font-inter">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-white/25 font-inter">© {new Date().getFullYear()} Versa Growth Ventures</p>
          <p className="text-xs text-white/25 font-inter">Crafted by Loopgen Technologies</p>
        </div>
      </div>
    </footer>
  )
}
