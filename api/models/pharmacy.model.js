const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  information: {
      type: String,
  },
  apptitude: {
    type: Number,
    default: 0,
  },
  latitude:{
    type: Number,
    default: 0,
  },
  city: {
      type: String,
      required: true,
  }
}, {
  timestamps: true,
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;