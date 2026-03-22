import Link from "next/link";
import { MdFavorite } from "react-icons/md";
import { strings } from "@/lib/strings";

export default function Footer() {
  return (
    <footer className="bg-primary pb-16 pt-0">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <hr className="border-white/10" />
        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/40"
          aria-label="Enlaces legales"
        >
          <Link href="/aviso-legal" className="transition-colors hover:text-white/70">
            Aviso Legal
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/tarifas" className="transition-colors hover:text-white/70">
            Tarifas y Horarios
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/politica-privacidad" className="transition-colors hover:text-white/70">
            Política de Privacidad
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/politica-cookies" className="transition-colors hover:text-white/70">
            Política de Cookies
          </Link>
        </nav>
        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <p className="text-sm text-white/50">{strings.copyright}</p>
            <span className="text-secondary/60" aria-hidden="true">
              <MdFavorite size={16} />
            </span>
          </div>
          <p className="text-xs text-white/30">{strings.sanitaryRegistry}</p>
        </div>
      </div>
    </footer>
  );
}
