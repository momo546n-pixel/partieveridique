// ============================================
// TYPES GLOBAUX â€” PARTI VÃ‰RIDIQUE
// ============================================

// --- ARTICLE ---
export interface Article {
  id: string;
  titre: string;
  slug: string;
  contenu: string;
  resume: string;
  image_url: string | null;
  categorie: CategorieArticle;
  publie: boolean;
  created_at: string;
  updated_at: string;
}

export type CategorieArticle =
  | "actualite"
  | "communique"
  | "evenement"
  | "discours";

// --- GALERIE ---
export interface MediaGalerie {
  id: string;
  titre: string;
  url: string;
  type: "photo" | "video";
  categorie: string;
  description: string | null;
  ordre: number;
  created_at: string;
}

// --- MESSAGE CONTACT ---
export interface Message {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  message: string;
  lu: boolean;
  created_at: string;
}

// --- SYMPATHISANT ---
export interface Sympathisant {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  quartier: string;
  profession: string;
  type_participation: TypeParticipation;
  statut: StatutSympathisant;
  created_at: string;
}

export type TypeParticipation =
  | "benevole"
  | "militant"
  | "donateur"
  | "observateur";

export type StatutSympathisant =
  | "nouveau"
  | "contacte"
  | "confirme"
  | "inactif";

// --- CONTRIBUTION CITOYENNE ---
export interface Contribution {
  id: string;
  type: TypeContribution;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  quartier: string;
  statut: StatutContribution;
  created_at: string;
}

export type TypeContribution = "idee" | "probleme" | "suggestion";

export type StatutContribution = "nouveau" | "en_cours" | "traite" | "rejete";

// --- PRIORITÃ‰ ---
export interface Priorite {
  id: string;
  slug: string;
  titre: string;
  description: string;
  icone: string;
  couleur: string;
  objectifs: string[];
  actions: string[];
}

// --- NAVIGATION ---
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// --- FORMULAIRES ---
export interface FormulaireContact {
  nom: string;
  telephone: string;
  email: string;
  message: string;
}

export interface FormulaireAdhesion {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  quartier: string;
  profession: string;
  type_participation: TypeParticipation;
}

export interface FormulaireContribution {
  type: TypeContribution;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  quartier: string;
}

// --- RÃ‰PONSE API ---
export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

// --- PAGINATION ---
export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// --- MÃ‰TADONNÃ‰ES SEO ---
export interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}