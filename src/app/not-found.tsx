import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-6xl font-extrabold text-primary">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          La página que buscas no existe.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:scale-105"
        >
          Volver al inicio
        </Link>
      </main>
    </>
  );
}
