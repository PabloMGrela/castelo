"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { strings } from "@/lib/strings";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1920&auto=format&fit=crop",
    alt: "Niña sonriendo en sesión de estimulación temprana",
  },
  {
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1920&auto=format&fit=crop",
    alt: "Logopeda trabajando con materiales didácticos en A Coruña",
  },
  {
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=1920&auto=format&fit=crop",
    alt: "Intervención logopédica infantil y juvenil",
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1920&auto=format&fit=crop",
    alt: "Terapia del lenguaje y comunicación para todas las edades",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Bienvenida"
    >
      {/* Background images */}
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-primary/45" />
        </div>
      ))}

      {/* Content */}
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
          <p className="mt-6 text-lg font-light tracking-[4px] text-white uppercase sm:mt-10 sm:text-2xl">
            {strings.heroTagline}
          </p>
          <div className="mx-auto mt-6 border-y border-white/30 px-4 py-2">
            <p className="text-sm tracking-[2.5px] font-normal text-secondary/90 sm:text-base">
              {strings.heroKeywords}
            </p>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-8">
        <div className="flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Imagen ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-secondary" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
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
