import { MessageSquare } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import AdminFiltres from "@/components/admin/AdminFiltres";
import ContributionsTable from "@/components/admin/ContributionsTable";
import type { Contribution } from "@/types";

export const metadata = { title: "Contributions" };
export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ statut?: string; type?: string }>;
}

const STATUTS = ["nouveau", "en_cours", "traite", "rejete"];
const TYPES = ["idee", "probleme", "suggestion"];

async function getContributions(statut?: string, type?: string): Promise<Contribution[]> {
  const admin = createAdminClient();
  let query = admin.from("contributions").select("*").order("created_at", { ascending: false });
  if (statut) query = query.eq("statut", statut);
  if (type) query = query.eq("type", type);
  const { data } = await query;
  return data ?? [];
}

export default async function PageContributions({ searchParams }: Props) {
  const { statut, type } = await searchParams;
  const contributions = await getContributions(statut, type);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-noir-parti mb-1">Contributions citoyennes</h1>
          <p className="text-gris-moyen text-sm">
            {contributions.length} résultat{contributions.length > 1 ? "s" : ""}
          </p>
        </div>
        <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
          <MessageSquare size={20} />
        </div>
      </div>

      <AdminFiltres
        filtres={[
          {
            nom: "statut",
            label: "Tous les statuts",
            options: STATUTS.map((s) => ({ valeur: s, label: s.replace("_", " ") })),
          },
          {
            nom: "type",
            label: "Tous les types",
            options: TYPES.map((t) => ({ valeur: t, label: t.charAt(0).toUpperCase() + t.slice(1) })),
          },
        ]}
      />

      {contributions.length === 0 ? (
        <div className="carte p-10 text-center">
          <p className="text-gris-moyen">Aucune contribution ne correspond à ces critères.</p>
        </div>
      ) : (
        <ContributionsTable contributions={contributions} />
      )}
    </div>
  );
}
