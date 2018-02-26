const passport = require('passport');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Product = mongoose.model('products');

module.exports = (app) => {
  app.post('/api/products', requireLogin, async (req, res) => {
    const {
      type, name, price, style, description, images, sku,
    } = req.body;

    const userProduct = await new Product({
      type,
      name,
      utilName: name.toLowerCase(),
      price,
      style,
      description,
      images,
      sku,
    }).save();

    console.log(userProduct);
    res.send(userProduct);
  });

  app.get('/api/products', async (req, res) => {
    const products = await Product.find().select({
      description: false,
      sku: false,
      Date: false,
    });

    // console.log(products);

    res.send(products);
  });

  app.get('/api/product_item', async (req, res) => {
    const products = await Product.find({ utilName: req.query.productItemQuery }).limit(1);

    // console.log(req.query.productItemQuery);
    // if (products.length === 0) {
    //   products = null;
    // }

    res.send(products);
  });
};
