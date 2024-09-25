"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import GoogleLogoIcon from "@/components/svgs/GoogleLogoIcon";
import useUserStore from "@/utils/store/user-store";
import { createClient } from "@/utils/supabase/client";

const SignInWIthGoogleButton = () => {
  const supabase = createClient();
  const { user, setUser } = useUserStore((state) => state);

  const handleClick = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  useEffect(() => {
    const userGetter = async () => {
      const {
        data: { user: userData },
        error,
      } = await supabase.auth.getUser();

      if (!userData || error) return;
      else setUser(userData);
    };

    userGetter();
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
