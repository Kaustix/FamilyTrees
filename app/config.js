///**
// * Millis conversions cheat sheet:
// * 1 second: 1000
// * 1 minute: 60000
// * 10 minutes: 600000
// * 30 minutes: 1800000
// * 1 hour: 3600000
// * 12 hours: 43200000
// * 24 hours: 86400000
// * 1 week: 604800000
// */

import configuration from '../config.json';

let env = process.env.NODE_ENV || "development";
let config = configuration[env];

export default config;