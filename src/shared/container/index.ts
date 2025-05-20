import { IProductRepository } from '@products/domain/repositories/IProductRepository';
import { ProductRepository } from '@products/infra/typeorm/repositories/ProductRepository';
import { container } from 'tsyringe';

container.registerSingleton<IProductRepository>('ProductRepository', ProductRepository)
