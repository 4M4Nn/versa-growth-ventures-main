import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3)

  return (
    <section className="py-14 md:py-20 px-5 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Knowledge Hub</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">Latest Insights</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#4A7C59] hover:text-[#C9A84C] transition-colors">
            View All 9 Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#4A7C59]/20 transition-all duration-300">
              <div className="relative h-52 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#4A7C59] text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-3">
                  <span>{post.date}</span>
                  <span>Â·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-playfair font-bold text-[#1A1A1A] mb-2 group-hover:text-[#4A7C59] transition-colors leading-snug">{post.title}</h3>
                <p className="text-[#6B7280] text-sm line-clamp-2">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#4A7C59] mt-4">
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

