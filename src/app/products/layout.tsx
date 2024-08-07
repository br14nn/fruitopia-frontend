import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Fruitopia",
  description: "Products page of fruitopia",
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProductsLayout;
