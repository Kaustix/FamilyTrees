var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PersonSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: String,
    gender: String,
    occupation: String,
    birth: {
        date: Date,
        city: String,
        country: String
    },
    burial: {
        date: Date,
        city: String,
        country: String,
    },
    partner: {
        id: mongoose.Schema.Types.ObjectId,
        first_name: String,
        last_name: String,
        children: [{
            id: mongoose.Schema.Types.ObjectId,
            first_name: String,
            last_name: String
        }]
    },
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model("Person", PersonSchema);