import { supabase } from "../lib/supabase";
import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data as Product[]) || [];
}

export async function addProduct(product: Product) {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  if (error) throw error;

  return data;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateProduct(
  id: string,
  product: Product
) {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}