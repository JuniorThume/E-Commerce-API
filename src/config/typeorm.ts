import { DataSource } from 'typeorm';
import env from './env';

const appDataSource = new DataSource({
  type: 'postgres',
  database: 'eCommerce-project',
  host: 'postgres',
  port: 5432,
  username: env.USER_DB,
  password: env.USER_DB_PASSWORD,
  synchronize: false,
  logging: false,
  entities: [],
  migrations: []

})

export default appDataSource;
