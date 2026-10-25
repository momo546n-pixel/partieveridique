"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import type { StatutContribution } from "@/types";

export async function changerStatutContribution(id: string, statut: StatutContribution) {
  const admin = createAdminClient();
  await admin.from("contributions").update({ statut }).eq("id", id);
  revalidatePath("/admin/contributions");
  revalidatePath("/admin/dashboard");
}
