"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect } from "react";
import MainProjects from "./MainProjects";

const MyWork = () => {
  useEffect(() => {
    const workSection = document.getElementById("mywork");

    const cursorText = document.querySelector("#cursor-text");
    const cursorOuter = document.querySelector("#cursor-outer");

    workSection.addEventListener("mouseenter", () => {
      gsap.to(cursorText, { scale: 1, duration: 0.3 });
      gsap.to(cursorOuter, { scale: 2, duration: 0.3, ease: "power2.out" });
      cursorText.innerHTML = "View More";
    });

    workSection.addEventListener("mouseleave", () => {
      gsap.to(cursorText, { scale: 0, duration: 0.3 });
      gsap.to(cursorOuter, { scale: 1, duration: 0.3, ease: "power2.out" });
      cursorText.innerHTML = "";
    });
  }, []);

  return (
    <>
      <div id="mywork" className="w-400 h-150  bg-[#02002400] overflow-hidden"  >
        <Canvas camera={{ fov: 20 }}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight />
          <MainProjects />
        </Canvas>
      </div> 
    </>
  );
};

export default MyWork;
