import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductsState {
  data: IProduct[];
  setData: (data: IProduct[]) => void;
}

const useProductsStore = create<ProductsState>()(
  devtools((set) => ({
    data: [],
    setData: (data) => set((state) => ({ data: data })),
  })),
);

export default useProductsStore;
