"use server";

import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// â”€â”€ ACTION CONTACT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export async function envoyerMessage(formData: FormData) {
  const nom = formData.get("nom") as string;
  const telephone = formData.get("telephone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!nom || !telephone || !message) {
    return { success: false, error: "Champs obligatoires manquants." };
  }

  if (nom.length < 2) {
    return { success: false, error: "Le nom doit contenir au moins 2 caractÃ¨res." };
  }

  if (message.length < 10) {
    return { success: false, error: "Le message doit contenir au moins 10 caractÃ¨res." };
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("messages")
    .insert([{ nom, telephone, email: email || null, message }]);

  if (error) {
    console.error("Erreur Supabase:", error);
    return { success: false, error: "Une erreur est survenue. RÃ©essayez." };
  }

  return { success: true };
}

// â”€â”€ ACTION ADHÃ‰SION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export async function envoyerAdhesion(formData: FormData) {
  const nom = formData.get("nom") as string;
  const prenom = formData.get("prenom") as string;
  const telephone = formData.get("telephone") as string;
  const email = formData.get("email") as string;
  const quartier = formData.get("quartier") as string;
  const profession = formData.get("profession") as string;
  const type_participation = formData.get("type_participation") as string;

  if (!nom || !prenom || !telephone || !quartier) {
    return { success: false, error: "Champs obligatoires manquants." };
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("sympathisants")
    .insert([{
      nom,
      prenom,
      telephone,
      email: email || null,
      quartier,
      profession: profession || null,
      type_participation: type_participation || "observateur",
      statut: "nouveau",
    }]);

  if (error) {
    console.error("Erreur Supabase:", error);
    return { success: false, error: "Une erreur est survenue. RÃ©essayez." };
  }

  return { success: true };
}

// â”€â”€ ACTION CONTRIBUTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export async function envoyerContribution(formData: FormData) {
  const type = formData.get("type") as string;
  const nom = formData.get("nom") as string;
  const telephone = formData.get("telephone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const quartier = formData.get("quartier") as string;

  if (!nom || !telephone || !message) {
    return { success: false, error: "Champs obligatoires manquants." };
  }

  if (message.length < 10) {
    return { success: false, error: "Votre message doit contenir au moins 10 caractÃ¨res." };
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("contributions")
    .insert([{
      type: type || "idee",
      nom,
      telephone,
      email: email || null,
      message,
      quartier: quartier || null,
      statut: "nouveau",
    }]);

  if (error) {
    console.error("Erreur Supabase:", error);
    return { success: false, error: "Une erreur est survenue. RÃ©essayez." };
  }

  return { success: true };
}