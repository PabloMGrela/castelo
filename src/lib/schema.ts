const reviews = [
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Marcos" },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody:
      "Encantadora, gran profesional. Explica todo lo que hace al final de la sesión. Muy recomendable.",
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Beatriz" },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody:
      "Cristina fue muy empática en la explicación del tratamiento... Congenió muy bien con mi hijo y, además, puso en valor sus fortalezas.",
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Sandra" },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody:
      "La niña le tiene mucho cariño y va encantada. Eso lo dice todo de la buena profesional que es.",
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Paula" },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody:
      "Muy atenta, excelente explicación y resolutiva. La atención es adaptada a las necesidades.",
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Ramiro" },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody:
      "Muy encantados, y en el peque se notan los cambios... ahora va encantado.",
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Cristina R." },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody:
      "Cristina es muy amable. Buen profesional cercano y con buen trato.",
  },
];

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
      },
      image: "https://logopediacastelo.com/icons/Icon-512.png",
      telephone: "+34626929600",
      email: "hola@logopediacastelo.com",
      priceRange: "Consultar",
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
      hasMap:
        "https://www.google.com/maps/place/Logopedia+Castelo/@43.3539243,-8.3970383,19z/data=!3m1!4b1!4m6!3m5!1s0x427a40f0d714f245:0x934b56d23010b6bf!8m2!3d43.3539233!4d-8.3963946",
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
      ],
      description:
        "Clínica de logopedia especializada en estimulación temprana, dificultades de aprendizaje, daño cerebral adquirido y terapia miofuncional en A Coruña.",
      medicalSpecialty: "SpeechPathology",
      founder: { "@id": "https://logopediacastelo.com/#person-cristina" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 5,
        reviewCount: 6,
        bestRating: 5,
        worstRating: 1,
      },
      review: reviews,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Logopedia",
        itemListElement: [
          {
            "@type": "Service",
            name: "Estimulación Temprana del Lenguaje",
            description:
              "Estimulación temprana del lenguaje y del desarrollo entre los 0 y los 6 años.",
            url: "https://logopediacastelo.com/#servicios",
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
            url: "https://logopediacastelo.com/#servicios",
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
            url: "https://logopediacastelo.com/#servicios",
            provider: {
              "@id": "https://logopediacastelo.com/#organization",
            },
            serviceType: "Myofunctional Therapy",
          },
          {
            "@type": "Service",
            name: "Intervención en Contexto Educativo y Familiar",
            description: "Intervención en contexto educativo y familiar.",
            url: "https://logopediacastelo.com/#servicios",
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
            url: "https://logopediacastelo.com/#servicios",
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
    {
      "@type": "BreadcrumbList",
      "@id": "https://logopediacastelo.com/#breadcrumb-home",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://logopediacastelo.com/",
        },
      ],
    },
  ],
};

export const sobreMiBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://logopediacastelo.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre mí",
      item: "https://logopediacastelo.com/sobre-mi",
    },
  ],
};
