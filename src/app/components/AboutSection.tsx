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
    <section id="metodologia" className="relative overflow-hidden bg-white py-32" aria-label="Metodología">
      {/* Decorative shape */}
      <div className="absolute -right-24 top-24 h-[400px] w-[400px] rotate-45 rounded-[80px] bg-primary/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="text-center">
          <span className="text-base font-bold tracking-[6px] text-primary uppercase">
            {strings.aboutTitle}
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-text md:text-4xl">
            {strings.aboutSubtitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" aria-hidden="true" />
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {principles.map((p) => (
            <PrincipleCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
