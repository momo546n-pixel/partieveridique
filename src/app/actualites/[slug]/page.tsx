import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { formatDate } from "@/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabase
    .from("articles")
    .select("titre, resume")
    .eq("slug", slug)
    .eq("publie", true)
    .single();

  if (!data) return { title: "Article introuvable" };
  return {
    title: data.titre,
    description: data.resume || "",
  };
}

async function getArticle(slug: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("publie", true)
    .single();

  if (error || !data) return null;
  return data;
}

async function getAutresArticles(slugActuel: string) {
  const { data } = await supabase
    .from("articles")
    .select("id, titre, slug, categorie, created_at")
    .eq("publie", true)
    .neq("slug", slugActuel)
    .order("created_at", { ascending: false })
    .limit(3);
  return data || [];
}

const LABELS_CATEGORIES: Record<string, string> = {
  actualite: "Actualite",
  communique: "Communique",
  evenement: "Evenement",
  discours: "Discours",
};

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  const autresArticles = await getAutresArticles(slug);

  return (
    <main className="pt-navbar">

      <section className="bg-gradient-vert py-16">
        <div className="container-parti">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour aux actualites
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-or">
                {LABELS_CATEGORIES[article.categorie] || article.categorie}
              </span>
              <div className="flex items-center gap-1 text-white/60 text-sm">
                <Calendar size={14} />
                <span>{formatDate(article.created_at)}</span>
              </div>
            </div>
            <h1
              className="font-heading font-black text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              {article.titre}
            </h1>
            {article.resume && (
              <p className="text-white/75 text-xl leading-relaxed">
                {article.resume}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-parti">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none text-gris-moyen leading-relaxed"
                style={{ lineHeight: 1.8 }}
              >
                {article.contenu.split("\n").map((paragraphe: string, i: number) => (
                  paragraphe.trim() && (
                    <p key={i} className="mb-4 text-gris-moyen">
                      {paragraphe}
                    </p>
                  )
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gris-bordure">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-vert-principal rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PV</span>
                  </div>
                  <div>
                    <p className="font-semibold text-noir-parti text-sm">Parti Veridique</p>
                    <p className="text-gris-moyen text-xs">
                      Publie le {formatDate(article.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">

                <div className="bg-gradient-vert rounded-2xl p-6 text-white mb-6">
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Rejoindre le mouvement
                  </h3>
                  <p className="text-white/75 text-sm mb-4">
                    Soutenez Gorgui Ndiaye et le Parti Veridique.
                  </p>
                  <Link
                    href="/rejoindre"
                    className="btn-or text-sm w-full justify-center"
                  >
                    S'engager
                  </Link>
                </div>

                {autresArticles.length > 0 && (
                  <div>
                    <h3 className="font-heading font-bold text-noir-parti mb-4 flex items-center gap-2">
                      <Tag size={16} className="text-vert-principal" />
                      Autres articles
                    </h3>
                    <div className="space-y-3">
                      {autresArticles.map((a) => (
                        <Link
                          key={a.id}
                          href={"/actualites/" + a.slug}
                          className="block bg-gris-doux rounded-xl p-4 hover:bg-vert-clair transition-colors duration-200 group"
                        >
                          <p className="text-sm font-medium text-noir-parti group-hover:text-vert-principal line-clamp-2 leading-snug">
                            {a.titre}
                          </p>
                          <p className="text-xs text-gris-moyen mt-1">
                            {formatDate(a.created_at)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}