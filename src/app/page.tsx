export default function Home() {
  return (
    <main>
      {/* Zone haute avec fond vert pour tester la navbar transparente */}
      <div className="bg-gradient-vert min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="font-heading text-5xl font-bold mb-4">
            Parti Véridique
          </h1>
          <p className="text-white/80 text-xl mb-2">
            Vérité • Justice • Progrès
          </p>
          <p className="text-white/60 text-sm">
            ↓ Scrolle pour voir la navbar changer
          </p>
        </div>
      </div>

      {/* Zone blanche pour tester le changement de navbar */}
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-vert-principal mb-4">
            La Navbar est maintenant blanche
          </h2>
          <p className="text-gris-moyen">
            Scrolle vers le haut pour la voir redevenir transparente.
          </p>
        </div>
      </div>
    </main>
  );
}