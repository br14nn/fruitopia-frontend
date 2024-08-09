"use client";

import React from "react";
import SearchIcon from "../svgs/SearchIcon";
import { cn } from "@/utils/utils";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className={cn(
        "flex w-full items-center overflow-hidden rounded-md",
        className,
      )}
      onSubmit={handleSubmit}
    >
      <input
        className="flex-grow bg-secondary-950 px-3 py-2 text-secondary-default outline-none transition-colors duration-300 focus:bg-secondary-900"
        type="text"
        placeholder="Search..."
      />

      <button className="flex aspect-square w-10 items-center justify-center bg-secondary-default p-2 transition-colors duration-200 hover:bg-secondary-200">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
