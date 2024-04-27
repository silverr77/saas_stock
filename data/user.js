import { db } from "@/lib/db";
export const getUserByUsername = async (username) => {
  return await db.user.findUnique({
    where: {
      username: username,
    },
  });
};
