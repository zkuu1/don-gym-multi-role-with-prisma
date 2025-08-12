'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";




const createUser = async (formData: FormData) => {
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as "user" | "admin";
  
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password, // Note: In production, you should hash the password
        role,
        membership: {
          create: {
            startDate: new Date(),
            endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            status: "active",
            type: "standard", // Add a valid type value here
          },
        },
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user.");
  }
};

export default createUser;