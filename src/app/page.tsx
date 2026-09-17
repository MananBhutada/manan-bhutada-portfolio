import Navigation from "@/components/layout/Navigation";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { UniverseHeader, WorldDetail } from "@/components/sections/Projects";
import ProjectSnapZone from "@/components/sections/ProjectSnapZone";
import Contact from "@/components/sections/Contact";
import GalaxyBackground from "@/components/three/GalaxyBackground";

export default function Home() {
  return (
    <>
      <GalaxyBackground />

      <main className="relative z-10">
        <Navigation />

        <section id="hero" aria-label="Introduction" className="h-screen">
          <Hero />
        </section>

        <section id="about" aria-label="About Manan" className="flex h-screen items-center overflow-hidden">
          <div className="w-full rounded-3xl bg-galaxy-darker/70 py-4 backdrop-blur-sm">
            <About />
          </div>
        </section>

        <section id="universe" aria-label="Portfolio universe" className="flex h-screen items-center overflow-hidden">
          <div className="w-full">
            <UniverseHeader />
          </div>
        </section>

        <ProjectSnapZone>
          {Array.from({ length: 5 }, (_, index) => (
            <section
              key={index}
              id={`world-${index}`}
              aria-label={`Portfolio world ${index + 1}`}
              className="h-screen"
            >
              <WorldDetail index={index} />
            </section>
          ))}
        </ProjectSnapZone>

        <section id="contact" aria-label="Contact">
          <Contact />
          <Footer />
        </section>
      </main>

      <CustomCursor />
    </>
  );
}
