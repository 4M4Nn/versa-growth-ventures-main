import type { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://versagrowthventures.com"
  const staticPages = ["/", "/about", "/ventures", "/blog", "/schemes", "/faq", "/contact"].map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }))

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
