import { BLOG_POSTS, DIGITAL_FAQS, GROUP_FAQS, LIVE_WORK, LOGISTICS_PAGES, NEWS, PHONES, SITE, TRADERS_PAGES, VENTURES } from "@/lib/data"

export const dynamic = "force-static"

// Plain-text summary of the site for AI systems (https://llmstxt.org)
export function GET() {
  const url = (path: string) => `${SITE.url}${path}`
  const news = [...NEWS].sort((a, b) => b.date.localeCompare(a.date))
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))

  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `- Founded: ${SITE.founded}`,
    `- Address: ${SITE.address.full}`,
    `- Phone: ${PHONES.map((p) => p.display).join(", ")}`,
    `- Email: ${SITE.email}`,
    `- Website: ${SITE.url}`,
    "",
    "## Ventures",
    ...VENTURES.map((v) => `- [${v.name}](${v.liveUrl ?? url(v.href)}): ${v.summary}`),
    "",
    `## Live work (${LIVE_WORK.asOf})`,
    ...LIVE_WORK.items.map((i) => `- ${i.count} ${i.label}: ${i.detail}`),
    "",
    "## Versa Logistics",
    `- [Versa Logistics overview](${url("/logistics")})`,
    `- [Freight quotation](${url("/logistics/freight-quote")})`,
    ...LOGISTICS_PAGES.map((p) => `- [${p.navLabel}](${url(`/logistics/${p.slug}`)}): ${p.summary}`),
    "",
    "## Versa International Traders",
    `- [Versa International Traders overview](${url("/traders")})`,
    ...TRADERS_PAGES.map((p) => `- [${p.navLabel}](${url(`/traders/${p.slug}`)}): ${p.summary}`),
    "",
    "## News",
    ...news.map((n) => `- [${n.title}](${url(`/news/${n.slug}`)}) (${n.dateLabel}): ${n.lede}`),
    "",
    "## Guides",
    ...posts.map((p) => `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.answer}`),
    "",
    "## Frequently asked questions",
    ...[...GROUP_FAQS, ...DIGITAL_FAQS].flatMap((f) => [`### ${f.question}`, f.answer, ""]),
    "## More",
    `- [About](${url("/about")})`,
    `- [Leadership](${url("/leadership")})`,
    `- [FAQ](${url("/faq")})`,
    `- [Glossary](${url("/glossary")})`,
    `- [Contact](${url("/contact")})`,
    `- [Sitemap](${url("/sitemap.xml")})`,
    "",
  ]

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  })
}
