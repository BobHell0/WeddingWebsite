import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express from 'express';
import cors from 'cors';
import path from 'path';

import { connectToMongo, getAllGuests, getFamily } from './databaseFunctions.js';

const app = express();
// const path = require('path');

const PORT = 3000;

// Middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false, limit: 10000, parameterLimit: 2 }));

// app.use(express.static(path.join(__dirname, 'public')));

connectToMongo();

/////////// Routes ////////////
app.get('/', (req, res) => {
  res.json({ message: "Hello" });
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/checkLogin', (req, res) => {
  res.json({ GroupID: -1 })
})

app.get('/checkLogin/:email', async (req, res) => {
  const email = req.params.email.toLowerCase();
  console.log(email)
  const groupId = await getAllGuests(email)
  if (groupId == -1) {
    console.log("ERROR: EMAIL NOT SET")
  } else {
    console.log(`GROUP ID = ${groupId}`)
  }

  res.json({ GroupID: groupId })

})

app.get('/getFamily/:groupId', async (req, res) => {
  try {
    const groupId = parseInt(req.params.groupId);
    const familyDetails = await getFamily(groupId)
    console.log(familyDetails);
    res.json({
      details: {
        names: familyDetails.names,
        coming: familyDetails.coming
      }
    })
  } catch (e) {
    console.error(e.message)
  }
})


app.listen(PORT);
console.log(`Listening on port ${PORT}`);