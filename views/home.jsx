// import react and def function created in default.jsx
const React = require('react')
const Def = require('./default')

// create stub function
function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
    )
  }

// export stub function
module.exports = home
