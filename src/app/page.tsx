"use client";

import Arrow3D from "@/components/Arrow3D";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import StringEffect from "@/components/StringEffect";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";



export default function Home() {
  const lenisRef = useRef<any>(null);
  const [showBtn, setShowBtn] = useState(false);

  // ✅ Lenis setup (fixed)
  useEffect(() => {
    let lenis: any;

    import("@studio-freight/lenis").then((module) => {
      const Lenis = module.default;
      lenis = new Lenis({ duration: 1.2, smooth: true });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });

    // ✅ proper cleanup
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  // ✅ scroll detection (works fine with Lenis too)
  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0);
    }
  };
  
  return (
    <>
      <div className="bg-background font-instrument ">
        {/* <Hero /> */}
        {/* <AboutMe /> */}
        {/* <Services /> */}
        {/* <MySkill /> */}
        <Projects />
        <Contact />
        {showBtn && (
          <div className="fixed bottom-10 right-10 w-28 h-28 z-50 cursor-pointer">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
              <ambientLight intensity={0.7} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <Suspense fallback={null}>
                <Arrow3D onClick={scrollTop} />
                <Environment preset="city" />
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        )}
        a
        <StringEffect />
        <Marquee />
        <Footer />
      </div>
    </>
  );
}
