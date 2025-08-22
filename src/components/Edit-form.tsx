"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type EditFormProps = {
  user: {
    id: string;
    name: string | null;
    role: string | null;
    membershipId: string | null;
    membership?: {
      status: string | null;
      startDate: string | null;
      endDate: string | null;
    } | null;
  };
};

type FormValues = {
  name: string;
  status: string;
  role: string;
  membershipId: string | null;
  startDate?: string;
  endDate?: string;
};

export default function EditForm({ user }: EditFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      name: user.name ?? "",
      status: user.membership?.status ?? "",
      role: user.role ?? "",
      membershipId: user.membershipId ?? "",
      startDate: user.membership?.startDate ?? "",
      endDate: user.membership?.endDate ?? "",
    },
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/edit/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Gagal update user");
      }

      toast.success("User berhasil diupdate!");
      
      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 1500);

    } catch (err: any) {
      toast.error(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base_semi_purple shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Edit User
        </h2>

        {/* Name */}
        <div>
          <label className="block font-medium text-white">Name</label>
          <input
            {...register("name", { required: "Nama wajib diisi" })}
            className="border p-2 w-full rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block font-medium text-white">Role</label>
          <select
            {...register("role", { required: "Role wajib dipilih" })}
            className="border p-2 w-full rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="">Pilih Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium text-white">Status</label>
          <select
            {...register("status", { required: "Status wajib dipilih" })}
            className="border p-2 w-full rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="">Pilih Status</option>
            <option value="active">Active</option>
            <option value="nonactive">Nonactive</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* Membership ID */}
        <div>
          <label className="block font-medium text-white">Membership ID</label>
          <input
            {...register("membershipId")}
            placeholder="Masukkan ID Membership"
            className="border p-2 w-full rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:outline-none"
            type="number"
            inputMode="numeric"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block font-medium text-white">Tanggal Mulai</label>
          <input
            {...register("startDate")}
            className="border p-2 w-full rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:outline-none"
            type="date"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block font-medium text-white">Tanggal Selesai</label>
          <input
            {...register("endDate")}
            className="border p-2 w-full rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:outline-none"
            type="date"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-white text-base_purple px-4 py-2 rounded-lg hover:bg-purple-200 w-1/2"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 w-1/2"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}