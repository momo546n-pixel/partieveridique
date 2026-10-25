import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase avec la clé service_role.
 * Contourne le RLS : réservé exclusivement aux pages et actions de /admin,
 * après vérification de la session via proxy.ts / src/lib/supabase/server.ts.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
