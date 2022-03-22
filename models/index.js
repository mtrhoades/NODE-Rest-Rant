// FOR CONNECTING TO MONGOOSE:

// IMPORTS
const mongoose = require('mongoose');
require('dotenv').config(); // require .env file

// CONNECTION
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});


// EXPORTS
module.exports.Place = require('./places')