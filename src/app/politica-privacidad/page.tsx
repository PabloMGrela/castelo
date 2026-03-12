import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Logopedia Castelo. Información sobre el tratamiento de datos personales según el RGPD.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        <article className="mx-auto max-w-[800px] px-6 py-24 md:px-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-extrabold text-text">
            Política de Privacidad
          </h1>

          <section className="mt-12 space-y-6 text-base leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold text-text">
              1. Responsable del tratamiento
            </h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>Responsable:</strong> Cristina Barrós Pérez
              </li>
              <li>
                <strong>Dirección:</strong> Pr. da Gaiteira 2, Bajo dcha, 15006
                A Coruña, España
              </li>
              <li>
                <strong>Email de contacto:</strong> hola@logopediacastelo.com
              </li>
              <li>
                <strong>Teléfono:</strong> +34 626 929 600
              </li>
            </ul>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              2. Finalidad del tratamiento
            </h2>
            <p>
              Los datos personales que nos proporcione se utilizarán
              exclusivamente para:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>
                Gestionar las consultas y solicitudes de información realizadas a
                través de los canales de contacto del sitio web.
              </li>
              <li>
                Gestionar la relación asistencial con los pacientes que
                soliciten los servicios de logopedia.
              </li>
            </ul>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              3. Base legal
            </h2>
            <p>
              El tratamiento de sus datos personales se realiza sobre las
              siguientes bases legales:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>Consentimiento del interesado</strong> para la gestión
                de consultas.
              </li>
              <li>
                <strong>Ejecución de un contrato</strong> para la prestación de
                servicios de logopedia.
              </li>
              <li>
                <strong>Obligación legal</strong> para el cumplimiento de la
                normativa sanitaria aplicable.
              </li>
            </ul>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              4. Conservación de los datos
            </h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario
              para la finalidad para la que se recogieron, y posteriormente
              durante los plazos legalmente establecidos. Los datos de carácter
              sanitario se conservarán conforme a la Ley 41/2002, de autonomía
              del paciente, durante un mínimo de 5 años desde el alta del
              paciente.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              5. Destinatarios
            </h2>
            <p>
              Los datos no serán cedidos a terceros salvo obligación legal. No
              se realizan transferencias internacionales de datos.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              6. Derechos del interesado
            </h2>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión,
              limitación del tratamiento, portabilidad y oposición dirigiéndose
              a hola@logopediacastelo.com o por correo postal a la dirección
              indicada. Asimismo, tiene derecho a presentar una reclamación ante
              la Agencia Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                www.aepd.es
              </a>
              ).
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              7. Medidas de seguridad
            </h2>
            <p>
              Se han adoptado las medidas técnicas y organizativas necesarias
              para garantizar la seguridad de los datos personales y evitar su
              alteración, pérdida, tratamiento o acceso no autorizado, conforme
              al estado de la tecnología, la naturaleza de los datos y los
              riesgos a los que están expuestos.
            </p>
          </section>
        </article>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
