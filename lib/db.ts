import { PrismaClient } from "@prisma/client";

// during development it will intialise the Prisma Client only once for the first time.
export const db = globalThis.prisma || new PrismaClient();

declare global {
  var prisma: PrismaClient | undefined;
}

//when not in production we the store db variable inside globalThis.prisma

//globalThis is not affected by hot reload.
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
