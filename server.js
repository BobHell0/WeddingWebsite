import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
// const path = require('path');

import { getDatabaseRows } from './backend_functions.mjs';

const PORT = 3000;

// Middleware
app.use(cors());

app.use(express.urlencoded({ 
    extended: false,
    limit: 10000,
    parameterLimit: 2 
}));
 

app.use(express.static('frontend/home'));
app.use(express.static('frontend/loginPage'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/home/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/loginPage/login.html'));
});

app.post('/login-submission', async (req, res) => {

    const { firstName, lastName } = req.body;


    // randomFunction();

    const db = await getDatabaseRows();

    console.log(db);

    const guest = db.find((curr) => {
        if (curr[0].toLowerCase() === firstName.toLowerCase() 
            && curr[1].toLowerCase() === lastName.toLowerCase()) {
            return curr;
        }
    });

    if (guest === undefined) console.log(':(');
    else console.log(':D');

    res.send("json");

});


app.listen(PORT);
console.log(`Listening on port ${PORT}`);