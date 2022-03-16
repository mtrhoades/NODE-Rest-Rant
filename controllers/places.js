// IMPORTS
const router = require("express").Router(); 
const places = require('../models/places.js') // ^ used as selectors too.

// INDEX ROUTE
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/greenplace.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/cityplace.webp",
    },
  ];
  res.render("places/index", { places }); // renders the data into html.
});

// CREATE NEW PLACE ROUTE
router.post('/', (req, res) => {
    console.log(req.body)
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
    places.push(req.body)
    res.redirect('/places')
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
      res.render('places/edit', { place: places[id] });    
  }
});

// SHOW PAGE ROUTE
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id });    
    }
});

// UPDATE PLACE ROUTE
router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Update a particular place");
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
    res.redirect('/places')
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