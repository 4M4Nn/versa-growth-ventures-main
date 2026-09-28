export interface NavChild {
  label: string
  href: string
  description?: string
  external?: boolean
}

export interface NavLink {
  label: string
  href: string
  children?: NavChild[]
}

export interface Phone {
  display: string
  href: string
}

export interface ImageAsset {
  src: string
  alt: string
  caption: string
}

export interface Venture {
  slug: string
  code: string
  name: string
  sector: string
  summary: string
  description: string
  href: string
  external: boolean
  liveUrl?: string
  liveLabel?: string
  image: ImageAsset
  highlights: string[]
  stats?: { value: string; label: string }[]
  accent: "spice" | "ocean" | "ink" | "brass" | "green"
}

export interface Founder {
  name: string
  role: string
  focus: string
  monogram: string
  bio: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface FAQGroup {
  id: string
  title: string
  items: FAQ[]
}

export interface ContentSection {
  heading: string
  body: string[]
  bullets?: string[]
}

export interface Spec {
  label: string
  value: string
}

export type Division = "logistics" | "traders"

export interface DivisionPage {
  slug: string
  division: Division
  navLabel: string
  h1: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  eyebrow: string
  lede: string
  image: ImageAsset
  summary: string
  intro: string[]
  specs?: Spec[]
  sections: ContentSection[]
  faqs: FAQ[]
  related: string[]
}

export interface NewsItem {
  slug: string
  title: string
  metaDescription: string
  date: string
  dateLabel: string
  division: Division
  kicker: string
  manifest: Spec[]
  image: ImageAsset
  lede: string
  body: ContentSection[]
  keywords: string[]
}

export interface BlogPost {
  slug: string
  title: string
  metaDescription: string
  category: "Logistics" | "Trade" | "Group"
  date: string
  readTime: string
  keywords: string[]
  image: ImageAsset
  excerpt: string
  answer: string
  sections: ContentSection[]
  faqs: FAQ[]
  relatedLinks: { label: string; href: string }[]
}

export interface ImageCredit {
  file: string
  subject: string
  author: string
  license: string
  source: string
}

export interface Headline {
  pre: string
  em?: string
  post?: string
}

export interface SectionCopy {
  index: string
  eyebrow: string
  title: Headline
  body?: string
}

export interface Stat {
  value: string
  label: string
  note: string
}
