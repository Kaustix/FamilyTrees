import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    first_name: String,
    last_name: String,
    gender: String,
    occupation: String,
    born_date: Date,
    born_city: String,
    born_country: String,
    burial_date: Date,
    burial_city: String,
    burial_country: String,
    _father: { type: Schema.Types.ObjectId, ref: 'Person' },
    _mother: { type: Schema.Types.ObjectId, ref: 'Person' },
    created_at: Date,
    updated_at: Date
});

export default PersonModel = mongoose.model("Person", PersonSchema);
