// SEEDER FILE - TO PROVIDE SAMPLE DATA IN A DATABASE


// IMPORTS
const db = require('../models');


// CREATE NEW PLACE
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/cityplace.webp',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee',
    pic: '/images/greenplace.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!'); // resolves in success
    process.exit();
})
.catch(err => {
    console.log('Failure!'); // resolves in failure
    process.exit();
}); 



