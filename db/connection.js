const { Pool } = require('pg');

const pool = new Pool(
    {
        user: 'postgres',
        password: 'bootgres',
        database: 'company_db'
    },
    console.log(`Connected to the company_db`)
)

module.exports = pool;