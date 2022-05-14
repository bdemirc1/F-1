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

app.get('/top_constructor', async(req, res) => {
    try{
        const topCons = await pool.query("select constructors.name, position from constructor_standings, constructors\
                                            where constructor_standings.constructorid = constructors.constructorid and\
                                             constructor_standings.raceid = 1067 and \
                                            constructor_standings.position = 1;");
        res.json(topCons.rows[0]);

    }catch(err){
        console.error(err.message);
    }
})

app.get('/top_driver', async(req, res) => {
    try{
        const topDriver = await pool.query("select drivers.forename, drivers.surname, position from driver_standings, drivers\
                                where driver_standings.driverid = drivers.driverid and\
                                driver_standings.raceid = 1067\
                                and driver_standings.position = 1;");
        res.json(topDriver.rows[0]);

    }catch(err){
        console.error(err.message);
    }
})


app.get('/fastestLapTime', async(req, res) => {
    try{
        const fastestLapTime = await pool.query("select code, fastestlaptime from results, drivers\
                                                where raceid = 1067 and drivers.driverid = results.driverid");
        if(fastestLapTime.rows?.length){
            console.log(fastestLapTime.rows)
            return res.json(fastestLapTime.rows);
        }

    }catch(err){
        console.error(err.message);
    }
});

app.get('/pitStops', async(req, res) => {
    try{
        const pitStops = await pool.query("select constructors.name, round (sum(pit_stops.milliseconds::numeric/1000)::numeric,2) as pit_stop_time from pit_stops, results, constructors\
                                            where pit_stops.raceid = 1067 and\
                                            pit_stops.driverid = results.driverid and\
                                            pit_stops.raceid = results.raceid and\
                                            constructors.constructorid = results.constructorid\
                                            group by constructors.name");
        if(pitStops.rows?.length){
            return res.json(pitStops.rows);
        }

    }catch(err){
        console.error(err.message);
    }
});


app.get('/drivers_standing', async(req, res) => {
    try{
        const drivers_standings = await pool.query("select forename, surname, position, dob, nationality, url from drivers, driver_standings where\
                                        driver_standings.raceid = 1067 and drivers.driverid = driver_standings.driverid\
                                        order by position;");
        if(drivers_standings.rows?.length){
            return res.json(drivers_standings.rows);
        }
    }catch(err){
        console.error(err.message);
    }
});

app.get('/constructor_standings', async(req, res) => {
    try{
        const constructor_standings = await pool.query("select name, position, nationality, url from constructor_standings, constructors\
                                                    where raceid = 1067 and constructor_standings.constructorid = constructors.constructorid\
                                                    order by position;");
        if(constructor_standings.rows?.length){
            return res.json(constructor_standings.rows);
        }
    }catch(err){
        console.error(err.message);
    }
});

//Last added drivers
app.get('/drivers', async(req, res) => {
    try{
        const drivers = await pool.query("select forename, surname, code, dob, nationality, url from drivers\
                                                     order by driverid desc limit 10;");
        if(drivers.rows?.length){
            return res.json(drivers.rows);
        }
    }catch(err){
        console.error(err.message);
    }
});

//Post new driver
app.post("/drivers", async(req, res) => {
    try {
      const {code, firstName, lastName, dob, nationality, url} = req.body;
      const newDriver = await pool.query("INSERT INTO drivers( driverref, code, forename, surname, dob, nationality, url)\
                            VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [ lastName, code, firstName, lastName, dob, nationality, url ])
        res.json(newDriver.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});



app.listen(5555, () => {
    console.log('server started on port 5555');
});