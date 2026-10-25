import Link from "next/link";
import { Newspaper, Plus } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import ActualitesTable from "@/components/admin/ActualitesTable";
import type { Article } from "@/types";

export const metadata = { title: "Actualités" };
export const dynamic = "force-dynamic";

async function getArticles(): Promise<Article[]> {
  const admin = createAdminClient();
  const { data } = await admin
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });
  return data ?? [];
}

export default async function PageActualitesAdmin() {
  const articles = await getArticles();

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="font-heading font-bold text-2xl text-noir-parti mb-1">Actualités</h1>
          <p className="text-gris-moyen text-sm">
            {articles.length} article{articles.length > 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/admin/actualites/nouveau" className="btn-principal">
          <Plus size={18} />
          Nouvel article
        </Link>
      </div>

      {articles.length === 0 ? (
        <div className="carte p-10 text-center">
          <Newspaper size={28} className="mx-auto text-gris-moyen mb-2" />
          <p className="text-gris-moyen">Aucun article pour le moment.</p>
        </div>
      ) : (
        <ActualitesTable articles={articles} />
      )}
    </div>
  );
}
