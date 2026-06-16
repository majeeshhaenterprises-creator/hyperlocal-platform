"use client";

import { deleteProduct } from "@/services/productService";

type Product = {
  id?: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  status?: string;
};

interface Props {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDeleted?: () => void;
}

export default function ProductTable({
  products,
  onEdit,
  onDeleted,
}: Props) {
  async function handleDelete(id: string) {
    const ok = confirm("Delete this product?");

    if (!ok) return;

    try {
      await deleteProduct(id);

      alert("✅ Product deleted successfully!");

      onDeleted?.();
    } catch (error: any) {
      console.error(error);

      alert(error?.message || "Failed to delete product");
    }
  }

  return (
    <div className="mt-8 bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Product List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th className="py-3">Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td className="py-4">No products yet</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-zinc-800"
                >
                  <td className="py-4">
                    {product.name}
                  </td>

                  <td>{product.category}</td>

                  <td>₹{product.price}</td>

                  <td>{product.stock}</td>

                  <td>
                    <span className="bg-green-600 px-3 py-1 rounded">
                      {product.status ?? "Active"}
                    </span>
                  </td>

                  <td className="space-x-2">
                    <button
                      onClick={() => onEdit?.(product)}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() => {
                        if (product.id) {
                          handleDelete(product.id);
                        }
                      }}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}