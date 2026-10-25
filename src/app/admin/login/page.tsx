"use client";

import { useActionState } from "react";
import Image from "next/image";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { connexion } from "./actions";
import { PARTI, CANDIDAT } from "@/lib/constants";

export default function PageLoginAdmin() {
  const [etat, action, enCours] = useActionState(connexion, undefined);

  return (
    <div className="min-h-screen bg-gradient-sombre flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white mx-auto mb-4 shadow-parti-md">
            <Image
              src="/images/logo.png"
              alt="Logo Parti Veridique"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="font-heading font-bold text-white text-xl">{PARTI.nom}</p>
          <p className="text-white/50 text-sm mt-1">Espace administration</p>
        </div>

        <div className="bg-white rounded-2xl shadow-parti-lg p-8">
          <h1 className="font-heading font-bold text-noir-parti text-2xl mb-1">
            Connexion
          </h1>
          <p className="text-gris-moyen text-sm mb-6">
            Accès réservé à l'équipe de {CANDIDAT.nom}.
          </p>

          <form action={action} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-noir-parti mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gris-moyen" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="admin@partieveridique.sn"
                  className="champ-input pl-11"
                />
              </div>
            </div>

            <div>
              <label htmlFor="motDePasse" className="block text-sm font-medium text-noir-parti mb-1.5">
                Mot de passe
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gris-moyen" />
                <input
                  id="motDePasse"
                  name="motDePasse"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="champ-input pl-11"
                />
              </div>
            </div>

            {etat?.error && (
              <p className="erreur-champ bg-rouge-clair px-3 py-2 rounded-lg">
                <AlertCircle size={16} className="shrink-0" />
                {etat.error}
              </p>
            )}

            <button
              type="submit"
              disabled={enCours}
              className="btn-principal w-full justify-center disabled:opacity-60"
            >
              {enCours ? "Connexion..." : "Se connecter"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
