const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    _id: {
      type: String,
      required: true
    },
    type: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Genre', genreSchema)
