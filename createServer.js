const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const PORT = 3000;



server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

//required installs npm init -y, npm install -D nodemon, npm install express
//include in scripts: "dev": "nodemon index.js"