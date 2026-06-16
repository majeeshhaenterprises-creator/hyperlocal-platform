"use client";

import { useState } from "react";
import MerchantForm from "./components/MerchantForm";
import MerchantTable from "./components/MerchantTable";
import { useMerchants } from "@/hooks/useMerchants";
import EditMerchantForm from "./components/EditMerchantForm";



export default function MerchantsPage() {
  const { merchants, loading, reload } = useMerchants();

  const [search, setSearch] = useState("");

  const [editingMerchant, setEditingMerchant] = useState<any>(null);

  const filteredMerchants = merchants.filter(
    (merchant) =>
      merchant.name.toLowerCase().includes(search.toLowerCase()) ||
      merchant.email.toLowerCase().includes(search.toLowerCase()) ||
      merchant.mobile.includes(search)
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-orange-500">
          🏪 Merchants
        </h1>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">
          + Add Merchant
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

      <MerchantForm onSaved={reload} />

{editingMerchant && (
  <EditMerchantForm
    merchant={editingMerchant}
    onSaved={reload}
    onCancel={() => setEditingMerchant(null)}
  />
)}

      {editingMerchant && (
  <div className="mt-6 rounded-xl border border-orange-500 bg-zinc-900 p-6">
    <h2 className="text-2xl font-bold">
      ✏️ Edit Merchant
    </h2>

    <div className="mt-3 text-gray-300">
      {editingMerchant.name}
    </div>

    <button
      onClick={() => setEditingMerchant(null)}
      className="mt-4 rounded bg-zinc-700 px-4 py-2"
    >
      Cancel
    </button>
  </div>
)}

      {loading ? (
        <div className="mt-8 text-gray-400">
          Loading merchants...
        </div>
      ) : (
        <MerchantTable
  merchants={filteredMerchants}
  onDeleted={reload}
  onEdit={(merchant) => {
  setEditingMerchant(merchant);
}}
/>
      )}
    </main>
  );
}