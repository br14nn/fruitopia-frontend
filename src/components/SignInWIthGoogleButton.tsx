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

      if (userData || !error) {
        setUser(userData);
        await createUser({
          id: userData?.id as string,
          email: userData?.email as string,
          name: userData?.user_metadata.name,
          picture: userData?.user_metadata.picture,
        });
      } else return;
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
