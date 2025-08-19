
'use client'

import Link from "next/link"
import { IoAddSharp, IoPencil} from "react-icons/io5"


export const CreateButton = () => {
    return (
        <Link
        href="/admin/create"
        className="inline-flex items-center space-x-1 text-white bg-base_purple hover:bg-base_semi_purple px-5 py-[9px] rounded-sm text-sm" >
            <IoAddSharp 
            size={20}
            className="h-4 w-4" />
            Create
        </Link>
    )
}

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/edit/${id}`}
      className="inline-flex items-center space-x-1 text-base_purple hover:text-purple-300 px-5 py-[9px] rounded-sm text-sm"
    >
      Edit
    </Link>
  );
};