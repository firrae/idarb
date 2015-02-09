var router = require('express').Router()

var Twit = require('twit')

var T = new Twit({
    consumer_key:         'ak7mWMVE0VCyBN1V7pciimLNz',
    consumer_secret:      '7MwQ6wPQj3Jiyd36IpQgKXCdQegC4UbFYSUwoCbk5rJlCgni5U',
    access_token:         '3011957180-dE5SIUuBD4DZzMpRaHQIOFYBCXPFUutYVpUCTTc',
    access_token_secret:  'Sekxcgmq6v3Eu97RCdcrKd43gnxPscY5CYzqlQHgBvcm6'
})

router.post('/', function(req, res, next) {
    console.log('creating')
    T.post('statuses/update', { status: req.body.body }, function(err, data, response) {
        if(err)
        {
            return next(err)
        }
        else
        {
            console.log(req.body.body)
        }
    })
    console.log(req)
    console.log('created')
    res.status(201).json(T)
})

module.exports = router