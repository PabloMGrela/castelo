import type { Metadata } from "next";
import Link from "next/link";
import { MdGroups, MdChildCare } from "react-icons/md";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { buildBreadcrumbsNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Estimulación Temprana del Lenguaje (0-6 años)",
  description:
    "Intervención logopédica especializada para niños de 0 a 6 años en A Coruña. Detecto y trato retrasos del lenguaje, TEA, TDL y otras condiciones en las etapas más importantes del desarrollo.",
  alternates: { canonical: "/servicios/estimulacion-temprana" },
  openGraph: {
    title: "Estimulación Temprana del Lenguaje (0-6 años) | Logopedia Castelo",
    description:
      "Intervención logopédica temprana en A Coruña para niños de 0 a 6 años. Evaluación, terapia lúdica y orientación familiar.",
  },
};

const warnings = [
  "Tiene dificultades para expresarse",
  "No comprende lo que se le dice",
  "Rechaza la interacción con otros niños",
  "Se frustra porque no se le entiende",
  "Puede tener algún tipo de alteración en el desarrollo que le afecte a nivel comunicativo (por herencia, por daño perinatal…)",
];

const otrosServicios = [
  { href: "/servicios/dificultades-aprendizaje", label: "Dificultades del Aprendizaje" },
  { href: "/servicios/terapia-miofuncional", label: "Terapia Miofuncional" },
  { href: "/servicios/intervencion-familiar", label: "Intervención Familiar" },
  { href: "/servicios/estimulacion-cognitiva", label: "Estimulación Cognitiva" },
];

