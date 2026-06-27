export interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  metric: string
  metricLabel: string
  image: string
  url: string
  color: string
  features: string[]
  status: "live" | "coming-soon"
}

export interface Founder {
  name: string
  role: string
  monogram: string
  color: string
  bio: string
  expertise: string[]
}

export interface Testimonial {
  name: string
  role: string
  location: string
  venture: string
  quote: string
  rating: number
  image: string
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  author: string
  date: string
  readTime: string
  excerpt: string
  image: string
  body: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
}

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export interface Scheme {
  id: string
  name: string
  badge: string
  price: string
  description: string
  includes: string[]
  terms: string
  cta: string
  highlight: boolean
  color: string
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export interface Industry {
  name: string
  icon: string
  description: string
}
