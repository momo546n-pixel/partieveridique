import type { Metadata } from "next";
import FormulaireAdhesion from "@/components/forms/FormulaireAdhesion";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Rejoindre le Mouvement",
  description: "Rejoignez le Parti Véridique et soutenez Gorgui Ndiaye.",
};

export default function RejoindrePage() {
  return (
    <main className="pt-navbar">
      <section className="bg-gradient-vert py-16">
        <div className="container-parti">
          <div className="max-w-xl">
            <span className="badge-or mb-4 inline-block">Engagement</span>
            <h1
              className="font-heading font-black text-white mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Rejoindre le Mouvement
            </h1>
            <div className="w-16 h-1.5 bg-or rounded-full mb-4" />
            <p className="text-white/75 text-lg">
              Ensemble pour un Rufisque moderne, prospère et solidaire.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gris-doux">
        <div className="container-parti max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-card">
            <SectionTitle
              badge="Formulaire d'adhesion"
              titre="Rejoignez le Parti Veridique"
              sousTitre="Remplissez ce formulaire pour nous rejoindre."
            />
            <div className="mt-8">
              <FormulaireAdhesion />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}