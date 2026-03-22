"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const heroImages = [
  {
    src: "/photo1.webp",
    alt: "Material didáctico y juegos de estimulación en Logopedia Castelo",
  },
  {
    src: "/photo2.webp",
    alt: "Interior de la clínica de logopedia en A Coruña",
  },
  {
    src: "/photo3.webp",
    alt: "Fachada exterior de Logopedia Castelo",
  },
];

export default function HeroCarouselOverlay() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));

  const next = useCallback(() => {
    setCurrent((c) => {
      const nextIdx = (c + 1) % heroImages.length;
      setLoaded((prev) => new Set(prev).add(nextIdx));
      return nextIdx;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const nextIdx = (current + 1) % heroImages.length;
    setLoaded((prev) => new Set(prev).add(nextIdx));
  }, [current]);

  return (
    <>
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {(i === 0 || loaded.has(i)) && (
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-primary/45" />
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setLoaded((prev) => new Set(prev).add(i));
              setCurrent(i);
            }}
            aria-label={`Imagen ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-secondary" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </>
  );
}
