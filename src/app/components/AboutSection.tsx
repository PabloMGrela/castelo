"use client";

import { strings } from "@/lib/strings";
import { MdChatBubbleOutline, MdFavoriteBorder, MdAutoAwesome } from "react-icons/md";
import PrincipleCard from "./PrincipleCard";
import type { IconType } from "react-icons";

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
    <section className="relative overflow-hidden bg-white py-32" aria-label="Filosofía">
      {/* Decorative shape */}
      <div className="absolute -right-24 top-24 h-[400px] w-[400px] rotate-45 rounded-[80px] bg-primary/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="flex items-center gap-6">
          <div className="h-0.5 w-[60px] bg-primary" aria-hidden="true" />
          <span className="text-base font-bold tracking-[4px] text-primary uppercase">
            {strings.aboutTitle}
          </span>
        </div>
        <h2 className="mt-8 max-w-[700px] font-[family-name:var(--font-playfair)] text-4xl font-extrabold leading-tight text-text md:text-5xl">
          <span className="sr-only">Logopedia en A Coruña: </span>
          {strings.aboutSubtitle}
        </h2>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {principles.map((p) => (
            <PrincipleCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
