"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LionLogo from "@/components/shared/LionLogo";
import { NAV_ITEMS, PARTI, CANDIDAT } from "@/lib/constants";

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [estScrolle, setEstScrolle] = useState(false);
  const [sousMenuOuvert, setSousMenuOuvert] = useState<string | null>(null);
  const pathname = usePathname();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setEstScrolle(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu au changement de page
  useEffect(() => {
    setMenuOuvert(false);
    setSousMenuOuvert(null);
  }, [pathname]);

  // Bloquer le scroll quand menu mobile ouvert
  useEffect(() => {
    if (menuOuvert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOuvert]);

  const estPageAccueil = pathname === "/";
  const estActif = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Sur l'accueil non scrollé �  navbar transparente
  // Sinon �  navbar blanche avec ombre
  const navbarTransparente = estPageAccueil && !estScrolle && !menuOuvert;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navbarTransparente
            ? "bg-transparent"
            : "bg-white shadow-md"
        }`}
        style={{ height: "var(--navbar-height)" }}
      >
        <div className="container-parti h-full flex items-center justify-between">

          {/* ���� LOGO ���� */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={PARTI.nom}
          >
            {/* Cercle vert avec lion */}
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center
                transition-all duration-300 group-hover:scale-105
                ${navbarTransparente ? "bg-white/20 backdrop-blur-sm" : "bg-vert-principal"}`}
            >
              <LionLogo
                taille={28}
              />
            </div>

            {/* Texte logo */}
            <div className="hidden sm:block">
              <p
                className={`font-heading font-bold text-lg leading-none transition-colors duration-300 ${
                  navbarTransparente ? "text-white" : "text-vert-principal"
                }`}
              >
                {PARTI.nom}
              </p>
              <p
                className={`text-xs leading-none mt-0.5 transition-colors duration-300 ${
                  navbarTransparente ? "text-white/70" : "text-gris-moyen"
                }`}
              >
                {PARTI.devise}
              </p>
            </div>
          </Link>

          {/* ���� NAVIGATION DESKTOP ���� */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg
                  transition-all duration-200 group
                  ${
                    estActif(item.href)
                      ? navbarTransparente
                        ? "text-white bg-white/15"
                        : "text-vert-principal bg-vert-clair"
                      : navbarTransparente
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-noir-parti hover:text-vert-principal hover:bg-gris-doux"
                  }`}
              >
                {item.label}

                {/* Indicateur actif */}
                {estActif(item.href) && (
                  <motion.span
                    layoutId="nav-actif"
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2
                      w-1 h-1 rounded-full
                      ${navbarTransparente ? "bg-or" : "bg-vert-principal"}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ���� ACTIONS DESKTOP ���� */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/rejoindre"
              className={`px-4 py-2 text-sm font-semibold rounded-lg
                transition-all duration-300 active:scale-95
                ${
                  navbarTransparente
                    ? "bg-or text-white hover:bg-or-hover shadow-or-sm"
                    : "bg-vert-principal text-white hover:bg-vert-hover shadow-parti-sm"
                }`}
            >
              Rejoindre le mouvement
            </Link>
          </div>

          {/* ���� BOUTON HAMBURGER MOBILE ���� */}
          <button
            onClick={() => setMenuOuvert(!menuOuvert)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200
              ${
                navbarTransparente
                  ? "text-white hover:bg-white/10"
                  : "text-noir-parti hover:bg-gris-doux"
              }`}
            aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOuvert}
          >
            <motion.div
              animate={{ rotate: menuOuvert ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOuvert ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </header>

      {/* ���� MENU MOBILE ���� */}
      <AnimatePresence>
        {menuOuvert && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMenuOuvert(false)}
            />

            {/* Panneau menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm
                bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* En-tête du menu mobile */}
              <div className="bg-gradient-vert p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <LionLogo taille={24}  />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-base leading-none">
                      {PARTI.nom}
                    </p>
                    <p className="text-white/70 text-xs mt-0.5">{PARTI.devise}</p>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOuvert(false)}
                  className="text-white/80 hover:text-white p-1"
                  aria-label="Fermer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Liens de navigation */}
              <nav className="flex-1 overflow-y-auto py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-6 py-3.5
                        text-base font-medium border-b border-gris-bordure
                        transition-colors duration-200
                        ${
                          estActif(item.href)
                            ? "text-vert-principal bg-vert-clair border-l-4 border-l-vert-principal"
                            : "text-noir-parti hover:text-vert-principal hover:bg-gris-doux"
                        }`}
                    >
                      {item.label}
                      {estActif(item.href) && (
                        <span className="w-2 h-2 rounded-full bg-vert-principal" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Pied du menu mobile */}
              <div className="p-6 border-t border-gris-bordure space-y-3">
                <Link
                  href="/rejoindre"
                  className="btn-principal w-full justify-center"
                >
                  Rejoindre le mouvement
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondaire w-full justify-center"
                >
                  Nous contacter
                </Link>

                {/* Candidat */}
                <div className="pt-3 text-center">
                  <p className="text-xs text-gris-moyen">Candidat officiel</p>
                  <p className="font-heading font-bold text-vert-principal text-sm mt-0.5">
                    {CANDIDAT.nom}
                  </p>
                  <p className="text-xs text-gris-moyen">{CANDIDAT.fonction}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
