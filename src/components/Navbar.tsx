"use client";

import { m, LazyMotion, AnimatePresence, domAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CustomLink from "@/components/ui/CustomLink";
import SignInWIthGoogleButton from "@/components/SignInWIthGoogleButton";
import LogoutButton from "@/components/LogoutButton";
import Avatar from "@/components/Avatar";
import HamburgerMenuIcon from "@/components/svgs/HamburgerMenuIcon";
import CloseIcon from "@/components/svgs/CloseIcon";
import { FruitopiaNavbarLogo } from "@/utils/images";
import useNavbarStore from "@/utils/store/navbar-store";

const Navbar = () => {
  const { showMenu, toggleMenu } = useNavbarStore((state) => state);

  const handleToggleMenu = () => {
    toggleMenu();
  };

  return (
    <nav className="fixed top-0 z-[900] w-full bg-accent-default">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 items-center p-2 xl:grid-cols-3 xl:p-0 xl:px-4">
        <Link
          className="flex w-fit items-center font-bold leading-none text-primary-default"
          href="/"
        >
          <Image
            className="w-8"
            src={FruitopiaNavbarLogo}
            alt="Fruitopia icon navbar logo"
          />

          <span>FRUITOPIA</span>
        </Link>

        {/* background for mobile navbar menu when opened*/}
        {showMenu && (
          <div
            className="fixed inset-0 h-[100svh] w-full bg-primary-default/50 backdrop-blur-sm xl:hidden"
            onClick={handleToggleMenu}
          />
        )}

        {/* Hamburger menu toggler on mobile screens */}
        <button
          className="flex w-fit items-center justify-center justify-self-end xl:hidden"
          onClick={handleToggleMenu}
        >
          <HamburgerMenuIcon />
        </button>

        {/* Mobile navbar menu */}
        <AnimatePresence>
          {showMenu && (
            <LazyMotion features={domAnimation}>
              <m.div
                className="item-center fixed right-0 top-0 flex h-[100svh] w-[50%] flex-col bg-accent-default py-4 lg:w-[30%] xl:hidden"
                initial={{ translateX: "100%" }}
                animate={{ translateX: "0%" }}
                exit={{ translateX: "100%" }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <button
                  className="mr-4 flex items-center justify-center self-end xl:hidden"
                  onClick={handleToggleMenu}
                >
                  <CloseIcon />
                </button>

                <div className="my-4 flex w-full justify-center">
                  <Avatar />
                </div>

                <CustomLink
                  variant={"navbarLink"}
                  href="/"
                  onClick={handleToggleMenu}
                >
                  Home
                </CustomLink>

                <CustomLink
                  variant={"navbarLink"}
                  href="/products"
                  onClick={handleToggleMenu}
                >
                  Products
                </CustomLink>

                <CustomLink
                  variant={"navbarLink"}
                  href="/#aboutUs"
                  onClick={handleToggleMenu}
                >
                  About Us
                </CustomLink>

                <div className="mt-4 self-center">
                  <SignInWIthGoogleButton />
                  <LogoutButton />
                </div>
              </m.div>
            </LazyMotion>
          )}
        </AnimatePresence>

        <ul className="hidden w-full items-center justify-center xl:flex">
          <CustomLink variant={"navbarLink"} href="/">
            Home
          </CustomLink>
          <CustomLink variant={"navbarLink"} href="/products">
            Products
          </CustomLink>
          <CustomLink variant={"navbarLink"} href="/#aboutUs">
            About Us
          </CustomLink>
        </ul>

        <div className="hidden w-full justify-end gap-2 xl:flex">
          <SignInWIthGoogleButton />
          <Avatar />
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
