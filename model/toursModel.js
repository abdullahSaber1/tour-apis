const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is require'],
    unique: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxGroupSize: {
    type: Number,
    default: 50,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'difficult'],
  },
  ratingsQuantity: {
    type: Number,
  },
  summary: {
    type: String,
  },
  description: {
    type: String,
  },
  imageCover: {
    type: String,
  },
  images: {
    type: [String],
  },
  startDates: {
    type: [Date],
  },
});

const TourModel = mongoose.model('tour', tourSchema);

module.exports = TourModel;
