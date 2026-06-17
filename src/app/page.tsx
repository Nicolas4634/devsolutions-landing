import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Technologies } from "@/components/sections/Technologies";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <GradientBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <CaseStudies />
        <Process />
        <Technologies />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
