"use client";

import { CloseCircle, HamburgerMenu } from "iconsax-reactjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);


    const ham = document.getElementById("ham");
    const close = document.getElementById("close");

    const tl = gsap.timeline();

    tl.to("#ham", { duration: 0.3, opacity: 0 });
    tl.from("#bg", { right: -500, duration: 1 }, "-=0.2");
    tl.from("#menu", {
      x: 350,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    }, "-=0.4");
    tl.from('#menu .link', {
      duration: 1,
      x: 300,
      stagger: .2,
      opacity: 0,
      scale: 2
    }, '-=.3')
    tl.from("#close", { duration: 1, opacity: 0 }, "-=0.4");

    tl.pause();

    ham?.addEventListener("click", () => tl.play());
    close?.addEventListener("click", () => tl.reverse());

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-cardbg backdrop-blur-md" : "bg-transparent"}
      `}
      >
        <nav className="relative flex items-center justify-between container_my py-4">
          {/* Logo */}
          <div className="text-white font-bold text-xl">Ranjana</div>

          {/* Menu */}
          <div className="  gap-6 text-white hidden md:flex">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className=" md:hidden cursor-pointer ">
            <HamburgerMenu
              size="24"
              color="#fff"
              id="ham"
            />
          </div>

          {/* Static border */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-[#041930e0]" />

          {/* Glowing moving light */}
          <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
            <span className="glow-line" />
          </div>
        </nav>
      </header>
      <div className=" md:hidden fixed right-0 top-0 bg-background w-[50%] z-60 h-full" id="menu">
        <div className="relative w-full h-full">
          <CloseCircle
            size="24"
            color="#fff"
            className="absolute right-8 top-8"
            id="close"
          />
          <div className="gap-6 text-white  flex flex-col  text-left w-full h-full px-12 py-18">
            <Link className="link" href="#home">Home</Link>
            <Link className="link" href="#about">About</Link>
            <Link className="link" href="#services">Services</Link>
            <Link className="link" href="#projects">Projects</Link>
            <Link className="link" href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
