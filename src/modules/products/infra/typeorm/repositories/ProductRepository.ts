import 'reflect-metadata';
import { IProduct } from "@products/domain/models/IProduct";
import { IProductRepository } from "@products/domain/repositories/IProductRepository";
import { Repository } from "typeorm";
import { Product } from "../entities/Product";
import { dataSource } from "@config/typeorm";
import { IVariety } from '@products/domain/models/IVariety';
import { Variety } from '../entities/Variety';

export class ProductRepository implements IProductRepository {
  protected ormRepository: Repository<Product>;
  constructor() {
    this.ormRepository = dataSource.getRepository(Product);
  }
  async getProduct(id: number): Promise<IProduct | null> {
    const product = await this.ormRepository.findOne({
      where: { id }
    })
    return product;
  }

  async listProducts(): Promise<IProduct[]> {
    const products = await this.ormRepository.find({
      relations: ['varieties']
    });
    return products;
  }

  async createProduct(product: IProduct): Promise<IProduct | null> {
    const created_product = this.ormRepository.create(product);
    
    const persistent_product = await this.ormRepository.save(created_product);

    return persistent_product;
  }

  async updateProduct(old_product: IProduct, updated_product: IProduct): Promise<IProduct | null> {
    const persistent_product = await this.ormRepository.update({ 
      id: old_product.id
    }, updated_product)

    return persistent_product.raw;
  }

  async deleteProduct(product: IProduct): Promise<void> {
    await this.ormRepository.delete({ id: product.id })

    return;
  }

  async getByDescription(description: string): Promise<IProduct | null> {
    const result = await this.ormRepository.findOne({
      where: { description }
    });

    return result;
  }

  async getVarieties(id: number): Promise<Variety[] | undefined> {
    const result = await this.ormRepository.findOne({
      where: { id },
      relations: ['varieties']
    });

    return result?.varieties;
  }
}
