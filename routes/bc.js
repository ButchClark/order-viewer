var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')


/* GET users listing. */
router.get('/', function (req, res, next) {

    mongoose.connect('mongodb://localhost/test')
    let db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error: '))
    db.once('open', function () {
        console.log('MONGO IS OPEN!')
    })

    var kittySchema = mongoose.Schema({name: String}, {collection: 'kitties'})

    kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name"
        console.log(`kitty.speak() - returning ${greeting}`)
    }

    var Kitten = mongoose.model('Kitten', kittySchema)

    var silence = new Kitten({name: 'Silence'})
    console.log(`Silence the kitty: ${silence.name}`)

    var fluffy = new Kitten({name: 'fluffy'})
    console.log('- calling fluffy.speak now()...')
    fluffy.speak()

    console.log('- calling fluffy.save() now...')
    fluffy.save(function(err,fluffy){
        if(err) return console.error(err)
        fluffy.speak()
    })

    console.log('- calling silence.save() now...')
    silence.save(function(err,silence){
        if(err) return console.error(err)
        console.log(' Silence should be saved now')
    })

    // console.log('------ calling Kitten.find()... ---------')
    // Kitten.find(function(err,respkittens){
    //     if(err) return console.error(err)
    //     console.log('**** Response from Kitten.find() *****')
    //     console.log(respkittens)
    // })

    // console.log(`=== JSON(kittens): ${JSON.stringify(kittens)}`)
    // console.log(`=== kittens.count(): ${kittens.count()}`)

    // The below works...

    // var kittyName = Kitten.findOne({name: 'Silence'}, 'name', function(err,respKitten){
    //     if(err) return console.error(err)
    //     console.log('>>> We got back a kitten')
    //     console.log(`respKitten.name: ${respKitten.name}`)
    //     return respKitten.name
    // })
    //
    // console.log(`---- Kitten back from Kitten.findOne() call  ${kittyName}`)
    //
    //
    //
    // console.log('=========================================')
    //
    // res.json(JSON.stringify(kittens));

});

module.exports = router;