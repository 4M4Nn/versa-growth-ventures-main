import type { ContentSection } from "@/types"

export function ArticleSections({ sections }: { sections: ContentSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
          {s.bullets && (
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  )
}
