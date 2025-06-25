import axios from "axios";
import { responseSchema } from "../schemas/contactSchema";
import type { Contacts } from "../types";

export async function submitContact(info: Contacts) {
  const url = "http://localhost:3000/contact-us"
  const { data } = await axios.post(url, info);
  console.log(data)
  const result = responseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  } else {
    console.error("❌ Error al validar contactos con Zod:", result.error);
    throw new Error("Respuesta del backend no válida con el esquema Zod");
  }
}
