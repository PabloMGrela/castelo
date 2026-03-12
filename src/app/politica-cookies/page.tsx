import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de Logopedia Castelo. Información sobre el uso de cookies en nuestro sitio web.",
  alternates: { canonical: "/politica-cookies" },
  robots: { index: true, follow: true },
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        <article className="mx-auto max-w-[800px] px-6 py-24 md:px-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-extrabold text-text">
            Política de Cookies
          </h1>

          <section className="mt-12 space-y-6 text-base leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold text-text">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su
              dispositivo cuando visita un sitio web. Permiten que el sitio web
              recuerde sus acciones y preferencias durante un periodo de tiempo.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              2. Cookies utilizadas en este sitio web
            </h2>
            <p>
              Este sitio web es un sitio estático que actualmente{" "}
              <strong>no utiliza cookies propias ni de terceros</strong> para
              rastreo, analítica o publicidad. No se instalan cookies en su
              dispositivo al navegar por logopediacastelo.com.
            </p>
            <p>
              En el caso de que en el futuro se incorporen cookies (por ejemplo,
              para analítica web), esta política será actualizada y se
              solicitará su consentimiento previo conforme a la normativa
              vigente.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              3. Cookies de terceros
            </h2>
            <p>
              Las imágenes del sitio web se cargan desde servidores externos
              (Unsplash). Estos servicios podrían establecer sus propias cookies
              según sus respectivas políticas de privacidad. Le recomendamos
              consultar las políticas de estos proveedores.
            </p>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              4. Cómo gestionar las cookies
            </h2>
            <p>
              Puede configurar su navegador para bloquear o eliminar las cookies
              en cualquier momento. A continuación, le indicamos cómo hacerlo en
              los navegadores más comunes:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>Chrome:</strong> Configuración → Privacidad y seguridad
                → Cookies
              </li>
              <li>
                <strong>Firefox:</strong> Opciones → Privacidad y seguridad
              </li>
              <li>
                <strong>Safari:</strong> Preferencias → Privacidad
              </li>
              <li>
                <strong>Edge:</strong> Configuración → Privacidad y servicios
              </li>
            </ul>

            <h2 className="!mt-12 text-2xl font-bold text-text">
              5. Actualización de esta política
            </h2>
            <p>
              Esta política de cookies puede ser actualizada periódicamente. Le
              recomendamos revisarla cada vez que visite nuestro sitio web para
              estar informado sobre cómo y para qué usamos las cookies.
            </p>
            <p>
              <strong>Última actualización:</strong> marzo de 2026.
            </p>
          </section>
        </article>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
