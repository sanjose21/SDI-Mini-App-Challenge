import { Pool } from 'pg';

const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
