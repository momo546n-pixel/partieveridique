import type { Metadata } from "next";
import { MessageSquare, Lightbulb, AlertTriangle, ThumbsUp } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import FormulaireContribution from "@/components/forms/FormulaireContribution";

export const metadata: Metadata = {
  title: "Parole aux Citoyens",
  description: "Proposez une idée, signalez un problème ou faites une suggestion pour Rufisque Ouest.",
};

const TYPES = [
  { icone: Lightbulb, titre: "Idée", description: "Proposez une nouvelle idée pour améliorer Rufisque Ouest.", couleur: "bg-or-clair", texte: "text-or-hover" },
  { icone: AlertTriangle, titre: "Problème", description: "Signalez un problème dans votre quartier.", couleur: "bg-rouge-clair", texte: "text-rouge" },
  { icone: ThumbsUp, titre: "Suggestion", description: "Faites une suggestion sur notre programme.", couleur: "bg-vert-clair", texte: "text-vert-principal" },
];

export default function ParoleAuxCitoyensPage() {
  return (
    <main className="pt-navbar">
      <section className="bg-gradient-vert py-16">
        <div className="container-parti">
          <div className="max-w-xl">
            <span className="badge-or mb-4 inline-block">Votre voix compte</span>
            <h1 className="font-heading font-black text-white mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Parole aux Citoyens
            </h1>
            <div className="w-16 h-1.5 bg-or rounded-full mb-4" />
            <p className="text-white/75 text-lg">
              Proposez vos idées, signalez les problèmes de votre quartier
              ou faites des suggestions à notre équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gris-doux">
        <div className="container-parti">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {TYPES.map((type) => {
              const Icone = type.icone;
              return (
                <div key={type.titre} className={"rounded-2xl p-6 " + type.couleur}>
                  <Icone size={28} className={"mb-3 " + type.texte} />
                  <h3 className={"font-heading font-bold text-lg mb-1 " + type.texte}>
                    {type.titre}
                  </h3>
                  <p className="text-gris-moyen text-sm">{type.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-card">
            <SectionTitle
              badge="Formulaire"
              titre="Exprimez-vous"
              sousTitre="Votre contribution sera lue et étudiée par notre équipe."
            />
            <div className="mt-8">
              <FormulaireContribution />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}