import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import CreateUserForm from "@/components/Create-form";

const CreateUserPage = async () => {
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Don Gym Admin</h1>
        </div>
        <nav className="p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Tailwind</h2>
            <ul className="space-y-1">
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Figma</a></li>
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">React</a></li>
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Next</a></li>
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Vue</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Don Gym Admin</h2>
            <ul className="space-y-1">
              <li>
                <a href="/admin" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded">Dashboard</a>
              </li>
              <li>
                <a href="/admin/create" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded bg-gray-100">Create User</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-100 shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Create New User</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
              
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New User</h1>
            <CreateUserForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateUserPage;