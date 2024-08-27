"use client";

import useProductsStore from "@/utils/store/products-store";
import Dropdown from "@/components/ui/Dropdown";

const OrderByPriceFiltererDropdown = () => {
  const orderPriceBy = useProductsStore((state) => state.orderPriceBy);
  const setOrderPriceBy = useProductsStore((state) => state.setOrderPriceBy);

  const handleChange = (data: string) => {
    setOrderPriceBy(data as "asc" | "desc");
  };

  const handlePlaceholder = (): string => {
    if (orderPriceBy === "asc") {
      return "Lowest First";
    } else if (orderPriceBy === "desc") {
      return "Highest First";
    } else {
      return "Sort Price";
    }
  };

  return (
    <Dropdown
      options={[
        { id: "asc", name: "Lowest First" },
        { id: "desc", name: "Highest First" },
      ]}
      onChange={handleChange}
      value={orderPriceBy}
      placeholder={handlePlaceholder()}
    ></Dropdown>
  );
};

export default OrderByPriceFiltererDropdown;
