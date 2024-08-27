"use client";

import useProductsStore from "@/utils/store/products-store";
import Dropdown from "@/components/ui/Dropdown";

const OrderByPriceFiltererDropdown = () => {
  const setOrderPriceBy = useProductsStore((state) => state.setOrderPriceBy);

  const handleChange = (data: string) => {
    setOrderPriceBy(data as "asc" | "desc");
  };

  return (
    <Dropdown
      options={[
        { id: "asc", name: "Lowest First" },
        { id: "desc", name: "Highest First" },
      ]}
      onChange={handleChange}
    >
      <p className="truncate">Sort Price</p>
    </Dropdown>
  );
};

export default OrderByPriceFiltererDropdown;
