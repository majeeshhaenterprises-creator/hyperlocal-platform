"use client";

import { useState } from "react";
import { addMerchant } from "@/services/merchantService";

interface Props {
  onSaved?: () => void;
}

export default function MerchantForm({ onSaved }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    try {
      setLoading(true);

      await addMerchant({
        name,
        email,
        mobile,
        address,
        status: "Active",
      });

      alert("✅ Merchant saved successfully!");

      setName("");
      setEmail("");
      setMobile("");
      setAddress("");

      onSaved?.();
    } catch (error: any) {
      console.error(error);
      alert(error?.message || JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Add Merchant
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Merchant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <button
          type="button"
          onClick={handleSave}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold"
        >
          {loading ? "Saving..." : "Save Merchant"}
        </button>
      </div>
    </div>
  );
}