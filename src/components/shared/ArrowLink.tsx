import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const styles = {
  solid: "bg-ink text-paper border-ink hover:bg-spice hover:border-spice",
  spice: "bg-spice text-paper border-spice hover:bg-ink hover:border-ink",
  outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  paper: "bg-paper text-ink border-paper hover:bg-spice hover:text-paper hover:border-spice",
  ghost: "bg-transparent text-paper border-paper/40 hover:bg-paper hover:text-ink",
}

export function ArrowLink({
  href,
  children,
  external = false,
  variant = "solid",
  className,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
  variant?: keyof typeof styles
  className?: string
}) {
  const cls = cn(
    "group inline-flex min-h-12 items-center justify-between gap-4 border px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-300",
    styles[variant],
    className
  )
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden
      />
    </>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
