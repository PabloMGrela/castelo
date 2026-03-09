"use client";

import { useState } from "react";
import { MdAutoStories, MdPsychology, MdRecordVoiceOver, MdElderly } from "react-icons/md";
import { strings } from "@/lib/strings";
import type { IconType } from "react-icons";

const areas: { title: string; items: readonly string[]; icon: IconType }[] = [
  {
    title: strings.area1Intro,
    items: strings.area1Items,
    icon: MdAutoStories,
  },
  {
    title: strings.area2Intro,
    items: strings.area2Items,
    icon: MdPsychology,
  },
  {
    title: strings.area3Intro,
    items: strings.area3Items,
    icon: MdRecordVoiceOver,
  },
  {
    title: strings.area4Intro,
    items: strings.area4Items,
    icon: MdElderly,
  },
];

function AreaCard({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: readonly string[];
  icon: IconType;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={`rounded-3xl border-[1.5px] bg-white transition-all duration-300 ${
        isOpen
          ? "border-primary/30 shadow-[0_10px_30px_rgba(0,84,34,0.08)]"
          : "border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-4 px-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`inline-flex rounded-xl p-3 transition-colors duration-300 ${
            isOpen ? "bg-primary text-white" : "bg-secondary/40 text-primary"
          }`}
          aria-hidden="true"
        >
          <Icon size={24} />
        </span>
        <span
          className={`flex-1 text-lg transition-colors duration-300 ${
            isOpen ? "font-bold text-primary" : "font-semibold text-text"
          }`}
        >
          {title}
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
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
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <hr className="mx-8 border-black/10" />
          <ul className="px-8 pt-4 pb-8">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-5 pb-4">
                <span className="mt-2 block h-2 w-2 shrink-0 rounded-full border-2 border-primary bg-secondary" aria-hidden="true" />
                <span className="text-base font-medium leading-relaxed text-text/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function AreasSection() {
  return (
    <section id="areas" className="bg-white py-32" aria-label="Áreas de intervención">
      <div className="mx-auto max-w-[1000px] px-6 md:px-16">
        <div className="text-center">
          <span className="text-base font-bold tracking-[6px] text-primary uppercase">
            {strings.areasTitle}
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-text md:text-4xl">
            <span className="sr-only">Áreas de Logopedia: </span>
            {strings.areasSubtitle}
          </h2>
          <p className="mt-4 text-lg tracking-wider text-gray-500">
            {strings.areasIntro}
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-6">
          {areas.map((area) => (
            <AreaCard key={area.title} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
