"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (
      email === "admin@qwikgo.com" &&
      password === "admin123"
    ) {
      document.cookie =
  "admin_logged_in=true; path=/";

      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-orange-500">
          Admin Login
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
}