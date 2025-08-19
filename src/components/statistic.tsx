import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Search from "./Search";
import { CreateButton, EditButton } from "./Button";

import { getUsers } from "@/lib/data";

const Statistic = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user.role !== "admin") {
    return <div className="p-6 text-red-600 font-semibold">Unauthorized</div>;
  }

  
  // Mapping users to a format suitable for the table
  const users = await getUsers();
  const recentOrders = users.map((u) => ({
    id: u.id,
    customer: u.name ?? "Unknown",
    membershipId: u.membershipId ?? "-",
    startDate: u.membership?.startDate || null,
    endDate: u.membership?.endDate || null,
    membershipStatus: u.membership?.status || "N/A",
    amount: "$120.00",
    status: "Completed",
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b">
        <h1 className="text-lg font-semibold text-gray-800">User Statistics</h1>
        <p className="text-sm text-gray-500">
          Overview of registered users and memberships
        </p>
        <CreateButton />
        <div className="mt-4">
          <Search />
        </div>
        
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Membership ID
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Membership Status
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {order.membershipId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {order.startDate
                    ? new Date(order.startDate).toLocaleDateString()
                    : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {order.endDate
                    ? new Date(order.endDate).toLocaleDateString()
                    : "-"}
                </td>
               
                
                 <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.membershipStatus === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.membershipStatus}
                  </span>
                </td>

                <td>
                 <EditButton id={order.id} />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistic;
