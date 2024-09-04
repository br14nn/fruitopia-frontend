"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { createClient } from "@/utils/supabase/client";
import { revalidateAllData } from "@/utils/revalidation";
import useUserStore from "@/utils/store/user-store";

const LogoutButton = () => {
  const router = useRouter();
  const supabase = createClient();
  const { user, setUser } = useUserStore((state) => state);

  const handleClick = async () => {
    await supabase.auth.signOut();
    revalidateAllData();
    router.replace("/");
    setUser(null);
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

  if (user) {
    return (
      <Button
        className="w-fit px-4 py-1"
        variant={"danger"}
        onClick={handleClick}
      >
        Logout
      </Button>
    );
  }
};

export default LogoutButton;
