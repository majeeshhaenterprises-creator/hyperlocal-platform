type Merchant = {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  address: string;
  status?: string;
};

interface Props {
  merchants: Merchant[];
}

export default function MerchantTable({
  merchants,
}: Props) {
  return (
    <div className="mt-8 bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Merchant List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {merchants.length === 0 ? (
              <tr>
                <td className="py-4">No merchants yet</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ) : (
              merchants.map((merchant) => (
                <tr
                  key={merchant.id}
                  className="border-b border-zinc-800"
                >
                  <td className="py-4">
                    {merchant.name}
                  </td>

                  <td>{merchant.email}</td>

                  <td>{merchant.mobile}</td>

                  <td>{merchant.address}</td>

                  <td>
                    <span className="bg-green-600 px-3 py-1 rounded">
                      {merchant.status ?? "Active"}
                    </span>
                  </td>

                  <td className="space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                      ✏️
                    </button>

                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
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