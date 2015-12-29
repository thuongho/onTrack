var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


function compile(str, path) {
  return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/ontrack');
var db = mongoose.connection;

// listen to events on mongodb
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('ontrack db opened');
});

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
})

// route
app.get('*', function(req, res) {
  res.render('index');
})

var port = 3000;
app.listen(port);
console.log('listening on port' + port + '...');