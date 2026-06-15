import { supabase } from "../lib/supabase";
import { Customer } from "../types/customer";

export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data as Customer[]) || [];
}

export async function addCustomer(customer: Customer) {
  const { data, error } = await supabase
    .from("customers")
    .insert([customer])
    .select();

  if (error) throw error;

  return data;
}

export async function deleteCustomer(id: string) {
  const { error } = await supabase
    .from("customers")
    .delete()
    .eq("id", id);

  if (error) throw error;
}
export async function updateCustomer(
  id: string,
  customer: {
    full_name: string;
    email: string;
    mobile: string;
    status?: string;
  }
) {
  console.log("Updating ID:", id);
  console.log("Updating Data:", customer);

  const { data, error } = await supabase
    .from("customers")
    .update(customer)
    .eq("id", id)
    .select();

  console.log("Supabase Data:", data);
  console.log("Supabase Error:", error);

  if (error) throw error;

  return data;
}