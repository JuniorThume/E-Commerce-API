export interface IVariety {
  product_id: number;
  color: string;
  price: number;
  available_sizes: string[];
  on_sale: boolean;
  sale_price: number | null;
  stock: number;
  // stock_alert: number;
  // stock_alert_enabled: boolean;
  created_at: Date;
  updated_at: Date;
}
