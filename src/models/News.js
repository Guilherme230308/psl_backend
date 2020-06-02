const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  thumbnail: String,
  text: String
    
}, {
  toJSON: {
    virtuals: true,
  },
});

NewsSchema.virtual('thumbnail_url').get(function () {
  return `http://192.168.15.58:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('News', NewsSchema);