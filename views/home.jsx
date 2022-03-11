// import react and def function created in default.jsx
const React = require('react')
const Def = require('./default')

// create stub function
function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
      </Def>
    )
  }
// export stub function
module.exports = home
