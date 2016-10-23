var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var database = require('./api/database');
var routes = require('./api/routes');
database.Connect();

const port = process.env.port || 8080;
const app =  express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    next();
});

app.use('/', routes);

app.listen(port, () => {
    console.log("Listening on Port: " + port);
});