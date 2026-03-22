import type { Metadata } from "next";
import Link from "next/link";
import { MdGroups } from "react-icons/md";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { buildBreadcrumbsNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dificultades del Aprendizaje y la Comunicación",
  description:
    "Atención logopédica especializada para dificultades del aprendizaje y la comunicación en edad escolar y adulta en A Coruña. Dislexia, TEA, TDL, TDAH, afasias y más.",
  alternates: { canonical: "/servicios/dificultades-aprendizaje" },
  openGraph: {
    title: "Dificultades del Aprendizaje y la Comunicación | Logopedia Castelo",
    description:
      "Intervención logopédica personalizada para dificultades del aprendizaje y la comunicación en A Coruña. Evaluación y tratamiento para todas las edades.",
  },
};

const conditions = [
  "Discapacidad Intelectual",
  "Trastorno del Desarrollo del Lenguaje (TDL)",
  "Dislexia",
  "Disgrafía",
  "Discalculia",
  "Trastorno del Espectro Autista (TEA / Asperger)",
  "Trastorno por Déficit de Atención con o sin Hiperactividad (TDAH)",
  "Afasia",
];

const warnings = [
  "Comunicaros o expresaros",
  "Comprender frases complejas",
  "Interactuar con iguales",
  "Expresaros por escrito",
  "Comprender lo que leéis",
];

const otrosServicios = [
  { href: "/servicios/estimulacion-temprana", label: "Estimulación Temprana" },
  { href: "/servicios/terapia-miofuncional", label: "Terapia Miofuncional" },
  { href: "/servicios/intervencion-familiar", label: "Intervención Familiar" },
  { href: "/servicios/estimulacion-cognitiva", label: "Estimulación Cognitiva" },
];

