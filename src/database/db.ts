import pg from 'pg';
import { DATABASE_URL } from '../configs/constants.js';

const { Pool } = pg;

const connectionDB = new Pool ({
  connectionString: DATABASE_URL
});

export { connectionDB };