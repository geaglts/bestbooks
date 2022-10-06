import { DataSource } from 'typeorm';
import 'dotenv/config';

const {
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_ENTITIES,
  TYPEORM_MIGRATIONS,
} = process.env;

export default new DataSource({
  type: 'postgres',
  host: TYPEORM_HOST,
  port: parseInt(TYPEORM_PORT, 10),
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  entities: [TYPEORM_ENTITIES],
  migrations: [TYPEORM_MIGRATIONS],
  synchronize: false,
  logging: true,
});
