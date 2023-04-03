const { Pool } = require('pg')

const pool = new Pool({
    user: 'proyecto',
    host: 'localhost',
    database: 'proyecto',
    password: 'maximiliano',
    port: 5432,
})

module.exports = pool;