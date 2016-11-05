const configuration = require('./config.json');

const env = process.env.NODE_ENV || "development";
const config = configuration[env];

export default config;