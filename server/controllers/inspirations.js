var Inspiration = require('mongoose').model('Inspiration');

exports.getInspirations = function(req, res) {
  Inspiration.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};

exports.getInspirationById = function(req, res) {
  Inspiration.findOne({ _id: req.params.id }).exec(function(err, inspiration) {
    res.send(inspiration);
  })
};