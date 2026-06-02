import type { Metadata } from "next";
export const metadata: Metadata = { title: "Parole aux Citoyens" };
export default function ParoleAuxCitoyensPage() {
  return (
    <main className="pt-navbar">
      <div className="bg-gradient-vert py-16">
        <div className="container-parti">
          <h1 className="font-heading font-black text-white text-4xl">Parole aux Citoyens</h1>
          <p className="text-white/70 mt-2">Cette page sera disponible prochainement.</p>
        </div>
      </div>
    </main>
  );
}