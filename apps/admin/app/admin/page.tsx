export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-orange-500">
        QwikGo Admin
      </h1>

      <p className="mt-3 text-gray-400">
        Welcome Founder 👋
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-gray-400">Customers</h2>
          <h1 className="text-4xl font-bold mt-2">0</h1>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-gray-400">Merchants</h2>
          <h1 className="text-4xl font-bold mt-2">0</h1>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-gray-400">Delivery Partners</h2>
          <h1 className="text-4xl font-bold mt-2">0</h1>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-gray-400">Orders</h2>
          <h1 className="text-4xl font-bold mt-2">0</h1>
        </div>

      </div>
    </main>
  );
}