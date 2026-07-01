import Link from "next/link";
import { ArrowRight, Heart, MessageSquare, Users } from "lucide-react";
import { CANDIDAT, PARTI } from "@/lib/constants";

const ACTIONS = [
  {
    icone: Users,
    titre: "Rejoindre le mouvement",
    description: "Devenez militant, bénévole ou sympathisant du Parti Véridique.",
    href: "/rejoindre",
    label: "S'engager",
    couleur: "bg-vert-clair",
    iconeCouleur: "text-vert-principal",
  },
  {
    icone: MessageSquare,
    titre: "Parole aux citoyens",
    description: "Proposez une idée, signalez un problème ou faites une suggestion.",
    href: "/parole-aux-citoyens",
    label: "Contribuer",
    couleur: "bg-or-clair",
    iconeCouleur: "text-or-hover",
  },
  {
    icone: Heart,
    titre: "Nous contacter",
    description: "Posez vos questions ou prenez contact avec notre équipe.",
    href: "/contact",
    label: "Contacter",
    couleur: "bg-vert-clair",
    iconeCouleur: "text-vert-principal",
  },
];

export default function AppelSection() {
  return (
    <section className="section-padding bg-gradient-vert relative overflow-hidden">

      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container-parti relative z-10">

        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "rgba(212,160,23,0.2)", color: "#D4A017" }}>
            Ensemble
          </span>
          <h2 className="font-heading font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Rejoignez le changement
          </h2>
          <div className="w-14 h-1 bg-or rounded-full mx-auto mb-4" />
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            {CANDIDAT.signature}. Chaque voix compte, chaque action compte.
            Ensemble, nous construisons le Rufisque de demain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ACTIONS.map((action) => {
            const Icone = action.icone;
            return (
              <div key={action.titre} className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className={"w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 " + action.couleur}>
                  <Icone size={26} className={action.iconeCouleur} />
                </div>
                <h3 className="font-heading font-bold text-lg text-noir-parti mb-2">
                  {action.titre}
                </h3>
                <p className="text-gris-moyen text-sm leading-relaxed mb-5">
                  {action.description}
                </p>
                <Link
                  href={action.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-vert-principal text-white text-sm font-semibold rounded-lg hover:bg-vert-hover transition-all duration-300 active:scale-95"
                >
                  {action.label}
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-white/60 text-sm mb-4">{PARTI.devise}</p>
          <p className="font-heading font-bold text-white text-xl">
            {CANDIDAT.nom} � {CANDIDAT.fonction}
          </p>
        </div>

      </div>
    </section>
  );
}