import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const ProductSchema = z.object({
  name: z.string().min(4, {
    message: "Product name is required",
  }),
  price: z.coerce.number().min(0),
  cost: z.coerce.number().min(0),
});
