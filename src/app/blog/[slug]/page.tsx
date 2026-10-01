import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { BLOG_POSTS, BRAND, HOME, PAGE_COPY, SITE } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import { Container } from "@/components/shared/Container"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { Figure } from "@/components/shared/Figure"
import { CoverPlate } from "@/components/shared/CoverPlate"
import { ArticleSections } from "@/components/shared/ArticleSections"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"
import { PostCard } from "@/components/sections/PostCard"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.metaDescription, images: [post.image?.src ?? BRAND.og.src], publishedTime: post.date },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <article>
        <header className="paper-grain border-b border-ink">
          <Container className="pb-12 pt-8 md:pt-10">
            <Breadcrumbs
              items={[
                { label: "Insights", href: "/blog" },
                { label: post.category, href: `/blog/${post.slug}` },
              ]}
            />
            <div className="mx-auto mt-12 max-w-4xl">
              <Eyebrow index={post.category}>
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
              </Eyebrow>
              <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.03] sm:text-5xl md:text-[4rem]">{post.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft md:text-xl">{post.excerpt}</p>
            </div>
          </Container>
        </header>

        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            {post.image ? (
              <Figure image={post.image} aspect="aspect-[16/9]" priority sizes="(min-width: 1024px) 900px, 100vw" />
            ) : (
              post.plate && <CoverPlate plate={post.plate} label={post.category} size="figure" aspect="aspect-[16/10] sm:aspect-[16/7]" />
            )}
            <div className="mt-12 grid gap-4 border-l-2 border-spice bg-paper-2/70 p-6 md:grid-cols-[160px_1fr] md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">Quick answer</p>
              <p className="text-[17px] leading-relaxed">{post.answer}</p>
            </div>
            <div className="prose-ledger mx-auto mt-4 max-w-3xl text-[17px]">
              <ArticleSections sections={post.sections} />
            </div>

            {post.faqs.length > 0 && (
              <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="post-faq">
                <h2 id="post-faq" className="mb-6 font-serif text-4xl leading-tight">
                  Frequently asked questions
                </h2>
                <FAQList items={post.faqs} />
              </section>
            )}

            <nav aria-label="Related pages" className="mx-auto mt-16 max-w-3xl border border-ink">
              <p className="border-b border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">Related from Versa</p>
              <ul>
                {post.relatedLinks.map((l) => (
                  <li key={l.href} className="border-b border-rule last:border-b-0">
                    <Link href={l.href} className="flex items-center justify-between px-5 py-4 font-semibold hover:bg-paper-2">
                      {l.label}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </article>

      {more.length > 0 && (
        <section className="border-t border-ink py-16 md:py-20">
          <Container>
            <h2 className="font-serif text-4xl">More {post.category.toLowerCase()} insights</h2>
            <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTABand title={PAGE_COPY.ventures.ctaTitle} body={PAGE_COPY.ventures.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          image: [`${SITE.url}${post.image?.src ?? BRAND.og.src}`],
          datePublished: post.date,
          dateModified: post.date,
          keywords: post.keywords.join(", "),
          author: { "@type": "Organization", name: SITE.name, url: SITE.url },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
        }}
      />
    </>
  )
}
