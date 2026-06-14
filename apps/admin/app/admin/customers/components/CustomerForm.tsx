"use client";

import { useState } from "react";
import { addCustomer } from "@/services/customerService";

interface Props {
  onSaved?: () => void;
}

export default function CustomerForm({ onSaved }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
  try {
    setLoading(true);

    await addCustomer({
      full_name: fullName,
      email,
      mobile,
      status: "Active",
    });
    onSaved?.();
    alert("✅ Customer saved successfully!");

    setFullName("");
    setEmail("");
    setMobile("");
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
        Add Customer
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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

        <button
          type="button"
          onClick={handleSave}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold"
        >
          {loading ? "Saving..." : "Save Customer"}
        </button>
      </div>
    </div>
  );
}