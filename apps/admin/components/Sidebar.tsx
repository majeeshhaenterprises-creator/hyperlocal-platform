const menuItems = [
  "🏠 Dashboard",
  "👥 Customers",
  "🏪 Merchants",
  "📦 Products",
  "🛒 Orders",
  "🛵 Delivery Partners",
  "⚙️ Settings",
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h2 className="text-2xl font-bold text-orange-500 mb-8">
        ⚡ QwikGo
      </h2>

      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer rounded-lg p-3 hover:bg-zinc-800 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}