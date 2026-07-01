import Link from "next/link";
import { ArrowRight, Eye, Users, TrendingUp, Briefcase, Shield } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PRIORITES } from "@/lib/constants";

const ICONES_COMPOSANTS: Record<string, React.ElementType> = {
  Eye: Eye,
  Users: Users,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Shield: Shield,
};

export default function PrioritesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-parti">

        <div className="text-center mb-14">
          <SectionTitle
            badge="Notre programme"
            titre="Nos 5 priorités pour Rufisque Ouest"
            sousTitre="Chaque priorité est accompagnée d'objectifs précis et d'actions concrètes que nous nous engageons à réaliser."
            centre={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIORITES.map((priorite, index) => {
            const Icone = ICONES_COMPOSANTS[priorite.icone] || Eye;
            const estDernier = index === PRIORITES.length - 1;
            return (
              <div
                key={priorite.id}
                className={"carte p-6 group " + (estDernier ? "md:col-span-2 lg:col-span-1" : "")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-vert-clair rounded-xl flex items-center justify-center group-hover:bg-vert-principal transition-colors duration-300">
                    <Icone size={22} className="text-vert-principal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-heading font-black text-4xl text-gris-bordure">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-noir-parti mb-3">
                  {priorite.titre}
                </h3>
                <p className="text-gris-moyen text-sm leading-relaxed mb-4">
                  {priorite.description}
                </p>

                <div className="space-y-2 mb-5">
                  {priorite.objectifs.slice(0, 2).map((obj, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-or mt-1.5 shrink-0" />
                      <p className="text-xs text-gris-moyen">{obj}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={"/priorites/" + priorite.slug}
                  className="inline-flex items-center gap-1 text-vert-principal text-sm font-semibold hover:gap-2 transition-all duration-200"
                >
                  En savoir plus
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/priorites" className="btn-principal">
            Voir le programme complet
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}