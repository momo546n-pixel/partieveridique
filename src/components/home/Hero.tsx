"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Eye, TrendingUp, Briefcase, Users } from "lucide-react";
import Image from "next/image";
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

      {/* Photo de fond plein ecran */}
      <div className="absolute inset-0">
        <Image
          src="/images/candidat.png"
          alt="Gorgui Ndiaye"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gauche pour lisibilite du texte uniquement */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(11,107,58,0.92) 0%, rgba(11,107,58,0.75) 30%, rgba(11,107,58,0.15) 55%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Overlay bas pour la bande priorites */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 flex-1 flex items-center" style={{ paddingTop: "80px" }}>
        <div className="container-parti w-full py-20">
          <div className="max-w-2xl">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-or animate-pulse" />
              <span className="text-white text-sm font-medium">
                Candidat officiel — Mairie de Rufisque Ouest
              </span>
            </div>

            {/* Nom */}
            <h1
              className="font-heading font-black text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 1.05 }}
            >
              {CANDIDAT.nom}
            </h1>

            {/* Ligne doree */}
            <div className="w-20 h-1.5 bg-or rounded-full mb-6" />

            {/* Slogan */}
            <p
              className="font-heading font-semibold text-xl md:text-2xl mb-4"
              style={{ color: "#D4A017" }}
            >
              {CANDIDAT.slogan}
            </p>

            {/* Message */}
            <p
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              {CANDIDAT.messageInstitutionnel}
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/rejoindre"
                className="inline-flex items-center gap-2 px-7 py-4 font-bold rounded-lg text-base active:scale-95"
                style={{
                  backgroundColor: "#D4A017",
                  color: "white",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 20px rgba(212,160,23,0.4)",
                }}
              >
                Rejoindre le mouvement
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/candidat"
                className="inline-flex items-center gap-2 px-7 py-4 font-semibold rounded-lg text-base active:scale-95"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.35)",
                  transition: "all 0.3s",
                }}
              >
                Decouvrir le candidat
              </Link>
            </div>

            {/* Parti */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <span style={{ color: "#D4A017", fontWeight: 900, fontSize: 13 }}>PV</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{PARTI.nom}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {PARTI.devise}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bande priorites */}
      <div
        className="relative z-20 border-t"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="container-parti py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <p
              className="text-xs uppercase tracking-widest font-medium hidden md:block"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Nos engagements
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {PRIORITES.map((priorite) => (
                <Link
                  key={priorite.id}
                  href={"/priorites/" + priorite.slug}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {icones[priorite.icone]}
                  {priorite.titre}
                </Link>
              ))}
            </div>
            <div
              className="hidden md:flex items-center gap-1 text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <ChevronDown size={16} />
              <span>Decouvrir</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}