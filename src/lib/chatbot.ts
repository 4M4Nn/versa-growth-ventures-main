import { SITE, VENTURES, FOUNDERS, FAQS, SCHEMES, STATS } from "@/lib/data"

export interface ChatReply {
  text: string
  quickReplies?: string[]
}

export const CHAT_QUICK_START = ["Our ventures", "Schemes & offers", "Contact us", "Who are the founders?"]

export const GREETING: ChatReply = {
  text: `Hi! I'm the Versa Assistant. Ask me about our five ventures (IPB Kochi, Versa Digital, Versa Global, Versa Finance, Versa Exports), schemes, founders, or how to get in touch — or tap a quick option below.`,
  quickReplies: CHAT_QUICK_START,
}

function findVentureMatch(input: string) {
  return VENTURES.find((v) => {
    const name = v.name.toLowerCase()
    if (input.includes(name)) return true
    return name.split(" ").some((w) => w.length > 3 && input.includes(w))
  })
}

function findFounderMatch(input: string) {
  return FOUNDERS.find((f) => {
    const firstName = f.name.split(" ")[0].toLowerCase()
    return input.includes(firstName) || input.includes(f.role.toLowerCase())
  })
}

function findFaqMatch(input: string) {
  const inputWords = new Set(input.split(/\W+/).filter((w) => w.length > 3))
  let best: { score: number; faq: (typeof FAQS)[number] } | null = null

  for (const faq of FAQS) {
    const questionWords = faq.question.toLowerCase().split(/\W+/)
    const score = questionWords.filter((w) => inputWords.has(w)).length
    if (score > 0 && (!best || score > best.score)) {
      best = { score, faq }
    }
  }
  return best && best.score >= 2 ? best.faq : null
}

export function getBotReply(rawInput: string): ChatReply {
  const input = rawInput.trim().toLowerCase()

  if (!input) return GREETING
  if (/^(hi|hello|hey|namaste|hii+)\b/.test(input)) return GREETING

  const venture = findVentureMatch(input)
  if (venture) {
    return {
      text: `${venture.name} — ${venture.tagline}. ${venture.description} ${venture.status === "live" ? `Visit: ${venture.url}` : "(Coming soon)"}`,
      quickReplies: ["Our ventures", "Schemes & offers", "Contact us"],
    }
  }

  if (/venture|ipb|digital|global|finance|export|business group|five ventures/.test(input)) {
    const list = VENTURES.map((v) => `• ${v.name} — ${v.tagline}${v.status === "coming-soon" ? " (coming soon)" : ""}`).join("\n")
    return {
      text: `Versa Growth Ventures runs five ventures:\n${list}\n\nAsk me about any one by name for more detail.`,
      quickReplies: ["Schemes & offers", "Contact us"],
    }
  }

  const founder = findFounderMatch(input)
  if (founder) {
    return {
      text: `${founder.name} — ${founder.role}. ${founder.bio}`,
      quickReplies: ["Our ventures", "Contact us"],
    }
  }

  if (/founder|who (started|runs|owns|founded)|leadership|team\b/.test(input)) {
    const list = FOUNDERS.map((f) => `• ${f.name} — ${f.role}`).join("\n")
    return {
      text: `Versa Growth Ventures was co-founded by:\n${list}\n\nAsk me about any one by name for more detail.`,
      quickReplies: ["Our ventures", "Contact us"],
    }
  }

  if (/scheme|package|offer|deal|discount|bundle|referral|early bird|loyalty/.test(input)) {
    const list = SCHEMES.map((s) => `• ${s.name} — ${s.price}`).join("\n")
    return {
      text: `Our current schemes:\n${list}\n\nSee full details on our Schemes page.`,
      quickReplies: ["Contact us", "Our ventures"],
    }
  }

  if (/stat|placement|track record|how many|proof|result/.test(input)) {
    const list = STATS.map((s) => `• ${s.value.toLocaleString("en-IN")}${s.suffix} ${s.label}`).join("\n")
    return {
      text: `A few numbers that speak for themselves:\n${list}`,
      quickReplies: ["Our ventures", "Contact us"],
    }
  }

  if (/location|address|where|kochi|based|office/.test(input)) {
    return {
      text: `${SITE.name} is headquartered in ${SITE.address}.`,
      quickReplies: ["Contact us", "Our ventures"],
    }
  }

  if (/book|appointment|call|phone|whatsapp|contact|reach|enquir|enquiry/.test(input)) {
    return {
      text: `You can reach us at ${SITE.phone} (call or WhatsApp) or ${SITE.email}. Want me to open WhatsApp for you?`,
      quickReplies: ["Chat on WhatsApp", "Our ventures"],
    }
  }

  const faqMatch = findFaqMatch(input)
  if (faqMatch) {
    return {
      text: faqMatch.answer,
      quickReplies: ["Our ventures", "Contact us"],
    }
  }

  return {
    text: `I'm not totally sure about that one — but our team can help directly on WhatsApp, or you can browse our Ventures, Schemes and FAQ pages.`,
    quickReplies: ["Chat on WhatsApp", "Our ventures", "Schemes & offers"],
  }
}
