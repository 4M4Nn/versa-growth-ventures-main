import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { BLOG_POSTS, SITE } from "@/lib/data"

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  }
}

const EXTENDED_CONTENT: Record<string, string[]> = {
  "banking-career-kerala-2025": [
    "Kerala's banking sector has seen unprecedented growth in recent years, driven by increased financial literacy, government initiatives, and the expansion of both public and private sector banks into tier-2 and tier-3 cities.",
    "Candidates with specialized banking qualifications command a significant advantage in the job market. Courses like CBFS (Certificate in Banking and Financial Services) offered by IPB Kochi have become a gold standard for employers looking for job-ready talent.",
    "The key pathways into banking in Kerala include IBPS PO and Clerk exams, SBI recruitment, private sector lateral entry, and cooperative bank vacancies. Each route demands a different preparation strategy.",
    "Soft skills — particularly customer relationship management and digital banking proficiency — are now weighted equally alongside technical knowledge in most bank hiring processes.",
    "Experts project over 8,000 new banking vacancies in Kerala by end of 2025, making this one of the most promising career windows the state has seen in a decade.",
  ],
  "digital-marketing-trends-2025": [
    "The digital marketing landscape in Kerala is evolving rapidly. Businesses that were hesitant about social media advertising just two years ago are now running sophisticated multi-channel campaigns.",
    "AI-powered tools have dramatically reduced the cost of content creation. Kerala SMEs are now producing professional-grade video content and leveraging AI copywriting to compete with larger brands.",
    "Hyper-local targeting has emerged as the most cost-effective approach for Kerala businesses. Campaigns targeting specific taluks and panchayats consistently outperform generic state-wide campaigns in terms of lead quality.",
    "Short-form video dominates engagement metrics across all demographics in Kerala, with Malayalam-language content seeing 3× higher engagement than English-language equivalents on most platforms.",
    "The rise of WhatsApp Business as a sales channel has been particularly impactful — businesses using WhatsApp-integrated lead funnels report 40% faster conversion cycles.",
  ],
  "study-abroad-guide-2025": [
    "Choosing the right destination for higher education is one of the most consequential decisions a student will make. The right choice depends on your field of study, financial situation, career goals, and personal preferences.",
    "The UK remains the top destination for Kerala students seeking one-year master's programs, offering high-quality education with a shorter total duration than most alternatives.",
    "Canada continues to attract students seeking post-graduation work permits and permanent residency pathways, particularly for technology and business programs.",
    "Germany has emerged as an increasingly popular choice for engineering and STEM students, with many public universities offering free or low-cost education even for international students.",
    "Australia's proximity, multicultural environment, and strong economy make it a consistent choice for students across disciplines, with particular strength in nursing, IT, and business.",
    "Working with a registered education consultancy like Versa Global dramatically improves your chances of visa approval and university placement, as documentation errors remain the primary cause of rejected applications.",
  ],
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const content = EXTENDED_CONTENT[slug] ?? [post.excerpt]
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-white">
      {/* Back */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#4A7C59] text-sm font-medium hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>

      {/* Header */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        <span className="inline-block bg-[#EBF5EE] text-[#4A7C59] text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A] leading-snug mb-4">{post.title}</h1>
        <p className="text-[#6B7280] text-sm mb-6">{post.date} · Versa Growth Ventures</p>

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        {/* Body */}
        <div className="prose prose-lg max-w-none">
          {content.map((para, i) => (
            <p key={i} className="text-[#374151] leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#EBF5EE] rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-3">
            Ready to take the next step?
          </h3>
          <p className="text-[#6B7280] mb-6">
            Our experts are here to guide you. Book a free consultation today.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4A7C59] text-white font-semibold px-7 py-3 rounded-lg hover:bg-[#3A6249] transition-colors"
          >
            Talk to an Expert
          </a>
        </div>
      </article>
    </div>
  )
}
