import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Statistic from "@/components/statistic";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  // Sample data for the dashboard
  const stats = [
    { title: "AAPL", description: "Apple, Inc", value: "$1,232.00", change: "↑11.01%", changeColor: "text-green-500" },
    { title: "Monthly Target", description: "Target services at the world month", value: "$20K +" },
    { title: "Revenue", description: "Monthly revenue", value: "$16K", change: "↑", changeColor: "text-green-500" },
    { title: "Orders", description: "Total orders", value: "5,359", change: "1.08%", changeColor: "text-blue-500" },
  ];

  const customerStats = [
    { title: "Customer Satisfaction", value: "75.55%", target: "100%" },
    { title: "Customer Growth", value: "3,782", change: "1.10%", changeColor: "text-green-500" },
  ];

  const salesData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 600 },
    { month: "Apr", sales: 800 },
    { month: "May", sales: 500 },
    { month: "Jun", sales: 900 },
  ];

  // Recent orders with dynamic customer name from session
  
  
  const recentOrders = [
    { 
      id: session?.user?.id || "1", 
      customer: session?.user?.name || "Guest User", 
      membership: session?.user?.membershipId,
      date: "2023-05-01", 
      amount: "$120.00", 
      status: "Completed" 
    },
    { 
      id: "#ORD-002", 
      customer: "Jane Smith", 
      date: "2023-05-02", 
      amount: "$250.00", 
      status: "Processing" 
    },
    { 
      id: "#ORD-003", 
      customer: "Robert Johnson", 
      date: "2023-05-03", 
      amount: "$75.50", 
      status: "Completed" 
    },
    { 
      id: "#ORD-004", 
      customer: "Emily Davis", 
      date: "2023-05-04", 
      amount: "$430.00", 
      status: "Shipped" 
    },
    { 
      id: "#ORD-005", 
      customer: "Michael Wilson", 
      date: "2023-05-05", 
      amount: "$210.00", 
      status: "Completed" 
    },
  ];

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
                <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded">Economies</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">User Profile</h2>
            <ul className="space-y-1">
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Task</a></li>
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Forms</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-100 shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            
            {/* Profile Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer">
                {session?.user?.image ? (
                  <Image 
                    src={session.user.image} 
                    alt="User profile" 
                    width={32} 
                    height={32} 
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-sm text-gray-600">
                      {session?.user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700">
                  {session?.user?.name || 'User'}
                </span>
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Message with User Name */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, {session?.user?.name || 'Admin'}!
            </h1>
            <p className="text-gray-600">Here's what's happening with your business today.</p>
          </div>

          {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="col-span-full">
            <Statistic />
          </div>
        </div>



          {/* Customer Stats and Sales Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Customer Stats */}
            <div className="lg:col-span-1 space-y-6">
              {customerStats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-semibold text-gray-800">{stat.value}</span>
                      {stat.change ? (
                        <span className={`text-sm ${stat.changeColor || "text-gray-500"}`}>
                          {stat.change}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">{stat.target}</span>
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-base_purple h-2 rounded-full" 
                        style={{ width: `${parseFloat(stat.value)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sales Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Monthly Sales</h3>
                <div className="text-sm text-gray-500">5,359 <span className="text-blue-500">4.908%</span></div>
              </div>
              <div className="h-64">
                {/* This would be replaced with an actual chart component */}
                <div className="flex items-end h-48 space-x-1 mt-4">
                  {salesData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-base_purple rounded-t-sm" 
                        style={{ height: `${data.sales / 10}px` }}
                      ></div>
                      <span className="text-xs text-gray-500 mt-1">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
              <p className="text-sm text-gray-500 mt-1">
                Showing orders for {session?.user?.name || 'your account'}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;