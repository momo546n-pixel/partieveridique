"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { supprimerArticle, basculerPublication } from "@/app/admin/(shell)/actualites/actions";
import { formatDate } from "@/utils";
import type { Article } from "@/types";

const LABELS_CATEGORIES: Record<string, string> = {
  actualite: "Actualité",
  communique: "Communiqué",
  evenement: "Événement",
  discours: "Discours",
};

export default function ActualitesTable({ articles }: { articles: Article[] }) {
  const [liste, setListe] = useState(articles);
  const [, startTransition] = useTransition();

  const basculer = (id: string, publie: boolean) => {
    setListe((prev) => prev.map((a) => (a.id === id ? { ...a, publie } : a)));
    startTransition(() => {
      basculerPublication(id, publie);
    });
  };

  const supprimer = (id: string) => {
    if (!confirm("Supprimer définitivement cet article ?")) return;
    setListe((prev) => prev.filter((a) => a.id !== id));
    startTransition(() => {
      supprimerArticle(id);
    });
  };

  return (
    <div className="carte overflow-hidden overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gris-doux text-gris-moyen text-xs uppercase tracking-wide">
          <tr>
            <th className="text-left px-5 py-3 font-semibold">Titre</th>
            <th className="text-left px-5 py-3 font-semibold">Catégorie</th>
            <th className="text-left px-5 py-3 font-semibold">Statut</th>
            <th className="text-left px-5 py-3 font-semibold">Date</th>
            <th className="text-right px-5 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {liste.map((article) => (
            <tr key={article.id} className="border-t border-gris-bordure">
              <td className="px-5 py-3 font-medium text-noir-parti max-w-xs truncate">
                {article.titre}
              </td>
              <td className="px-5 py-3 text-gris-moyen whitespace-nowrap">
                {LABELS_CATEGORIES[article.categorie] || article.categorie}
              </td>
              <td className="px-5 py-3">
                <button
                  onClick={() => basculer(article.id, !article.publie)}
                  className={
                    "inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 transition-colors " +
                    (article.publie
                      ? "bg-vert-clair text-vert-secondaire"
                      : "bg-gris-bordure text-gris-moyen")
                  }
                >
                  {article.publie ? <Eye size={12} /> : <EyeOff size={12} />}
                  {article.publie ? "Publié" : "Brouillon"}
                </button>
              </td>
              <td className="px-5 py-3 text-gris-moyen whitespace-nowrap">
                {formatDate(article.created_at)}
              </td>
              <td className="px-5 py-3">
                <div className="flex items-center justify-end gap-1">
                  <Link
                    href={`/admin/actualites/${article.id}`}
                    className="p-2 rounded-lg text-gris-moyen hover:bg-vert-clair hover:text-vert-secondaire transition-colors"
                  >
                    <Pencil size={16} />
                  </Link>
                  <button
                    onClick={() => supprimer(article.id)}
                    className="p-2 rounded-lg text-gris-moyen hover:bg-rouge-clair hover:text-rouge transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
