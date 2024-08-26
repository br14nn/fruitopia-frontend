"use client";

import { useEffect, useRef, useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useAnimate,
  AnimatePresence,
} from "framer-motion";
import Button from "@/components/ui/Button";
import RoundedTriangularIcon from "@/components/svgs/RoundedTriangularIcon";
import useProductsStore from "@/utils/store/products-store";

const CategoryFiltererDropdown = () => {
  const dropdownRef = useRef<any>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const category = useProductsStore((state) => state.category);
  const setCategory = useProductsStore((state) => state.setCategory);
  const [icon, animateIcon] = useAnimate();
  const [dropdownButton, animateDropdownButton] = useAnimate();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id, name } = e.currentTarget;

    if (id === "dropdownToggleButton") {
      setShowDropdown((oldVal) => !oldVal);
    }

    if (name === "categoryButton") {
      if (id === category) {
        setCategory(undefined);
      } else {
        setCategory(id as "WINTER" | "SUMMER" | "SPRING" | "FALL");
      }

      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      animateIcon(icon.current, { rotate: -90 }, { duration: 0.2 });
      animateDropdownButton(
        dropdownButton.current,
        { borderBottomRightRadius: "0rem", borderBottomLeftRadius: "0rem" },
        { duration: 0.2 },
      );
    } else {
      animateIcon(icon.current, { rotate: 0 }, { duration: 0.2 });
      animateDropdownButton(
        dropdownButton.current,
        {
          borderBottomRightRadius: "0.375rem",
          borderBottomLeftRadius: "0.375rem",
        },
        { duration: 0.2 },
      );
    }

    let handler = (e: any) => {
      if (showDropdown && !dropdownRef.current?.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative" ref={dropdownRef}>
        <Button
          className="relative z-50 flex justify-between px-4 py-2"
          id="dropdownToggleButton"
          variant={"secondary"}
          onClick={handleClick}
          ref={dropdownButton}
        >
          <p>
            {category
              ? `${category.slice(0, 1)}${category.slice(1).toLowerCase()}`
              : "Category"}
          </p>

          <m.div className="origin-center" ref={icon}>
            <RoundedTriangularIcon />
          </m.div>
        </Button>

        <AnimatePresence>
          {showDropdown && (
            <m.div
              initial={{ scaleY: 0, opacity: 0.5 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute z-40 flex w-full origin-top flex-col divide-y divide-secondary-200 overflow-hidden rounded-b-md"
            >
              <Button
                id="SPRING"
                className="rounded-none py-2"
                variant={"secondary"}
                name="categoryButton"
                onClick={handleClick}
              >
                Spring
              </Button>

              <Button
                id="SUMMER"
                className="rounded-none py-2"
                variant={"secondary"}
                name="categoryButton"
                onClick={handleClick}
              >
                Summer
              </Button>

              <Button
                id="FALL"
                className="rounded-none py-2"
                variant={"secondary"}
                name="categoryButton"
                onClick={handleClick}
              >
                Fall
              </Button>

              <Button
                id="WINTER"
                className="rounded-none py-2"
                variant={"secondary"}
                name="categoryButton"
                onClick={handleClick}
              >
                Winter
              </Button>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default CategoryFiltererDropdown;
