"use client";

import SearchIcon from "@/components/svgs/SearchIcon";
import { cn } from "@/utils/utils";
import useProductsStore from "@/utils/store/products-store";
import debounce from "lodash.debounce";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const setKeyword = useProductsStore((state) => state.setKeyword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;

    setKeyword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const debounceHandleChange = debounce(handleChange, 500);

  return (
    <form
      id="searchBar"
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
        onChange={debounceHandleChange}
      />
    </form>
  );
};

export default SearchBar;
