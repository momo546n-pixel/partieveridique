import Image from "next/image";

interface LionLogoProps {
  className?: string;
  taille?: number;
}

export default function LionLogo({ className = "", taille = 40 }: LionLogoProps) {
  return (
    <Image
      src="/images/lion.png"
      alt="Lion Parti Veridique"
      width={taille}
      height={taille}
      className={className}
      style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
    />
  );
}