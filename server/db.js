
const { Pool } = require('pg');

const credentials = {
    
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
  
};

const pool = new Pool(credentials);

module.exports = pool;