const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true // Para pegar variáveis de ambiente do sistema também
    })
  ]
}; 