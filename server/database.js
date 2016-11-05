import config from './config';
import mongoose from 'mongoose';

export function Connect() {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.connectionString);

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Database Connection Error:"));
    db.once("open", () => {
        console.log("Database Connected");
    });
}