const { Client } = require('pg');
require('dotenv').config()

const credentials = {
    
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
    
};
console.log(credentials);

const stat = 'SELECT * FROM results limit 2';
    

    const db = new Client(credentials);

    db
    .connect()
    .then(() => console.log('connected'))
    .catch(err => console.error('connection error', err.stack))

    db.query(stat, (err,res) => {
        console.log(err, res);
        db.end()
    });

