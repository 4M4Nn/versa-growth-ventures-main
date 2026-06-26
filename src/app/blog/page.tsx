import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Blog — Insights from Versa Growth Ventures",
  description: "Insights on banking education, digital marketing, study abroad, financial services and Kerala business growth from the Versa team.",
}

export default function BlogPage() {
  return (
    <div className="pt-24 bg-[#080E08] min-h-screen">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">INSIGHTS</p>
        <h1 className="font-playfair text-5xl text-[#F0EDE6] font-bold mb-4">The Versa Blog</h1>
        <p className="text-[#A8B89A] text-lg">Ideas, insights, and intelligence from across our five ventures.</p>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-[#C9A84C]/30 transition-all border border-transparent">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest px-3 py-1 rounded-full" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{post.tag}</span>
                <span className="text-[#4A7C59] text-xs">{post.date}</span>
              </div>
              <h2 className="font-playfair text-xl text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors leading-snug">{post.title}</h2>
              <p className="text-[#A8B89A] text-sm leading-relaxed">{post.excerpt}</p>
              <span className="text-[#C9A84C] text-xs tracking-widest mt-auto">READ MORE →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
