import 'dotenv/config';
import { z } from 'zod';

const env = z.object({
  SERVER_PORT: z.coerce.number().default(3000),
  USER_DB: z.string(),
  USER_DB_PASSWORD: z.string()
}).parse(process.env);

export default env;
