"use client";

import { useActionState, useState } from "react";
import { AlertCircle } from "lucide-react";
import type { Article, CategorieArticle } from "@/types";
import type { EtatArticle } from "@/app/admin/(shell)/actualites/actions";

interface Props {
  action: (etat: EtatArticle | undefined, formData: FormData) => Promise<EtatArticle>;
  article?: Article;
}

const CATEGORIES: { valeur: CategorieArticle; label: string }[] = [
  { valeur: "actualite", label: "Actualité" },
  { valeur: "communique", label: "Communiqué" },
  { valeur: "evenement", label: "Événement" },
  { valeur: "discours", label: "Discours" },
];

export default function ArticleForm({ action, article }: Props) {
  const [etat, formAction, enCours] = useActionState(action, undefined);
  const [titre, setTitre] = useState(article?.titre ?? "");

  return (
    <form action={formAction} className="space-y-5 max-w-3xl">
      <div>
        <label className="block text-sm font-medium text-noir-parti mb-1.5">Titre *</label>
        <input
          name="titre"
          required
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="champ-input"
          placeholder="Titre de l'article"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-noir-parti mb-1.5">Slug (URL)</label>
        <input
          name="slug"
          defaultValue={article?.slug ?? ""}
          className="champ-input"
          placeholder="laisser vide pour générer automatiquement"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1.5">Catégorie *</label>
          <select
            name="categorie"
            defaultValue={article?.categorie ?? "actualite"}
            className="champ-input"
            required
          >
            {CATEGORIES.map((c) => (
              <option key={c.valeur} value={c.valeur}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-noir-parti mb-1.5">Image (URL)</label>
          <input
            name="image_url"
            defaultValue={article?.image_url ?? ""}
            className="champ-input"
            placeholder="/images/..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-noir-parti mb-1.5">Résumé</label>
        <textarea
          name="resume"
          defaultValue={article?.resume ?? ""}
          rows={2}
          className="champ-input"
          placeholder="Court résumé affiché dans les listes"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-noir-parti mb-1.5">Contenu *</label>
        <textarea
          name="contenu"
          defaultValue={article?.contenu ?? ""}
          rows={12}
          required
          className="champ-input"
          placeholder="Contenu complet de l'article"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-noir-parti">
        <input
          type="checkbox"
          name="publie"
          defaultChecked={article?.publie ?? false}
          className="w-4 h-4 accent-vert-principal"
        />
        Publier immédiatement
      </label>

      {etat?.error && (
        <p className="erreur-champ bg-rouge-clair px-3 py-2 rounded-lg">
          <AlertCircle size={16} className="shrink-0" />
          {etat.error}
        </p>
      )}

      <div className="flex items-center gap-3">
        <button type="submit" disabled={enCours} className="btn-principal disabled:opacity-60">
          {enCours ? "Enregistrement..." : article ? "Mettre à jour" : "Publier l'article"}
        </button>
      </div>
    </form>
  );
}
