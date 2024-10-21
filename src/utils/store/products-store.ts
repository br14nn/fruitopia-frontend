import { create } from "zustand";

interface ProductsState {
  data: IProduct[];
  keyword?: string | "";
  category?: "WINTER" | "SUMMER" | "SPRING" | "FALL" | "";
  orderPriceBy?: "asc" | "desc" | "";
  setData: (data: IProduct[]) => void;
  setKeyword: (input: string) => void;
  setCategory: (input: ProductsState["category"]) => void;
  setOrderPriceBy: (input: ProductsState["orderPriceBy"]) => void;
  resetFilters: () => void;
}

const useProductsStore = create<ProductsState>()((set) => ({
  data: [],
  keyword: "",
  category: "",
  orderPriceBy: "",
  setData: (data) => set(() => ({ data: data })),
  setKeyword: (input) => set(() => ({ keyword: input })),
  setCategory: (input) => set(() => ({ category: input })),
  setOrderPriceBy: (input) => set(() => ({ orderPriceBy: input })),
  resetFilters: () =>
    set(() => ({
      keyword: "",
      category: "",
      orderPriceBy: "",
    })),
}));

export default useProductsStore;
