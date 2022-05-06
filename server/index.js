const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//Middleware
app.use(cors());
app.use(express.json());


//Routes

app.get('/races', async(req, res) => {
    try{
        const allRaces = await pool.query("SELECT * from races limit 5");
        res.json(allRaces.rows);

    }catch(err){
        console.error(err.message);
    }
});

app.get('/races/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const race = await pool.query("SELECT * from races WHERE raceid = $1", [id]);
        res.json(race.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});

app.get('/constructors', async(req, res) => {
    try{
        const allCons = await pool.query("SELECT * from constructors limit 20");
        res.json(allCons.rows);

    }catch(err){
        console.error(err.message);
    }
});

app.get('/top_constructor', async(req, res) => {
    try{
        const topCons = await pool.query("select constructors.name, position from constructor_standings, constructors\
                                            where constructor_standings.constructorid = constructors.constructorid and\
                                             constructor_standings.raceid = 1067\
                                            order by constructor_standings.position limit 1;");
        res.json(topCons.rows);

    }catch(err){
        console.error(err.message);
    }
})

app.get('/top_driver', async(req, res) => {
    try{
        const topDriver = await pool.query("select drivers.forename, drivers.surname, position from driver_standings, drivers\
                                where driver_standings.driverid = drivers.driverid and\
                                driver_standings.raceid = 1067\
                                order by driver_standings.position limit 1;");
        res.json(topDriver.rows);

    }catch(err){
        console.error(err.message);
    }
})


app.get('/drivers', async(req, res) => {
    try{
        const allDrivers = await pool.query("SELECT * from constructors limit 25");
        res.json(allDrivers.rows);

    }catch(err){
        console.error(err.message);
    }
});

app.listen(5555, () => {
    console.log('server started on port 5555');
});