const passport = require('passport');
const mongoose = require('mongoose');
const User =  mongoose.model('users');

module.exports = (app) => {

  // app.get('/api/login',
  // passport.authenticate(
  //   'local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }
  //   )
  // );

  app.post('/api/signup', (req, res) => {

    // console.log(req.body);

    const { username, email, password } = req.body;

    const user = new User({
      username,
      email,
      password
    }).save();

  });

  // app.get('/api/logout', (req, res) => {
  //   req.logout();
  //   res.redirect('/');
  // });

};
