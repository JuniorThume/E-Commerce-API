import 'dotenv/config';
import { z } from 'zod';

const env = z.object({
  SERVER_PORT: z.coerce.number().default(3000),
}).parse(process.env);

export default env;
