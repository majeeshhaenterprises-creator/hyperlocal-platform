"use client";

import { deleteOrder } from "@/services/orderService";

type Order = {
  id?: string;
  customer_name: string;
  merchant_name: string;
  total_amount: number;
  status: string;
  delivery_partner: string;
};

interface Props {
  orders: Order[];
  onEdit?: (order: Order) => void;
  onDeleted?: () => void;
}

export default function OrderTable({
  orders,
  onEdit,
  onDeleted,
}: Props) {
  async function handleDelete(id: string) {
    const ok = confirm("Delete this order?");

    if (!ok) return;

    try {
      await deleteOrder(id);

      alert("✅ Order deleted successfully!");

      onDeleted?.();
    } catch (error: any) {
      console.error(error);

      alert(error?.message || "Failed to delete order");
    }
  }

  return (
    <div className="mt-8 bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Order List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th className="py-3">Customer</th>
              <th>Merchant</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Delivery Partner</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td className="py-4">No orders yet</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-zinc-800"
                >
                  <td className="py-4">
                    {order.customer_name}
                  </td>

                  <td>{order.merchant_name}</td>

                  <td>₹{order.total_amount}</td>

                  <td>
                    <span className="bg-yellow-600 px-3 py-1 rounded">
                      {order.status}
                    </span>
                  </td>

                  <td>{order.delivery_partner}</td>

                  <td className="space-x-2">
                    <button
                      onClick={() => onEdit?.(order)}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() => {
                        if (order.id) {
                          handleDelete(order.id);
                        }
                      }}
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