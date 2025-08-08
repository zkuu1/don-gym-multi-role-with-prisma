import { getAdminData } from "@/lib/getAdminData";

interface AdminPageProps {
  params: { userId: string };
}

export default async function AdminPage({ params }: AdminPageProps) {
  const userData = await getAdminData(params.userId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <div className="border p-4 rounded">
          <h2 className="font-semibold">User Info</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Role:</strong> {userData.role}</p>
        </div>

        {userData.membership && (
          <div className="border p-4 rounded">
            <h2 className="font-semibold">Membership</h2>
            <p><strong>Type:</strong> {userData.membership.type}</p>
            <p><strong>Status:</strong> {userData.membership.status}</p>
            <p><strong>Start Date:</strong> {userData.membership.startDate.toDateString()}</p>
            <p><strong>End Date:</strong> {userData.membership.endDate.toDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
