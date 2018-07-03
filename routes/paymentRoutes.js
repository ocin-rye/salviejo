const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecret);

module.exports = (app) => {
  app.post('/api/charge', (req, res) => {
    const amount = 500;

    console.log('Request Body:', req.body);

    const token = req.body.id;

    const email = req.body.email;

    console.log('token:', req.body.id);

    // const token = req.body;

    const charge = stripe.charges
      .create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        source: token,
        receipt_email: email,
      })
      .then(charge => res.send(charge));

    // space
  });
};
