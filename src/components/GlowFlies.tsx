'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function GlowFlies() {
  const fly1 = useRef<HTMLDivElement>(null)
  const fly2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fly1.current || !fly2.current) return

    animateFly(fly1.current, 1)
    animateFly(fly2.current, .85)

    function animateFly(el: HTMLElement, baseScale: number) {
      const move = () => {
        const duration = gsap.utils.random(1, 3)

        gsap.to(el, {
          x: gsap.utils.random(-200, 200),
          y: gsap.utils.random(-150, 150),
          scale: gsap.utils.random(0.2, 1.2) * baseScale,
          opacity: gsap.utils.random(0.4, 0.9),
          duration,
          ease: 'bounce.out',
          onComplete: move,
        })
      }

      move()
    }
  }, [])

  return (
    <div className="relative h-full w-full pointer-events-none">
      {/* Fly 1 */}
      <div
        ref={fly1}
        className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-blue-400  "
      />

      {/* Fly 2 */}
      <div
        ref={fly2}
        className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-blue-300  "
      />
    </div>
  )
}
