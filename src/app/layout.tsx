import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { jsonLd } from "@/lib/schema";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://logopediacastelo.com"),
  title: {
    default: "Logopedia Castelo | Clínica de Logopedia en A Coruña",
    template: "%s | Logopedia Castelo",
  },
  description:
    "Logopedia Castelo. Logopedia en todas las etapas de la vida en A Coruña. Especialistas en estimulación temprana, dificultades de aprendizaje, daño cerebral adquirido y terapia miofuncional.",
  keywords: [
    "logopedia",
    "logopeda",
    "A Coruña",
    "clínica de logopedia",
    "estimulación temprana",
    "dificultades de aprendizaje",
    "autismo",
    "TDAH",
    "dislexia",
    "daño cerebral",
    "ictus",
    "afasia",
    "terapia miofuncional",
    "disfagia",
    "tartamudez",
    "demencia",
    "alzheimer",
    "envejecimiento",
  ],
  authors: [{ name: "Logopedia Castelo" }],
  openGraph: {
    type: "website",
    url: "https://logopediacastelo.com/",
    title: "Logopedia Castelo | Logopedia en todas las etapas de la vida",
    description:
      "Clínica de logopedia en A Coruña. Especialistas en comunicación, desarrollo, daño cerebral y terapia miofuncional.",
    images: [
      {
        url: "/full_logo.png",
        width: 1200,
        height: 630,
        alt: "Logopedia Castelo Full Logo",
      },
    ],
    siteName: "Logopedia Castelo",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logopedia Castelo | Logopedia en todas las etapas de la vida",
    description:
      "Clínica de logopedia en A Coruña. Especialistas en comunicación, desarrollo, daño cerebral y terapia miofuncional.",
    images: ["/full_logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", apple: "/icons/Icon-192.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#005422" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] bg-white">
        {children}
      </body>
    </html>
  );
}
