import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface NavbarState {
  visible: boolean;
  toggleVisibility: () => void;
}

const useNavbarStore = create<NavbarState>()(
  devtools((set) => ({
    visible: false,
    toggleVisibility: () => set((state) => ({ visible: !state.visible })),
  })),
);

export default useNavbarStore;
