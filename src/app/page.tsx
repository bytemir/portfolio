import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Skills />
      <Projects />
      <Research />
      <Education />
      <Achievements />
      <Footer />
    </main>
  );
}
