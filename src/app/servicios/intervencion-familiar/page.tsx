import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { buildBreadcrumbs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Intervención en Contexto Educativo y Familiar",
  description:
    "Intervención logopédica en el entorno natural del paciente: domicilio, cole, parque. Orientación familiar y apoyo a la comunicación en A Coruña.",
  alternates: { canonical: "/servicios/intervencion-familiar" },
  openGraph: {
    title: "Intervención en Contexto Educativo y Familiar | Logopedia Castelo",
    description:
      "Logopedia fuera de la clínica: visitas al domicilio, al colegio y a los contextos naturales del paciente. Pautas in situ para la familia y el entorno educativo.",
  },
};

const contexts = [
  "Visita al domicilio durante una rutina concreta",
  "Visita a un parque",
  "Visita al supermercado",
  "Observación en el entorno escolar",
];

export default function IntervencionFamiliarPage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id":
                  "https://logopediacastelo.com/servicios/intervencion-familiar#service",
                name: "Intervención en Contexto Educativo y Familiar",
                description:
                  "Intervención logopédica en los contextos naturales del paciente: domicilio, colegio y entorno cotidiano. Orientación y pautas in situ para la familia y el entorno educativo.",
                url: "https://logopediacastelo.com/servicios/intervencion-familiar",
                provider: {
                  "@id": "https://logopediacastelo.com/#organization",
                },
                serviceType: "Speech Therapy",
                areaServed: { "@type": "City", name: "A Coruña" },
              },
              buildBreadcrumbs([
                { name: "Inicio", url: "https://logopediacastelo.com/" },
                {
                  name: "Servicios",
                  url: "https://logopediacastelo.com/#servicios",
                },
                {
                  name: "Intervención en Contexto Educativo y Familiar",
                  url: "https://logopediacastelo.com/servicios/intervencion-familiar",
                },
              ]),
            ],
          }),
        }}
      />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden bg-primary pt-[100px]"
          aria-label="Intervención en Contexto Educativo y Familiar"
        >
          <div
            className="absolute -right-20 -top-20 h-[350px] w-[350px] rotate-[30deg] rounded-[80px] bg-white/[0.08]"
            aria-hidden="true"
          />
          <div
            className="absolute -left-16 -bottom-10 h-[250px] w-[250px] -rotate-[36deg] rounded-[60px] bg-white/5"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16 md:py-32">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-secondary" aria-hidden="true" />
              <Link
                href="/#servicios"
                className="text-base font-bold tracking-[4px] text-secondary uppercase hover:text-secondary/80 transition-colors"
              >
                Servicios
              </Link>
            </div>
            <h1 className="mt-8 font-[family-name:var(--font-playfair)] text-4xl font-extrabold text-white md:text-5xl">
              Intervención en Contexto Educativo y Familiar
            </h1>
            <p className="mt-4 text-xl text-white/80">Logopedia donde la vida ocurre</p>
            <p className="mt-6 max-w-[640px] text-lg leading-[1.8] text-white/70">
              La buena evolución de los pacientes, sea cual sea su edad, siempre depende
              de la ayuda y sostén del entorno.
            </p>
          </div>
        </section>

        {/* ── Qué es ── */}
        <section
          className="relative overflow-hidden bg-white"
          aria-labelledby="que-es-heading"
        >
          <div
            className="absolute -left-24 top-20 h-[300px] w-[300px] rotate-45 rounded-[60px] bg-primary/[0.04]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-primary" aria-hidden="true" />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                ¿En qué consiste?
              </span>
            </div>
            <h2
              id="que-es-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Logopedia en el entorno natural
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-lg leading-[1.8] text-gray-700">
                  Dentro de las sesiones de intervención en la clínica se trabajan los
                  objetivos, pero su aprendizaje debe generalizarse en los{" "}
                  <strong>contextos naturales</strong>, donde realmente el paciente vive.
                  Por ejemplo, a la hora de implementar apoyos a la comunicación o de
                  desempeñar actividades de modo autónomo por primera vez.
                </p>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  Este servicio tiene como objetivo recoger la información y las demandas
                  del entorno cercano, identificar los desafíos y{" "}
                  <strong>proporcionar pautas in situ</strong>, ayudando a ponerlas en
                  práctica.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <span
                    className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">En el domicilio</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Acompañamiento durante rutinas cotidianas: el baño, la comida,
                      el juego libre. El objetivo es trasladar los aprendizajes de la
                      clínica al día a día del paciente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <span
                    className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">En el colegio</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Observación en el aula, orientación al equipo docente y
                      coordinación con los profesionales del centro para ajustar
                      los apoyos y los objetivos de la intervención.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <span
                    className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">En cualquier contexto</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      El parque, el supermercado, el transporte público… Allá donde
                      surjan los desafíos comunicativos reales del paciente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Las sesiones ── */}
        <section
          className="relative overflow-hidden bg-secondary/30"
          aria-labelledby="sesiones-heading"
        >
          <div
            className="absolute -right-20 -bottom-16 h-[350px] w-[350px] -rotate-[60deg] rounded-[70px] bg-primary/[0.06]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-primary" aria-hidden="true" />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                Las sesiones
              </span>
            </div>
            <h2
              id="sesiones-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              ¿Cómo son las sesiones?
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <p className="text-lg leading-[1.8] text-gray-700">
                Estas sesiones son de una hora de duración, pero no tienen una frecuencia
                determinada, puesto que se realizan en función de las necesidades de cada
                paciente.
              </p>
              <div>
                <p className="text-base font-semibold text-gray-700 mb-4">
                  Pueden ser, por ejemplo:
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {contexts.map((c) => (
                    <li key={c} className="flex items-start gap-4">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-primary"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                        aria-hidden="true"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      <span className="text-base leading-[1.7] text-gray-700">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative overflow-hidden bg-primary"
          aria-labelledby="cta-heading"
        >
          <div
            className="absolute -left-16 -top-16 h-[320px] w-[320px] rotate-[45deg] rounded-[70px] bg-white/[0.06]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-20 -bottom-12 h-[280px] w-[280px] -rotate-[30deg] rounded-[60px] bg-white/[0.04]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-secondary" aria-hidden="true" />
              <span className="text-base font-bold tracking-[4px] text-secondary uppercase">
                Pide cita
              </span>
            </div>
            <h2
              id="cta-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-white md:text-4xl"
            >
              ¿Empezamos?
            </h2>
            <p className="mt-6 max-w-[640px] text-lg leading-[1.8] text-white/80">
              Pide una cita y atenderé tu consulta lo antes posible.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Pide tu primera consulta
              </Link>
              <Link
                href="/#servicios"
                className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
