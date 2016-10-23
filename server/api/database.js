const config = require('./config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

exports.Connect = () => {
    mongoose.connect(config.connectionString);

    var db = mongoose.connection;

    db.on("error", console.error.bind(console, "Database Connection Error:"));
    db.once("open", () => {
        console.log("Database Connected");
    });
};