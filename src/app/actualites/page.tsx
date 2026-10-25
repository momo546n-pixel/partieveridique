import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Pagination from "@/components/shared/Pagination";
import { supabase } from "@/lib/supabase";
import { formatDate } from "@/utils";
import { ARTICLES_PAR_PAGE } from "@/lib/constants";
import type { CategorieArticle } from "@/types";

export const metadata: Metadata = {
  title: "Actualites",
  description: "Toutes les actualites du Parti Veridique et de Gorgui Ndiaye pour Rufisque Ouest.",
};

export const revalidate = 60;

interface Props {
  searchParams: Promise<{ categorie?: string; page?: string }>;
}

const LABELS_CATEGORIES: Record<string, string> = {
  actualite: "Actualite",
  communique: "Communique",
  evenement: "Evenement",
  discours: "Discours",
};

const COULEURS_CATEGORIES: Record<string, string> = {
  actualite: "badge-vert",
  communique: "badge-or",
  evenement: "bg-blue-100 text-blue-700 badge",
  discours: "bg-purple-100 text-purple-700 badge",
};

const CATEGORIES: { valeur: CategorieArticle | ""; label: string }[] = [
  { valeur: "", label: "Toutes" },
  { valeur: "actualite", label: "Actualite" },
  { valeur: "communique", label: "Communique" },
  { valeur: "evenement", label: "Evenement" },
  { valeur: "discours", label: "Discours" },
];

function construireLien(categorie: string | undefined, page: number) {
  const params = new URLSearchParams();
  if (categorie) params.set("categorie", categorie);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return "/actualites" + (qs ? `?${qs}` : "");
}

async function getArticles(categorie: string | undefined, page: number) {
  const debut = (page - 1) * ARTICLES_PAR_PAGE;
  const fin = debut + ARTICLES_PAR_PAGE - 1;

  let requete = supabase
    .from("articles")
    .select("*", { count: "exact" })
    .eq("publie", true)
    .order("created_at", { ascending: false });

  if (categorie) {
    requete = requete.eq("categorie", categorie);
  }

  const { data, count, error } = await requete.range(debut, fin);

  if (error) {
    console.error("Erreur chargement articles:", error);
    return { articles: [], total: 0 };
  }

  return { articles: data || [], total: count || 0 };
}

export default async function ActualitesPage({ searchParams }: Props) {
  const { categorie, page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);

  const { articles, total } = await getArticles(categorie, page);
  const totalPages = Math.max(1, Math.ceil(total / ARTICLES_PAR_PAGE));

  const afficherVedette = page === 1 && !categorie && articles.length > 0;
  const articleVedette = afficherVedette ? articles[0] : null;
  const articlesGrille = afficherVedette ? articles.slice(1) : articles;

  return (
    <main className="pt-navbar">

      <section className="bg-gradient-vert py-16">
        <div className="container-parti">
          <div className="max-w-xl">
            <span className="badge-or mb-4 inline-block">Informations</span>
            <h1
              className="font-heading font-black text-white mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Actualites
            </h1>
            <div className="w-16 h-1.5 bg-or rounded-full mb-4" />
            <p className="text-white/75 text-lg">
              Suivez toute l'actualite du Parti Veridique et de la campagne
              de Gorgui Ndiaye pour Rufisque Ouest.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gris-doux">
        <div className="container-parti">

          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => {
              const actif = cat.valeur === (categorie || "");
              return (
                <Link
                  key={cat.valeur || "toutes"}
                  href={construireLien(cat.valeur || undefined, 1)}
                  className={
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 " +
                    (actif
                      ? "bg-vert-principal text-white"
                      : "bg-white text-noir-parti border border-gris-bordure hover:border-vert-principal")
                  }
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gris-bordure rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag size={28} className="text-gris-moyen" />
              </div>
              <h3 className="font-heading font-bold text-xl text-noir-parti mb-2">
                Aucun article disponible
              </h3>
              <p className="text-gris-moyen">
                {categorie
                  ? "Aucun article ne correspond a cette categorie pour le moment."
                  : "Les articles seront publies prochainement."}
              </p>
            </div>
          ) : (
            <>
              {/* Article en vedette */}
              {articleVedette && (
                <div className="carte p-0 overflow-hidden mb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-vert p-10 flex flex-col justify-center min-h-64">
                      <span className={COULEURS_CATEGORIES[articleVedette.categorie] || "badge-vert"}>
                        {LABELS_CATEGORIES[articleVedette.categorie] || articleVedette.categorie}
                      </span>
                      <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mt-3 mb-4 leading-snug">
                        {articleVedette.titre}
                      </h2>
                      <p className="text-white/70 text-sm mb-6 leading-relaxed">
                        {articleVedette.resume || articleVedette.contenu.slice(0, 150) + "..."}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/60 text-xs">
                          <Calendar size={14} />
                          <span>{formatDate(articleVedette.created_at)}</span>
                        </div>
                        <Link
                          href={"/actualites/" + articleVedette.slug}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-or text-white text-sm font-semibold rounded-lg hover:bg-or-hover transition-all duration-300"
                        >
                          Lire
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                    <div className="bg-vert-clair flex items-center justify-center p-10">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-vert-principal rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-heading font-black text-3xl">PV</span>
                        </div>
                        <p className="text-vert-secondaire font-semibold">Parti Veridique</p>
                        <p className="text-gris-moyen text-sm">Article a la une</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Grille des articles */}
              {articlesGrille.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articlesGrille.map((article) => (
                    <div key={article.id} className="carte p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className={COULEURS_CATEGORIES[article.categorie] || "badge-vert"}>
                          {LABELS_CATEGORIES[article.categorie] || article.categorie}
                        </span>
                        <div className="flex items-center gap-1 text-gris-moyen text-xs">
                          <Calendar size={12} />
                          <span>{formatDate(article.created_at)}</span>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-noir-parti mb-3 leading-snug flex-1">
                        {article.titre}
                      </h3>
                      <p className="text-gris-moyen text-sm leading-relaxed mb-4">
                        {article.resume || article.contenu.slice(0, 120) + "..."}
                      </p>
                      <Link
                        href={"/actualites/" + article.slug}
                        className="inline-flex items-center gap-1 text-vert-principal text-sm font-semibold hover:gap-2 transition-all duration-200 mt-auto"
                      >
                        Lire la suite
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              <Pagination
                pageActuelle={page}
                totalPages={totalPages}
                construireLien={(p) => construireLien(categorie, p)}
              />
            </>
          )}
        </div>
      </section>

    </main>
  );
}
