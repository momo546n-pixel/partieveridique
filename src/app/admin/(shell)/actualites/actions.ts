"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { genererSlug } from "@/utils";
import type { CategorieArticle } from "@/types";

export interface EtatArticle {
  error?: string;
}

function extraireDonnees(formData: FormData) {
  const titre = (formData.get("titre") as string)?.trim();
  const resume = (formData.get("resume") as string)?.trim();
  const contenu = (formData.get("contenu") as string)?.trim();
  const categorie = formData.get("categorie") as CategorieArticle;
  const image_url = (formData.get("image_url") as string)?.trim() || null;
  const publie = formData.get("publie") === "on";
  const slugSaisi = (formData.get("slug") as string)?.trim();
  const slug = genererSlug(slugSaisi || titre || "");

  return { titre, resume, contenu, categorie, image_url, publie, slug };
}

export async function creerArticle(
  _etat: EtatArticle | undefined,
  formData: FormData
): Promise<EtatArticle> {
  const donnees = extraireDonnees(formData);

  if (!donnees.titre || donnees.titre.length < 3) {
    return { error: "Le titre doit contenir au moins 3 caractères." };
  }
  if (!donnees.contenu || donnees.contenu.length < 20) {
    return { error: "Le contenu doit contenir au moins 20 caractères." };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("articles").insert([donnees]);

  if (error) {
    if (error.code === "23505") {
      return { error: "Ce slug est déjà utilisé par un autre article." };
    }
    return { error: "Une erreur est survenue lors de la création." };
  }

  revalidatePath("/admin/actualites");
  revalidatePath("/actualites");
  redirect("/admin/actualites");
}

export async function modifierArticle(
  id: string,
  _etat: EtatArticle | undefined,
  formData: FormData
): Promise<EtatArticle> {
  const donnees = extraireDonnees(formData);

  if (!donnees.titre || donnees.titre.length < 3) {
    return { error: "Le titre doit contenir au moins 3 caractères." };
  }
  if (!donnees.contenu || donnees.contenu.length < 20) {
    return { error: "Le contenu doit contenir au moins 20 caractères." };
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from("articles")
    .update({ ...donnees, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { error: "Ce slug est déjà utilisé par un autre article." };
    }
    return { error: "Une erreur est survenue lors de la mise à jour." };
  }

  revalidatePath("/admin/actualites");
  revalidatePath("/actualites");
  revalidatePath(`/actualites/${donnees.slug}`);
  redirect("/admin/actualites");
}

export async function supprimerArticle(id: string) {
  const admin = createAdminClient();
  await admin.from("articles").delete().eq("id", id);
  revalidatePath("/admin/actualites");
  revalidatePath("/actualites");
}

export async function basculerPublication(id: string, publie: boolean) {
  const admin = createAdminClient();
  await admin.from("articles").update({ publie }).eq("id", id);
  revalidatePath("/admin/actualites");
  revalidatePath("/actualites");
}
