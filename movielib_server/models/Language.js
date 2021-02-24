const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const langSchema = new Schema({
    _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Language', langSchema)
