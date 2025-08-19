import { getUserById } from "@/lib/data";
import EditForm from "@/components/Edit-form";

interface Props {
  params: { id: string };
}

export default async function EditUserPage({ params }: Props) {
  const user = await getUserById(params.id);

  if (!user) {
    return <div>User tidak ditemukan</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit User</h1>
      <EditForm
        user={{
          id: user.id,
          name: user.name ?? "",
          membership: user.membership
            ? { status: user.membership.status }
            : undefined,
        }}
      />
    </div>
  );
}
