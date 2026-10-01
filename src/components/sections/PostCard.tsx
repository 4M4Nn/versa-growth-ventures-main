import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/types"
import { formatDate } from "@/lib/utils"
import { CoverPlate } from "@/components/shared/CoverPlate"

export function PostCard({ post, headingLevel = "h3" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) {
  const Title = headingLevel
  return (
    <article className="group h-full">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        {post.image ? (
          <div className="relative aspect-[16/10] overflow-hidden border border-ink bg-paper-2">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">{post.category}</span>
          </div>
        ) : (
          post.plate && <CoverPlate plate={post.plate} label={post.category} className="transition-colors duration-500 group-hover:bg-spice-deep" />
        )}
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
        </p>
        <Title className="mt-2 font-serif text-2xl leading-tight underline-offset-4 group-hover:underline">{post.title}</Title>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
      </Link>
    </article>
  )
}
