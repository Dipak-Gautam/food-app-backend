const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
