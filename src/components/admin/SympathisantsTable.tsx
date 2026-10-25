"use client";

import { useState, useTransition } from "react";
import { changerStatutSympathisant } from "@/app/admin/(shell)/sympathisants/actions";
import { formatDate, formatTelephone } from "@/utils";
import type { Sympathisant, StatutSympathisant } from "@/types";

const STATUTS: StatutSympathisant[] = ["nouveau", "contacte", "confirme", "inactif"];

const COULEURS_STATUT: Record<StatutSympathisant, string> = {
  nouveau: "bg-or-clair text-or-hover",
  contacte: "bg-blue-100 text-blue-700",
  confirme: "bg-vert-clair text-vert-secondaire",
  inactif: "bg-gris-bordure text-gris-moyen",
};

export default function SympathisantsTable({ sympathisants }: { sympathisants: Sympathisant[] }) {
  const [liste, setListe] = useState(sympathisants);
  const [, startTransition] = useTransition();

  const changerStatut = (id: string, statut: StatutSympathisant) => {
    setListe((prev) => prev.map((s) => (s.id === id ? { ...s, statut } : s)));
    startTransition(() => {
      changerStatutSympathisant(id, statut);
    });
  };

  return (
    <div className="carte overflow-hidden overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gris-doux text-gris-moyen text-xs uppercase tracking-wide">
          <tr>
            <th className="text-left px-5 py-3 font-semibold">Nom</th>
            <th className="text-left px-5 py-3 font-semibold">Contact</th>
            <th className="text-left px-5 py-3 font-semibold">Quartier</th>
            <th className="text-left px-5 py-3 font-semibold">Participation</th>
            <th className="text-left px-5 py-3 font-semibold">Statut</th>
            <th className="text-left px-5 py-3 font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          {liste.map((s) => (
            <tr key={s.id} className="border-t border-gris-bordure">
              <td className="px-5 py-3 font-medium text-noir-parti whitespace-nowrap">
                {s.prenom} {s.nom}
              </td>
              <td className="px-5 py-3 text-gris-moyen">
                <p>{formatTelephone(s.telephone)}</p>
                {s.email && <p className="text-xs">{s.email}</p>}
              </td>
              <td className="px-5 py-3 text-gris-moyen whitespace-nowrap">{s.quartier}</td>
              <td className="px-5 py-3 text-gris-moyen capitalize whitespace-nowrap">
                {s.type_participation}
              </td>
              <td className="px-5 py-3">
                <select
                  value={s.statut}
                  onChange={(e) => changerStatut(s.id, e.target.value as StatutSympathisant)}
                  className={
                    "text-xs font-medium rounded-full px-3 py-1 border-0 capitalize cursor-pointer " +
                    COULEURS_STATUT[s.statut]
                  }
                >
                  {STATUTS.map((statut) => (
                    <option key={statut} value={statut}>
                      {statut}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-5 py-3 text-gris-moyen whitespace-nowrap">{formatDate(s.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
