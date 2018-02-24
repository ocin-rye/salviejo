const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  type: String,
  name: String,
  utilName: String,
  price: String,
  style: [String],
  description: [String],
  images: [String],
  sku: String,
  date: { type: Date, default: Date.now() },
});

mongoose.model('products', productSchema);
