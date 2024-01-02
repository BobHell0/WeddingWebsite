const express = require('express')
const app = express();
const path = require('path');


const PORT = 3000;

// Middleware
app.use(express.static('frontend/home'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/home/home.html'));
});

app.get('/WeddingDetails', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/weddingDetails.html'));
});


app.listen(PORT);
console.log(`Listening on port ${PORT}`);