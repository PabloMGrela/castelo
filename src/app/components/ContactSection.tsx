"use client";

import { useState } from "react";
import { MdPhoneAndroid, MdAlternateEmail, MdMap, MdDirectionsBus, MdDirectionsBike, MdLocalParking } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
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
    icon: FaInstagram,
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
      className="bg-primary py-32"
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

        <div className="mx-auto mt-24 grid max-w-[600px] grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
          {contacts.map((c) => (
            <ContactCard key={c.title} {...c} />
          ))}

          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm md:col-span-2 w-full max-w-[280px] md:max-w-[600px]">
            <div className="relative aspect-video w-full overflow-hidden rounded-[24px] sm:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.104380704152!2d-8.39896952389876!3d43.35392717173566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427a40f0d714f245%3A0x934b56d23010b6bf!2sLogopedia%20Castelo!5e0!3m2!1en!2ses!4v1773761690890!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Logopedia Castelo en A Coruña"
                className="grayscale-[20%] transition-all hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Cómo llegar */}
        <div className="mt-20">
          <div className="text-center">
            <span className="text-base font-bold tracking-[6px] text-secondary uppercase">
              Accesos
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-extrabold text-white md:text-3xl">
              Cómo llegar
            </h3>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" aria-hidden="true" />
          </div>

          <dl className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Autobuses urbanos */}
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/20 text-secondary" aria-hidden="true">
                <MdDirectionsBus size={24} />
              </span>
              <div>
                <dt className="text-xs font-bold tracking-[2px] text-secondary/80 uppercase">Autobús urbano</dt>
                <dd className="mt-2 text-sm leading-[1.7] text-white/80">
                  Paradas de <strong className="text-white">Av. de Oza (nº 30 y nº 39)</strong> a 170 m. Líneas 2, 2A, 12, 17, 20 y 22.
                </dd>
              </div>
            </div>

            {/* Autobuses interurbanos */}
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/20 text-secondary" aria-hidden="true">
                <MdDirectionsBus size={24} />
              </span>
              <div>
                <dt className="text-xs font-bold tracking-[2px] text-secondary/80 uppercase">Autobús interurbano</dt>
                <dd className="mt-2 text-sm leading-[1.7] text-white/80">
                  Parada <strong className="text-white">A Gaiteira (nº 2006861)</strong> a 130 m. Líneas desde San Pedro de Nos, Sada, Betanzos y otras.
                </dd>
              </div>
            </div>

            {/* Bici */}
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/20 text-secondary" aria-hidden="true">
                <MdDirectionsBike size={24} />
              </span>
              <div>
                <dt className="text-xs font-bold tracking-[2px] text-secondary/80 uppercase">En bici</dt>
                <dd className="mt-2 text-sm leading-[1.7] text-white/80">
                  Aparcamiento de <strong className="text-white">Bici Coruña</strong> a 40 m.
                </dd>
              </div>
            </div>

            {/* Parking gratuito */}
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/20 text-secondary" aria-hidden="true">
                <MdLocalParking size={24} />
              </span>
              <div>
                <dt className="text-xs font-bold tracking-[2px] text-secondary/80 uppercase">Aparcamiento gratuito</dt>
                <dd className="mt-2 text-sm leading-[1.7] text-white/80">
                  <strong className="text-white">Mercadona Av. de Oza, 132</strong> — gratuito realizando una compra.
                </dd>
              </div>
            </div>

            {/* Parking de pago */}
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/20 text-secondary" aria-hidden="true">
                <MdLocalParking size={24} />
              </span>
              <div>
                <dt className="text-xs font-bold tracking-[2px] text-secondary/80 uppercase">Parking de pago</dt>
                <dd className="mt-2 text-sm leading-[1.7] text-white/80">
                  El más cercano está en el <strong className="text-white">Parque Europa</strong>.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
