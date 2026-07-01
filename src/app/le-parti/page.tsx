import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Users, TrendingUp, Briefcase, Shield, Target, Heart } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PARTI, CANDIDAT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Le Parti",
  description: "Découvrez l'histoire, la vision, la mission et les valeurs du Parti Véridique. Un parti né de la volonté citoyenne pour Rufisque Ouest.",
};

const VALEURS_DETAIL = [
  {
    icone: Eye,
    titre: "Transparence",
    description: "Nous publions toutes nos décisions, nos budgets et nos actions. Le citoyen a le droit de savoir comment son argent est géré et quelles décisions sont prises en son nom.",
  },
  {
    icone: Users,
    titre: "Proximité",
    description: "Nos élus sont sur le terrain, dans les quartiers, à l'écoute. Pas de distance entre les représentants et les représentés � nous sommes vos voisins, vos concitoyens.",
  },
  {
    icone: TrendingUp,
    titre: "Développement",
    description: "Nous investissons dans les infrastructures, l'économie locale et les services publics. Rufisque Ouest mérite des équipements modernes et des services de qualité.",
  },
  {
    icone: Briefcase,
    titre: "Emploi des Jeunes",
    description: "La jeunesse est notre priorité absolue. Nous créons les conditions d'une insertion professionnelle durable à travers la formation, l'entrepreneuriat et le partenariat privé.",
  },
  {
    icone: Shield,
    titre: "Sécurité & Solidarité",
    description: "Un Rufisque sûr et solidaire où chaque citoyen peut vivre dignement. Nous renforçons les dispositifs de sécurité et les mécanismes de solidarité communautaire.",
  },
];

const EQUIPE = [
  { nom: "Gorgui Ndiaye", role: "Candidat à la Mairie", initiales: "GN" },
  { nom: "Secrétaire Général", role: "Direction du Parti", initiales: "SG" },
  { nom: "Trésorier", role: "Gestion Financière", initiales: "TR" },
  { nom: "Coord. Jeunesse", role: "Mobilisation", initiales: "CJ" },
];

export default function LePartiPage() {
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
          <div className="max-w-2xl">
            <span className="badge-or mb-4 inline-block">Notre identité</span>
            <h1 className="font-heading font-black text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Le Parti Véridique
            </h1>
            <div className="w-16 h-1.5 bg-or rounded-full mb-6" />
            <p className="text-white/80 text-xl leading-relaxed">
              {PARTI.devise} � trois mots qui résument notre raison d'être et
              notre engagement envers les citoyens de Rufisque Ouest.
            </p>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section id="histoire" className="section-padding bg-white">
        <div className="container-parti">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Notre histoire"
                titre="Un parti né de la nécessité"
              />
              <div className="mt-6 space-y-4 text-gris-moyen leading-relaxed">
                <p>
                  Le Parti Véridique est né en 2024 d'un constat simple mais douloureux :
                  Rufisque Ouest, malgré son potentiel immense, souffre d'une gestion
                  municipale déconnectée des réalités citoyennes.
                </p>
                <p>
                  Des hommes et des femmes de bonne volonté, venus de tous les quartiers,
                  toutes les professions et toutes les générations, ont décidé de se
                  rassembler autour d'un projet commun : redonner à Rufisque Ouest la
                  place qu'elle mérite.
                </p>
                <p>
                  Guidés par les valeurs de <strong className="text-vert-principal">Vérité</strong>,
                  de <strong className="text-vert-principal">Justice</strong> et de{" "}
                  <strong className="text-vert-principal">Progrès</strong>, nous avons
                  construit un parti ancré dans la réalité locale, tourné vers l'avenir.
                </p>
              </div>
            </div>
            <div className="bg-gris-doux rounded-3xl p-8">
              <div className="space-y-6">
                {[
                  { annee: "2024", evenement: "Fondation du Parti Véridique à Rufisque" },
                  { annee: "2024", evenement: "Adoption de la charte et des statuts officiels" },
                  { annee: "2024", evenement: "Désignation de Gorgui Ndiaye comme candidat" },
                  { annee: "2025", evenement: "Lancement de la campagne de terrain" },
                  { annee: "2026", evenement: "Elections municipales de Rufisque Ouest" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-14 h-7 bg-vert-principal rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{item.annee}</span>
                      </div>
                    </div>
                    <div className="flex-1 pb-6 border-b border-gris-bordure last:border-0 last:pb-0">
                      <p className="text-noir-parti font-medium">{item.evenement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="section-padding bg-gris-doux">
        <div className="container-parti">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <div className="w-12 h-12 bg-vert-clair rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-vert-principal" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-noir-parti mb-3">
                Notre Vision
              </h2>
              <div className="w-10 h-1 bg-or rounded-full mb-4" />
              <p className="text-gris-moyen leading-relaxed">
                Faire de Rufisque Ouest une commune modèle de bonne gouvernance locale
                au Sénégal � une commune où les citoyens sont au centre de toutes les
                décisions, où les ressources publiques sont gérées avec rigueur et
                transparence, et où chaque habitant peut s'épanouir pleinement.
              </p>
            </div>
            <div className="bg-gradient-vert rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(212,160,23,0.2)" }}>
                <Heart size={24} className="text-or" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-white mb-3">
                Notre Mission
              </h2>
              <div className="w-10 h-1 bg-or rounded-full mb-4" />
              <p className="text-white/80 leading-relaxed">
                Mobiliser, former et organiser les citoyens de Rufisque Ouest pour
                une participation active à la vie politique locale. Proposer des
                solutions concrètes aux problèmes quotidiens et exercer le pouvoir
                municipal dans la transparence, l'efficacité et la proximité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section id="valeurs" className="section-padding bg-white">
        <div className="container-parti">
          <div className="text-center mb-14">
            <SectionTitle
              badge="Nos valeurs"
              titre="Les 5 piliers du Parti Véridique"
              sousTitre="Ces valeurs ne sont pas de simples mots � elles guident chacune de nos actions et chacun de nos engagements."
              centre={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALEURS_DETAIL.map((valeur) => {
              const Icone = valeur.icone;
              return (
                <div key={valeur.titre} className="carte p-6">
                  <div className="w-12 h-12 bg-vert-clair rounded-xl flex items-center justify-center mb-4">
                    <Icone size={22} className="text-vert-principal" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-noir-parti mb-2">
                    {valeur.titre}
                  </h3>
                  <p className="text-gris-moyen text-sm leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="section-padding bg-gris-doux">
        <div className="container-parti">
          <div className="text-center mb-14">
            <SectionTitle
              badge="Notre équipe"
              titre="Le leadership du Parti"
              centre={true}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EQUIPE.map((membre) => (
              <div key={membre.nom} className="carte p-6 text-center">
                <div className="w-16 h-16 bg-vert-principal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-black text-white text-xl">
                    {membre.initiales}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-noir-parti text-sm mb-1">
                  {membre.nom}
                </h4>
                <p className="text-gris-moyen text-xs">{membre.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-vert">
        <div className="container-parti text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Rejoignez notre mouvement
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            {CANDIDAT.messageInstitutionnel}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rejoindre" className="btn-or">
              Devenir membre
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/25 hover:bg-white/20 transition-all duration-300">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}