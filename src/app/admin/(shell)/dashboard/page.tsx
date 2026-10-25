import Link from "next/link";
import { Mail, Users, MessageSquare, Newspaper, ArrowRight } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import { formatDate } from "@/utils";

export const metadata = { title: "Tableau de bord" };
export const dynamic = "force-dynamic";

async function getStats() {
  const admin = createAdminClient();

  const [
    { count: totalMessages },
    { count: messagesNonLus },
    { count: totalSympathisants },
    { count: sympathisantsNouveaux },
    { count: totalContributions },
    { count: contributionsNouvelles },
    { count: totalArticles },
    { data: derniersMessages },
    { data: derniersSympathisants },
  ] = await Promise.all([
    admin.from("messages").select("*", { count: "exact", head: true }),
    admin.from("messages").select("*", { count: "exact", head: true }).eq("lu", false),
    admin.from("sympathisants").select("*", { count: "exact", head: true }),
    admin.from("sympathisants").select("*", { count: "exact", head: true }).eq("statut", "nouveau"),
    admin.from("contributions").select("*", { count: "exact", head: true }),
    admin.from("contributions").select("*", { count: "exact", head: true }).eq("statut", "nouveau"),
    admin.from("articles").select("*", { count: "exact", head: true }),
    admin.from("messages").select("*").order("created_at", { ascending: false }).limit(5),
    admin.from("sympathisants").select("*").order("created_at", { ascending: false }).limit(5),
  ]);

  return {
    totalMessages: totalMessages ?? 0,
    messagesNonLus: messagesNonLus ?? 0,
    totalSympathisants: totalSympathisants ?? 0,
    sympathisantsNouveaux: sympathisantsNouveaux ?? 0,
    totalContributions: totalContributions ?? 0,
    contributionsNouvelles: contributionsNouvelles ?? 0,
    totalArticles: totalArticles ?? 0,
    derniersMessages: derniersMessages ?? [],
    derniersSympathisants: derniersSympathisants ?? [],
  };
}

export default async function PageDashboard() {
  const stats = await getStats();

  const cartes = [
    {
      label: "Messages non lus",
      valeur: stats.messagesNonLus,
      sousTexte: `${stats.totalMessages} au total`,
      icone: Mail,
      href: "/admin/messages",
      couleur: "bg-vert-clair text-vert-secondaire",
    },
    {
      label: "Nouveaux sympathisants",
      valeur: stats.sympathisantsNouveaux,
      sousTexte: `${stats.totalSympathisants} au total`,
      icone: Users,
      href: "/admin/sympathisants",
      couleur: "bg-or-clair text-or-hover",
    },
    {
      label: "Contributions à traiter",
      valeur: stats.contributionsNouvelles,
      sousTexte: `${stats.totalContributions} au total`,
      icone: MessageSquare,
      href: "/admin/contributions",
      couleur: "bg-blue-100 text-blue-700",
    },
    {
      label: "Articles publiés",
      valeur: stats.totalArticles,
      sousTexte: "Actualités du site",
      icone: Newspaper,
      href: "/admin/actualites",
      couleur: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div>
      <h1 className="font-heading font-bold text-2xl text-noir-parti mb-1">Tableau de bord</h1>
      <p className="text-gris-moyen text-sm mb-6">Vue d'ensemble de l'activité du site.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cartes.map((carte) => (
          <Link key={carte.label} href={carte.href} className="carte p-5 block">
            <div className={"w-11 h-11 rounded-xl flex items-center justify-center mb-4 " + carte.couleur}>
              <carte.icone size={20} />
            </div>
            <p className="text-3xl font-heading font-bold text-noir-parti">{carte.valeur}</p>
            <p className="text-sm font-medium text-noir-parti mt-1">{carte.label}</p>
            <p className="text-xs text-gris-moyen mt-0.5">{carte.sousTexte}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="carte p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-bold text-noir-parti">Derniers messages</h2>
            <Link href="/admin/messages" className="text-vert-principal text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Tout voir <ArrowRight size={14} />
            </Link>
          </div>
          {stats.derniersMessages.length === 0 ? (
            <p className="text-gris-moyen text-sm">Aucun message pour le moment.</p>
          ) : (
            <ul className="space-y-3">
              {stats.derniersMessages.map((m) => (
                <li key={m.id} className="flex items-start justify-between gap-3 pb-3 border-b border-gris-bordure last:border-0 last:pb-0">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-noir-parti truncate">{m.nom}</p>
                    <p className="text-xs text-gris-moyen truncate">{m.message}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {!m.lu && <span className="badge-or text-2xs px-2 py-0.5">Non lu</span>}
                    <span className="text-xs text-gris-moyen">{formatDate(m.created_at)}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="carte p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-bold text-noir-parti">Derniers sympathisants</h2>
            <Link href="/admin/sympathisants" className="text-vert-principal text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Tout voir <ArrowRight size={14} />
            </Link>
          </div>
          {stats.derniersSympathisants.length === 0 ? (
            <p className="text-gris-moyen text-sm">Aucun sympathisant pour le moment.</p>
          ) : (
            <ul className="space-y-3">
              {stats.derniersSympathisants.map((s) => (
                <li key={s.id} className="flex items-start justify-between gap-3 pb-3 border-b border-gris-bordure last:border-0 last:pb-0">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-noir-parti truncate">{s.prenom} {s.nom}</p>
                    <p className="text-xs text-gris-moyen truncate">{s.quartier}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="badge-vert text-2xs px-2 py-0.5 capitalize">{s.statut}</span>
                    <span className="text-xs text-gris-moyen">{formatDate(s.created_at)}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
