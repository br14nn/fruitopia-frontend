"use client";

import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import NavbarLink from "./NavbarLink";
import UnstyledButton from "@/components/ui/UnstyledButton";
import CloseIcon from "@/components/svgs/CloseIcon";
import CustomButton from "@/components/ui/CustomButton";
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

                <NavbarLink href="/products">Products</NavbarLink>

                <NavbarLink href="/#aboutUs">About Us</NavbarLink>
              </div>

              <div className="flex flex-col items-center gap-2">
                <CustomButton className="max-w-[150px] self-center">
                  Login
                </CustomButton>

                <CustomButton
                  className="max-w-[150px] self-center"
                  variant={"secondary"}
                >
                  Register
                </CustomButton>
              </div>
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMenu;
