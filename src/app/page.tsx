import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesSection from "./components/ServicesSection";
import AreasSection from "./components/AreasSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">Logopedia Castelo | Clínica de Logopedia en A Coruña</h1>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AreasSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}
