import { Plus } from "lucide-react"
import type { FAQ } from "@/types"
import { JsonLd } from "./JsonLd"

export function FAQList({
  items,
  withSchema = true,
  headingLevel = "h3",
}: {
  items: FAQ[]
  withSchema?: boolean
  headingLevel?: "h2" | "h3"
}) {
  const Heading = headingLevel
  return (
    <div className="border-t border-ink">
      {items.map((f) => (
        <details key={f.question} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <Heading className="text-[17px] font-semibold leading-snug text-ink md:text-lg">{f.question}</Heading>
            <Plus className="mt-1 size-5 shrink-0 text-spice transition-transform duration-300 group-open:rotate-45" aria-hidden />
          </summary>
          <p className="max-w-3xl pb-6 pr-10 leading-relaxed text-ink-2">{f.answer}</p>
        </details>
      ))}
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
    </div>
  )
}
