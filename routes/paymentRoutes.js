const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecret);
const nodemailer = require('nodemailer');
const paymentConfirmation = require('../templates/paymentConfirmation');

module.exports = (app) => {
  app.post('/api/charge', (req, res) => {
    const amount = req.body.checkout.total;

    const amountInt = parseInt(req.body.checkout.total * 100);

    const token = req.body.token.id;

    const email = req.body.token.email;

    const cart = {
      customer: req.body.token.card.name,
      contact: email,
      subtotal: req.body.checkout.subtotal,
      tax: req.body.checkout.tax,
      shipping: req.body.checkout.shipping,
      total: req.body.checkout.total,
    };

    req.body.cart.forEach((item, index) => {
      cart[`item ${index + 1}`] = `${item.name} - ${item.style} - Quantity: ${
        item.quantity
      } - Unit Price: $${item.price}`;
    });

    // console.log(cart);

    console.log('token:', req.body.token);
    console.log('shipping:', req.body.shipping);
    // console.log('cart:', req.body.cart);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: keys.mailAddress,
        pass: keys.mailPassword,
      },
    });

    const mailOptions = {
      from: keys.mailAddress, // sender address
      to: email, // list of receivers
      subject: 'Order Confirmation', // Subject line
      html: paymentConfirmation(req.body.cart, req.body.checkout, req.body.shipping), // plain text body
    };

    // console.log('HTML String: ', paymentConfirmation(req.body.cart, req.body.checkout));

    const charge = stripe.charges
      .create({
        amount: amountInt,
        description: 'textiles',
        currency: 'usd',
        source: token,
        receipt_email: email,
        shipping: {
          name: req.body.shipping.shipping_name,
          address: {
            line1: req.body.shipping.shipping_address_line1,
            city: req.body.shipping.shipping_address_city,
            state: req.body.shipping.shipping_address_state,
            postal_code: req.body.shipping.shipping_address_zip,
            country: req.body.shipping.shipping_address_country,
          },
        },
        metadata: cart,
      })
      .then(transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
      }))
      .then(charge => res.send(charge));

    // space
  });
};