export default function EstimulacionTempranaPage() {
  return (
    <>
      <Navbar />
      <nav aria-label="Breadcrumb" className="fixed top-[100px] left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <ol className="mx-auto flex max-w-[1200px] items-center gap-2 px-6 py-2 text-sm text-gray-500 md:px-16" role="list">
          <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li><a href="/#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li className="font-medium text-primary" aria-current="page">Estimulación Temprana</li>
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
                  "https://logopediacastelo.com/servicios/estimulacion-temprana#service",
                name: "Estimulación Temprana del Lenguaje",
                description:
                  "Intervención logopédica especializada para niños de 0 a 6 años orientada a potenciar el desarrollo del lenguaje y la comunicación en A Coruña.",
                url: "https://logopediacastelo.com/servicios/estimulacion-temprana",
                provider: {
                  "@id": "https://logopediacastelo.com/#organization",
                },
                serviceType: "Speech Therapy",
                areaServed: { "@type": "City", name: "A Coruña" },
                audience: {
                  "@type": "Audience",
                  audienceType: "Niños de 0 a 6 años",
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
                  name: "Estimulación Temprana",
                  url: "https://logopediacastelo.com/servicios/estimulacion-temprana",
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
          aria-label="Estimulación Temprana del Lenguaje"
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
              <div
                className="h-0.5 w-[60px] bg-secondary"
                aria-hidden="true"
              />
              <Link
                href="/#servicios"
                className="text-base font-bold tracking-[4px] text-secondary uppercase hover:text-secondary/80 transition-colors"
              >
                Servicios
              </Link>
            </div>
            <h1 className="mt-8 font-[family-name:var(--font-playfair)] text-4xl font-extrabold text-white md:text-5xl">
              Estimulación Temprana del Lenguaje
            </h1>
            <p className="mt-4 text-xl text-white/80">Para niños de 0 a 6 años</p>
            <p className="mt-6 max-w-[640px] text-lg leading-[1.8] text-white/70">
              Dar respuesta, lo más pronto posible, a las necesidades transitorias o permanentes
              que presentan los niños con trastornos en su desarrollo o con riesgo de padecerlos.
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
              <div
                className="h-0.5 w-[60px] bg-primary"
                aria-hidden="true"
              />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                ¿Qué es?
              </span>
            </div>
            <h2
              id="que-es-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Logopedia en la primera infancia
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-lg leading-[1.8] text-gray-700">
                  La <strong>estimulación o Atención Temprana</strong> es un conjunto de intervenciones
                  dirigidas a los niños y niñas de entre 0 y 6 años, que tienen como objetivo dar respuesta,
                  lo más pronto posible, a las necesidades transitorias o permanentes que presentan los niños
                  con trastornos en su desarrollo o con riesgo de padecerlos.
                </p>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  En Logopedia Castelo, este servicio tiene como objetivo estimular todas las áreas de la
                  comunicación y, de modo transversal, las habilidades cognitivas, a lo largo de la etapa
                  infantil, optimizando el desarrollo de los peques, amortiguando los efectos de una
                  alteración en su desarrollo y previniendo trastornos secundarios.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <span
                    className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary"
                    aria-hidden="true"
                  >
                    <MdChildCare size={24} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sesiones semiestructuradas</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      El niño las percibe como sesiones de juego, pero están diseñadas para trabajar
                      objetivos concretos y respetar los tiempos de atención-descanso de cada niño
                      en cada momento.
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Apoyos a la comunicación</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Se utilizan gestos, comunicadores, imágenes y otros recursos que faciliten
                      tanto la comprensión como la expresión, adaptados a cada niño y momento.
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
                    <h3 className="font-semibold text-gray-900">Coordinación del entorno</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Reuniones periódicas con la familia y coordinación con el centro educativo
                      y los profesionales involucrados en la evolución del peque.
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

        {/* ── A quién va dirigida ── */}
        <section
          className="relative overflow-hidden bg-secondary/30"
          aria-labelledby="a-quien-heading"
        >
          <div
            className="absolute -right-20 -bottom-16 h-[350px] w-[350px] -rotate-[60deg] rounded-[70px] bg-primary/[0.06]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div
                className="h-0.5 w-[60px] bg-primary"
                aria-hidden="true"
              />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                Las sesiones
              </span>
            </div>
            <h2
              id="a-quien-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              ¿Cómo son las sesiones?
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <p className="text-lg leading-[1.8] text-gray-700">
                Estas sesiones tienen una duración de 45 minutos y son semiestructuradas,
                es decir: si bien el niño las percibe como sesiones de juego, están diseñadas
                para trabajar objetivos concretos y tener en cuenta los tiempos de
                atención-descanso que necesita cada niño en cada momento. Y, dado que el
                objetivo es estimular la comunicación, durante las sesiones se utilizan apoyos
                (gestos, comunicador, imágenes…) que faciliten tanto la comprensión
                como la expresión.
              </p>
              <p className="text-lg leading-[1.8] text-gray-700">
                En el servicio de estimulación temprana del lenguaje es imprescindible la
                colaboración del entorno cercano, puesto que es en casa y en el cole donde los
                niños pasan más tiempo y donde tienen más oportunidades para poner en práctica
                lo aprendido. Es por esto que, si bien la frecuencia de las sesiones depende de
                cada caso particular (una vez a la semana, dos veces, sesiones individuales,
                sesiones en pareja, sesiones en el contexto natural…), se llevan a cabo
                reuniones periódicas con la familia, para recoger información y proporcionar
                pautas. Del mismo modo, son importantes las coordinaciones con el centro
                educativo y con los otros profesionales involucrados en la evolución del peque,
                para ajustar los objetivos de la intervención teniendo en cuenta la globalidad
                de cada niño y niña.
              </p>
            </div>
          </div>
        </section>

        {/* ── Cómo son las sesiones ── */}
        <section
          className="relative overflow-hidden bg-white"
          aria-labelledby="sesiones-heading"
        >
          <div
            className="absolute -right-24 top-10 h-[280px] w-[280px] rotate-[20deg] rounded-[60px] bg-secondary/40"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div
                className="h-0.5 w-[60px] bg-primary"
                aria-hidden="true"
              />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                ¿Cuándo consultar?
              </span>
            </div>
            <h2
              id="sesiones-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Si sospechas que tu peque…
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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

        {/* ── Resultados ── */}
        <section
          className="relative overflow-hidden bg-primary"
          aria-labelledby="resultados-heading"
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
              <div
                className="h-0.5 w-[60px] bg-secondary"
                aria-hidden="true"
              />
              <span className="text-base font-bold tracking-[4px] text-secondary uppercase">
                Pide cita
              </span>
            </div>
            <h2
              id="resultados-heading"
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
