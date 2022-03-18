// IMPORTS
const router = require("express").Router(); 
// const places = require('../models/places.js'); // ^ used as selectors too.
const db = require('../models');

// INDEX ROUTE
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
});

// CREATE NEW PLACE ROUTE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});

// NEW PLACE INPUT PAGE ROUTE (must be placed above the show route)
router.get('/new', (req, res) => {
    res.render('places/new')
});

// EDIT PAGE ROUTE (must be placed above the show route)
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    // res.render("places/edit", { place: places[id], index: req.params.id });
    res.send('GET, edit form stub')
  }
});

// SHOW PAGE ROUTE
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});

// UPDATE PLACE ROUTE
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      // res.redirect(`/places/${id}`)
      res.send('PUT, /places/:id stub')
  }
});

// DELETE PLACE ROUTE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1);
    // res.redirect('/places')
    res.send('DELETE, /places/:id stub')
  }
});

// CREATE A RANT (comment) PAGE ROUTE
router.post("/:id/rant", (req, res) => {
  let id = req.params.id;
  res.send("Create a rant (comment) about a particular place");
});

// DELETE A RANT (comment) PAGE ROUTE
router.delete("/:id/rant/:rantId", (req, res) => {
  let id = req.params.id;
  let rantId = req.params.rantId;
  res.send("Delete a rant (comment) about a particular place");
});


// EXPORTS
module.exports = router;