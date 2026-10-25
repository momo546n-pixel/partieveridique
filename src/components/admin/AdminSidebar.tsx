"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Mail,
  Users,
  MessageSquare,
  Newspaper,
  LogOut,
  X,
  ExternalLink,
} from "lucide-react";
import { deconnexion } from "@/app/admin/login/actions";
import { PARTI } from "@/lib/constants";

interface Props {
  messagesNonLus: number;
  sympathisantsNouveaux: number;
  ouvert: boolean;
  onFermer: () => void;
}

const LIENS = [
  { label: "Tableau de bord", href: "/admin/dashboard", icone: LayoutDashboard, compteur: "aucun" },
  { label: "Messages", href: "/admin/messages", icone: Mail, compteur: "messages" },
  { label: "Sympathisants", href: "/admin/sympathisants", icone: Users, compteur: "sympathisants" },
  { label: "Contributions", href: "/admin/contributions", icone: MessageSquare, compteur: "aucun" },
  { label: "Actualités", href: "/admin/actualites", icone: Newspaper, compteur: "aucun" },
] as const;

export default function AdminSidebar({
  messagesNonLus,
  sympathisantsNouveaux,
  ouvert,
  onFermer,
}: Props) {
  const pathname = usePathname();

  const contenu = (
    <div className="h-full flex flex-col bg-noir-parti text-white">
      <div className="flex items-center justify-between p-5 border-b border-white/10">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-white shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="font-heading font-bold text-sm leading-none">{PARTI.nom}</p>
            <p className="text-white/40 text-xs mt-0.5">Administration</p>
          </div>
        </Link>
        <button onClick={onFermer} className="lg:hidden text-white/60 hover:text-white p-1" aria-label="Fermer le menu">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {LIENS.map((lien) => {
          const actif = pathname.startsWith(lien.href);
          const Icone = lien.icone;
          const compteur =
            lien.compteur === "messages"
              ? messagesNonLus
              : lien.compteur === "sympathisants"
              ? sympathisantsNouveaux
              : 0;
          return (
            <Link
              key={lien.href}
              href={lien.href}
              onClick={onFermer}
              className={
                "flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 " +
                (actif ? "bg-vert-principal text-white" : "text-white/70 hover:bg-white/10 hover:text-white")
              }
            >
              <span className="flex items-center gap-3">
                <Icone size={18} />
                {lien.label}
              </span>
              {compteur > 0 && (
                <span className="bg-or text-noir-parti text-xs font-bold rounded-full min-w-5 h-5 px-1.5 flex items-center justify-center">
                  {compteur}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-white/10 space-y-1">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors duration-200"
        >
          <ExternalLink size={18} />
          Voir le site
        </a>
        <form action={deconnexion}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-rouge/20 hover:text-white transition-colors duration-200"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="fixed top-0 left-0 bottom-0 w-64">{contenu}</div>
      </aside>

      {ouvert && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onFermer} />
          <aside className="fixed top-0 left-0 bottom-0 w-72 z-50 lg:hidden">{contenu}</aside>
        </>
      )}
    </>
  );
}
