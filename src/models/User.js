const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  surname: String,
  city: String,
  senha: String,
  confirmaSenha: String
});

module.exports = mongoose.model('User', UserSchema);