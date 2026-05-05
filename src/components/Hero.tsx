"use client";

import Image from "next/image";
import BubbleColumn from "./BubbleColumn";
import GlowFlies from "./GlowFlies";
import Navbar from "./Navbar";
import Landing from "./Landing";

export default function Hero() {
  return (
    <section id="home" className="relative     w-full  ">
      <Image
        src="/banner-shape-light.svg"
        alt="background"
        className="  absolute z-0  "
        fill
      />
      <Navbar />

      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2  w-full">
        <BubbleColumn />
      </div>
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2  w-full">
        <GlowFlies />
      </div>
      <div className="pt-20">
        <Landing />
      </div>
    </section>
  );
}
