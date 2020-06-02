const News = require('../models/News');

module.exports = {
  async show(req, res) {

    const news = await News.find();

    return res.json(news);
  
  }
  
}