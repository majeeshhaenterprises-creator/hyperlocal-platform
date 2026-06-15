"use client";

import { useEffect, useState } from "react";
import { updateCustomer } from "@/services/customerService";

type Customer = {
  id?: string;
  full_name: string;
  email: string;
  mobile: string;
  status?: string;
};

interface Props {
  customer: Customer | null;
  onSaved: () => void;
  onCancel: () => void;
}

export default function EditCustomerForm({
  customer,
  onSaved,
  onCancel,
}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!customer) return;

    setFullName(customer.full_name);
    setEmail(customer.email);
    setMobile(customer.mobile);
  }, [customer]);

  async function handleUpdate() {
    if (!customer?.id) return;

    console.log(customer);

try {
      setLoading(true);

      await updateCustomer(customer.id, {
        full_name: fullName,
        email,
        mobile,
        status: customer.status ?? "Active",
      });
      
      console.log(customer);
      
      alert("✅ Customer updated!");

      onSaved();
      onCancel();
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  if (!customer) return null;

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6 border border-orange-500">
      <h2 className="text-2xl font-bold mb-5">
        ✏️ Edit Customer
      </h2>

      <div className="space-y-4">

        <input
          className="w-full p-3 rounded bg-zinc-800"
          value={fullName}
          onChange={(e)=>setFullName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-zinc-800"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-zinc-800"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
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