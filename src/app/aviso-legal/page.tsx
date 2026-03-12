import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de Logopedia Castelo. Información sobre el titular, condiciones de uso y propiedad intelectual.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        <article className="mx-auto max-w-[800px] px-6 py-24 md:px-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-extrabold text-text">
            Aviso Legal
          </h1>

          <section className="mt-12 space-y-6 text-base leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold text-text">
              1. Datos identificativos
            </h2>
            <p>
              En cumplimiento del deber de información establecido en la Ley
              34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico (LSSI-CE), se facilitan los
              siguientes datos:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>Titular:</strong> Cristina Barrós Pérez
              </li>
              <li>
                <strong>Nombre comercial:</strong> Logopedia Castelo
              </li>
              <li>
                <strong>Domicilio:</strong> Pr. da Gaiteira 2, Bajo dcha, 15006
                A Coruña, España
              </li>
              <li>
                <strong>Teléfono:</strong> +34 626 929 600
              </li>
              <li>
                <strong>Email:</strong> hola@logopediacastelo.com
              </li>
              <li>
                <strong>Nº de colegiada:</strong> 15-0360
              </li>
              <li>
                <strong>Registro sanitario:</strong> C-15-005229
              </li>
            </ul>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              2. Objeto y ámbito de aplicación
            </h2>
            <p>
              El presente aviso legal regula el uso del sitio web
              logopediacastelo.com, del que es titular Cristina Barrós Pérez. La
              navegación por el sitio web atribuye la condición de usuario e
              implica la aceptación plena y sin reservas de todas las
              disposiciones incluidas en este aviso legal.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              3. Propiedad intelectual e industrial
            </h2>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo su
              diseño, textos, gráficos, logotipos, iconos e imágenes, así como
              su código fuente, es propiedad de Logopedia Castelo o se cuenta
              con la autorización correspondiente para su uso. Queda prohibida
              su reproducción, distribución, comunicación pública o
              transformación sin autorización expresa.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              4. Condiciones de uso
            </h2>
            <p>
              El usuario se compromete a hacer un uso adecuado de los contenidos
              y servicios que Logopedia Castelo ofrece a través de su sitio web
              y a no emplearlos para actividades ilícitas o contrarias a la buena
              fe y al ordenamiento legal vigente.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              5. Exclusión de responsabilidad
            </h2>
            <p>
              Logopedia Castelo no se hace responsable de la información y
              contenidos almacenados en foros, redes sociales o cualquier otro
              medio que permita a terceros publicar contenidos de forma
              independiente.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              6. Legislación aplicable y jurisdicción
            </h2>
            <p>
              Para la resolución de cualquier controversia que pudiera surgir en
              relación con la actividad de este sitio web, será de aplicación la
              legislación española, siendo competentes los Juzgados y Tribunales
              de A Coruña.
            </p>
          </section>
        </article>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
