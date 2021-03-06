// RENDERS AN INDEX HTML PAGE FOR LISTING THE DATA:

// IMPORTS
const React = require('react');
const Def = require('../default'); // require default.jsx page to use as a default html set-up & setting it to a variable to use below.

// STUB FUNCTION
function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div key={index} className="col-sm-6">
          <h2>
              <a href={`/places/${place.id}`}>
                  {place.name}
              </a>
          </h2>
          <p className="text-center">
              {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
              Located in {place.city}, {place.state}
          </p>
        </div>
      );
    });
      return (
      <Def>
          <main>
              <h1>Places to Rant and Rave About!</h1>
              <div className="row">
                {placesFormatted}
              </div>
              <a href="/">
                  <button className="btn-primary">Home Page</button>
              </a>
          </main>
      </Def>
      )
  }


  // EXPORTS
  module.exports = index