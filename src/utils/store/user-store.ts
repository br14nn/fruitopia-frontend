import { create } from "zustand";
import { User } from "@supabase/auth-js/dist/main/lib/types";

interface UserState {
  user: User | null;
  setUser: (user: UserState["user"]) => void;
}

const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user: user })),
}));

export default useUserStore;
