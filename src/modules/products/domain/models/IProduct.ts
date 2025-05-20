import { Variety } from "@products/infra/typeorm/entities/Variety";

export interface IProduct {
  id: number;
  description: string;
  category: string;
  varieties: Variety[];
  created_at: Date;
  updated_at: Date;
};
