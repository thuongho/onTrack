var express = require('express'),
    favicon = require('serve-favicon');
    
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.use(favicon(__dirname + '/public/favicon.ico'));

app.listen(config.port);
console.log('listening on port' + config.port + '...');