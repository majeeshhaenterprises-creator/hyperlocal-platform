import { supabase } from "../lib/supabase";
import { Order } from "../types/order";

export async function getOrders(): Promise<Order[]> {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data as Order[]) || [];
}

export async function addOrder(order: Order) {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select();

  if (error) throw error;

  return data;
}

export async function deleteOrder(id: string) {
  const { error } = await supabase
    .from("orders")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateOrder(
  id: string,
  order: Partial<Order>
) {
  const { data, error } = await supabase
    .from("orders")
    .update(order)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}