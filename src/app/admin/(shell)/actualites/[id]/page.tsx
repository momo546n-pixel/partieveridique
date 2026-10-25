import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import ArticleForm from "@/components/admin/ArticleForm";
import { modifierArticle } from "../actions";

export const metadata = { title: "Modifier l'article" };

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PageModifierArticle({ params }: Props) {
  const { id } = await params;
  const admin = createAdminClient();
  const { data: article } = await admin.from("articles").select("*").eq("id", id).single();

  if (!article) notFound();

  const modifierAvecId = modifierArticle.bind(null, id);

  return (
    <div>
      <Link
        href="/admin/actualites"
        className="inline-flex items-center gap-2 text-gris-moyen hover:text-noir-parti text-sm mb-4"
      >
        <ArrowLeft size={16} />
        Retour aux actualités
      </Link>
      <h1 className="font-heading font-bold text-2xl text-noir-parti mb-6">Modifier l'article</h1>
      <ArticleForm action={modifierAvecId} article={article} />
    </div>
  );
}
