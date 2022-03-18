// MODEL DATA:

// IMPORTS
const mongoose = require('mongoose');

// SCHEMA
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    founded: Number
});



// EXPORTS
module.exports = mongoose.model('Place', placeSchema)