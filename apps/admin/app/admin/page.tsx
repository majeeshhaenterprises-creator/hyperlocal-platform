export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-orange-500">
          ⚡ QwikGo Admin
        </h1>

        <div className="text-gray-300">
          Welcome, Founder 👋
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-zinc-800 p-6">
          <ul className="space-y-4 text-lg">
            <li>🏠 Dashboard</li>
            <li>👥 Customers</li>
            <li>🏪 Merchants</li>
            <li>📦 Products</li>
            <li>🛒 Orders</li>
            <li>🛵 Delivery Partners</li>
            <li>⚙️ Settings</li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          <h2 className="text-4xl font-bold">
            Dashboard
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-zinc-900 rounded-xl p-6">
              <p className="text-gray-400">Customers</p>
              <h3 className="text-4xl font-bold mt-2">0</h3>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <p className="text-gray-400">Merchants</p>
              <h3 className="text-4xl font-bold mt-2">0</h3>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <p className="text-gray-400">Orders</p>
              <h3 className="text-4xl font-bold mt-2">0</h3>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <p className="text-gray-400">Delivery Partners</p>
              <h3 className="text-4xl font-bold mt-2">0</h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}