import axios from "axios";
import { productsSchema } from "../schemas/productSchema";

export async function getProducts() {
  const url = "http://localhost:3000/products"
  const { data } = await axios(url);
  const result = productsSchema.safeParse(data);
  if (result.success) {
    return result.data;
  } else {
    console.error("❌ Error al validar productos con Zod:", result.error);
    throw new Error("Respuesta del backend no válida con el esquema Zod");
  }
}
