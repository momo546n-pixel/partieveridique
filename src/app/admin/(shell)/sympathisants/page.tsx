import { Users } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import AdminFiltres from "@/components/admin/AdminFiltres";
import SympathisantsTable from "@/components/admin/SympathisantsTable";
import type { Sympathisant } from "@/types";

export const metadata = { title: "Sympathisants" };
export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ statut?: string; type?: string }>;
}

const STATUTS = ["nouveau", "contacte", "confirme", "inactif"];
const TYPES = ["benevole", "militant", "donateur", "observateur"];

async function getSympathisants(statut?: string, type?: string): Promise<Sympathisant[]> {
  const admin = createAdminClient();
  let query = admin.from("sympathisants").select("*").order("created_at", { ascending: false });
  if (statut) query = query.eq("statut", statut);
  if (type) query = query.eq("type_participation", type);
  const { data } = await query;
  return data ?? [];
}

export default async function PageSympathisants({ searchParams }: Props) {
  const { statut, type } = await searchParams;
  const sympathisants = await getSympathisants(statut, type);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-noir-parti mb-1">Sympathisants</h1>
          <p className="text-gris-moyen text-sm">
            {sympathisants.length} résultat{sympathisants.length > 1 ? "s" : ""}
          </p>
        </div>
        <div className="w-11 h-11 rounded-xl bg-or-clair text-or-hover flex items-center justify-center">
          <Users size={20} />
        </div>
      </div>

      <AdminFiltres
        filtres={[
          {
            nom: "statut",
            label: "Tous les statuts",
            options: STATUTS.map((s) => ({ valeur: s, label: s.charAt(0).toUpperCase() + s.slice(1) })),
          },
          {
            nom: "type",
            label: "Tous les types",
            options: TYPES.map((t) => ({ valeur: t, label: t.charAt(0).toUpperCase() + t.slice(1) })),
          },
        ]}
      />

      {sympathisants.length === 0 ? (
        <div className="carte p-10 text-center">
          <p className="text-gris-moyen">Aucun sympathisant ne correspond à ces critères.</p>
        </div>
      ) : (
        <SympathisantsTable sympathisants={sympathisants} />
      )}
    </div>
  );
}
