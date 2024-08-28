"use client";

import Button from "@/components/ui/Button";
import useProductsStore from "@/utils/store/products-store";

const ResetFiltersButton = () => {
  const keyword = useProductsStore((state) => state.keyword);
  const category = useProductsStore((state) => state.category);
  const orderPriceBy = useProductsStore((state) => state.orderPriceBy);
  const resetFilters = useProductsStore((state) => state.resetFilters);

  const handleClick = () => {
    const searchBar = document.getElementById("searchBar") as HTMLFormElement;

    searchBar.reset();
    resetFilters();
  };

  if (keyword || category || orderPriceBy) {
    return (
      <Button
        className="w-fit px-4 py-2"
        variant={"danger"}
        onClick={handleClick}
      >
        Reset
      </Button>
    );
  }
};

export default ResetFiltersButton;
