"use client";

import { Menu } from "lucide-react";

interface Props {
  email: string;
  onOuvrirMenu: () => void;
}

export default function AdminTopbar({ email, onOuvrirMenu }: Props) {
  return (
    <header className="h-16 bg-white border-b border-gris-bordure flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      <button
        onClick={onOuvrirMenu}
        className="lg:hidden text-noir-parti p-1"
        aria-label="Ouvrir le menu"
      >
        <Menu size={22} />
      </button>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-vert-clair flex items-center justify-center text-vert-secondaire font-semibold text-sm">
          {email.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm text-noir-parti font-medium hidden sm:inline">{email}</span>
      </div>
    </header>
  );
}
