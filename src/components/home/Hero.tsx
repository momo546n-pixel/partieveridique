"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Eye, TrendingUp, Briefcase, Users } from "lucide-react";
import { CANDIDAT, PARTI, PRIORITES } from "@/lib/constants";

const icones: Record<string, React.ReactNode> = {
  Eye: <Eye size={14} />,
  Users: <Users size={14} />,
  TrendingUp: <TrendingUp size={14} />,
  Briefcase: <Briefcase size={14} />,
  Shield: <Shield size={14} />,
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-vert-secondaire via-vert-principal to-noir-parti" />

      <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: "80px" }}>
        <div className="container-parti w-full py-20">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
              <div className="w-2 h-2 rounded-full bg-or" />
              <span className="text-white text-sm font-medium">
                Candidat officiel — Mairie de Rufisque Ouest
              </span>
            </div>

            <h1
              className="font-heading font-black text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.1 }}
            >
              {CANDIDAT.nom}
            </h1>

            <div className="w-20 h-1.5 bg-or rounded-full mb-6" />

            <p className="font-heading font-semibold text-xl md:text-2xl mb-4"
              style={{ color: "#D4A017" }}>
              {CANDIDAT.slogan}
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(255,255,255,0.75)" }}>
              {CANDIDAT.messageInstitutionnel}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/rejoindre"
                className="inline-flex items-center gap-2 px-7 py-4 font-bold rounded-lg text-base"
                style={{ backgroundColor: "#D4A017", color: "white" }}
              >
                Rejoindre le mouvement
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/candidat"
                className="inline-flex items-center gap-2 px-7 py-4 font-semibold rounded-lg text-base"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Decouvrir le candidat
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <span style={{ color: "#D4A017", fontWeight: 900, fontSize: 14 }}>PV</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{PARTI.nom}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{PARTI.devise}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="relative z-10 border-t" style={{ backgroundColor: "rgba(0,0,0,0.2)", borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="container-parti py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <p className="text-xs uppercase tracking-widest font-medium hidden md:block"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              Nos engagements
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {PRIORITES.map((priorite) => (
                <Link
                  key={priorite.id}
                  href={"/priorites/" + priorite.slug}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}
                >
                  {icones[priorite.icone]}
                  {priorite.titre}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-1 text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              <ChevronDown size={16} />
              <span>Decouvrir</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}