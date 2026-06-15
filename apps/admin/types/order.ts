export interface Order {
  id?: string;
  customer_name: string;
  merchant_name: string;
  total_amount: number;
  status: string;
  delivery_partner: string;
  created_at?: string;
}