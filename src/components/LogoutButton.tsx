"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { revalidateAllData } from "@/utils/revalidation";
import useUserStore from "@/utils/store/user-store";
import useNavbarStore from "@/utils/store/navbar-store";
import { createClient } from "@/utils/supabase/client";

const LogoutButton = () => {
  const supabase = createClient();
  const router = useRouter();
  const { user, setUser } = useUserStore((state) => state);
  const toggleMenu = useNavbarStore((state) => state.toggleMenu);

  const handleClick = () => {
    supabase.auth.signOut().then(() => {
      toggleMenu();
      revalidateAllData();
      router.replace("/");
      setUser(null);
    });
  };

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
