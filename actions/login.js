"use server";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { isRedirectError } from "next/dist/client/components/redirect";

export const login = async (values) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { username, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: `${DEFAULT_LOGIN_REDIRECT}`,
    });
    return { success: "Login success!" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error; // You have to throw the redirect error
    }
    return { error: "Invalid credentials!" };
  }
  //   console.log({ error });
  //
  // }
  // const hashedPassword = await bcrypt.hash(values.password, 10);
  // await db.user.create({
  //   data: {
  //     username: values.username,
  //     password: hashedPassword,
  //   },
  // });
};
