import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <TechMarquee />
        <Contact />
      </main>
    </>
  );
}
