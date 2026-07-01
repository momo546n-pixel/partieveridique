import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import FormulaireContact from "@/components/forms/FormulaireContact";
import { PARTI } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez le Parti VÃ©ridique.",
};

const INFOS = [
  { icone: MapPin, titre: "Adresse", valeur: PARTI.adresse, detail: "Rufisque Ouest, Dakar" },
  { icone: Phone, titre: "TÃ©lÃ©phone", valeur: PARTI.telephone, detail: "Lun - Sam, 8h - 18h" },
  { icone: Mail, titre: "Email", valeur: PARTI.email, detail: "RÃ©ponse sous 24h" },
  { icone: Clock, titre: "Permanences", valeur: "Samedi 9h - 12h", detail: "Dans chaque quartier" },
];

export default function ContactPage() {
  return (
    <main className="pt-navbar">
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
              Notre Ã©quipe est Ã  votre Ã©coute.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gris-doux">
        <div className="container-parti">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <SectionTitle badge="Formulaire" titre="Envoyez-nous un message" />
              <div className="mt-6">
                <FormulaireContact />
              </div>
            </div>

            <div>
              <SectionTitle badge="CoordonnÃ©es" titre="Nos informations" />
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
                <h3 className="font-heading font-bold text-lg mb-2">Rejoignez le mouvement</h3>
                <p className="text-white/75 text-sm mb-4">
                  Vous souhaitez vous engager activement ? Rejoignez nos Ã©quipes de terrain.
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