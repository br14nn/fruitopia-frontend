import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductsState {
  data: IProduct[];
  keyword?: string;
  category?: "WINTER" | "SUMMER" | "SPRING" | "FALL";
  orderPriceBy?: "asc" | "desc";
  setData: (data: IProduct[]) => void;
}

const useProductsStore = create<ProductsState>()(
  devtools((set) => ({
    data: [],
    keyword: "",
    category: undefined,
    orderPriceBy: undefined,
    setData: (data) => set((state) => ({ data: data })),
  })),
);

export default useProductsStore;
