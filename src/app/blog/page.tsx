import type { Metadata } from "next"
import { BLOG_POSTS, PAGE_COPY } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { PostCard } from "@/components/sections/PostCard"

const copy = PAGE_COPY.blog

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))
  const categories = Array.from(new Set(sorted.map((p) => p.category)))
  return (
    <>
      <PageHero crumbs={[{ label: "Insights", href: "/blog" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} />
      {categories.map((cat, i) => (
        <section key={cat} className="border-b border-ink py-16 md:py-20">
          <Container>
            <Eyebrow index={String(i + 1).padStart(2, "0")}>{cat}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{copy.categoryTitles[cat]}</h2>
            <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {sorted
                .filter((p) => p.category === cat)
                .map((p) => (
                  <li key={p.slug}>
                    <PostCard post={p} />
                  </li>
                ))}
            </ul>
          </Container>
        </section>
      ))}
    </>
  )
}
