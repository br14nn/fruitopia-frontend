"use client";

import SearchIcon from "./svgs/SearchIcon";
import { findAllProducts } from "@/utils/CRUD/READ";
import { cn } from "@/utils/utils";
import useProductsStore from "@/utils/store/products-store";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const { setData, keyword, setKeyword, category, orderPriceBy } =
    useProductsStore((state) => state);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { message, error } = await findAllProducts(
      keyword,
      category,
      orderPriceBy,
    );

    if (!error) setData(message);
    else console.error(error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setKeyword(value);
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
        onChange={handleChange}
        value={keyword}
      />

      <button className="flex aspect-square w-10 items-center justify-center bg-secondary-default p-2 transition-colors duration-200 hover:bg-secondary-200">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
