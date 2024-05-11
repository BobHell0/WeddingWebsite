import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const GuestToIdSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    groupId: Number,
  },
  { collection: "GuestToId" }
);

const GuestToId = model('GuestToId', GuestToIdSchema);
export default GuestToId;