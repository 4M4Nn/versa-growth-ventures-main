import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"

export default function BlogSection() {
  return (
    <section className="py-24 bg-[#050A05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">INSIGHTS</p>
            <h2 className="font-playfair text-4xl text-[#F0EDE6]">From the Versa Blog</h2>
          </div>
          <Link href="/blog" className="hidden md:inline-flex text-sm tracking-widest text-[#C9A84C] border border-[#C9A84C]/30 px-5 py-2 hover:bg-[#C9A84C]/10 transition-colors">VIEW ALL</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-[#C9A84C]/30 transition-all border border-transparent">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest px-3 py-1 rounded-full" style={{ background: "#C9A84C20", color: "#C9A84C" }}>{post.tag}</span>
                <span className="text-[#4A7C59] text-xs">{post.date}</span>
              </div>
              <h3 className="font-playfair text-lg text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors leading-snug">{post.title}</h3>
              <p className="text-[#A8B89A] text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
              <span className="text-[#C9A84C] text-xs tracking-widest mt-auto">READ MORE →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
