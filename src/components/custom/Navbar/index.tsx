import Image from "next/image";
import { FruitopiaNavbarLogo } from "@/utils/images";
import UnstyledButton from "@/components/ui/UnStyledButton";
import HamburgerMenuIcon from "@/components/svgs/HamburgerMenuIcon";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-[999] flex w-full flex-row items-center justify-between bg-accent-default p-3">
        <Image
          className="aspect-auto w-32"
          src={FruitopiaNavbarLogo}
          alt="logo"
        />
        <UnstyledButton className="aspect-square w-6">
          <HamburgerMenuIcon />
        </UnstyledButton>
      </nav>
    </>
  );
};

export default Navbar;
