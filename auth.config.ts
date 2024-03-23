import type { NextAuthConfig } from "next-auth";

import { LoginSchema } from "./schemas";

import { getUserByEmail } from "./data/user";

import bcryptjs from "bcryptjs";

import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(Credentials) {
        const validatedFields = LoginSchema.safeParse(Credentials);

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

/**
 * email verification is needed only for credential users because google and github already do email verification,
 * so populate the emailVefired field in the database whenever a user signs up for the first time using google/github.
 */
