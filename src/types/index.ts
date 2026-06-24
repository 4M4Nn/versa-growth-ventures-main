export interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  color: string
  stat: string
  url: string
  size: "large" | "medium" | "small"
  comingSoon: boolean
}

export interface LeadFormData {
  name: string
  phone: string
  email?: string
  company?: string
  service_interested?: string
  message?: string
}

export interface Metric {
  label: string
  value: number
  suffix: string
}
