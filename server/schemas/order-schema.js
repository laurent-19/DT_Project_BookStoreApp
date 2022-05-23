const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  quantity: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('orders', orderSchema)