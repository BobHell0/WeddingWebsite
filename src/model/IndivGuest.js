import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const IndivGuestSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    groupId: Number,
  },
  { collection: "GuestToId" }
);

const IndivGuest = model('IndivGuest', IndivGuestSchema);
export default IndivGuest;