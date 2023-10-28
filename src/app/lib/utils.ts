import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type User = {
  email: string;
  name: string;
  request: string;
};

export const createUser = async ({ email, name, request }: User) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        request,
      },
    });
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const fetchUserWithEmail = async (email: any) => {
  return await prisma.user.findUnique({
    where: { email },
  } as unknown as any);
};
