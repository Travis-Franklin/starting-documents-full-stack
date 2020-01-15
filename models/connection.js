const pgp = require('pg-promise')({
    query: e => {
        console.log(`QUERY: ${e.query}`);
    }
});

const options = {
    host: 'localhost',
    database: 'fullstack-pets'
};

const db = pgp(options);
module.exports = db;




//require npm install pg-promise
//











// require 'pg-promise', but call it immediately
// so we can configure the connection
const pgp = require('pg-promise')({
    query: e => {
        // print the SQL query
        console.log(`QUERY: ${e.query}`);
    }
});

// next, give the info about our specific database
// that we're talking to
const options = {
    host: 'localhost',
    database: 'fullstack-pets'
};

const db = pgp(options);
module.exports = db;