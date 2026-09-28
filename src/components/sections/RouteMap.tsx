// Schematic lane diagram: Kochi to the two UAE ports we deliver into.
export function RouteMap({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const line = tone === "paper" ? "#f3eee4" : "#15130f"
  const muted = tone === "paper" ? "rgba(243,238,228,0.55)" : "rgba(21,19,15,0.55)"
  return (
    <svg viewBox="0 0 420 260" className="h-auto w-full" role="img" aria-label="Sea route from Kochi, India to Jebel Ali and Khorfakkan in the UAE">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={muted} strokeOpacity="0.25" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="420" height="260" fill="url(#grid)" />
      <path d="M345 215 C 290 190, 170 150, 80 110" fill="none" stroke={line} strokeWidth="1.5" strokeDasharray="5 5" />
      <path d="M345 215 C 300 160, 250 100, 200 70" fill="none" stroke="#a8431f" strokeWidth="1.5" strokeDasharray="5 5" />
      <circle cx="345" cy="215" r="7" fill="#a8431f" />
      <circle cx="345" cy="215" r="14" fill="none" stroke="#a8431f" strokeOpacity="0.5" />
      <circle cx="80" cy="110" r="6" fill={line} />
      <circle cx="200" cy="70" r="6" fill={line} />
      <text x="330" y="245" fill={line} fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="1.5">KOCHI · IN</text>
      <text x="22" y="84" fill={line} fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="1.5">JEBEL ALI · AE</text>
      <text x="22" y="98" fill={muted} fontFamily="var(--font-jetbrains)" fontSize="9" letterSpacing="1">15 × 40FT DELIVERED</text>
      <text x="214" y="58" fill={line} fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="1.5">KHORFAKKAN · AE</text>
      <text x="214" y="72" fill={muted} fontFamily="var(--font-jetbrains)" fontSize="9" letterSpacing="1">2 × 40FT DELIVERED</text>
      <text x="120" y="215" fill={muted} fontFamily="var(--font-jetbrains)" fontSize="9" letterSpacing="1">ARABIAN SEA</text>
    </svg>
  )
}
