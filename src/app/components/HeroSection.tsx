import Image from "next/image";
import { strings } from "@/lib/strings";
import HeroCarouselOverlay from "./HeroCarouselOverlay";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Bienvenida"
    >
      {/* First image — server-rendered, guarantees LCP preload in static HTML */}
      <div className="absolute inset-0">
        <Image
          src="/photo1.webp"
          alt="Material didáctico y juegos de estimulación en Logopedia Castelo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/45" />
      </div>

      {/* Carousel overlay — client component handles transitions and indicators */}
      <HeroCarouselOverlay />

      {/* Content — server-rendered: H1 present in initial HTML */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-32">
        <div className="rounded-[40px] border border-white/20 bg-white/8 px-8 py-8 text-center backdrop-blur-xl sm:px-16 sm:py-14">
          <Image
            src="/castelo_logo_no_logo.svg"
            alt="Logopedia Castelo"
            width={220}
            height={80}
            className="mx-auto h-auto w-40 brightness-0 invert sm:w-56"
            priority
          />
          <h1 className="mt-6 text-lg font-light tracking-[4px] text-white uppercase sm:mt-10 sm:text-2xl">
            {strings.heroTagline}
          </h1>
          <div className="mx-auto mt-6 border-y border-white/30 px-4 py-2">
            <p className="text-sm tracking-[2.5px] font-normal text-secondary/90 sm:text-base">
              {strings.heroKeywords}
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/#contacto"
              className="rounded-full bg-secondary px-8 py-3 text-sm font-bold tracking-wide text-primary transition-opacity hover:opacity-90"
            >
              Pedir primera consulta
            </a>
            <a
              href="/#servicios"
              className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <svg
          className="h-8 w-8 animate-bounce text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
