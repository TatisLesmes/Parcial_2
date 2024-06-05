const mongoose = require('mongoose');
const player = require('./LesmesPlayer');

const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  }
});

module.exports = mongoose.model('Player', playerSchema);
