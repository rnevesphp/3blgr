const { Pool } = require('pg');

const pool = new Pool(
    {
        user: "postgres",
        host: "localhost",
        database: "canoa_web_stock",
        password: "1234",
        port: 5432
    }
)

module.exports = { pool };