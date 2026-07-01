import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PARTI, CANDIDAT } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${PARTI.nom} â€” ${PARTI.devise}`,
    template: `%s | ${PARTI.nom}`,
  },
  description: `Site officiel du ${PARTI.nom}. ${CANDIDAT.messageInstitutionnel} ${CANDIDAT.fonction}.`,
  keywords: [
    "Parti VÃ©ridique",
    "Gorgui Ndiaye",
    "Rufisque",
    "Rufisque Ouest",
    "Ã©lections municipales",
    "politique SÃ©nÃ©gal",
  ],
  authors: [{ name: PARTI.nom }],
  creator: PARTI.nom,
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: PARTI.siteUrl,
    siteName: PARTI.nom,
    title: `${PARTI.nom} â€” ${PARTI.devise}`,
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}