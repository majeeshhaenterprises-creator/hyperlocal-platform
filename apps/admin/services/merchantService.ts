import { supabase } from "../lib/supabase";
import { Merchant } from "../types/merchant";

export async function getMerchants(): Promise<Merchant[]> {
  const { data, error } = await supabase
    .from("merchants")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data as Merchant[]) || [];
}

export async function addMerchant(merchant: Merchant) {
  const { data, error } = await supabase
    .from("merchants")
    .insert([merchant])
    .select();

  if (error) throw error;

  return data;
}

export async function deleteMerchant(id: string) {
  const { error } = await supabase
    .from("merchants")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateMerchant(
  id: string,
  merchant: Merchant
) {
  const { data, error } = await supabase
    .from("merchants")
    .update(merchant)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}