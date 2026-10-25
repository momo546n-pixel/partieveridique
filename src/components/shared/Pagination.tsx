import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  pageActuelle: number;
  totalPages: number;
  construireLien: (page: number) => string;
}

export default function Pagination({ pageActuelle, totalPages, construireLien }: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
      <Link
        href={construireLien(Math.max(1, pageActuelle - 1))}
        aria-disabled={pageActuelle === 1}
        className={
          "w-10 h-10 flex items-center justify-center rounded-lg border border-gris-bordure transition-colors duration-200 " +
          (pageActuelle === 1
            ? "pointer-events-none opacity-40"
            : "text-noir-parti hover:bg-vert-clair hover:border-vert-principal")
        }
      >
        <ChevronLeft size={18} />
      </Link>

      {pages.map((p) => (
        <Link
          key={p}
          href={construireLien(p)}
          aria-current={p === pageActuelle ? "page" : undefined}
          className={
            "w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors duration-200 " +
            (p === pageActuelle
              ? "bg-vert-principal text-white"
              : "border border-gris-bordure text-noir-parti hover:bg-vert-clair hover:border-vert-principal")
          }
        >
          {p}
        </Link>
      ))}

      <Link
        href={construireLien(Math.min(totalPages, pageActuelle + 1))}
        aria-disabled={pageActuelle === totalPages}
        className={
          "w-10 h-10 flex items-center justify-center rounded-lg border border-gris-bordure transition-colors duration-200 " +
          (pageActuelle === totalPages
            ? "pointer-events-none opacity-40"
            : "text-noir-parti hover:bg-vert-clair hover:border-vert-principal")
        }
      >
        <ChevronRight size={18} />
      </Link>
    </nav>
  );
}
