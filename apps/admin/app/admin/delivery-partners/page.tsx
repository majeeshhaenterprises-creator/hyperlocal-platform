"use client";

import { useState } from "react";
import DeliveryPartnerForm from "./components/DeliveryPartnerForm";
import DeliveryPartnerTable from "./components/DeliveryPartnerTable";
import { useDeliveryPartners } from "@/hooks/useDeliveryPartners";
import EditDeliveryPartnerForm from "./components/EditDeliveryPartnerForm";

export default function DeliveryPartnersPage() {
  const {
    deliveryPartners,
    loading,
    reload,
  } = useDeliveryPartners();

  const [search, setSearch] = useState("");
  
  const [editingPartner, setEditingPartner] = useState<any>(null);

  const filteredPartners = deliveryPartners.filter(
    (partner) =>
      partner.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      partner.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      partner.mobile.includes(search)
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-orange-500">
        🛵 Delivery Partners
      </h1>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search partner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
        />
      </div>

      <DeliveryPartnerForm onSaved={reload} />
      {editingPartner && (
  <EditDeliveryPartnerForm
    partner={editingPartner}
    onSaved={reload}
    onCancel={() => setEditingPartner(null)}
  />
)}

      {loading ? (
        <div className="mt-8">
          Loading...
        </div>
      ) : (
        <DeliveryPartnerTable
  deliveryPartners={filteredPartners}
  onDeleted={reload}
  onEdit={(partner) => {
    setEditingPartner(partner);
  }}
/>

      )}
    </main>
  );
}