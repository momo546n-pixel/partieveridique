import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parti Véridique — Vérité • Justice • Progrès",
  description:
    "Site officiel du Parti Véridique. Gorgui Ndiaye, candidat à la mairie de Rufisque Ouest. Ensemble pour un Rufisque moderne, prospère et solidaire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
