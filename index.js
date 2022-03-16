// IMPORTS
const express = require('express');
const methodOverride = require('method-override');

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT

// SELECTORS
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views'); // grabs the views folder files.
app.set('view engine', 'jsx'); // sets view engine to JSX
app.engine('jsx', require('express-react-views').createEngine()); // requires REACT
app.use(express.static('public')); // access to public folder
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ROUTES:
// PLACES - Controller
app.use('/places', require('./controllers/places')); // anything with starting route: '/places' now comes from the controller.

// HOME ROUTE
app.get('/', (req, res) => {
    res.render('home')
});

// 404 ERROR
app.get('*', (req, res) => {
    res.render('error404')
});

// LISTEN:
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
console.log('I am wiiiiide awake!')