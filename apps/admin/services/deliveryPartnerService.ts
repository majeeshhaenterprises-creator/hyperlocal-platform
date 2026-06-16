import { supabase } from "../lib/supabase";
import { DeliveryPartner } from "../types/deliveryPartner";

export async function getDeliveryPartners(): Promise<DeliveryPartner[]> {
  const { data, error } = await supabase
    .from("delivery_partners")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data as DeliveryPartner[]) || [];
}

export async function addDeliveryPartner(
  partner: DeliveryPartner
) {
  const { data, error } = await supabase
    .from("delivery_partners")
    .insert([partner])
    .select();

  if (error) throw error;

  return data;
}

export async function deleteDeliveryPartner(id: string) {
  const { error } = await supabase
    .from("delivery_partners")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateDeliveryPartner(
  id: string,
  partner: Partial<DeliveryPartner>
) {
  const { data, error } = await supabase
    .from("delivery_partners")
    .update(partner)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}