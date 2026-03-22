export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://logopediacastelo.com/#website",
      url: "https://logopediacastelo.com/",
      name: "Logopedia Castelo",
      description: "Logopedia en todas las etapas de la vida en A Coruña",
      publisher: { "@id": "https://logopediacastelo.com/#organization" },
      inLanguage: "es",
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://logopediacastelo.com/#organization",
      name: "Logopedia Castelo",
      url: "https://logopediacastelo.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://logopediacastelo.com/icons/Icon-512.png",
        width: 512,
        height: 512,
      },
      foundingDate: "2023",
      image: "https://logopediacastelo.com/icons/Icon-512.png",
      telephone: "+34626929600",
      email: "hola@logopediacastelo.com",
      priceRange: "Consultar",
      paymentAccepted: "Efectivo, Bizum, Transferencia",
      currenciesAccepted: "EUR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pr. da Gaiteira 2, Bajo dcha",
        addressLocality: "A Coruña",
        addressRegion: "Galicia",
        postalCode: "15006",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.3539233,
        longitude: -8.3963946,
      },
      hasMap: "https://maps.app.goo.gl/DkPCiTAAnk8s4Bh1A",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "15:45",
        closes: "20:15",
      },
      areaServed: { "@type": "City", name: "A Coruña" },
      sameAs: [
        "https://www.instagram.com/logopediacastelo/",
        "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna",
        "https://maps.app.goo.gl/DkPCiTAAnk8s4Bh1A",
      ],
      description:
        "Clínica de logopedia especializada en estimulación temprana, dificultades de aprendizaje, daño cerebral adquirido y terapia miofuncional en A Coruña.",
      medicalSpecialty: "SpeechPathology",
      founder: { "@id": "https://logopediacastelo.com/#person-cristina" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Logopedia",
        itemListElement: [
          {
            "@type": "Service",
            name: "Estimulación Temprana del Lenguaje",
            description:
              "Estimulación temprana del lenguaje y del desarrollo entre los 0 y los 6 años.",
            url: "https://logopediacastelo.com/servicios/estimulacion-temprana",
            provider: {
              "@id": "https://logopediacastelo.com/#organization",
            },
            serviceType: "Speech Therapy",
          },
          {
            "@type": "Service",
            name: "Dificultades del Aprendizaje y Comunicación",
            description:
              "Atención logopédica de las dificultades del aprendizaje y de la comunicación en edad escolar y adulta.",
            url: "https://logopediacastelo.com/servicios/dificultades-aprendizaje",
            provider: {
              "@id": "https://logopediacastelo.com/#organization",
            },
            serviceType: "Speech Therapy",
          },
          {
            "@type": "Service",
            name: "Terapia Miofuncional",
            description:
              "Terapia miofuncional de la respiración, masticación, deglución y voz.",
            url: "https://logopediacastelo.com/servicios/terapia-miofuncional",
            provider: {
              "@id": "https://logopediacastelo.com/#organization",
            },
            serviceType: "Myofunctional Therapy",
          },
          {
            "@type": "Service",
            name: "Intervención en Contexto Educativo y Familiar",
            description: "Intervención en contexto educativo y familiar.",
            url: "https://logopediacastelo.com/servicios/intervencion-familiar",
            provider: {
              "@id": "https://logopediacastelo.com/#organization",
            },
            serviceType: "Speech Therapy",
          },
          {
            "@type": "Service",
            name: "Estimulación Cognitiva para la Tercera Edad",
            description:
              "Talleres de estimulación cognitiva y prevención del deterioro en la tercera edad.",
            url: "https://logopediacastelo.com/servicios/estimulacion-cognitiva",
            provider: {
              "@id": "https://logopediacastelo.com/#organization",
            },
            serviceType: "Cognitive Stimulation",
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://logopediacastelo.com/#person-cristina",
      name: "Cristina Barrós Pérez",
      url: "https://logopediacastelo.com/sobre-mi",
      image: "https://logopediacastelo.com/aboutme.webp",
      jobTitle: "Logopeda",
      description:
        "Logopeda colegiada nº 15-0360. Especialista en logopedia clínica para todas las etapas de la vida.",
      worksFor: { "@id": "https://logopediacastelo.com/#organization" },
      sameAs: [
        "https://www.doctoralia.es/cristina-barros-perez/logopeda/a-coruna",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Diplomada en Logopedia",
          recognizedBy: {
            "@type": "Organization",
            name: "Universidade da Coruña",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Máster de Intervención Logopédica en la infancia y la adolescencia",
          recognizedBy: {
            "@type": "Organization",
            name: "Universidade da Coruña",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Máster en Terapia Miofuncional",
          recognizedBy: {
            "@type": "Organization",
            name: "Instituto Superior de Estudios Psicológicos de Madrid",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Posgrado en Atención Temprana",
          recognizedBy: {
            "@type": "Organization",
            name: "Instituto Superior de Estudios Psicológicos de Madrid",
          },
        },
      ],
      knowsAbout: [
        "Logopedia",
        "Terapia Miofuncional",
        "Estimulación Temprana",
        "Dificultades del Aprendizaje",
        "Rehabilitación de Daño Cerebral Adquirido",
        "Estimulación Cognitiva",
      ],
    },
  ],
};

export function buildBreadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
