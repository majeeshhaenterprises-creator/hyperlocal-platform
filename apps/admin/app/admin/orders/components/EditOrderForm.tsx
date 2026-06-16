"use client";

import { useEffect, useState } from "react";
import { updateOrder } from "@/services/orderService";
import { Order } from "@/types/order";

interface Props {
  order: Order;
  onSaved: () => void;
  onCancel: () => void;
}

export default function EditOrderForm({
  order,
  onSaved,
  onCancel,
}: Props) {
  const [customerName, setCustomerName] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [status, setStatus] = useState("");
  const [deliveryPartner, setDeliveryPartner] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCustomerName(order.customer_name);
    setMerchantName(order.merchant_name);
    setTotalAmount(String(order.total_amount));
    setStatus(order.status);
    setDeliveryPartner(order.delivery_partner);
  }, [order]);

  async function handleUpdate() {
    if (!order.id) return;

    try {
      setLoading(true);

      await updateOrder(order.id, {
        customer_name: customerName,
        merchant_name: merchantName,
        total_amount: Number(totalAmount),
        status,
        delivery_partner: deliveryPartner,
      });

      alert("✅ Order updated successfully!");

      onSaved();
      onCancel();
    } catch (error: any) {
      alert(error?.message || "Failed to update order");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6 border border-orange-500">
      <h2 className="text-2xl font-bold mb-4">
        ✏️ Edit Order
      </h2>

      <div className="space-y-4">
        <input
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Customer Name"
        />

        <input
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Merchant Name"
        />

        <input
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Total Amount"
        />

        <input
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Status"
        />

        <input
          value={deliveryPartner}
          onChange={(e) => setDeliveryPartner(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Delivery Partner"
        />

        <div className="flex gap-3">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold"
          >
            {loading ? "Updating..." : "Update Order"}
          </button>

          <button
            onClick={onCancel}
            className="bg-zinc-700 px-5 py-3 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}