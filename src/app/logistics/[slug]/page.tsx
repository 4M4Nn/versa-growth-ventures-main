import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LOGISTICS_PAGES } from "@/lib/data"
import { DivisionArticle } from "@/components/sections/DivisionArticle"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return LOGISTICS_PAGES.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = LOGISTICS_PAGES.find((p) => p.slug === slug)
  if (!page) return {}
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/logistics/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, images: [page.image.src], url: `/logistics/${page.slug}` },
  }
}

export default async function LogisticsServicePage({ params }: Props) {
  const { slug } = await params
  const page = LOGISTICS_PAGES.find((p) => p.slug === slug)
  if (!page) notFound()
  return <DivisionArticle page={page} siblings={LOGISTICS_PAGES} />
}
