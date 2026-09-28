import type { MetadataRoute } from "next"
import { BLOG_POSTS, LOGISTICS_PAGES, NEWS, SITE, TRADERS_PAGES, VENTURES } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entry = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], lastModified: Date = now) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  })

  return [
    entry("/", 1, "weekly"),
    entry("/logistics", 0.95, "weekly"),
    entry("/logistics/freight-quote", 0.95, "weekly"),
    entry("/traders", 0.95, "weekly"),
    ...LOGISTICS_PAGES.map((p) => entry(`/logistics/${p.slug}`, 0.9, "monthly")),
    ...TRADERS_PAGES.map((p) => entry(`/traders/${p.slug}`, 0.9, "monthly")),
    entry("/ventures", 0.8, "monthly"),
    entry("/bpo", 0.9, "monthly"),
    entry("/financial", 0.9, "monthly"),
    ...VENTURES.filter((v) => v.external).map((v) => entry(`/ventures/${v.slug}`, 0.6, "monthly")),
    entry("/news", 0.8, "weekly"),
    ...NEWS.map((n) => entry(`/news/${n.slug}`, 0.75, "monthly", new Date(n.date))),
    entry("/blog", 0.8, "weekly"),
    ...BLOG_POSTS.map((p) => entry(`/blog/${p.slug}`, 0.7, "monthly", new Date(p.date))),
    entry("/about", 0.7, "monthly"),
    entry("/leadership", 0.7, "monthly"),
    entry("/faq", 0.8, "monthly"),
    entry("/glossary", 0.7, "monthly"),
    entry("/site-map", 0.4, "monthly"),
    entry("/contact", 0.8, "yearly"),
    entry("/image-credits", 0.2, "yearly"),
  ]
}
