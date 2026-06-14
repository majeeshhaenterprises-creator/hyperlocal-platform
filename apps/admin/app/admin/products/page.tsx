"use client";

import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const { products, loading, reload } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-orange-500">
          📦 Products
        </h1>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">
          + Add Product
        </button>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="🔍 Search by product or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
        />
      </div>

      <ProductForm onSaved={reload} />

      {loading ? (
        <div className="mt-8 text-gray-400">
          Loading products...
        </div>
      ) : (
        <ProductTable products={filteredProducts} />
      )}
    </main>
  );
}