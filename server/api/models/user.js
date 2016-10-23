var mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    id: String,
    token: String,
    email: String,
    username: String,
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model("User", UserSchema);
