"use client";

import { useState, useEffect } from "react";

/**
 * Détecte si un media query CSS est actif
 * Ex: useMediaQuery("(max-width: 768px)") → true sur mobile
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}