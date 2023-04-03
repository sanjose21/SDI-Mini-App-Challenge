module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'sanjose',
            password: 'sanjose21',
            database: 'mini'
        },
        migrations: {
            directory: './src/migrations'
        },
        seeds: {
            directory: './src/seeds'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './src/migrations'
        },
        seeds: {
            directory: './src/seeds'
        }
    }
};
