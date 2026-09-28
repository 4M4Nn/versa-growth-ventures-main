import type { Headline as HeadlineType } from "@/types"
import { cn } from "@/lib/utils"

export function Headline({ value, emClassName }: { value: HeadlineType; emClassName?: string }) {
  return (
    <>
      {value.pre}
      {value.em && <em className={cn("text-spice", emClassName)}>{value.em}</em>}
      {value.post}
    </>
  )
}
