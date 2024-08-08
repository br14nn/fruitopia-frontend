import React from "react";
import SearchIcon from "../svgs/SearchIcon";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center overflow-hidden rounded-md">
      <input
        className="flex-grow bg-secondary-950 bg-transparent px-3 py-2 text-secondary-default outline-none transition-colors duration-300 focus:bg-secondary-900"
        type="text"
        placeholder="Search..."
      />
      <button className="flex aspect-square w-10 items-center justify-center bg-secondary-default">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
