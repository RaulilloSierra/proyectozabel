import { z } from "zod";

export const contactSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

export const responseSchema = z.object({
  message: z.string(),
});
