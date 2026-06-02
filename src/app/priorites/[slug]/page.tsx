import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Eye, Users, TrendingUp, Briefcase, Shield, CheckCircle } from "lucide-react";
import { PRIORITES } from "@/lib/constants";

const ICONES_COMPOSANTS: Record<string, React.ElementType> = {
  Eye: Eye,
  Users: Users,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Shield: Shield,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const priorite = PRIORITES.find((p) => p.slug === slug);
  if (!priorite) return { title: "Page introuvable" };
  return {
    title: priorite.titre,
    description: priorite.description,
  };
}

export async function generateStaticParams() {
  return PRIORITES.map((p) => ({ slug: p.slug }));
}

export default async function PrioriteDetailPage({ params }: Props) {
  const { slug } = await params;
  const priorite = PRIORITES.find((p) => p.slug === slug);

  if (!priorite) notFound();

  const index = PRIORITES.findIndex((p) => p.slug === slug);
  const precedente = index > 0 ? PRIORITES[index - 1] : null;
  const suivante = index < PRIORITES.length - 1 ? PRIORITES[index + 1] : null;
  const Icone = ICONES_COMPOSANTS[priorite.icone] || Eye;

  return (
    <main className="pt-navbar">

      {/* HERO */}
      <section className="bg-gradient-vert py-20">
        <div className="container-parti">
          <Link href="/priorites"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} />
            Retour aux priorités
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
              <Icone size={32} className="text-white" />
            </div>
            <div>
              <span className="text-or text-sm font-semibold">
                Priorité {String(index + 1).padStart(2, "0")}
              </span>
              <h1 className="font-heading font-black text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                {priorite.titre}
              </h1>
            </div>
          </div>
          <div className="w-16 h-1.5 bg-or rounded-full mt-4 mb-4" />
          <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
            {priorite.description}
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="section-padding bg-white">
        <div className="container-parti">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* OBJECTIFS */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-noir-parti mb-2">
                Nos objectifs
              </h2>
              <div className="w-10 h-1 bg-or rounded-full mb-6" />
              <div className="space-y-4">
                {priorite.objectifs.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gris-doux rounded-xl p-4">
                    <CheckCircle size={20} className="text-vert-principal shrink-0 mt-0.5" />
                    <p className="text-noir-parti font-medium">{obj}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-noir-parti mb-2">
                Actions concrètes
              </h2>
              <div className="w-10 h-1 bg-or rounded-full mb-6" />
              <div className="space-y-4">
                {priorite.actions.map((action, i) => (
                  <div key={i} className="flex items-start gap-3 bg-or-clair rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-or flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-noir-parti font-medium">{action}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NAVIGATION ENTRE PRIORITÉS */}
      <section className="py-10 bg-gris-doux border-t border-gris-bordure">
        <div className="container-parti">
          <div className="flex items-center justify-between gap-4">
            {precedente ? (
              <Link href={"/priorites/" + precedente.slug}
                className="flex items-center gap-2 text-vert-principal font-semibold hover:gap-3 transition-all duration-200">
                <ArrowLeft size={18} />
                <span className="hidden sm:inline">{precedente.titre}</span>
              </Link>
            ) : <div />}

            <Link href="/priorites" className="btn-secondaire text-sm">
              Toutes les priorités
            </Link>

            {suivante ? (
              <Link href={"/priorites/" + suivante.slug}
                className="flex items-center gap-2 text-vert-principal font-semibold hover:gap-3 transition-all duration-200">
                <span className="hidden sm:inline">{suivante.titre}</span>
                <ArrowRight size={18} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-vert">
        <div className="container-parti text-center">
          <h2 className="font-heading font-bold text-white text-2xl mb-4">
            Soutenez ce programme
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rejoindre" className="btn-or">
              Rejoindre le mouvement
              <ArrowRight size={18} />
            </Link>
            <Link href="/parole-aux-citoyens"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/25 hover:bg-white/20 transition-all duration-300">
              Proposer une idée
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}