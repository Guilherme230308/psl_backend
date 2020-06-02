const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  date: String,
  text: String,
  city: String,
  sender: String,
  receiver: String
});

module.exports = mongoose.model('Message', MessageSchema);