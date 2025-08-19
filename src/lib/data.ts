// src/lib/data.ts
import prisma from "@/lib/prisma";

export async function getUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      membershipId: true,
      membership: {
        select: {
          startDate: true,
          endDate: true,
          status: true,
        },
      },
    },
  });
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      membershipId: true,
      membership: {
        select: {
          startDate: true,
          endDate: true,
          status: true,
        },
      },
    },
  });
}
