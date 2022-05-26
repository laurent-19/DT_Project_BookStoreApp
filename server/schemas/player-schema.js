const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  teamId: {
    type: Number,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: true,
  },
  marketValue: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('players', playerSchema)