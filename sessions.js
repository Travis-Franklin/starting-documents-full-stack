

//this should be put in your index.js
const session = require('express-session');
const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore({}),
    secret: 'lalalalala1234lalalala'
}));

app.use((req, res, next) =>){
    console.log(req.session);
}


//sorta like nodemon, keeps you signed in so that you don't have to relog in while building. 
// required installs:
// npm install session-file-store
// npm i express-session