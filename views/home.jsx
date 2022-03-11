// import react and def function created in default.jsx
const React = require('react')
const Def = require('./default')

// create stub function
function home () {
    return (
      <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img id="fire" src="/images/fire.jpg" alt="wood fire" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Tirza van Dijk</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>      </Def>
    )
  }

// export stub function
module.exports = home
