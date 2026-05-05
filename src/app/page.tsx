import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MySkill from "@/components/MySkill";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="bg-background font-instrument ">
        <Hero />
        <AboutMe />
        <Services />
        <MySkill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
