"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { envoyerMessage } from "@/lib/actions";

export default function FormulaireContact() {
  const [statut, setStatut] = useState<"idle" | "chargement" | "succes" | "erreur">("idle");
  const [erreur, setErreur] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatut("chargement");
    setErreur("");

    const formData = new FormData(e.currentTarget);
    const resultat = await envoyerMessage(formData);

    if (resultat.success) {
      setStatut("succes");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatut("erreur");
      setErreur(resultat.error || "Une erreur est survenue.");
    }
  }

  if (statut === "succes") {
    return (
      <div className="bg-vert-clair rounded-2xl p-8 text-center">
        <CheckCircle size={48} className="text-vert-principal mx-auto mb-4" />
        <h3 className="font-heading font-bold text-xl text-vert-principal mb-2">
          Message envoyÃ© !
        </h3>
        <p className="text-gris-moyen mb-4">
          Nous avons bien reÃ§u votre message et vous rÃ©pondrons dans les plus brefs dÃ©lais.
        </p>
        <button
          onClick={() => setStatut("idle")}
          className="btn-principal"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {statut === "erreur" && (
        <div className="flex items-center gap-2 p-3 bg-rouge-clair rounded-lg">
          <AlertCircle size={18} className="text-rouge shrink-0" />
          <p className="text-rouge text-sm">{erreur}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">
            Nom complet *
          </label>
          <input
            name="nom"
            type="text"
            placeholder="Votre nom"
            className="champ-input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">
            TÃ©lÃ©phone *
          </label>
          <input
            name="telephone"
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
          name="email"
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
          name="message"
          rows={5}
          placeholder="Votre message..."
          className="champ-input resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={statut === "chargement"}
        className="btn-principal w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {statut === "chargement" ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={18} />
            Envoyer le message
          </>
        )}
      </button>

      <p className="text-xs text-gris-moyen text-center">
        * Champs obligatoires. Vos donnÃ©es sont protÃ©gÃ©es.
      </p>
    </form>
  );
}