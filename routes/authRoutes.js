const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcrypt');

module.exports = app => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.sendStatus(201);
    console.log('authentication successful');
    console.log(req.user || 'no user');
  });

  app.post('/api/signup', (req, res, done) => {
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        console.log('Error has happened');
        return done(err);
      }
      if (user) {
        console.log('Email already exisits in DB');
        return done(err);
      }
      if (!user) {
        const { username, email, password } = req.body;
        const user = new User({
          username,
          email,
          password
        }).save();
      }
    });

    res.send({});
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
