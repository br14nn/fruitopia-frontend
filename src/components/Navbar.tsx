"use client";

import { useState } from "react";
import { m, LazyMotion, AnimatePresence, domAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CustomLink from "./ui/CustomLink";
import HamburgerMenuIcon from "./svgs/HamburgerMenuIcon";
import CloseIcon from "./svgs/CloseIcon";
import { FruitopiaNavbarLogo } from "@/utils/images";
import Button from "./ui/Button";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu((oldVal) => !oldVal);
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

        {toggleMenu && (
          <div
            className="fixed inset-0 h-[100svh] w-full bg-primary-default/50 backdrop-blur-sm xl:hidden"
            onClick={handleToggleMenu}
          />
        )}

        {/* Mobile navbar menu */}
        <AnimatePresence>
          {toggleMenu && (
            <LazyMotion features={domAnimation}>
              <m.ul
                className="item-center fixed right-0 top-0 flex h-[100svh] w-[50%] flex-col bg-accent-default py-4 lg:w-[30%] xl:hidden"
                initial={{ translateX: "100%" }}
                animate={{ translateX: "0%" }}
                exit={{ translateX: "100%" }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <button
                  className="mb-4 mr-4 flex items-center justify-center self-end xl:hidden"
                  onClick={handleToggleMenu}
                >
                  <CloseIcon />
                </button>

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

                <div className="mt-4 flex w-full flex-col items-center justify-center gap-2 sm:flex-row xl:hidden">
                  <Button className="max-w-[120px]">Login</Button>

                  <Button className="max-w-[120px]" variant={"secondary"}>
                    Sign Up
                  </Button>
                </div>
              </m.ul>
            </LazyMotion>
          )}
        </AnimatePresence>

        {/* Desktop navbar menu */}
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

        {/* Hamburger menu on mobile screens */}
        <button
          className="flex w-fit items-center justify-center justify-self-end xl:hidden"
          onClick={handleToggleMenu}
        >
          <HamburgerMenuIcon />
        </button>

        {/* 
        Login & sign up buttons 
        TODOS:
          1. Create login & signup modals when either buttons is clicked.
      */}
        <div className="hidden w-full justify-end gap-4 xl:flex">
          <Button className="max-w-[120px]">Login</Button>

          <Button className="max-w-[120px]" variant={"secondary"}>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
