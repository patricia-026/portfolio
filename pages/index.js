import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="pt-24 bg-grey-blue">
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
