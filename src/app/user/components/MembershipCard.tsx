import React from "react";
import { Membership } from "@prisma/client";
import Link from "next/link";

interface MembershipCardProps {
  membership: Membership | null;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ membership }) => {
  const getStatusColor = () => {
    const status = membership?.status?.toLowerCase();
    if (status === "active") return "bg-green-100 text-green-800";
    if (status === "expired") return "bg-red-100 text-red-800";
    if (status === "pending") return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return "-";
    const parsedDate = date instanceof Date ? date : new Date(date);
    return parsedDate.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Status Membership
        </h2>
      </div>

      <div className="p-6">
        {membership ? (
          <>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Tipe Membership</p>
                <p className="text-2xl font-bold text-indigo-600 capitalize">
                  {membership.type || "Tidak tersedia"}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor()}`}
              >
                {membership.status || "unknown"}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Tanggal Mulai</p>
                <p className="font-medium">
                  {formatDate(membership.startDate)}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Tanggal Berakhir</p>
                <p className="font-medium">
                  {formatDate(membership.endDate)}
                  
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/upgrade"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {membership.status?.toLowerCase() === "active"
                  ? "Upgrade Membership"
                  : "Aktifkan Membership"}
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Belum memiliki membership
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Dapatkan akses penuh dengan berlangganan membership
            </p>
            <div className="mt-6">
              <Link
                href="/membership"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Daftar Membership
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipCard;
