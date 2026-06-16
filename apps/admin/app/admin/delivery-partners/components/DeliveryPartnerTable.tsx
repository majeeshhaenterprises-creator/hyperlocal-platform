"use client";

import { deleteDeliveryPartner } from "@/services/deliveryPartnerService";

type DeliveryPartner = {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  vehicle_type: string;
  status?: string;
};

interface Props {
  deliveryPartners: DeliveryPartner[];
  onEdit?: (partner: DeliveryPartner) => void;
  onDeleted?: () => void;
}


export default function DeliveryPartnerTable({
  deliveryPartners,
  onEdit,
  onDeleted,
}: Props) {
  async function handleDelete(id: string) {
    const ok = confirm("Delete this delivery partner?");

    if (!ok) return;

    try {
      await deleteDeliveryPartner(id);

      alert("✅ Delivery Partner deleted!");

      onDeleted?.();
    } catch (error: any) {
      alert(error?.message || "Delete failed");
    }
  }

  return (
    <div className="mt-8 bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Delivery Partner List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Vehicle</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {deliveryPartners.length === 0 ? (
              <tr>
                <td className="py-4">No partners yet</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ) : (
              deliveryPartners.map((partner) => (
                <tr
                  key={partner.id}
                  className="border-b border-zinc-800"
                >
                  <td className="py-4">{partner.name}</td>
                  <td>{partner.email}</td>
                  <td>{partner.mobile}</td>
                  <td>{partner.vehicle_type}</td>

                  <td>
                    <span className="bg-green-600 px-3 py-1 rounded">
                      {partner.status ?? "Active"}
                    </span>
                  </td>

                  <td className="space-x-2">

  <button
    onClick={() => onEdit?.(partner)}
    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
  >
    ✏️
  </button>

  <button
    onClick={() =>
      partner.id &&
      handleDelete(partner.id)
    }
    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
  >
    🗑
  </button>

</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}