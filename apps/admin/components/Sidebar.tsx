"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-10">
        ⚡ QwikGo
      </h1>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg p-3 transition ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:bg-zinc-800"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}