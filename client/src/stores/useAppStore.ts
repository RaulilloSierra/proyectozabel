import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createProductsSlice, type productsSliceType } from "./productsSlice";
import { createContactSlice, type contactSliceType } from "./contactSlice";

export const useAppStore = create<productsSliceType & contactSliceType>()(
  devtools((...a) => ({
    ...createProductsSlice(...a),
    ...createContactSlice(...a),
  }))
);
