import Image from "next/image";
import { strings } from "@/lib/strings";

const services = [
  {
    title: strings.service1Title,
    icon: "/icons/baby-boy.png",
    alt: "Icono de estimulación temprana infantil",
    color: "bg-pink-50",
    tint: "hover:border-pink-400",
    shadow: "hover:shadow-pink-200/40",
  },
  {
    title: strings.service2Title,
    icon: "/icons/mindset.png",
    alt: "Icono de dificultades del aprendizaje",
    color: "bg-blue-50",
    tint: "hover:border-blue-500",
    shadow: "hover:shadow-blue-200/40",
  },
  {
    title: strings.service3Title,
    icon: "/icons/speak.png",
    alt: "Icono de terapia miofuncional y voz",
    color: "bg-amber-50",
    tint: "hover:border-amber-500",
    shadow: "hover:shadow-amber-200/40",
  },
  {
    title: strings.service4Title,
    icon: "/icons/family.png",
    alt: "Icono de intervención familiar y educativa",
    color: "bg-purple-50",
    tint: "hover:border-purple-500",
    shadow: "hover:shadow-purple-200/40",
  },
  {
    title: strings.service5Title,
    icon: "/icons/aging.png",
    alt: "Icono de estimulación cognitiva para mayores",
    color: "bg-green-50",
    tint: "hover:border-green-500",
    shadow: "hover:shadow-green-200/40",
  },
];

function ServiceCard({
  title,
  icon,
  alt,
  color,
  tint,
  shadow,
}: (typeof services)[0]) {
  return (
    <article
      className={`group flex w-full max-w-[320px] flex-col items-center rounded-[32px] border-2 border-transparent bg-white p-10 shadow-[0_10px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px] ${tint} ${shadow}`}
    >
      <div
        className={`flex h-[120px] w-[120px] items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${color}`}
      >
        <Image src={icon} alt={alt} width={56} height={56} />
      </div>
      <h3 className="mt-10 text-center text-base font-semibold leading-relaxed text-text">
        {title}
      </h3>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-primary/[0.02] py-32"
      aria-label="Servicios"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="text-center">
          <span className="text-base font-bold tracking-[6px] text-primary uppercase">
            {strings.servicesTitle}
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-text md:text-4xl">
            {strings.servicesSubtitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" aria-hidden="true" />
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
