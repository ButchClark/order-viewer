var express = require('express');
var router = express.Router();

/* GET events listing. */
router.get('/', function (req, res, next) {

    console.log(`res: ${res}`)
    res.json({
            events: [{
                id: 1,
                username: "samsepi0l"
            }, {
                id: 2,
                username: "D0loresH4ze"
            }]
        }
    )
})

/* GET events/guids listing. */
router.get('/guids', function (req, res, next) {

    console.log(`res: ${res}`)
    res.json({ guids: ['123','234','345']})
})

module.exports = router;