"use client";
import { useState } from "react";

interface EditFormProps {
  user: {
    id: string;
    name: string;
    membership?: { status: string | null } | undefined;
  };
}

export default function EditForm({ user }: EditFormProps) {
  const [name, setName] = useState(user.name);
  const [status, setStatus] = useState(user.membership?.status ?? "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`/admin/edit/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, status }),
    });

    alert("User updated!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6 max-w-md">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block">Membership Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">-- Pilih Status --</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
}
