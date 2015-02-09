var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 5000));

app.use('/api/posts', require('./controllers/api/posts'))
app.use(require('./controllers/static'))

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:', app.get('port'))
})