"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface Filtre {
  nom: string;
  label: string;
  options: { valeur: string; label: string }[];
}

export default function AdminFiltres({ filtres }: { filtres: Filtre[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChange = (nom: string, valeur: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (valeur) params.set(nom, valeur);
    else params.delete(nom);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {filtres.map((filtre) => (
        <select
          key={filtre.nom}
          defaultValue={searchParams.get(filtre.nom) ?? ""}
          onChange={(e) => onChange(filtre.nom, e.target.value)}
          className="champ-input w-auto py-2 text-sm"
        >
          <option value="">{filtre.label}</option>
          {filtre.options.map((option) => (
            <option key={option.valeur} value={option.valeur}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
