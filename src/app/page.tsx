import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesSection from "./components/ServicesSection";
import AreasSection from "./components/AreasSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export default async function HomePage() {
  const googleReviews = await fetchGoogleReviews();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AreasSection />
        <TestimonialsSection googleReviews={googleReviews} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
