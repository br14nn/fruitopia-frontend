"use client";

import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import UnstyledButton from "@/components/ui/UnstyledButton";
import HamburgerMenuIcon from "@/components/svgs/HamburgerMenuIcon";
import { FruitopiaNavbarLogo } from "@/utils/images";
import useNavbarStore from "@/utils/store/useNavbarStore";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const toggleVisibility = useNavbarStore((state) => state.toggleVisibility);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleVisibility();
  };

  return (
    <>
      <nav className="fixed top-0 z-[990] flex w-full flex-row items-center justify-between bg-accent-default p-4 xl:p-0 xl:pl-8">
        <Image
          className="aspect-auto w-32"
          src={FruitopiaNavbarLogo}
          alt="logo"
        />
        <div className="hidden xl:flex">
          <NavbarLink className="px-8 py-4" href="/">
            Home
          </NavbarLink>
          <NavbarLink className="px-8 py-4" href="/products">
            Products
          </NavbarLink>
          <NavbarLink className="px-8 py-4" href="/#aboutUs">
            About Us
          </NavbarLink>
        </div>
        <UnstyledButton
          className="aspect-square w-6 xl:hidden"
          onClick={handleClick}
        >
          <HamburgerMenuIcon />
        </UnstyledButton>
      </nav>
      <NavbarMenu />
    </>
  );
};

export default Navbar;
