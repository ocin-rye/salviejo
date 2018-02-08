const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const productSchema = new Schema({
  type: String,
  name: String,
  price: String,
  style: [String],
  description: [String],
  sku: String,
  Date: { type: Date, default: Date.now() }
});

mongoose.model('products', productSchema);
