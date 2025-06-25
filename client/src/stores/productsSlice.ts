import type { StateCreator } from "zustand";
import { getProducts } from "../services/ProductsService";
import type { Products } from "../types";

export type productsSliceType = {
  products: Products;
  fetchProducts: () => Promise<void>;
};

export const createProductsSlice: StateCreator<productsSliceType> = (set) => ({
  products: [],
  fetchProducts: async () => {
    const products = await getProducts();
    set({
        products
    })
  },
});
