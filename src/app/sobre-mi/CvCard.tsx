"use client";

import { useState } from "react";
import { MdWorkspacePremium } from "react-icons/md";

export default function CvCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`flex items-start gap-6 rounded-3xl border p-8 transition-all duration-300 ${
        hovered
          ? "border-primary bg-primary text-white shadow-[0_15px_30px_rgba(0,84,34,0.2)]"
          : "border-gray-200 bg-white shadow-[0_5px_10px_rgba(0,0,0,0.03)]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`inline-flex shrink-0 rounded-xl p-3 transition-colors duration-300 ${
          hovered ? "bg-white/20 text-white" : "bg-secondary/50 text-primary"
        }`}
        aria-hidden="true"
      >
        <MdWorkspacePremium size={24} />
      </span>
      <div>
        <h3
          className={`text-lg font-semibold ${hovered ? "text-white" : "text-text"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-[15px] ${hovered ? "text-white/80" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      </div>
    </article>
  );
}
