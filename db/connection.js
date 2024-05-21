const { Pool } = require('pg');

const pool = new Pool(
    {
        user: 'postgres',
        password: 'bootgres',
        host: 'localhost',
        port: 5432,
        database: 'company_db'
    },
    console.log(`Connected to the company_db`)
)

module.exports = pool;