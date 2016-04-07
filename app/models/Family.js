import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let FamilySchema = new Schema({
    _husband: { type: Schema.Types.ObjectId, ref: 'Person' },
    _wife: { type: Schema.Types.ObjectId, ref: 'Person' },
    _children: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    created_at: Date,
    updated_at: Date
});

export default FamilyModel = mongoose.model("Family", FamilySchema);