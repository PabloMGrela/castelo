"use client";

import { useEffect } from "react";
import { strings } from "@/lib/strings";
import { MdStar } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    name: "Sandra Deive",
    text: "Cris es una gran profesional. Acudí a ella por un problema de deglución y con mucha empatía y amabilidad me explicó todo lo relativo al tratamiento a seguir y las pautas que debo tener en cuenta. Además, actualmente, realiza un seguimiento semanal conmigo para ver mi evolución y siempre está disponible para resolver mis dudas. Sin duda la recomiendo.",
    source: "google",
    url: "https://maps.app.goo.gl/uh5jkkFpi8nrx9YC7",
  },
  {
    name: "Marcos",
    text: "Encantadora, gran profesional. Explica todo lo que hace al final de la sesión. Muy recomendable.",
    source: "doctoralia",
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Beatriz",
    text: "Cristina fue muy empática en la explicación del tratamiento... Congenió muy bien con mi hijo y, además, puso en valor sus fortalezas.",
    source: "doctoralia",
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Sandra",
    text: "La niña le tiene mucho cariño y va encantada. Eso lo dice todo de la buena profesional que es.",
    source: "doctoralia",
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Paula",
    text: "Muy atenta, excelente explicación y resolutiva. La atención es adaptada a las necesidades.",
    source: "doctoralia",
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Ramiro",
    text: "Muy encantados, y en el peque se notan los cambios... ahora va encantado.",
    source: "doctoralia",
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Cristina R.",
    text: "Cristina es muy amable. Buen profesional cercano y con buen trato.",
    source: "doctoralia",
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
];

function TestimonialCard({ name, text, source, url }: { name: string; text: string; source: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex w-[85vw] flex-none flex-col rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_10px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 md:w-[350px]"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((i) => (
            <MdStar key={i} size={18} />
          ))}
        </div>
        {source === "google" ? (
          <FcGoogle size={20} title="Ver reseña en Google" />
        ) : (
          <span className="text-[10px] font-bold text-[#3dccce] uppercase tracking-wider" title="Ver perfil en Doctoralia">Doctoralia</span>
        )}
      </div>
      <p className="mt-6 flex-1 text-base leading-relaxed text-gray-700 italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <span className="block font-bold text-text text-sm">{name}</span>
          <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-medium">Paciente verificado</span>
        </div>
      </div>
    </a>
  );
}

export default function TestimonialsSection() {
  useEffect(() => {
    // Inyectamos el cargador de Doctoralia
    // @ts-ignore
    (function ($_x, _s, id) {
      var js, fjs = $_x.getElementsByTagName(_s)[0];
      if (!$_x.getElementById(id)) {
        js = $_x.createElement(_s) as HTMLScriptElement;
        js.id = id;
        js.src = "//platform.docplanner.com/js/widget.js";
        // @ts-ignore
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        // Si ya existe, forzamos re-inicialización
        // @ts-ignore
        if (window.ZlWidget) window.ZlWidget.init();
      }
    })(document, "script", "zl-widget-s");
  }, []);

  return (
    <section className="bg-primary/[0.02] py-32" aria-label="Opiniones de pacientes">
      <div className="mx-auto max-w-[1200px]">
        <div className="px-6 text-center md:px-16">
          <span className="text-base font-bold tracking-[6px] text-primary uppercase">
            {strings.testimonialsTitle}
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-text md:text-4xl">
            {strings.testimonialsSubtitle}
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-base text-gray-500">
            {strings.testimonialsIntro}
          </p>
        </div>

        {/* Doctoralia Widget */}
        <div className="mt-16 flex justify-center px-6 min-h-[300px]">
          <a
            id="zl-url"
            className="zl-url inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg"
            href="http://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna"
            rel="nofollow"
            data-zlw-doctor="cristina-barros-perez"
            data-zlw-type="big"
            data-zlw-opinion="true"
            data-zlw-hide-branding="true"
            data-zlw-saas-only="false"
            data-zlw-a11y-title="Widget de reserva de citas médicas"
          >
            Reserve una cita
          </a>
        </div>

        {/* Horizontal Carousel */}
        <div className="mt-16 overflow-x-auto pb-12 no-scrollbar">
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
