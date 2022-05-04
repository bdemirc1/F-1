"use strict";

const { Pool } = require('pg');
const { DB } = require('../config');

const pool = new Pool();

pool.query('SELECT * from results limit 10', (err, res) => {
  console.log(err, res)
  pool.end()
})




module.exports = {
  query: (text, params) => pool.query(text, params)
}