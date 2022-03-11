// import react
const React = require('react')

// create def function for the HTML code that is the same on all pages
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }

// export def function
module.exports = Def