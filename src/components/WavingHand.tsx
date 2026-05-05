"use client";

import { motion } from "framer-motion";

export default function WavingHand() {
  return (
    <motion.img
      src="/hi.webp"
      alt="hand"
      className="w-8"
      animate={{
        rotate: [0, 10, -10, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformOrigin: "bottom center",
      }}
    />
  );
}
