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

if (env === 'development') {
  mongoose.connect('mongodb://localhost/ontrack');
} else {
  mongoose.connect('mongodb://sam:ontrack098@ds037185.mongolab.com:37185/ontrack');  
}

var db = mongoose.connection;

// listen to events on mongodb
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('ontrack db opened');
});

// mongoose schema
var messageSchema = mongoose.Schema({message: String});
// model
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
  mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
})

// route
app.get('*', function(req, res) {
  res.render('index', {
    mongoMessage: mongoMessage
  });
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('listening on port' + port + '...');