import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import * as Database from './app/database.js';

Database.Connect();

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

app.listen(port, () => {
    console.log("Listening on Port: " + port);
});