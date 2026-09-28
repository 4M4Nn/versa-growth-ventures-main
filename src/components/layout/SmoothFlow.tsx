"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger)

// Blocks of page content that ease in as they scroll into view.
const REVEAL_SELECTOR = [
  "main :is(section, header, article, aside) > div > :not(.no-reveal)",
  "main ol > li",
  "main ul.grid > li",
  "main [data-reveal]",
].join(", ")

/**
 * Site-wide motion layer: one Lenis instance driven by the GSAP ticker,
 * scroll-triggered reveals, image parallax and a scroll progress line.
 * Everything is skipped under prefers-reduced-motion.
 */
export function SmoothFlow() {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  // Smooth scroll — created once for the whole app.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      anchors: { offset: -110 },
      stopInertiaOnNavigate: true,
      // Let open dialogs (mobile menu) and scroll-locked states keep native behaviour.
      prevent: (node) => document.body.hasAttribute("data-scroll-locked") || node.closest("[role=dialog], [data-lenis-prevent]") !== null,
    })
    lenisRef.current = lenis

    const onScroll = () => {
      ScrollTrigger.update()
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${lenis.progress || 0})`
    }
    lenis.on("scroll", onScroll)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Reveals and parallax — rebuilt for every route.
  useEffect(() => {
    // Skip when motion is unwanted or there is no measurable viewport (e.g. a minimised/prerendered tab),
    // otherwise everything would count as "below the fold" and start hidden.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerHeight < 200) return

    lenisRef.current?.resize()
    const fallbacks: number[] = []
    const ctx = gsap.context(() => {
      const fold = window.innerHeight * 0.92
      const targets = gsap.utils
        .toArray<HTMLElement>(REVEAL_SELECTOR)
        .filter((el, i, all) => el.getBoundingClientRect().top > fold && !all.some((other) => other !== el && other.contains(el)))

      gsap.set(targets, { autoAlpha: 0, y: 28 })
      ScrollTrigger.batch(targets, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true, clearProps: "transform" })
          // Safety net: if frames are throttled (background tab, low-power mode) never leave content hidden.
          fallbacks.push(
            window.setTimeout(() => {
              batch.forEach((el) => {
                if (getComputedStyle(el).visibility === "hidden" || Number(getComputedStyle(el).opacity) < 0.05) {
                  gsap.set(el, { autoAlpha: 1, clearProps: "transform" })
                }
              })
            }, 2000)
          )
        },
      })

      gsap.utils.toArray<HTMLElement>("main [data-parallax]").forEach((frame) => {
        const img = frame.querySelector("img")
        if (!img) return
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.14 },
          {
            yPercent: 6,
            scale: 1.14,
            ease: "none",
            scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
          }
        )
      })
    })

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => {
      window.clearTimeout(refresh)
      fallbacks.forEach((id) => window.clearTimeout(id))
      ctx.revert()
    }
  }, [pathname])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div ref={progressRef} className="h-full origin-left scale-x-0 bg-spice" />
    </div>
  )
}
