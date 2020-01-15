const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

//install
//npm i express-es6-template-engine
//must generate a templates based on app.set above
