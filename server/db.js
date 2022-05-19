require("dotenv").config();
const { Pool } = require('pg');

const credentials = {
    
  user: process.env.REACT_APP_PGUSER,
  host: process.env.REACT_APP_PGHOST,
  database: process.env.REACT_APP_PGDATABASE,
  password: process.env.REACT_APP_PGPASSWORD,
  port: process.env.REACT_APP_PGPORT
  
};

const pool = new Pool(credentials);

module.exports = pool;