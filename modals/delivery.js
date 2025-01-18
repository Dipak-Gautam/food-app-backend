const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  deliveredBy: {
    type: String,
    required: true,
  },
  orderedBy: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Delivery = mongoose.model("Delivery", deliverySchema);
module.exports = Delivery;
