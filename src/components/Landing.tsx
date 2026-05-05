import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WavingHand from "./WavingHand";
import GlowFlies from "./GlowFlies";

const Landing = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="w-full  pt-8 h-full ">
      <div className=" ">
        <div className="flex gap-4 items-center justify-center  w-[75%] md:w-[90%] mx-auto">
          <WavingHand />
          <h1 className="text-[clamp(1rem,3vw,1.75rem)] text-white  ">
            My name is Ranjana Tamang a Frontend Developer.
          </h1>
        </div>
      </div>
      <section className="relative   flex   justify-center overflow-hidden   text-white">
        <motion.h1
          style={{
            transform: `translate(${mouse.x * -0.02}px, ${mouse.y * -0.02}px)`,
          }}
          className="absolute pt-10 md:pt-20   h-[90%]   font-bold  select-none"
        >
          <span className="uppercase text-transparent [-webkit-text-stroke:4px_white] text-[clamp(3.5rem,16vw,12rem)] opacity-60">
            Developer
          </span>
        </motion.h1>

        <div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2  w-full z-10">
            <GlowFlies />
          </div>
          <Image
            src="/maam.webp"
            alt="hero"
            width={1000}
            height={1000}
            className="relative z-10 w-60 md:w-180 mt-12"
          />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2  w-full z-10">
            <GlowFlies />
          </div>
        </div>

        <motion.h1
          style={{
            transform: `translate(${mouse.x * 0.04}px, ${mouse.y * 0.04}px)`,
          }}
          className="absolute z-20 h-[90%]   font-bold flex items-end    "
        >
          <span className="text-[clamp(2.5rem,12vw,10rem)] whitespace-nowrap">
            FRONTEND
          </span>
        </motion.h1>
      </section>
    </div>
  );
};

export default Landing;
