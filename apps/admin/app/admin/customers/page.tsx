"use client";

import CustomerForm from "./components/CustomerForm";

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-orange-500">
          👥 Customers
        </h1>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">
          + Add Customer
        </button>
      </div>

      <CustomerForm />

      <div className="mt-8 bg-zinc-900 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Customer List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-zinc-700">
                <th className="py-3">Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="py-4">No customers yet</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <span className="bg-green-600 px-3 py-1 rounded">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}