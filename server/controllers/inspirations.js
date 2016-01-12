var Inspiration = require('mongoose').model('Inspiration');

exports.getInspirations = function(req, res) {
  Inspiration.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};