"use client";

import { useEffect } from "react";
import FilterButton from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import Text from "@/components/ui/Text";
import { findAllProducts } from "@/utils/CRUD/READ/index";
import useProductsStore from "@/utils/store/products-store";

const ProductsPage = () => {
  const { data, setData } = useProductsStore((state) => state);

  useEffect(() => {
    const getData = async () => {
      const { message, error } = await findAllProducts();

      if (!error) {
        setData(message);
      }
    };

    getData();
  }, []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1800px] flex-col px-4 pb-4 sm:px-16 lg:px-24 lg:pb-8 2xl:pb-12">
      <Text className="mt-20 font-bold tracking-widest" size={"medium"}>
        PRODUCTS
      </Text>

      <div className="mt-4 flex w-full items-center gap-2 sm:w-[500px]">
        <SearchBar className="w-auto flex-grow" />

        <FilterButton />
      </div>

      <div className="w-ful mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
