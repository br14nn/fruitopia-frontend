"use client";

import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import NavbarLink from "./NavbarLink";
import UnstyledButton from "@/components/ui/UnstyledButton";
import CloseIcon from "@/components/svgs/CloseIcon";
import useNavbarStore from "@/utils/store/useNavbarStore";

const NavbarMenu = () => {
  const navbarStore = useNavbarStore((state) => state);

  const toggleVisibility = () => {
    navbarStore.toggleVisibility();
  };

  return (
    <>
      {navbarStore.visible && (
        <div
          className="fixed inset-0 z-[991] h-[100svh] w-[100svw] bg-black/50 xl:hidden"
          onClick={toggleVisibility}
        />
      )}

      <AnimatePresence>
        {navbarStore.visible && (
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ translateX: "100%" }}
              animate={{ translateX: "0%" }}
              exit={{ translateX: "100%" }}
              transition={{ type: "tween", duration: 0.15 }}
              className="fixed right-0 z-[992] flex h-[100svh] w-[50%] flex-col gap-8 bg-accent-default py-4 sm:w-[30%] xl:hidden"
            >
              <UnstyledButton
                className="mr-4 aspect-square w-6 self-end"
                onClick={toggleVisibility}
              >
                <CloseIcon />
              </UnstyledButton>

              <div className="flex flex-col">
                <NavbarLink href="/">Home</NavbarLink>
                <NavbarLink href="#">Products</NavbarLink>
                <NavbarLink href="/#aboutUs">About Us</NavbarLink>
              </div>
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </>
  );

  if (navbarStore.visible) {
  }
};

export default NavbarMenu;
