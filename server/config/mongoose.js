var mongoose = require('mongoose'),
    crypto = require('crypto');

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
    username: String,
    salt: String,
    hashed_pwd: String
  });
  userSchema.methods = {
    authenticate: function(passwordToMatch) {
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  }

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'sam');
      User.create({firstName: 'Sam', lastName: 'Ho', username: 'sam', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'thuong');
      User.create({firstName: 'Thuong', lastName: 'Smith', username: 'thuong', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'cong');
      User.create({firstName: 'Cong', lastName: 'Trinh', username: 'cong', salt: salt, hashed_pwd: hash});
    }
  })
}

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pwd).digest('hex');
}