"use client";

import Button from "@/components/ui/Button";
import { createClient } from "@/utils/supabase/client";

const SignInWIthGoogleButton = () => {
  const supabase = createClient();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <Button
      className="font-med w-fit justify-self-end px-4 py-0.5"
      variant={"secondary"}
      onClick={handleClick}
    >
      Sign In With Google
    </Button>
  );
};

export default SignInWIthGoogleButton;
