"use client";

import { useState } from "react";
import { addDeliveryPartner } from "@/services/deliveryPartnerService";

interface Props {
  onSaved?: () => void;
}

export default function DeliveryPartnerForm({
  onSaved,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    try {
      setLoading(true);

      await addDeliveryPartner({
        name,
        email,
        mobile,
        vehicle_type: vehicleType,
        status: "Active",
      });

      alert("✅ Delivery Partner saved!");

      setName("");
      setEmail("");
      setMobile("");
      setVehicleType("");

      onSaved?.();
    } catch (error: any) {
      alert(error?.message || "Failed to save");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Add Delivery Partner
      </h2>

      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Partner Name"
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
        />

        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
        />

        <input
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          placeholder="Vehicle Type"
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
        />

        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold"
        >
          {loading ? "Saving..." : "Save Partner"}
        </button>
      </div>
    </div>
  );
}