import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { buildBreadcrumbsNode } from "@/lib/schema";
import { MdAccessTime, MdEuroSymbol, MdCreditCard, MdEventBusy, MdAccessible, MdTranslate } from "react-icons/md";

export const metadata: Metadata = {
  title: "Tarifas y Horarios | Logopedia Castelo",
  description:
    "Precios y horarios de los servicios de logopedia en A Coruña. Sesiones individuales desde 30 €, talleres grupales desde 20 €. Pago en efectivo, bizum o transferencia.",
  keywords: [
    "tarifas logopedia A Coruña",
    "precio logopeda",
    "horario logopeda A Coruña",
    "coste sesión logopedia",
    "logopedia precio",
  ],
  alternates: { canonical: "/tarifas" },
  openGraph: {
    title: "Tarifas y Horarios | Logopedia Castelo",
    description:
      "Consulta los precios y horarios de Logopedia Castelo en A Coruña. Sesiones individuales, intervención en contexto natural y talleres de estimulación cognitiva.",
    url: "https://logopediacastelo.com/tarifas",
    images: [
      {
        url: "https://logopediacastelo.com/full_logo.png",
        width: 1200,
        height: 630,
        alt: "Tarifas y Horarios - Logopedia Castelo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifas y Horarios | Logopedia Castelo",
    description:
      "Precios y horarios de logopedia en A Coruña. Sesiones desde 30 €.",
    images: ["https://logopediacastelo.com/full_logo.png"],
  },
};

const vacationNotice = { active: true, until: "1 de octubre" };

const schedule = [
  { day: "Lunes", hours: ["10:45 – 13:00", "Tardes con cita previa"] },
  { day: "Martes", hours: ["10:45 – 13:00", "Tardes con cita previa"] },
  { day: "Miércoles", hours: ["10:45 – 13:00", "Tardes con cita previa"] },
  { day: "Jueves", hours: ["10:45 – 13:00", "Tardes con cita previa"] },
  { day: "Viernes", hours: ["Cerrado"] },
  { day: "Sábado", hours: ["Cerrado"] },
  { day: "Domingo", hours: ["Cerrado"] },
];

const prices = [
  {
    label: "Sesión individual",
    duration: "45 minutos",
    price: "30 €/sesión",
    unit: "",
    note: "Estimulación temprana, dificultades de aprendizaje, terapia miofuncional...",
  },
  {
    label: "Intervención en contexto natural",
    duration: "1 hora",
    price: "45 €/sesión",
    unit: "",
    note: "Sesiones en domicilio, colegio u otros entornos naturales del paciente.",
  },
  {
    label: "Taller de estimulación cognitiva",
    duration: "1 hora",
    price: "50 €/mes",
    unit: "",
    note: "Sesiones grupales de entre 3 y 8 participantes. Jueves por la mañana. (Consultar disponibilidad de otros horarios)",
  },
];

export default function TarifasPage() {
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
                "@type": "WebPage",
                "@id": "https://logopediacastelo.com/tarifas#webpage",
                url: "https://logopediacastelo.com/tarifas",
                name: "Tarifas y Horarios | Logopedia Castelo",
                description:
                  "Precios y horarios de los servicios de logopedia en A Coruña.",
                isPartOf: { "@id": "https://logopediacastelo.com/#website" },
                about: { "@id": "https://logopediacastelo.com/#organization" },
                inLanguage: "es",
              },
              buildBreadcrumbsNode([
                { name: "Inicio", url: "https://logopediacastelo.com/" },
                { name: "Tarifas", url: "https://logopediacastelo.com/tarifas" },
              ]),
              {
                "@type": "Service",
                "@id": "https://logopediacastelo.com/tarifas#sesion-individual",
                name: "Sesión individual de logopedia",
                provider: { "@id": "https://logopediacastelo.com/#organization" },
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
              {
                "@type": "Service",
                "@id": "https://logopediacastelo.com/tarifas#intervencion-natural",
                name: "Intervención en contexto natural",
                provider: { "@id": "https://logopediacastelo.com/#organization" },
                offers: {
                  "@type": "Offer",
                  price: "45",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "45",
                    priceCurrency: "EUR",
                    unitText: "por sesión de 1 hora en contexto natural",
                  },
                },
              },
              {
                "@type": "Service",
                "@id": "https://logopediacastelo.com/tarifas#taller-cognitivo",
                name: "Taller de estimulación cognitiva",
                provider: { "@id": "https://logopediacastelo.com/#organization" },
                offers: {
                  "@type": "Offer",
                  price: "50",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "50",
                    priceCurrency: "EUR",
                    unitText: "mensual por sesiones grupales de 1 hora",
                  },
                },
              },
            ],
          }),
        }}
      />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden bg-primary pt-[100px]"
          aria-label="Tarifas y Horarios"
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
              <span className="text-base font-bold tracking-[4px] text-secondary uppercase">
                Información práctica
              </span>
            </div>
            <h1 className="mt-8 font-[family-name:var(--font-playfair)] text-4xl font-extrabold text-white md:text-5xl">
              Tarifas y Horarios
            </h1>
            <p className="mt-6 max-w-[600px] text-lg leading-[1.8] text-white/70">
              Información actualizada a junio de 2026. Ante cualquier duda, no dudes en
              contactarme.
            </p>
          </div>
        </section>

        {/* ── Horarios ── */}
        <section className="bg-white" aria-labelledby="horarios-heading">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <span
                className="inline-flex rounded-xl bg-secondary/50 p-3 text-primary"
                aria-hidden="true"
              >
                <MdAccessTime size={24} />
              </span>
              <h2
                id="horarios-heading"
                className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900"
              >
                Horarios
              </h2>
            </div>

            {vacationNotice.active ? (
              <div className="mt-10 rounded-3xl border border-primary/20 bg-primary p-10 text-center shadow-sm sm:p-14">
                <p className="text-xs font-bold tracking-[3px] text-secondary uppercase">
                  Aviso
                </p>
                <p className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-extrabold text-white sm:text-3xl">
                  Cerrado por vacaciones
                </p>
                <p className="mt-3 text-base font-semibold text-secondary sm:text-lg">
                  Volvemos el {vacationNotice.until}
                </p>
              </div>
            ) : (
              <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {schedule.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
                  >
                    <p className="text-xs font-bold tracking-[3px] text-primary uppercase">
                      {day}
                    </p>
                    <div className="mt-3">
                      {hours.map((h) => (
                        <p key={h} className="text-base font-semibold leading-[1.7] text-gray-800">
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Precios ── */}
        <section
          className="bg-secondary/30"
          aria-labelledby="precios-heading"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <span
                className="inline-flex rounded-xl bg-primary/10 p-3 text-primary"
                aria-hidden="true"
              >
                <MdEuroSymbol size={24} />
              </span>
              <h2
                id="precios-heading"
                className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-gray-900"
              >
                Precios
              </h2>
            </div>

            <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
              {prices.map(({ label, duration, price, note, unit }) => (
                <div
                  key={label}
                  className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <p className="text-sm font-bold tracking-[2px] text-primary uppercase">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{duration}</p>
                  <p className="mt-6 font-[family-name:var(--font-playfair)] text-5xl font-extrabold text-gray-900">
                    {price.split("/")[0]}
                    {price.includes("/") && (
                      <span className="text-2xl font-bold">
                        /{price.split("/")[1]}
                      </span>
                    )}
                  </p>
                  {unit && <p className="mt-1 text-xs text-gray-400">{unit}</p>}
                  <p className="mt-6 flex-1 text-sm leading-[1.7] text-gray-600">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pago y cancelaciones ── */}
        <section className="bg-white" aria-labelledby="pago-heading">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
              {/* Pago */}
              <div>
                <div className="flex items-center gap-4">
                  <span
                    className="inline-flex rounded-xl bg-secondary/50 p-3 text-primary"
                    aria-hidden="true"
                  >
                    <MdCreditCard size={24} />
                  </span>
                  <h2
                    id="pago-heading"
                    className="font-[family-name:var(--font-playfair)] text-2xl font-extrabold text-gray-900"
                  >
                    Modos de pago
                  </h2>
                </div>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  El pago se realiza <strong>al final de las sesiones</strong>. Se acepta:
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {["Efectivo", "Bizum", "Transferencia bancaria"].map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-3 text-base text-gray-700"
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cancelaciones */}
              <div>
                <div className="flex items-center gap-4">
                  <span
                    className="inline-flex rounded-xl bg-secondary/50 p-3 text-primary"
                    aria-hidden="true"
                  >
                    <MdEventBusy size={24} />
                  </span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-extrabold text-gray-900">
                    Política de cancelaciones
                  </h2>
                </div>
                <p className="mt-6 text-lg leading-[1.8] text-gray-700">
                  En el caso de tener que cancelar una sesión, deberá avisarse con{" "}
                  <strong>24 horas de antelación</strong>. De lo contrario, se cobrará
                  en la siguiente sesión.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── También debes saber ── */}
        <section className="bg-secondary/30" aria-labelledby="info-heading">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-16">
            <div className="flex items-center gap-6">
              <div className="h-0.5 w-[60px] bg-primary" aria-hidden="true" />
              <h2
                id="info-heading"
                className="font-[family-name:var(--font-playfair)] text-2xl font-extrabold text-gray-900"
              >
                También debes saber
              </h2>
            </div>
            <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2">
              <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/50 text-primary" aria-hidden="true">
                  <MdTranslate size={24} />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Atención en gallego</p>
                  <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                    Las sesiones pueden realizarse en castellano o en gallego, según la preferencia del paciente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/50 text-primary" aria-hidden="true">
                  <MdAccessible size={24} />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Local accesible</p>
                  <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                    El local es accesible para personas con movilidad reducida o usuarios de silla de ruedas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-primary" aria-label="Contacto">
          <div className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-white md:text-4xl">
              ¿Tienes alguna duda?
            </h2>
            <p className="mx-auto mt-6 max-w-[500px] text-lg leading-[1.8] text-white/80">
              Escríbeme o llámame y te resuelvo cualquier pregunta antes de la primera
              cita.
            </p>
            <Link
              href="/#contacto"
              className="mt-10 inline-block rounded-full bg-secondary px-10 py-4 text-base font-bold text-primary transition-opacity hover:opacity-90"
            >
              Contactar
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
