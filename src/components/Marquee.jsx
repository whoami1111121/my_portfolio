"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const Marquee = () => {
    useEffect(() => {
        const handleWheel = (e) => {
          if (e.deltaY > 0) {
            // Scroll down → move left
            gsap.to(".marque", {
              x: "-800%",
              duration: 14,
              repeat: -1,
              ease: "none"
            });
            gsap.to("#page2 #move img", { rotate: 180 });
          } else {
            // Scroll up → move back
            gsap.to(".marque", {
              x: "0%",
              duration: 14,
              repeat: -1,
              ease: "none"
            });
            gsap.to("#page2 #move img", { rotate: 0 });
          }
        };
    
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
      }, []);

  return (
    <div id="page2" className="h-[60px] flex items-center justify-center  bg-[#02002400] text-white">
      <div id="move" className="flex gap-8   overflow-hidden">
        {Array(51)
          .fill("View More")
          .map((text, i) => (
            <div key={i} className="marque flex items-center gap-8 text-4xl font-bold">
                <Link href={`https://www.instagram.com/ujjawal_0025/`} target="_blank">
              <h1 className="text-xl font-medium whitespace-nowrap">{text}</h1>
                </Link>
              <img src="/arrow-br.svg" alt="arrow" className="w-4 h-4 mr-8" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
