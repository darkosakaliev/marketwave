import { compare, hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}
