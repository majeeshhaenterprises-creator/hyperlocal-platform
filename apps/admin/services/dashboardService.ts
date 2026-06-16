import { supabase } from "../lib/supabase";

export async function getDashboardStats() {
  const [
    customers,
    merchants,
    products,
    orders,
  ] = await Promise.all([
    supabase
      .from("customers")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("merchants")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("products")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("orders")
      .select("*", {
        count: "exact",
        head: true,
      }),
  ]);

  return {
    customers: customers.count ?? 0,
    merchants: merchants.count ?? 0,
    products: products.count ?? 0,
    orders: orders.count ?? 0,
  };
}