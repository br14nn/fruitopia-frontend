import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing | Fruitopia",
};

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default TestLayout;
