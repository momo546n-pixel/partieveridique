import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { CANDIDAT, PARTI } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Le Candidat",
  description: "DÃ©couvrez Gorgui Ndiaye, candidat du Parti VÃ©ridique Ã  la mairie de Rufisque Ouest. Sa biographie, son parcours et ses engagements.",
};

const ENGAGEMENTS = [
  "Publier les budgets municipaux en ligne chaque trimestre",
  "Organiser des assemblÃ©es citoyennes trimestrielles dans chaque quartier",
  "CrÃ©er 500 emplois pour les jeunes de Rufisque Ouest en 3 ans",
  "RÃ©habiliter les routes et voiries dÃ©gradÃ©es de la commune",
  "Mettre en place un portail numÃ©rique de suivi des projets municipaux",
  "CrÃ©er un fonds municipal de solidaritÃ© pour les familles vulnÃ©rables",
  "Renforcer l'Ã©clairage public dans tous les quartiers",
  "Ouvrir un centre de formation professionnelle pour les jeunes",
];

const PARCOURS = [
  {
    periode: "Aujourd'hui",
    titre: "Candidat Ã  la Mairie de Rufisque Ouest",
    lieu: "Rufisque Ouest, SÃ©nÃ©gal",
    description: "PortÃ© par le Parti VÃ©ridique, engage sa candidature pour transformer Rufisque Ouest.",
  },
  {
    periode: "2020 - 2024",
    titre: "Engagement citoyen et associatif",
    lieu: "Rufisque, SÃ©nÃ©gal",
    description: "Implication dans les associations de quartier et les initiatives de dÃ©veloppement local.",
  },
  {
    periode: "2015 - 2020",
    titre: "ActivitÃ© professionnelle",
    lieu: "Dakar - Rufisque",
    description: "DÃ©veloppement d'une expertise dans son domaine professionnel tout en restant ancrÃ© dans sa communautÃ©.",
  },
  {
    periode: "Avant 2015",
    titre: "Formation et Ã©tudes",
    lieu: "SÃ©nÃ©gal",
    description: "Parcours acadÃ©mique qui forge ses convictions et sa vision du dÃ©veloppement.",
  },
];

export default function CandidatPage() {
  return (
    <main className="pt-navbar">

      {/* HERO */}
      <section className="bg-gradient-vert py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container-parti relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-or mb-4 inline-block">Candidat officiel</span>
              <h1 className="font-heading font-black text-white mb-3"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                {CANDIDAT.nom}
              </h1>
              <div className="w-16 h-1.5 bg-or rounded-full mb-4" />
              <p className="text-or font-heading font-semibold text-xl mb-4">
                {CANDIDAT.fonction}
              </p>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                {CANDIDAT.slogan}
              </p>
              <Link href="/rejoindre" className="btn-or">
                Soutenir sa candidature
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
                  <span className="font-heading font-black text-white"
                    style={{ fontSize: "5rem" }}>
                    GN
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-or rounded-2xl px-4 py-2 shadow-or-md">
                  <p className="font-heading font-bold text-white text-sm">{PARTI.nom}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="py-12 bg-gris-doux">
        <div className="container-parti">
          <div className="max-w-3xl mx-auto text-center">
            <Quote size={40} className="text-or mx-auto mb-4 opacity-60" />
            <blockquote className="font-heading text-2xl md:text-3xl font-bold text-noir-parti mb-4 leading-snug">
              "{CANDIDAT.messageLeadership}"
            </blockquote>
            <p className="text-gris-moyen">â€” {CANDIDAT.nom}</p>
          </div>
        </div>
      </section>

      {/* BIOGRAPHIE */}
      <section className="section-padding bg-white">
        <div className="container-parti">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle
                badge="Biographie"
                titre="Un homme du terrain"
              />
              <div className="mt-6 space-y-4 text-gris-moyen leading-relaxed">
                <p>
                  Gorgui Ndiaye est un enfant de Rufisque, profondÃ©ment attachÃ© Ã  sa terre
                  et Ã  sa communautÃ©. ForgÃ© par les rÃ©alitÃ©s du quotidien de ses concitoyens,
                  il a choisi de s'engager en politique non par ambition personnelle, mais
                  par conviction que le changement est possible.
                </p>
                <p>
                  Son parcours professionnel et associatif lui a donnÃ© une comprÃ©hension
                  fine des enjeux locaux : l'emploi, l'infrastructure, la sÃ©curitÃ© et
                  la nÃ©cessitÃ© d'une gouvernance transparente et efficace.
                </p>
                <p>
                  Candidat sous la banniÃ¨re du Parti VÃ©ridique, il incarne une nouvelle
                  gÃ©nÃ©ration de leaders politiques : proches des citoyens, transparents
                  dans leurs actions et dÃ©terminÃ©s Ã  produire des rÃ©sultats concrets.
                </p>
                <p className="font-medium text-vert-principal italic">
                  "{CANDIDAT.signature}"
                </p>
              </div>
            </div>
            <div>
              <SectionTitle
                badge="Parcours"
                titre="Son chemin vers l'engagement"
              />
              <div className="mt-6 space-y-6">
                {PARCOURS.map((etape, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-vert-principal mt-1" />
                      {index < PARCOURS.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gris-bordure mt-1" />
                      )}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-semibold text-or bg-or-clair px-2 py-0.5 rounded-full">
                        {etape.periode}
                      </span>
                      <h4 className="font-heading font-bold text-noir-parti mt-2 mb-1">
                        {etape.titre}
                      </h4>
                      <p className="text-gris-moyen text-xs mb-1">{etape.lieu}</p>
                      <p className="text-gris-moyen text-sm">{etape.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="section-padding bg-gris-doux">
        <div className="container-parti">
          <div className="text-center mb-12">
            <SectionTitle
              badge="Ses engagements"
              titre="Des promesses vÃ©rifiables"
              sousTitre="Gorgui Ndiaye s'engage sur des actions prÃ©cises et mesurables. Ces engagements seront suivis et Ã©valuÃ©s publiquement."
              centre={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {ENGAGEMENTS.map((engagement, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card">
                <CheckCircle size={20} className="text-vert-principal shrink-0 mt-0.5" />
                <p className="text-noir-parti text-sm leading-relaxed">{engagement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-vert">
        <div className="container-parti text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Soutenez Gorgui Ndiaye
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            {CANDIDAT.messageInstitutionnel}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rejoindre" className="btn-or">
              Rejoindre le mouvement
              <ArrowRight size={18} />
            </Link>
            <Link href="/priorites"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/25 hover:bg-white/20 transition-all duration-300">
              Voir le programme
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}