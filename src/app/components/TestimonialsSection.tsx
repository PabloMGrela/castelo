"use client";

import { useEffect, useRef, useState } from "react";
import { strings } from "@/lib/strings";
import { MdStar } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import type { GoogleReview } from "@/lib/google-reviews";

const doctoraliaReviews = [
  {
    name: "Marcos",
    text: "Encantadora, gran profesional. Explica todo lo que hace al final de la sesión. Muy recomendable.",
    source: "doctoralia" as const,
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Beatriz",
    text: "Cristina fue muy empática en la explicación del tratamiento... Congenió muy bien con mi hijo y, además, puso en valor sus fortalezas.",
    source: "doctoralia" as const,
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Sandra",
    text: "La niña le tiene mucho cariño y va encantada. Eso lo dice todo de la buena profesional que es.",
    source: "doctoralia" as const,
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Paula",
    text: "Muy atenta, excelente explicación y resolutiva. La atención es adaptada a las necesidades.",
    source: "doctoralia" as const,
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Ramiro",
    text: "Muy encantados, y en el peque se notan los cambios... ahora va encantado.",
    source: "doctoralia" as const,
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
  {
    name: "Cristina R.",
    text: "Cristina es muy amable. Buen profesional cercano y con buen trato.",
    source: "doctoralia" as const,
    url: "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna#profile-reviews",
  },
];

function TestimonialCard({ name, text, source, url, profilePhoto }: { name: string; text: string; source: string; url: string; profilePhoto?: string }) {
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
        {profilePhoto ? (
          <img
            src={profilePhoto}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <span className="block font-bold text-text text-sm">{name}</span>
          <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-medium">Paciente verificado</span>
        </div>
      </div>
    </a>
  );
}

export default function TestimonialsSection({ googleReviews = [] }: { googleReviews?: GoogleReview[] }) {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [widgetState, setWidgetState] = useState<"loading" | "loaded" | "failed">("loading");

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
        // @ts-ignore
        if (window.ZlWidget) window.ZlWidget.init();
      }
    })(document, "script", "zl-widget-s");

    // MutationObserver: detecta cuando Doctoralia reemplaza el <a> con el widget
    const observer = new MutationObserver(() => {
      const anchor = document.getElementById("zl-url");
      if (!anchor || anchor.tagName !== "A") {
        setWidgetState("loaded");
        observer.disconnect();
      }
    });

    if (widgetContainerRef.current) {
      observer.observe(widgetContainerRef.current, { childList: true, subtree: true });
    }

    // Fallback: si en 5s el widget sigue sin cargar, ocultamos la sección
    const timeout = setTimeout(() => {
      const anchor = document.getElementById("zl-url");
      if (anchor && anchor.tagName === "A") {
        setWidgetState("failed");
        observer.disconnect();
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
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
        {widgetState !== "failed" && (
          <div ref={widgetContainerRef} className="relative mt-16 flex min-h-[300px] items-center justify-center px-6">
            {/* Loader visible solo mientras carga */}
            {widgetState === "loading" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4" aria-hidden="true">
                <div className="h-10 w-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <span className="text-xs font-medium tracking-widest text-primary/50 uppercase">Cargando</span>
              </div>
            )}
            {/* El <a> debe estar en el DOM para que Doctoralia lo inicialice */}
            <a
              id="zl-url"
              className="zl-url"
              style={{ opacity: 0, pointerEvents: "none", position: "absolute" }}
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
        )}

        {/* Horizontal Carousel */}
        <div className="mt-16 overflow-x-auto pb-12 no-scrollbar">
          <div className="flex gap-6 px-6 md:gap-8 md:px-16 w-max">
            {googleReviews.map((t) => (
              <TestimonialCard key={`g-${t.name}`} name={t.name} text={t.text} source="google" url={t.url} profilePhoto={t.profilePhoto} />
            ))}
            {doctoraliaReviews.map((t) => (
              <TestimonialCard key={`d-${t.name}`} name={t.name} text={t.text} source={t.source} url={t.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
