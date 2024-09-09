import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Fruitopia",
  description: "Cart page of fruitopia",
};

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default CartLayout;
