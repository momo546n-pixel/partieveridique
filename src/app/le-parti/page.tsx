import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Users, TrendingUp, Briefcase, Shield, Target, Heart } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PARTI, CANDIDAT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Le Parti",
  description: "DÃ©couvrez l'histoire, la vision, la mission et les valeurs du Parti VÃ©ridique. Un parti nÃ© de la volontÃ© citoyenne pour Rufisque Ouest.",
};

const VALEURS_DETAIL = [
  {
    icone: Eye,
    titre: "Transparence",
    description: "Nous publions toutes nos dÃ©cisions, nos budgets et nos actions. Le citoyen a le droit de savoir comment son argent est gÃ©rÃ© et quelles dÃ©cisions sont prises en son nom.",
  },
  {
    icone: Users,
    titre: "ProximitÃ©",
    description: "Nos Ã©lus sont sur le terrain, dans les quartiers, Ã  l'Ã©coute. Pas de distance entre les reprÃ©sentants et les reprÃ©sentÃ©s â€” nous sommes vos voisins, vos concitoyens.",
  },
  {
    icone: TrendingUp,
    titre: "DÃ©veloppement",
    description: "Nous investissons dans les infrastructures, l'Ã©conomie locale et les services publics. Rufisque Ouest mÃ©rite des Ã©quipements modernes et des services de qualitÃ©.",
  },
  {
    icone: Briefcase,
    titre: "Emploi des Jeunes",
    description: "La jeunesse est notre prioritÃ© absolue. Nous crÃ©ons les conditions d'une insertion professionnelle durable Ã  travers la formation, l'entrepreneuriat et le partenariat privÃ©.",
  },
  {
    icone: Shield,
    titre: "SÃ©curitÃ© & SolidaritÃ©",
    description: "Un Rufisque sÃ»r et solidaire oÃ¹ chaque citoyen peut vivre dignement. Nous renforÃ§ons les dispositifs de sÃ©curitÃ© et les mÃ©canismes de solidaritÃ© communautaire.",
  },
];

const EQUIPE = [
  { nom: "Gorgui Ndiaye", role: "Candidat Ã  la Mairie", initiales: "GN" },
  { nom: "SecrÃ©taire GÃ©nÃ©ral", role: "Direction du Parti", initiales: "SG" },
  { nom: "TrÃ©sorier", role: "Gestion FinanciÃ¨re", initiales: "TR" },
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
            <span className="badge-or mb-4 inline-block">Notre identitÃ©</span>
            <h1 className="font-heading font-black text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Le Parti VÃ©ridique
            </h1>
            <div className="w-16 h-1.5 bg-or rounded-full mb-6" />
            <p className="text-white/80 text-xl leading-relaxed">
              {PARTI.devise} â€” trois mots qui rÃ©sument notre raison d'Ãªtre et
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
                titre="Un parti nÃ© de la nÃ©cessitÃ©"
              />
              <div className="mt-6 space-y-4 text-gris-moyen leading-relaxed">
                <p>
                  Le Parti VÃ©ridique est nÃ© en 2024 d'un constat simple mais douloureux :
                  Rufisque Ouest, malgrÃ© son potentiel immense, souffre d'une gestion
                  municipale dÃ©connectÃ©e des rÃ©alitÃ©s citoyennes.
                </p>
                <p>
                  Des hommes et des femmes de bonne volontÃ©, venus de tous les quartiers,
                  toutes les professions et toutes les gÃ©nÃ©rations, ont dÃ©cidÃ© de se
                  rassembler autour d'un projet commun : redonner Ã  Rufisque Ouest la
                  place qu'elle mÃ©rite.
                </p>
                <p>
                  GuidÃ©s par les valeurs de <strong className="text-vert-principal">VÃ©ritÃ©</strong>,
                  de <strong className="text-vert-principal">Justice</strong> et de{" "}
                  <strong className="text-vert-principal">ProgrÃ¨s</strong>, nous avons
                  construit un parti ancrÃ© dans la rÃ©alitÃ© locale, tournÃ© vers l'avenir.
                </p>
              </div>
            </div>
            <div className="bg-gris-doux rounded-3xl p-8">
              <div className="space-y-6">
                {[
                  { annee: "2024", evenement: "Fondation du Parti VÃ©ridique Ã  Rufisque" },
                  { annee: "2024", evenement: "Adoption de la charte et des statuts officiels" },
                  { annee: "2024", evenement: "DÃ©signation de Gorgui Ndiaye comme candidat" },
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
                Faire de Rufisque Ouest une commune modÃ¨le de bonne gouvernance locale
                au SÃ©nÃ©gal â€” une commune oÃ¹ les citoyens sont au centre de toutes les
                dÃ©cisions, oÃ¹ les ressources publiques sont gÃ©rÃ©es avec rigueur et
                transparence, et oÃ¹ chaque habitant peut s'Ã©panouir pleinement.
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
                une participation active Ã  la vie politique locale. Proposer des
                solutions concrÃ¨tes aux problÃ¨mes quotidiens et exercer le pouvoir
                municipal dans la transparence, l'efficacitÃ© et la proximitÃ©.
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
              titre="Les 5 piliers du Parti VÃ©ridique"
              sousTitre="Ces valeurs ne sont pas de simples mots â€” elles guident chacune de nos actions et chacun de nos engagements."
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
              badge="Notre Ã©quipe"
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