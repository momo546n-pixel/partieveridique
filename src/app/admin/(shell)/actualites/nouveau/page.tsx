import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ArticleForm from "@/components/admin/ArticleForm";
import { creerArticle } from "../actions";

export const metadata = { title: "Nouvel article" };

export default function PageNouvelArticle() {
  return (
    <div>
      <Link
        href="/admin/actualites"
        className="inline-flex items-center gap-2 text-gris-moyen hover:text-noir-parti text-sm mb-4"
      >
        <ArrowLeft size={16} />
        Retour aux actualités
      </Link>
      <h1 className="font-heading font-bold text-2xl text-noir-parti mb-6">Nouvel article</h1>
      <ArticleForm action={creerArticle} />
    </div>
  );
}
