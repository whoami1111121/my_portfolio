"use client";

import Arrow3D from "@/components/Arrow3D";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import StringEffect from "@/components/StringEffect";
import MySkill from "@/components/MySkill";

// import { Environment, OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense, useEffect, useRef, useState } from "react";



export default function Home() {
//  const lenisRef = useRef(null);
//   const [showBtn, setShowBtn] = useState(false);

//   // Lenis setup
//   useEffect(() => {
//     import("@studio-freight/lenis").then((module) => {
//       const Lenis = module.default;
//       const lenis = new Lenis({ duration: 1.2, smooth: true });
//       lenisRef.current = lenis;

//       function raf(time) {
//         lenis.raf(time);
//         requestAnimationFrame(raf);
//       }
//       requestAnimationFrame(raf);

//       return () => lenis.destroy();
//     });
//   }, []);

//   // Show button after scroll
//   useEffect(() => {
//     const handleScroll = () => setShowBtn(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTop = () => {
//     if (lenisRef.current) lenisRef.current.scrollTo(0);
//   };
  
  return (
    <>
      <div className="bg-background font-instrument ">
        {/* <Hero /> */}
        {/* <AboutMe /> */}
        {/* <Services /> */}
        {/* <MySkill /> */}
        {/* <Projects /> */}
        <Contact />
        {/* {showBtn && (
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
        )} */}
        
         <StringEffect />
        <Marquee />  
        <Footer />
      </div>
    </>
  );
}
