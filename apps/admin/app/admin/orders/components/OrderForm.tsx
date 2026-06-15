"use client";

import { useState } from "react";
import { addOrder } from "@/services/orderService";

interface Props {
  onSaved?: () => void;
}

export default function OrderForm({ onSaved }: Props) {
  const [customerName, setCustomerName] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [deliveryPartner, setDeliveryPartner] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    try {
      setLoading(true);

      await addOrder({
        customer_name: customerName,
        merchant_name: merchantName,
        total_amount: Number(totalAmount),
        status: "Pending",
        delivery_partner: deliveryPartner,
      });

      alert("✅ Order created successfully!");

      setCustomerName("");
      setMerchantName("");
      setTotalAmount("");
      setDeliveryPartner("");

      onSaved?.();
    } catch (error: any) {
      console.error(error);
      alert(error?.message || "Failed to create order");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Create Order
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Merchant Name"
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Total Amount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Delivery Partner"
          value={deliveryPartner}
          onChange={(e) => setDeliveryPartner(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <button
          type="button"
          onClick={handleSave}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold"
        >
          {loading ? "Creating..." : "Create Order"}
        </button>
      </div>
    </div>
  );
}