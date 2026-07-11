import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import GitHubSection from "@/components/GitHubSection";
import CurrentMission from "@/components/CurrentMission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <GitHubSection />
      <CurrentMission />
      <Contact />
      <Footer />
    </>
  );
}
