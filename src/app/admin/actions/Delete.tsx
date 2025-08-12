import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";




const deleteUser = async (id: string) => {
  
  try {
    // Hapus membership terlebih dahulu
    await prisma.membership.deleteMany({
      where: { userId: id },
    });
    
    // Kemudian hapus user
    await prisma.user.delete({
      where: { id },
    });
    
    revalidatePath("/admin");
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("Failed to delete user.");
  }
};

export default deleteUser;