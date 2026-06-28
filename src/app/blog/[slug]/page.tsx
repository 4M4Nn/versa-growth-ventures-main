import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Tag } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: "Article Not Found" }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  const paragraphs = post.body.split("\n\n").filter(Boolean)

  return (
    <div className="pt-16 md:pt-20">
      <div className="relative h-[55vh] min-h-[350px]">
        <Image src={post.image} alt={post.title} fill unoptimized className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="absolute bottom-10 left-0 right-0 px-4">
          <div className="max-w-4xl mx-auto">
            <span className="bg-[#4A7C59] text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-5 text-sm text-[#6B7280]">
          <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Tag size={14} /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          <Link href="/blog" className="ml-auto flex items-center gap-1.5 text-[#4A7C59] font-semibold hover:underline"><ArrowLeft size={14} /> All Articles</Link>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-[#374151] leading-relaxed mb-6 font-medium border-l-4 border-[#4A7C59] pl-5 italic">{post.excerpt}</p>
          <div className="prose prose-gray max-w-none">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[#374151] leading-relaxed mb-5">{p.replace(/&apos;/g, "'")}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#4A7C59] text-white text-lg font-bold flex items-center justify-center shrink-0">
              {post.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A]">{post.author}</p>
              <p className="text-[#6B7280] text-sm">Expert, Versa Growth Ventures</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-16 px-4 bg-[#F8FAF9]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-40">
                    <Image src={rp.image} alt={rp.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-[#1A1A1A] text-sm group-hover:text-[#4A7C59] transition-colors line-clamp-2">{rp.title}</p>
                    <p className="text-[#94A3B8] text-xs mt-1">{rp.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
