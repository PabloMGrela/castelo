import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://logopediacastelo.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-03-09"),
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date("2026-03-09"),
    },
    {
      url: `${baseUrl}/tarifas`,
      lastModified: new Date("2026-03-22"),
    },
    {
      url: `${baseUrl}/servicios/estimulacion-temprana`,
      lastModified: new Date("2026-03-22"),
    },
    {
      url: `${baseUrl}/servicios/dificultades-aprendizaje`,
      lastModified: new Date("2026-03-22"),
    },
    {
      url: `${baseUrl}/servicios/terapia-miofuncional`,
      lastModified: new Date("2026-03-22"),
    },
    {
      url: `${baseUrl}/servicios/intervencion-familiar`,
      lastModified: new Date("2026-03-22"),
    },
    {
      url: `${baseUrl}/servicios/estimulacion-cognitiva`,
      lastModified: new Date("2026-03-22"),
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date("2026-03-09"),
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date("2026-03-09"),
    },
    {
      url: `${baseUrl}/politica-cookies`,
      lastModified: new Date("2026-03-09"),
    },
  ];
}
