// Imports
var express = require('express')
var ejs = require('ejs')


var app = express();

app.use(express.static('public'))   // makes the app use the css, img, and js files in the public folder
app.set('view engine', 'ejs')   // tell express to set the view engine to ejs

app.listen(8080);

// localhost:8080
app.get('/', function(req, res) {
    res.render('pages/index')   // no need for views/pages/index because nodejs knows to look at the views folder
});