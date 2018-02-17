const passport = require('passport');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Product = mongoose.model('products');

module.exports = (app) => {
  app.post('/api/products', requireLogin, async (req, res) => {
    const {
      type, name, price, style, description, sku,
    } = req.body;

    const userProduct = await new Product({
      type,
      name,
      price,
      style,
      description,
      sku,
    }).save();

    console.log(userProduct);
    res.send(userProduct);
  });

  app.get('/api/products', async (req, res) => {
    const products = await Product.find();

    console.log(products);

    res.send(products);
  });
};
