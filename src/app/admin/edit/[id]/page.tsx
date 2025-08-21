import { getUserById } from "@/lib/data";
import EditForm from "@/components/Edit-form";

export default async function EditPage({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-white">
        <p>User tidak ditemukan</p>
      </div>
    );
  }

  return (
    <EditForm
      user={{
        ...user,
        membership: user.membership
          ? {
              ...user.membership,
              startDate: user.membership.startDate
                ? user.membership.startDate.toISOString()
                : null,
              endDate: user.membership.endDate
                ? user.membership.endDate.toISOString()
                : null,
              status: user.membership.status ?? null,
            }
          : null,
      }}
    />
  );
}
