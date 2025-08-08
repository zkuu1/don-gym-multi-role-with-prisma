// lib/getAdminData.ts
import prisma from "@/lib/prisma";

export async function getAdminData(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      membership: true, // langsung include membership
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
