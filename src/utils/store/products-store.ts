import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductsState {
  data: IProduct[];
  keyword?: string;
  category?: "WINTER" | "SUMMER" | "SPRING" | "FALL";
  orderPriceBy?: "asc" | "desc";
  setData: (data: IProduct[]) => void;
  setKeyword: (input: string) => void;
  setCategory: (input: ProductsState["category"]) => void;
}

const useProductsStore = create<ProductsState>()(
  devtools((set) => ({
    data: [],
    keyword: "",
    category: undefined,
    orderPriceBy: undefined,
    setData: (data) => set(() => ({ data: data })),
    setKeyword: (input) => set(() => ({ keyword: input })),
    setCategory: (input) => set(() => ({ category: input })),
  })),
);

export default useProductsStore;
