var mongoose = require('mongoose');

var inspirationSchema = mongoose.Schema({
  title: { type: String, required: '{PATH} is required!' },
  endDate: { type: Date, required: '{PATH} is required!'},
  tags: [String]
});

var Inspiration = mongoose.model('Inspiration', inspirationSchema);

function createDefaultInspirations() {
  Inspiration.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      Inspiration.create({title: 'Run 5K marathon', endDate: new Date('2/1/2016'), tags: ['Health and Fitness']});
      Inspiration.create({title: 'Lose 30 lbs', endDate: new Date('5/1/2016'), tags: ['Health and Fitness']});
      Inspiration.create({title: 'Raise 20K for college', endDate: new Date('8/1/2016'), tags: ['Funding']});
    }
  })
}

exports.createDefaultInspirations = createDefaultInspirations;