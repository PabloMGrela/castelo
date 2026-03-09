"use client";

import { useState } from "react";
import type { IconType } from "react-icons";

interface Props {
  title: string;
  description: string;
  icon: IconType;
}

export default function PrincipleCard({ title, description, icon: Icon }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`w-full max-w-[360px] rounded-[32px] border p-12 transition-all duration-300 ${
        hovered
          ? "border-primary bg-primary text-white shadow-[0_20px_40px_rgba(0,84,34,0.3)]"
          : "border-gray-200 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`inline-flex rounded-2xl p-4 transition-colors duration-300 ${
          hovered ? "bg-white/20" : "bg-secondary/50"
        }`}
        aria-hidden="true"
      >
        <Icon size={32} className={hovered ? "text-white" : "text-primary"} />
      </div>
      <h3
        className={`mt-8 text-2xl font-bold ${hovered ? "text-white" : "text-text"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 text-base leading-relaxed ${
          hovered ? "text-white/90" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </article>
  );
}
