import { createClient } from "@supabase/supabase-js"

export interface LeadPayload {
  name: string
  phone: string
  email?: string
  company?: string
  service_interested?: string
  message?: string
}

// Leads land in the shared versa_leads table read by the Versa admin dashboard.
export async function saveLead(lead: LeadPayload) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error("Lead storage is not configured")
  const supabase = createClient(url, key)
  const { error } = await supabase.from("versa_leads").insert([{ ...lead, source_website: "versa-main", status: "new" }])
  if (error) throw error
}
