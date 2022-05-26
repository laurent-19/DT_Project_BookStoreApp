const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  style: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('teams', teamSchema)