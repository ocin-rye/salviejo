// const prod = require('./prod');
// const dev = require('./dev');

if (process.env.NODE_ENV === 'production') {
  const prod = require('./prod');
  module.exports = prod;
} else {
  const dev = require('./dev');
  module.exports = dev;
}
