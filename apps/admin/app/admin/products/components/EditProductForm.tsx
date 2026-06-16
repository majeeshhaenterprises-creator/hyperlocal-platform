"use client";

import { useEffect, useState } from "react";
import { updateProduct } from "@/services/productService";
import { Product } from "@/types/product";

interface Props {
  product: Product;
  onSaved: () => void;
  onCancel: () => void;
}

export default function EditProductForm({
  product,
  onSaved,
  onCancel,
}: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(product.name);
    setCategory(product.category);
    setPrice(String(product.price));
    setStock(String(product.stock));
    setImage(product.image);
  }, [product]);

  async function handleUpdate() {
    if (!product.id) return;

    try {
      setLoading(true);

      await updateProduct(product.id, {
        ...product,
        name,
        category,
        price: Number(price),
        stock: Number(stock),
        image,
      });

      alert("✅ Product updated successfully!");

      onSaved();
      onCancel();
    } catch (error: any) {
      alert(error?.message || "Failed to update product");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 mt-6 border border-orange-500">
      <h2 className="text-2xl font-bold mb-4">
        ✏️ Edit Product
      </h2>

      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Product Name"
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Category"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Price"
        />

        <input
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Stock"
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Image URL"
        />

        <div className="flex gap-3">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold"
          >
            {loading ? "Updating..." : "Update Product"}
          </button>

          <button
            onClick={onCancel}
            className="bg-zinc-700 px-5 py-3 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}