// require .env file with config method:
require('dotenv').config();

// require express:
const express = require('express');

// create app variable:
const app = express();

// import router from places.js:
app.use('/places', require('./controllers/places'));

// initialize the app variable with .get:
app.get('/', (req, res) => {
    res.send('Helllllooo Therrrrrre!')
});

// make another route for 404 alert:
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 Page, Not Found!</h1>`)
});

// runs the server on specific port, set with .env:
app.listen(process.env.PORT)
console.log('I am wiiiiide awake!')