import { Mail } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import MessagesTable from "@/components/admin/MessagesTable";
import type { Message } from "@/types";

export const metadata = { title: "Messages" };
export const dynamic = "force-dynamic";

async function getMessages(): Promise<Message[]> {
  const admin = createAdminClient();
  const { data } = await admin
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });
  return data ?? [];
}

export default async function PageMessages() {
  const messages = await getMessages();
  const nonLus = messages.filter((m) => !m.lu).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-noir-parti mb-1">Messages</h1>
          <p className="text-gris-moyen text-sm">
            {messages.length} message{messages.length > 1 ? "s" : ""} · {nonLus} non lu{nonLus > 1 ? "s" : ""}
          </p>
        </div>
        <div className="w-11 h-11 rounded-xl bg-vert-clair text-vert-secondaire flex items-center justify-center">
          <Mail size={20} />
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="carte p-10 text-center">
          <p className="text-gris-moyen">Aucun message reçu pour le moment.</p>
        </div>
      ) : (
        <MessagesTable messages={messages} />
      )}
    </div>
  );
}
