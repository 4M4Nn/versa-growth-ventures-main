export const WHATSAPP = "917907215816"
export const PHONE = "+91 7907215816"
export const WA_URL = `https://wa.me/${WHATSAPP}`
export function waMsg(msg: string) { return `${WA_URL}?text=${encodeURIComponent(msg)}` }
