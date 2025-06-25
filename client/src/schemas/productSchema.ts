import { z } from "zod";

export const productSchema = z.object({
  productId: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const productsSchema = z.array(productSchema);