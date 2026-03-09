import type { Metadata } from "next";
import { MdSchool, MdGroups } from "react-icons/md";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import { strings } from "@/lib/strings";
import CvCard from "./CvCard";

export const metadata: Metadata = {
  title: "Sobre mí - Cristina Barrós Pérez",
  description:
    "Cristina Barrós Pérez, logopeda colegiada nº 15-0360. Diplomada en Logopedia por la Universidade da Coruña. Especialista en logopedia clínica en A Coruña.",
  alternates: { canonical: "/sobre-mi" },
  openGraph: {
    title: "Sobre mí - Cristina Barrós Pérez | Logopedia Castelo",
    description:
      "Logopeda colegiada nº 15-0360. Especialista en logopedia clínica para todas las etapas de la vida en A Coruña.",
  },
};

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary pt-[100px]" aria-label="Sobre mí">
          {/* Decorative shapes */}
          <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rotate-[30deg] rounded-[80px] bg-white/[0.08]" aria-hidden="true" />
          <div className="absolute -left-16 -bottom-10 h-[250px] w-[250px] -rotate-[36deg] rounded-[60px] bg-white/5" aria-hidden="true" />

          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16 md:py-32">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-secondary" aria-hidden="true" />
              <span className="text-base font-bold tracking-[4px] text-secondary uppercase">
                {strings.aboutMeTitle}
              </span>
            </div>
            <h1 className="mt-8 font-[family-name:var(--font-playfair)] text-4xl font-extrabold text-white md:text-5xl">
              {strings.aboutMeSubtitle}
            </h1>
            <p className="mt-4 text-lg text-white/70">
              {strings.aboutMeCollegiateNumber}
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="relative overflow-hidden bg-white" aria-label="Biografía">
          <div className="absolute -left-24 top-20 h-[300px] w-[300px] rotate-45 rounded-[60px] bg-primary/[0.04]" aria-hidden="true" />
          <div className="relative mx-auto max-w-[800px] px-6 py-24 md:px-16">
            <p className="text-lg leading-[1.8] text-gray-700">
              {strings.aboutMeBio1}
            </p>
            <p className="mt-7 text-lg leading-[1.8] text-gray-700">
              {strings.aboutMeBio2}
            </p>
            <p className="mt-7 text-lg leading-[1.8] text-gray-700">
              {strings.aboutMeBio3}
            </p>
          </div>
        </section>

        {/* CV */}
        <section className="relative overflow-hidden bg-secondary/30" aria-label="Currículum">
          <div className="absolute -right-20 -bottom-16 h-[350px] w-[350px] -rotate-[60deg] rounded-[70px] bg-primary/[0.06]" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-primary" aria-hidden="true" />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                {strings.aboutMeCvTitle}
              </span>
            </div>

            <div className="mt-12 flex flex-col gap-5">
              {strings.aboutMeCvItems.map((item) => (
                <CvCard
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-start gap-6 rounded-3xl border border-gray-200 bg-white p-8">
                <span className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary" aria-hidden="true"><MdSchool size={24} /></span>
                <p className="text-base leading-[1.7] text-gray-600">
                  {strings.aboutMeExtra}
                </p>
              </div>
              <div className="flex items-start gap-6 rounded-3xl border border-gray-200 bg-white p-8">
                <span className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary" aria-hidden="true"><MdGroups size={24} /></span>
                <p className="text-base leading-[1.7] text-gray-600">
                  {strings.aboutMeWorkshops}
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
