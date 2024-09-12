import { create } from "zustand";

interface NavbarState {
  showMenu: boolean;
  toggleMenu: (value?: boolean) => void;
}

const useNavbarStore = create<NavbarState>()((set) => ({
  showMenu: false,
  toggleMenu: (value) =>
    set((state) => {
      if (!value) {
        return { showMenu: !state.showMenu };
      }

      return { showMenu: value };
    }),
}));

export default useNavbarStore;
