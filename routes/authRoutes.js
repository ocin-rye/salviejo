const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    // res.sendStatus(201);
    res.send(req.user);
    console.log('authentication successful');
    console.log(req.user || 'no user');
  });

  app.post('/api/signup', (req, res, done) => {
    User.findOne({ email: req.body.email }, (err, user) => {
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
        new User({
          username,
          email,
          password,
        }).save();
      }

      return null;
    });

    res.send({});
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
