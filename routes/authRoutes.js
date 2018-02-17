const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

module.exports = (app) => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    // res.sendStatus(201);
    res.send(req.user);
    console.log('authentication successful');
    console.log(req.user || 'no user');
  });

  app.post('/api/signup', (req, res, done) => {
    User.findOne({ email: req.body.email }, async (err, user) => {
      if (err) {
        console.log('Error has happened');
        return done(err);
      }
      if (user) {
        console.log('Email already exists in DB');
        return done(err);
      }
      if (!user) {
        const {
          username, email, password, signUpKey,
        } = req.body;

        if (signUpKey !== keys.signUpKey) {
          return console.log("Sign up key doesn't match");
        }

        const userNew = await new User({
          username,
          email,
          password,
        }).save();
        console.log(userNew);
        res.send(userNew);
      }

      // return null;
    });

    // res.send({});
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/checkuser', (req, res) => {
    console.log(req.user || 'no user');
    res.redirect('/');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    console.log('logout successful');
    console.log(req.user || 'no user');
    res.redirect('/');
  });
};
