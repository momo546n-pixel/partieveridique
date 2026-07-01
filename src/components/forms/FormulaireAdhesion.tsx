"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, UserPlus } from "lucide-react";
import { envoyerAdhesion } from "@/lib/actions";

const QUARTIERS = [
  "Arafat", "Bambilor", "Colobane", "Diokoul", "Keury Souf",
  "Keury Kaw", "Médina", "Santhiaba", "Thiawlène", "Autre",
];

const TYPES_PARTICIPATION = [
  { valeur: "militant", label: "Militant actif" },
  { valeur: "benevole", label: "Bénévole" },
  { valeur: "donateur", label: "Donateur" },
  { valeur: "observateur", label: "Sympathisant observateur" },
];

export default function FormulaireAdhesion() {
  const [statut, setStatut] = useState<"idle" | "chargement" | "succes" | "erreur">("idle");
  const [erreur, setErreur] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatut("chargement");
    setErreur("");

    const formData = new FormData(e.currentTarget);
    const resultat = await envoyerAdhesion(formData);

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
          Bienvenue dans le mouvement !
        </h3>
        <p className="text-gris-moyen">
          Votre adhésion a été enregistrée. Notre équipe vous contactera rapidement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {statut === "erreur" && (
        <div className="flex items-center gap-2 p-3 bg-rouge-clair rounded-lg">
          <AlertCircle size={18} className="text-rouge shrink-0" />
          <p className="text-rouge text-sm">{erreur}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">Nom *</label>
          <input name="nom" type="text" placeholder="Votre nom" className="champ-input" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">Prénom *</label>
          <input name="prenom" type="text" placeholder="Votre prénom" className="champ-input" required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">Téléphone *</label>
          <input name="telephone" type="tel" placeholder="7X XXX XX XX" className="champ-input" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">Email</label>
          <input name="email" type="email" placeholder="votre@email.com" className="champ-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">Quartier *</label>
          <select name="quartier" className="champ-input" required>
            <option value="">Sélectionnez...</option>
            {QUARTIERS.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1">Profession</label>
          <input name="profession" type="text" placeholder="Votre métier" className="champ-input" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-noir-parti mb-2">
          Comment souhaitez-vous participer ? *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TYPES_PARTICIPATION.map((type) => (
            <label key={type.valeur}
              className="flex items-center gap-3 p-3 border border-gris-bordure rounded-lg cursor-pointer hover:border-vert-principal hover:bg-vert-clair transition-all duration-200">
              <input
                type="radio"
                name="type_participation"
                value={type.valeur}
                className="accent-vert-principal"
                required
              />
              <span className="text-sm text-noir-parti font-medium">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={statut === "chargement"}
        className="btn-principal w-full justify-center disabled:opacity-60"
      >
        {statut === "chargement" ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <UserPlus size={18} />
            Rejoindre le mouvement
          </>
        )}
      </button>
    </form>
  );
}