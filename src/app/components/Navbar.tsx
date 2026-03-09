"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Áreas de intervención", href: "/#areas" },
  { label: "Sobre mí", href: "/sobre-mi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initialize state
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isHome = pathname === "/";
  const shouldBeSolid = !isHome || isScrolled;

  const bg = shouldBeSolid ? "bg-white shadow-sm" : "bg-transparent";
  const fg = shouldBeSolid ? "text-primary" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[100px] transition-colors duration-300 ${bg}`}
        aria-label="Navegación principal"
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-10">
          <Link href="/" aria-label="Ir al inicio - Logopedia Castelo">
            <Image
              src="/full_logo.svg"
              alt="Logopedia Castelo"
              width={160}
              height={40}
              className={`h-10 w-auto transition-all duration-300 ${shouldBeSolid ? "brightness-0" : "brightness-0 invert"}`}
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group rounded-xl px-5 py-5 text-[15px] font-medium tracking-wide transition-all ${fg} hover:font-bold`}
              >
                <span>{item.label}</span>
                <span className="mx-auto mt-1 block h-0.5 w-0 rounded-full bg-current transition-all group-hover:w-5" />
              </Link>
            ))}
            <Link
              href="/#contacto"
              className={`ml-4 rounded-full px-8 py-5 text-sm font-bold tracking-wider transition-all ${
                shouldBeSolid
                  ? "bg-primary text-white"
                  : "bg-secondary text-primary"
              }`}
            >
              CONTACTO
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden ${fg}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="absolute top-0 right-0 h-full w-80 bg-primary p-10 text-white">
            <div className="mb-6 flex items-center justify-between">
              <Image
                src="/full_logo.svg"
                alt="Logopedia Castelo"
                width={140}
                height={35}
                className="h-9 w-auto brightness-0 invert"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <hr className="mb-8 border-white/10" />
            <nav className="flex flex-col gap-2">
              {[...navItems, { label: "Contacto", href: "/#contacto" }].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg px-4 py-4 text-sm font-bold tracking-[2px] uppercase hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
