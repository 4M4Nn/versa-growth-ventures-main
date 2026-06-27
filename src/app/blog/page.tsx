import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Blog — Knowledge Hub",
  description: "Insights on banking education, study abroad, digital marketing, investment, and business growth from the Versa Growth Ventures team.",
}

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))]

export default function BlogPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-[#0F1F15] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Knowledge Hub</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Insights That Drive Growth</h1>
          <p className="text-white/70">Expert perspectives on banking, study abroad, marketing, and investing.</p>
        </div>
      </section>

      <section className="py-4 px-4 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {CATEGORIES.map((cat) => (
            <span key={cat} className="shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 text-[#374151] hover:border-[#4A7C59] hover:text-[#4A7C59] cursor-pointer transition-colors">
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto">
          {/* Featured post */}
          <div className="mb-12">
            <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all">
              <div className="relative h-72 md:h-auto overflow-hidden">
                <Image src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#4A7C59] text-white text-xs font-bold px-3 py-1 rounded-full">{BLOG_POSTS[0].category}</span>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-3">Featured</span>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#4A7C59] transition-colors">{BLOG_POSTS[0].title}</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{BLOG_POSTS[0].excerpt}</p>
                <div className="text-xs text-[#94A3B8] mb-5">{BLOG_POSTS[0].author} · {BLOG_POSTS[0].date} · {BLOG_POSTS[0].readTime}</div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#4A7C59]">Read Full Article <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#4A7C59]/20 transition-all">
                <div className="relative h-44 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-[#4A7C59] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{post.category}</span>
                </div>
                <div className="p-5">
                  <div className="text-[11px] text-[#94A3B8] mb-2">{post.date} · {post.readTime}</div>
                  <h3 className="font-playfair font-bold text-[#1A1A1A] text-sm mb-2 group-hover:text-[#4A7C59] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-[#6B7280] text-xs line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
