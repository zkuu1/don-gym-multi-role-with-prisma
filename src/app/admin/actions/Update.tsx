
'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";



const updateUser = async (id: string, formData: FormData) => {

  
  const name = formData.get("name") as string;
  const role = formData.get("role") as "user" | "admin";
  const membershipStatus = formData.get("membershipStatus") as "active" | "inactive";
  
  try {
    await prisma.user.update({
      where: { id },
      data: {
        name,
        role,
        membership: {
          update: {
            status: membershipStatus,
          },
        },
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    console.error("Failed to update user:", error);
    throw new Error("Failed to update user.");
  }
};

export default updateUser;