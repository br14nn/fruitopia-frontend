import { createClient } from "@/utils/supabase/client";

export default async function signInGoogle() {
  const supabase = createClient();

  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/api/auth/callback",
    },
  });
}
