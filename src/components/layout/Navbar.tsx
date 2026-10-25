"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, PARTI, CANDIDAT } from "@/lib/constants";

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [visible, setVisible] = useState(true);
  const [surHaut, setSurHaut] = useState(true);
  const dernierScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollActuel = window.scrollY;

      // En haut de page
      if (scrollActuel < 80) {
        setVisible(true);
        setSurHaut(true);
        dernierScrollY.current = scrollActuel;
        return;
      }

      setSurHaut(false);

      // Scroll vers le bas → cacher
      if (scrollActuel > dernierScrollY.current + 5) {
        setVisible(false);
      }

      // Scroll vers le haut → montrer
      if (scrollActuel < dernierScrollY.current - 5) {
        setVisible(true);
      }

      dernierScrollY.current = scrollActuel;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOuvert(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOuvert ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOuvert]);

  const estActif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const estPageAccueil = pathname === "/";
  const navbarTransparente = estPageAccueil && surHaut && !menuOuvert;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "var(--navbar-height)",
          backgroundColor: navbarTransparente ? "transparent" : "white",
          boxShadow: navbarTransparente ? "none" : "0 2px 20px rgba(0,0,0,0.10)",
          transform: visible || menuOuvert ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s ease, background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="container-parti h-full flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group" aria-label={PARTI.nom}>
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Logo Parti Veridique"
                width={44}
                height={44}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className="font-heading font-bold text-lg leading-none transition-colors duration-300"
                style={{ color: navbarTransparente ? "white" : "#0B6B3A" }}
              >
                {PARTI.nom}
              </p>
              <p
                className="text-xs leading-none mt-0.5 transition-colors duration-300"
                style={{ color: navbarTransparente ? "rgba(255,255,255,0.7)" : "#6B7280" }}
              >
                {PARTI.devise}
              </p>
            </div>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  color: estActif(item.href)
                    ? navbarTransparente ? "white" : "#0B6B3A"
                    : navbarTransparente ? "rgba(255,255,255,0.9)" : "#111827",
                  backgroundColor: estActif(item.href)
                    ? navbarTransparente ? "rgba(255,255,255,0.15)" : "#D1FAE5"
                    : "transparent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* BOUTON DESKTOP */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/rejoindre"
              className="px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 active:scale-95"
              style={{
                backgroundColor: navbarTransparente ? "#D4A017" : "#0B6B3A",
                color: "white",
              }}
            >
              Rejoindre le mouvement
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOuvert(!menuOuvert)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: navbarTransparente ? "white" : "#111827" }}
            aria-label={menuOuvert ? "Fermer" : "Menu"}
          >
            {menuOuvert ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      {menuOuvert && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMenuOuvert(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden flex flex-col shadow-2xl">
            <div className="bg-gradient-vert p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
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
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-6 py-3.5 text-base font-medium border-b border-gris-bordure transition-colors duration-200"
                  style={{
                    color: estActif(item.href) ? "#0B6B3A" : "#111827",
                    backgroundColor: estActif(item.href) ? "#D1FAE5" : "transparent",
                    borderLeft: estActif(item.href)
                      ? "4px solid #0B6B3A"
                      : "4px solid transparent",
                  }}
                >
                  {item.label}
                  {estActif(item.href) && (
                    <span className="w-2 h-2 rounded-full bg-vert-principal" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-gris-bordure space-y-3">
              <Link href="/rejoindre" className="btn-principal w-full justify-center">
                Rejoindre le mouvement
              </Link>
              <Link href="/contact" className="btn-secondaire w-full justify-center">
                Nous contacter
              </Link>
              <div className="pt-3 text-center">
                <p className="text-xs text-gris-moyen">Candidat officiel</p>
                <p className="font-heading font-bold text-vert-principal text-sm mt-0.5">
                  {CANDIDAT.nom}
                </p>
                <p className="text-xs text-gris-moyen">{CANDIDAT.fonction}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}