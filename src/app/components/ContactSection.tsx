"use client";

import { useState } from "react";
import Link from "next/link";
import { MdPhoneAndroid, MdAlternateEmail, MdMap, MdCameraAlt, MdFavorite } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { strings } from "@/lib/strings";
import type { IconType } from "react-icons";

const contacts: {
  icon: IconType;
  title: string;
  content: string;
  subtitle: string;
  href: string;
  whatsappHref?: string;
  label: string;
}[] = [
  {
    icon: MdPhoneAndroid,
    title: strings.contactPhoneTitle,
    content: strings.contactPhoneVal,
    subtitle: strings.contactPhoneSub,
    href: strings.urlTel,
    whatsappHref: strings.urlWhatsapp,
    label: "Llamar o enviar WhatsApp",
  },
  {
    icon: MdAlternateEmail,
    title: strings.contactEmailTitle,
    content: strings.contactEmailVal,
    subtitle: strings.contactEmailSub,
    href: strings.urlMail,
    label: "Enviar un correo electrónico",
  },
  {
    icon: MdMap,
    title: strings.contactLocTitle,
    content: strings.contactLocVal,
    subtitle: strings.contactLocSub,
    href: strings.urlMaps,
    label: "Ver ubicación en el mapa",
  },
  {
    icon: MdCameraAlt,
    title: strings.contactInstaTitle,
    content: strings.contactInstaVal,
    subtitle: strings.contactInstaSub,
    href: strings.urlInsta,
    label: "Abrir perfil de Instagram",
  },
];

function ContactCard({
  icon: Icon,
  title,
  content,
  subtitle,
  href,
  whatsappHref,
  label,
}: (typeof contacts)[0]) {
  const [hovered, setHovered] = useState(false);

  if (whatsappHref) {
    return (
      <div
        className={`flex w-full max-w-[280px] flex-col items-center rounded-[32px] border-[1.5px] px-6 py-12 text-center transition-all duration-300 ${
          hovered
            ? "border-secondary/50 bg-white/[0.12]"
            : "border-white/10 bg-white/5"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex gap-4">
          <a
            href={href}
            aria-label="Llamar por teléfono"
            className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-secondary transition-all hover:bg-secondary hover:text-primary active:scale-95"
          >
            <Icon size={28} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar WhatsApp"
            className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-secondary transition-all hover:bg-[#25D366] hover:text-white active:scale-95"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
        <span className="mt-8 text-xs font-bold tracking-[2px] text-secondary/80 uppercase">
          {title}
        </span>
        <span className="mt-4 text-lg font-bold text-white">{content}</span>
        <span className="mt-2 text-sm text-white/50">{subtitle}</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`flex w-full max-w-[280px] flex-col items-center rounded-[32px] border-[1.5px] px-6 py-12 text-center transition-all duration-300 ${
        hovered
          ? "border-secondary/50 bg-white/[0.12]"
          : "border-white/10 bg-white/5"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`inline-flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300 ${
          hovered ? "bg-secondary text-primary" : "bg-white/10 text-secondary"
        }`}
        aria-hidden="true"
      >
        <Icon size={28} />
      </span>
      <span className="mt-8 text-xs font-bold tracking-[2px] text-secondary/80 uppercase">
        {title}
      </span>
      <span className="mt-4 text-lg font-bold text-white">{content}</span>
      <span className="mt-2 text-sm text-white/50">{subtitle}</span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-primary py-32 pb-16"
      aria-label="Contacto"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="text-center">
          <span className="text-base font-bold tracking-[6px] text-secondary uppercase">
            {strings.contactTitle}
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-white md:text-4xl">
            {strings.contactSubtitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" aria-hidden="true" />
        </div>

        <div className="mt-24 flex flex-wrap justify-center gap-6">
          {contacts.map((c) => (
            <ContactCard key={c.title} {...c} />
          ))}
        </div>

        <footer className="mt-32">
          <hr className="border-white/10" />
          <nav
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/40"
            aria-label="Enlaces legales"
          >
            <Link href="/aviso-legal" className="transition-colors hover:text-white/70">
              Aviso Legal
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/politica-privacidad" className="transition-colors hover:text-white/70">
              Política de Privacidad
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/politica-cookies" className="transition-colors hover:text-white/70">
              Política de Cookies
            </Link>
          </nav>
          <div className="mt-6 flex items-center justify-center gap-3">
            <p className="text-sm text-white/50">{strings.copyright}</p>
            <span className="text-secondary/60" aria-hidden="true">
              <MdFavorite size={16} />
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
