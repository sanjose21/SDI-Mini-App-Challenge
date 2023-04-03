import { knex } from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'sanjose',
    password: process.env.DB_PASSWORD || 'sanjose21',
    database: process.env.DB_NAME || 'mini',
  },
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
  },
});

module.exports = db;