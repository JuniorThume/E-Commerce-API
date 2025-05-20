import { IProduct } from "../models/IProduct";

export interface IProductRepository {
  getProduct(id: number): Promise<IProduct | null>;
  listProducts(): Promise<IProduct[]>;
  createProduct(product: IProduct): Promise<IProduct | null>
  updateProduct(old_product: IProduct, updated_product: IProduct): Promise<IProduct | null>;
  deleteProduct(product: string | IProduct): Promise<void>;
}
