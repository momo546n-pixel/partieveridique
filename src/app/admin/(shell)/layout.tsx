import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const admin = createAdminClient();
  const [{ count: messagesNonLus }, { count: sympathisantsNouveaux }] = await Promise.all([
    admin.from("messages").select("*", { count: "exact", head: true }).eq("lu", false),
    admin.from("sympathisants").select("*", { count: "exact", head: true }).eq("statut", "nouveau"),
  ]);

  return (
    <AdminShell
      email={user.email ?? ""}
      messagesNonLus={messagesNonLus ?? 0}
      sympathisantsNouveaux={sympathisantsNouveaux ?? 0}
    >
      {children}
    </AdminShell>
  );
}