export default function DificultadesAprendizajePage() {
  return (
    <>
      <Navbar />
      <nav aria-label="Breadcrumb" className="fixed top-[100px] left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <ol className="mx-auto flex max-w-[1200px] items-center gap-2 px-6 py-2 text-sm text-gray-500 md:px-16" role="list">
          <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li><a href="/#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li className="font-medium text-primary" aria-current="page">Dificultades del Aprendizaje</li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id":
                  "https://logopediacastelo.com/servicios/dificultades-aprendizaje#service",
                name: "Atención Logopédica de las Dificultades del Aprendizaje y la Comunicación",
                description:
                  "Atención logopédica especializada para pacientes de todas las edades con dificultades para recibir, procesar, expresar o almacenar información del entorno.",
                url: "https://logopediacastelo.com/servicios/dificultades-aprendizaje",
                provider: {
                  "@id": "https://logopediacastelo.com/#organization",
                },
                serviceType: "Speech Therapy",
                areaServed: { "@type": "City", name: "A Coruña" },
                audience: {
                  "@type": "Audience",
                  audienceType: "Edad escolar y adulta",
                },
                offers: {
                  "@type": "Offer",
                  price: "30",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "30",
                    priceCurrency: "EUR",
                    unitText: "por sesión de 45 minutos",
                  },
                },
              },
              buildBreadcrumbsNode([
                { name: "Inicio", url: "https://logopediacastelo.com/" },
                {
                  name: "Servicios",
                  url: "https://logopediacastelo.com/#servicios",
                },
                {
                  name: "Dificultades del Aprendizaje",
                  url: "https://logopediacastelo.com/servicios/dificultades-aprendizaje",
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
          aria-label="Dificultades del Aprendizaje y la Comunicación"
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
              Dificultades del Aprendizaje y la Comunicación
            </h1>
            <p className="mt-4 text-xl text-white/80">Edad escolar y adulta</p>
            <p className="mt-6 max-w-[640px] text-lg leading-[1.8] text-white/70">
              Adaptar y personalizar las estrategias de aprendizaje, teniendo en cuenta
              los puntos fuertes en el desarrollo y estimulando las áreas alteradas.
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
                ¿Qué es?
              </span>
            </div>
            <h2
              id="que-es-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Logopedia para el aprendizaje y la comunicación
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-lg leading-[1.8] text-gray-700">
                  Este servicio está dirigido a pacientes de todas las edades que tienen
                  dificultades para <strong>recibir, procesar, expresar o almacenar</strong> la
                  información del entorno, porque a lo largo de su desarrollo se han dado condiciones
                  especiales tales como las que se dan en:
                </p>
                <ul className="mt-6 flex flex-wrap gap-3" role="list">
                  {conditions.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-gray-800"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-lg leading-[1.8] text-gray-700">
                  En Logopedia Castelo, este servicio tiene como objetivo adaptar y personalizar
                  las estrategias de aprendizaje, teniendo en cuenta los puntos fuertes en el
                  desarrollo y estimulando las áreas alteradas.
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Todas las edades</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Desde niños en edad escolar hasta adultos. Las dificultades de
                      aprendizaje no desaparecen con la edad: cambian de forma, pero
                      siguen requiriendo atención especializada.
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Intervención personalizada</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      No existen dos perfiles iguales. La intervención parte siempre de
                      una evaluación individual para identificar los puntos fuertes y
                      las áreas que necesitan apoyo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <span
                    className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary"
                    aria-hidden="true"
                  >
                    <MdGroups size={24} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Red de apoyo</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Coordinación trimestral con el centro educativo y con los demás
                      profesionales implicados, para ajustar objetivos y dar coherencia
                      a la intervención en todos los contextos del paciente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <div className="mx-auto max-w-[1200px] px-6 pb-6 md:px-16">
            <p className="text-sm text-gray-500">
              Contenido elaborado por{" "}
              <a href="/sobre-mi" className="font-medium text-primary underline-offset-2 hover:underline">
                Cristina Barrós Pérez, logopeda colegiada nº 15-0360
              </a>
            </p>
          </div>
        </div>

        {/* ── Cómo son las sesiones ── */}
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
                Estas sesiones tienen una duración de 45 minutos y su estructura depende
                de cada paciente, adaptando los tiempos de atención-descanso según los
                objetivos y las necesidades. Además, durante las sesiones se utilizan apoyos
                (gestos, comunicador, imágenes…) que faciliten tanto la comprensión como
                la expresión.
              </p>
              <p className="text-lg leading-[1.8] text-gray-700">
                La frecuencia y formato de las sesiones dependerá de cada caso en particular,
                si bien habitualmente la frecuencia es de una sesión individual semanal. Y, en
                el caso de pacientes infantojuveniles, se llevan a cabo reuniones periódicas
                con la familia, para recoger información y proporcionar pautas. Del mismo modo,
                se realizan coordinaciones trimestralmente con el centro educativo y con los
                otros profesionales involucrados en la evolución del paciente, para ajustar los
                objetivos de la intervención.
              </p>
            </div>
          </div>
        </section>

        {/* ── Si sospechas ── */}
        <section
          className="relative overflow-hidden bg-white"
          aria-labelledby="sospechas-heading"
        >
          <div
            className="absolute -right-24 top-10 h-[280px] w-[280px] rotate-[20deg] rounded-[60px] bg-secondary/40"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-primary" aria-hidden="true" />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                ¿Cuándo consultar?
              </span>
            </div>
            <h2
              id="sospechas-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Si sospechas que tú o tu hijo o hija podéis tener dificultades para…
            </h2>
            <ul className="mt-12 flex flex-col gap-4" role="list">
              {warnings.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base leading-[1.7] text-gray-700">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Otros servicios ── */}
        <section className="bg-white" aria-labelledby="otros-servicios-heading">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-16">
            <h2 id="otros-servicios-heading" className="text-sm font-bold tracking-[4px] text-primary uppercase mb-6">
              Otros servicios
            </h2>
            <div className="flex flex-wrap gap-3">
              {otrosServicios.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-primary hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
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
