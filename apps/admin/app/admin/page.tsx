"use client";

import { useDashboard } from "@/hooks/useDashboard";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const { stats, loading } = useDashboard();

function handleLogout() {
  document.cookie =
    "admin_logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  router.push("/auth/login");
}
  
  return (
    <main className="min-h-screen bg-black text-white">
      

      <div className="flex">
       

        <section className="flex-1 p-8">
          <h2 className="text-4xl font-bold">
            Dashboard
          </h2>

          {loading ? (
            <div className="mt-8 text-gray-400">
              Loading dashboard...
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-zinc-900 rounded-xl p-6">
                <p className="text-gray-400">Customers</p>
                <h3 className="text-4xl font-bold mt-2">
                  {stats.customers}
                </h3>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <p className="text-gray-400">Merchants</p>
                <h3 className="text-4xl font-bold mt-2">
                  {stats.merchants}
                </h3>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <p className="text-gray-400">Products</p>
                <h3 className="text-4xl font-bold mt-2">
                  {stats.products}
                </h3>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <p className="text-gray-400">Orders</p>
                <h3 className="text-4xl font-bold mt-2">
                  {stats.orders}
                </h3>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}