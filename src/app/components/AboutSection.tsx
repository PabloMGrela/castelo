import { strings } from "@/lib/strings";
import { MdChatBubbleOutline, MdFavoriteBorder, MdAutoAwesome } from "react-icons/md";
import PrincipleCard from "./PrincipleCard";
import type { IconType } from "react-icons";

const steps = [
  "Programando una primera cita en la que recojo la demanda de intervención y los datos del paciente y de su entorno cercano.",
  "Valorando y analizando las necesidades de intervención a partir de protocolos, de tests y de la observación directa.",
  "Devolviendo la información recogida en una reunión y programando los objetivos de intervención.",
  "Interviniendo sobre los objetivos planificados durante las sesiones de logopedia y las orientaciones proporcionadas al entorno.",
  "Realizando un seguimiento constante de los avances.",
  "Manteniéndome coordinada con las diferentes personas que participan en la evolución del paciente.",
];

const principles: { title: string; description: string; icon: IconType }[] = [
  {
    title: strings.principle1Title,
    description: strings.principle1Desc,
    icon: MdChatBubbleOutline,
  },
  {
    title: strings.principle2Title,
    description: strings.principle2Desc,
    icon: MdFavoriteBorder,
  },
  {
    title: strings.principle3Title,
    description: strings.principle3Desc,
    icon: MdAutoAwesome,
  },
];

export default function AboutSection() {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-white py-32" aria-label="Metodología">
      {/* Decorative shape */}
      <div className="absolute -right-24 top-24 h-[400px] w-[400px] rotate-45 rounded-[80px] bg-primary/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        {/* Principios */}
        <div className="text-center">
          <span className="text-base font-bold tracking-[6px] text-primary uppercase">
            {strings.aboutTitle}
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-text md:text-4xl">
            {strings.aboutSubtitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" aria-hidden="true" />
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {principles.map((p) => (
            <PrincipleCard key={p.title} {...p} />
          ))}
        </div>

        {/* ¿Cómo lo hago? */}
        <div className="mt-24 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-text md:text-4xl">
            ¿Cómo lo hago?
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" aria-hidden="true" />
        </div>

        <ol className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-base leading-[1.8] text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
