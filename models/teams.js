const mongoose = require('mongoose');
const teams = require('./teams');


const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  titles: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Team', teamSchema);
