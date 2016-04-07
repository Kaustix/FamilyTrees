import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
    id: String,
    token: String,
    email: String,
    username: String
});

const User = mongoose.model("User", UserSchema);
export {User};
