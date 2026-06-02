import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PARTI } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez le Parti Véridique. Posez vos questions ou prenez contact avec l'équipe de Gorgui Ndiaye.",
};

const INFOS = [
  {
    icone: MapPin,
    titre: "Adresse",
    valeur: PARTI.adresse,
    detail: "Rufisque Ouest, Dakar",
  },
  {
    icone: Phone,
    titre: "Téléphone",
    valeur: PARTI.telephone,
    detail: "Lun - Sam, 8h - 18h",
  },
  {
    icone: Mail,
    titre: "Email",
    valeur: PARTI.email,
    detail: "Réponse sous 24h",
  },
  {
    icone: Clock,
    titre: "Permanences",
    valeur: "Samedi 9h - 12h",
    detail: "Dans chaque quartier",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-navbar">

      {/* HERO */}
      <section className="bg-gradient-vert py-16">
        <div className="container-parti">
          <div className="max-w-xl">
            <span className="badge-or mb-4 inline-block">Nous joindre</span>
            <h1 className="font-heading font-black text-white mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Contactez-nous
            </h1>
            <div className="w-16 h-1.5 bg-or rounded-full mb-4" />
            <p className="text-white/75 text-lg">
              Une question, une suggestion ou envie d'en savoir plus ?
              Notre équipe est à votre écoute.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="section-padding bg-gris-doux">
        <div className="container-parti">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* FORMULAIRE */}
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <SectionTitle
                badge="Formulaire"
                titre="Envoyez-nous un message"
              />
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-noir-parti mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="champ-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-noir-parti mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      placeholder="7X XXX XX XX"
                      className="champ-input"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-noir-parti mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="champ-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-noir-parti mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Votre message..."
                    className="champ-input resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-principal w-full justify-center"
                >
                  Envoyer le message
                </button>
                <p className="text-xs text-gris-moyen text-center">
                  * Champs obligatoires. Vos données sont protégées.
                </p>
              </form>
            </div>

            {/* INFOS */}
            <div>
              <SectionTitle
                badge="Coordonnées"
                titre="Nos informations"
              />
              <div className="mt-6 space-y-4">
                {INFOS.map((info) => {
                  const Icone = info.icone;
                  return (
                    <div key={info.titre} className="flex gap-4 bg-white rounded-2xl p-5 shadow-card">
                      <div className="w-11 h-11 bg-vert-clair rounded-xl flex items-center justify-center shrink-0">
                        <Icone size={20} className="text-vert-principal" />
                      </div>
                      <div>
                        <p className="text-xs text-gris-moyen font-medium uppercase tracking-wide">
                          {info.titre}
                        </p>
                        <p className="font-semibold text-noir-parti mt-0.5">{info.valeur}</p>
                        <p className="text-xs text-gris-moyen mt-0.5">{info.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-gradient-vert rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-2">
                  Rejoignez le mouvement
                </h3>
                <p className="text-white/75 text-sm mb-4">
                  Vous souhaitez vous engager activement ?
                  Rejoignez nos équipes de terrain.
                </p>
                <a href="/rejoindre" className="btn-or text-sm">
                  S'engager maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}