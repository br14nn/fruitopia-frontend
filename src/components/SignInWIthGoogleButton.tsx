"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import GoogleLogoIcon from "@/components/svgs/GoogleLogoIcon";
import useUserStore from "@/utils/store/user-store";
import { createClient } from "@/utils/supabase/client";
import { createUser } from "@/utils/CRUD/CREATE";

const SignInWIthGoogleButton = () => {
  const supabase = createClient();
  const { user, setUser } = useUserStore((state) => state);

  const handleClick = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user: userData }, error }) => {
      if (userData && !error && !user) {
        setUser(userData);
        createUser();
      }
    });
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
