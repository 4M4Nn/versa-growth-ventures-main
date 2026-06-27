export interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  href: string
  color: string
  badge?: string
}

export interface Founder {
  name: string
  role: string
  monogram: string
  color: string
  bio: string
}

export interface Testimonial {
  name: string
  role: string
  location: string
  quote: string
  rating: number
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface TrustBadge {
  icon: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Scheme {
  icon: string
  title: string
  venture: string
  description: string
  eligibility: string
  cta: string
}
