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
            </tr>
          </thead>

          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td className="py-4">No customers yet</td>
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}