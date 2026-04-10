import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Servicios de Logopedia en A Coruña",
  description:
    "Descubre todos los servicios de Logopedia Castelo en A Coruña: estimulación temprana, dificultades de aprendizaje, terapia miofuncional, intervención familiar y estimulación cognitiva.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Logopedia en A Coruña | Logopedia Castelo",
    description:
      "Intervención logopédica especializada para niños, adultos y mayores en A Coruña. Conoce nuestros servicios especializados.",
    url: "https://logopediacastelo.com/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        {/* Simple Hero for Services Index */}
        <section className="bg-primary py-20 text-white">
          <div className="mx-auto max-w-[1200px] px-6 md:px-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-extrabold md:text-5xl">
              Nuestros Servicios
            </h1>
            <p className="mt-6 max-w-[640px] text-lg text-white/80">
              Ofrecemos una atención personalizada y especializada en todas las etapas del desarrollo y la vida,
              adaptándonos a las necesidades específicas de cada persona y familia.
            </p>
          </div>
        </section>

        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
