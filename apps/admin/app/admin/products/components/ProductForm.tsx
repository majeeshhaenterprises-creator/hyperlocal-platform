"use client";

import { useState } from "react";
import { addProduct } from "@/services/productService";

interface Props {
  onSaved?: () => void;
}

export default function ProductForm({ onSaved }: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    try {
      setLoading(true);

      await addProduct({
        name,
        category,
        price: Number(price),
        stock: Number(stock),
        image,
        status: "Active",
      });

      alert("✅ Product saved successfully!");

      setName("");
      setCategory("");
      setPrice("");
      setStock("");
      setImage("");

      onSaved?.();
    } catch (error: any) {
      console.error(error);
      alert(error?.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Add Product
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
        />

        <button
          type="button"
          onClick={handleSave}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold"
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </div>
  );
}