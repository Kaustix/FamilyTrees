import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
    id: String,
    token: String,
    email: String,
    username: String,
    created_at: Date,
    updated_at: Date
});

export default UserModel = mongoose.model("User", UserSchema);
