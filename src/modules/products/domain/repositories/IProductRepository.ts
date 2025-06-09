import { Variety } from "@products/infra/typeorm/entities/Variety";
import { IProduct } from "../models/IProduct";
import { IVariety } from "../models/IVariety";

export interface IProductRepository {
  getProduct(id: number): Promise<IProduct | null>;
  listProducts(): Promise<IProduct[]>;
  createProduct(product: IProduct): Promise<IProduct | null>
  updateProduct(old_product: IProduct, updated_product: IProduct): Promise<IProduct | null>;
  deleteProduct(product: string | IProduct): Promise<void>;
  getByDescription(description: string): Promise<IProduct | null>;
  getVarieties(id: number): Promise<Variety[] | undefined>
}
