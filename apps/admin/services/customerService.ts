import { supabase } from "../lib/supabase";
import { Customer } from "../types/customer";

export async function getCustomers() {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data as Customer[];
}

export async function addCustomer(customer: Customer) {
  const { data, error } = await supabase
    .from("customers")
    .insert([customer])
    .select();

  if (error) throw error;

  return data;
}