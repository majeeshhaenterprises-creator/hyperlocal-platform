"use client";

import { useEffect, useState } from "react";
import { updateDeliveryPartner } from "@/services/deliveryPartnerService";

interface Props {
  partner: any;
  onSaved: () => void;
  onCancel: () => void;
}

export default function EditDeliveryPartnerForm({
  partner,
  onSaved,
  onCancel,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!partner) return;

    setName(partner.name);
    setEmail(partner.email);
    setMobile(partner.mobile);
    setVehicleType(partner.vehicle_type);
  }, [partner]);

  async function handleUpdate() {
    if (!partner?.id) return;

    try {
      setLoading(true);

      await updateDeliveryPartner(partner.id, {
        name,
        email,
        mobile,
        vehicle_type: vehicleType,
      });

      alert("✅ Delivery Partner updated successfully!");

      onSaved();
      onCancel();
    } catch (error: any) {
      alert(
        error?.message ||
          "Failed to update delivery partner"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6 border border-orange-500">
      <h2 className="text-2xl font-bold mb-4">
        ✏️ Edit Delivery Partner
      </h2>

      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile"
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          placeholder="Vehicle Type"
          className="w-full p-3 rounded bg-zinc-800"
        />

        <div className="flex gap-3">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-orange-500 px-5 py-3 rounded"
          >
            {loading ? "Updating..." : "Update"}
          </button>

          <button
            onClick={onCancel}
            className="bg-zinc-700 px-5 py-3 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}