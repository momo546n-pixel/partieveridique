// ============================================
// CONSTANTES â€” PARTI VÃ‰RIDIQUE
// ============================================

// --- IDENTITÃ‰ DU PARTI ---
export const PARTI = {
  nom: "Parti VÃ©ridique",
  devise: "VÃ©ritÃ© â€¢ Justice â€¢ ProgrÃ¨s",
  symbole: "Lion",
  siteUrl: "https://partieveridique.sn",
  email: "contact@partieveridique.sn",
  telephone: "+221 XX XXX XX XX",
  adresse: "Rufisque, Dakar, SÃ©nÃ©gal",
} as const;

// --- CANDIDAT ---
export const CANDIDAT = {
  nom: "Gorgui Ndiaye",
  nomComplet: "Gorgui Ndiaye",
  fonction: "Candidat Ã  la mairie de Rufisque Ouest",
  slogan: "Pour une gestion transparente et efficace",
  signature: "Rufisque, notre fiertÃ©, notre avenir",
  messageLeadership: "On ne naÃ®t pas leader, on le devient.",
  messageInstitutionnel:
    "Ensemble pour un Rufisque moderne, prospÃ¨re et solidaire.",
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
  { label: "Nos PrioritÃ©s", href: "/priorites" },
  { label: "ActualitÃ©s", href: "/actualites" },
  { label: "Galerie", href: "/galerie" },
  { label: "Parole aux Citoyens", href: "/parole-aux-citoyens" },
  { label: "Contact", href: "/contact" },
] as const;

// --- PRIORITÃ‰S DU PARTI ---
export const PRIORITES = [
  {
    id: "transparence",
    slug: "transparence",
    titre: "Transparence",
    description:
      "Une gestion publique ouverte, honnÃªte et redevable devant les citoyens.",
    icone: "Eye",
    couleur: "#0B6B3A",
    objectifs: [
      "Publier les budgets municipaux en ligne",
      "Organiser des assemblÃ©es citoyennes trimestrielles",
      "CrÃ©er un portail de suivi des projets publics",
    ],
    actions: [
      "Mise en place d'un tableau de bord public des dÃ©penses",
      "Rapports mensuels d'activitÃ© accessibles Ã  tous",
      "Ligne directe citoyens-Ã©lus",
    ],
  },
  {
    id: "proximite",
    slug: "proximite",
    titre: "ProximitÃ©",
    description:
      "Des Ã©lus accessibles et Ã  l'Ã©coute de chaque quartier de Rufisque Ouest.",
    icone: "Users",
    couleur: "#0B6B3A",
    objectifs: [
      "Permanences hebdomadaires dans chaque quartier",
      "Application mobile de signalement citoyen",
      "RÃ©ponse garantie sous 72h Ã  chaque sollicitation",
    ],
    actions: [
      "CrÃ©ation de 5 antennes de proximitÃ©",
      "Programme de visites de terrain mensuelles",
      "Plateforme numÃ©rique de dialogue citoyen",
    ],
  },
  {
    id: "developpement",
    slug: "developpement",
    titre: "DÃ©veloppement",
    description:
      "Des infrastructures modernes pour un Rufisque prospÃ¨re et attractif.",
    icone: "TrendingUp",
    couleur: "#0B6B3A",
    objectifs: [
      "RÃ©habilitation des routes et voiries",
      "Modernisation des marchÃ©s locaux",
      "DÃ©veloppement des Ã©quipements sportifs et culturels",
    ],
    actions: [
      "Plan quinquennal d'infrastructures",
      "Partenariats avec l'Ã‰tat et les bailleurs internationaux",
      "Zones d'activitÃ©s Ã©conomiques dÃ©diÃ©es",
    ],
  },
  {
    id: "emploi-jeunes",
    slug: "emploi-jeunes",
    titre: "Emploi des Jeunes",
    description:
      "CrÃ©er les conditions d'une insertion professionnelle durable pour la jeunesse.",
    icone: "Briefcase",
    couleur: "#0B6B3A",
    objectifs: [
      "500 emplois crÃ©Ã©s en 3 ans",
      "Centre de formation professionnelle",
      "Fonds d'appui Ã  l'entrepreneuriat jeune",
    ],
    actions: [
      "Programme de stage en entreprise",
      "Incubateur de startups locales",
      "Micro-crÃ©dits pour les jeunes entrepreneurs",
    ],
  },
  {
    id: "securite-solidarite",
    slug: "securite-solidarite",
    titre: "SÃ©curitÃ© & SolidaritÃ©",
    description:
      "Un Rufisque sÃ»r oÃ¹ chaque citoyen est protÃ©gÃ© et soutenu.",
    icone: "Shield",
    couleur: "#0B6B3A",
    objectifs: [
      "Renforcement de l'Ã©clairage public",
      "Programme d'aide aux familles vulnÃ©rables",
      "SystÃ¨me de surveillance des espaces publics",
    ],
    actions: [
      "ComitÃ©s de veille citoyenne dans chaque quartier",
      "Fonds municipal de solidaritÃ©",
      "Partenariat renforcÃ© avec les forces de sÃ©curitÃ©",
    ],
  },
] as const;

// --- RÃ‰SEAUX SOCIAUX ---
export const RESEAUX_SOCIAUX = {
  facebook: "https://facebook.com/partieveridique",
  twitter: "https://twitter.com/partieveridique",
  instagram: "https://instagram.com/partieveridique",
  youtube: "https://youtube.com/@partieveridique",
} as const;

// --- PAGINATION ---
export const ARTICLES_PAR_PAGE = 9;
export const GALERIE_PAR_PAGE = 12;