const mongoose = require('mongoose');
const LesmesPlayer = require('./LesmesPlayer');

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

module.exports = mongoose.model('LesmesPlayer', playerSchema);
