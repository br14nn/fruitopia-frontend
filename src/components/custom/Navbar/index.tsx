"use client";

import Image from "next/image";
import UnstyledButton from "@/components/ui/UnstyledButton";
import HamburgerMenuIcon from "@/components/svgs/HamburgerMenuIcon";
import NavbarMenu from "./NavbarMenu";
import { FruitopiaNavbarLogo } from "@/utils/images";
import useNavbarStore from "@/utils/store/useNavbarStore";

const Navbar = () => {
  const toggleVisibility = useNavbarStore((state) => state.toggleVisibility);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleVisibility();
  };

  return (
    <>
      <nav className="fixed top-0 z-[990] flex w-full flex-row items-center justify-between bg-accent-default p-3">
        <Image
          className="aspect-auto w-32"
          src={FruitopiaNavbarLogo}
          alt="logo"
        />
        <UnstyledButton className="aspect-square w-6" onClick={handleClick}>
          <HamburgerMenuIcon />
        </UnstyledButton>
      </nav>
      <NavbarMenu />
    </>
  );
};

export default Navbar;
