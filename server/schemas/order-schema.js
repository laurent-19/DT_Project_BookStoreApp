const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  bookId: {
    type: String,
    required: false,
  },
  time: {
    type: Date,
    required: false,
  },
})

module.exports = mongoose.model('orders', orderSchema)