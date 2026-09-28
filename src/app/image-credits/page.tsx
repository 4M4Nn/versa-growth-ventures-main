import type { Metadata } from "next"
import { IMAGE_CREDITS, PAGE_COPY } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"

const copy = PAGE_COPY.credits

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: { canonical: "/image-credits" },
}

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Image credits", href: "/image-credits" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} />
      <Container className="py-16 md:py-24">
        <div className="overflow-x-auto border border-ink">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-ink bg-paper-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              <tr>
                <th scope="col" className="px-4 py-3">Subject</th>
                <th scope="col" className="px-4 py-3">Photographer</th>
                <th scope="col" className="px-4 py-3">Licence</th>
                <th scope="col" className="px-4 py-3">Source</th>
              </tr>
            </thead>
            <tbody>
              {IMAGE_CREDITS.map((c) => (
                <tr key={c.file} className="border-b border-rule last:border-b-0">
                  <td className="px-4 py-3 font-medium">{c.subject}</td>
                  <td className="px-4 py-3">{c.author}</td>
                  <td className="px-4 py-3 font-mono">{c.license}</td>
                  <td className="px-4 py-3">
                    <a href={c.source} target="_blank" rel="noopener nofollow" className="underline underline-offset-4 hover:text-spice">
                      Wikimedia Commons
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  )
}
