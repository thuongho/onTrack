var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    inspirationModel = require('../models/Inspiration');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('onTrack db opened');
  });

  userModel.createDefaultUsers();
  inspirationModel.createDefaultInspirations();
  
};

