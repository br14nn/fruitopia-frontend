"use client";

import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { findAllProducts } from "@/utils/CRUD/READ";
import useProductsStore from "@/utils/store/products-store";

const ProductsListRenderer = () => {
  const { data, keyword, category, orderPriceBy, setData } = useProductsStore(
    (state) => state,
  );

  useEffect(() => {
    const getData = async () => {
      const { message, error } = await findAllProducts(
        keyword,
        category,
        orderPriceBy,
      );

      if (!error) setData(message);
      else console.error(error);
    };

    getData();
  }, []);

  return data.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ));
};

export default ProductsListRenderer;
