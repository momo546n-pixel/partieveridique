// ============================================
// CONSTANTES — PARTI VÉRIDIQUE
// ============================================

// --- IDENTITÉ DU PARTI ---
export const PARTI = {
  nom: "Parti Véridique",
  devise: "Vérité • Justice • Progrès",
  symbole: "Lion",
  siteUrl: "https://partieveridique.sn",
  email: "contact@partieveridique.sn",
  telephone: "+221 XX XXX XX XX",
  adresse: "Rufisque, Dakar, Sénégal",
} as const;

// --- CANDIDAT ---
export const CANDIDAT = {
  nom: "Gorgui Ndiaye",
  nomComplet: "Gorgui Ndiaye",
  fonction: "Candidat à la mairie de Rufisque Ouest",
  slogan: "Pour une gestion transparente et efficace",
  signature: "Rufisque, notre fierté, notre avenir",
  messageLeadership: "On ne naît pas leader, on le devient.",
  messageInstitutionnel:
    "Ensemble pour un Rufisque moderne, prospère et solidaire.",
} as const;

// --- COULEURS OFFICIELLES ---
export const COULEURS = {
  vertPrincipal: "#0B6B3A",
  vertSecondaire: "#14532D",
  or: "#D4A017",
  rouge: "#C62828",
  blanc: "#FFFFFF",
  noir: "#111827",
} as const;

// --- NAVIGATION PRINCIPALE ---
export const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Le Parti", href: "/le-parti" },
  { label: "Le Candidat", href: "/candidat" },
  { label: "Nos Priorités", href: "/priorites" },
  { label: "Actualités", href: "/actualites" },
  { label: "Galerie", href: "/galerie" },
  { label: "Parole aux Citoyens", href: "/parole-aux-citoyens" },
  { label: "Contact", href: "/contact" },
] as const;

// --- PRIORITÉS DU PARTI ---
export const PRIORITES = [
  {
    id: "transparence",
    slug: "transparence",
    titre: "Transparence",
    description:
      "Une gestion publique ouverte, honnête et redevable devant les citoyens.",
    icone: "Eye",
    couleur: "#0B6B3A",
    objectifs: [
      "Publier les budgets municipaux en ligne",
      "Organiser des assemblées citoyennes trimestrielles",
      "Créer un portail de suivi des projets publics",
    ],
    actions: [
      "Mise en place d'un tableau de bord public des dépenses",
      "Rapports mensuels d'activité accessibles à tous",
      "Ligne directe citoyens-élus",
    ],
  },
  {
    id: "proximite",
    slug: "proximite",
    titre: "Proximité",
    description:
      "Des élus accessibles et à l'écoute de chaque quartier de Rufisque Ouest.",
    icone: "Users",
    couleur: "#0B6B3A",
    objectifs: [
      "Permanences hebdomadaires dans chaque quartier",
      "Application mobile de signalement citoyen",
      "Réponse garantie sous 72h à chaque sollicitation",
    ],
    actions: [
      "Création de 5 antennes de proximité",
      "Programme de visites de terrain mensuelles",
      "Plateforme numérique de dialogue citoyen",
    ],
  },
  {
    id: "developpement",
    slug: "developpement",
    titre: "Développement",
    description:
      "Des infrastructures modernes pour un Rufisque prospère et attractif.",
    icone: "TrendingUp",
    couleur: "#0B6B3A",
    objectifs: [
      "Réhabilitation des routes et voiries",
      "Modernisation des marchés locaux",
      "Développement des équipements sportifs et culturels",
    ],
    actions: [
      "Plan quinquennal d'infrastructures",
      "Partenariats avec l'État et les bailleurs internationaux",
      "Zones d'activités économiques dédiées",
    ],
  },
  {
    id: "emploi-jeunes",
    slug: "emploi-jeunes",
    titre: "Emploi des Jeunes",
    description:
      "Créer les conditions d'une insertion professionnelle durable pour la jeunesse.",
    icone: "Briefcase",
    couleur: "#0B6B3A",
    objectifs: [
      "500 emplois créés en 3 ans",
      "Centre de formation professionnelle",
      "Fonds d'appui à l'entrepreneuriat jeune",
    ],
    actions: [
      "Programme de stage en entreprise",
      "Incubateur de startups locales",
      "Micro-crédits pour les jeunes entrepreneurs",
    ],
  },
  {
    id: "securite-solidarite",
    slug: "securite-solidarite",
    titre: "Sécurité & Solidarité",
    description:
      "Un Rufisque sûr où chaque citoyen est protégé et soutenu.",
    icone: "Shield",
    couleur: "#0B6B3A",
    objectifs: [
      "Renforcement de l'éclairage public",
      "Programme d'aide aux familles vulnérables",
      "Système de surveillance des espaces publics",
    ],
    actions: [
      "Comités de veille citoyenne dans chaque quartier",
      "Fonds municipal de solidarité",
      "Partenariat renforcé avec les forces de sécurité",
    ],
  },
] as const;

// --- RÉSEAUX SOCIAUX ---
export const RESEAUX_SOCIAUX = {
  facebook: "https://facebook.com/partieveridique",
  twitter: "https://twitter.com/partieveridique",
  instagram: "https://instagram.com/partieveridique",
  youtube: "https://youtube.com/@partieveridique",
} as const;

// --- PAGINATION ---
export const ARTICLES_PAR_PAGE = 9;
export const GALERIE_PAR_PAGE = 12;