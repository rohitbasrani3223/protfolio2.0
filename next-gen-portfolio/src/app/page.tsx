import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#121212] w-full min-h-screen font-sans">
      <Navbar />
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
