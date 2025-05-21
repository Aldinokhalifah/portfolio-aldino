import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
