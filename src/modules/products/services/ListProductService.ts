import 'reflect-metadata';
import { IProductRepository } from "@products/domain/repositories/IProductRepository";
import { Product } from "@products/infra/typeorm/entities/Product";
import { inject, injectable } from "tsyringe";

@injectable()
class ListProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) { }
  
  public async execute(): Promise<Product[]> {
    const products = await this.productRepository.listProducts();
    return products;
  };

}

export default ListProductService;
