// Selectors:
const router = require('express').Router()

// Index:
router.get('/', (req, res) => {
    res.send('Get your places here!')
});

// Show:

// export router:
module.exports = router