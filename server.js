import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express from 'express';
import cors from 'cors';
import path from 'path';

import { connectToMongo, getAllGuests, getFamily, getTable, setNewRsvpStatus } from './databaseFunctions.js';
import { guestList_password } from './guestListPassword.js';
import { guestList_fileName } from './guestListFileName.js';

const app = express();
// const path = require('path');

const PORT = 3000;

// Middleware
app.use(cors({ origin: "*" }));

app.use(express.json());

app.use(express.urlencoded({ extended: false, limit: 10000, parameterLimit: 2 }));

// app.use(express.static(path.join(__dirname, 'public')));

await connectToMongo();

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

app.get('/checkLogin/:name', async (req, res) => {
  const name = req.params.name.toLowerCase();
  const groupId = await getAllGuests(name)

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

app.put('/setRsvpStatus/:groupId', async (req, res) => {
  try {
    const groupId = req.params.groupId;
    console.log(req.body)
    const rsvpStatus = req.body.rsvpStatus
    await setNewRsvpStatus(groupId, rsvpStatus)
    res.json({
      message: 'Successful'
    })

  } catch (error) {
    console.error(error.message)
    res.json({
      message: 'Fail'
    });
  }
})

app.get('/guestList/:password', async (req, res) => {
  try {
    const password = req.params.password;
    if (password != guestList_password) {
      res.json("That is not the way")
    }
    await getTable()
    res.download(guestList_fileName);
  } catch (error) {
    console.error("Error at get(/guestList/:password");
    console.error(error.message);
  }
})

app.listen(PORT);
console.log(`Listening on port ${PORT}`);