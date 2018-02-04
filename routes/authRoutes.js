const passport = require('passport');
const mongoose = require('mongoose');
const User =  mongoose.model('users');

module.exports = (app) => {

  app.post('/api/login',
    passport.authenticate('local'),
    (req, res) => {
      res.sendStatus(201);
      console.log('authentication successful');
      console.log(req.user || 'no user');
    }
  );

  app.post('/api/signup', (req, res) => {

    // console.log(req.body);

    const { username, email, password } = req.body;

    const user = new User({
      username,
      email,
      password
    }).save();

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
