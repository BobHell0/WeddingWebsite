import mongoose from 'mongoose';
import { mongoDB_password } from './mongoDB_password.js';
const uri = `mongodb+srv://bokchoyjunior:${mongoDB_password}@bobcluster.ky1jw4p.mongodb.net/?retryWrites=true&w=majority&appName=BobCluster`;

import IndivGuest from './src/model/IndivGuest.js';
import IdToGuests from './src/model/IdToGuests.js';

export async function connectToMongo() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to mongo");
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function find(name, query, cb) {
  mongoose.connection.db.collection("GuestToId", function (err, collection) {
    collection.find(query).toArray(cb);
  });
}