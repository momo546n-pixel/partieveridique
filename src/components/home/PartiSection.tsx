import Link from "next/link";
import { ArrowRight, Users, Calendar, MapPin, Target } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PARTI } from "@/lib/constants";

const CHIFFRES = [
  { valeur: "2024", label: "AnnÃ©e de fondation", icone: Calendar },
  { valeur: "5", label: "Valeurs fondatrices", icone: Target },
  { valeur: "12+", label: "Quartiers mobilisÃ©s", icone: MapPin },
  { valeur: "500+", label: "Militants engagÃ©s", icone: Users },
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
    titre: "ProximitÃ©",
    description: "Des Ã©lus accessibles, prÃ©sents sur le terrain, Ã  l'Ã©coute de chaque quartier.",
    couleur: "bg-or-clair",
    texte: "text-or-hover",
    numero: "02",
  },
  {
    titre: "DÃ©veloppement",
    description: "Des projets concrets pour moderniser les infrastructures de Rufisque Ouest.",
    couleur: "bg-vert-clair",
    texte: "text-vert-secondaire",
    numero: "03",
  },
  {
    titre: "Emploi des Jeunes",
    description: "CrÃ©er les conditions d'une insertion professionnelle durable pour notre jeunesse.",
    couleur: "bg-or-clair",
    texte: "text-or-hover",
    numero: "04",
  },
  {
    titre: "SÃ©curitÃ© & SolidaritÃ©",
    description: "Un Rufisque sÃ»r oÃ¹ chaque citoyen est protÃ©gÃ© et soutenu par sa communautÃ©.",
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
              badge="Le Parti VÃ©ridique"
              titre="Un parti nÃ© de la volontÃ© du peuple"
              sousTitre="Le Parti VÃ©ridique est nÃ© d'une conviction profonde : Rufisque mÃ©rite mieux. Mieux en termes de gouvernance, de dÃ©veloppement et de justice sociale."
            />
            <div className="mt-8 space-y-4">
              <p className="text-gris-moyen leading-relaxed">
                FondÃ© sur les principes de <strong className="text-vert-principal">VÃ©ritÃ©</strong>,{" "}
                <strong className="text-vert-principal">Justice</strong> et{" "}
                <strong className="text-vert-principal">ProgrÃ¨s</strong>, notre parti rassemble
                des citoyens engagÃ©s, dÃ©terminÃ©s Ã  transformer Rufisque Ouest en un modÃ¨le
                de bonne gouvernance locale.
              </p>
              <p className="text-gris-moyen leading-relaxed">
                Nous croyons que le changement commence par la base â€” par des Ã©lus proches
                des citoyens, transparents dans leur gestion et dÃ©terminÃ©s Ã  agir pour
                l'intÃ©rÃªt gÃ©nÃ©ral.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/le-parti" className="btn-principal">
                DÃ©couvrir notre histoire
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