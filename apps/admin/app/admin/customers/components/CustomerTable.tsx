import { deleteCustomer } from "@/services/customerService";

type Customer = {
  id?: string;
  full_name: string;
  email: string;
  mobile: string;
  status?: string;
};

interface Props {
  customers: Customer[];
}

export default function CustomerTable({ customers }: Props) {
  async function handleDelete(id: string) {
    const ok = confirm("Delete this customer?");

    if (!ok) return;

    try {
      await deleteCustomer(id);
      alert("✅ Customer deleted successfully!");
      window.location.reload();
    } catch (error: any) {
      console.error(error);
      alert(error?.message || "Failed to delete customer");
    }
  }

  return (
    <div className="mt-8 bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Customer List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td className="py-4">No customers yet</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ) : (
              customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-zinc-800"
                >
                  <td className="py-4">
                    {customer.full_name}
                  </td>

                  <td>{customer.email}</td>

                  <td>{customer.mobile}</td>

                  <td>
                    <span className="bg-green-600 px-3 py-1 rounded">
                      {customer.status ?? "Active"}
                    </span>
                  </td>

                  <td className="space-x-2">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() => handleDelete(customer.id!)}
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