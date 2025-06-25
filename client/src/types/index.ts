import { z } from "zod";
import { productSchema } from "../schemas/productSchema";
import { contactSchema, responseSchema } from "../schemas/contactSchema";

export type Contacts = z.infer<typeof contactSchema>;
export type Response = z.infer<typeof responseSchema>
export type Product = z.infer<typeof productSchema>;
export type Products = Product[];
