// make .router for requiring express:
const router = require('express').Router()

// make first route for places:
router.get('/', (req, res) => {
    res.send('Get your places here!')
});

// export router:
module.exports = router