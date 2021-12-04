const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dreams',
  password: process.env.postgresPassword,
  port: 5432,
});

module.exports = pool;