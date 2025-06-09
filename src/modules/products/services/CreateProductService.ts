import { IProduct } from "@products/domain/models/IProduct";
import { IProductRepository } from "@products/domain/repositories/IProductRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(product: IProduct): Promise<IProduct | null> {
    const product_exist = await this.productRepository.getByDescription(product.description);

    if (product_exist) {
      throw new Error('Product already exists.');
    }

    const created_product = await this.productRepository.createProduct(product);
    
    return created_product;
  }
}
