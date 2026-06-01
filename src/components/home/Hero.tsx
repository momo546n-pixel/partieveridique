"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Eye, TrendingUp, Briefcase, Users } from "lucide-react";
import LionLogo from "@/components/shared/LionLogo";
import { CANDIDAT, PARTI, PRIORITES } from "@/lib/constants";

const ICONES_VALEURS: Record<string, React.ReactNode> = {
  Eye: <Eye size={14} />,
  Users: <Users size={14} />,
  TrendingUp: <TrendingUp size={14} />,
  Briefcase: <Briefcase size={14} />,
  Shield: <Shield size={14} />,
};

const variantes = {
  cache: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
} as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-vert-secondaire via-vert-principal to-noir-parti" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #D4A017 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <LionLogo taille={300} couleur="#FFFFFF" />
        </motion.div>
      </div>

      <div className="relative z-10 flex-1 flex items-center pt-navbar">
        <div className="container-parti w-full py-16 md:py-20">
          <div className="max-w-3xl">

            <motion.div
              custom={0}
              initial="cache"
              animate="visible"
              variants={variantes}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-or animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Candidat officiel -- Mairie de Rufisque Ouest
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="cache"
              animate="visible"
              variants={variantes}
              className="font-heading font-black text-white mb-4 leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              {CANDIDAT.nom}
            </motion.h1>

            <motion.div
              custom={2}
              initial="cache"
              animate="visible"
              variants={variantes}
              className="w-20 h-1.5 bg-or rounded-full mb-6"
            />

            <motion.p
              custom={3}
              initial="cache"
              animate="visible"
              variants={variantes}
              className="text-or font-heading font-semibold text-xl md:text-2xl mb-4"
            >
              {CANDIDAT.slogan}
            </motion.p>

            <motion.p
              custom={4}
              initial="cache"
              animate="visible"
              variants={variantes}
              className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              {CANDIDAT.messageInstitutionnel}
            </motion.p>

            <motion.div
              custom={5}
              initial="cache"
              animate="visible"
              variants={variantes}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/rejoindre"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-or text-white font-bold rounded-lg hover:bg-or-hover transition-all duration-300 shadow-or-md hover:shadow-or-md hover:-translate-y-0.5 active:scale-95 text-base"
              >
                Rejoindre le mouvement
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/candidat"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/25 hover:bg-white/20 transition-all duration-300 active:scale-95 text-base"
              >
                Decouvrir le candidat
              </Link>
            </motion.div>

            <motion.div
              custom={6}
              initial="cache"
              animate="visible"
              variants={variantes}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <LionLogo taille={22} couleur="#FFFFFF" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{PARTI.nom}</p>
                <p className="text-white/60 text-xs">{PARTI.devise}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
      >
        <div className="container-parti py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <p className="text-white/50 text-xs uppercase tracking-widest font-medium hidden md:block">
              Nos engagements
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {PRIORITES.map((priorite, index) => (
                <motion.div
                  key={priorite.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={"/priorites/" + priorite.slug}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-medium hover:bg-white/20 hover:text-white transition-all duration-200"
                  >
                    {ICONES_VALEURS[priorite.icone]}
                    {priorite.titre}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:flex items-center gap-1 text-white/40 text-xs"
            >
              <ChevronDown size={16} />
              <span>Decouvrir</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
