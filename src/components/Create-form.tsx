"use client";
import { useState } from "react";

export default function CreateForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, status }),
    });

    alert("User created!");
    setName("");
    setStatus("");
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
          placeholder="Enter user name"
          required
        />
      </div>

      <div>
        <label className="block">Membership Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">-- Pilih Status --</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </form>
  );
}
