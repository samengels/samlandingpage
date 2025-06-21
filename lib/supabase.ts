import { createClient } from "@supabase/supabase-js";

export const getSupabaseAdmin = () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Missing Supabase credentials");
  }
  return createClient(url, key, {
    auth: { persistSession: false },
  });
};

// Legacy default export kept for convenience but will throw until envs are set
export const supabaseAdmin = (() => {
  try {
    return getSupabaseAdmin();
  } catch {
    return null as unknown as ReturnType<typeof createClient>;
  }
})(); 