const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Helllllooo Therrrrrre!')
});

app.listen(3000)
console.log('I am wiiiiide awake!')