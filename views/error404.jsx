// RENDERS ERROR 404 PAGE IN HTML FOR ANYTHING ELSE TYPED IN ADDRESS BAR OTHER THAN THE PAGES WE HAVE TO VIEW.

// IMPORTS
const React = require('react')
const Def = require('./default')

// STUB FUNCTION
function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img id="cat404" src="/images/cat404.jpg" alt="animated cat" />
            </div>
          </main>
      </Def>
    )
  }


// EXPORTS
module.exports = error404