const mongoose = require("mongoose");

const dropLocationSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  deliveryInstructions: {
    type: String,
  },
});

const orderSchema = new mongoose.Schema({
  pickup: {
    type: dropLocationSchema,
    required: true,
  },
  dropLocation: {
    type: dropLocationSchema,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  items: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  otpCode: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
