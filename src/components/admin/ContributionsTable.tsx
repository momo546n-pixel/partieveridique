"use client";

import { useState, useTransition } from "react";
import { changerStatutContribution } from "@/app/admin/(shell)/contributions/actions";
import { formatDate, formatTelephone } from "@/utils";
import type { Contribution, StatutContribution } from "@/types";

const STATUTS: StatutContribution[] = ["nouveau", "en_cours", "traite", "rejete"];

const COULEURS_STATUT: Record<StatutContribution, string> = {
  nouveau: "bg-or-clair text-or-hover",
  en_cours: "bg-blue-100 text-blue-700",
  traite: "bg-vert-clair text-vert-secondaire",
  rejete: "bg-rouge-clair text-rouge",
};

const LABELS_TYPE: Record<string, string> = {
  idee: "Idée",
  probleme: "Problème",
  suggestion: "Suggestion",
};

export default function ContributionsTable({ contributions }: { contributions: Contribution[] }) {
  const [liste, setListe] = useState(contributions);
  const [, startTransition] = useTransition();

  const changerStatut = (id: string, statut: StatutContribution) => {
    setListe((prev) => prev.map((c) => (c.id === id ? { ...c, statut } : c)));
    startTransition(() => {
      changerStatutContribution(id, statut);
    });
  };

  return (
    <div className="space-y-3">
      {liste.map((c) => (
        <div key={c.id} className="carte p-5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <p className="font-semibold text-noir-parti">{c.nom}</p>
                <span className="badge bg-gris-doux text-gris-moyen">{LABELS_TYPE[c.type] || c.type}</span>
              </div>
              <p className="text-xs text-gris-moyen mb-2">
                {formatTelephone(c.telephone)}
                {c.email ? " · " + c.email : ""}
                {c.quartier ? " · " + c.quartier : ""}
              </p>
              <p className="text-sm text-noir-parti">{c.message}</p>
            </div>

            <div className="flex flex-col items-end gap-2 shrink-0">
              <span className="text-xs text-gris-moyen whitespace-nowrap">{formatDate(c.created_at)}</span>
              <select
                value={c.statut}
                onChange={(e) => changerStatut(c.id, e.target.value as StatutContribution)}
                className={
                  "text-xs font-medium rounded-full px-3 py-1 border-0 cursor-pointer " +
                  COULEURS_STATUT[c.statut]
                }
              >
                {STATUTS.map((statut) => (
                  <option key={statut} value={statut}>
                    {statut.replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
