import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const IdToGuestsSchema = new Schema(
  {
    groupId: Number,
    names: [String],
    coming: [String]
  },
  { collection: "IdToGuests" }
)

const IdToGuests = model('IdToGuests', IdToGuestsSchema);
export default IdToGuests;