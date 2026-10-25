"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import type { StatutSympathisant } from "@/types";

export async function changerStatutSympathisant(id: string, statut: StatutSympathisant) {
  const admin = createAdminClient();
  await admin.from("sympathisants").update({ statut }).eq("id", id);
  revalidatePath("/admin/sympathisants");
  revalidatePath("/admin/dashboard");
}
