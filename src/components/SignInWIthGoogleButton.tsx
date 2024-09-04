"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import GoogleLogoIcon from "@/components/svgs/GoogleLogoIcon";
import { createClient } from "@/utils/supabase/client";
import useUserStore from "@/utils/store/user-store";

const SignInWIthGoogleButton = () => {
  const supabase = createClient();
  const { user, setUser } = useUserStore((state) => state);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) console.error(error);
      else if (!user) setUser(null);
      else setUser(user);
    };

    getUser();
  }, []);

  if (!user) {
    return (
      <Button
        className="flex w-fit gap-2 px-4 py-1"
        variant={"default"}
        onClick={handleClick}
      >
        Sign In With Google
        <GoogleLogoIcon />
      </Button>
    );
  } else {
    return null;
  }
};

export default SignInWIthGoogleButton;
