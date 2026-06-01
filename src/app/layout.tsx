import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PARTI, CANDIDAT } from "@/lib/constants";

// --- POLICE PRINCIPALE ---
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// --- POLICE DES TITRES ---
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// --- MÉTADONNÉES PAR DÉFAUT ---
export const metadata: Metadata = {
  title: {
    default: `${PARTI.nom} — ${PARTI.devise}`,
    template: `%s | ${PARTI.nom}`,
  },
  description: `Site officiel du ${PARTI.nom}. ${CANDIDAT.messageInstitutionnel} ${CANDIDAT.fonction}.`,
  keywords: [
    "Parti Véridique",
    "Gorgui Ndiaye",
    "Rufisque",
    "Rufisque Ouest",
    "élections municipales",
    "politique Sénégal",
    "mairie Rufisque",
  ],
  authors: [{ name: PARTI.nom }],
  creator: PARTI.nom,
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: PARTI.siteUrl,
    siteName: PARTI.nom,
    title: `${PARTI.nom} — ${PARTI.devise}`,
    description: `Site officiel du ${PARTI.nom}. ${CANDIDAT.messageInstitutionnel}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PARTI.nom} — ${PARTI.devise}`,
    description: `Site officiel du ${PARTI.nom}. ${CANDIDAT.messageInstitutionnel}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-noir-parti antialiased">
        {children}
      </body>
    </html>
  );
}