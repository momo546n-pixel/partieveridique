import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Users, TrendingUp, Briefcase, Shield } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PRIORITES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Priorités",
  description: "Découvrez les 5 priorités du Parti Véridique pour Rufisque Ouest : Transparence, Proximité, Développement, Emploi des jeunes, Sécurité et Solidarité.",
};

const ICONES_COMPOSANTS: Record<string, React.ElementType> = {
  Eye: Eye,
  Users: Users,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Shield: Shield,
};

export default function PrioritesPage() {
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
        <div className="container-parti relative z-10 text-center">
          <span className="badge-or mb-4 inline-block">Notre programme</span>
          <h1 className="font-heading font-black text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Nos 5 Priorités
          </h1>
          <div className="w-16 h-1.5 bg-or rounded-full mx-auto mb-6" />
          <p className="text-white/75 text-xl max-w-2xl mx-auto leading-relaxed">
            Chaque priorité est accompagnée d'objectifs précis, d'actions concrètes
            et d'indicateurs de réussite que les citoyens pourront vérifier.
          </p>
        </div>
      </section>

      {/* LISTE DES PRIORIT�0S */}
      <section className="section-padding bg-white">
        <div className="container-parti">
          <div className="space-y-8">
            {PRIORITES.map((priorite, index) => {
              const Icone = ICONES_COMPOSANTS[priorite.icone] || Eye;
              const estPair = index % 2 === 0;
              return (
                <div key={priorite.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center carte p-8">

                  <div className={estPair ? "order-1" : "order-1 lg:order-2"}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-vert-clair rounded-2xl flex items-center justify-center">
                        <Icone size={28} className="text-vert-principal" />
                      </div>
                      <span className="font-heading font-black text-6xl text-gris-bordure">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-noir-parti mb-3">
                      {priorite.titre}
                    </h2>
                    <div className="w-10 h-1 bg-or rounded-full mb-4" />
                    <p className="text-gris-moyen leading-relaxed mb-6">
                      {priorite.description}
                    </p>
                    <Link
                      href={"/priorites/" + priorite.slug}
                      className="btn-principal"
                    >
                      Voir le détail
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  <div className={estPair ? "order-2" : "order-2 lg:order-1"}>
                    <div className="bg-gris-doux rounded-2xl p-6">
                      <div className="mb-4">
                        <h3 className="font-heading font-bold text-noir-parti mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-vert-principal inline-block" />
                          Objectifs
                        </h3>
                        <ul className="space-y-2">
                          {priorite.objectifs.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight size={14} className="text-vert-principal shrink-0 mt-0.5" />
                              <span className="text-gris-moyen text-sm">{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-gris-bordure pt-4">
                        <h3 className="font-heading font-bold text-noir-parti mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-or inline-block" />
                          Actions concrètes
                        </h3>
                        <ul className="space-y-2">
                          {priorite.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight size={14} className="text-or shrink-0 mt-0.5" />
                              <span className="text-gris-moyen text-sm">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-vert">
        <div className="container-parti text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Ce programme, c'est le vôtre
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Contribuez à enrichir notre programme en partageant vos idées
            et vos suggestions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/parole-aux-citoyens" className="btn-or">
              Proposer une idée
              <ArrowRight size={18} />
            </Link>
            <Link href="/rejoindre"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/25 hover:bg-white/20 transition-all duration-300">
              Rejoindre le mouvement
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}