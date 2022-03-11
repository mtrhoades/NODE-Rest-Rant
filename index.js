// Dependencies:
const express = require('express');

// Configuration:
require('dotenv').config();
const PORT = process.env.PORT
const app = express();


// Routes:
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.render('error404')
});

app.use('/places', require('./controllers/places'));


// Listen:
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
console.log('I am wiiiiide awake!')