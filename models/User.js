const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
});

// checking if password is valid
userSchema.methods.validPassword = function validPassword(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre('save', function hashPassword(next) {
  try {
    console.log(this.password);
    bcrypt
      .hash(this.password, 10)
      .then((result) => {
        // success
        this.password = result;
        console.log(this.password);
        next();
      })
      .catch((err) => {
        // error
        next(err);
      });
  } catch (err) {
    // error
    next(err);
  }
});

mongoose.model('users', userSchema);
