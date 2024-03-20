import type { NextAuthConfig } from "next-auth";

import credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schemas";

import { getUserByEmail } from "./data/user";

import bcryptjs from "bcryptjs";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          //check for an existing user
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null; //no password when logging in using google or github

          //compare hashed password in the database with the password that the user just passed.
          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
