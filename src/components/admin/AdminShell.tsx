"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

interface Props {
  email: string;
  messagesNonLus: number;
  sympathisantsNouveaux: number;
  children: React.ReactNode;
}

export default function AdminShell({
  email,
  messagesNonLus,
  sympathisantsNouveaux,
  children,
}: Props) {
  const [sidebarOuvert, setSidebarOuvert] = useState(false);

  return (
    <div className="min-h-screen bg-gris-doux flex">
      <AdminSidebar
        messagesNonLus={messagesNonLus}
        sympathisantsNouveaux={sympathisantsNouveaux}
        ouvert={sidebarOuvert}
        onFermer={() => setSidebarOuvert(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar email={email} onOuvrirMenu={() => setSidebarOuvert(true)} />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
