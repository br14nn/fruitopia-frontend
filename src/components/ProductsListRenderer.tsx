"use client";

import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { findAllProducts } from "@/utils/CRUD/READ";
import useProductsStore from "@/utils/store/products-store";

const ProductsListRenderer = () => {
  const { data, setData, keyword, category, orderPriceBy } = useProductsStore(
    (state) => state,
  );

  useEffect(() => {
    findAllProducts(keyword, category, orderPriceBy).then(({ message }) => {
      setData(message);
    });
  }, [keyword, category, orderPriceBy]);

  return data?.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ));
};

export default ProductsListRenderer;
