import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import Experience from "@/components/ui/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
