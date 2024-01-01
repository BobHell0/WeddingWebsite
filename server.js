const express = require('express')
const app = express();
const path = require('path');

const PORT = 3000;

// Middleware
app.use(express.static('frontend'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/home.html'));
});


app.listen(PORT);
console.log(`Listening on port ${PORT}`);