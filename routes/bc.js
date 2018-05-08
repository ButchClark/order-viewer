var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')


/* GET users listing. */
router.get('/', function(req, res, next) {

    mongoose.connect('mongodb://localhost/test')
    let db=mongoose.connection
    db.on('error', console.error.bind(console, 'connection error: '))
    db.once('open', function(){
        console.log('MONGO IS OPEN!')
    })

    res.json([{
        id: 1,
        bc: "Booboo"
    }, {
        id: 2,
        bc: "Thebear"
    }]);
});

module.exports = router;