const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Service price is required'],
    min: [0, 'Price must be a positive number']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);
