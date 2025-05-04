const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  plugins: [
    new Dotenv({
      path: '.env',
      safe: true,
      systemvars: true,
      defaults: true
    })
  ]
}; 