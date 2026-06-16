"use client";

import { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderTable from "./components/OrderTable";
import EditOrderForm from "./components/EditOrderForm";
import { useOrders } from "@/hooks/useOrders";

export default function OrdersPage() {
  const { orders, loading, reload } = useOrders();

  const [search, setSearch] = useState("");
  const [editingOrder, setEditingOrder] = useState<any>(null);

  const filteredOrders = orders.filter(
    (order) =>
      order.customer_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.merchant_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.delivery_partner
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-orange-500">
          🛒 Orders
        </h1>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">
          + Create Order
        </button>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="🔍 Search by customer, merchant or delivery partner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
        />
      </div>

      <OrderForm onSaved={reload} />

      {editingOrder && (
        <EditOrderForm
          order={editingOrder}
          onSaved={reload}
          onCancel={() => setEditingOrder(null)}
        />
      )}

      {loading ? (
        <div className="mt-8 text-gray-400">
          Loading orders...
        </div>
      ) : (
        <OrderTable
          orders={filteredOrders}
          onDeleted={reload}
          onEdit={(order) => {
            setEditingOrder(order);
          }}
        />
      )}
    </main>
  );
}