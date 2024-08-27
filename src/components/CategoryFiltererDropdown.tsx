"use client";

import Dropdown from "@/components/ui/Dropdown";
import useProductsStore from "@/utils/store/products-store";

const CategoryFiltererDropdown = () => {
  const category = useProductsStore((state) => state.category);
  const setCategory = useProductsStore((state) => state.setCategory);

  const handleChange = (data: string) => {
    setCategory(data as "WINTER" | "SUMMER" | "SPRING" | "FALL");
  };

  return (
    <Dropdown
      options={[
        { id: "SPRING", name: "Spring" },
        { id: "SUMMER", name: "Summer" },
        { id: "FALL", name: "Fall" },
        { id: "WINTER", name: "Winter" },
      ]}
      placeholder={
        category
          ? `${category.slice(0, 1)}${category.slice(1).toLocaleLowerCase()}`
          : "Choose Category"
      }
      value={category}
      onChange={handleChange}
    />
  );
};

export default CategoryFiltererDropdown;
