import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './server/schema/schema';
import * as Database from './server/database';

Database.Connect();

const port = process.env.port || 8080;
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    next();
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
}));

app.listen(port, () => {
    console.log("Listening  on Port: " + port);
});