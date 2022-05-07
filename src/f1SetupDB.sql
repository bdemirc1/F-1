create table circuits
(
    circuitId  INT,
    circuitRef varchar(100),
    name       varchar(100),
    location   varchar(50),
    country    varchar(50),
    lat        DECIMAL(8,4),
    lng        DECIMAL(8,4),
    alt        INT,
    url        varchar(1000)
);

Alter table circuits add primary key(circuitId);

INSERT INTO circuits VALUES (78, 'losail', 'Losail International Circuit',  'Al Daayen', 'Qatar', 25.49, 51.4542, Null, 'http://en.wikipedia.org/wiki/Losail_International_Circuit' );
INSERT INTO circuits VALUES (79, 'miami', 'Miami International Autodrome',  'Miami', 'United States', 25.9581, -80.2389, Null, 'https://en.wikipedia.org/wiki/Miami_International_Autodrome' );

create table seasons
(
    year varchar(10),
    url  varchar(1000)
);

ALTER TABLE seasons ADD PRIMARY KEY(YEAR);

create table races
(
    raceId    INT primary key,
    year        varchar(10) references seasons(year),
    round       INT,
    circuitId INT references circuits(circuitId),
    name        varchar(50),
    date        varchar(25),
    time        varchar(25),
    url         varchar(1000)
);

create table constructors
(
    constructorId  INT primary key,
    constructorRef varchar(100),
    name             varchar(100),
    nationality      varchar(100),
    url              varchar(1000)
);

create table drivers
(
    driverId  INT primary key,
    driverRef varchar(100),
    number    INT,
    code      char(5) default 'NUL',
    forename    varchar(20),
    surname     varchar(20),
    dob         varchar(20),
    nationality varchar(50),
    url         varchar(1000)
);

SELECT * from drivers where driverId = 43;

create table constructor_standings
(
    constructorStandingsId INT primary key ,
    raceId                 INT references races(raceId),
    constructorId         INT references  constructors(constructorId),
    points                   INT,
    position                 INT,
    positionText           char(5),
    wins                     INT
);

create table driver_standings
(
    driverStandingsId INT primary key ,
    raceId            INT references races(raceId),
    driverId          INT references drivers(driverId),
    points              INT,
    position            INT,
    positionText      char(5),
    wins                INT
);

alter table driver_standings add unique(raceId, driverId);

create table constructor_results
(
    constructorResultsId INT primary key ,
    raceId               INT references races(raceId),
    constructorId        INT references constructors(constructorId),
    points                 INT,
    status                 varchar(20)
);

create table pit_stops
(
    raceId     INT references races(raceId),
    driverId   INT references drivers(driverId),
    stop       char(2),
    lap        char(2),
    time         varchar(25),
    duration     varchar(25),
    milliseconds varchar(25)
);

alter table pit_stops add primary key (raceId, driverId, stop);

select * from drivers where driverId= 20;

create table lap_times
(
    raceId     INT references races(raceId),
    driverId   INT references drivers(driverId),
    lap          INT,
    position     INT,
    time         varchar(25),
    milliseconds varchar(25)
);

alter table lap_times add primary key (raceId, driverId, lap);

create table status
(
    statusId INT primary key,
    status     varchar(50)
);

create table qualifying
(
    qualifyId     INT primary key,
    raceId        INT references races(raceId),
    driverId      INT references drivers(driverId),
    constructorId INT references constructors(constructorId),
    number          INT,
    position        INT,
    q1              varchar(25),
    q2              varchar(25),
    q3              varchar(25)
);

select * from drivers where driverId = 1;

create table results
(
    resultId        INT primary key ,
    raceId          INT references races(raceId),
    driverId        INT references drivers(driverId),
    constructorId   INT references constructors(constructorId),
    number            INT,
    grid              INT,
    position          INT,
    positionText    char(5),
    positionOrder   INT,
    points            INT,
    laps              INT,
    time              varchar(25),
    milliseconds      varchar(25),
    fastestLap      INT,
    rank             INT,
    fastestLapTime  varchar(25),
    fastestLapSpeed varchar(25),
    statusId        INT references status(statusId)
);

