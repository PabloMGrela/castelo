import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { buildBreadcrumbsNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Talleres de Estimulación Cognitiva para Mayores | Logopedia Castelo",
  description:
    "Talleres grupales de estimulación cognitiva en A Coruña para mayores sin deterioro o con deterioro leve. Memoria, atención, lenguaje y socialización en un entorno cercano.",
  alternates: { canonical: "/servicios/estimulacion-cognitiva" },
  openGraph: {
    title:
      "Talleres de Estimulación Cognitiva para Mayores | Logopedia Castelo",
    description:
      "Sesiones grupales de hasta 8 personas para mantener la mente activa, estimular el lenguaje y socializar. Primera entrevista previa gratuita para encontrarte el grupo ideal.",
  },
};

const areas = [
  "Lenguaje y comunicación",
  "Memoria",
  "Atención y concentración",
  "Razonamiento",
  "Orientación temporoespacial",
];

const otrosServicios = [
  { href: "/servicios/estimulacion-temprana", label: "Estimulación Temprana" },
  { href: "/servicios/dificultades-aprendizaje", label: "Dificultades del Aprendizaje" },
  { href: "/servicios/terapia-miofuncional", label: "Terapia Miofuncional" },
  { href: "/servicios/intervencion-familiar", label: "Intervención Familiar" },
];

export default function EstimulacionCognitivaPage() {
  return (
    <>
      <Navbar />
      <nav aria-label="Breadcrumb" className="fixed top-[100px] left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <ol className="mx-auto flex max-w-[1200px] items-center gap-2 px-6 py-2 text-sm text-gray-500 md:px-16" role="list">
          <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li><a href="/#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li className="font-medium text-primary" aria-current="page">Estimulación Cognitiva</li>
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
                  "https://logopediacastelo.com/servicios/estimulacion-cognitiva#service",
                name: "Talleres de Estimulación Cognitiva para la Tercera Edad",
                description:
                  "Talleres grupales de estimulación cognitiva y prevención del deterioro en la tercera edad. Sesiones de una hora para personas mayores sin deterioro o con deterioro leve que deseen mantener su mente activa y socializar.",
                url: "https://logopediacastelo.com/servicios/estimulacion-cognitiva",
                provider: {
                  "@id": "https://logopediacastelo.com/#organization",
                },
                serviceType: "Cognitive Stimulation",
                areaServed: { "@type": "City", name: "A Coruña" },
                audience: {
                  "@type": "Audience",
                  audienceType: "Personas mayores",
                },
                offers: {
                  "@type": "Offer",
                  price: "20",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "20",
                    priceCurrency: "EUR",
                    unitText: "por sesión grupal de 1 hora",
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
                  name: "Estimulación Cognitiva para la Tercera Edad",
                  url: "https://logopediacastelo.com/servicios/estimulacion-cognitiva",
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
          aria-label="Talleres de Estimulación Cognitiva para la Tercera Edad"
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
              Talleres de Estimulación Cognitiva
            </h1>
            <p className="mt-4 text-xl text-white/80">Prevención del deterioro en la tercera edad</p>
            <p className="mt-6 max-w-[640px] text-lg leading-[1.8] text-white/70">
              Para quienes quieren mantenerse activos, socializar y cuidar su mente en un
              entorno cercano y distendido.
            </p>
          </div>
        </section>

        {/* ── En qué consiste ── */}
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
              Mente activa, vida plena
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-lg leading-[1.8] text-gray-700">
                  Este servicio está destinado a{" "}
                  <strong>personas mayores sin deterioro cognitivo o con deterioro leve</strong>{" "}
                  que deseen mantener su mente activa y socializar.
                </p>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  En los talleres se hacen{" "}
                  <strong>actividades prácticas y dinámicas</strong> que estimulan el
                  lenguaje y otras funciones cognitivas como la memoria, la atención, el
                  razonamiento o la orientación temporoespacial.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-secondary/40 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                      {area}
                    </span>
                  ))}
                </div>
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
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dinámico y práctico</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Las sesiones combinan actividades variadas y participativas para
                      que cada taller sea estimulante y, al mismo tiempo, un momento
                      agradable.
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Grupos reducidos</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Máximo 8 participantes por sesión para garantizar una atención
                      cercana y un ambiente donde todos se sientan cómodos y escuchados.
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
                    <h3 className="font-semibold text-gray-900">Planificación individualizada</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Cada taller parte de una estructuración previa de objetivos, pero se
                      adapta en función del ritmo del grupo y de sus necesidades reales.
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

        {/* ── Las sesiones ── */}
        <section
          className="bg-secondary/30"
          aria-labelledby="sesiones-heading"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-primary" aria-hidden="true" />
              <span className="text-base font-bold tracking-[4px] text-primary uppercase">
                ¿Cómo son las sesiones?
              </span>
            </div>
            <h2
              id="sesiones-heading"
              className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Talleres grupales en horario de mañana
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-lg leading-[1.8] text-gray-700">
                  Son sesiones <strong>grupales, de hasta 8 participantes</strong>, de una
                  hora de duración que se realizan en <strong>horario de mañana</strong>.
                </p>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  Si bien parten de una estructuración y planificación de objetivos
                  previa, se adaptan en función del <strong>ritmo del grupo</strong>:
                  cada sesión es flexible para responder a lo que ese día el grupo necesita
                  o disfruta más.
                </p>
              </div>
              <div>
                <p className="text-lg leading-[1.8] text-gray-700">
                  De cara a que los grupos sean lo más compatibles posibles, se realiza
                  siempre una{" "}
                  <strong>primera entrevista previa con los pacientes</strong>. En ella
                  recojo información sobre el estado cognitivo, los intereses y la
                  disponibilidad de cada persona para asignarla al grupo más adecuado.
                </p>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  El resultado es un entorno donde todos los participantes se encuentran en
                  un nivel similar, lo que favorece la participación, la confianza y el
                  disfrute del taller.
                </p>
              </div>
            </div>
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
        <section className="bg-primary" aria-label="Contacto">
          <div className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-white md:text-4xl">
              ¿Empezamos?
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-lg leading-[1.8] text-white/80">
              Si buscas un entorno cercano en el que socializar, divertirte, estimular tu
              mente y mantenerte activo, pide una primera cita y te buscaré un grupo lo
              antes posible.
            </p>
            <Link
              href="/#contacto"
              className="mt-10 inline-block rounded-full bg-secondary px-10 py-4 text-base font-bold text-primary transition-opacity hover:opacity-90"
            >
              Pedir primera cita
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
