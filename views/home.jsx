// RENDERS HOME PAGE IN HTML:

// IMPORTS
const React = require('react')
const Def = require('./default')

// STUB FUNCTION
function home () {
    return (
      <Def>
        <main>
            <h1>REST-Rant</h1>
            <div>
                <img id="fire" src="/images/fire.jpg" alt="wood fire" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Tirza van Dijk</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
            </main>
        </Def>
    )
  }


// EXPORTS
module.exports = home
