import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"

export default function BlogSection() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Insights</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">From Our Blog</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#4A7C59] font-semibold text-sm hover:gap-2.5 transition-all"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#4A7C59]/20 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-[#EBF5EE] text-[#4A7C59] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] leading-snug mb-3 group-hover:text-[#4A7C59] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-[#6B7280]">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
