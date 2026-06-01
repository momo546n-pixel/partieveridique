export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">

      {/* TEST TYPOGRAPHIE */}
      <section className="mb-16">
        <p className="badge-vert mb-4">Typographie</p>
        <h1 className="font-heading text-5xl font-bold text-noir-parti mb-4">
          Parti Véridique
        </h1>
        <h2 className="font-heading text-3xl text-vert-principal mb-3">
          Vérité • Justice • Progrès
        </h2>
        <p className="text-gris-moyen text-lg max-w-xl">
          Ensemble pour un Rufisque moderne, prospère et solidaire.
          Gorgui Ndiaye, candidat à la mairie de Rufisque Ouest.
        </p>
      </section>

      {/* TEST COULEURS */}
      <section className="mb-16">
        <p className="badge-or mb-4">Palette de couleurs</p>
        <div className="flex flex-wrap gap-4">
          <div className="w-24 h-24 bg-vert-principal rounded-xl flex items-end p-2">
            <span className="text-white text-xs font-mono">#0B6B3A</span>
          </div>
          <div className="w-24 h-24 bg-vert-secondaire rounded-xl flex items-end p-2">
            <span className="text-white text-xs font-mono">#14532D</span>
          </div>
          <div className="w-24 h-24 bg-or rounded-xl flex items-end p-2">
            <span className="text-white text-xs font-mono">#D4A017</span>
          </div>
          <div className="w-24 h-24 bg-rouge rounded-xl flex items-end p-2">
            <span className="text-white text-xs font-mono">#C62828</span>
          </div>
          <div className="w-24 h-24 bg-noir-parti rounded-xl flex items-end p-2">
            <span className="text-white text-xs font-mono">#111827</span>
          </div>
          <div className="w-24 h-24 bg-gris-doux border border-gris-bordure rounded-xl flex items-end p-2">
            <span className="text-gris-moyen text-xs font-mono">#F9FAFB</span>
          </div>
        </div>
      </section>

      {/* TEST BOUTONS */}
      <section className="mb-16">
        <p className="badge-vert mb-4">Boutons</p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-principal">Rejoindre le mouvement</button>
          <button className="btn-secondaire">En savoir plus</button>
          <button className="btn-or">Faire un don</button>
        </div>
      </section>

      {/* TEST CARTES */}
      <section className="mb-16">
        <p className="badge-or mb-4">Cartes</p>
        <div className="grille-cartes max-w-3xl">
          {["Transparence", "Proximité", "Développement"].map((titre) => (
            <div key={titre} className="carte p-6">
              <div className="w-12 h-12 bg-vert-clair rounded-xl mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">{titre}</h3>
              <p className="text-gris-moyen text-sm">
                Description de cette valeur fondamentale du Parti Véridique.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEST DÉGRADÉ */}
      <section className="mb-16">
        <p className="badge-vert mb-4">Sections</p>
        <div className="bg-gradient-vert rounded-2xl p-8 text-white">
          <div className="ligne-decoRative mb-4" />
          <h2 className="font-heading text-3xl font-bold mb-3">
            Pour un Rufisque meilleur
          </h2>
          <p className="text-white/80">
            Notre vision pour la commune de Rufisque Ouest.
          </p>
        </div>
      </section>

      {/* TEST FORMULAIRE */}
      <section className="mb-16">
        <p className="badge-or mb-4">Formulaire</p>
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Votre nom complet"
            className="champ-input mb-3"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="champ-input mb-3"
          />
          <textarea
            placeholder="Votre message..."
            rows={4}
            className="champ-input resize-none"
          />
        </div>
      </section>

    </main>
  );
}