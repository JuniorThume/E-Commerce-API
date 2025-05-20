import { Product } from '../modules/products/infra/typeorm/entities/Product';
import { Variety } from '../modules/products/infra/typeorm/entities/Variety';
import { CreateProduct1747359270854 } from '../shared/typeorm/migrations/1747359270854-CreateProduct';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import env from './env';

export const dataSource = new DataSource({
  type: 'postgres',
  database: 'eCommerce-project',
  host: 'localhost',
  port: 5432,
  username: env.USER_DB,
  password: env.USER_DB_PASSWORD,
  synchronize: false,
  logging: false,
  entities: ['src/**/entities/*.ts'],
  migrations: [CreateProduct1747359270854]

});
