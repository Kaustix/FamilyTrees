import mongoose from 'mongoose';
import Chronotope from './chronotope';

const PersonSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    gender: String,
    occupation: String,
    birth: Chronotope,
    death: Chronotope,
    //marriage: {
      //  partner: { type: mongoose.Schema.ObjectId, ref: 'Person'},
       // children: [{ type: mongoose.Schema.ObjectId, ref: 'Person' }]
    //}
});

const Person = mongoose.model("Person", PersonSchema);
export default Person;