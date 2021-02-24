const mongoose = require('mongoose');
// const Genre = require('./Genre');
// const  Language = require('./Language');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    _id: {
    type: String,
    required: true
  },
  name: {
    type:String,
    required: true
  },
  genre: {
    type: Schema.Types.String,
    ref: "Genre"
  },
  year: Number,
  language: {
    type: Schema.Types.String,
    ref: "Language"
  },
  image: {
    type:String,
    required: true
  },
  // language: [{ type: Schema.Types.ObjectId, ref:'Language' }],
  // genre: [{ type: Schema.Types.ObjectId, ref:'Genre' }]
});

module.exports = mongoose.model('Movie', movieSchema)
