import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { CANDIDAT } from "@/lib/constants";

const ENGAGEMENTS = [
  "Publier les budgets municipaux en ligne chaque trimestre",
  "Organiser des assemblÃ©es citoyennes dans chaque quartier",
  "CrÃ©er 500 emplois pour les jeunes de Rufisque Ouest en 3 ans",
  "RÃ©habiliter les routes et infrastructures dÃ©gradÃ©es",
  "Mettre en place un systÃ¨me de signalement citoyen numÃ©rique",
];

export default function CandidatSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="container-parti">

        <div className="text-center mb-14">
          <SectionTitle
            badge="Le Candidat"
            titre={CANDIDAT.nom}
            sousTitre={CANDIDAT.fonction}
            centre={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="bg-gradient-vert rounded-3xl p-8 text-white relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", transform: "translate(30%, -30%)" }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full"
                style={{ backgroundColor: "rgba(212,160,23,0.15)", transform: "translate(-30%, 30%)" }} />

              <Quote size={40} className="text-or mb-4 opacity-80" />

              <blockquote className="font-heading text-2xl font-bold leading-snug mb-6">
                "{CANDIDAT.messageLeadership}"
              </blockquote>

              <div className="w-12 h-0.5 bg-or mb-6" />

              <p className="text-white/80 leading-relaxed mb-6">
                {CANDIDAT.messageInstitutionnel}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#D4A017" }}>
                  GN
                </div>
                <div>
                  <p className="font-heading font-bold text-white">{CANDIDAT.nom}</p>
                  <p className="text-white/60 text-sm">{CANDIDAT.fonction}</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-or text-white rounded-2xl p-4 shadow-or-md">
              <p className="font-heading font-bold text-sm">Rufisque Ouest</p>
              <p className="text-white/80 text-xs">Notre prioritÃ©</p>
            </div>
          </div>

          <div>
            <SectionTitle
              badge="Ses engagements"
              titre="Des promesses concrÃ¨tes et vÃ©rifiables"
              sousTitre="Gorgui Ndiaye s'engage sur des actions prÃ©cises, mesurables et transparentes pour les citoyens de Rufisque Ouest."
            />

            <ul className="mt-8 space-y-4">
              {ENGAGEMENTS.map((engagement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-vert-principal flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gris-moyen leading-relaxed">{engagement}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/candidat" className="btn-principal">
                Biographie complÃ¨te
                <ArrowRight size={18} />
              </Link>
              <Link href="/priorites" className="btn-secondaire">
                Voir le programme
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}