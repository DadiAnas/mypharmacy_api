const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drugSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  information: {
      type: String,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  ordennance:{
    type: Boolean,
    required: true,
    default: false,
  }
}, {
  timestamps: true,
});

const Drug = mongoose.model('Drug', drugSchema);

module.exports = Drug;