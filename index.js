// Dependencies:
const express = require('express');

// Configuration:
require('dotenv').config();
const PORT = process.env.PORT
const app = express();


// Routes:
app.get('/', (req, res) => {
    res.send('Helllllooo Therrrrrre!')
});

app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 Page, Not Found!</h1>`)
});

app.use('/places', require('./controllers/places'));


// Listen:
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
console.log('I am wiiiiide awake!')