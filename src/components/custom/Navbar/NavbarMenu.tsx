import useNavbarStore from "@/utils/store/useNavbarStore";

const NavbarMenu = () => {
  const navbarStore = useNavbarStore((state) => state);

  const toggleVisibility = () => {
    navbarStore.toggleVisibility();
  };

  if (navbarStore.visible) {
    return (
      <div
        className="fixed inset-0 z-[991] h-[100svh] w-[100svw] bg-black/50"
        onClick={toggleVisibility}
      ></div>
    );
  }
};

export default NavbarMenu;
