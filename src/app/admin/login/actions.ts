"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export interface EtatConnexion {
  error?: string;
}

export async function connexion(
  _etat: EtatConnexion | undefined,
  formData: FormData
): Promise<EtatConnexion> {
  const email = (formData.get("email") as string)?.trim();
  const motDePasse = formData.get("motDePasse") as string;

  if (!email || !motDePasse) {
    return { error: "Veuillez renseigner votre email et votre mot de passe." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: motDePasse,
  });

  if (error) {
    return { error: "Identifiants incorrects. Veuillez réessayer." };
  }

  redirect("/admin/dashboard");
}

export async function deconnexion() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
