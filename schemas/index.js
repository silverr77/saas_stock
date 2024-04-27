import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});
