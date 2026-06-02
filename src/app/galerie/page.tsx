import type { Metadata } from "next";
export const metadata: Metadata = { title: "Galerie" };
export default function GaleriePage() {
  return (
    <main className="pt-navbar">
      <div className="bg-gradient-vert py-16">
        <div className="container-parti">
          <h1 className="font-heading font-black text-white text-4xl">Galerie</h1>
          <p className="text-white/70 mt-2">Cette page sera disponible prochainement.</p>
        </div>
      </div>
    </main>
  );
}