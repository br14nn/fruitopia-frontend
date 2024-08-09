"use client";

import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import NavbarLink from "./NavbarLink";
import UnstyledButton from "@/components/ui/UnstyledButton";
import CustomButton from "@/components/ui/CustomButton";
import HamburgerMenuIcon from "@/components/svgs/HamburgerMenuIcon";
import { FruitopiaNavbarLogo } from "@/utils/images";
import useNavbarStore from "@/utils/store/useNavbarStore";

const Navbar = () => {
  const toggleVisibility = useNavbarStore((state) => state.toggleVisibility);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleVisibility();
  };

  return (
    <>
      <nav className="fixed top-0 z-[990] grid w-full grid-cols-2 bg-accent-default p-4 xl:grid-cols-3 xl:p-0 xl:px-8">
        <Image
          className="aspect-auto h-7 w-auto self-center"
          src={FruitopiaNavbarLogo}
          alt="logo"
        />

        <div className="hidden xl:flex xl:w-full xl:justify-center">
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
          className="aspect-square w-6 justify-self-end xl:hidden"
          onClick={handleClick}
        >
          <HamburgerMenuIcon />
        </UnstyledButton>

        <div className="hidden items-center justify-end gap-4 xl:flex">
          <CustomButton className="h-[32px] w-[120px] self-center">
            Login
          </CustomButton>

          <CustomButton
            className="h-[32px] w-[120px] self-center"
            variant={"outline"}
          >
            Register
          </CustomButton>
        </div>
      </nav>

      <NavbarMenu />
    </>
  );
};

export default Navbar;
