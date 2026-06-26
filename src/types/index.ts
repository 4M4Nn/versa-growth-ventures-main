export interface Venture {
  id: string; num: string; label: string; name: string; sub: string
  story: string; metric: string; metricLabel: string
  url: string; accent: string; bg: string; comingSoon?: boolean
  stats: { value: string; label: string }[]
}
export interface Founder {
  name: string; role: string; monogram: string; color: string
  bio: string; quote: string
}
export interface BlogPost {
  slug: string; title: string; date: string; excerpt: string; tag: string
  body: string
}
export interface FAQ { q: string; a: string }
export interface Scheme { title: string; desc: string; cta: string; tag: string }
export interface NavLink { label: string; href: string }
