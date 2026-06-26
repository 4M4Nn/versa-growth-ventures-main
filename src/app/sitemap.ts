import type { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://versagrowthventures.com"
  const routes = ["/", "/about", "/ventures", "/blog", "/contact"]
  return [
    ...routes.map(r => ({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: r === "/" ? 1 : 0.8 })),
    ...BLOG_POSTS.map(p => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
  ]
}
