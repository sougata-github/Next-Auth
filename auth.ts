import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

export const {
  handlers: { GET, POST },
  auth, //can use to get currently logged in user session in server components or no session at all if logged out.
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

/**
 * While NextAuth.js strictly uses standard Web APIs (and thus can run in any environments that support that), some libraries or ORMs (Object-Relational Mapping) packages that you rely on might not be ready yet. In this case, you can split the auth configuration into multiple files. The following is an example of how to do this with a database adapter.

NextAuth.js supports two session strategies. When you are using an adapter, you can choose to save the session data into a database. Unless your database and its adapter is compatible with the Edge runtime/infrastructure, you will not be able to use a "database" session strategy.
 */
