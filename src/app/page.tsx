import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesSection from "./components/ServicesSection";
import AreasSection from "./components/AreasSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { fetchGoogleReviews } from "@/lib/google-reviews";

const webPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://logopediacastelo.com/#webpage",
      url: "https://logopediacastelo.com/",
      name: "Logopedia Castelo | Clínica de Logopedia en A Coruña",
      description:
        "Logopedia en todas las etapas de la vida en A Coruña. Especialistas en estimulación temprana, dificultades de aprendizaje, daño cerebral adquirido y terapia miofuncional.",
      isPartOf: { "@id": "https://logopediacastelo.com/#website" },
      about: { "@id": "https://logopediacastelo.com/#organization" },
      inLanguage: "es",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://logopediacastelo.com/",
          },
        ],
      },
    },
  ],
};

export default async function HomePage() {
  const googleReviews = await fetchGoogleReviews();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AreasSection />
        <AboutSection />
        <TestimonialsSection googleReviews={googleReviews} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
