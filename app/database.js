import config from './config.js';
import mongoose from 'mongoose';

export function Connect() {
    mongoose.connect(config.connectionString);

    var db = mongoose.connection;

    db.on("error", console.error.bind(console, "Database Connection Error:"));
    db.once("open", () => {
        console.log("Database Connected");
    });
}