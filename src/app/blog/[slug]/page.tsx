import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BLOG_POSTS, WA_URL } from "@/lib/data"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()
  return (
    <div className="pt-24 bg-[#080E08] min-h-screen">
      <article className="py-20 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="text-[#C9A84C] text-xs tracking-widest uppercase mb-8 inline-block hover:underline">← BACK TO BLOG</Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs tracking-widest px-3 py-1 rounded-full" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{post.tag}</span>
          <span className="text-[#4A7C59] text-xs">{post.date}</span>
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl text-[#F0EDE6] font-bold mb-8 leading-tight">{post.title}</h1>
        <p className="text-[#A8B89A] text-lg leading-relaxed mb-10 border-l-2 border-[#C9A84C] pl-4 italic">{post.excerpt}</p>
        <div className="space-y-4">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-[#A8B89A] leading-relaxed">{para}</p>
          ))}
        </div>
        <div className="mt-16 p-8 glass-card rounded-2xl text-center">
          <p className="font-playfair text-2xl text-[#F0EDE6] mb-3">Ready to Take the Next Step?</p>
          <p className="text-[#A8B89A] text-sm mb-6">Connect with our team for a free consultation.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C9A84C] text-[#080E08] font-bold text-sm tracking-widest uppercase">Chat on WhatsApp</a>
        </div>
      </article>
    </div>
  )
}
