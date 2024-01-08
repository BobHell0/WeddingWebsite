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

app.use(express.json());

app.use(express.urlencoded({ extended: false, limit: 10000, parameterLimit: 2 }));
 
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/views/home.html'));

});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post('/login-submission', async (req, res) => {
    console.log(req.body);
    const firstName = req.body.firstName
    const lastName = req.body.lastName;
    
    console.log(firstName);

    const db = await getDatabaseRows();

    console.log(db);

    const guest = db.find((curr) => {
        if (curr[0].toLowerCase() === firstName.toLowerCase() 
            && curr[1].toLowerCase() === lastName.toLowerCase()) {
            return curr;
        }
    });

    if (guest === undefined) {
        console.log(':(');
        return res.status(401).send({ message: 'Invalid login' })
    } else {
        console.log(':)')
        console.log(__dirname)
        return res.status(200).send({ message: 'Successful login' })
    }
});


app.listen(PORT);
console.log(`Listening on port ${PORT}`);