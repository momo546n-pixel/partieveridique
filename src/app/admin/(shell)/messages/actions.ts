"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function basculerLu(id: string, lu: boolean) {
  const admin = createAdminClient();
  await admin.from("messages").update({ lu }).eq("id", id);
  revalidatePath("/admin/messages");
  revalidatePath("/admin/dashboard");
}

export async function supprimerMessage(id: string) {
  const admin = createAdminClient();
  await admin.from("messages").delete().eq("id", id);
  revalidatePath("/admin/messages");
  revalidatePath("/admin/dashboard");
}
