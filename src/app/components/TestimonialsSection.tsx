"use client";

import { strings } from "@/lib/strings";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    name: "Marcos",
    text: "Encantadora, gran profesional. Explica todo lo que hace al final de la sesión. Muy recomendable.",
  },
  {
    name: "Beatriz",
    text: "Cristina fue muy empática en la explicación del tratamiento... Congenió muy bien con mi hijo y, además, puso en valor sus fortalezas.",
  },
  {
    name: "Sandra",
    text: "La niña le tiene mucho cariño y va encantada. Eso lo dice todo de la buena profesional que es.",
  },
  {
    name: "Paula",
    text: "Muy atenta, excelente explicación y resolutiva. La atención es adaptada a las necesidades.",
  },
  {
    name: "Ramiro",
    text: "Muy encantados, y en el peque se notan los cambios... ahora va encantado.",
  },
  {
    name: "Cristina R.",
    text: "Cristina es muy amable. Buen profesional cercano y con buen trato.",
  },
];

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="flex w-[85vw] flex-none flex-col rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_10px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:w-[350px]">
      <div className="flex gap-1 text-amber-400" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <MdStar key={i} size={20} />
        ))}
      </div>
      <p className="mt-6 flex-1 text-base leading-relaxed text-gray-700">
        "{text}"
      </p>
      <div className="mt-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
          {name.charAt(0)}
        </div>
        <span className="font-semibold text-text">{name}</span>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-primary/[0.02] py-32" aria-label="Opiniones de pacientes">
      <div className="mx-auto max-w-[1200px]">
        <div className="px-6 text-center md:px-16">
          <span className="text-base font-bold tracking-[6px] text-primary uppercase">
            {strings.testimonialsTitle}
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-text md:text-4xl">
            <span className="sr-only">Opiniones Logopedia en A Coruña: </span>
            {strings.testimonialsSubtitle}
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-base text-gray-500">
            {strings.testimonialsIntro}
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="mt-20 overflow-x-auto pb-12 no-scrollbar">
          <div className="flex gap-6 px-6 md:gap-8 md:px-16 w-max">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
