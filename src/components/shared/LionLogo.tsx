interface LionLogoProps {
  className?: string;
  couleur?: string;
  taille?: number;
}

export default function LionLogo({
  className = "",
  couleur = "#FFFFFF",
  taille = 40,
}: LionLogoProps) {
  return (
    <svg
      width={taille}
      height={taille}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Corps principal */}
      <ellipse cx="50" cy="62" rx="28" ry="22" fill={couleur} opacity="0.95" />

      {/* Tête */}
      <circle cx="50" cy="36" r="18" fill={couleur} />

      {/* Crinière */}
      <circle cx="50" cy="36" r="24" fill={couleur} opacity="0.3" />
      <circle cx="32" cy="30" r="10" fill={couleur} opacity="0.25" />
      <circle cx="68" cy="30" r="10" fill={couleur} opacity="0.25" />
      <circle cx="40" cy="20" r="9" fill={couleur} opacity="0.25" />
      <circle cx="60" cy="20" r="9" fill={couleur} opacity="0.25" />
      <circle cx="50" cy="16" r="8" fill={couleur} opacity="0.25" />

      {/* Oreilles */}
      <ellipse cx="35" cy="22" rx="6" ry="7" fill={couleur} />
      <ellipse cx="65" cy="22" rx="6" ry="7" fill={couleur} />

      {/* Yeux */}
      <ellipse cx="43" cy="33" rx="3.5" ry="3.5" fill="#111827" />
      <ellipse cx="57" cy="33" rx="3.5" ry="3.5" fill="#111827" />
      <circle cx="44.5" cy="31.5" r="1" fill="white" />
      <circle cx="58.5" cy="31.5" r="1" fill="white" />

      {/* Nez */}
      <ellipse cx="50" cy="40" rx="4" ry="2.5" fill="#D4A017" />

      {/* Bouche */}
      <path
        d="M46 43 Q50 47 54 43"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Pattes avant */}
      <ellipse cx="36" cy="80" rx="9" ry="6" fill={couleur} opacity="0.9" />
      <ellipse cx="64" cy="80" rx="9" ry="6" fill={couleur} opacity="0.9" />

      {/* Queue */}
      <path
        d="M78 62 Q92 55 88 70 Q84 80 80 72"
        stroke={couleur}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      {/* Touffe queue */}
      <ellipse cx="88" cy="68" rx="6" ry="5" fill={couleur} opacity="0.5" />
    </svg>
  );
}