import Image from "next/image"
import type { ImageAsset } from "@/types"
import { cn } from "@/lib/utils"

export function Figure({
  image,
  className,
  aspect = "aspect-[4/3]",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  showCaption = true,
  parallax = true,
}: {
  image: ImageAsset
  className?: string
  aspect?: string
  priority?: boolean
  sizes?: string
  showCaption?: boolean
  parallax?: boolean
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div data-parallax={parallax ? "" : undefined} className={cn("relative w-full overflow-hidden border border-ink bg-paper-2", aspect)}>
        <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      {showCaption && (
        <figcaption className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft">{image.caption}</figcaption>
      )}
    </figure>
  )
}
