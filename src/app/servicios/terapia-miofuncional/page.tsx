import type { Metadata } from "next";
import Link from "next/link";
import { MdGroups } from "react-icons/md";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { buildBreadcrumbsNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terapia Miofuncional en A Coruña",
  description:
    "Terapia Miofuncional en A Coruña para todas las edades. Tratamiento de desequilibrios musculares orofaciales: respiración oral, deglución atípica, afonías, parálisis facial y más.",
  keywords: [
    "terapia miofuncional A Coruña",
    "logopeda deglución atípica",
    "respiración oral tratamiento",
    "logopeda tartamudez",
    "disfagia logopeda",
    "disfonía logopeda A Coruña",
    "parálisis facial logopedia",
  ],
  alternates: { canonical: "/servicios/terapia-miofuncional" },
  openGraph: {
    title: "Terapia Miofuncional | Logopedia Castelo",
    description:
      "Logopedia especializada en terapia miofuncional en A Coruña. Respiración, masticación, deglución y voz para todas las edades.",
    url: "https://logopediacastelo.com/servicios/terapia-miofuncional",
    images: [
      {
        url: "https://logopediacastelo.com/full_logo.png",
        width: 1200,
        height: 630,
        alt: "Terapia Miofuncional - Logopedia Castelo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia Miofuncional en A Coruña | Logopedia Castelo",
    description:
      "Reeducación de la musculatura orofacial para respiración, masticación, deglución y voz en A Coruña.",
    images: ["https://logopediacastelo.com/full_logo.png"],
  },
};

const conditions = [
  "Respiración oral",
  "Deglución atípica",
  "Afonías recurrentes",
  "Parálisis facial",
  "Dislalias (rotacismos, sigmatismos…)",
  "Tartamudez",
  "Disfagia",
  "Disfonía",
];

const warnings = [
  "Respiráis por la boca",
  "Tenéis dificultades para contener la saliva dentro de la boca",
  "Tenéis dificultades para masticar algunas texturas",
  "Empezáis a tener los dientes descolocados",
  "Os atragantáis frecuentemente",
  "Os quedáis afónicos a menudo",
  "Os fatigáis al comer o al hablar",
];

const otrosServicios = [
  { href: "/servicios/estimulacion-temprana", label: "Estimulación Temprana" },
  { href: "/servicios/dificultades-aprendizaje", label: "Dificultades del Aprendizaje" },
  { href: "/servicios/intervencion-familiar", label: "Intervención Familiar" },
  { href: "/servicios/estimulacion-cognitiva", label: "Estimulación Cognitiva" },
];

export default function TerapiaMiofuncionalPage() {
  return (
    <>
      <Navbar />
      <nav aria-label="Breadcrumb" className="fixed top-[100px] left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <ol className="mx-auto flex max-w-[1200px] items-center gap-2 px-6 py-2 text-sm text-gray-500 md:px-16" role="list">
          <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li><a href="/#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li className="font-medium text-primary" aria-current="page">Terapia Miofuncional</li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id":
                  "https://logopediacastelo.com/servicios/terapia-miofuncional#webpage",
                url: "https://logopediacastelo.com/servicios/terapia-miofuncional",
                name: "Terapia Miofuncional en A Coruña | Logopedia Castelo",
                description:
                  "Terapia Miofuncional para todas las edades en A Coruña.",
                isPartOf: { "@id": "https://logopediacastelo.com/#website" },
                about: { "@id": "https://logopediacastelo.com/#organization" },
                inLanguage: "es",
              },
              {
                "@type": "Service",
                "@id":
                  "https://logopediacastelo.com/servicios/terapia-miofuncional#service",
                name: "Terapia Miofuncional",
                description:
                  "Terapia logopédica para todas las edades destinada a corregir desequilibrios musculares orofaciales y reeducar las funciones de respiración, masticación, deglución, habla o mímica.",
                url: "https://logopediacastelo.com/servicios/terapia-miofuncional",
                provider: {
                  "@id": "https://logopediacastelo.com/#organization",
                },
                serviceType: "Myofunctional Therapy",
                areaServed: { "@type": "City", name: "A Coruña" },
                audience: {
                  "@type": "Audience",
                  audienceType: "Todas las edades",
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
                  name: "Terapia Miofuncional",
                  url: "https://logopediacastelo.com/servicios/terapia-miofuncional",
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
          aria-label="Terapia Miofuncional"
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
              Terapia Miofuncional
            </h1>
            <p className="mt-4 text-xl text-white/80">
              Respiración, masticación, deglución y voz
            </p>
            <p className="mt-6 max-w-[640px] text-lg leading-[1.8] text-white/70">
              Reeducar las funciones alteradas para recuperar el equilibrio muscular
              orofacial y mejorar la calidad de vida.
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
              Logopedia para la musculatura orofacial
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-lg leading-[1.8] text-gray-700">
                  La <strong>Terapia Miofuncional</strong> es un tipo de terapia logopédica
                  destinada a todas las edades que tiene como objetivo corregir los
                  desequilibrios musculares orofaciales (lengua, labios, mejillas…)
                  reeducando las funciones alteradas de respiración, masticación, deglución,
                  habla o mímica, como en el caso de pacientes con respiración oral, deglución
                  atípica, afonías recurrentes o parálisis facial.
                </p>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  Para lograr los objetivos, es de vital importancia el{" "}
                  <strong>compromiso del paciente</strong> (o de su entorno cercano en el caso
                  de los pacientes infantojuveniles), ya que, además de la intervención en la
                  clínica, se deben realizar ejercicios en el domicilio con cierta frecuencia,
                  con el objetivo de generalizar lo aprendido en las sesiones.
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
                      Desde niños con deglución atípica hasta adultos con afonías
                      recurrentes o parálisis facial. La terapia miofuncional se adapta
                      a cada etapa de la vida.
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
                    <h3 className="font-semibold text-gray-900">Ejercicios en casa</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      La generalización de los aprendizajes ocurre fuera de la clínica.
                      Se proporciona una rutina de ejercicios para realizar en el domicilio
                      que potencia los avances conseguidos en sesión.
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
                    <h3 className="font-semibold text-gray-900">Coordinación interdisciplinar</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                      Especialmente importante la coordinación con el ortodoncista o el
                      otorrinolaringólogo, para recoger información relevante y ajustar
                      los objetivos de la terapia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Condiciones */}
            <div className="mt-14">
              <p className="text-base font-semibold text-gray-700">Condiciones que trato:</p>
              <ul className="mt-4 flex flex-wrap gap-3" role="list">
                {conditions.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-gray-800"
                  >
                    {c}
                  </li>
                ))}
              </ul>
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
                de cada paciente, adaptando los tiempos de trabajo-descanso según los
                objetivos y las necesidades. Además, durante las sesiones se utilizan apoyos
                (gestos, comunicador, imágenes…) que faciliten tanto la comprensión como
                la expresión.
              </p>
              <p className="text-lg leading-[1.8] text-gray-700">
                La frecuencia y formato de las sesiones dependerá de cada caso en particular,
                si bien habitualmente la frecuencia es de una sesión individual semanal. En este
                servicio es particularmente importante la coordinación con otros profesionales
                tales como el ortodoncista o el otorrinolaringólogo, para recoger información
                relevante y ajustar los objetivos de la terapia.
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
              Si tú o tu hijo o hija…
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
