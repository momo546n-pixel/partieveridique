interface SectionTitleProps {
  badge?: string;
  titre: string;
  sousTitre?: string;
  centre?: boolean;
  couleurBadge?: "vert" | "or";
}

export default function SectionTitle({
  badge,
  titre,
  sousTitre,
  centre = false,
  couleurBadge = "vert",
}: SectionTitleProps) {
  return (
    <div className={centre ? "text-center" : ""}>
      {badge && (
        <span className={"inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 " + (couleurBadge === "or" ? "bg-or-clair text-or-hover" : "bg-vert-clair text-vert-secondaire")}>
          {badge}
        </span>
      )}
      <h2 className="font-heading font-bold text-noir-parti mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
        {titre}
      </h2>
      <div className={"w-14 h-1 bg-or rounded-full mb-4 " + (centre ? "mx-auto" : "")} />
      {sousTitre && (
        <p className="text-gris-moyen text-lg leading-relaxed max-w-2xl" style={centre ? { marginLeft: "auto", marginRight: "auto" } : {}}>
          {sousTitre}
        </p>
      )}
    </div>
  );
}
