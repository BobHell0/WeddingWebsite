import mongoose from 'mongoose';
import { mongoDB_password } from './mongoDB_password.js';
const uri = `mongodb+srv://bokchoyjunior:${mongoDB_password}@bobcluster.ky1jw4p.mongodb.net/?retryWrites=true&w=majority&appName=BobCluster`;

import GuestToId from './src/model/IndivGuest.js';
import IdToGuests from './src/model/IdToGuests.js';
import fs from 'fs'
import { guestList_fileName } from './guestListFileName.js';


export async function connectToMongo() {
  try {
    await mongoose.connect(uri, { dbName: "GuestInfo" });
    console.log("Connected to mongo");
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function getAllGuests(name) {
  const lookup = await GuestToId.find({ name: name })
  if (lookup.length === 0) {
    return -1
  } else {
    return lookup[0].groupId;
  }
}

export async function getFamily(groupId) {
  console.log(`Id = ${groupId}; type = ${typeof (groupId)}`);
  const lookup = await IdToGuests.find({ groupId: groupId });

  return {
    coming: lookup[0].coming,
    names: lookup[0].names
  }
}

export async function setNewRsvpStatus(groupId, rsvpStatus) {
  try {
    const filter = { groupId: groupId }
    const updateDoc = {
      $set: {
        coming: rsvpStatus
      },
    };

    const result = await IdToGuests.updateOne(filter, updateDoc);
    return result;
  } catch (error) {

    console.error(`Error thrown at databaseFunctions.js - setNewRsvpStatus`)
    console.log(error.message)
  }
}

export async function getTable() {
  try {
    const lookup = await IdToGuests.find()
    // console.log(lookup)
    const table = []
    for (const family of lookup) {
      for (const i in family.coming) {
        console.log(`${family.names[i]} | ${family.coming[i]}`)
        table.push({ name: family.names[i], rsvp: family.coming[i] });

      }
    }

    const dataCSV = table.reduce((acc, guest) => {
      acc += `${guest.name}, ${guest.rsvp}\n`;
      return acc;
    },
      `name, rsvp\n` // column names for csv
    );

    fs.writeFileSync(`${guestList_fileName}`, `${dataCSV}\n`); // remove /n if you dont want new line at the end 

    // finally, write csv content to a file using Node's fs module
  } catch (error) {
    console.error(`Error thrown at databaseFunctions.js - getTable`)
    console.log(error.message)
  }
}
