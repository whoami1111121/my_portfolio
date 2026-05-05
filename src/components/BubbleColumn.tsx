"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function BubbleColumn() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const bubbles = Array.from(containerRef.current.children);

    bubbles.forEach((bubble, index) => {
      startBubble(bubble as HTMLElement, index * 0.3);
    });

    function startBubble(bubble: HTMLElement, delay = 0) {
      if (!containerRef.current) return;

      const size = gsap.utils.random(6, 18);
      const left = gsap.utils.random(10, 90);
      const duration = gsap.utils.random(4, 8);

      // 🔑 RESET POSITION EVERY TIME
      gsap.set(bubble, {
        width: size,
        height: size,
        left: `${left}%`,
        bottom: -size,
        y: 0, // ⭐ VERY IMPORTANT
        opacity: 0,
        scale: 0.6,
      });

      gsap.to(bubble, {
        y: -(containerRef.current.offsetHeight + 100),
        opacity: 1,
        scale: 1.8,
        x: gsap.utils.random(-12, 12),
        duration,
        delay,
        ease: "power1.inOut",
        onComplete: () => startBubble(bubble),
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full   backdrop-blur-sm"
        ><Image src="/w.webp" alt="bubble" width={100} height={100} className="w-full h-full" /></div>
      ))}
    </div>
  );
}
