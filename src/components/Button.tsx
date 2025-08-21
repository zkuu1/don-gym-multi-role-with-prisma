'use client'

import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrash } from "react-icons/io5"
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreateButton = () => {
  return (
    <Link
      href="/admin/create"
      className="inline-flex items-center space-x-1 text-white bg-base_purple hover:bg-base_semi_purple px-5 py-[9px] rounded-sm text-sm"
    >
      <IoAddSharp size={20} className="h-4 w-4" />
      Create User
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/edit/${id}`}
      className="inline-flex items-center space-x-1 text-base_purple hover:text-purple-300 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoPencil size={16} className="mr-1" />
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/admin/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Refresh halaman setelah berhasil delete
        router.refresh();
      } else {
        console.error("Gagal menghapus user");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsDeleting(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center space-x-1 text-red-600 hover:text-red-800 px-5 py-[9px] rounded-sm text-sm"
        disabled={isDeleting}
      >
        <IoTrash size={16} className="mr-1" />
        {isDeleting ? "Deleting..." : "Delete"}
      </button>

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Konfirmasi Penghapusan</h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus item ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 text-sm"
                disabled={isDeleting}
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-red-400 text-sm"
                disabled={isDeleting}
              >
                {isDeleting ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};