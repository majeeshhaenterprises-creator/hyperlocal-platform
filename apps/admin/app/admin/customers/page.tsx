"use client";

import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";
import { useCustomers } from "@/hooks/useCustomers";

export default function CustomersPage() {
  const { customers, loading } = useCustomers();

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

      {loading ? (
        <div className="mt-8 text-gray-400">
          Loading customers...
        </div>
      ) : (
        <CustomerTable customers={customers} />
      )}
    </main>
  );
}