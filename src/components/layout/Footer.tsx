import Link from "next/link";
import { MapPin, Phone, Mail, Heart, ArrowRight } from "lucide-react";
import LionLogo from "@/components/shared/LionLogo";
import { PARTI, CANDIDAT, RESEAUX_SOCIAUX } from "@/lib/constants";

function IconeFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconeTwitter() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 4h7l4.5 6L20 4h2L13 13l9 7h-7l-4.5-6L4 20H2l9-9L2 4z" />
    </svg>
  );
}

function IconeInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconeYoutube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

const COLONNES_NAVIGATION = [
  {
    titre: "Le Parti",
    liens: [
      { label: "Notre histoire", href: "/le-parti#histoire" },
      { label: "Notre vision", href: "/le-parti#vision" },
      { label: "Nos valeurs", href: "/le-parti#valeurs" },
      { label: "Organisation", href: "/le-parti#organisation" },
      { label: "Leadership", href: "/le-parti#leadership" },
    ],
  },
  {
    titre: "Nos Priorites",
    liens: [
      { label: "Transparence", href: "/priorites/transparence" },
      { label: "Proximite", href: "/priorites/proximite" },
      { label: "Developpement", href: "/priorites/developpement" },
      { label: "Emploi des jeunes", href: "/priorites/emploi-jeunes" },
      { label: "Securite et Solidarite", href: "/priorites/securite-solidarite" },
    ],
  },
  {
    titre: "Participer",
    liens: [
      { label: "Rejoindre le mouvement", href: "/rejoindre" },
      { label: "Parole aux citoyens", href: "/parole-aux-citoyens" },
      { label: "Actualites", href: "/actualites" },
      { label: "Galerie", href: "/galerie" },
      { label: "Nous contacter", href: "/contact" },
    ],
  },
];

const RESEAUX = [
  { nom: "Facebook", href: RESEAUX_SOCIAUX.facebook, Icone: IconeFacebook, couleur: "hover:bg-blue-600" },
  { nom: "Twitter", href: RESEAUX_SOCIAUX.twitter, Icone: IconeTwitter, couleur: "hover:bg-sky-500" },
  { nom: "Instagram", href: RESEAUX_SOCIAUX.instagram, Icone: IconeInstagram, couleur: "hover:bg-pink-600" },
  { nom: "YouTube", href: RESEAUX_SOCIAUX.youtube, Icone: IconeYoutube, couleur: "hover:bg-red-600" },
];

const VALEURS = ["Transparence", "Proximite", "Developpement", "Emploi des jeunes", "Securite et Solidarite"];

export default function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer className="bg-gradient-sombre text-white">
      <div className="border-b border-white/10">
        <div className="container-parti py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-or font-heading font-semibold text-lg">{CANDIDAT.slogan}</p>
              <p className="text-white/60 text-sm mt-1">-- {CANDIDAT.nom}, {CANDIDAT.fonction}</p>
            </div>
            <Link href="/rejoindre" className="inline-flex items-center gap-2 px-6 py-3 bg-vert-principal text-white font-semibold rounded-lg hover:bg-vert-hover transition-all duration-300 active:scale-95 shrink-0">
              Rejoindre le mouvement
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-parti py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 bg-vert-principal rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <LionLogo taille={30}  />
              </div>
              <div>
                <p className="font-heading font-bold text-xl text-white leading-none">{PARTI.nom}</p>
                <p className="text-or text-sm mt-0.5">{PARTI.devise}</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              {CANDIDAT.messageInstitutionnel} Sous la direction de <span className="text-white/90 font-medium">{CANDIDAT.nom}</span>, nous batissons ensemble l avenir de Rufisque Ouest.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-or shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">{PARTI.adresse}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-or shrink-0" />
                <span className="text-white/60 text-sm">{PARTI.telephone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-or shrink-0" />
                <span className="text-white/60 text-sm">{PARTI.email}</span>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              {RESEAUX.map((reseau) => (
                <a key={reseau.nom} href={reseau.href} target="_blank" rel="noopener noreferrer" aria-label={reseau.nom} className={"w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 " + reseau.couleur}>
                  <reseau.Icone />
                </a>
              ))}
            </div>
          </div>
          {COLONNES_NAVIGATION.map((colonne) => (
            <div key={colonne.titre}>
              <h3 className="font-heading font-bold text-white text-base mb-4 pb-2 border-b border-white/10">{colonne.titre}</h3>
              <ul className="space-y-2.5">
                {colonne.liens.map((lien) => (
                  <li key={lien.href}>
                    <Link href={lien.href} className="text-white/55 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                        <ArrowRight size={12} className="text-or" />
                      </span>
                      {lien.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-parti py-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {VALEURS.map((valeur) => (
              <div key={valeur} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-or" />
                <span className="text-white/50 text-xs font-medium">{valeur}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-parti py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">Copyright {annee} {PARTI.nom}. Tous droits reserves.</p>
            <div className="flex items-center gap-4">
              <Link href="/mentions-legales" className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200">Mentions legales</Link>
              <span className="text-white/20">.</span>
              <Link href="/politique-confidentialite" className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200">Confidentialite</Link>
              <span className="text-white/20">.</span>
              <span className="text-white/40 text-xs flex items-center gap-1">Fait avec <Heart size={10} className="text-rouge inline mx-0.5" /> au Senegal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
