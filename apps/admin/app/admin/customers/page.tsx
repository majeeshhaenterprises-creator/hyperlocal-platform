"use client";

import { useState } from "react";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";
import { useCustomers } from "@/hooks/useCustomers";
import EditCustomerForm from "./components/EditCustomerForm";

export default function CustomersPage() {
  const { customers, loading, reload } = useCustomers();

  const [search, setSearch] = useState("");

  const [editingCustomer, setEditingCustomer] = useState<any>(null);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.full_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.mobile.includes(search)
  );

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

      <div className="mt-6">
        <input
          type="text"
          placeholder="🔍 Search by name, email or mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
        />
      </div>

      <CustomerForm onSaved={reload} />

      {editingCustomer && (
  <EditCustomerForm
    customer={editingCustomer}
    onSaved={reload}
    onCancel={() => setEditingCustomer(null)}
  />
)}

      {loading ? (
        <div className="mt-8 text-gray-400">
          Loading customers...
        </div>
      ) : (
        <CustomerTable
  customers={filteredCustomers}
  onDeleted={reload}
  onEdit={(customer) => {
    console.log("Editing:", customer);
    setEditingCustomer(customer);
  }}
/>
      )}
    </main>
  );
}