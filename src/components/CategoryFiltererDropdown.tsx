"use client";

import Dropdown from "@/components/ui/Dropdown";
import useProductsStore from "@/utils/store/products-store";

const CategoryFiltererDropdown = () => {
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
      onChange={handleChange}
    >
      <p className="truncate">Choose a Category</p>
    </Dropdown>
  );
};

export default CategoryFiltererDropdown;
