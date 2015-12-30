var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('onTrack db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String, 
    lastName: String,
    username: String
  });
  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      User.create({firstName: 'Sam', lastName: 'Ho', username: 'sam'});
      User.create({firstName: 'Thuong', lastName: 'Ho', username: 'thuong'});
      User.create({firstName: 'Cong', lastName: 'Trinh', username: 'cong'});
    }
  })
}