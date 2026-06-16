"use client";

import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-orange-500">
          ⚡ QwikGo Admin
        </h1>

        <div className="text-gray-300">
          Founder Panel 🚀
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 min-h-screen border-r border-zinc-800 p-6">
          <ul className="space-y-4 text-lg">

            <li>
              <Link href="/admin">
                🏠 Dashboard
              </Link>
            </li>

            <li>
              <Link href="/admin/customers">
                👥 Customers
              </Link>
            </li>

            <li>
              <Link href="/admin/merchants">
                🏪 Merchants
              </Link>
            </li>

            <li>
              <Link href="/admin/products">
                📦 Products
              </Link>
            </li>

            <li>
              <Link href="/admin/orders">
                🛒 Orders
              </Link>
            </li>

            <li>
              <Link href="/admin/delivery-partners">
                🛵 Delivery Partners
              </Link>
            </li>

            <li>
              <Link href="/auth/login">
                🔐 Logout
              </Link>
            </li>

          </ul>
        </aside>

        <section className="flex-1">
          {children}
        </section>
      </div>
    </main>
  );
}