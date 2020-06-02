const mongoose = require('mongoose');

const DirectorySchema = new mongoose.Schema({
  thumbnail: String,
  city: String,
  address: String,
  president: String,
  phone: String,

  initials: [String],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true,
  },
});

DirectorySchema.virtual('thumbnail_url').get(function () {
  return `http://192.168.15.58:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Directory', DirectorySchema);