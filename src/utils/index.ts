// ============================================
// UTILITAIRES â€” PARTI VÃ‰RIDIQUE
// ============================================

/**
 * Formate une date en franÃ§ais
 * Ex: "15 janvier 2025"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Formate une date courte en franÃ§ais
 * Ex: "15 jan. 2025"
 */
export function formatDateCourte(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * GÃ©nÃ¨re un slug Ã  partir d'un texte
 * Ex: "Bonjour le Monde" â†’ "bonjour-le-monde"
 */
export function genererSlug(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Tronque un texte Ã  une longueur donnÃ©e
 * Ex: tronquer("Bonjour le monde", 10) â†’ "Bonjour le..."
 */
export function tronquer(texte: string, longueur: number = 150): string {
  if (texte.length <= longueur) return texte;
  return texte.slice(0, longueur).trim() + "...";
}

/**
 * Capitalise la premiÃ¨re lettre d'un texte
 */
export function capitaliser(texte: string): string {
  if (!texte) return "";
  return texte.charAt(0).toUpperCase() + texte.slice(1).toLowerCase();
}

/**
 * Formate un numÃ©ro de tÃ©lÃ©phone sÃ©nÃ©galais
 * Ex: "771234567" â†’ "77 123 45 67"
 */
export function formatTelephone(telephone: string): string {
  const nettoye = telephone.replace(/\D/g, "");
  if (nettoye.length === 9) {
    return nettoye.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  }
  return telephone;
}

/**
 * Valide un email
 */
export function estEmailValide(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Valide un tÃ©lÃ©phone sÃ©nÃ©galais
 */
export function estTelephoneValide(telephone: string): boolean {
  const nettoye = telephone.replace(/\D/g, "");
  return nettoye.length === 9 && /^(70|75|76|77|78)/.test(nettoye);
}

/**
 * Classe CSS conditionnelle (utilitaire simple)
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}