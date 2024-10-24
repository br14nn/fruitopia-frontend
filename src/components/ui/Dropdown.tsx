"use client";

import { useEffect, useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useAnimate,
  AnimatePresence,
} from "framer-motion";
import { nanoid } from "nanoid";
import Button from "@/components/ui/Button";
import RoundedTriangularIcon from "@/components/svgs/RoundedTriangularIcon";

interface DropdownButtonProps {
  placeholder: string;
  options: { id: string; name: string }[];
  value?: any;
  onChange: (option: string) => void;
}

const Dropdown = ({
  placeholder,
  options,
  value,
  onChange,
}: DropdownButtonProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id, name } = e.currentTarget;

    if (id === "dropdownButton") {
      setShowMenu((oldVal) => !oldVal);
    }

    if (name === "dropdownOption") {
      setShowMenu(false);
    }

    if (value === id) {
      onChange("");
    } else if (name === "dropdownOption") {
      onChange(id);
    }
  };

  useEffect(() => {
    if (showMenu) {
      animate(
        "#dropdownButton",
        { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" },
        { duration: 0.2, type: "tween" },
      );
      animate(
        "#dropdownIcon",
        { rotate: -90 },
        { duration: 0.2, type: "tween" },
      );
    } else {
      animate(
        "#dropdownButton",
        {
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
        },
        { duration: 0.2, type: "tween" },
      );
      animate("#dropdownIcon", { rotate: 0 }, { duration: 0.2, type: "tween" });
    }

    let handler = (e: any) => {
      if (showMenu && !scope.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative" ref={scope}>
        <Button
          className="relative z-20 flex justify-between px-4 py-2"
          id="dropdownButton"
          variant={"secondary"}
          onClick={handleClick}
        >
          <p className="truncate">{placeholder}</p>
          <div id="dropdownIcon" className="origin-center">
            <RoundedTriangularIcon />
          </div>
        </Button>

        <AnimatePresence>
          {showMenu && (
            <m.div
              initial={{ translateY: "-16px", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: "-16px", opacity: 0 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
              className="absolute z-10 flex w-full origin-top flex-col divide-y divide-secondary-200 overflow-hidden rounded-b-md"
              id="dropdownMenu"
            >
              {options.map((data) => (
                <Button
                  key={nanoid()}
                  className="rounded-none py-2"
                  id={data.id}
                  variant={value === data.id ? "secondary_400" : "secondary"}
                  name="dropdownOption"
                  onClick={handleClick}
                >
                  {data.name}
                </Button>
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default Dropdown;
