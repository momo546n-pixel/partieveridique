import Link from "next/link";
import { ArrowRight, Users, Calendar, MapPin, Target } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PARTI } from "@/lib/constants";

const CHIFFRES = [
  { valeur: "2024", label: "Année de fondation", icone: Calendar },
  { valeur: "5", label: "Valeurs fondatrices", icone: Target },
  { valeur: "12+", label: "Quartiers mobilisés", icone: MapPin },
  { valeur: "500+", label: "Militants engagés", icone: Users },
];

const VALEURS = [
  {
    titre: "Transparence",
    description: "Une gestion publique ouverte et redevable devant chaque citoyen de Rufisque.",
    couleur: "bg-vert-clair",
    texte: "text-vert-secondaire",
    numero: "01",
  },
  {
    titre: "Proximité",
    description: "Des élus accessibles, présents sur le terrain, à l'écoute de chaque quartier.",
    couleur: "bg-or-clair",
    texte: "text-or-hover",
    numero: "02",
  },
  {
    titre: "Développement",
    description: "Des projets concrets pour moderniser les infrastructures de Rufisque Ouest.",
    couleur: "bg-vert-clair",
    texte: "text-vert-secondaire",
    numero: "03",
  },
  {
    titre: "Emploi des Jeunes",
    description: "Créer les conditions d'une insertion professionnelle durable pour notre jeunesse.",
    couleur: "bg-or-clair",
    texte: "text-or-hover",
    numero: "04",
  },
  {
    titre: "Sécurité & Solidarité",
    description: "Un Rufisque sûr où chaque citoyen est protégé et soutenu par sa communauté.",
    couleur: "bg-vert-clair",
    texte: "text-vert-secondaire",
    numero: "05",
  },
];

export default function PartiSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-parti">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <div>
            <SectionTitle
              badge="Le Parti Véridique"
              titre="Un parti né de la volonté du peuple"
              sousTitre="Le Parti Véridique est né d'une conviction profonde : Rufisque mérite mieux. Mieux en termes de gouvernance, de développement et de justice sociale."
            />
            <div className="mt-8 space-y-4">
              <p className="text-gris-moyen leading-relaxed">
                Fondé sur les principes de <strong className="text-vert-principal">Vérité</strong>,{" "}
                <strong className="text-vert-principal">Justice</strong> et{" "}
                <strong className="text-vert-principal">Progrès</strong>, notre parti rassemble
                des citoyens engagés, déterminés à transformer Rufisque Ouest en un modèle
                de bonne gouvernance locale.
              </p>
              <p className="text-gris-moyen leading-relaxed">
                Nous croyons que le changement commence par la base � par des élus proches
                des citoyens, transparents dans leur gestion et déterminés à agir pour
                l'intérêt général.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/le-parti" className="btn-principal">
                Découvrir notre histoire
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {CHIFFRES.map((chiffre) => {
              const Icone = chiffre.icone;
              return (
                <div key={chiffre.label} className="carte p-6 text-center">
                  <div className="w-12 h-12 bg-vert-clair rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icone size={22} className="text-vert-principal" />
                  </div>
                  <p className="font-heading font-black text-3xl text-vert-principal mb-1">
                    {chiffre.valeur}
                  </p>
                  <p className="text-gris-moyen text-sm">{chiffre.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="text-center mb-10">
            <span className="badge-or">Nos 5 piliers</span>
            <h3 className="font-heading font-bold text-2xl text-noir-parti mt-3">
              Les valeurs qui nous guident
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALEURS.map((valeur) => (
              <div key={valeur.titre} className={"rounded-2xl p-5 " + valeur.couleur}>
                <p className={"font-heading font-black text-3xl mb-3 " + valeur.texte}>
                  {valeur.numero}
                </p>
                <h4 className={"font-heading font-bold text-base mb-2 " + valeur.texte}>
                  {valeur.titre}
                </h4>
                <p className="text-gris-moyen text-xs leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}